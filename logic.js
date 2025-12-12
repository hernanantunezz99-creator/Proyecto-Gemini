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

// --- NAVEGACIÓN ---
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const mainMenu = document.getElementById('main-menu');
const seasonView = document.getElementById('season-view');

// 1. ABRIR MODAL DE SAGA (Selección de Temporada)
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

// 2. ABRIR DETALLE DE ARCO (En el mismo Modal)
window.openArcDetails = function(seasonNum, arcIndex) {
    playSfx(sfxOn);
    modal.style.display = 'flex';
    const modalContent = document.querySelector('.modal-content');
    
    const arcData = DATOS_ARCOS[seasonNum][arcIndex];
    
    // Generamos las tareas del arco
    let contentHTML = '';
    
    if (arcData.objetivos && arcData.objetivos.length > 0) {
        // Usamos la misma lógica de checkbox, con un ID especial 'arc'
        arcData.objetivos.forEach((obj, objInd) => {
            let tasksHTML = '';
            obj.tareas.forEach((t, tInd) => {
                const uniqueId = `s${seasonNum}-a${arcIndex}-o${objInd}-t${tInd}`;
                const isChecked = localStorage.getItem(uniqueId) === 'true';
                const checkedAttr = isChecked ? 'checked' : '';
                const classAttr = isChecked ? 'task-completed' : '';
                
                tasksHTML += `
                    <li style="justify-content: flex-start; text-align: left; margin-bottom: 8px;">
                        <input type="checkbox" ${checkedAttr} onclick="toggleTask(this, '${uniqueId}')">
                        <span class="${classAttr}" style="font-size: 0.8rem;">${t}</span>
                    </li>
                `;
            });
            
            contentHTML += `
                <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 10px; margin-bottom: 15px; text-align: left;">
                    <h4 style="color: var(--accent-2); margin-top: 0;">${obj.titulo}</h4>
                    <ul style="list-style: none; padding: 0;">${tasksHTML}</ul>
                </div>
            `;
        });
    } else {
        contentHTML = '<p style="color: #999;">No hay objetivos detallados para este arco aún.</p>';
    }

    modalContent.innerHTML = `
        <h2>${arcData.titulo}</h2>
        <p style="color: #aaa; margin-bottom: 20px;">${arcData.sub}</p>
        <div style="max-height: 400px; overflow-y: auto;">
            ${contentHTML}
        </div>
        <button class="close-btn" onclick="closeModal()">Cerrar</button>
    `;
}

window.closeModal = function() {
    playSfx(sfxOff);
    modal.style.display = 'none';
}

window.goBack = function() {
    playSfx(sfxOff);
    seasonView.style.display = 'none';
    mainMenu.style.display = 'flex';
    window.scrollTo(0, 0);
}

window.onclick = function(event) {
    if (event.target == modal) window.closeModal();
}

// --- HELPER HTML ---
function renderObjectiveGroup(objectivesArray, seasonNum, typePrefix) {
    let html = '';
    objectivesArray.forEach((obj, objIndex) => {
        let tareasHTML = '';
        obj.tareas.forEach((tarea, taskIndex) => {
            const uniqueId = `s${seasonNum}-${typePrefix}-o${objIndex}-t${taskIndex}`;
            const isChecked = localStorage.getItem(uniqueId) === 'true';
            const checkedAttr = isChecked ? 'checked' : '';
            const classAttr = isChecked ? 'task-completed' : '';
            const textoTarea = typeof tarea === 'string' ? tarea : tarea.texto;

            tareasHTML += `
                <li>
                    <input type="checkbox" ${checkedAttr} onclick="toggleTask(this, '${uniqueId}')">
                    <span class="${classAttr}">${textoTarea}</span>
                </li>`;
        });

        html += `
            <div class="objective-group ${typePrefix === 'sec' ? 'secondary-card' : ''} animate-item">
                <h4>${obj.titulo}</h4>
                <span class="metric">${obj.metrica}</span>
                <ul>${tareasHTML}</ul>
            </div>`;
    });
    return html;
}

// --- RENDERIZADO DE TEMPORADA ---
window.openSeasonView = function(seasonNum) {
    modal.style.display = 'none'; 
    playSfx(sfxOn); 
    mainMenu.style.display = 'none';
    seasonView.style.display = 'flex';
    window.scrollTo(0, 0); 

    const seasonData = DATOS_TEMPORADAS[seasonNum];
    const arcsData = DATOS_ARCOS[seasonNum];

    if (!seasonData) return;

    const primaryHTML = renderObjectiveGroup(seasonData.objetivos, seasonNum, 'pri');
    
    let secondaryHTML = '';
    if (seasonData.objetivosSecundarios) {
        secondaryHTML = renderObjectiveGroup(seasonData.objetivosSecundarios, seasonNum, 'sec');
    }

    // Renderizado de Arcos (Con onclick apuntando a openArcDetails)
    let arcsHTML = '';
    if (arcsData) {
        arcsData.forEach((arc, index) => {
            arcsHTML += `
                <div class="arc-card animate-item" onclick="openArcDetails(${seasonNum}, ${index})">
                    <h4>${arc.titulo}</h4>
                    <p>${arc.sub}</p>
                    <div style="font-size:1.5rem; margin-top:5px;">${arc.icono}</div>
                </div>`;
        });
    }

    seasonView.innerHTML = `
        <button class="back-btn-fixed" onclick="goBack()">⬅ MENÚ</button>

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
