'use strict'

// Arrays, Arreglos, Matrices

var nombre = "Luis Rico";

var nombres = ["Luis Rico", "Juan Lopez", "Manolo García", "José Martín", 52, true];

var lenguajes = new Array("PHP", "JS", "GO", "Java", "C#", "C", "Pascal");

/*
var elemento = parseInt(prompt("¿Qué elemento del array quieres?", 0));
if(elemento >= nombres.length)
{
    alert("Introduce el número correcto menor a " + nombres.length);
}
else
{
    alert("El usuario seleccionado es: " + nombres[elemento]);
}*/

document.write("<h1>Lenguajes de programación del 2018</h1>");
document.write("<ul>");
for(var i = 0; i < lenguajes.length; i++)
{   
    document.write("<li>" + lenguajes[i] + "</li>");
}

document.write("</ul>");