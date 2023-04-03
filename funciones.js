function validarNombre(nombre){
    var nom = "Nombre ";
    if(nombre.length > 0)
    return nom+"está bien";
    else
    return nom+"está vacio";
}

function validarEmail(email){
    var ema = "Correo ";
    if(email.length > 0)
    return ema+"está bien";
    else
    return ema+"está vacio";
}

function validarMensaje(mens){
    var men = "Mensaje ";
    if(mens.length > 0)
    return men+"está bien";
    else
    return men+"está vacio";
}

function verificarContacto(){
    var nombre = document.getElementById("nomb").value;
    var email = document.getElementById("corr").value;
    var mensaje = document.getElementById ("mens").value;
    var output = validarNombre(nombre)+"\n"+validarEmail(email)+"\n"+validarMensaje(mensaje);
    alert(output);
}
