// normasData.js

const normas = [
    {
        id: "decreto59", // Identificador único
        titulo: "Decreto 59/2013, de 5 de septiembre",
        descripcionCorta: "Regula jornada, horario, vacaciones, permisos y licencias del personal funcionario de Castilla y León.",
        urlPdf: "https://github.com/MatillaCsif/normas-legales-cyl/raw/d3969c91041ed691efab30ee779f8a75f95e1bdb/Decreto+59+2013+texto+consolidado+a+18_03_2016.pdf",
        tipo: "Decreto",
        ambito: "Personal Funcionario",
        emisor: "Junta de Castilla y León",
        tematicas: ["Jornada Laboral", "Vacaciones", "Permisos", "Licencias", "Función Pública"],
        fechaEmision: "2013-09-05", // Formato YYYY-MM-DD
        fechaPublicacionBOCYL: "2013-10-28", // Fecha aproximada si es la misma que la del Convenio
        palabrasClave: [
            { palabra: "permiso", definicion: "Derecho a ausentarse del puesto de trabajo por causas justificadas.", contextos: [{ texto: "Permiso por el fallecimiento...", pagina: 18 }], relaciones: [] },
            { palabra: "vacaciones", definicion: "Período anual de descanso retribuido.", contextos: [{ texto: "El personal funcionario tendrá derecho a disfrutar... de veintidós días hábiles...", pagina: 10 }], relaciones: [] }
            // Agrega más palabras clave y contextos para este documento
        ]
    },
    {
        id: "convenioColectivo", // Identificador único
        titulo: "Convenio Colectivo para el Personal Laboral de la Administración General de Castilla y León y Organismos Autónomos",
        descripcionCorta: "Regula las condiciones de trabajo del personal laboral al servicio de la Administración de CyL.",
        urlPdf: "https://github.com/MatillaCsif/normas-legales-cyl/raw/d3969c91041ed691efab30ee779f8a75f95e1bdb/CONVENIO+COLECTIVO+21-06-2023.pdf",
        tipo: "Convenio Colectivo",
        ambito: "Personal Laboral",
        emisor: "Comisión Negociadora",
        tematicas: ["Derecho Laboral", "Condiciones de Trabajo"],
        fechaEmision: "2013-10-28",
        fechaPublicacionBOCYL: "2013-10-28",
        palabrasClave: [
            { palabra: "permiso", definicion: "Derecho a ausentarse del puesto de trabajo por causas justificadas.", contextos: [{ texto: "El personal incluido en el ámbito... tendrá derecho a los siguientes permisos...", pagina: 23 }], relaciones: [] },
            { palabra: "antigüedad", definicion: "Tiempo de servicio reconocido a un empleado.", contextos: [{ texto: "Se reconocerán los servicios prestados... a efectos de antigüedad.", pagina: 15 }], relaciones: [] }
            // Agrega más palabras clave y contextos para este documento
        ]
    },
    {
        id: "acuerdoAgentesMedioambientales",
        titulo: "ACUERDO COMPL. ESPEC. 33 AGENTES MEDIOAMBIENTALES",
        descripcionCorta: "Acuerdo de condiciones específicas para Agentes Medioambientales.",
        urlPdf: "https://github.com/MatillaCsif/normas-legales-cyl/raw/d3969c91041ed691efab30ee779f8a75f95e1bdb/ACUERDO_COMPL.+ESPEC.+33+AGENTES+MEDIOAMBIENTALES.pdf",
        tipo: "Acuerdo",
        ambito: "Agentes Medioambientales",
        emisor: "No especificado",
        tematicas: ["Condiciones Laborales", "Agentes Medioambientales"],
        fechaEmision: "20XX-XX-XX", // Rellenar fecha real
        fechaPublicacionBOCYL: "20XX-XX-XX", // Rellenar fecha real
        palabrasClave: [
            // Agrega palabras clave y contextos
        ]
    },
    {
        id: "actaCP14062024",
        titulo: "Acta (modificada) CP 14-6-2024",
        descripcionCorta: "Acta de la Comisión Paritaria con modificaciones.",
        urlPdf: "https://github.com/MatillaCsif/normas-legales-cyl/raw/d3969c91041ed691efab30ee779f8a75f95e1bdb/Acta%20(modificada)+CP+14-6-2024.pdf",
        tipo: "Acta",
        ambito: "General",
        emisor: "Comisión Paritaria",
        tematicas: ["Comisión Paritaria", "Modificaciones"],
        fechaEmision: "2024-06-14",
        fechaPublicacionBOCYL: "2024-06-14",
        palabrasClave: [
            // Agrega palabras clave y contextos
        ]
    }
];

// Este objeto puede crecer con todas las definiciones rápidas que necesites
const definicionesGlobales = {
    "permiso": "Derecho a ausentarse del puesto de trabajo por causas justificadas, manteniendo la remuneración.",
    "vacaciones": "Período anual de descanso retribuido.",
    "funcionario": "Empleado público vinculado por una relación estatutaria.",
    "personal laboral": "Empleado público vinculado por una relación laboral regulada por el derecho laboral común."
};
