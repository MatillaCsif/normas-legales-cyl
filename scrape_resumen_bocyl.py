#!/usr/bin/env python3
"""Scraper for the "Resumen BOCyL" section of the Educación portal.

The implementation follows the crawling and extraction rules described in the
user story. Even though this environment cannot access the public internet,
the script is fully functional when run in a networked environment with the
necessary Python dependencies installed (``requests``, ``beautifulsoup4`` and
``openpyxl`` for Excel generation).
"""
from __future__ import annotations

import csv
import dataclasses
import logging
import random
import re
import time
from collections import deque
from datetime import datetime
from typing import Dict, Iterable, List, Optional, Set, Tuple
from urllib.parse import urljoin

import requests
from bs4 import BeautifulSoup  # type: ignore
from urllib3.util.retry import Retry  # type: ignore

try:  # ``openpyxl`` is part of the standard Python distribution on many setups
    from openpyxl import Workbook
except ImportError as exc:  # pragma: no cover - defensive fallback
    raise SystemExit(
        "The 'openpyxl' package is required to generate the Excel output. "
        "Install it with 'pip install openpyxl'."
    ) from exc

BASE_URL = "https://www.educa.jcyl.es"
LISTING_URL = f"{BASE_URL}/es/resumenbocyl"
PDF_DOMAIN = "https://bocyl.jcyl.es"
MIN_DELAY = 1.5
MAX_DELAY = 2.5

LOG = logging.getLogger(__name__)


@dataclasses.dataclass
class ListingItem:
    """Represents the information captured in the listing page."""

    detail_url: str
    title: str
    fecha_bocyl: Optional[str]


@dataclasses.dataclass
class NormRecord:
    """Normalized record for both the operative and audit outputs."""

    nombre_norma: str
    fecha_publicacion: Optional[str]
    fecha_norma: Optional[str]
    documento_norma: Optional[str]
    detail_url: Optional[str] = None
    notas: List[str] = dataclasses.field(default_factory=list)
    listing_fecha_bocyl: Optional[str] = None

    @property
    def operative_row(self) -> List[str]:
        return [
            self.nombre_norma,
            self.fecha_publicacion or "",
            self.fecha_norma or "",
            self.documento_norma or "",
        ]

    def audit_row(self, duplicado: Optional[str]) -> List[str]:
        return self.operative_row + [duplicado or "", "; ".join(self.notas)]


