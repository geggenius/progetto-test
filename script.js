const pulsante = document.getElementById('mioPulsante');

pulsante.addEventListener('click', () => {
    pulsante.textContent = "Modifica completata. Funziona! 🎉";
    document.body.style.backgroundColor = "#e0f7fa";
});