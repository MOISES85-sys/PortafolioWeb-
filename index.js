function updateTime() {
    const now = new Date();
    document.getElementById('current-time').innerText = now.toLocaleTimeString();
}

function updateDate() {
    const now = new Date();
    document.getElementById('footer-date').innerText = now.toLocaleDateString();
}

setInterval(updateTime, 1000);
updateDate(); // Llama a la función para mostrar la fecha al cargar