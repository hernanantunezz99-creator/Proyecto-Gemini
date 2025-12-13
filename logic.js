// --- SONIDO ---
const sfxCheck = new Audio('img/check.mp3');
const sfxCancel = new Audio('img/cancelar.mp3');
const sfxOn = new Audio('img/on.mp3');
const sfxOff = new Audio('img/off.mp3');

function playSfx(audioObj) {
    audioObj.currentTime = 0;
    audioObj.play().catch(err => console.warn("Audio error:", err));
}

// --- GUARDADO ---
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

// --- VARIABLES ---
const modal = document.getElementById('modal');
const mainMenu = document.getElementById('main-menu');
const seasonView = document.getElementById('season-view');
const arcView = document.getElementById('arc-view');

// --- MODAL SAGA ---
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

// --- NAVEGACIÓN ---
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

// --- RENDERIZADO TAREAS ---
function renderTasksHTML(tasks, uniqueIdPrefix) {
    let html = '';
    tasks.forEach((tarea, i) => {
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

// --- VISTA ARCO (Modificada para detectar Excel) ---
window.openArcView = function(seasonNum, arcIndex) {
    playSfx(sfxOn);
    seasonView.style.display = 'none';
    arcView.style.display = 'flex';
    window.scrollTo(0, 0);

    const arcData = DATOS_ARCOS[seasonNum][arcIndex];
    
    // DETECCIÓN: ¿Es el Arco 0 de la Temporada 1?
    const isExcelArc = (seasonNum === 1 && arcIndex === 0);
    // Si es Excel, usamos la clase especial 'excel-mode', si no, grilla normal
    const gridClass = isExcelArc ? 'objectives-grid excel-mode' : 'objectives-grid';

    let objectivesHTML = '';
    if (arcData.objetivos && arcData.objetivos.length > 0) {
        arcData.objetivos.forEach((obj, objInd) => {
            const prefix = `s${seasonNum}-a${arcIndex}-o${objInd}`;
            const tasks = renderTasksHTML(obj.tareas, prefix);
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

// --- VISTA TEMPORADA ---
window.openSeasonView = function(seasonNum) {
    modal.style.display = 'none';
    playSfx(sfxOn);
    mainMenu.style.display = 'none';
    seasonView.style.display = 'flex';
    window.scrollTo(0, 0);

    const seasonData = DATOS_TEMPORADAS[seasonNum];
    const arcsData = DATOS_ARCOS[seasonNum];

    if (!seasonData) return;

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

    const renderGroup = (arr, type) => {
        let html = '';
        arr.forEach((obj, idx) => {
            const prefix = `s${seasonNum}-${type}-o${idx}`;
            html += `
                <div class="objective-group ${type === 'sec' ? 'secondary-card' : ''} animate-item">
                    <h4>${obj.titulo}</h4>
                    <span class="metric">${obj.metrica}</span>
                    <ul>${renderTasksHTML(obj.tareas, prefix)}</ul>
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
