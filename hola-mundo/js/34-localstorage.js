'use strict'

// LocalStorage

// Comprobar disponibilidad de localstorage
if(typeof(Storage) != 'undefined')
{
    console.log("Localstorage disponible");
}
else
{
    console.log("Incompatible con LocalStorage");
}

// Guardar datos
localStorage.setItem("titulo", "Curso de Symfony");

//Recuperar elemento
document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo");

// Guardar objetos JSON
var usuario =
{
    nombre: "Luis Rico",
    email: "luisrcap@gmail.com",
    web: "victorrobles.es"
};

localStorage.setItem("usuario", JSON.stringify(usuario));

//Recuperar objeto de localstorage
var userjs = JSON.parse(localStorage.getItem("usuario"));

console.log(userjs);

document.querySelector('#datos').append(" " + userjs.web + " - " + userjs.nombre);

//localStorage.removeItem("usuario");                   //Limpia algo específico del localstorage
localStorage.clear();                                   //Vacía todo el localstorage