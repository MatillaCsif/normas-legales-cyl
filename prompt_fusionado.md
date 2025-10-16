# Prompt de scraping para Resumen BOCyL

## Objetivo
Navegar la sección "Resumen BOCyL" del portal de Educación de la Junta de Castilla y León y generar una tabla con una fila por cada norma publicada, desde la página más reciente hasta la última disponible (o hasta la URL con `.nodos,2002` si fuera la última visible).

## Instrucciones para el asistente
```
Quiero que navegues la sección "Resumen BOCyL" de Educación de la Junta de Castilla y León y generes una tabla con UNA FILA por cada norma publicada, desde la página más reciente hasta la última disponible (o hasta la URL con .nodos,2002 si esa fuera la última visible).

# Objetivo
Crear dos ficheros de salida con el MISMO contenido:
- Excel: resumen_bocyl.xlsx (hoja "normas")
- CSV:   resumen_bocyl.csv

Con estas columnas EXACTAS y en este orden:
1) nombre de la norma
2) Fecha de publicacion
3) fecha de la norma
4) documento de la norma

# Alcance y paginación
- Entradas recientes: https://www.educa.jcyl.es/es/resumenbocyl  (equivale a ...nodos,1,2)
- A partir de ahí, avanza página a página usando SIEMPRE el enlace de paginación ("Siguiente", números de página o controles equivalentes) hasta llegar a la más antigua disponible.
- Si el control de paginación no es detectable, intenta inferir el total leyendo el texto “Página X de Y”; si tampoco es posible, recorre iterativamente patrones conocidos (.nodos,X,Y) HASTA que detectes repetición o ausencia de nuevos ítems. Como última red, itera hasta .nodos,2002 con backoff si hiciera falta.
- El orden final en el Excel/CSV debe ser de MÁS NUEVA → MÁS ANTIGUA (ordena por fecha de publicación descendente).

# Detección de ítems en listados (“Apartados”)
Para cada “apartado” del listado:
- Extrae:
  a) Título que aparece como enlace (posible nombre preliminar)
  b) “Fecha BOCyL: dd/mm/aaaa”
  c) URL detalle (href del título)
- Guarda estos 3 datos provisoriamente y entra en la URL detalle para completar/validar.

# Extracción en la página de detalle (“Resumen legislación educativa”)
Dentro de la ficha de cada norma, extrae:
- nombre de la norma → Usa el título principal (encabezado/H2) de la ficha. Si en el listado el título estaba truncado o con etiquetas como “¡Novedad!”, PRIORIZA el de la ficha y limpia ruidos (“¡Novedad!”, dobles espacios, etc.).
- Fecha de publicacion → Valor tras “Fecha publicación:”. Si no estuviera, usa la “Fecha BOCyL” del listado.
- fecha de la norma → Valor tras “Fecha disposición:”.
- documento de la norma → URL directa del PDF (termina en .pdf) tras “Documento:”.

Notas:
- Ignora “Centro Directivo” para la tabla (no es columna).
- Si faltara “Documento”, deja la celda vacía y registra una advertencia en un log interno.

# Modificaciones, correcciones y relaciones
Cada entrada del listado es SIEMPRE una fila propia. Además:
- Si en la ficha aparece una sección/texto tipo “Modificado por …”, “Modifica …”, “Derogado por …”, “Deroga …” o “Corrección de errores de …”:
  1) Si hay enlace a otra ficha interna del mismo portal, síguelo y extrae SUS cuatro campos como una fila adicional (si no existía ya).
  2) Si NO hay enlace, intenta localizar esa norma por su identificador (p. ej., “ORDEN XXX/AAAA”) en el buscador del propio portal. Si la encuentras, añádela.
- Importante: DE-DUPLICA por URL detalle de la ficha o por URL PDF. Si una norma ya fue incluida por una relación (p. ej. “Modificado por …”) y luego aparece en su día en el listado, NO la dupliques.
- “Corrección de errores” se trata como norma independiente (su propia fila con su propio PDF y fechas).

# Normalización de datos
- Formato de fechas: dd/mm/aaaa (con cero inicial).
- Limpia el título de prefijos/etiquetas (“¡Novedad!”, etc.) y espacios duplicados.
- Asegúrate de que “documento de la norma” sea siempre la URL DIRECTA al PDF.

# Robustez y cortesía
- Espera 1,5–2,5 s entre peticiones. No paralelices.
- Si el HTML cambia, busca por textos literales (“Fecha publicación:”, “Fecha disposición:”, “Documento:”) además de selectores.
- Reintenta hasta 2 veces si hay fallo de red/HTTP. Si persiste, salta el ítem y registra en log.
- Evita seguir enlaces externos distintos de bocyl.jcyl.es para el PDF y educa.jcyl.es para las fichas.

# Control de calidad
- Valida que “Fecha de publicacion” coincida con la “Fecha BOCyL” del listado cuando ambas existan; si difieren, prioriza la de la ficha y anota una advertencia.
- Verifica que los PDFs terminan en .pdf y devuelven HTTP 200 (opcionalmente con HEAD).
- De-duplicación obligatoria por (URL detalle ∨ URL PDF).

# Salida (Excel y CSV)
- Excel: resumen_bocyl.xlsx, hoja “normas”, con las cabeceras EXACTAS:
  nombre de la norma | Fecha de publicacion | fecha de la norma | documento de la norma
- CSV: mismo contenido y orden de columnas.
- Ordena las filas de más reciente a más antigua (por “Fecha de publicacion”).
- Al terminar, imprime:
  - total de filas
  - primera y última “Fecha de publicacion”
  - 3 ejemplos de filas: primera, una intermedia y la última

# Trazabilidad (opcional, no en la tabla final)
- Mantén internamente (fuera del Excel/CSV) un pequeño log con:
  - URL detalle visitada
  - estado del PDF (200/404/timeout)
  - notas de de-duplicación y discrepancias de fechas

Entrega los archivos finales y el resumen de verificación.
```
