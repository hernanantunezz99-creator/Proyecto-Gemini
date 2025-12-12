const DATOS_TEMPORADAS = {
    1: {
        titulo: 'TEMPORADA 1: 2026 — "LA TRINCHERA"',
        objetivos: [
            // FILA 1
            {
                titulo: "🏥 Medicina (4º)",
                metrica: "Métrica Global: Aprobar 4 materias (Sin dejar previas).",
                tareas: [
                    "Aprobar Medicina en el Primer Nivel de Atención (PNA).",
                    "Aprobar Bases Científicas de la Patología.",
                    "Aprobar Pediatría.",
                    "Aprobar Ginecología y Neonatología."
                ]
            },
            {
                titulo: "🧠 Psicología (2º)",
                metrica: "Métrica Global: Aprobar 11 materias (Completar 3º y 4º semestre).",
                tareas: [
                    "Aprobar Psicología Social.",
                    "Aprobar Psicología, Sujeto y Aprendizaje.",
                    "Aprobar Métodos y Técnicas Cualitativas.",
                    "Aprobar Ética y Deontología.",
                    "Aprobar Articulación de Saberes III: Clínica y Subjetividad.",
                    "Aprobar Idiomas y Cooperación Institucional.",
                    "Aprobar Clínica I: Fundamentos Psicoanalíticos.",
                    "Aprobar Psicología y Salud.",
                    "Aprobar Métodos y Técnicas Cuantitativas.",
                    "Aprobar Diseño de Proyectos.",
                    "Aprobar Herramientas de la Psicología Social y Clínica."
                ]
            },
            {
                titulo: "👶 Coparentalidad",
                metrica: "Métrica Global: Vínculo sólido y cumplimiento total desde el nacimiento (Mayo).",
                tareas: [
                    "Acordar verbalmente pautas de crianza y visitas con la madre (basado en confianza).",
                    "Pagar el 100% de los aportes económicos mensuales en fecha (Mayo a Diciembre).",
                    "Asistir al 100% de los controles pediátricos obligatorios.",
                    "Sacar 1 foto semanal del bebé para crear un Timelapse de crecimiento.",
                    "Estimular/Enseñar una habilidad o juego nuevo cada semana desde el nacimiento."
                ]
            },
            {
                titulo: "🗣️ Idiomas",
                metrica: "Métrica Global: Certificación C1 en Inglés y Base B1 en Alemán.",
                tareas: [
                    "Inglés: Obtener el Certificado C1 (Advanced) antes de fin de año.",
                    "Inglés: Leer 2 papers médicos/académicos por semana (~100 al año).",
                    "Inglés: Realizar 1 práctica de escritura (writing/essay) al mes.",
                    "Alemán: Mantener racha de 365 días en Duolingo/Busuu.",
                    "Alemán: Completar módulos nivel B1 y alcanzar 1.500 palabras de vocabulario."
                ]
            },
            // FILA 2
            {
                titulo: "💻 Programación",
                metrica: "Métrica Global: Lógica dominada y 2 proyectos funcionales.",
                tareas: [
                    "Dominar sintaxis de Python y JavaScript.",
                    "Comprender estructura HTML/CSS.",
                    "Familiarizarse con un framework (Flask o React básico).",
                    "Subir 2 proyectos funcionales a GitHub (Calculadora médica simple y Prototipo App Stickers)."
                ]
            },
            {
                titulo: "💸 Economía",
                metrica: "Métrica Global: Negocios validados y título obtenido.",
                tareas: [
                    "3D: Crear marca, logo y catálogo de 10 productos.",
                    "3D: Mantener ritmo de producción de 2–3 lotes semanales.",
                    "3D: Lograr ingreso de $100 USD/mes hacia fin de año.",
                    "Masoterapia: Pagar deuda de cuotas y obtener Diploma Oficial.",
                    "Masoterapia: Completar 20 sesiones de práctica."
                ]
            },
            {
                titulo: "🏋️ Fuerza (Gym)",
                metrica: "Métrica Global: Frecuencia 5-6 días/sem y Cargas de Fuerza ×1.75.",
                tareas: [
                    "Aperturas: 95 kg",
                    "Pecho Inclinado: 85 kg",
                    "Press Militar Máq: 85 kg",
                    "Tríceps Máq: 110 kg",
                    "Jalón Polea: 75 kg",
                    "Remo Máquina: 100 kg",
                    "Curl Bíceps (Mancuerna): 15 kg c/u",
                    "Prensa Pierna: 170 kg",
                    "Extensión: 100 kg",
                    "Hip Thrust: 110 kg"
                ]
            },
            {
                titulo: "🤸 Calistenia",
                metrica: "Métrica Global: Dominio corporal (PDFa 2026).",
                tareas: [
                    "Completar rutina: 5 min Plancha, 20 Dominadas, 100 Flexiones."
                ]
            }
        ]
    },
    2: {
        titulo: 'TEMPORADA 2: 2027 — "EL DESPEGUE"',
        objetivos: [
            // FILA 1
            {
                titulo: "🏥 Medicina (5º)",
                metrica: "Métrica Global: Aprobar las materias clínicas y actuar como médico en formación.",
                tareas: [
                    "Aprobar UC19: Clínica Médica (Sin recursar).",
                    "Aprobar UC20: Patología Médica y Terapéutica (Sin recursar).",
                    "Elaborar Cuaderno de Guardia con 50 casos clínicos analizados.",
                    "Preparar 3 presentaciones clínicas completas por materia (Total: 6).",
                    "Completar banco personal de 300 preguntas de medicina interna."
                ]
            },
            {
                titulo: "🧠 Psicología (3º)",
                metrica: "Métrica Global: Aprobar 3º año completo e integrar saberes.",
                tareas: [
                    "Aprobar Psicopatología I y II.",
                    "Aprobar Evaluación Psicológica.",
                    "Aprobar Psicología Educacional.",
                    "Aprobar Psicología de la Salud.",
                    "Aprobar Psicología Laboral.",
                    "Aprobar Articulación de Saberes IV: Estado, Sociedad y Políticas Públicas.",
                    "Aprobar Métodos de Investigación Avanzada.",
                    "Redactar Trabajo Final de Integración (Tema puente entre Medicina y Psicología)."
                ]
            },
            {
                titulo: "👶 Paternidad",
                metrica: "Métrica Global: Rutina inquebrantable y educación activa (Niño 1-2 años).",
                tareas: [
                    "Consolidar rutina de convivencia efectiva: 2–3 días fijos por semana (o 8–12 días/mes).",
                    "Pagar el 100% de los aportes económicos mensuales en fecha.",
                    "Asistir al 100% de reuniones escolares (Jardín/Guardería) y controles médicos.",
                    "Continuar el Timelapse semanal (foto en misma posición) para completar el año 2.",
                    "Lograr 100 sesiones de juego de calidad (sin pantallas, suelo, juguetes educativos)."
                ]
            },
            {
                titulo: "🗣️ Idiomas",
                metrica: "Métrica Global: Nivel C2 en Inglés y Nivel B1 en Alemán.",
                tareas: [
                    "Inglés: Obtener Certificación C2 (Proficiency) o equivalente.",
                    "Inglés: Leer 3 papers/semana con fluidez total (sin diccionario).",
                    "Alemán: Alcanzar y consolidar el Nivel B1 (Independiente).",
                    "Alemán: Vocabulario activo de 2.000 palabras.",
                    "Alemán: Mantener conversación de 10 minutos sin usar traductor.",
                    "Alemán: Leer artículos de Deutsche Welle con 70% de comprensión."
                ]
            },
            // FILA 2
            {
                titulo: "💻 Programación",
                metrica: "Métrica Global: Publicar software real y usable.",
                tareas: [
                    "Publicar la App de Stickers (versión estable) en una tienda o web pública.",
                    "Alcanzar 1.000 descargas o usuarios únicos en la App.",
                    "Desarrollar 3–5 proyectos funcionales en GitHub para portafolio.",
                    "Aplicar programación a una herramienta médica propia (ej: calculadora de riesgos)."
                ]
            },
            {
                titulo: "💸 Economía",
                metrica: "Métrica Global: Ingresos recurrentes y clientes estables.",
                tareas: [
                    "3D: Mantener catálogo de 15 productos activos.",
                    "3D: Lograr 3 clientes recurrentes (tiendas o revendedores).",
                    "3D: Ingreso: Superar los $200 USD/mes de forma sostenida.",
                    "Masoterapia: Tener 5 clientes fijos mensuales.",
                    "Masoterapia: Generar $150 USD/mes y establecer 1 día fijo de Consultorio."
                ]
            },
            {
                titulo: "🏋️ Fuerza (Gym)",
                metrica: "Métrica Global: Fuerza Avanzada (Cargas Fin 2027) y Estética definida.",
                tareas: [
                    "Aperturas: 110 kg / Pecho Inclinado: 100 kg",
                    "Press Militar Máq: 120 kg / Tríceps Máq: 160 kg",
                    "Jalón Polea: 100 kg / Remo Máquina: 140 kg",
                    "Remo Polea: 115 kg / Predicador Máq: 40 kg",
                    "Prensa Pierna: 200 kg / Extensión: 130 kg",
                    "Hip Thrust: 160 kg / Aductores: 100 kg"
                ]
            },
            {
                titulo: "🤸 Calistenia",
                metrica: "Métrica Global: Resistencia Élite (PDFa 2027).",
                tareas: [
                    "Plancha: 7 min 30 s.",
                    "Dominadas: 30 reps.",
                    "Flexiones: 150 reps."
                ]
            }
        ]
    }
};
