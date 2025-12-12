const DATOS_TEMPORADAS = {
    1: {
        titulo: 'TEMPORADA 1: 2026 — "LA TRINCHERA"',
        objetivos: [
            // --- PRIMARIOS (TEXTO COMPLETO) ---
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
        ],
        objetivosSecundarios: [
            // --- SECUNDARIOS 2026 ---
            {
                titulo: "🚲 Bici Eléctrica",
                metrica: "Fase de Ahorro.",
                tareas: [
                    "Ahorrar $2.000 mensuales de enero a diciembre.",
                    "Acumular un fondo total de $24.000 al cierre del año.",
                    "Fondo: Mantener el capital intocable en cuenta exclusiva de ahorro."
                ]
            },
            {
                titulo: "🥋 Taekwondo",
                metrica: "Consolidación.",
                tareas: [
                    "Entrenar mínimo 2 veces por semana (100 sesiones anuales).",
                    "Aprobar el 1er examen de graduación del bienio.",
                    "Dominar los poomsae de tu nivel actual con ejecución limpia.",
                    "Mantener asistencia ≥ 85% y registro de correcciones técnicas."
                ]
            },
            {
                titulo: "🥊 Muay Thai",
                metrica: "Fundamentos Post-Bebé.",
                tareas: [
                    "Iniciar prácticas después de mitad de año (post-estabilización familiar).",
                    "Completar las primeras 10 sesiones de entrenamiento.",
                    "Aprender guardia, desplazamiento, jab, cross y low kick."
                ]
            },
            {
                titulo: "📱 App Stickers",
                metrica: "Desarrollo.",
                tareas: [
                    "Aprender lógica básica de Python o JavaScript para apps.",
                    "Diseñar y programar un prototipo funcional (subir/guardar/descargar).",
                    "Finalizar el MVP (producto mínimo viable) antes de diciembre."
                ]
            },
            {
                titulo: "🎬 YouTube/TikTok",
                metrica: "Arranque.",
                tareas: [
                    "Abrir el canal formalmente antes de junio.",
                    "Publicar mínimo 12 videos (ritmo inicial para establecer marca).",
                    "Definir estética coherente, edición básica y uso de subtítulos."
                ]
            },
            {
                titulo: "🎸 Guitarra",
                metrica: "Técnica.",
                tareas: [
                    "Dominar 8 acordes básicos y cejilla (F y Bm).",
                    "Tocar con metrónomo y dominar 3 patrones de rasgueo a 90 bpm.",
                    "Armar las primeras 6 canciones del repertorio (Nivel Inicial).",
                    "Grabar 1er video de progreso."
                ]
            },
            {
                titulo: "💃 Salsa y Bachata",
                metrica: "Iniciación.",
                tareas: [
                    "Iniciar clases antes de junio 2026.",
                    "Asistir a 2 clases por semana (mínimo 6 al mes).",
                    "Aprobar el nivel principiante.",
                    "Aprender 5 figuras de bachata y 3 de salsa.",
                    "Participar en 2 prácticas sociales (1 por trimestre desde el inicio)."
                ]
            },
            {
                titulo: "📚 Leer 24 libros",
                metrica: "Base 12 libros.",
                tareas: [
                    "Leer 12 libros (8 ficción / 4 no ficción).",
                    "Terminar la trilogía Mistborn.",
                    "Leer 3 libros en formato físico.",
                    "Registrar 12 opiniones en Goodreads o cuaderno."
                ]
            },
            {
                titulo: "🌍 Mini Cultura General",
                metrica: "Curiosidad Activa.",
                tareas: [
                    "Probar 25 sabores de helado.",
                    "Memorizar 95 banderas y capitales del mundo.",
                    "Reconocer 30 razas de perro.",
                    "Identificar 25 marcas de autos y 15 de motos (con país de origen).",
                    "Conocer 50 equipos de fútbol populares.",
                    "Ver 15 películas reconocidas.",
                    "Aprender 'hola', 'gracias' y 'te quiero' en 10 idiomas.",
                    "Probar 10 platos o productos típicos."
                ]
            },
            {
                titulo: "💰 Fondo de Emergencia",
                metrica: "Construcción.",
                tareas: [
                    "Ahorrar $50 - $100 USD mensuales.",
                    "Alcanzar un acumulado de $600 USD.",
                    "Registrar 12 depósitos mensuales (Constancia ≥ 90%).",
                    "Revisar y ajustar monto cada 6 meses."
                ]
            },
            {
                titulo: "👶 Vínculo fuerte hijo/a",
                metrica: "Presencia.",
                tareas: [
                    "Lograr 100 sesiones de calidad (desde el nacimiento en mayo).",
                    "Registrar 1 'actividad especial' mensual (7 fotos/recuerdos).",
                    "Implementar actividades de estimulación temprana semanalmente.",
                    "Establecer la rutina de presencia real 2-3 días por semana."
                ]
            },
            {
                titulo: "🤟 Lengua de Señas (LSU)",
                metrica: "Nivel Inicial.",
                tareas: [
                    "Iniciar curso antes de julio 2026.",
                    "Aprobar el nivel inicial.",
                    "Practicar 3 veces por semana (20-30 min).",
                    "Aprender conversaciones simples (saludos, emociones, necesidades)."
                ]
            },
            {
                titulo: "📺 150 animes clásicos",
                metrica: "Base 75 títulos.",
                tareas: [
                    "Ver 75 animes (series o películas) de la Watchlist.",
                    "Mantener ritmo de 6-7 títulos por mes."
                ]
            },
            {
                titulo: "💰 Finanzas e Inversión",
                metrica: "Fundamentos y Registro.",
                tareas: [
                    "Leer 3 libros sobre finanzas personales.",
                    "Escuchar 2 podcasts semanales (104 anuales).",
                    "Completar 2 cursos gratuitos online sobre finanzas básicas.",
                    "Crear presupuesto mensual y registrar gastos/ingresos al 100%.",
                    "Abrir cuenta de ahorro/inversión pequeña."
                ]
            },
            {
                titulo: "🎮 Dev Videojuegos PS1",
                metrica: "2D y Lógica.",
                tareas: [
                    "Aprender lógica de programación en Godot o Unity.",
                    "Crear 3 minijuegos 2D (plataformas, clicker y puzzle).",
                    "Desarrollar 1 juego 2D retro completo (10-20 min) con menú, HUD y música."
                ]
            },
            {
                titulo: "🕹️ Colección Retro",
                metrica: "Inicio colección.",
                tareas: [
                    "Adquirir 2 consolas retro funcionales (Sega Genesis y otra de 16-32 bits).",
                    "Adquirir 10 juegos clásicos o ediciones especiales.",
                    "Crear el registro digital con fotos, valor y estado de las piezas.",
                    "Aprender limpieza y conservación básica."
                ]
            },
            {
                titulo: "📸 Fotografía Smartphone",
                metrica: "Fundamentos.",
                tareas: [
                    "Aprender conceptos: composición, luz natural, enfoque y perspectiva.",
                    "Practicar 1 sesión semanal temática (52 sesiones).",
                    "Editar con Snapseed/Lightroom Mobile.",
                    "Subir las mejores fotos de paisajes a Instagram."
                ]
            },
            {
                titulo: "🍳 Cocina Saludable",
                metrica: "Niveles 1, 2 y 3.",
                tareas: [
                    "Realizar el Curso de cocina virtual.",
                    "Dominar Nivel 1 (Huevo frito, arroz, puré, etc.).",
                    "Dominar Nivel 2 (Omelette, pasta casera, panqueques avena, etc.).",
                    "Dominar Nivel 3 (Pollo horno, hamburguesas caseras, guisos, etc.)."
                ]
            },
            {
                titulo: "🧘 Meditación",
                metrica: "Hábito diario.",
                tareas: [
                    "Incorporar meditación diaria de 10–15 minutos (foco en respiración).",
                    "Alcanzar una adherencia del 80% de los días (utilizando la app Calm).",
                    "Establecer el hábito en un horario fijo (al despertar o antes de dormir)."
                ]
            },
            {
                titulo: "🕹️ Gaming Estratégico",
                metrica: "Análisis 75 juegos.",
                tareas: [
                    "Jugar y estudiar 75 videojuegos clásicos (Atari, NES, SNES, Sega, PS1).",
                    "Dedicar 3–5 horas semanales con enfoque analítico (narrativa, diseño, sonido).",
                    "Registrar 75 reviews personales con aprendizajes para desarrollo."
                ]
            },
            {
                titulo: "📓 Diario y Psicología",
                metrica: "Reflexión y TCC.",
                tareas: [
                    "Escribir en journal personal 4–5 veces por semana (reflexión de metas y emociones).",
                    "Completar el curso online de Terapia Cognitivo-Conductual (TCC).",
                    "Analizar la Temporada 1 del podcast “Psicología al Desnudo” con notas útiles.",
                    "Realizar 4 relecturas trimestrales de entradas antiguas."
                ]
            },
            {
                titulo: "☕ Cafeterías y Licencia",
                metrica: "Exploración y Teórico.",
                tareas: [
                    "Visitar 20 cafeterías locales nuevas.",
                    "Redactar 20 mini reviews en Google Maps o TripAdvisor.",
                    "Completar el estudio teórico del curso de conducción."
                ]
            },
            {
                titulo: "♟️ Ajedrez",
                metrica: "Fundamentos.",
                tareas: [
                    "Jugar partidas online 2–3 veces por semana (Chess.com o Lichess).",
                    "Resolver puzzles tácticos de mates en 1 o 2.",
                    "Aprender fundamentos: apertura, enroque y piezas activas."
                ]
            },
            {
                titulo: "🃏 Ilusionismo",
                metrica: "Básico.",
                tareas: [
                    "Aprender 7 trucos clásicos de cartas y monedas (YouTube).",
                    "Dominar técnicas: false shuffle y double lift.",
                    "Grabarte en video para corregir gestos, ritmo y expresividad."
                ]
            },
            {
                titulo: "💳 Pagar Deudas (2026)",
                metrica: "Métrica final: Deuda $0.",
                tareas: [
                    "Pagar Préstamo de PREX.",
                    "Pagar Préstamo de Crédito Valor.",
                    "Pagar Préstamo de Creditel.",
                    "Pagar Préstamo de Pronto.",
                    "Pagar Tarjeta de Crédito OCA."
                ]
            }
        ]
    },
    2: {
        titulo: 'TEMPORADA 2: 2027 — "EL DESPEGUE"',
        objetivos: [
            // --- PRIMARIOS (TEXTO COMPLETO) ---
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
            {
                titulo: "💻 Programación",
                metrica: "Métrica Global: Publicar software real y usable.",
                tareas: [
                    "Publicar la App de Stickers (versión estable) en una tienda o web pública.",
                    "Alcanzar 1.000 descargas o usuarios únicos en la App.",
                    "Desarrollar 3–5 proyectos funcionales en GitHub para portafolio.",
                    "Aplicar programación a una herramienta médica propia (ej: calculadora de riesgos, organizador de guardias)."
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
        ],
        objetivosSecundarios: [
            // --- SECUNDARIOS 2027 ---
            {
                titulo: "🚲 Bici Eléctrica",
                metrica: "Compra y Uso.",
                tareas: [
                    "Ahorrar $3.000 mensuales de enero a diciembre ($36.000 anuales).",
                    "Alcanzar el total acumulado de $60.000 – $70.000.",
                    "Investigar modelos y opciones locales antes de septiembre.",
                    "Bicicleta comprada, probada y en uso activo antes del 31 de diciembre."
                ]
            },
            {
                titulo: "🥋 Taekwondo",
                metrica: "Maestría.",
                tareas: [
                    "Entrenar mínimo 2 veces por semana (100 sesiones anuales).",
                    "Aprobar el 2do examen de graduación (Cinturón Marrón).",
                    "Participar en al menos 1 torneo o exhibición antes de diciembre.",
                    "Dominar todos los poomsae hasta nivel marrón con técnica de alta calidad."
                ]
            },
            {
                titulo: "🥊 Muay Thai",
                metrica: "Técnica y Sparring.",
                tareas: [
                    "Entrenar 1–2 veces por semana de forma constante.",
                    "Completar las 20 sesiones restantes (Total saga: 30 sesiones).",
                    "Dominar el golpe teep y técnica de desplazamiento fluida.",
                    "Participar en 3 sesiones de sparring ligero."
                ]
            },
            {
                titulo: "📱 App Stickers",
                metrica: "Lanzamiento.",
                tareas: [
                    "Integrar anuncios (AdMob o similar) para monetización.",
                    "Publicar la versión estable en Play Store antes de agosto.",
                    "Alcanzar 1.000 descargas o 10.000 visualizaciones totales para diciembre."
                ]
            },
            {
                titulo: "🎬 YouTube/TikTok",
                metrica: "Consistencia.",
                tareas: [
                    "Publicar 24 videos adicionales (2 mensuales constantes).",
                    "Alcanzar 2.000 suscriptores o 50.000 vistas combinadas.",
                    "Analizar personajes y videojuegos con profundidad psicológica aplicada."
                ]
            },
            {
                titulo: "🎸 Guitarra",
                metrica: "Repertorio.",
                tareas: [
                    "Completar el repertorio de 12 canciones (Nivel Medio).",
                    "Grabar los 2 videos de progreso restantes (mitad y cierre).",
                    "Tocar 3 canciones seguidas sin pausas ni errores para diciembre."
                ]
            },
            {
                titulo: "💃 Salsa y Bachata",
                metrica: "Intermedio.",
                tareas: [
                    "Aprobar el nivel intermedio.",
                    "Aprender 5 figuras de bachata (Total: 10) y 2 de salsa (Total: 5).",
                    "Participar en 2 prácticas sociales adicionales (Total: 4 en el año).",
                    "Bailar una canción completa de cada estilo sin errores ni pérdida de tempo."
                ]
            },
            {
                titulo: "📚 Leer 24 libros",
                metrica: "Total 12 adicionales.",
                tareas: [
                    "Leer 12 libros (8 ficción / 4 no ficción).",
                    "Terminar al menos 1 saga nueva.",
                    "Leer 3 libros en formato físico (Total: 6).",
                    "Registrar 12 opiniones adicionales (Total: 24)."
                ]
            },
            {
                titulo: "🌍 Mini Cultura General",
                metrica: "Expansión.",
                tareas: [
                    "Probar 25 sabores de helado (Total: 50).",
                    "Memorizar 95 banderas y capitales restantes (Total: 190).",
                    "Reconocer 30 razas de perro adicionales (Total: 60).",
                    "Identificar 25 marcas de autos (Total: 50) y 15 de motos (Total: 30).",
                    "Conocer 50 equipos de fútbol adicionales (Total: 100).",
                    "Ver 15 películas adicionales (Total: 30).",
                    "Aprender las 3 frases en 10 idiomas más (Total: 20).",
                    "Probar 10 platos típicos adicionales (Total: 20)."
                ]
            },
            {
                titulo: "💰 Fondo de Emergencia",
                metrica: "Consolidación.",
                tareas: [
                    "Ahorrar $50 - $100 USD mensuales.",
                    "Alcanzar el fondo final de $1.200 USD.",
                    "Registrar 12 depósitos mensuales (Constancia ≥ 90%).",
                    "Revisar y ajustar monto cada 6 meses."
                ]
            },
            {
                titulo: "👶 Vínculo fuerte hijo/a",
                metrica: "Desarrollo.",
                tareas: [
                    "Lograr 100 sesiones de calidad.",
                    "Registrar 1 'actividad especial' mensual (12 fotos/recuerdos).",
                    "Introducir ejercicios de observación, memoria y resolución de problemas.",
                    "Documentar progreso emocional y cognitivo mensualmente."
                ]
            },
            {
                titulo: "🤟 Lengua de Señas (LSU)",
                metrica: "Nivel Intermedio.",
                tareas: [
                    "Aprobar el nivel intermedio.",
                    "Practicar 3 veces por semana (20-30 min).",
                    "Incorporar vocabulario médico completo.",
                    "Incorporar vocabulario cotidiano (salud, lugares, alimentos)."
                ]
            },
            {
                titulo: "📺 150 animes clásicos",
                metrica: "Completar saga.",
                tareas: [
                    "Ver 75 animes restantes (Total: 150).",
                    "Mantener ritmo de 6-7 títulos por mes."
                ]
            },
            {
                titulo: "💰 Finanzas e Inversión",
                metrica: "Aplicación.",
                tareas: [
                    "Leer 3 libros sobre inversión (Total: 6).",
                    "Escuchar 2 podcasts semanales (Total: 208).",
                    "Completar 1 curso gratuito restante + Curso TradeRepublic de Fonseca.",
                    "Simular inversiones en plataformas 'demo' (eToro/TradingView) semanalmente."
                ]
            },
            {
                titulo: "🎮 Dev Videojuegos PS1",
                metrica: "3D Low Poly.",
                tareas: [
                    "Aprender modelado low poly en Blender y shaders estilo PS1.",
                    "Crear 1 demo técnica 3D (entorno explorable + 2 mecánicas).",
                    "Terminar 1 prototipo 3D estilo PS1 (20-40 min) con narrativa breve."
                ]
            },
            {
                titulo: "🕹️ Colección Retro",
                metrica: "Rincón Gamer.",
                tareas: [
                    "Adquirir 2 consolas retro adicionales (Total: 4).",
                    "Adquirir 10 juegos clásicos adicionales (Total: 20).",
                    "Aprender reparación básica y soldadura leve.",
                    "Diseñar y montar el rincón gamer dedicado (estante/vitrina)."
                ]
            },
            {
                titulo: "📸 Fotografía Smartphone",
                metrica: "Archivo Visual.",
                tareas: [
                    "Practicar 1 sesión semanal temática (52 sesiones).",
                    "Documentar la evolución física y familiar del segundo año.",
                    "Completar el archivo visual cronológico del bienio."
                ]
            },
            {
                titulo: "🍳 Cocina Saludable",
                metrica: "Niveles 4 y 5.",
                tareas: [
                    "Dominar Nivel 4 (Lasaña, budín, cazuela, etc.).",
                    "Dominar Nivel 5 (Risotto, milanesas, pan casero, etc.)."
                ]
            },
            {
                titulo: "🧘 Meditación",
                metrica: "Profundidad.",
                tareas: [
                    "Mantener la meditación diaria de 10–15 minutos.",
                    "Mantener la adherencia del 80% de los días (utilizando la app Calm).",
                    "Profundizar en la presencia mental en ambiente silencioso."
                ]
            },
            {
                titulo: "🕹️ Gaming Estratégico",
                metrica: "Completar 150.",
                tareas: [
                    "Jugar y estudiar 75 videojuegos restantes (Total: 150).",
                    "Dedicar 3–5 horas semanales con enfoque analítico.",
                    "Registrar 75 reviews adicionales (Total: 150)."
                ]
            },
            {
                titulo: "📓 Diario y Psicología",
                metrica: "Aplicación TCC.",
                tareas: [
                    "Mantener escritura en journal 4–5 veces por semana.",
                    "Analizar la Temporada 2 del podcast “Psicología al Desnudo” con notas útiles.",
                    "Aplicar técnicas de TCC (reestructuración cognitiva y registros) a la vida diaria.",
                    "Realizar 4 relecturas trimestrales adicionales."
                ]
            },
            {
                titulo: "☕ Cafeterías y Licencia",
                metrica: "Licencia Obtenida.",
                tareas: [
                    "Visitar 20 cafeterías restantes (Total: 40).",
                    "Redactar 20 mini reviews adicionales (Total: 40).",
                    "Completar curso práctico y Obtener la Licencia de Conducir antes de diciembre."
                ]
            },
            {
                titulo: "♟️ Ajedrez",
                metrica: "Intermedio.",
                tareas: [
                    "Jugar partidas online 2–3 veces por semana.",
                    "Resolver puzzles tácticos de nivel intermedio.",
                    "Aprender mates esenciales y finales simples mediante videos o partidas comentadas."
                ]
            },
            {
                titulo: "🃏 Ilusionismo",
                metrica: "Show familiar.",
                tareas: [
                    "Aprender 8 trucos adicionales (Total: 15).",
                    "Dominar técnicas: palming y misdirection.",
                    "Presentar los trucos a amigos o familiares en reuniones informales."
                ]
            }
        ]
    }
};
