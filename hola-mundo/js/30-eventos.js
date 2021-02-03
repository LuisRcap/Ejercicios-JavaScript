'use strict'

//Eventos del ratón

function cambiarColor()
{
    var bg = boton.style.background;
    if(bg == "green")
    boton.style.background = "red";
    else
    boton.style.background = "green";

    boton.style.padding = "10px";
    boton.style.border = "1px solid #ccc";

    return true;
}

var boton = document.querySelector("#boton");

//Click
boton.addEventListener('click', function()              //Cambiando "click" por "dblclick" la función se ejecuta con doble click
{
    cambiarColor();
});

//Mouse over
boton.addEventListener('mouseover', function()
{
    boton.style.background = "yellow";
});

//Mouseout
boton.addEventListener('mouseout', function()
{
    boton.style.background = "#ccc";
});