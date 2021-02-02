'use strict'

// DOCUMENT OBJECT MODEL

function cambiaColor(color)
{
    caja.style.background = color;
}

//Conseguir elementos con un id concreto

//var caja = document.getElementById("micaja");
var caja = document.querySelector("#micaja");

caja.innerHTML = "¡TEXTO EN LA CAJA DESDE JS!";

caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "hola hola2";

//Conseguir elementos por su etiqueta
var todosLosDivs = document.getElementsByTagName('div');

var seccion = document.querySelector("#miseccion");
var hr = document.createElement("hr");


for(var valor in todosLosDivs)
{
    if(typeof todosLosDivs[valor].textContent == 'string')
    {
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(todosLosDivs[valor].textContent);
        parrafo.append(texto);   
        seccion.append(parrafo);
    }
}

seccion.append(hr);


//Conseguir elementos por su clase
var divsRojos = document.getElementsByClassName('rojo');
var divsAmarillos = document.getElementsByClassName('amarillo');

divsAmarillos[0].style.background = "yellow";

for(var div in divsRojos)
{
    if(divsRojos[div].className == "rojo")
    {
        divsRojos[div].style.background = "red";
    }
}

//Query selector

var id = document.querySelector(".rojo");
console.log(id);

var claseRojo = document.querySelector("div.rojo");
console.log(claseRojo);

var etiqueta = document.querySelectorAll("div");
console.log(etiqueta);
