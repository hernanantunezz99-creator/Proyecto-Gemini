const DATOS_ARCOS = {
    1: [
        // --- ARCO 0: EL PRELUDIO (13/12 - 30/12) ---
        { 
            titulo: "ARCO 0: El Preludio", 
            sub: "13 Dic - 30 Dic 2025", 
            icono: "✨", 
            objetivos: [
                // COLUMNA 1: FECHAS (Referencia)
                {
                    titulo: "📅 Calendario",
                    tareas: [
                        "13/12 - Sábado", "14/12 - Domingo", "15/12 - Lunes", "16/12 - Martes",
                        "17/12 - Miércoles", "18/12 - Jueves", "19/12 - Viernes", "20/12 - Sábado",
                        "21/12 - Domingo", "22/12 - Lunes", "23/12 - Martes", "24/12 - Miércoles",
                        "25/12 - Jueves", "26/12 - Viernes", "27/12 - Sábado", "28/12 - Domingo",
                        "29/12 - Lunes", "30/12 - Martes"
                    ]
                },
                // COLUMNA 2: EJERCICIO
                {
                    titulo: "🏋️ Ejercicio",
                    tareas: [
                        "Ejercicio Día 1", "Ejercicio Día 2", "Ejercicio Día 3", "Ejercicio Día 4",
                        "Ejercicio Día 5", "Ejercicio Día 6", "Ejercicio Día 7", "Ejercicio Día 8",
                        "Ejercicio Día 9", "Ejercicio Día 10", "Ejercicio Día 11", "Ejercicio Día 12",
                        "Ejercicio Día 13", "Ejercicio Día 14", "Ejercicio Día 15", "Ejercicio Día 16",
                        "Ejercicio Día 17", "Ejercicio Día 18"
                    ]
                },
                // COLUMNA 3: DREMRD
                {
                    titulo: "📝 DREMRD",
                    tareas: [
                        "13/12: 12 Preguntas", "14/12: 12 Preguntas", "15/12: 12 Preguntas", "16/12: 12 Preguntas",
                        "17/12: 12 Preguntas", "18/12: 12 Preguntas", "19/12: 12 Preguntas", "20/12: 12 Preguntas",
                        "21/12: 12 Preguntas", "22/12: 12 Preguntas", "23/12: 12 Preguntas", "24/12: 12 Preguntas",
                        "25/12: 12 Preguntas", "26/12: 12 Preguntas", "27/12: 12 Preguntas", "28/12: 12 Preguntas",
                        "29/12: 12 Preguntas", "30/12: 12 Preguntas"
                    ]
                },
                // COLUMNA 4: CARDIO-RESP (Progresión Específica)
                {
                    titulo: "🫀 Cardio-Resp",
                    tareas: [
                        "13/12: 15 videos", 
                        "14/12: 30 videos", 
                        "15/12: 45 videos", 
                        "16/12: 60 videos", 
                        "17/12: 75 videos", 
                        "18/12: 88 videos (FINAL)"
                    ]
                },
                // COLUMNA 5: MKP
                {
                    titulo: "🛒 MKP",
                    tareas: [
                        "MKP Racha 1", "MKP Racha 2", "MKP Racha 3", "MKP Racha 4",
                        "MKP Racha 5", "MKP Racha 6", "MKP Racha 7", "MKP Racha 8",
                        "MKP Racha 9", "MKP Racha 10", "MKP Racha 11", "MKP Racha 12",
                        "MKP Racha 13", "MKP Racha 14", "MKP Racha 15", "MKP Racha 16",
                        "MKP Racha 17", "MKP Racha 18"
                    ]
                },
                // COLUMNA 6: HPDFa
                {
                    titulo: "📄 HPDFa",
                    tareas: [
                        "HPDFa Racha 1", "HPDFa Racha 2", "HPDFa Racha 3", "HPDFa Racha 4",
                        "HPDFa Racha 5", "HPDFa Racha 6", "HPDFa Racha 7", "HPDFa Racha 8",
                        "HPDFa Racha 9", "HPDFa Racha 10", "HPDFa Racha 11", "HPDFa Racha 12",
                        "HPDFa Racha 13", "HPDFa Racha 14", "HPDFa Racha 15", "HPDFa Racha 16",
                        "HPDFa Racha 17", "HPDFa Racha 18"
                    ]
                },
                // COLUMNA 7: STICKERLY (Pares)
                {
                    titulo: "📱 Sticker.ly",
                    tareas: [
                        "13/12: Paquetes 3 y 4",
                        "14/12: Paquetes 5 y 6",
                        "15/12: Paquetes 7 y 8",
                        "16/12: Paquetes 9 y 10",
                        "17/12: Paquetes 11 y 12",
                        "18/12: Paquetes 13 y 14",
                        "19/12: Paquetes 15 y 16 (FINAL)"
                    ]
                },
                // COLUMNA 8: WhatStickers (K)
                {
                    titulo: "🇰🇷 WS (Kevin)",
                    tareas: [
                        "13/12: 1 Pack", "14/12: 2 Packs", "15/12: 3 Packs", "16/12: 4 Packs",
                        "17/12: 5 Packs", "18/12: 6 Packs", "19/12: 7 Packs", "20/12: 8 Packs",
                        "21/12: 9 Packs", "22/12: 10 Packs", "23/12: 11 Packs", "24/12: 12 Packs",
                        "25/12: 13 Packs", "26/12: 14 Packs", "27/12: 15 Packs", "28/12: 16 Packs",
                        "29/12: 17 Packs", "30/12: 18 Packs"
                    ]
                },
                // COLUMNA 9: WhatStickers (S)
                {
                    titulo: "🇸 WS (Seba)",
                    tareas: [
                        "13/12: 1 Pack", "14/12: 2 Packs", "15/12: 3 Packs", "16/12: 4 Packs",
                        "17/12: 5 Packs", "18/12: 6 Packs", "19/12: 7 Packs", "20/12: 8 Packs",
                        "21/12: 9 Packs", "22/12: 10 Packs", "23/12: 11 Packs", "24/12: 12 Packs",
                        "25/12: 13 Packs", "26/12: 14 Packs", "27/12: 15 Packs", "28/12: 16 Packs",
                        "29/12: 17 Packs", "30/12: 18 Packs"
                    ]
                },
                // COLUMNA 10: DUOLINGO
                {
                    titulo: "🦉 Duolingo",
                    tareas: [
                        "13/12: Racha 27", "14/12: Racha 28", "15/12: Racha 29", "16/12: Racha 30",
                        "17/12: Racha 31", "18/12: Racha 32", "19/12: Racha 33", "20/12: Racha 34",
                        "21/12: Racha 35", "22/12: Racha 36", "23/12: Racha 37", "24/12: Racha 38",
                        "25/12: Racha 39", "26/12: Racha 40", "27/12: Racha 41", "28/12: Racha 42",
                        "29/12: Racha 43", "30/12: Racha 44"
                    ]
                },
                 // COLUMNA 11: ALEMÁN (Agregada según título)
                 {
                    titulo: "🇩🇪 Alemán",
                    tareas: [
                        "13/12: Práctica", "14/12: Práctica", "15/12: Práctica", "16/12: Práctica",
                        "17/12: Práctica", "18/12: Práctica", "19/12: Práctica", "20/12: Práctica",
                        "21/12: Práctica", "22/12: Práctica", "23/12: Práctica", "24/12: Práctica",
                        "25/12: Práctica", "26/12: Práctica", "27/12: Práctica", "28/12: Práctica",
                        "29/12: Práctica", "30/12: Práctica"
                    ]
                }
            ]
        },

        // --- ARCOS 1, 2, 3 (MANTENIDOS IGUAL) ---
        { 
            titulo: "ARCO 1: Base + Arranque", 
            sub: "Enero - Abril", 
            icono: "🧱",
            objetivos: [
                {
                    titulo: "🏥 Medicina (Arranque)",
                    tareas: [
                        "02/03/2026: Inicio 4 materias (1er lunes Marzo).",
                        "Armar 'sistema': calendario, carpeta, errores, Anki.",
                        "Leer 20–25% de la bibliografía total.",
                        "Hacer 200 preguntas (test/clínicas) para detectar patrones.",
                        "1 vez/semana: mini-caso clínico (1 hoja).",
                        "Preparar bloque evaluación (UCGYN Clínica I: 28/04)."
                    ]
                },
                {
                    titulo: "🧠 Psicología (3er Semestre)",
                    tareas: [
                        "✅ 02/03/2026: Inicio 3er Semestre.",
                        "Materia: Psicología Social.",
                        "Materia: Psicología, Sujeto y Aprendizaje.",
                        "Materia: Métodos y Técnicas cualitativas.",
                        "Materia: Ética y deontología.",
                        "Materia: Articulación de saberes III: Clínica y Subjetividad.",
                        "Materia: Idiomas.",
                        "Materia: Cooperación Institucional.",
                        "✅ Meta 30/04: Tener 40% hecho (lecturas + apuntes + prácticos).",
                        "✅ Semanal: 3 lecturas + 2 tareas/prácticos.",
                        "✅ Semanal: 1 repaso (resumen de 1 hoja por tema)."
                    ]
                }
            ]
        },
        { 
            titulo: "ARCO 2: Parciales + Consolidación", 
            sub: "Mayo - Agosto", 
            icono: "🌱",
            objetivos: [
                {
                    titulo: "🏥 Medicina (Parciales)",
                    tareas: [
                        "Subir a 40–60 preguntas/sem (Total: 400–600).",
                        "Completar 60% bibliografía acumulada.",
                        "Rutina parciales: preguntas → corregir → errores → simulacro.",
                        "📅 07/06/2026: Parcial BCP.",
                        "📅 12/07/2026: Parcial MO (UCGYN).",
                        "📅 02/08/2026: 1er Parcial (MPNA).",
                        "Resumen maestro 10–15 págs/materia (High-Yield)."
                    ]
                },
                {
                    titulo: "🧠 Psicología (Cierre 3º + Inicio 4º)",
                    tareas: [
                        "✅ Mayo–Junio: Cerrar 3er semestre (80–100% + entregas).",
                        "✅ Julio: 'Limpieza' (recuperar atrasos + adelantar 10% del 4to).",
                        "Adelantar: Clínica I / Salud / Cuantitativas / Proyectos.",
                        "✅ Agosto: Inicio 4to Semestre.",
                        "Materia: Clínica I: Fundamentos psicoanalíticos.",
                        "Materia: Psicología y Salud.",
                        "Materia: Herramientas de la Psicología Social.",
                        "Materia: Diseño de proyectos.",
                        "Materia: Articulación de saberes IV: Estado, sociedad y políticas.",
                        "Materia: Idiomas / Cooperación Institucional.",
                        "Materia: Métodos y Técnicas cuantitativas.",
                        "Materia: Herramientas de la Psicología Clínica."
                    ]
                }
            ]
        },
        { 
            titulo: "ARCO 3: Cierre + Simulacros", 
            sub: "Sept - Dic", 
            icono: "🚀",
            objetivos: [
                {
                    titulo: "🏥 Medicina (Finales)",
                    tareas: [
                        "Cerrar bibliografía (llegar al 85–90%).",
                        "Integración: 2 simulacros/sem (Test + ECOE).",
                        "Total: 600–800 preguntas + 100 críticas.",
                        "📅 27/09: Parcial BCP.",
                        "📅 15/10: Entrega HC (MPNA).",
                        "📅 21/10: Encuentro clínico (MPNA).",
                        "📅 01/11: Simulacro ECOE.",
                        "📅 24/11: Eval. cont. final (MPNA).",
                        "📅 29/11: Parcial BCP.",
                        "📅 08/12: Examen UCGYN / 13/12 MPNA / 16/12 BCP."
                    ]
                },
                {
                    titulo: "🧠 Psicología (Cierre 4to Semestre)",
                    tareas: [
                        "✅ Meta 31/10: Llevar 70% del 4to semestre.",
                        "✅ Noviembre: Cerrar 100% + entregas grandes.",
                        "Entregar: Diseño de proyectos.",
                        "Entregar: Articulación IV.",
                        "Entregar: Clínica I.",
                        "✅ Diciembre: Repaso final.",
                        "Rutina Dic: 2 simulacros/semana (preguntas guía + casos).",
                        "Corregir errores de simulacros."
                    ]
                }
            ]
        }
    ],
    // TEMPORADA 2
    2: [
        { titulo: "ARCO 1", sub: "Enero - Abril", icono: "🏗️", objetivos: [] },
        { titulo: "ARCO 2", sub: "Mayo - Agosto", icono: "📈", objetivos: [] },
        { titulo: "ARCO 3", sub: "Sept - Dic", icono: "🎓", objetivos: [] }
    ]
};
