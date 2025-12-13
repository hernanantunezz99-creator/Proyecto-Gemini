// ==========================================
//       LOGIC.JS - COMPLETO Y DEFINITIVO
// ==========================================

// --- 1. SONIDOS ---
const sfxCheck = new Audio('img/check.mp3');
const sfxCancel = new Audio('img/cancelar.mp3');
const sfxOn = new Audio('img/on.mp3');
const sfxOff = new Audio('img/off.mp3');

function playSfx(audioObj) {
    audioObj.currentTime = 0;
    audioObj.play().catch(err => console.warn("Audio error:", err));
}

// --- 2. SISTEMA DE GUARDADO ---

// A. Tareas Normales (Checkboxes)
window.toggleTask = function(checkbox, uniqueId) {
    const span = checkbox.nextElementSibling;
    if (checkbox.checked) {
        span.classList.add('task-completed');
        playSfx(sfxCheck);
        localStorage.setItem(uniqueId, 'true');
    } else {
        span.classList.remove('task-completed');
        playSfx(sfxCancel);
        localStorage.setItem(uniqueId, 'false');
    }
}

// B. Barras de Progreso (Cardio)
window.incrementProgress = function(uniqueId, max, acumulado = 0) {
    let stored = localStorage.getItem(uniqueId);
    let current = parseInt(stored);
    
    // Protección contra errores (NaN)
    if (isNaN(current)) current = 0;
    
    current++;

    // Lógica de ciclo y sonidos
    if (current > max) {
        current = 0;
        playSfx(sfxCancel); // Reinicio
    } else if (current === max) {
        playSfx(sfxCheck); // Completado
    } else {
        playSfx(sfxOn); // Progreso normal
    }

    localStorage.setItem(uniqueId, current);
    updateProgressBarUI(uniqueId, current, max, acumulado);
}

// Helper para actualizar la barra visualmente
function updateProgressBarUI(uniqueId, current, max, acumulado) {
    const barFill = document.getElementById(`bar-fill-${uniqueId}`);
    const barText = document.getElementById(`bar-text-${uniqueId}`);
    
    if (barFill && barText) {
        const percent = (current / max) * 100;
        // Evitar que el width sea NaN%
        const widthVal = isNaN(percent) ? 0 : percent;
        barFill.style.width = `${widthVal}%`;
        
        if (current === max) {
            barFill.classList.add('completed-fill');
            barText.innerText = "¡COMPLETADO!";
        } else {
            barFill.classList.remove('completed-fill');
            // Texto: "0/15" o "0/15 (30)" si hay acumulado
            let text = `${current}/${max}`;
            if (acumulado > 0) text += ` (${acumulado})`;
            barText.innerText = text;
        }
    }
}

// --- 3. VARIABLES GLOBALES ---
const modal = document.getElementById('modal');
const mainMenu = document.getElementById('main-menu');
const seasonView = document.getElementById('season-view');
const arcView = document.getElementById('arc-view');

// --- 4. MODAL SAGA (Menú Principal) ---
window.openSaga = function(sagaNum) {
    playSfx(sfxOn);
    modal.style.display = 'flex';
    const modalContent = document.querySelector('.modal-content');
    
    let buttonsHTML = '';
    if (sagaNum === 1) {
        buttonsHTML = `
            <p>Elige una temporada:</p>
            <button class="season-btn" onclick="openSeasonView(1)">Temporada 1 (2026)</button>
            <button class="season-btn" onclick="openSeasonView(2)">Temporada 2 (2027)</button>
        `;
    } else {
        buttonsHTML = `
            <p style="color: #888;">Futuro bloqueado:</p>
            <button class="season-btn disabled-btn">Coming Soon...</button>
        `;
    }

    modalContent.innerHTML = `
        <h2 id="modal-title">SAGA ${sagaNum}</h2>
        ${buttonsHTML}
        <button class="close-btn" onclick="closeModal()">Cerrar</button>
    `;
}

window.closeModal = function() { playSfx(sfxOff); modal.style.display = 'none'; }
window.onclick = function(event) { if (event.target == modal) window.closeModal(); }

