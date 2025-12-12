// Audio Context para el sonido "Ding"
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playSuccessSound() {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(500, audioCtx.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(1000, audioCtx.currentTime + 0.1);
    gainNode.gain.setValueAtTime(0.3, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.4);
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    oscillator.start();
    oscillator.stop(audioCtx.currentTime + 0.5);
}

// Función global para los checkboxes
window.toggleTask = function(checkbox) {
    const span = checkbox.nextElementSibling;
    if (checkbox.checked) {
        span.classList.add('task-completed');
        playSuccessSound();
    } else {
        span.classList.remove('task-completed');
    }
}

// Elementos del DOM
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const mainMenu = document.getElementById('main-menu');
const seasonView = document.getElementById('season-view');

// Funciones de navegación
window.openSaga = function(numero) {
    modalTitle.innerText = "SAGA " + numero;
    modal.style.display = 'flex';
}

window.closeModal = function() {
    modal.style.display = 'none';
}

window.goBack = function() {
    seasonView.style.display = 'none';
    mainMenu.style.display = 'flex';
}

window.onclick = function(event) {
    if (event.target == modal) closeModal();
}

// LÓGICA PRINCIPAL: Renderizar Temporada desde los archivos de datos
window.openSeasonView = function(seasonNum) {
    closeModal();
    mainMenu.style.display = 'none';
    seasonView.style.display = 'flex';

    // 1. Obtener datos (desde data_temporadas.js y data_arcos.js)
    const seasonData = DATOS_TEMPORADAS[seasonNum];
    const arcsData = DATOS_ARCOS[seasonNum];

    if (!seasonData) {
        console.error("No hay datos para la temporada " + seasonNum);
        return;
    }

    // 2. Construir HTML de Objetivos
    let objectivesHTML = '';
    
    seasonData.objetivos.forEach(obj => {
        let tareasHTML = '';
        obj.tareas.forEach(tarea => {
            // Permitir HTML dentro de la tarea (para las negritas de <strong>)
            tareasHTML += `<li><input type="checkbox" onclick="toggleTask(this)"><span>${tarea}</span></li>`;
        });

        objectivesHTML += `
            <div class="objective-group">
                <h4>${obj.titulo}</h4>
                <span class="metric">${obj.metrica}</span>
                <ul>${tareasHTML}</ul>
            </div>
        `;
    });

    // 3. Construir HTML de Arcos
    let arcsHTML = '';
    if (arcsData) {
        arcsData.forEach(arc => {
            arcsHTML += `
                <div class="arc-card" onclick="alert('${arc.titulo}...')">
                    <h4>${arc.titulo}</h4>
                    <p>${arc.sub}</p>
                    <div style="font-size:1.5rem; margin-top:5px;">${arc.icono}</div>
                </div>
            `;
        });
    }

    // 4. Inyectar todo en el contenedor
    seasonView.innerHTML = `
        <div class="season-header">
            <h2>${seasonData.titulo}</h2>
        </div>
        
        <div class="objectives-box">
            <h3>🎯 OBJETIVOS PRINCIPALES</h3>
            <div class="objectives-grid">
                ${objectivesHTML}
            </div>

            <h3 class="arcs-title">ARCOS</h3>
            <div class="arcs-container">
                ${arcsHTML}
            </div>
        </div>

        <button class="back-btn" onclick="goBack()">⬅ Volver al Menú</button>
    `;
}