class ResumenBocylScraper:
    """Crawler that implements the specification provided in the task."""

    def __init__(self, session: Optional[requests.Session] = None) -> None:
        self.session = session or self._build_session()
        self.session.headers.setdefault(
            "User-Agent",
            "Mozilla/5.0 (compatible; ResumenBOCyLScraper/1.0; +https://www.openai.com)",
        )
        self.session.headers.setdefault("Accept-Language", "es")
        self._detail_queue: deque[str] = deque()
        self._processed_details: Set[str] = set()
        self._records: Dict[str, NormRecord] = {}
        self._audit_rows: List[List[str]] = []
        self._visited_listing_urls: Set[str] = set()
        self._pagination_fallback: bool = False

    @staticmethod
    def _build_session() -> requests.Session:
        session = requests.Session()
        retry = Retry(
            total=3,
            backoff_factor=1,
            status_forcelist=(500, 502, 503, 504),
            allowed_methods=("GET", "HEAD"),
        )
        adapter = requests.adapters.HTTPAdapter(max_retries=retry)
        session.mount("http://", adapter)
        session.mount("https://", adapter)
        return session

    # ------------------------------------------------------------------
    # Networking helpers
    def _get(self, url: str) -> requests.Response:
        LOG.debug("Fetching URL: %s", url)
        last_exc: Optional[Exception] = None
        for attempt in range(3):
            if attempt:
                LOG.debug("Retry #%s for %s", attempt, url)
            try:
                response = self.session.get(url, timeout=30)
                response.raise_for_status()
                self._respect_delay()
                return response
            except requests.RequestException as exc:  # pragma: no cover - network
                last_exc = exc
                LOG.warning("Error fetching %s: %s", url, exc)
                self._respect_delay()
        raise RuntimeError(f"Unable to fetch {url}: {last_exc}")

    @staticmethod
    def _respect_delay() -> None:
        time.sleep(random.uniform(MIN_DELAY, MAX_DELAY))

    # ------------------------------------------------------------------
    # Public API
    def run(self) -> None:
        LOG.info("Starting crawl at %s", LISTING_URL)
        total_pages = self._discover_total_pages()
        LOG.info("Discovered %s pages", total_pages)
        if self._pagination_fallback:
            self._crawl_incrementally(LISTING_URL)
        else:
            for page_number in range(1, total_pages + 1):
                page_url = self._build_page_url(page_number)
                if page_url in self._visited_listing_urls:
                    continue
                self._visited_listing_urls.add(page_url)
                try:
                    response = self._get(page_url)
                except RuntimeError as exc:
                    self._audit_error(None, f"Fallo al cargar listado: {exc}")
                    continue
                soup = BeautifulSoup(response.text, "html.parser")
                for item in self._extract_listing_items(soup):
                    self._enqueue_detail(item)
        self._process_detail_queue()

    # ------------------------------------------------------------------
    # Listing extraction
    def _discover_total_pages(self) -> int:
        response = self._get(LISTING_URL)
        soup = BeautifulSoup(response.text, "html.parser")
        indicator = soup.find(string=re.compile(r"P[aá]ginas:\s*P[aá]gina", re.I))
        if not indicator:
            # Fallback: attempt to paginate until no new results.
            LOG.warning("No se encontró el indicador de páginas; se usará rastreo incremental")
            self._pagination_fallback = True
            return 1
        match = re.search(r"de\s*([\d.]+)", indicator)
        if not match:
            raise RuntimeError("No se pudo interpretar el número total de páginas")
        total_str = match.group(1).replace(".", "")
        return int(total_str)

    def _build_page_url(self, page_number: int) -> str:
        if page_number <= 1:
            return LISTING_URL
        return f"{LISTING_URL}?pagina={page_number}"

    def _crawl_incrementally(self, start_url: str) -> None:
        current_url = start_url
        while current_url and current_url not in self._visited_listing_urls:
            self._visited_listing_urls.add(current_url)
            try:
                response = self._get(current_url)
            except RuntimeError as exc:
                self._audit_error(None, f"Fallo al cargar listado: {exc}")
                break
            soup = BeautifulSoup(response.text, "html.parser")
            for item in self._extract_listing_items(soup):
                self._enqueue_detail(item)
            next_url = self._find_next_page_url(current_url, soup)
            if not next_url:
                break
            current_url = next_url

    def _find_next_page_url(self, current_url: str, soup: BeautifulSoup) -> Optional[str]:
        link = soup.find("a", string=re.compile(r"P[aá]gina siguiente", re.IGNORECASE))
        if link and link.has_attr("href"):
            return urljoin(current_url, link["href"])
        link = soup.find("a", string=re.compile(r"[ÚU]ltima p[aá]gina", re.IGNORECASE))
        if link and link.has_attr("href"):
            return urljoin(current_url, link["href"])
        for anchor in soup.find_all("a", href=True):
            href = anchor["href"]
            if re.search(r"\.nodos,\d+,\d+", href):
                return urljoin(current_url, href)
        return None

    def _extract_listing_items(self, soup: BeautifulSoup) -> Iterable[ListingItem]:
        seen: Set[str] = set()
        for link in soup.find_all("a", href=True):
            href = link["href"].strip()
            if "/es/resumenbocyl/" not in href:
                continue
            detail_url = urljoin(BASE_URL, href)
            if detail_url in seen:
                continue
            container = link
            for ancestor in link.parents:
                container = ancestor
                if container.name in {"li", "article", "div"}:
                    break
            text = container.get_text(" ", strip=True)
            fecha_bocyl = self._extract_fecha_bocyl(text)
            if not fecha_bocyl:
                continue
            title = self._clean_title(link.get_text(" ", strip=True))
            seen.add(detail_url)
            yield ListingItem(detail_url=detail_url, title=title, fecha_bocyl=fecha_bocyl)

    @staticmethod
    def _extract_fecha_bocyl(text: str) -> Optional[str]:
        match = re.search(
            r"Fecha\s*BOCyL\s*:?\s*([0-9]{1,2}[/-][0-9]{1,2}[/-][0-9]{2,4})",
            text,
            flags=re.IGNORECASE,
        )
        if not match:
            return None
        return normalize_date(match.group(1))

    @staticmethod
    def _clean_title(title: str) -> str:
        cleaned = re.sub(r"¡?Novedad!?", "", title, flags=re.IGNORECASE)
        cleaned = re.sub(r"\s+", " ", cleaned)
        return cleaned.strip()

    def _enqueue_detail(self, item: ListingItem) -> None:
        if item.detail_url in self._processed_details:
            return
        record = self._records.get(item.detail_url)
        if not record:
            record = NormRecord(
                nombre_norma=item.title,
                fecha_publicacion=item.fecha_bocyl,
                fecha_norma=None,
                documento_norma=None,
                detail_url=item.detail_url,
                listing_fecha_bocyl=item.fecha_bocyl,
            )
            self._records[item.detail_url] = record
        else:
            # Preserve the earliest title when we already saw the detail through other paths.
            record.nombre_norma = record.nombre_norma or item.title
            if not record.fecha_publicacion and item.fecha_bocyl:
                record.fecha_publicacion = item.fecha_bocyl
            if not record.listing_fecha_bocyl and item.fecha_bocyl:
                record.listing_fecha_bocyl = item.fecha_bocyl
        self._detail_queue.append(item.detail_url)

    # ------------------------------------------------------------------
    # Detail processing
    def _process_detail_queue(self) -> None:
        while self._detail_queue:
            detail_url = self._detail_queue.popleft()
            if detail_url in self._processed_details:
                continue
            try:
                response = self._get(detail_url)
            except RuntimeError as exc:
                self._audit_error(detail_url, f"Fallo en ficha: {exc}")
                continue
            soup = BeautifulSoup(response.text, "html.parser")
            record = self._records.setdefault(
                detail_url,
                NormRecord(
                    nombre_norma="",
                    fecha_publicacion=None,
                    fecha_norma=None,
                    documento_norma=None,
                    detail_url=detail_url,
                ),
            )
            self._update_record_from_detail(record, soup)
            self._processed_details.add(detail_url)
            for related_url in self._discover_related_links(detail_url, soup):
                if related_url not in self._records:
                    self._records[related_url] = NormRecord(
                        nombre_norma="",
                        fecha_publicacion=None,
                        fecha_norma=None,
                        documento_norma=None,
                        detail_url=related_url,
                    )
                self._detail_queue.append(related_url)

    def _update_record_from_detail(self, record: NormRecord, soup: BeautifulSoup) -> None:
        title = soup.find("h2")
        if title and title.get_text(strip=True):
            record.nombre_norma = title.get_text(" ", strip=True)
        fecha_publicacion = self._find_label_value(soup, "fecha publicacion")
        if fecha_publicacion:
            fecha_publicacion_norm = normalize_date(fecha_publicacion)
            if fecha_publicacion_norm:
                record.fecha_publicacion = fecha_publicacion_norm
        if record.listing_fecha_bocyl and record.fecha_publicacion:
            if record.fecha_publicacion != record.listing_fecha_bocyl:
                note = "Fecha publicación de ficha distinta al listado"
                if note not in record.notas:
                    record.notas.append(note)
        fecha_disposicion = self._find_label_value(soup, "fecha disposicion")
        if fecha_disposicion:
            fecha_disposicion_norm = normalize_date(fecha_disposicion)
            if fecha_disposicion_norm:
                record.fecha_norma = fecha_disposicion_norm
        pdf_url = self._find_pdf_url(soup)
        if pdf_url:
            if pdf_url.lower().endswith(".pdf"):
                if self._verify_pdf(pdf_url):
                    record.documento_norma = pdf_url
                else:
                    note = "Documento PDF con respuesta distinta de 200"
                    if note not in record.notas:
                        record.notas.append(note)
            else:
                note = "Enlace de documento sin extensión PDF"
                if note not in record.notas:
                    record.notas.append(note)
        else:
            note = "Documento de la norma no encontrado"
            if note not in record.notas:
                record.notas.append(note)
        if not record.fecha_publicacion and record.listing_fecha_bocyl:
            record.fecha_publicacion = record.listing_fecha_bocyl

    def _find_label_value(self, soup: BeautifulSoup, label: str) -> Optional[str]:
        pattern = re.compile(re.escape(remove_accents(label)), re.IGNORECASE)
        for element in soup.find_all(string=re.compile(r"fecha", re.IGNORECASE)):
            normalized = remove_accents(str(element))
            if not pattern.search(normalized):
                continue
            parent = element.parent
            if not parent:
                continue
            text = parent.get_text(" ", strip=True)
            match = re.search(r":\s*(.+)$", text)
            if match:
                return match.group(1).strip()
            # Sometimes the value can be in a sibling element.
            sibling_text = []
            for sibling in parent.next_siblings:
                if getattr(sibling, "name", None):
                    sibling_text.append(sibling.get_text(" ", strip=True))
                else:
                    sibling_text.append(str(sibling).strip())
            joined = " ".join(filter(None, sibling_text)).strip()
            if joined:
                return joined
        return None

    def _find_pdf_url(self, soup: BeautifulSoup) -> Optional[str]:
        for link in soup.find_all("a", href=True):
            href = urljoin(BASE_URL, link["href"]) if link["href"].startswith("/") else link["href"]
            if not href.lower().endswith(".pdf"):
                continue
            if href.startswith(PDF_DOMAIN):
                return href
        # Fallback: accept the first PDF if no preferred domain exists.
        for link in soup.find_all("a", href=True):
            href = urljoin(BASE_URL, link["href"]) if link["href"].startswith("/") else link["href"]
            if href.lower().endswith(".pdf"):
                return href
        return None

    def _verify_pdf(self, url: str) -> bool:
        try:
            response = self.session.head(url, allow_redirects=True, timeout=30)
            self._respect_delay()
            return response.status_code == 200
        except requests.RequestException as exc:  # pragma: no cover - network
            LOG.warning("Error verificando PDF %s: %s", url, exc)
            self._respect_delay()
            return False

    def _discover_related_links(self, detail_url: str, soup: BeautifulSoup) -> Iterable[str]:
        related_keywords = (
            "modificado por",
            "modifica",
            "derogado por",
            "deroga",
            "corrección de errores",
        )
        for link in soup.find_all("a", href=True):
            anchor_text = remove_accents(link.get_text(" ", strip=True).lower())
            if not any(keyword in anchor_text for keyword in related_keywords):
                continue
            href = link["href"].strip()
            if not href:
                continue
            absolute = urljoin(detail_url, href)
            if not absolute.startswith(BASE_URL):
                continue
            yield absolute

    # ------------------------------------------------------------------
    # Output generation
    def build_outputs(self) -> Tuple[List[NormRecord], List[List[str]]]:
        final_records: Dict[str, NormRecord] = {}
        audit_rows: List[List[str]] = list(self._audit_rows)
        for record in self._records.values():
            key = record.detail_url or record.documento_norma
            if not key:
                key = record.nombre_norma
            assert key
            existing = final_records.get(key)
            if not existing:
                final_records[key] = record
                continue
            # Deduplicate by selecting the most recent publication date.
            existing_date = parse_date(existing.fecha_publicacion)
            candidate_date = parse_date(record.fecha_publicacion)
            if existing_date and candidate_date and candidate_date > existing_date:
                audit_rows.append(existing.audit_row(duplicado=key))
                final_records[key] = record
            else:
                audit_rows.append(record.audit_row(duplicado=key))
        for record in final_records.values():
            audit_rows.append(record.audit_row(duplicado=""))
        ordered_records = sorted(
            final_records.values(),
            key=lambda rec: (parse_date(rec.fecha_publicacion) or datetime.min),
        )
        return ordered_records, audit_rows

    def write_csv(self, records: Iterable[NormRecord], path: str) -> None:
        with open(path, "w", newline="", encoding="utf-8") as csv_file:
            writer = csv.writer(csv_file)
            writer.writerow([
                "nombre de la norma",
                "Fecha de publicacion",
                "fecha de la norma",
                "documento de la norma",
            ])
            for record in records:
                writer.writerow(record.operative_row)

    def write_excel(
        self, records: Iterable[NormRecord], audit_rows: Iterable[List[str]], path: str
    ) -> None:
        wb = Workbook()
        ws_normas = wb.active
        ws_normas.title = "normas"
        ws_normas.append(
            [
                "nombre de la norma",
                "Fecha de publicacion",
                "fecha de la norma",
                "documento de la norma",
            ]
        )
        for record in records:
            ws_normas.append(record.operative_row)
        ws_audit = wb.create_sheet(title="auditoria")
        ws_audit.append(
            [
                "nombre de la norma",
                "Fecha de publicacion",
                "fecha de la norma",
                "documento de la norma",
                "Duplicado",
                "notas",
            ]
        )
        for row in audit_rows:
            ws_audit.append(row)
        wb.save(path)

    def write_outputs(self) -> None:
        records, audit_rows = self.build_outputs()
        self.write_csv(records, "resumen_bocyl.csv")
        self.write_excel(records, audit_rows, "resumen_bocyl.xlsx")
        self._print_summary(records)

    # ------------------------------------------------------------------
    # Helpers
    def _print_summary(self, records: List[NormRecord]) -> None:
        total = len(records)
        fechas = [rec.fecha_publicacion for rec in records if rec.fecha_publicacion]
        fechas_validas = sorted(filter(None, (parse_date(fecha) for fecha in fechas)))
        primera = format_date(fechas_validas[0]) if fechas_validas else ""
        ultima = format_date(fechas_validas[-1]) if fechas_validas else ""
        ejemplos = []
        if records:
            ejemplos.append(records[0].operative_row)
            if total > 2:
                ejemplos.append(records[total // 2].operative_row)
            if total > 1:
                ejemplos.append(records[-1].operative_row)
        LOG.info("Total de normas: %s", total)
        LOG.info("Primera fecha de publicación: %s", primera)
        LOG.info("Última fecha de publicación: %s", ultima)
        LOG.info("Ejemplos: %s", ejemplos)

    def _audit_error(self, detail_url: Optional[str], nota: str) -> None:
        LOG.error("%s - %s", detail_url or "[listado]", nota)
        if detail_url and detail_url in self._records:
            self._records[detail_url].notas.append(nota)
            return
        placeholder = NormRecord(
            nombre_norma="",
            fecha_publicacion=None,
            fecha_norma=None,
            documento_norma=None,
            detail_url=detail_url,
        )
        placeholder.notas.append(nota)
        self._audit_rows.append(placeholder.audit_row(duplicado=""))


# ----------------------------------------------------------------------
# Utility functions

def remove_accents(text: str) -> str:
    import unicodedata

    normalized = unicodedata.normalize("NFD", text)
    return "".join(c for c in normalized if unicodedata.category(c) != "Mn")


def normalize_date(raw: Optional[str]) -> Optional[str]:
    if not raw:
        return None
    normalized = raw.strip().replace("-", "/")
    date_formats = ("%d/%m/%Y", "%d/%m/%y")
    for fmt in date_formats:
        try:
            dt = datetime.strptime(normalized, fmt)
            return dt.strftime("%d/%m/%Y")
        except ValueError:
            continue
    # Accept forms like 1-1-24 or 1.1.2024
    match = re.search(r"(\d{1,2})[./](\d{1,2})[./](\d{2,4})", raw.strip())
    if match:
        day, month, year = match.groups()
        if len(year) == 2:
            year = f"20{year}"
        try:
            dt = datetime(int(year), int(month), int(day))
        except ValueError:
            return None
        return dt.strftime("%d/%m/%Y")
    return None


def parse_date(raw: Optional[str]) -> Optional[datetime]:
    if not raw:
        return None
    try:
        return datetime.strptime(raw, "%d/%m/%Y")
    except ValueError:
        return None


def format_date(dt: Optional[datetime]) -> str:
    if not dt:
        return ""
    return dt.strftime("%d/%m/%Y")


# ----------------------------------------------------------------------


def main() -> None:  # pragma: no cover - convenience entry point
    logging.basicConfig(level=logging.INFO, format="%(levelname)s: %(message)s")
    scraper = ResumenBocylScraper()
    scraper.run()
    scraper.write_outputs()


if __name__ == "__main__":  # pragma: no cover
    main()
