'use strict'

// DOCUMENT OBJECT MODEL

function cambiaColor(color)
{
    caja.style.background = color;
}


//var caja = document.getElementById("micaja");
var caja = document.querySelector("#micaja");

caja.innerHTML = "¡TEXTO EN LA CAJA DESDE JS!";

caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";

caja.className = "hola hola2";

console.log(caja);