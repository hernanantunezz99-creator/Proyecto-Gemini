const DATOS_TEMPORADAS = {
    1: {
        titulo: 'TEMPORADA 1: 2026 — "LA TRINCHERA"',
        objetivos: [
            {
                titulo: "🏥 Objetivo 1: Medicina (4º)",
                metrica: "Métrica: Aprobar 4 materias (Sin previas).",
                tareas: [
                    "Aprobar Medicina en el Primer Nivel de Atención (PNA).",
                    "Aprobar Bases Científicas de la Patología.",
                    "Aprobar Pediatría.",
                    "Aprobar Ginecología y Neonatología."
                ]
            },
            {
                titulo: "🧠 Objetivo 2: Psicología (2º)",
                metrica: "Métrica: Aprobar 11 materias (3º/4º sem).",
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
                titulo: "👶 Objetivo 3: Coparentalidad",
                metrica: "Métrica: Vínculo sólido y cumplimiento total.",
                tareas: [
                    "Acordar verbalmente pautas de crianza y visitas.",
                    "Pagar el 100% de los aportes económicos mensuales en fecha.",
                    "Asistir al 100% de los controles pediátricos obligatorios.",
                    "Sacar 1 foto semanal del bebé (Timelapse).",
                    "Estimular/Enseñar una habilidad o juego nuevo cada semana."
                ]
            },
            {
                titulo: "🗣️ Objetivo 4: Idiomas",
                metrica: "Métrica: C1 Inglés / B1 Alemán.",
                tareas: [
                    "Inglés: Obtener el Certificado C1 (Advanced).",
                    "Inglés: Leer 2 papers médicos/académicos por semana.",
                    "Inglés: Realizar 1 práctica de escritura (essay) al mes.",
                    "Alemán: Mantener racha de 365 días en Duolingo/Busuu.",
                    "Alemán: Completar módulos B1 y alcanzar 1.500 palabras."
                ]
            },
            {
                titulo: "💻 Objetivo 5: Programación",
                metrica: "Métrica: Lógica dominada y 2 proyectos.",
                tareas: [
                    "Dominar sintaxis de Python y JavaScript.",
                    "Comprender estructura HTML/CSS.",
                    "Familiarizarse con un framework (Flask o React básico).",
                    "Subir 2 proyectos funcionales a GitHub."
                ]
            },
            {
                titulo: "🏋️ Objetivo 6: Entrenamiento",
                metrica: "Métrica: 6 días/sem y Fuerza x1.75.",
                tareas: [
                    "<strong>Empuje:</strong> Aperturas 95kg / Militar 85kg / Tríceps 110kg",
                    "<strong>Tracción:</strong> Jalón 75kg / Remo 100kg / Bíceps 15kg",
                    "<strong>Pierna:</strong> Prensa 170kg / Ext 100kg / Hip Thrust 110kg",
                    "<strong>Calistenia:</strong> 5 min Plancha / 20 Dom / 100 Flex"
                ]
            },
            {
                titulo: "💸 Objetivo 7: Economía",
                metrica: "Métrica: Negocios validados.",
                tareas: [
                    "3D: Crear marca y catálogo de 10 productos.",
                    "3D: Ritmo de 2–3 lotes semanales.",
                    "3D: Ingreso de $100 USD/mes.",
                    "Masoterapia: Pagar deuda y obtener Diploma.",
                    "Masoterapia: Completar 20 sesiones de práctica."
                ]
            }
        ]
    },
    2: {
        titulo: 'TEMPORADA 2: 2027 — "EL DESPEGUE"',
        objetivos: [
            {
                titulo: "🏥 Objetivo 1: Medicina (5º)",
                metrica: "Métrica: Aprobar Clínica.",
                tareas: [
                    "Aprobar Clínica Médica (Sin recursar).",
                    "Aprobar Patología Médica y Terapéutica.",
                    "Cuaderno de Guardia con 50 casos clínicos.",
                    "Preparar 6 presentaciones clínicas completas.",
                    "Banco personal de 300 preguntas."
                ]
            },
            {
                titulo: "🧠 Objetivo 2: Psicología (3º)",
                metrica: "Métrica: Año 3 completo.",
                tareas: [
                    "Aprobar Psicopatología I y II.",
                    "Aprobar Evaluación Psicológica y Educacional.",
                    "Aprobar Psicología Salud y Laboral.",
                    "Aprobar Estado, Sociedad y Políticas Públicas.",
                    "Aprobar Métodos de Investigación Avanzada.",
                    "Redactar Trabajo Final de Integración."
                ]
            },
            {
                titulo: "👶 Objetivo 3: Paternidad",
                metrica: "Métrica: Rutina sólida (Niño 1-2 años).",
                tareas: [
                    "Convivencia efectiva: 2–3 días fijos por semana.",
                    "Pagar 100% aportes en fecha.",
                    "Asistir 100% reuniones y controles.",
                    "Timelapse Año 2 completado.",
                    "100 sesiones de juego de calidad."
                ]
            },
            {
                titulo: "🗣️ Objetivo 4: Idiomas",
                metrica: "Métrica: C2 Inglés / B1 Solido Alemán.",
                tareas: [
                    "Inglés: Certificación C2 (Proficiency).",
                    "Inglés: Leer 3 papers/semana fluido.",
                    "Alemán: Nivel B1 consolidado.",
                    "Alemán: Vocabulario 2.000 palabras.",
                    "Alemán: Conversación 10 min sin traductor."
                ]
            },
            {
                titulo: "💻 Objetivo 5: Programación",
                metrica: "Métrica: Publicación Real.",
                tareas: [
                    "Publicar App Stickers (versión estable).",
                    "Alcanzar 1.000 descargas.",
                    "3-5 proyectos en GitHub.",
                    "Crear herramienta médica propia."
                ]
            },
            {
                titulo: "🏋️ Objetivo 6: Entrenamiento",
                metrica: "Métrica: Fuerza Avanzada.",
                tareas: [
                    "<strong>Empuje:</strong> Apert 110kg / Militar 120kg / Trí 160kg",
                    "<strong>Tracción:</strong> Jalón 100kg / Remo 140kg",
                    "<strong>Pierna:</strong> Prensa 200kg / Hip Thrust 160kg",
                    "<strong>Calistenia:</strong> 7:30 Plancha / 30 Dom / 150 Flex"
                ]
            },
            {
                titulo: "💸 Objetivo 7: Economía",
                metrica: "Métrica: Ingresos recurrentes.",
                tareas: [
                    "3D: 15 productos y 3 clientes recurrentes.",
                    "3D: Superar $200 USD/mes.",
                    "Maso: 5 clientes fijos ($150 USD/mes).",
                    "Maso: 1 día fijo de Consultorio."
                ]
            }
        ]
    }
};
