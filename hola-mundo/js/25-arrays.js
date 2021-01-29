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
/*
for(var i = 0; i < lenguajes.length; i++)
{   
    document.write("<li>" + lenguajes[i] + "</li>");
}

lenguajes.forEach((elemento, indice, arr) => {
    console.log(arr);
    document.write("<li> indice: " + indice + " elemento " + elemento + "</li>");
});*/

for(let lenguaje in lenguajes)
{
    document.write("<li>" + lenguajes[lenguaje] + "</li>"); 
}

document.write("</ul>");


//BUSQUEDAS

var precios = [10, 20, 50, 80, 12];



//var busqueda = lenguajes.findIndex(lenguaje => lenguaje == "JS"); //Busca el valor indicado y lo regresa
var busqueda = precios.some(precio => precio > 70);                 //Busca que se cumpla una condición concreta y devuelve un booleano


console.log(busqueda);