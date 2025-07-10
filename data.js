        const data = [
            // Actas de 2024
            { id: "acta-2024-03-20-1", fecha: "20/03/2024", tema: "Permisos retribuidos (art. 82)", resumen: "Detalle extenso de causas y tiempos de permisos. Discusión sobre el abono de complementos salariales (nocturnidad y atención continuada) durante permisos retribuidos. La Administración lo niega, sindicatos disienten basándose en la continuidad de pago con el convenio anterior y el artículo 85 que establece el derecho a la totalidad de las retribuciones.", pagina: "10-17", etiquetas: ["permiso", "retribuciones", "convenio", "nocturnidad", "atención continuada", "conflicto"], archivo_acta: "Acta (modificada)+CP+20-03-2024.pdf", aplicabilidad: "Laborales", tipo_documento: "Acta", categoria_jerarquica: ['Laborales', 'Interpretación Autonómica', 'Comisión Paritaria Convenio Colectivo'],
              articulos: [ // Added articles for Actas to enable linking
                  {numero: "Art. 82", tema: "Permisos Retribuidos", resumen: "Detalle de los permisos según el artículo 82 del Convenio Colectivo."},
                  {numero: "Art. 85", tema: "Derecho a Totalidad de Retribuciones", resumen: "Artículo que establece el derecho a la totalidad de las retribuciones."}
              ]
            },
            { id: "acta-2024-03-20-2", fecha: "20/03/2024", tema: "Trabajo en día de libranza", resumen: "Si un trabajador es llamado por necesidades de servicio a trabajar en su día de libranza (sábado, domingo o festivo), será compensado con el doble de la cantidad establecida para el complemento de atención continuada, más la cantidad correspondiente al complemento de atención continuada por trabajar en festivo. Esta interpretación del artículo 68.4 ya se está aplicando desde julio de 2023.", pagina: "18", etiquetas: ["compensación", "atención continuada", "retribuciones", "convenio"], archivo_acta: "Acta (modificada)+CP+20-03-2024.pdf", aplicabilidad: "Laborales", tipo_documento: "Acta", categoria_jerarquica: ['Laborales', 'Interpretación Autonómica', 'Comisión Paritaria Convenio Colectivo'],
              articulos: [ // Added articles for Actas
                  {numero: "Art. 68.4", tema: "Compensación por Trabajo en Día de Libranza", resumen: "Regulación de la compensación por trabajo en festivos."}
              ]
            },
           
            { id: "acta-2024-06-14-1", fecha: "14/06/2024", tema: "Movilidades por protección de la salud", resumen: "Análisis de 32 expedientes de movilidad por protección de la salud tramitados en 2023. CGT denuncia desvíos indebidos de personal del operativo de incendios a puestos de 'conductor de oficina', argumentando que deben adscribirse a puestos del operativo. CCOO critica la insuficiencia de información para un estudio adecuado sobre prevención de riesgos laborales.", pagina: "16-17", etiquetas: ["movilidad", "salud laboral", "CGT", "prevención", "riesgos laborales", "datos"], archivo_acta: "Acta (modificada)+CP+14-6-2024.pdf", aplicabilidad: "Laborales", tipo_documento: "Acta", categoria_jerarquica: ['Laborales', 'Interpretación Autonómica', 'Comisión Paritaria Convenio Colectivo'] },
            { id: "acta-2024-06-14-2", fecha: "14/06/2024", tema: "Adaptaciones vs. cambio de categoría", resumen: "Debate sobre si los puestos podrían adaptarse en vez de requerir un cambio de categoría por motivos de salud. CCOO insiste en que muchos casos serían adaptables y propone cruzar datos con servicios de prevención. La Administración señala que los cambios de categoría se dan si una dolencia física lo requiere según informe de prevención.", pagina: "18-19", etiquetas: ["prevención", "adaptación", "riesgos laborales", "salud"], archivo_acta: "Acta (modificada)+CP+14-6-2024.pdf", aplicabilidad: "Laborales", tipo_documento: "Acta", categoria_jerarquica: ['Laborales', 'Interpretación Autonómica', 'Comisión Paritaria Convenio Colectivo'] },
            { id: "acta-2024-06-14-3", fecha: "14/06/2024", tema: "Convocatoria pruebas Auxiliar de Carreteras", resumen: "Exposición de los procesos selectivos para acceder a la especialidad de 'Auxiliar de Carreteras-Vigilante de Obra' y 'Auxiliar de Carreteras-Vigilante de Explotación', adaptadas a las características actuales de las oposiciones.", pagina: "4", etiquetas: ["empleo público", "convocatorias", "carreteras", "pruebas selectivas"], archivo_acta: "Acta (modificada)+CP+14-6-2024.pdf", aplicabilidad: "Laborales", tipo_documento: "Acta", categoria_jerarquica: ['Laborales', 'Interpretación Autonómica', 'Comisión Paritaria Convenio Colectivo'] },

            // Actas de 2023 - Septiembre
            { id: "acta-2023-09-25-1", fecha: "25/09/2023", tema: "Disposición Adicional 14ª (titulaciones exigidas)", resumen: "Aclaración sobre la Disposición Adicional decimocuarta: hasta el 31/12/2025, las Consejerías pueden exigir titulación específica o genérica para categorías del Anexo I sin acuerdo paritario, para evitar falta de efectivos. Debate sobre la interpretación de 'así como' y si debe ser 'o en su caso', y sobre la equiparación de bachiller a formación profesional de grado medio. Acuerdo para interpretar 'o en su caso' y especificar titulaciones al ECYL.", pagina: "13-14", etiquetas: ["acceso público", "titulaciones", "transitoria", "empleo público"], archivo_acta: "Acta (modificada)+CP+25-9-2023,0.pdf", aplicabilidad: "Laborales", tipo_documento: "Acta", categoria_jerarquica: ['Laborales', 'Interpretación Autonómica', 'Comisión Paritaria Convenio Colectivo'],
              articulos: [
                  {numero: "Disp. Adicional 14ª", tema: "Titulaciones Exigidas", resumen: "Aclaración sobre la exigencia de titulaciones hasta 31/12/2025."}
              ]
            },
            { id: "acta-2023-09-25-2", fecha: "25/09/2023", tema: "Movilidad por salud y cambio de grupo profesional", resumen: "Solo posible hacia igual o inferior grupo. No puede usarse como provisión general.", pagina: "15", etiquetas: ["movilidad", "salud", "grupo profesional", "prevención"], archivo_acta: "Acta (modificada)+CP+25-9-2023,0.pdf", aplicabilidad: "Laborales", tipo_documento: "Acta", categoria_jerarquica: ['Laborales', 'Interpretación Autonómica', 'Comisión Paritaria Convenio Colectivo'] },
            { id: "acta-2023-09-25-3", fecha: "25/09/2023", tema: "Pérdida de requisitos habilitantes (armas, carnet)", resumen: "Celadores que pierden licencia tipo D: no hay previsión clara como sí en otros casos.", pagina: "15-16", etiquetas: ["requisitos", "armas", "licencias", "celador"], archivo_acta: "Acta (modificada)+CP+25-9-2023,0.pdf", aplicabilidad: "Laborales", tipo_documento: "Acta", categoria_jerarquica: ['Laborales', 'Interpretación Autonómica', 'Comisión Paritaria Convenio Colectivo'] },
            { id: "acta-2023-09-25-4", fecha: "25/09/2023", tema: "Categoría a extinguir: Maestro de taller", resumen: "Debaten acceso y conversión a Educador Personas con Discapacidad.", pagina: "16-17", etiquetas: ["categoría", "educador", "maestro", "discapacidad", "reclasificación", "promoción interna"], archivo_acta: "Acta (modificada)+CP+25-9-2023,0.pdf", aplicabilidad: "Laborales", tipo_documento: "Acta", categoria_jerarquica: ['Laborales', 'Interpretación Autonómica', 'Comisión Paritaria Convenio Colectivo'] },
            { id: "acta-2023-09-25-5", fecha: "25/09/2023", tema: "Aplicación de normativa básica más favorable", resumen: "En permisos y jornada, se aplica lo más beneficioso entre Estatuto y Convenio.", pagina: "18", etiquetas: ["permiso", "estatutario", "derechos", "jornada"], archivo_acta: "Acta (modificada)+CP+25-9-2023,0.pdf", aplicabilidad: "Ambos", tipo_documento: "Acta", categoria_jerarquica: ['Laborales', 'Interpretación Autonómica', 'Comisión Paritaria Convenio Colectivo'] },
            { id: "acta-2023-09-25-6", fecha: "25/09/2023", tema: "Medios de solicitud de permisos/vacaciones", resumen: "Conflictos sobre obligatoriedad de herramientas electrónicas (registro vs. app Hermes).", pagina: "20-21", etiquetas: ["solicitudes", "digital", "acceso", "registro", "vacaciones", "permiso"], archivo_acta: "Acta (modificada)+CP+25-9-2023,0.pdf", aplicabilidad: "Laborales", tipo_documento: "Acta", categoria_jerarquica: ['Laborales', 'Interpretación Autonómica', 'Comisión Paritaria Convenio Colectivo'] },
            { id: "acta-2023-09-25-7", fecha: "25/09/2023", tema: "Derecho a comida (educación infantil)", resumen: "Media hora no debe recuperarse si están a disposición del alumnado.", pagina: "22-23", etiquetas: ["derechos", "comida", "educación", "jornada"], archivo_acta: "Acta (modificada)+CP+25-9-2023,0.pdf", aplicabilidad: "Laborales", tipo_documento: "Acta", categoria_jerarquica: ['Laborales', 'Interpretación Autonómica', 'Comisión Paritaria Convenio Colectivo'] },
            { id: "acta-2023-09-25-8", fecha: "25/09/2023", tema: "Superación periodo de prueba en categorías con cambio de denominación y aptitud médica", resumen: "Se confirma que el periodo de prueba superado en una categoría con denominación anterior es válido tras el cambio de denominación. Se acuerda adaptar el baremo de aptitud médica para personal fijo discontinuo. Se toma nota para aclarar si la Disposición Transitoria Segunda es aplicable a movilidades funcionales.", pagina: "23-24", etiquetas: ["periodo de prueba", "categoría", "movilidad", "salud laboral", "baremo"], archivo_acta: "Acta (modificada)+CP+25-9-2023,0.pdf", aplicabilidad: "Laborales", tipo_documento: "Acta", categoria_jerarquica: ['Laborales', 'Interpretación Autonómica', 'Comisión Paritaria Convenio Colectivo'] },
            { id: "acta-2023-09-25-9", fecha: "25/09/2023", tema: "Procesos selectivos pendientes y toma de posesión", resumen: "Resumen del estado de los procesos selectivos pendientes (personal de servicios, auxiliar de enfermería, restauradores, etc.). Muchos están recurridos, lo que retrasa los nombramientos. Se consultará si el personal del operativo de incendios puede tomar posesión antes de finalizar la campaña.", pagina: "24-25", etiquetas: ["oposiciones", "empleo público", "convocatorias", "personal de servicios", "incendios"], archivo_acta: "Acta (modificada)+CP+25-9-2023,0.pdf", aplicabilidad: "Laborales", tipo_documento: "Acta", categoria_jerarquica: ['Laborales', 'Interpretación Autonómica', 'Comisión Paritaria Convenio Colectivo'] },
            { id: "acta-2023-09-25-10", fecha: "25/09/2023", tema: "Disfrute de vacaciones y asuntos propios en operativo de incendios", resumen: "Debate sobre el disfrute de vacaciones y asuntos propios para el personal de autobombas que trabaja 5 meses en época de peligro alto. UGT pide uniformidad de criterios y compensación si no se pueden disfrutar. CGT denuncia imposición de vacaciones sin preaviso. La Administración se compromete a buscar garantía de disfrute y unificar criterios.", pagina: "17-21", etiquetas: ["vacaciones", "asuntos particulares", "incendios", "convenio", "derechos"], archivo_acta: "Acta (modificada)+CP+25-9-2023,0.pdf", aplicabilidad: "Laborales", tipo_documento: "Acta", categoria_jerarquica: ['Laborales', 'Interpretación Autonómica', 'Comisión Paritaria Convenio Colectivo'] },
            { id: "acta-2023-09-25-11", fecha: "25/09/2023", tema: "Unificación de categorías: Cuidador Técnico de Servicios Asistenciales y Auxiliar de Enfermería", resumen: "Se discute la unificación de categorías y la formación impartida para el desempeño de nuevas funciones (ej. administración de medicamentos). CGT y CCOO discrepan sobre el incremento de funciones para personal que no las tenía encomendadas y la forma de paliar la situación (jubilaciones vs. reorganización).", pagina: "21-24", etiquetas: ["categoría", "cuidador", "auxiliar de enfermería", "formación", "funciones", "reclasificación"], archivo_acta: "Acta (modificada)+CP+25-9-2023,0.pdf", aplicabilidad: "Laborales", tipo_documento: "Acta", categoria_jerarquica: ['Laborales', 'Interpretación Autonómica', 'Comisión Paritaria Convenio Colectivo'] },
            { id: "acta-2023-09-25-12", fecha: "25/09/2023", tema: "Reorganización centros de menores y creación de Técnico de Apoyo al Menor", resumen: "La Gerencia de Servicios Sociales informa sobre la reordenación de centros de menores, con la finalización de 21 contratos temporales del Grupo 2 y la contratación de 51 'Técnicos de Apoyo al Menor' (Grupo 3). Sindicatos critican los despidos y la interpretación de la cláusula de mantenimiento de la relación laboral temporal, esperando un proceso más paulatino y la amortización de plazas por jubilación.", pagina: "24-29", etiquetas: ["reorganización", "servicios sociales", "contratación", "despidos", "técnico del menor"], archivo_acta: "Acta (modificada)+CP+25-9-2023,0.pdf", aplicabilidad: "Laborales", tipo_documento: "Acta", categoria_jerarquica: ['Laborales', 'Interpretación Autonómica', 'Comisión Paritaria Convenio Colectivo'] },
            { id: "acta-2023-09-25-13", fecha: "25/09/2023", tema: "Complemento por continuidad asistencial para enfermeras", resumen: "La Consejería de Educación informa que las enfermeras de la Gerencia con competencia funcional de enfermeras, pero sin continuidad asistencial, no están dentro de la regulación del artículo 103 del Convenio para el abono de dicho complemento. Cuatro escritos de personas interesadas han sido respondidos negativamente.", pagina: "29-30", etiquetas: ["retribuciones", "complemento", "enfermería"], archivo_acta: "Acta (modificada)+CP+25-9-2023,0.pdf", aplicabilidad: "Laborales", tipo_documento: "Acta", categoria_jerarquica: ['Laborales', 'Interpretación Autonómica', 'Comisión Paritaria Convenio Colectivo'] },
            { id: "acta-2023-09-25-14", fecha: "30/09/2023", tema: "Plazas de Maestro de Taller en concurso de traslados", resumen: "UGT consulta si las plazas vacantes de 'Maestro de taller' están detraídas del concurso de traslados, dado que el Convenio establece que se renombrarán automáticamente a 'Educador de personas con discapacidad' al quedar vacantes. La Gerencia de Servicios Sociales lo comprobará.", pagina: "30", etiquetas: ["oposiciones", "maestro", "educador", "discapacidad", "movilidad"], archivo_acta: "Acta (modificada)+CP+25-9-2023,0.pdf", aplicabilidad: "Laborales", tipo_documento: "Acta", categoria_jerarquica: ['Laborales', 'Interpretación Autonómica', 'Comisión Paritaria Convenio Colectivo'] },
            { id: "acta-2023-09-25-15", fecha: "25/09/2023", tema: "Temarios oposiciones Oficial de Primera Conductor", resumen: "CCOO señala que en la convocatoria de Oficial de Primera Conductor no se especifica el número de preguntas por tema. También informa que la Administración ha aceptado algunas de sus propuestas para los temarios de Técnico de Atención Directa y Educador de Personas con Discapacidad.", pagina: "30-31", etiquetas: ["oposiciones", "temarios", "convocatorias", "conductor"], archivo_acta: "Acta (modificada)+CP+25-9-2023,0.pdf", aplicabilidad: "Laborales", tipo_documento: "Acta", categoria_jerarquica: ['Laborales', 'Interpretación Autonómica', 'Comisión Paritaria Convenio Colectivo'] },

            // Actas de 2023 - Octubre
            { id: "acta-2023-10-26-1", fecha: "26/10/2023", tema: "Convocatoria Personal de Servicios", resumen: "Se acuerda la convocatoria de 161 plazas por el turno libre. La titulación requerida será el certificado de escolaridad o equivalente.", pagina: "5", etiquetas: ["convocatorias", "empleo público", "personal de servicios"], archivo_acta: "Acta (modificada)+CP+26-10-2023.pdf", aplicabilidad: "Laborales", tipo_documento: "Acta", categoria_jerarquica: ['Laborales', 'Interpretación Autonómica', 'Comisión Paritaria Convenio Colectivo'] },
            { id: "acta-2023-10-26-2", fecha: "26/10/2023", tema: "Integración del personal laboral de la Gerencia de Servicios Sociales", resumen: "Se acuerda que el personal laboral fijo de la GSS que no superó el concurso de méritos se integrará en el VI Convenio Colectivo, asignándoles puestos de trabajo y respetando su grupo y competencia.", pagina: "6-8", etiquetas: ["integración", "servicios sociales", "convenio colectivo"], archivo_acta: "Acta (modificada)+CP+26-10-2023.pdf", aplicabilidad: "Laborales", tipo_documento: "Acta", categoria_jerarquica: ['Laborales', 'Interpretación Autonómica', 'Comisión Paritaria Convenio Colectivo'] },
            { id: "acta-2023-10-26-3", fecha: "26/10/2023", tema: "Bolsa de Empleo de Personal de Servicios", resumen: "La Gerencia de Servicios Sociales informa que en el mes de diciembre se publicará la valoración provisional de méritos de la bolsa de empleo de la competencia funcional de Personal de Servicios.", pagina: "11", etiquetas: ["bolsa de empleo", "personal de servicios", "gerencia servicios sociales"], archivo_acta: "Acta (modificada)+CP+26-10-2023.pdf", aplicabilidad: "Laborales", tipo_documento: "Acta", categoria_jerarquica: ['Laborales', 'Interpretación Autonómica', 'Comisión Paritaria Convenio Colectivo'] },
            { id: "acta-2023-10-26-4", fecha: "26/10/2023", tema: "Convocatoria de promoción interna y libre de ATE-Cuidador", resumen: "CCOO pregunta por la convocatoria de promoción interna y turno libre para ATE-Cuidador. La Administración informa que la Dirección General de Presupuestos está realizando el estudio económico para la re-clasificación profesional.", pagina: "11", etiquetas: ["convocatorias", "promoción interna", "ATE-Cuidador"], archivo_acta: "Acta (modificada)+CP+26-10-2023.pdf", aplicabilidad: "Laborales", tipo_documento: "Acta", categoria_jerarquica: ['Laborales', 'Interpretación Autonómica', 'Comisión Paritaria Convenio Colectivo'] },
            { id: "acta-2023-10-26-5", fecha: "26/10/2023", tema: "Procesos de Estabilización", resumen: "Se acuerda que los procesos de estabilización se realizarán por el sistema de concurso de méritos. CSIF solicita información sobre el número de plazas afectadas.", pagina: "12", etiquetas: ["estabilización", "concurso de méritos", "empleo público"], archivo_acta: "Acta (modificada)+CP+26-10-2023.pdf", aplicabilidad: "Laborales", tipo_documento: "Acta", categoria_jerarquica: ['Laborales', 'Interpretación Autonómica', 'Comisión Paritaria Convenio Colectivo'] },
            { id: "acta-2023-10-26-6", fecha: "26/10/2023", tema: "Modificación de la Relación de Puestos de Trabajo (RPT)", resumen: "CCOO y UGT solicitan la modificación de la RPT en la Consejería de Familia e Igualdad de Oportunidades para que las plazas de ATE-Cuidador se reclasifiquen a Educador Infantil. La Administración lo estudiará.", pagina: "13-14", etiquetas: ["RPT", "ATE-Cuidador", "reclasificación"], archivo_acta: "Acta (modificada)+CP+26-10-2023.pdf", aplicabilidad: "Laborales", tipo_documento: "Acta", categoria_jerarquica: ['Laborales', 'Interpretación Autonómica', 'Comisión Paritaria Convenio Colectivo'] },
            { id: "acta-2023-10-26-7", fecha: "26/10/2023", tema: "Turno de Oficio", resumen: "UGT propone que el personal que trabaje en turno de oficio pueda optar por compensación horaria o económica. La Administración se compromete a estudiarlo.", pagina: "15", etiquetas: ["turno de oficio", "compensación horaria", "remuneración"], archivo_acta: "Acta (modificada)+CP+26-10-2023.pdf", aplicabilidad: "Laborales", tipo_documento: "Acta", categoria_jerarquica: ['Laborales', 'Interpretación Autonómica', 'Comisión Paritaria Convenio Colectivo'] },
            { id: "acta-2023-10-26-8", fecha: "26/10/2023", tema: "Temarios oposiciones Oficial de Primera Conductor", resumen: "CCOO señala que en la convocatoria de Oficial de Primera Conductor no se especifica el número de preguntas por tema. También informa que la Administración ha aceptado algunas de sus propuestas para los temarios de Técnico de Atención Directa y Educador de Personas con Discapacidad.", pagina: "17-18", etiquetas: ["oposiciones", "temarios", "convocatorias", "conductor"], archivo_acta: "Acta (modificada)+CP+26-10-2023.pdf", aplicabilidad: "Laborales", tipo_documento: "Acta", categoria_jerarquica: ['Laborales', 'Interpretación Autonómica', 'Comisión Paritaria Convenio Colectivo'] },
           
            // Dato del CONVENIO+COLECTIVO+21-06-2023.pdf
            { id: "convenio-colectivo-2023-06-21", fecha: "21/06/2023", tema: "Convenio Colectivo para el Personal Laboral", resumen: "Texto completo del Convenio Colectivo para el Personal Laboral de la Administración General de la Comunidad de Castilla y León y Organismos Autónomos dependientes de esta. Define las condiciones de trabajo, retribuciones, permisos y demás aspectos laborales para el personal laboral. Incluye artículos sobre la jornada, vacaciones, permisos, clasificación profesional, régimen disciplinario, etc.", pagina: "1-90", etiquetas: ["convenio", "laborales", "jornada", "vacaciones", "permisos", "retribuciones", "clasificación profesional", "régimen disciplinario"], archivo_acta: "CONVENIO+COLECTIVO+21-06-2023.pdf", aplicabilidad: "Laborales", tipo_documento: "Convenio", categoria_jerarquica: ['Laborales', 'Normativa Autonómica', 'General', 'Convenios Colectivos'] },

            // Dato del ACUERDO_COMPL.+ESPEC.+33+AGENTES+MEDIOAMBIENTALES.pdf
            { id: "acuerdo-complemento-2024-08-05", fecha: "05/08/2024", tema: "Creación de Complemento Específico (Agentes Medioambientales)", resumen: "Acuerdo de la Mesa Sectorial de Función Pública para crear el complemento específico con código 33 para Guardería Forestal y otros (Agentes Medioambientales y Agentes Forestales), de 269,00 euros/mes, debido a la complejidad de funciones y condiciones de trabajo. Menciona Art. 76.3.b) de la Ley 7/2005 de Función Pública y Art. 5 del Decreto 136/2002.", pagina: "52-54", etiquetas: ["complemento específico", "agentes medioambientales", "agentes forestales", "retribuciones", "guardería forestal", "función pública"], archivo_acta: "ACUERDO_COMPL.+ESPEC.+33+AGENTES+MEDIOAMBIENTALES.pdf", aplicabilidad: "Funcionarios", tipo_documento: "Acuerdo", categoria_jerarquica: ['Funcionarios', 'Normativa Autonómica', 'Específica', 'Agentes Medioambientales'] },
           
            // Dato del Decreto 136_2002, de 26 de diciembre, de la Junta de Castilla y León, Reglamento regula Escala de Agentes Medioambientales del Cuerpo de Ayudantes Facultativos BOCYL-D-27122002-4.pdf
            { id: "decreto-136-2002", fecha: "27/12/2002", tema: "Reglamento regula Escala de Agentes Medioambientales", resumen: "Decreto por el que se aprueba el Reglamento que regula la Escala de Agentes Medioambientales del Cuerpo de Ayudantes Facultativos de la Comunidad de Castilla y León. Define el objeto, las funciones, jornada, horario, vacaciones, derechos y deberes, y el uso de armas para este cuerpo.", pagina: "1-6", etiquetas: ["agentes medioambientales", "guardería forestal", "funcionarios", "reglamento", "jornada", "vacaciones", "derechos", "deberes", "armas"], archivo_acta: "Decreto 136_2002, de 26 de diciembre, de la Junta de Castilla y León, Reglamento regula Escala de Agentes Medioambientales del Cuerpo de Ayudantes Facultativos BOCYL-D-27122002-4.pdf", aplicabilidad: "Funcionarios", tipo_documento: "Decreto", categoria_jerarquica: ['Funcionarios', 'Normativa Autonómica', 'Específica', 'Agentes Medioambientales'] },

            // Dato de la Ley+7-2005-consolidado.pdf
            { id: "ley-7-2005", fecha: "24/05/2005", tema: "Ley de la Función Pública de Castilla y León", resumen: "Ley 7/2005 que regula la Función Pública de Castilla y León. Establece el ámbito de aplicación, principios rectores, órganos superiores en materia de función pública, y el régimen jurídico del personal funcionario y laboral, incluyendo permisos, vacaciones, retribuciones, etc. Hace referencia al Estatuto Básico del Empleado Público (EBEP).", pagina: "1-68", etiquetas: ["función pública", "funcionarios", "personal laboral", "EBEP", "derechos", "deberes", "permisos", "vacaciones", "retribuciones", "ley"], archivo_acta: "Ley+7-2005-consolidado.pdf", aplicabilidad: "Ambos", tipo_documento: "Ley", categoria_jerarquica: ['Funcionarios', 'Normativa Autonómica', 'General', 'Leyes'] },

            // Nuevo dato del Estatuto de los Trabajadores
            { id: "estatuto-trabajadores-2015-10-23", fecha: "23/10/2015", tema: "Estatuto de los Trabajadores: Texto Refundido", resumen: "Real Decreto Legislativo 2/2015 por el que se aprueba el texto refundido de la Ley del Estatuto de los Trabajadores. Regula las relaciones laborales entre trabajadores y empresarios, abordando aspectos clave como el contrato de trabajo, salarios, jornada, suspensiones y extinciones de contratos, derechos de representación colectiva y negociación colectiva.", pagina: "1-234", etiquetas: ["estatuto de los trabajadores", "laborales", "normativa estatal", "ley", "derechos laborales", "contrato de trabajo", "salario", "jornada", "despido"], archivo_acta: "Estatuto de los trabajadores a 11062025.php.pdf", aplicabilidad: "Laborales", tipo_documento: "Ley", categoria_jerarquica: ['Laborales', 'Normativa Estatal', 'Estatuto de los Trabajadores'] },

            // Nuevo dato del TRLEBEP
            { id: "trlebep-2015-10-30", fecha: "30/10/2015", tema: "Texto Refundido de la Ley del Estatuto Básico del Empleado Público (TRLEBEP)", resumen: "Real Decreto Legislativo 5/2015, de 30 de octubre, por el que se aprueba el texto refundido de la Ley del Estatuto Básico del Empleado Público (TRLEBEP). Establece las bases del régimen estatutario de los funcionarios públicos, así como las normas aplicables al personal laboral al servicio de las Administraciones Públicas. Regula aspectos como clases de personal, derechos y deberes, carrera profesional, retribuciones, jornada, permisos, vacaciones, acceso al empleo público, situaciones administrativas y régimen disciplinario.", pagina: "1-58", etiquetas: ["TRLEBEP", "funcionarios", "personal laboral", "normativa estatal", "ley", "empleo público", "derechos", "deberes", "carrera profesional", "retribuciones", "jornada", "permisos", "vacaciones", "régimen disciplinario"], archivo_acta: "TRLEBEP a 11062025.pdf", aplicabilidad: "Ambos", tipo_documento: "Ley", categoria_jerarquica: ['Funcionarios', 'Normativa Estatal', 'TRLEBEP'] },

            // NUEVA ORDEN HAC/2/2013
            {
                id: "orden-hac-2-2013",
                fecha: "11/01/2013",
                tema: "Orden HAC/2/2013: Condiciones del régimen de ausencias al trabajo",
                resumen: "Esta orden regula los días de ausencia por enfermedad o accidente sin descuento en nómina (hasta 4 días, 3 consecutivos max. si no es IT). Establece el descuento del 50% para ausencias que excedan este límite y los requisitos para su aplicación al personal de la Administración General de Castilla y León y Organismos Autónomos.",
                pagina: "1-2",
                etiquetas: ["ausencia", "enfermedad", "accidente", "incapacidad temporal", "retribuciones", "descuento", "nómina", "funcionarios", "personal laboral", "normativa autonómica", "orden"],
                archivo_acta: "Orden+HAC-2-2013 a 1206202522.pdf",
                aplicabilidad: "Ambos",
                tipo_documento: "Orden",
                categoria_jerarquica: ['Funcionarios', 'Normativa Autonómica', 'General', 'Órdenes'],
                articulos: [
                    { numero: "1", tema: "Objeto y ámbito de aplicación", resumen: "Define el propósito y a quién aplica la orden, regulando los días de ausencia sin descuento en nómina y los requisitos para el descuento." },
                    { numero: "2", tema: "Descuento en nómina", resumen: "Establece la deducción del 50% de las retribuciones para los días de ausencia que superen el límite permitido y no sean IT." },
                    { numero: "3", tema: "Días de ausencia sin deducción de retribuciones", resumen: "Permite hasta cuatro días de ausencia anual por enfermedad/accidente sin descuento, de los cuales solo tres pueden ser consecutivos, si no hay IT y se justifican." }
                ]
            },
            // NUEVO DOCUMENTO: Decreto-ley 3/2018
            {
                id: "decreto-ley-3-2018",
                fecha: "30/08/2018",
                tema: "Decreto-ley 3/2018: Incremento retribuciones y 100% abono en IT",
                resumen: "Este Decreto-ley habilita el incremento de las retribuciones del personal al servicio del sector público de Castilla y León y elimina las limitaciones para el abono del 100% en situaciones de incapacidad temporal (IT). Deroga el Artículo 69 de la Ley 1/2012, que establecía descuentos, y permite retornar al abono íntegro de retribuciones en IT desde el primer día. Menciona la Orden HAC/2/2013 en su contexto histórico.",
                pagina: "1-6",
                etiquetas: ["incapacidad temporal", "retribuciones", "sector público", "decreto-ley", "normativa autonómica", "IT", "funcionarios", "personal laboral", "salud", "nómina"],
                archivo_acta: "Decreto-ley 3_2018 se habilita el incremento de las retribuciones abono IT del personal al servicio del sector publico-consolidado.pdf",
                aplicabilidad: "Ambos",
                tipo_documento: "Decreto-ley",
                categoria_jerarquica: ['Funcionarios', 'Normativa Autonómica', 'General', 'Decretos'],
                articulos: [
                    { numero: "Preámbulo", tema: "Justificación y antecedentes", resumen: "Explica la necesidad de adaptar la normativa para el incremento retributivo y la eliminación de limitaciones en IT, haciendo referencia a normativas estatales y autonómicas previas, incluida la Orden HAC/2/2013." },
                    { numero: "1", tema: "Normas Generales (Incremento Retributivo)", resumen: "Detalla el aumento del 0,25% en las retribuciones y las nuevas cuantías de sueldo, trienios y complemento de destino para funcionarios desde julio de 2018." },
                    { numero: "2", tema: "Fondos adicionales", resumen: "Establece la posibilidad de destinar un 0,20% adicional de la masa salarial para mejoras de productividad, eficiencia, revisión de complementos específicos, etc." },
                    { numero: "Disposición derogatoria primera", tema: "Derogación del Art. 69 Ley 1/2012", resumen: "Deroga específicamente el artículo que establecía limitaciones en el abono de retribuciones en situaciones de IT." },
                    { numero: "Disposición derogatoria segunda", tema: "Derogación Disposición final primera Ley 8/2017", resumen: "Deroga otra disposición relacionada con la Ley de Presupuestos Generales de CyL para 2018." },
                    { numero: "Disposición final", tema: "Entrada en vigor", resumen: "Establece que el Decreto-Ley entrará en vigor al día siguiente de su publicación." }
                ]
            },


            // Datos de los documentos DGFP
            { id: "dgfp-lactancia-parto-multiple-2017-05-16", fecha: "16/05/2017", tema: "Permiso de Lactancia en caso de Parto Múltiple", resumen: "Consulta sobre el tiempo de disfrute diario del permiso de lactancia para funcionarios en casos de parto múltiple, multiplicando el tiempo por el número de hijos. Permiso hasta los doce meses del menor. Menciona Art. 48 del Real Decreto Legislativo 5/2015 (EBEP), Art. 61 de Ley 7/2005 (Función Pública de CyL), y Art. 45 del Decreto 59/2013 (Jornada, Horario, Permisos CyL).", pagina: "1-2", etiquetas: ["permiso", "lactancia", "parto múltiple", "funcionarios", "EBEP", "Ley 7/2005", "Decreto 59/2013"], archivo_acta: "DGFP PERMISO DE LACTANCIA EN CASO DE PARTO MÚLTIPLE 16_05_2017.pdf", aplicabilidad: "Ambos", tipo_documento: "Consulta DGFP", categoria_jerarquica: ['Funcionarios', 'Interpretación Autonómica', 'Dirección General de Función Pública (DGFP)'] },
            { id: "dgfp-aclaracion-enfermedad-grave-familiar-2017-03-27", fecha: "27/03/2017", tema: "Aclaración Permiso por Enfermedad Grave de Familiar (Días Consecutivos)", resumen: "Aclara que los permisos por enfermedad grave de familiar (Art. 77.1.b Convenio Colectivo) computados en días naturales deben disfrutarse de forma ininterrumpida.", pagina: "1", etiquetas: ["permiso", "enfermedad grave", "familiar", "días naturales", "Convenio Colectivo"], archivo_acta: "DGFP ACLARACIÓN DEL CRITERIO DERIVADO DE LA CONSULTA SOBRE EL PERMISO POR ENFERMEDAD GRAVE DE FAMILIAR 27_03_2017.pdf", aplicabilidad: "Ambos", tipo_documento: "Aclaración DGFP", categoria_jerarquica: ['Funcionarios', 'Interpretación Autonómica', 'Dirección General de Función Pública (DGFP)'] },
            { id: "dgfp-consulta-enfermedad-grave-familiar-2017-03-15", fecha: "15/03/2017", tema: "Consulta Permiso por Enfermedad Grave de Familiar (Disfrute Flexible)", resumen: "La Dirección General de la Función Pública considera que el permiso por enfermedad grave de familiar (Art. 39.a Decreto 59/2013 y Art. 77.1.b Convenio Colectivo) podrá disfrutarse en días consecutivos o no consecutivos a instancia del solicitante, siempre que se mantenga el hecho causante. Incluye normativa aplicable.", pagina: "1-2", etiquetas: ["permiso", "enfermedad grave", "familiar", "días consecutivos", "días discontinuos", "funcionarios", "Convenio Colectivo", "Decreto 59/2013"], archivo_acta: "DGFP CONSULTA SOBRE EL PERMISO POR ENFERMEDAD GRAVE DE FAMILIAR 15_03_2017.pdf", aplicabilidad: "Ambos", tipo_documento: "Consulta DGFP", categoria_jerarquica: ['Funcionarios', 'Interpretación Autonómica', 'Dirección General de Función Pública (DGFP)'] },
            { id: "dgfp-ausencias-enfermedad-no-IT-2017-03-15", fecha: "15/03/2017", tema: "Días de Ausencia por Enfermedad No Constitutiva de Incapacidad Temporal", resumen: "Aclara que la Orden HAC/2/2013 (Art. 3) permite 4 días anuales de ausencia por enfermedad/accidente no IT (Incapacidad Temporal), de los cuales solo tres pueden ser consecutivos. Estos días deben entenderse como días laborables.", pagina: "1-2", etiquetas: ["ausencia", "enfermedad", "incapacidad temporal", "días laborables", "retribuciones", "Orden HAC/2/2013"], archivo_acta: "DGFP ARMONIZACIÓN DE PERMISOS Y LICENCIAS  15_03_2017.pdf", aplicabilidad: "Ambos", tipo_documento: "Consulta DGFP", categoria_jerarquica: ['Funcionarios', 'Interpretación Autonómica', 'Dirección General de Función Pública (DGFP)'] },
            { id: "dgfp-vacaciones-jubilacion-parcial-2017-05-12", fecha: "12/05/2017", tema: "Días adicionales de vacaciones y asuntos particulares por antigüedad (Jubilación Parcial)", resumen: "Criterio de la DGFP sobre el disfrute acumulado de días adicionales de vacaciones y asuntos particulares por antigüedad para personal laboral jubilado parcialmente con jornada concentrada, al ser idénticos a los días ordinarios. Menciona Art. 17.5, 58.1 y 59.6 de la Ley 7/2005.", pagina: "1-2", etiquetas: ["vacaciones", "asuntos particulares", "antigüedad", "jubilación parcial", "jornada concentrada", "personal laboral", "Ley 7/2005"], archivo_acta: "DGFP Criterio dias adicionales vacaciones asuntos particulares  jubilacion parcial acumulada 12_05_2017.pdf", aplicabilidad: "Laborales", tipo_documento: "Criterio DGFP", categoria_jerarquica: ['Funcionarios', 'Interpretación Autonómica', 'Dirección General de Función Pública (DGFP)'] },
            { id: "dgfp-reduccion-jornada-enfermedad-muy-grave-2017-07-13", fecha: "13/07/2017", tema: "Reducción de jornada por enfermedad muy grave de familiar de primer grado (acumulación)", resumen: "Criterio de la DGFP que permite a funcionarios públicos acumular en jornadas completas la reducción de jornada por enfermedad muy grave de familiar de primer grado, siempre que se acredite el requisito. Puede denegarse por necesidades del servicio. Menciona Art. 61.e Ley 7/2005, Art. 48.i EBEP, Art. 45.e Decreto 59/2013.", pagina: "1-2", etiquetas: ["reducción jornada", "enfermedad muy grave", "familiar", "funcionarios", "conciliación", "Ley 7/2005", "EBEP", "Decreto 59/2013"], archivo_acta: "DGFP REDUCCIÓN DE JORNADA POR ENFERMEDAD MUY GRAVE DE FAMILIAR DE PRIMER 13_07_2017.pdf", aplicabilidad: "Funcionarios", tipo_documento: "Consulta DGFP", categoria_jerarquica: ['Funcionarios', 'Interpretación Autonómica', 'Dirección General de Función Pública (DGFP)'] },
            { id: "dgfp-compatibilidad-permiso-paternidad-2017-07-13", fecha: "13/07/2017", tema: "Compatibilidad Permiso por Nacimiento/Adopción/Acogimiento y Suspensión Contrato Paternidad", resumen: "Criterio de la DGFP que establece la compatibilidad del permiso por nacimiento/adopción/acogimiento (Art. 77.1.b Convenio Colectivo) con la suspensión del contrato por paternidad (Art. 83.4 Convenio Colectivo y Art. 48.7 Estatuto de los Trabajadores), ya que esta última inicia tras la finalización del permiso.", pagina: "1-2", etiquetas: ["permiso", "nacimiento", "adopción", "paternidad", "acogimiento", "personal laboral", "Convenio Colectivo", "Estatuto de los Trabajadores"], archivo_acta: "DGFP COMPATIBILIDAD ENTRE EL PERMISO POR NACIMIENTO ADOPCIÓN O ACOGIMIENTO PERMANENTE Y LA SUSPENSION DEL CONTRATO POR PATERNIDAD PREVISTOS PARA EL PERSONAL LABORAL 13_07_2017.pdf", aplicabilidad: "Laborales", tipo_documento: "Consulta DGFP", categoria_jerarquica: ['Funcionarios', 'Interpretación Autonómica', 'Dirección General de Función Pública (DGFP)'] },
            { id: "dgfp-plazo-vacaciones-it-maternidad-paternidad-2018-01-31", fecha: "31/01/2018", tema: "Plazo máximo para disfrutar vacaciones (IT, Maternidad, Paternidad, Riesgo Embarazo/Lactancia)", resumen: "Criterio de la DGFP sobre la posibilidad de disfrutar vacaciones fuera del año natural (hasta 18 meses después) if not se pudieron iniciar o fueron interrumpidas por IT, riesgo embarazo/lactancia, o permisos de maternidad/paternidad (incluida lactancia acumulada). Aplica Art. 50.2 EBEP y Art. 30 Decreto 59/2013.", pagina: "1-4", etiquetas: ["vacaciones", "incapacidad temporal", "paternidad", "maternidad", "riesgo embarazo", "riesgo lactancia", "lactancia acumulada", "EBEP", "Decreto 59/2013", "funcionarios"], archivo_acta: "DGFP_PLAZO_MAXIMO_VACACIONES_IT_PERMISOS_PATERNIDAD_MATERNIDAD_RIESGO_EMBARZO_LACTANCIA_2018_01_31.pdf", aplicabilidad: "Funcionarios", tipo_documento: "Consulta DGFP", categoria_jerarquica: ['Funcionarios', 'Interpretación Autonómica', 'Dirección General de Función Pública (DGFP)'] },
            { id: "dgfp-colaboracion-tribunales-2017-07-13", fecha: "13/07/2017", tema: "Compensaciones Horarias por Colaboración en Pruebas Selectivas", resumen: "Establece compensaciones horarias (una jornada por jornada de mañana o tarde, dos por jornada completa) para empleados públicos que colaboren en pruebas selectivas en días no laborables. Deben disfrutarse en un año y están condicionadas por necesidades del servicio. Menciona Artículo 13 del Decreto 67/1999.", pagina: "1-2", etiquetas: ["compensación", "pruebas selectivas", "empleo público", "días no laborables", "formación"], archivo_acta: "DGFP Instrucción+colaboración+tribunales13_07_2017.pdf", aplicabilidad: "Ambos", tipo_documento: "Instrucción DGFP", categoria_jerarquica: ['Funcionarios', 'Interpretación Autonómica', 'Dirección General de Función Pública (DGFP)'] },
            { id: "dgfp-complementacion-it-2018-09-04", fecha: "04/09/2018", tema: "Complementación de Prestación Económica en IT y Justificación de Ausencias por Enfermedad", resumen: "Establece criterios para complementar al 100% las retribuciones en situaciones de incapacidad temporal (IT) desde el primer día. Los cuatro días de ausencia por enfermedad sin baja médica requieren justificante facultativo. Aplica a todo el personal de la Administración General. Menciona Ley 1/2012, Decreto-Ley 1/2012, Decreto Ley 3/2018, Ley 6/2018, Orden HAC/2/2013.", pagina: "1-5", etiquetas: ["incapacidad temporal", "retribuciones", "ausencia", "enfermedad", "baja médica", "complemento"], archivo_acta: "DGFP complementación de la prestación económica en situaciones de incapacidad temporal y para la justificación de ausencias por enfermedad 04_09_2018.pdf", aplicabilidad: "Ambos", tipo_documento: "Instrucción DGFP", categoria_jerarquica: ['Funcionarios', 'Interpretación Autonómica', 'Dirección General de Función Pública (DGFP)'] },
            { id: "dgfp-licencia-asuntos-propios-2017-11-07", fecha: "07/11/2017", tema: "Régimen de Disfrute de Licencia por Asuntos Propios o Sin Retribución", resumen: "Define el régimen de disfrute de licencias por asuntos propios (funcionarios) y sin retribución (laborales). Duración acumulada máxima de tres meses cada dos años y mínima de cinco días. Siempre subordinado a necesidades del servicio. Menciona Art. 62 Ley 7/2005, Art. 35 Decreto 59/2013, Art. 81 Convenio Colectivo.", pagina: "1-4", etiquetas: ["licencia", "asuntos propios", "sin retribución", "funcionarios", "personal laboral", "conciliación"], archivo_acta: "DGFP INSTRUCCIÓN licencia por asuntos propios o de la licencia sin retribución 07_11_2017.pdf", aplicabilidad: "Ambos", tipo_documento: "Instrucción DGFP", categoria_jerarquica: ['Funcionarios', 'Interpretación Autonómica', 'Dirección General de Función Pública (DGFP)'] },

            // Nuevo documento de Instrucción de la Viceconsejera de Función Pública y Gobierno Abierto
            {
                id: "instruccion-complementacion-it-2018-09-04",
                fecha: "04/09/2018",
                tema: "Instrucción: Complementación IT y Justificación Ausencias por Enfermedad",
                resumen: "Instrucción que establece criterios para la complementación al 100% de la prestación económica en situaciones de incapacidad temporal (IT) y para la justificación de ausencias por enfermedad sin baja médica. Es aplicable a todo el personal de la Administración General de la Comunidad de Castilla y León. Deroga normativas previas sobre descuentos en IT, mencionando expresamente el Decreto Ley 3/2018 y la Orden HAC/2/2013.",
                pagina: "1-5",
                etiquetas: ["incapacidad temporal", "IT", "ausencia", "enfermedad", "retribuciones", "complemento", "funcionarios", "personal laboral", "normativa autonómica", "instrucción", "baja médica"],
                archivo_acta: "Instrucción+VCFPyGA+complementación+IT.pdf",
                aplicabilidad: "Ambos",
                tipo_documento: "Instrucción",
                categoria_jerarquica: ['Funcionarios', 'Normativa Autonómica', 'General', 'Instrucciones'],
                articulos: [
                    { numero: "1ª", tema: "Ámbito objetivo y subjetivo de aplicación", resumen: "Define a quién y a qué situaciones se aplica la Instrucción, excluyendo centros sanitarios del Servicio de Salud de Castilla y León." },
                    { numero: "2ª", tema: "Régimen de complementación de la prestación económica por incapacidad temporal", resumen: "Establece el complemento retributivo para alcanzar el 100% de las retribuciones ordinarias desde el primer día de IT, tanto para contingencias comunes como profesionales." },
                    { numero: "3ª", tema: "Cálculo de la complementación de las prestaciones económicas por incapacidad temporal", resumen: "Detalla cómo se calculan los complementos, incluyendo retribuciones fijas e invariables y el tratamiento de variables como el complemento de atención continuada y nocturnidad." },
                    { numero: "4ª", tema: "Duración y extinción de la situación de Incapacidad Temporal", resumen: "Regula la duración y extinción de la IT según el régimen de Seguridad Social aplicable y el requisito de existencia de prestación para la complementación." },
                    { numero: "5ª", tema: "Justificación de ausencias por enfermedad sin baja médica", resumen: "Especifica que los cuatro días de ausencia por enfermedad (Orden HAC/2/2013) requieren justificante facultativo desde el primer día." },
                    { numero: "6ª", tema: "Aplicación de la Instrucción", resumen: "Indica que la complementación se aplica a bajas y recaídas posteriores a la entrada en vigor del Decreto Ley 3/2018." }
                ]
            },
            
            // Datos del Decreto 59/2013, de 5 de septiembre, por el que se regula la jornada, el horario, las vacaciones, los permisos y las licencias del personal funcionario
            {
                id: "decreto-59-2013-preambulo",
                fecha: "05/09/2013",
                tema: "Preámbulo del Decreto 59/2013",
                resumen: `El régimen sobre jornada y horarios, vacaciones, licencias y permisos del personal al
servicio de la Administración de la Comunidad de Castilla y León vigente hasta fechas
recientes se encontraba disperso en diversas normas. Por un lado, las previsiones
contenidas en el Capítulo IV del Título IV de la Ley 7/2005, de 24 de mayo, de la Función
Pública de Castilla y León; por otro, diversas
`,
                pagina: "1-2", // Suponiendo que el preámbulo abarca las primeras páginas
                etiquetas: ["decreto", "jornada", "horario", "vacaciones", "permisos", "licencias", "función pública"],
                archivo_acta: "Decreto+59+2013+texto+consolidado+a+18_03_2016.pdf",
                aplicabilidad: "Funcionarios",
                tipo_documento: "Decreto",
                categoria_jerarquica: ['Funcionarios', 'Normativa Autonómica', 'General', 'Decretos']
            },
            // Título Preliminar
            {
                id: "decreto-59-2013-titulo-preliminar-capitulo-unico",
                fecha: "05/09/2013",
                tema: "Título Preliminar. Disposiciones Generales (Decreto 59/2013)",
                resumen: "Este título establece el objeto y el ámbito de aplicación del Decreto 59/2013, definiendo a quién se aplica esta normativa sobre jornada, horarios, vacaciones y permisos en la Administración de Castilla y León.",
                pagina: "3-4",
                etiquetas: ["decreto", "ámbito de aplicación", "disposiciones generales"],
                archivo_acta: "Decreto+59+2013+texto+consolidado+a+18_03_2016.pdf",
                aplicabilidad: "Funcionarios",
                tipo_documento: "Decreto",
                categoria_jerarquica: ['Funcionarios', 'Normativa Autonómica', 'General', 'Decretos'],
                articulos: [
                    {
                        numero: "1",
                        tema: "Objeto del Decreto",
                        resumen: "Define el propósito de la norma: regular la jornada, el horario, las vacaciones, los permisos y las licencias del personal funcionario al servicio de la Administración de la Comunidad de Castilla y León."
                    },
                    {
                        numero: "2",
                        tema: "Ámbito subjetivo de aplicación",
                        resumen: "Especifica a qué personal se aplica el decreto, incluyendo al personal funcionario y excluyendo a determinados colectivos con normativa específica."
                    }
                ]
            },
            // Título I
            {
                id: "decreto-59-2013-titulo-i-capitulo-i",
                fecha: "05/09/2013",
                tema: "Título I. Jornada y Horario de Trabajo. Capítulo I. Disposiciones generales sobre jornada de trabajo (Decreto 59/2013)",
                resumen: "Establece las bases de la jornada de trabajo, incluyendo la jornada máxima anual, las jornadas especiales y la jornada reducida, así como su distribución y compensaciones.",
                pagina: "4-6",
                etiquetas: ["decreto", "jornada", "horario", "jornada máxima", "jornada reducida"],
                archivo_acta: "Decreto+59+2013+texto+consolidado+a+18_03_2016.pdf",
                aplicabilidad: "Funcionarios",
                tipo_documento: "Decreto",
                categoria_jerarquica: ['Funcionarios', 'Normativa Autonómica', 'General', 'Decretos'],
                articulos: [
                    {
                        numero: "3",
                        tema: "Jornada máxima anual ordinaria",
                        resumen: "Define la jornada máxima anual de trabajo ordinario y su cómputo."
                    },
                    {
                        numero: "4",
                        tema: "Jornada de dedicación especial y jornadas especiales",
                        resumen: "Regula las jornadas con dedicación especial y otras jornadas específicas."
                    },
                    {
                        numero: "5",
                        tema: "Jornada reducida por interés particular",
                        resumen: "Establece la posibilidad de reducir la jornada de trabajo por motivos de interés particular."
                    },
                    {
                        numero: "6",
                        tema: "Distribución regular de la jornada",
                        resumen: "Detalla cómo se distribuye la jornada de trabajo de forma regular."
                    },
                    {
                        numero: "7",
                        tema: "Distribución irregular de la jornada",
                        resumen: "Permite la distribución irregular de la jornada bajo ciertas condiciones."
                    },
                    {
                        numero: "8",
                        tema: "Compensación horaria",
                        resumen: "Normas para la compensación de horas trabajadas fuera de la jornada habitual."
                    }
                ]
            },
            {
                id: "decreto-59-2013-titulo-i-capitulo-ii",
                fecha: "05/09/2013",
                tema: "Título I. Jornada y Horario de Trabajo. Capítulo II. Calendario laboral (Decreto 59/2013)",
                resumen: "Regula la elaboración, aprobación y publicación del calendario laboral, incluyendo las compensaciones por días festivos.",
                pagina: "6-7",
                etiquetas: ["decreto", "jornada", "horario", "calendario laboral", "días festivos"],
                archivo_acta: "Decreto+59+2013+texto+consolidado+a+18_03_2016.pdf",
                aplicabilidad: "Funcionarios",
                tipo_documento: "Decreto",
                categoria_jerarquica: ['Funcionarios', 'Normativa Autonómica', 'General', 'Decretos'],
                articulos: [
                    {
                        numero: "9",
                        tema: "Calendario laboral",
                        resumen: "Disposiciones generales sobre el calendario laboral anual."
                    },
                    {
                        numero: "10",
                        tema: "Órganos competentes",
                        resumen: "Define los órganos responsables de la aprobación del calendario laboral."
                    },
                    {
                        numero: "11",
                        tema: "Vigencia",
                        resumen: "Establece la validez temporal del calendario laboral."
                    },
                    {
                        numero: "12",
                        tema: "Compensaciones de jornada (días 24 y 31 dic)",
                        resumen: "Regula la compensación de la jornada para los días 24 y 31 de diciembre."
                    }
                ]
            },
            {
                id: "decreto-59-2013-titulo-i-capitulo-iii",
                fecha: "05/09/2013",
                tema: "Título I. Jornada y Horario de Trabajo. Capítulo III. Horario de trabajo (Decreto 59/2013)",
                resumen: "Detalla el horario general, las adaptaciones por conciliación y violencia de género, y los horarios especiales para ciertos puestos.",
                pagina: "7-9",
                etiquetas: ["decreto", "horario", "conciliación", "violencia de género", "horarios especiales"],
                archivo_acta: "Decreto+59+2013+texto+consolidado+a+18_03_2016.pdf",
                aplicabilidad: "Funcionarios",
                tipo_documento: "Decreto",
                categoria_jerarquica: ['Funcionarios', 'Normativa Autonómica', 'General', 'Decretos'],
                articulos: [
                    {
                        numero: "13",
                        tema: "Horario general en las dependencias administrativas",
                        resumen: "Establece el horario de obligada permanencia en el puesto de trabajo."
                    },
                    {
                        numero: "14",
                        tema: "Adaptación del horario por razones de conciliación",
                        resumen: "Regula la flexibilidad horaria por motivos de conciliación familiar."
                    },
                    {
                        numero: "15",
                        tema: "Adaptación del horario por razón de violencia de género",
                        resumen: "Disposiciones para la adaptación del horario de víctimas de violencia de género."
                    },
                    {
                        numero: "16",
                        tema: "Horarios especiales",
                        resumen: "Define los horarios específicos para determinados puestos o servicios."
                    }
                ]
            },
            {
                id: "decreto-59-2013-titulo-i-capitulo-iv",
                fecha: "05/09/2013",
                tema: "Título I. Jornada y Horario de Trabajo. Capítulo IV. Otros tiempos de trabajo (Decreto 59/2013)",
                resumen: "Aborda el concepto de trabajo efectivo, las pausas y el tiempo dedicado a la formación dentro de la jornada laboral.",
                pagina: "10-11",
                etiquetas: ["decreto", "jornada", "horario", "trabajo efectivo", "pausas", "formación"],
                archivo_acta: "Decreto+59+2013+texto+consolidado+a+18_03_2016.pdf",
                aplicabilidad: "Funcionarios",
                tipo_documento: "Decreto",
                categoria_jerarquica: ['Funcionarios', 'Normativa Autonómica', 'General', 'Decretos'],
                articulos: [
                    {
                        numero: "17",
                        tema: "Trabajo efectivo",
                        resumen: "Aclara qué se considera tiempo de trabajo efectivo."
                    },
                    {
                        numero: "18",
                        tema: "Pausa (tiempo de descanso)",
                        resumen: "Regula las pausas durante la jornada de trabajo."
                    },
                    {
                        numero: "19",
                        tema: "Tiempo para la formación",
                        resumen: "Establece el tiempo dedicado a la formación profesional."
                    }
                ]
            },
            {
                id: "decreto-59-2013-titulo-i-capitulo-v",
                fecha: "05/09/2013",
                tema: "Título I. Jornada y Horario de Trabajo. Capítulo V. Control horario (Decreto 59/2013)",
                resumen: "Define el objeto del control horario, los responsables de su aplicación y los medios utilizados para su registro y justificación de ausencias.",
                pagina: "11-12",
                etiquetas: ["decreto", "control horario", "registro", "ausencias"],
                archivo_acta: "Decreto+59+2013+texto+consolidado+a+18_03_2016.pdf",
                aplicabilidad: "Funcionarios",
                tipo_documento: "Decreto",
                categoria_jerarquica: ['Funcionarios', 'Normativa Autonómica', 'General', 'Decretos'],
                articulos: [
                    {
                        numero: "20",
                        tema: "Objeto del Decreto",
                        resumen: "Define la finalidad del sistema de control horario."
                    },
                    {
                        numero: "21",
                        tema: "Responsables del control horario",
                        resumen: "Establece quiénes son los encargados de supervisar el control horario."
                    },
                    {
                        numero: "22",
                        tema: "Medios de control horario",
                        resumen: "Describe los sistemas o herramientas para registrar la jornada."
                    },
                    {
                        numero: "23",
                        tema: "Justificación de ausencias",
                        resumen: "Regula la forma y los requisitos para justificar las ausencias al trabajo."
                    }
                ]
            }
,
            {
                id: "decreto-59-2013-disposiciones-adicionales",
                fecha: "05/09/2013",
                tema: "Disposiciones adicionales (Decreto 59/2013)",
                resumen: "Incluye previsiones sobre control de absentismo, discapacidad, parejas de hecho, permisos electorales, anotaciones en el Registro General de Personal y días hábiles e inhábiles.",
                pagina: "",
                etiquetas: ["decreto", "disposiciones adicionales"],
                archivo_acta: "Decreto+59+2013+texto+consolidado+a+18_03_2016.pdf",
                aplicabilidad: "Funcionarios",
                tipo_documento: "Decreto",
                categoria_jerarquica: ['Funcionarios', 'Normativa Autonómica', 'General', 'Decretos'],
                articulos: [
                    { numero: "Adicional 1ª", tema: "Control de absentismo" },
                    { numero: "Adicional 2ª", tema: "Persona con discapacidad" },
                    { numero: "Adicional 3ª", tema: "Parejas de hecho" },
                    { numero: "Adicional 4ª", tema: "Permisos por motivos electorales" },
                    { numero: "Adicional 5ª", tema: "Anotación en el Registro General de Personal" },
                    { numero: "Adicional 6ª", tema: "Días hábiles e inhábiles" }
                ]
            },
            {
                id: "decreto-59-2013-disposicion-transitoria",
                fecha: "05/09/2013",
                tema: "Disposición transitoria (Decreto 59/2013)",
                resumen: "Régimen transitorio de disfrute de días adicionales por antigüedad durante 2015-2018.",
                pagina: "",
                etiquetas: ["decreto", "disposición transitoria"],
                archivo_acta: "Decreto+59+2013+texto+consolidado+a+18_03_2016.pdf",
                aplicabilidad: "Funcionarios",
                tipo_documento: "Decreto",
                categoria_jerarquica: ['Funcionarios', 'Normativa Autonómica', 'General', 'Decretos'],
                articulos: [
                    { numero: "1", tema: "Aplicación en 2015" },
                    { numero: "2", tema: "Disfrute en 2016-2018" }
                ]
            },
            {
                id: "decreto-59-2013-disposicion-derogatoria",
                fecha: "05/09/2013",
                tema: "Disposición derogatoria única (Decreto 59/2013)",
                resumen: "Deroga el Decreto 134/2002 y el Decreto 210/2000, así como disposiciones de igual o inferior rango que se opongan.",
                pagina: "",
                etiquetas: ["decreto", "disposición derogatoria"],
                archivo_acta: "Decreto+59+2013+texto+consolidado+a+18_03_2016.pdf",
                aplicabilidad: "Funcionarios",
                tipo_documento: "Decreto",
                categoria_jerarquica: ['Funcionarios', 'Normativa Autonómica', 'General', 'Decretos'],
                articulos: []
            },
            {
                id: "decreto-59-2013-disposiciones-finales",
                fecha: "05/09/2013",
                tema: "Disposiciones finales (Decreto 59/2013)",
                resumen: "Modifica el Reglamento de distinciones, otorga facultades de desarrollo y adaptación, y establece la entrada en vigor del decreto.",
                pagina: "",
                etiquetas: ["decreto", "disposiciones finales"],
                archivo_acta: "Decreto+59+2013+texto+consolidado+a+18_03_2016.pdf",
                aplicabilidad: "Funcionarios",
                tipo_documento: "Decreto",
                categoria_jerarquica: ['Funcionarios', 'Normativa Autonómica', 'General', 'Decretos'],
                articulos: [
                    { numero: "Final 1ª", tema: "Modificación del Reglamento de distinciones" },
                    { numero: "Final 2ª", tema: "Facultades de desarrollo" },
                    { numero: "Final 3ª", tema: "Facultades de adaptación" },
                    { numero: "Final 4ª", tema: "Entrada en vigor" }
                ]
            }
        ];

