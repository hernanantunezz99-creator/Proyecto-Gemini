const DATOS_TEMPORADAS = {
    1: {
        titulo: 'TEMPORADA 1: 2026 — "LA TRINCHERA"',
        objetivos: [
            // FILA 1
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
                    "Aprobar Psicología Social y Salud.",
                    "Aprobar Sujeto y Aprendizaje.",
                    "Aprobar Métodos Cualitativos/Cuantitativos.",
                    "Aprobar Ética y Deontología.",
                    "Aprobar Articulación III / Clínica I.",
                    "Aprobar Idiomas / Diseño de Proyectos."
                ]
            },
            {
                titulo: "👶 Objetivo 3: Coparentalidad",
                metrica: "Métrica: Vínculo sólido y cumplimiento.",
                tareas: [
                    "Acordar verbalmente pautas de crianza.",
                    "Pagar el 100% de aportes económicos en fecha.",
                    "Asistir al 100% de controles pediátricos.",
                    "Sacar 1 foto semanal del bebé (Timelapse).",
                    "Estimular/Enseñar una habilidad nueva/semana."
                ]
            },
            {
                titulo: "🗣️ Objetivo 4: Idiomas",
                metrica: "Métrica: C1 Inglés / B1 Alemán.",
                tareas: [
                    "Inglés: Obtener Certificado C1 (Advanced).",
                    "Inglés: Leer 2 papers médicos/semana.",
                    "Inglés: 1 essay mensual.",
                    "Alemán: Racha 365 días en Duolingo.",
                    "Alemán: Completar B1 y 1.500 palabras."
                ]
            },

            // FILA 2 (Aquí empieza el balanceo)
            {
                titulo: "💻 Objetivo 5: Programación",
                metrica: "Métrica: Lógica dominada y 2 proyectos.",
                tareas: [
                    "Dominar sintaxis de Python y JavaScript.",
                    "Comprender estructura HTML/CSS.",
                    "Framework básico (Flask/React).",
                    "Subir 2 proyectos a GitHub."
                ]
            },
            {
                titulo: "💸 Objetivo 6: Economía",
                metrica: "Métrica: Negocios validados.",
                tareas: [
                    "3D: Marca, logo y catálogo de 10 productos.",
                    "3D: Ingreso de $100 USD/mes.",
                    "Masoterapia: Pagar deuda y obtener Diploma.",
                    "Masoterapia: 20 sesiones de práctica."
                ]
            },
            {
                titulo: "🏋️ Objetivo 7: Fuerza (Gym)",
                metrica: "Métrica: Frecuencia 5-6 días/sem.",
                tareas: [
                    "<strong>Empuje:</strong> Apert 95kg / Militar 85kg / Trí 110kg",
                    "<strong>Tracción:</strong> Jalón 75kg / Remo 100kg / Bíceps 15kg",
                    "<strong>Pierna:</strong> Prensa 170kg / Ext 100kg",
                    "<strong>Glúteo:</strong> Hip Thrust 110kg"
                ]
            },
            {
                titulo: "🤸 Objetivo 8: Calistenia",
                metrica: "Métrica: Dominio del peso corporal.",
                tareas: [
                    "Completar Rutina PDFa 2026.",
                    "Resistencia: 5 min Plancha.",
                    "Fuerza: 20 Dominadas estrictas.",
                    "Volumen: 100 Flexiones seguidas."
                ]
            }
        ]
    },
    2: {
        titulo: 'TEMPORADA 2: 2027 — "EL DESPEGUE"',
        objetivos: [
            // FILA 1
            {
                titulo: "🏥 Objetivo 1: Medicina (5º)",
                metrica: "Métrica: Aprobar Clínica.",
                tareas: [
                    "Aprobar Clínica Médica (Sin recursar).",
                    "Aprobar Patología Médica.",
                    "Cuaderno de Guardia (50 casos).",
                    "6 Presentaciones clínicas.",
                    "Banco de 300 preguntas."
                ]
            },
            {
                titulo: "🧠 Objetivo 2: Psicología (3º)",
                metrica: "Métrica: Año 3 completo.",
                tareas: [
                    "Aprobar Psicopatología I y II.",
                    "Aprobar Evaluación Psicológica.",
                    "Aprobar Psicología Salud y Laboral.",
                    "Aprobar Estado y Sociedad.",
                    "Trabajo Final de Integración."
                ]
            },
            {
                titulo: "👶 Objetivo 3: Paternidad",
                metrica: "Métrica: Rutina sólida (Niño 1-2 años).",
                tareas: [
                    "Convivencia efectiva: 2–3 días/sem.",
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
                    "Alemán: Conversación 10 min."
                ]
            },

            // FILA 2
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
                titulo: "💸 Objetivo 6: Economía",
                metrica: "Métrica: Ingresos recurrentes.",
                tareas: [
                    "3D: 15 productos y 3 clientes recurrentes.",
                    "3D: Superar $200 USD/mes.",
                    "Maso: 5 clientes fijos ($150 USD/mes).",
                    "Maso: 1 día fijo de Consultorio."
                ]
            },
            {
                titulo: "🏋️ Objetivo 7: Fuerza (Gym)",
                metrica: "Métrica: Cargas Avanzadas (x1.75).",
                tareas: [
                    "<strong>Empuje:</strong> Apert 110kg / Militar 120kg / Trí 160kg",
                    "<strong>Tracción:</strong> Jalón 100kg / Remo 140kg",
                    "<strong>Pierna:</strong> Prensa 200kg / Hip Thrust 160kg",
                    "<strong>Volumen:</strong> Mantener 6 días/sem."
                ]
            },
            {
                titulo: "🤸 Objetivo 8: Calistenia",
                metrica: "Métrica: Resistencia de Élite.",
                tareas: [
                    "Completar Rutina PDFa 2027.",
                    "Resistencia: 7:30 min Plancha.",
                    "Fuerza: 30 Dominadas estrictas.",
                    "Volumen: 150 Flexiones seguidas."
                ]
            }
        ]
    }
};
