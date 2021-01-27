'use strict'

// Transformación de textos
var numero = 444;
var texto1 = "Binvenido al curso de JavaScript de Víctor Robles";
var texto2 = "Es muy buen curso";

var dato = numero.toString();
dato = texto1.toLowerCase();
dato = texto2.toUpperCase();
//console.log(dato);

// Calcular longitud

var nombre = "Luis Rico";
    nombre = ["hoa", "hola"];

//console.log(nombre.length);

// Concatenar = Unir textos

//var textoTotal = texto1 + " " + texto2;

var textoTotal = texto1.concat(" "+ texto2);

console.log(textoTotal);