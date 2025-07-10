const articulos = [
  // Título I (ejemplo existente)
  { numero: "Artículo 3", titulo: "Duración máxima de la jornada anual", etiquetas: ["jornada", "funcionarios"], documento: "Decreto+59+2013+texto+consolidado+a+18_03_2016.pdf", norma: "Decreto 59/2013", fecha: "2013-09-05" },
  { numero: "Artículo 39", titulo: "Permisos retribuidos por fallecimiento, mudanza o funciones sindicales", etiquetas: ["permiso retribuido", "conciliación"], documento: "Decreto+59+2013+texto+consolidado+a+18_03_2016.pdf", norma: "Decreto 59/2013", fecha: "2013-09-05" },
  { numero: "Artículo 45", titulo: "Lactancia, prematuridad y guarda legal", etiquetas: ["lactancia", "guarda legal", "conciliación", "familia"], documento: "Decreto+59+2013+texto+consolidado+a+18_03_2016.pdf", norma: "Decreto 59/2013", fecha: "2013-09-05" },
  { numero: "Artículo 48", titulo: "Permisos por violencia de género", etiquetas: ["violencia de género", "conciliación", "familia"], documento: "Decreto+59+2013+texto+consolidado+a+18_03_2016.pdf", norma: "Decreto 59/2013", fecha: "2013-09-05" },
  { numero: "Artículo 49", titulo: "Permisos por maternidad y paternidad", etiquetas: ["maternidad", "familia", "permiso retribuido"], documento: "Decreto+59+2013+texto+consolidado+a+18_03_2016.pdf", norma: "Decreto 59/2013", fecha: "2013-09-05" },

  // Título II. Vacaciones
  { numero: "Artículo 24", titulo: "Normas generales (vacaciones)", etiquetas: ["vacaciones"], documento: "Decreto+59+2013+texto+consolidado+a+18_03_2016.pdf", norma: "Decreto 59/2013", fecha: "2013-09-05" },
  { numero: "Artículo 25", titulo: "Reglas adicionales (vacaciones)", etiquetas: ["vacaciones"], documento: "Decreto+59+2013+texto+consolidado+a+18_03_2016.pdf", norma: "Decreto 59/2013", fecha: "2013-09-05" },
  { numero: "Artículo 26", titulo: "Régimen de disfrute (vacaciones)", etiquetas: ["vacaciones"], documento: "Decreto+59+2013+texto+consolidado+a+18_03_2016.pdf", norma: "Decreto 59/2013", fecha: "2013-09-05" },
  { numero: "Artículo 27", titulo: "Supuestos de inactividad estacional (vacaciones)", etiquetas: ["vacaciones"], documento: "Decreto+59+2013+texto+consolidado+a+18_03_2016.pdf", norma: "Decreto 59/2013", fecha: "2013-09-05" },
  { numero: "Artículo 28", titulo: "Otros supuestos (vacaciones)", etiquetas: ["vacaciones"], documento: "Decreto+59+2013+texto+consolidado+a+18_03_2016.pdf", norma: "Decreto 59/2013", fecha: "2013-09-05" },
  { numero: "Artículo 29", titulo: "Normas generales de procedimiento (vacaciones)", etiquetas: ["vacaciones"], documento: "Decreto+59+2013+texto+consolidado+a+18_03_2016.pdf", norma: "Decreto 59/2013", fecha: "2013-09-05" },
  { numero: "Artículo 30", titulo: "Cambios o interrupciones en el período de disfrute (vacaciones)", etiquetas: ["vacaciones"], documento: "Decreto+59+2013+texto+consolidado+a+18_03_2016.pdf", norma: "Decreto 59/2013", fecha: "2013-09-05" },
  { numero: "Artículo 31", titulo: "Acumulación de otros permisos (vacaciones)", etiquetas: ["vacaciones"], documento: "Decreto+59+2013+texto+consolidado+a+18_03_2016.pdf", norma: "Decreto 59/2013", fecha: "2013-09-05" },

  // Título III. Licencias
  { numero: "Artículo 32", titulo: "Licencia por enfermedad", etiquetas: ["licencias"], documento: "Decreto+59+2013+texto+consolidado+a+18_03_2016.pdf", norma: "Decreto 59/2013", fecha: "2013-09-05" },
  { numero: "Artículo 33", titulo: "Licencia por riesgo durante el embarazo y la lactancia", etiquetas: ["licencias"], documento: "Decreto+59+2013+texto+consolidado+a+18_03_2016.pdf", norma: "Decreto 59/2013", fecha: "2013-09-05" },
  { numero: "Artículo 34", titulo: "Normas comunes a estas licencias", etiquetas: ["licencias"], documento: "Decreto+59+2013+texto+consolidado+a+18_03_2016.pdf", norma: "Decreto 59/2013", fecha: "2013-09-05" },
  { numero: "Artículo 35", titulo: "Licencia por asuntos propios", etiquetas: ["licencias"], documento: "Decreto+59+2013+texto+consolidado+a+18_03_2016.pdf", norma: "Decreto 59/2013", fecha: "2013-09-05" },
  { numero: "Artículo 36", titulo: "Licencia por estudios", etiquetas: ["licencias"], documento: "Decreto+59+2013+texto+consolidado+a+18_03_2016.pdf", norma: "Decreto 59/2013", fecha: "2013-09-05" },
  { numero: "Artículo 37", titulo: "Licencia para la colaboración en Programas de Cooperación y Ayuda Humanitaria", etiquetas: ["licencias"], documento: "Decreto+59+2013+texto+consolidado+a+18_03_2016.pdf", norma: "Decreto 59/2013", fecha: "2013-09-05" },
  { numero: "Artículo 38", titulo: "Licencia para la participación en Programas y Proyectos de Ayuda y Cooperación al Desarrollo", etiquetas: ["licencias"], documento: "Decreto+59+2013+texto+consolidado+a+18_03_2016.pdf", norma: "Decreto 59/2013", fecha: "2013-09-05" },

  // Título IV. Permisos
  { numero: "Artículo 39", titulo: "Permisos de carácter general", etiquetas: ["permisos"], documento: "Decreto+59+2013+texto+consolidado+a+18_03_2016.pdf", norma: "Decreto 59/2013", fecha: "2013-09-05" },
  { numero: "Artículo 40", titulo: "Normas comunes (permisos de carácter general)", etiquetas: ["permisos"], documento: "Decreto+59+2013+texto+consolidado+a+18_03_2016.pdf", norma: "Decreto 59/2013", fecha: "2013-09-05" },
  { numero: "Artículo 41", titulo: "Permisos por maternidad y paternidad", etiquetas: ["maternidad", "paternidad"], documento: "Decreto+59+2013+texto+consolidado+a+18_03_2016.pdf", norma: "Decreto 59/2013", fecha: "2013-09-05" },
  { numero: "Artículo 42", titulo: "Disfrute a tiempo parcial (maternidad/paternidad)", etiquetas: ["maternidad", "paternidad"], documento: "Decreto+59+2013+texto+consolidado+a+18_03_2016.pdf", norma: "Decreto 59/2013", fecha: "2013-09-05" },
  { numero: "Artículo 43", titulo: "Normas de acreditación (maternidad/paternidad)", etiquetas: ["maternidad", "paternidad"], documento: "Decreto+59+2013+texto+consolidado+a+18_03_2016.pdf", norma: "Decreto 59/2013", fecha: "2013-09-05" },
  { numero: "Artículo 44", titulo: "Derechos económicos (maternidad/paternidad)", etiquetas: ["maternidad", "paternidad"], documento: "Decreto+59+2013+texto+consolidado+a+18_03_2016.pdf", norma: "Decreto 59/2013", fecha: "2013-09-05" },
  { numero: "Artículo 45", titulo: "Permisos para la conciliación de la vida familiar y laboral", etiquetas: ["conciliación"], documento: "Decreto+59+2013+texto+consolidado+a+18_03_2016.pdf", norma: "Decreto 59/2013", fecha: "2013-09-05" },
  { numero: "Artículo 46", titulo: "Normas comunes (permisos conciliación)", etiquetas: ["conciliación"], documento: "Decreto+59+2013+texto+consolidado+a+18_03_2016.pdf", norma: "Decreto 59/2013", fecha: "2013-09-05" },
  { numero: "Artículo 47", titulo: "Acreditación documental (permisos conciliación)", etiquetas: ["conciliación"], documento: "Decreto+59+2013+texto+consolidado+a+18_03_2016.pdf", norma: "Decreto 59/2013", fecha: "2013-09-05" },
  { numero: "Artículo 48", titulo: "Permiso por razón de violencia de género", etiquetas: ["violencia de género"], documento: "Decreto+59+2013+texto+consolidado+a+18_03_2016.pdf", norma: "Decreto 59/2013", fecha: "2013-09-05" },
  { numero: "Artículo 49", titulo: "Protección de la intimidad (violencia de género)", etiquetas: ["violencia de género"], documento: "Decreto+59+2013+texto+consolidado+a+18_03_2016.pdf", norma: "Decreto 59/2013", fecha: "2013-09-05" },
  { numero: "Artículo 50", titulo: "Órganos competentes (licencias y permisos)", etiquetas: ["permisos", "licencias"], documento: "Decreto+59+2013+texto+consolidado+a+18_03_2016.pdf", norma: "Decreto 59/2013", fecha: "2013-09-05" },
  { numero: "Artículo 51", titulo: "Delegación y desconcentración de competencias", etiquetas: ["permisos", "licencias"], documento: "Decreto+59+2013+texto+consolidado+a+18_03_2016.pdf", norma: "Decreto 59/2013", fecha: "2013-09-05" }
];
