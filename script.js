const submitFunction = (event) => {
    if (!validarFormulario()) {
        event.preventDefault();
    } else {
        event.preventDefault();
        alert(
            'Los datos enviados fueron: \n' +
            'Nombre: ' + document.getElementById('nombre').value + '\n' +
            'Apellido: ' + document.getElementById('apellido').value + '\n' +
            'Documento: ' + document.getElementById('documento').value + '\n' +
            'Email: ' + document.getElementById('email').value + '\n' +
            'Edad: ' + document.getElementById('edad').value + '\n' +
            'Actividad: ' + document.getElementById('actividad').value + '\n' +
            'Nivel de estudio: ' + document.getElementById('estudio').value + '\n'
        )
    }
}

document.getElementById('formulario').addEventListener('submit', submitFunction);//registra el envio del formulario

function validarFormulario() {
    //validacion texto
    let campoTexto = document.querySelectorAll('input[type="text"]');
    let validacionCorrecta = true;

    campoTexto.forEach(campo => {
        let errorCampo = document.getElementById('error' + campo.id.charAt(0).toUpperCase() + campo.id.slice(1)); //id con la primera letra en mayus
        if (campo.value.length == '') {
            mostrarError(errorCampo, 'Este campo es requerido');
            validacionCorrecta = false;
        } else if (campo.value.length > 0 && campo.value.length < 3) {
            mostrarError(errorCampo, 'Este campo debe tener al menos 3 caracteres');
            validacionCorrecta = false;
        } else {
            ocultarError(errorCampo);
        }
    });

    //validacion mail
    const email = document.getElementById('email');
    let errorEmail = document.getElementById('errorEmail');

    if (/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(email.value)) { //expresion regular (regex) valida que el formato del mail sea valido
        ocultarError(errorEmail);
    } else {
        mostrarError(errorEmail, 'Ingrese un correo valido');
    }

    //validacion edad
    const edad = document.getElementById('edad');
    const errorEdad = document.getElementById('errorEdad');
    if (edad.value < 18) {
        mostrarError(errorEdad, 'Debes ser mayor de 18 años para registrarte')
        validacionCorrecta = false;
    } else {
        ocultarError(errorEdad);
    }

    //validacion actividad
    const actividad = document.getElementById('actividad');
    const errorActividad = document.getElementById('errorActividad');
    if (actividad.value == '') {
        mostrarError(errorActividad, 'Selecciona una actividad');
        validacionCorrecta = false;
    } else {
        ocultarError(errorActividad);
    }

    //validacion estudio
    const nivelEstudio = document.getElementById('estudio');
    const errorEstudio = document.getElementById('errorEstudio');
    if (nivelEstudio.value == '') {
        mostrarError(errorEstudio, 'Seleccione un nivel de estudio');
        validacionCorrecta = false;
    } else {
        ocultarError(errorEstudio);
    }

    //validar terminos y condiciones
    const terminos = document.getElementById('terminos');
    const errorTerminos = document.getElementById('errorTerminos');
    if (!terminos.checked) {
        mostrarError(errorTerminos, 'Debe acpetar los términos y condiciones')
        validacionCorrecta = false;
    } else {
        ocultarError(errorTerminos);
    }

    return validacionCorrecta; //retorna true si el formulario es valido
}

const mostrarError = (elemento, mensaje) => {
    elemento.textContent = mensaje;
    elemento.style.display = "block";
}
const ocultarError = (elemento) => {
    elemento.textContent = '';
    elemento.style.display = "none";
}