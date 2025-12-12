// --- SONIDO (ARCHIVOS) ---
const sfxCheck = new Audio('img/check.mp3');
const sfxOn = new Audio('img/on.mp3');
const sfxOff = new Audio('img/off.mp3');

// Función auxiliar para reiniciar el audio si se hace clic rápido
function playSfx(audioObj) {
    audioObj.currentTime = 0;
    audioObj.play().catch(err => console.warn("Interacción requerida para audio:", err));
}

// --- LÓGICA DE GUARDADO (LOCALSTORAGE) ---
window.toggleTask = function(checkbox, uniqueId) {
    const span = checkbox.nextElementSibling;
    
    if (checkbox.checked) {
        span.classList.add('task-completed');
        playSfx(sfxCheck); // SONIDO CHECK
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

// Abrir Modal de Saga
window.openSaga = function(numero) {
    playSfx(sfxOn); // SONIDO ON (Entrar)
    modalTitle.innerText = "SAGA " + numero;
    modal.style.display = 'flex';
}

// Cerrar Modal (Botón Cerrar o clic fuera)
window.closeModal = function() {
    playSfx(sfxOff); // SONIDO OFF (Retroceder/Salir)
    modal.style.display = 'none';
}

// Volver al Menú Principal
window.goBack = function() {
    playSfx(sfxOff); // SONIDO OFF (Retroceder)
    seasonView.style.display = 'none';
    mainMenu.style.display = 'flex';
    window.scrollTo(0, 0); // Scroll arriba
}

// Detectar clic fuera del modal para cerrar
window.onclick = function(event) {
    if (event.target == modal) window.closeModal();
}

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
    // Cerramos el modal manualmente sin usar window.closeModal() para evitar que suene "OFF"
    // ya que estamos yendo hacia adelante (ON).
    modal.style.display = 'none'; 
    
    playSfx(sfxOn); // SONIDO ON (Entrar)
    mainMenu.style.display = 'none';
    seasonView.style.display = 'flex';
    window.scrollTo(0, 0); // Asegurar scroll arriba al entrar

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

    // 4. Inyectar en el DOM
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
