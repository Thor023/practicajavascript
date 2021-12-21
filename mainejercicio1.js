var miBtn = document.getElementById("botton");
let form = document.getElementById("formulario");
form.addEventListener("submit", login);
function login(e){
    e.preventDefault()
miBtn.addEventListener('click',function(){
var texto = document.querySelector("#nombre");
if (texto.value !== "") {
    document.querySelector(".resultado").innerHTML = "Mensaje enviado con Exito"
    texto.value;
    document.querySelector(".errorNombre").innerHTML = "";
}else {
    document.querySelector(".resultado").innerHTML = "";
    document.querySelector(".errorNombre").innerHTML = "El nombre es requerido";
};
var texto = document.querySelector("#asunto");
if (texto.value !== "") {
    document.querySelector(".resultado").innerHTML = "Mensaje enviado con Exito"
    texto.value;
    document.querySelector(".errorAsunto").innerHTML = "";
}else {
    document.querySelector(".resultado").innerHTML = "";
    document.querySelector(".errorAsunto").innerHTML = "El asunto es requerido";
};
var texto = document.querySelector("#mensaje");
if (texto.value !== "") {
    document.querySelector(".resultado").innerHTML = "Mensaje enviado con Exito"
    texto.value;
    document.querySelector(".errorMensaje").innerHTML = "";
}else {
    document.querySelector(".resultado").innerHTML = "";
    document.querySelector(".errorMensaje").innerHTML = "El mensaje es requerido";
};

});
}