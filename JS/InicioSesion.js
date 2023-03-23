
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const campos={
    nombre_usuario: false,
    contraseña: false,
}

const validarFormulario = (e) => {
    console.log(e.target.name);
    // switch (e.target.name) {
    //     case "Nombre de Usuario":
    //         //VALIDAR QUE SE HAYA LLENADO
    //         break;
    //     case "Contraseña":
    //         //VALIDAR QUE SE HAYA LLENADO
    //         break;
    // }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    if(campos.nombre_usuario && campos.contraseña){
       //VALIDAR CREDENCIALES

        formulario.reset();
    }

});