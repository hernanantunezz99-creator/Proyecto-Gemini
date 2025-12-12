// Sonido Ding
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

// Checkbox Logic
window.toggleTask = function(checkbox) {
    const span = checkbox.nextElementSibling;
    if (checkbox.checked) {
        span.classList.add('task-completed');
        playSuccessSound();
    } else {
        span.classList.remove('task-completed');
    }
}

// Navegación
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const mainMenu = document.getElementById('main-menu');
const seasonView = document.getElementById('season-view');

window.openSaga = function(numero) {
    modalTitle.innerText = "SAGA " + numero;
    modal.style.display = 'flex';
}
window.closeModal = function() { modal.style.display = 'none'; }
window.goBack = function() { seasonView.style.display = 'none'; mainMenu.style.display = 'flex'; }
window.onclick = function(event) { if (event.target == modal) closeModal(); }

// Renderizar Temporada
window.openSeasonView = function(seasonNum) {
    closeModal();
    mainMenu.style.display = 'none';
    seasonView.style.display = 'flex';

    const seasonData = DATOS_TEMPORADAS[seasonNum];
    const arcsData = DATOS_ARCOS[seasonNum];

    if (!seasonData) return;

    let objectivesHTML = '';
    seasonData.objetivos.forEach(obj => {
        let tareasHTML = '';
        obj.tareas.forEach(tarea => {
            tareasHTML += `<li><input type="checkbox" onclick="toggleTask(this)"><span>${tarea}</span></li>`;
        });
        objectivesHTML += `
            <div class="objective-group">
                <h4>${obj.titulo}</h4>
                <span class="metric">${obj.metrica}</span>
                <ul>${tareasHTML}</ul>
            </div>`;
    });

    let arcsHTML = '';
    if (arcsData) {
        arcsData.forEach(arc => {
            arcsHTML += `
                <div class="arc-card" onclick="alert('${arc.titulo}...')">
                    <h4>${arc.titulo}</h4>
                    <p>${arc.sub}</p>
                    <div style="font-size:1.5rem; margin-top:5px;">${arc.icono}</div>
                </div>`;
        });
    }

    seasonView.innerHTML = `
        <div class="season-header"><h2>${seasonData.titulo}</h2></div>
        <div class="objectives-box">
            <h3>🎯 OBJETIVOS PRINCIPALES</h3>
            <div class="objectives-grid">${objectivesHTML}</div>
            <h3 class="arcs-title">ARCOS</h3>
            <div class="arcs-container">${arcsHTML}</div>
        </div>
        <button class="back-btn" onclick="goBack()">⬅ Volver al Menú</button>
    `;
}
