const pulsante = document.getElementById('mioPulsante');

pulsante.addEventListener('click', () => {
    pulsante.textContent = "Funziona! 🎉";
    document.body.style.backgroundColor = "#e0f7fa";
});