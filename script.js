document.addEventListener('DOMContentLoaded', function () {
    const formularioRegistro = document.getElementById('registro');
    const usuario = document.getElementById('usuario');
    const telefono = document.getElementById('telef');
    const contrasenia = document.getElementById('contra');
    const confirmaContrasenia = document.getElementById('confirma');
    const aceptaTerms = document.getElementById('terms');
    const registrarBoton = document.getElementById('boton');

    // Función para validar el formulario
    function validateForm() {
        const esNombreValido = /^[A-Za-z\s]{1,20}$/.test(usuario.value);
        const esTelefonoValido = /^\d{9}$/.test(telefono.value);
        const esContraseniaValida = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/.test(contrasenia.value);
        const contraseniaCoincide = contrasenia.value === confirmaContrasenia.value;
        const terminosAceptados = aceptaTerms.checked;

        return esNombreValido && esTelefonoValido && esContraseniaValida && contraseniaCoincide && terminosAceptados;
    }

    // Función para habilitar o deshabilitar el botón de registro
    function toggleRegistrarButton() {
        registrarBoton.disabled = !validateForm();
    }

    // Validar los campos en tiempo real al perder el foco
    usuario.addEventListener('blur', toggleRegistrarButton);
    telefono.addEventListener('blur', toggleRegistrarButton);
    contrasenia.addEventListener('blur', toggleRegistrarButton);
    confirmaContrasenia.addEventListener('blur', toggleRegistrarButton);

    // Habilitar o deshabilitar el botón de registro al marcar/desmarcar el checkbox
    aceptaTerms.addEventListener('change', toggleRegistrarButton);

    // Manejar la presentación inicial del botón de registro
    toggleRegistrarButton();

    // Evitar que el formulario se envíe si no está validado
    formularioRegistro.addEventListener('submit', function (evento) {
        if (!validateForm()) {
            evento.preventDefault();
            alert('Por favor, complete el formulario correctamente.');
        }
    });
});
