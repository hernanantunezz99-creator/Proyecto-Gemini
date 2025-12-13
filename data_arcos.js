const DATOS_ARCOS = {
    1: [
        // ==========================================
        //       ARCO 0: EL PRELUDIO
        // ==========================================
        { 
            titulo: "ARCO 0: El Preludio", 
            sub: "13 Dic - 30 Dic 2025", 
            icono: "✨", 
            imagen: "img/arco0.png", // <--- NUEVA IMAGEN
            objetivos: [
                // COL 1: FECHAS
                {
                    titulo: "📅 FECHA",
                    tareas: [
                        "13-dic (Sáb)", "14-dic (Dom)", "15-dic (Lun)", "16-dic (Mar)", "17-dic (Mié)", "18-dic (Jue)", 
                        "19-dic (Vie)", "20-dic (Sáb)", "21-dic (Dom)", "22-dic (Lun)", "23-dic (Mar)", "24-dic (Mié)", 
                        "25-dic (Jue)", "26-dic (Vie)", "27-dic (Sáb)", "28-dic (Dom)", "29-dic (Lun)", "30-dic (Mar)"
                    ]
                },
                // COL 2: EJERCICIO
                {
                    titulo: "🏋️ EJERCICIO",
                    tareas: [
                        "Ejercicio Día 1", "Ejercicio Día 2", "Ejercicio Día 3", "Ejercicio Día 4", "Ejercicio Día 5", "Ejercicio Día 6", 
                        "Ejercicio Día 7", "Ejercicio Día 8", "Ejercicio Día 9", "Ejercicio Día 10", "Ejercicio Día 11", "Ejercicio Día 12", 
                        "Ejercicio Día 13", "Ejercicio Día 14", "Ejercicio Día 15", "Ejercicio Día 16", "Ejercicio Día 17", "Ejercicio Día 18"
                    ]
                },
                // COL 3: DREMRD
                {
                    titulo: "📝 DREMRD",
                    tareas: [
                        "12 preguntas", "24 preguntas", "36 preguntas", "48 preguntas", "60 preguntas", "72 preguntas", 
                        "84 preguntas", "96 preguntas", "108 preguntas", "120 preguntas", "132 preguntas", "144 preguntas", 
                        "156 preguntas", "168 preguntas", "180 preguntas", "192 preguntas", "204 preguntas", "216 preguntas"
                    ]
                },
                // COL 4: CARDIO (CON ACUMULADOS)
                {
                    titulo: "🫀 CARDIO",
                    tareas: [
                        { texto: "Día 1", total: 15, acumulado: 15 },
                        { texto: "Día 2", total: 15, acumulado: 30 },
                        { texto: "Día 3", total: 15, acumulado: 45 },
                        { texto: "Día 4", total: 15, acumulado: 60 },
                        { texto: "Día 5", total: 15, acumulado: 75 },
                        { texto: "Final", total: 13, acumulado: 88 }, 
                        "---", "---", "---", "---", "---", "---", 
                        "---", "---", "---", "---", "---", "---"
                    ]
                },
                // COL 5: MKP
                {
                    titulo: "🛒 MKP",
                    tareas: [
                        "Racha 1", "Racha 2", "Racha 3", "Racha 4", "Racha 5", "Racha 6", 
                        "Racha 7", "Racha 8", "Racha 9", "Racha 10", "Racha 11", "Racha 12", 
                        "Racha 13", "Racha 14", "Racha 15", "Racha 16", "Racha 17", "Racha 18"
                    ]
                },
                // COL 6: HPDFa
                {
                    titulo: "📄 HPDFa",
                    tareas: [
                        "Racha 1", "Racha 2", "Racha 3", "Racha 4", "Racha 5", "Racha 6", 
                        "Racha 7", "Racha 8", "Racha 9", "Racha 10", "Racha 11", "Racha 12", 
                        "Racha 13", "Racha 14", "Racha 15", "Racha 16", "Racha 17", "Racha 18"
                    ]
                },
                // COL 7: STICKERLY
                {
                    titulo: "📱 STICKERLY",
                    tareas: [
                        "Paquetes 3 y 4", "Paquetes 5 y 6", "Paquetes 7 y 8", "Paquetes 9 y 10", "Paquetes 11 y 12", "Paquetes 13 y 14", 
                        "Paquetes 15 y 16", "---", "---", "---", "---", "---", 
                        "---", "---", "---", "---", "---", "---"
                    ]
                },
                // COL 8: WS (KEVIN)
                {
                    titulo: "🇰🇷 WS (K)",
                    tareas: [
                        "Pack 1", "Pack 2", "Pack 3", "Pack 4", "Pack 5", "Pack 6", 
                        "Pack 7", "Pack 8", "Pack 9", "Pack 10", "Pack 11", "Pack 12", 
                        "Pack 13", "Pack 14", "Pack 15", "Pack 16", "Pack 17", "Pack 18"
                    ]
                },
                // COL 9: WS (SEBA)
                {
                    titulo: "🇸 WS (S)",
                    tareas: [
                        "Pack 1", "Pack 2", "Pack 3", "Pack 4", "Pack 5", "Pack 6", 
                        "Pack 7", "Pack 8", "Pack 9", "Pack 10", "Pack 11", "Pack 12", 
                        "Pack 13", "Pack 14", "Pack 15", "Pack 16", "Pack 17", "Pack 18"
                    ]
                },
                // COL 10: DUOLINGO
                {
                    titulo: "🦉 DUOLINGO",
                    tareas: [
                        "Racha 27", "Racha 28", "Racha 29", "Racha 30", "Racha 31", "Racha 32", 
                        "Racha 33", "Racha 34", "Racha 35", "Racha 36", "Racha 37", "Racha 38", 
                        "Racha 39", "Racha 40", "Racha 41", "Racha 42", "Racha 43", "Racha 44"
                    ]
                },
                // COL 11: ALEMÁN
                {
                    titulo: "🇩🇪 ALEMÁN",
                    tareas: [
                        "Práctica Día 1", "Práctica Día 2", "Práctica Día 3", "Práctica Día 4", "Práctica Día 5", "Práctica Día 6", 
                        "Práctica Día 7", "Práctica Día 8", "Práctica Día 9", "Práctica Día 10", "Práctica Día 11", "Práctica Día 12", 
                        "Práctica Día 13", "Práctica Día 14", "Práctica Día 15", "Práctica Día 16", "Práctica Día 17", "Práctica Día 18"
                    ]
                }
            ]
        },

        // ==========================================
        //       ARCO 1: BASE + ARRANQUE
        // ==========================================
        { 
            titulo: "ARCO 1: Base + Arranque", 
            sub: "Enero - Abril", 
            icono: "🧱",
            imagen: "img/arco1.png", // <--- NUEVA IMAGEN
            objetivos: [
                {
                    titulo: "🏥 Medicina (Arranque)",
                    tareas: [
                        "✅ 02/03/2026: Inicio de las 4 materias (primer lunes de marzo).",
                        "Armar “sistema”: calendario, carpeta por materia, cuaderno de errores y Anki.",
                        "Leer 20–25% de la bibliografía total del año (entre las 4 materias).",
                        "Hacer 200 preguntas en total (tipo test/clínicas) para detectar patrones.",
                        "1 vez/semana: mini-caso clínico (1 hoja: motivo consulta → hipótesis → conducta).",
                        "Preparar el primer bloque fuerte de evaluaciones (UCGYN Clínica I: 28/04–02/05)."
                    ]
                },
                {
                    titulo: "🧠 Psicología (3er Semestre)",
                    tareas: [
                        "✅ 02/03/2026: inicio 3er semestre.",
                        "Materia: Psicología Social.",
                        "Materia: Psicología, Sujeto y Aprendizaje.",
                        "Materia: Métodos y Técnicas cualitativas.",
                        "Materia: Ética y deontología.",
                        "Materia: Articulación de saberes III: Clínica y Subjetividad.",
                        "Materia: Idiomas.",
                        "Materia: Cooperación Institucional.",
                        "✅ Meta 30/04: tener 40% hecho del semestre (lecturas clave + apuntes + prácticos al día).",
                        "✅ Cada semana: 3 lecturas + 2 tareas/prácticos + 1 repaso (resumen de 1 hoja por tema)."
                    ]
                }
            ]
        },

        // ==========================================
        //       ARCO 2: PARCIALES + CONSOLIDACIÓN
        // ==========================================
        { 
            titulo: "ARCO 2: Parciales + Consolidación", 
            sub: "Mayo - Agosto", 
            icono: "🌱",
            imagen: "img/arco2.png", // <--- NUEVA IMAGEN
            objetivos: [
                {
                    titulo: "🏥 Medicina (Parciales)",
                    tareas: [
                        "Subir a 40–60 preguntas por semana (total tramo: 400–600).",
                        "Completar 60% de bibliografía acumulada.",
                        "Rutina parciales: (preguntas → corregir → tarjetas de errores → mini-simulacro).",
                        "📅 07/06/2026: Parcial Bases Científicas de la Patología (BCP).",
                        "📅 12/07/2026: Parcial MO (UCGYN).",
                        "📅 02/08/2026: 1er Parcial Medicina PNA.",
                        "Resumen maestro de 10–15 páginas por materia (cortito, puro high-yield)."
                    ]
                },
                {
                    titulo: "🧠 Psicología (Transición 3º ➡ 4º)",
                    tareas: [
                        "✅ Mayo–Junio: cerrar 3er semestre: 80–100% + entregas finales.",
                        "✅ Julio: “limpieza”: recuperar atrasos + adelantar 10% de estas del 4to.",
                        "Adelantar: Clínica I / Psicología y Salud / Cuantitativas / Proyectos.",
                        "✅ Agosto: inicio 4to semestre.",
                        "Materia: Clínica I: Fundamentos psicoanalíticos.",
                        "Materia: Psicología y Salud.",
                        "Materia: Herramientas de la Psicología Social.",
                        "Materia: Diseño de proyectos.",
                        "Materia: Articulación de saberes IV: Estado, sociedad y políticas públicas.",
                        "Materia: Idiomas / Cooperación Institucional.",
                        "Materia: Métodos y Técnicas cuantitativas.",
                        "Materia: Herramientas de la Psicología Clínica."
                    ]
                }
            ]
        },

        // ==========================================
        //       ARCO 3: CIERRE + SIMULACROS
        // ==========================================
        { 
            titulo: "ARCO 3: Cierre + Simulacros", 
            sub: "Sept - Dic", 
            icono: "🚀",
            imagen: "img/arcodoc.png", // <--- NUEVA IMAGEN
            objetivos: [
                {
                    titulo: "🏥 Medicina (Finales)",
                    tareas: [
                        "Cerrar bibliografía: llegar a 85–90%.",
                        "Hacer el bloque grande de integración clínica: 2 simulacros por semana.",
                        "Objetivo numérico: 600–800 preguntas + repaso de 100 preguntas clínicas 'de vida o muerte'.",
                        "📅 27/09/2026: Parcial BCP.",
                        "📅 15/10/2026: Entrega HC (MPNA).",
                        "📅 21/10/2026: Encuentro clínico (MPNA).",
                        "📅 01/11/2026: Simulacro ECOE (MPNA).",
                        "📅 24/11/2026: Evaluación continua final (MPNA).",
                        "📅 29/11/2026: Parcial BCP.",
                        "📅 08/12/2026: Examen (UCGYN).",
                        "📅 13/12/2026: Examen (MPNA).",
                        "📅 16/12/2026: Examen (BCP)."
                    ]
                },
                {
                    titulo: "🧠 Psicología (Cierre 4to Semestre)",
                    tareas: [
                        "✅ Meta 31/10: llevar 70% del 4to semestre.",
                        "✅ Noviembre: cerrar 100% + entregas grandes.",
                        "Entregar: Diseño de proyectos.",
                        "Entregar: Articulación IV.",
                        "Entregar: Clínica I.",
                        "✅ Diciembre: repaso final: 2 simulacros/semana (preguntas guía + casos) + corregir errores."
                    ]
                }
            ]
        }
    ],

    // TEMPORADA 2
    2: [
        { titulo: "ARCO 1: Inicio 2027", sub: "Ene - Abr", icono: "🏗️", objetivos: [] },
        { titulo: "ARCO 2: Medio 2027", sub: "May - Ago", icono: "📈", objetivos: [] },
        { titulo: "ARCO 3: Fin 2027", sub: "Sep - Dic", icono: "🎓", objetivos: [] }
    ]
};

