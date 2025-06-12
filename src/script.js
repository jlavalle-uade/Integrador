$(document).ready(function() {

    const toggle = document.getElementById('toggleDarkMode');
    const body = document.body;

    if (localStorage.getItem('dark-mode') === 'true') {
        body.classList.add('dark-mode');
        toggle.checked = true;
    }

    toggle.addEventListener('change', () => {
        body.classList.toggle('dark-mode');
        localStorage.setItem('dark-mode', body.classList.contains('dark-mode'));
    });
});

function validarFormularioContacto() {
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    if (nombre === '' || email === '' || mensaje === '') {
        alert('Por favor, completa todos los campos.');
        return false;
    }

    if (!validarEmail(email)) {
        alert('Por favor, introduce un correo electrónico válido.');
        return false;
    }

    alert('Gracias por su contacto ' + nombre + '. En breve le estaré respondiendo.');
    window.location.href = 'index.html';
}

function validarEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}