// --- 5. NAVEGACIÓN GENERAL ---
window.goBackToMenu = function() {
    playSfx(sfxOff);
    seasonView.style.display = 'none';
    mainMenu.style.display = 'flex';
    window.scrollTo(0, 0);
}

window.closeArcView = function() {
    playSfx(sfxOff);
    arcView.style.display = 'none';
    seasonView.style.display = 'flex';
    window.scrollTo(0, 0);
}

// --- 6. RENDERIZADOR DE TAREAS (El cerebro visual) ---
function renderTasksHTML(tasks, uniqueIdPrefix, isReadOnly = false) {
    let html = '';
    tasks.forEach((tarea, i) => {
        const uniqueId = `${uniqueIdPrefix}-t${i}`;
        
        // CASO A: BARRA DE PROGRESO (Si tiene propiedad 'total')
        if (typeof tarea === 'object' && tarea.total) {
            const max = tarea.total;
            const acumulado = tarea.acumulado || 0; 
            
            let current = parseInt(localStorage.getItem(uniqueId));
            if (isNaN(current)) current = 0;

            const percent = (current / max) * 100;
            const isFull = current === max;
            
            // Texto de la barra
            let label = isFull ? "¡COMPLETADO!" : `${current}/${max}`;
            if (!isFull && acumulado > 0) label += ` (${acumulado})`;

            const fillClass = isFull ? 'completed-fill' : '';
            const widthStyle = isNaN(percent) ? "0%" : `${percent}%`;

            html += `
                <li class="progress-container" onclick="incrementProgress('${uniqueId}', ${max}, ${acumulado})">
                    <div class="progress-track">
                        <div id="bar-fill-${uniqueId}" class="progress-fill ${fillClass}" style="width: ${widthStyle}"></div>
                        <span id="bar-text-${uniqueId}" class="progress-text">${label}</span>
                    </div>
                </li>
            `;
        } 
        // CASO B: SOLO TEXTO (Para columnas de Fechas)
        else if (isReadOnly) {
            const texto = typeof tarea === 'string' ? tarea : tarea.texto;
            html += `<li class="readonly-task">${texto}</li>`;
        } 
        // CASO C: CHECKBOX NORMAL
        else {
            const texto = typeof tarea === 'string' ? tarea : tarea.texto;
            const isChecked = localStorage.getItem(uniqueId) === 'true';
            const checkedAttr = isChecked ? 'checked' : '';
            const classAttr = isChecked ? 'task-completed' : '';
            
            html += `
                <li>
                    <input type="checkbox" ${checkedAttr} onclick="toggleTask(this, '${uniqueId}')">
                    <span class="${classAttr}">${texto}</span>
                </li>`;
        }
    });
    return html;
}

// --- 7. VISTA DE ARCO (Grid Excel) ---
window.openArcView = function(seasonNum, arcIndex) {
    playSfx(sfxOn);
    seasonView.style.display = 'none';
    arcView.style.display = 'flex';
    window.scrollTo(0, 0);

    const arcData = DATOS_ARCOS[seasonNum][arcIndex];
    
    // Detectar si es el Arco 0 para aplicar estilo "Tabla Excel"
    const isExcelArc = (seasonNum === 1 && arcIndex === 0);
    const gridClass = isExcelArc ? 'objectives-grid excel-mode' : 'objectives-grid';

    let objectivesHTML = '';
    if (arcData.objetivos && arcData.objetivos.length > 0) {
        arcData.objetivos.forEach((obj, objInd) => {
            const prefix = `s${seasonNum}-a${arcIndex}-o${objInd}`;
            
            // Detectar si es columna de fechas (por título o posición en Arco 0)
            const tituloUpper = obj.titulo ? obj.titulo.toUpperCase() : "";
            const isDateColumn = (tituloUpper.includes("FECHA") || (isExcelArc && objInd === 0));
            
            const tasks = renderTasksHTML(obj.tareas, prefix, isDateColumn);
            
            objectivesHTML += `
                <div class="objective-group animate-item">
                    <h4 style="color: var(--accent-2); border-color: var(--accent-2);">${obj.titulo}</h4>
                    <ul>${tasks}</ul>
                </div>`;
        });
    } else {
        objectivesHTML = '<p style="color:#888;">No hay objetivos cargados.</p>';
    }

    arcView.innerHTML = `
        <button class="back-btn-fixed" onclick="closeArcView()">⬅ VOLVER</button>
        <div class="season-header">
            <h2 style="color: var(--accent-1);">${arcData.titulo}</h2>
            <p style="color: #ccc; margin-top:-10px;">${arcData.sub}</p>
        </div>
        <div class="objectives-box">
            <h3>🎯 OBJETIVOS DEL ARCO</h3>
            <div class="${gridClass}">${objectivesHTML}</div>
        </div>
    `;
}

