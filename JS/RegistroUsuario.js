
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{1,30}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    imagen: /(?:)/,
    contraseña: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&¿¡#/()=+-<>~])([A-Za-z\d$@$!%*?&¿¡#/()=+-<>~]|[^ ]){8,50}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

const campos={
    nombre: false,
    apellido: false,
    Fecha_Nacimiento: false,
    correo: false,
    Imagen_perfil: false,
    nombre_usuario: false,
    contraseña: false,
}

const validarFormulario = (e) => {
  switch (e.target.name) {
      case "Nombres":
          validarCampo(expresiones.nombre, e.target,'nombre');
          break;
      case "Apellidos":
          validarCampo(expresiones.nombre, e.target,'apellido');
          break;
      case "Fecha de Nacimiento":
          var fechaactual = new Date(Date.now());
          var fechaform = e.target.value;
        //   console.log(fechaform);
        //   console.log(fechaactual);
          if (Date.parse(fechaactual) < Date.parse(fechaform)){
              document.querySelector(`#grupo__Fecha_Nacimiento p`).classList.add('formulario__input-error-activo');
              campos['Fecha_Nacimiento']= false;
          }
          else{
              document.querySelector(`#grupo__Fecha_Nacimiento p`).classList.remove('formulario__input-error-activo');
              campos['Fecha_Nacimiento']= true;
          }
          break;
      case "Correo Electrónico":
          validarCampo(expresiones.correo, e.target,'correo');
          break;
      case "Imagen de Perfil":
        var filePath = e.target.value;
        var allowedExtensions = /(.jpg|.jpeg|.png)$/i;
        if(!allowedExtensions.exec(filePath)){
            document.querySelector(`#grupo__Imagen_perfil p`).classList.add('formulario__input-error-activo');
              campos['Imagen_perfil']= false;
        }else{
            document.querySelector(`#grupo__Imagen_perfil p`).classList.remove('formulario__input-error-activo');
              campos['Imagen_perfil']= true;
        }

          //validarCampo(expresiones.imagen, e.target,'Imagen_perfil');
          break;
      case "Nombre de Usuario":
          //VERIFICAR QUE SEA UNICO
          validarCampo(expresiones.usuario, e.target,'nombre_usuario');
          break;
      case "Contraseña":
          validarCampo(expresiones.contraseña, e.target,'contraseña');
          validarContraseña();
          break;
      case "Confirmar Contraseña":
          validarContraseña();
          break;
  }
}

const validarContraseña = () => {
    const inputContraseña1 = document.getElementById('Contraseña');
    const inputContraseña2 = document.getElementById('Confirmar Contraseña');
    if(inputContraseña1.value !== inputContraseña2.value){
        document.querySelector(`#grupo__confirmar_contraseña p`).classList.add('formulario__input-error-activo');
        campos['contraseña']= false;
    }
    else{
        document.querySelector(`#grupo__confirmar_contraseña p`).classList.remove('formulario__input-error-activo');
        campos['contraseña']= true;
    }

}

const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        document.querySelector(`#grupo__${campo} p`).classList.remove('formulario__input-error-activo');
        campos[campo]= true;
    } else {
        document.querySelector(`#grupo__${campo} p`).classList.add('formulario__input-error-activo');
        campos[campo]= false;
    }  
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
    input.addEventListener('change', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    if(campos.nombre && campos.apellido && campos.Fecha_Nacimiento 
        && campos.Imagen_perfil && campos.correo && campos.nombre_usuario 
        && campos.contraseña){
        //LO QUE QUIERAS QUE HAGA SI LOS DATOS FUNCIONAN
        //document.querySelector(`#formulario__mensaje p`).classList.add('formulario__input-error-activo');
        document.querySelector(`#formulario__mensaje-exito`).classList.add('formulario__input-error-activo');
        console.log("si jalo");
        //formulario.reset();
    }
    else{
        //document.querySelector(`#formulario__mensaje-exito`).classList.add('formulario__input-error-activo');
        document.querySelector(`#formulario__mensaje p`).classList.add('formulario__mensaje-activo');
        console.log("no jalo");
    }
});