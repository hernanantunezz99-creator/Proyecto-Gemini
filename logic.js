// --- SONIDO ---
// Creamos el contexto de audio
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playSuccessSound() {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    // Configuración del sonido "Ding"
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(600, audioCtx.currentTime); 
    oscillator.frequency.exponentialRampToValueAtTime(1200, audioCtx.currentTime + 0.1);
    
    // Configuración del volumen (suave)
    gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime); 
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.3);
    
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    oscillator.start();
    oscillator.stop(audioCtx.currentTime + 0.3);
}

// --- LÓGICA DE GUARDADO (LOCALSTORAGE) ---

// Esta función se ejecuta al hacer clic en un checkbox
window.toggleTask = function(checkbox, uniqueId) {
    const span = checkbox.nextElementSibling;
    
    if (checkbox.checked) {
        span.classList.add('task-completed');
        playSuccessSound(); // ¡Sonido de victoria!
        // Guardamos en la memoria del navegador
        localStorage.setItem(uniqueId, 'true');
    } else {
        span.classList.remove('task-completed');
        // Si lo destildas, guardamos que ya no está hecho
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
window.goBack = function() { seasonView.style.display = 'none'; mainMenu.style.display = 'flex'; }
window.onclick = function(event) { if (event.target == modal) closeModal(); }


// --- RENDERIZADO DE TEMPORADA ---
window.openSeasonView = function(seasonNum) {
    closeModal();
    mainMenu.style.display = 'none';
    seasonView.style.display = 'flex';

    // Cargamos los datos desde los archivos externos
    const seasonData = DATOS_TEMPORADAS[seasonNum];
    const arcsData = DATOS_ARCOS[seasonNum];

    if (!seasonData) return;

    let objectivesHTML = '';
    
    // Recorremos cada grupo de objetivos
    seasonData.objetivos.forEach((obj, objIndex) => {
        let tareasHTML = '';
        
        // Recorremos cada tarea individual
        obj.tareas.forEach((tarea, taskIndex) => {
            
            // GENERAMOS UN ID ÚNICO AUTOMÁTICO
            // Ejemplo de ID: "s1-o0-t3" (Temporada 1, Objetivo 0, Tarea 3)
            // Esto sirve para que el navegador sepa exactamente cuál casilla es cuál.
            const uniqueId = `s${seasonNum}-o${objIndex}-t${taskIndex}`;
            
            // Preguntamos a la memoria: "¿Esta tarea estaba hecha?"
            const isChecked = localStorage.getItem(uniqueId) === 'true';
            
            // Preparamos el HTML según si estaba hecha o no
            const checkedAttr = isChecked ? 'checked' : '';
            const classAttr = isChecked ? 'task-completed' : '';

            // Si data_temporadas.js tiene objetos {texto:..., hecho:...} usamos tarea.texto
            // Si es texto plano usamos 'tarea'. Asumo texto plano según tu preferencia anterior.
            const textoTarea = typeof tarea === 'string' ? tarea : tarea.texto;

            tareasHTML += `
                <li>
                    <input type="checkbox" 
                           ${checkedAttr} 
                           onclick="toggleTask(this, '${uniqueId}')">
                    <span class="${classAttr}">${textoTarea}</span>
                </li>`;
        });

        objectivesHTML += `
            <div class="objective-group">
                <h4>${obj.titulo}</h4>
                <span class="metric">${obj.metrica}</span>
                <ul>${tareasHTML}</ul>
            </div>`;
    });

    // Construcción de los Arcos (Trimestres)
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

    // Insertamos todo en la página
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