// --- 8. VISTA DE TEMPORADA (Botones con Imágenes) ---
window.openSeasonView = function(seasonNum) {
    modal.style.display = 'none';
    playSfx(sfxOn);
    mainMenu.style.display = 'none';
    seasonView.style.display = 'flex';
    window.scrollTo(0, 0);

    const seasonData = DATOS_TEMPORADAS[seasonNum];
    const arcsData = DATOS_ARCOS[seasonNum];

    if (!seasonData) return;

    // Generar botones de Arcos
    let arcsHTML = '';
    if (arcsData) {
        arcsData.forEach((arc, index) => {
            let cardStyle = '';
            let iconHTML = '';
            
            // Título corto para el botón (ej: "ARCO 0")
            const shortTitle = `ARCO ${index}`;

            if (arc.imagen) {
                // Imagen de fondo limpia (sin filtro oscuro)
                cardStyle = `
                    background-image: url('${arc.imagen}');
                    background-size: cover;
                    background-position: center;
                `;
            } else {
                // Si no hay imagen, usar el icono emoji
                iconHTML = `<div style="font-size:1.5rem; margin-top:5px;">${arc.icono}</div>`;
            }

            arcsHTML += `
                <div class="arc-card animate-item" onclick="openArcView(${seasonNum}, ${index})" style="${cardStyle}">
                    <h4>${shortTitle}</h4>
                    <p>${arc.sub}</p>
                    ${iconHTML}
                </div>`;
        });
    }

    // Generar Objetivos Generales
    const renderGroup = (arr, type) => {
        let html = '';
        arr.forEach((obj, idx) => {
            const prefix = `s${seasonNum}-${type}-o${idx}`;
            html += `
                <div class="objective-group ${type === 'sec' ? 'secondary-card' : ''} animate-item">
                    <h4>${obj.titulo}</h4>
                    <span class="metric">${obj.metrica}</span>
                    <ul>${renderTasksHTML(obj.tareas, prefix, false)}</ul>
                </div>`;
        });
        return html;
    };

    const primaryHTML = renderGroup(seasonData.objetivos, 'pri');
    const secondaryHTML = seasonData.objetivosSecundarios ? renderGroup(seasonData.objetivosSecundarios, 'sec') : '';

    seasonView.innerHTML = `
        <button class="back-btn-fixed" onclick="goBackToMenu()">⬅ MENÚ</button>
        <div class="season-header"><h2>${seasonData.titulo}</h2></div>
        
        <div class="objectives-box">
            <h3 class="arcs-title" style="margin-top: 0;">ARCOS</h3>
            <div class="arcs-container" style="margin-bottom: 40px;">${arcsHTML}</div>
            
            <div style="margin: 30px 0; border-top: 1px dashed rgba(255,255,255,0.2);"></div>
            
            <h3>🎯 OBJETIVOS PRIMARIOS</h3>
            <div class="objectives-grid">${primaryHTML}</div>

            <div style="margin: 50px 0; border-top: 1px dashed rgba(255,255,255,0.2);"></div>

            <h3>⚔️ OBJETIVOS SECUNDARIOS</h3>
            <div class="objectives-grid">${secondaryHTML}</div>
        </div>
    `;
}
