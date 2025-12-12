// --- SONIDO (ARCHIVOS) ---
const sfxCheck = new Audio('img/check.mp3');
const sfxCancel = new Audio('img/cancelar.mp3');
const sfxOn = new Audio('img/on.mp3');
const sfxOff = new Audio('img/off.mp3');

function playSfx(audioObj) {
    audioObj.currentTime = 0;
    audioObj.play().catch(err => console.warn("Audio error:", err));
}

// --- LÓGICA DE GUARDADO ---
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

// --- NAVEGACIÓN Y VARIABLES DOM ---
const modal = document.getElementById('modal');
const mainMenu = document.getElementById('main-menu');
const seasonView = document.getElementById('season-view');
const arcView = document.getElementById('arc-view'); // NUEVO

// 1. ABRIR MODAL DE SAGA
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
        const startYear = 2026 + (sagaNum - 1) * 2;
        const s1 = (sagaNum - 1) * 2 + 1;
        const s2 = s1 + 1;
        buttonsHTML = `
            <p style="color: #888;">Futuro bloqueado:</p>
            <button class="season-btn disabled-btn">Temporada ${s1} (${startYear}) — Coming Soon</button>
            <button class="season-btn disabled-btn">Temporada ${s2} (${startYear + 1}) — Coming Soon</button>
        `;
    }

    modalContent.innerHTML = `
        <h2 id="modal-title">SAGA ${sagaNum}</h2>
        ${buttonsHTML}
        <button class="close-btn" onclick="closeModal()">Cerrar</button>
    `;
}

window.closeModal = function() {
    playSfx(sfxOff);
    modal.style.display = 'none';
}

// 2. NAVEGACIÓN ENTRE VISTAS
// Volver de Temporada a Menú
window.goBackToMenu = function() {
    playSfx(sfxOff);
    seasonView.style.display = 'none';
    mainMenu.style.display = 'flex';
    window.scrollTo(0, 0);
}

// Volver de Arco a Temporada
window.closeArcView = function() {
    playSfx(sfxOff);
    arcView.style.display = 'none';
    seasonView.style.display = 'flex'; // Reactivamos la vista anterior
    window.scrollTo(0, 0);
}

window.onclick = function(event) {
    if (event.target == modal) window.closeModal();
}

// --- HELPER HTML (Renderiza listas de tareas) ---
function renderTasksHTML(tasks, uniqueIdPrefix) {
    let html = '';
    tasks.forEach((tarea, i) => {
        // ID único para localStorage
        const uniqueId = `${uniqueIdPrefix}-t${i}`;
        const isChecked = localStorage.getItem(uniqueId) === 'true';
        const checkedAttr = isChecked ? 'checked' : '';
        const classAttr = isChecked ? 'task-completed' : '';
        const texto = typeof tarea === 'string' ? tarea : tarea.texto;

        html += `
            <li>
                <input type="checkbox" ${checkedAttr} onclick="toggleTask(this, '${uniqueId}')">
                <span class="${classAttr}">${texto}</span>
            </li>`;
    });
    return html;
}

// --- RENDERIZADO DE VISTA DE ARCO (NUEVA FUNCIÓN) ---
window.openArcView = function(seasonNum, arcIndex) {
    playSfx(sfxOn);
    // Ocultamos Temporada, Mostramos Arco
    seasonView.style.display = 'none';
    arcView.style.display = 'flex';
    window.scrollTo(0, 0);

    const arcData = DATOS_ARCOS[seasonNum][arcIndex];

    // Renderizar los objetivos específicos del Arco
    let objectivesHTML = '';
    if (arcData.objetivos && arcData.objetivos.length > 0) {
        arcData.objetivos.forEach((obj, objInd) => {
            // Prefijo ID: s1-a0-o0 (Season 1, Arc 0, Obj 0)
            const prefix = `s${seasonNum}-a${arcIndex}-o${objInd}`;
            const tasks = renderTasksHTML(obj.tareas, prefix);
            
            objectivesHTML += `
                <div class="objective-group animate-item">
                    <h4 style="color: var(--accent-2); border-color: var(--accent-2);">${obj.titulo}</h4>
                    <ul>${tasks}</ul>
                </div>
            `;
        });
    } else {
        objectivesHTML = '<p style="color:#888; text-align:center; width:100%;">No hay objetivos cargados para este arco.</p>';
    }

    arcView.innerHTML = `
        <button class="back-btn-fixed" onclick="closeArcView()">⬅ VOLVER A TEMPORADA</button>

        <div class="season-header">
            <h2 style="color: var(--accent-1);">${arcData.titulo}</h2>
            <p style="color: #ccc; font-style: italic; margin-top: -10px;">${arcData.sub}</p>
            <div style="font-size: 3rem; margin-top: 10px;">${arcData.icono}</div>
        </div>
        
        <div class="objectives-box">
            <h3>🎯 OBJETIVOS DEL ARCO</h3>
            <div class="objectives-grid">
                ${objectivesHTML}
            </div>
        </div>
    `;
}

// --- RENDERIZADO DE VISTA DE TEMPORADA ---
window.openSeasonView = function(seasonNum) {
    modal.style.display = 'none'; 
    playSfx(sfxOn); 
    mainMenu.style.display = 'none';
    seasonView.style.display = 'flex';
    window.scrollTo(0, 0); 

    const seasonData = DATOS_TEMPORADAS[seasonNum];
    const arcsData = DATOS_ARCOS[seasonNum];

    if (!seasonData) return;

    // Helper interno para grupos de la temporada
    const renderGroup = (arr, type) => {
        let html = '';
        arr.forEach((obj, idx) => {
            const prefix = `s${seasonNum}-${type}-o${idx}`;
            const tasks = renderTasksHTML(obj.tareas, prefix);
            html += `
                <div class="objective-group ${type === 'sec' ? 'secondary-card' : ''} animate-item">
                    <h4>${obj.titulo}</h4>
                    <span class="metric">${obj.metrica}</span>
                    <ul>${tasks}</ul>
                </div>`;
        });
        return html;
    };

    const primaryHTML = renderGroup(seasonData.objetivos, 'pri');
    const secondaryHTML = seasonData.objetivosSecundarios ? renderGroup(seasonData.objetivosSecundarios, 'sec') : '';

    // Render Arcos (Ahora llama a openArcView)
    let arcsHTML = '';
    if (arcsData) {
        arcsData.forEach((arc, index) => {
            arcsHTML += `
                <div class="arc-card animate-item" onclick="openArcView(${seasonNum}, ${index})">
                    <h4>${arc.titulo}</h4>
                    <p>${arc.sub}</p>
                    <div style="font-size:1.5rem; margin-top:5px;">${arc.icono}</div>
                </div>`;
        });
    }

    seasonView.innerHTML = `
        <button class="back-btn-fixed" onclick="goBackToMenu()">⬅ MENÚ PRINCIPAL</button>

        <div class="season-header"><h2>${seasonData.titulo}</h2></div>
        
        <div class="objectives-box">
            <h3 class="arcs-title" style="margin-top: 0;">ARCOS (Fases)</h3>
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
