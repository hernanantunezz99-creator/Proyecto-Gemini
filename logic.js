// --- SONIDO ---
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playSuccessSound() {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(600, audioCtx.currentTime); 
    oscillator.frequency.exponentialRampToValueAtTime(1200, audioCtx.currentTime + 0.1);
    
    gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime); 
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.3);
    
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    oscillator.start();
    oscillator.stop(audioCtx.currentTime + 0.3);
}

// --- LÓGICA DE GUARDADO (LOCALSTORAGE) ---
window.toggleTask = function(checkbox, uniqueId) {
    const span = checkbox.nextElementSibling;
    
    if (checkbox.checked) {
        span.classList.add('task-completed');
        playSuccessSound();
        localStorage.setItem(uniqueId, 'true');
    } else {
        span.classList.remove('task-completed');
        localStorage.setItem(uniqueId, 'false');
    }
}

// --- NAVEGACIÓN ---
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const mainMenu = document.getElementById('main-menu');
const seasonView = document.getElementById('season-view');

window.openSaga = function(numero) {
    modalTitle.innerText = "SAGA " + numero;
    modal.style.display = 'flex';
}
window.closeModal = function() { modal.style.display = 'none'; }
window.goBack = function() { 
    seasonView.style.display = 'none'; 
    mainMenu.style.display = 'flex'; 
    window.scrollTo(0, 0); // <--- ESTA ES LA LÍNEA MÁGICA
}
window.onclick = function(event) { if (event.target == modal) closeModal(); }

// --- FUNCIÓN HELPER PARA GENERAR HTML DE OBJETIVOS ---
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
    closeModal();
    mainMenu.style.display = 'none';
    seasonView.style.display = 'flex';

    const seasonData = DATOS_TEMPORADAS[seasonNum];
    const arcsData = DATOS_ARCOS[seasonNum];

    if (!seasonData) return;

    // 1. Renderizar Primarios
    const primaryHTML = renderObjectiveGroup(seasonData.objetivos, seasonNum, 'pri');

    // 2. Renderizar Secundarios (si existen)
    let secondaryHTML = '';
    if (seasonData.objetivosSecundarios) {
        secondaryHTML = renderObjectiveGroup(seasonData.objetivosSecundarios, seasonNum, 'sec');
    }

    // 3. Renderizar Arcos
    let arcsHTML = '';
    if (arcsData) {
        arcsData.forEach(arc => {
            arcsHTML += `
                <div class="arc-card animate-item" onclick="alert('${arc.titulo}...')">
                    <h4>${arc.titulo}</h4>
                    <p>${arc.sub}</p>
                    <div style="font-size:1.5rem; margin-top:5px;">${arc.icono}</div>
                </div>`;
        });
    }

    // 4. Inyectar en el DOM con el Divisor
    seasonView.innerHTML = `
        <div class="season-header"><h2>${seasonData.titulo}</h2></div>
        
        <div class="objectives-box">
            <h3>🎯 OBJETIVOS PRIMARIOS</h3>
            <div class="objectives-grid">
                ${primaryHTML}
            </div>

            <div style="margin: 50px 0; border-top: 1px dashed rgba(255,255,255,0.2);"></div>

            <h3>⚔️ OBJETIVOS SECUNDARIOS</h3>
            <div class="objectives-grid">
                ${secondaryHTML}
            </div>
            
            <h3 class="arcs-title">ARCOS</h3>
            <div class="arcs-container">${arcsHTML}</div>
        </div>
        <button class="back-btn" onclick="goBack()">⬅ Volver al Menú</button>
    `;
}

