'use strict'

// Transformación de textos
var numero = 444;
var texto1 = "Bienvenido al curso de JavaScript curso de Víctor Robles";
var texto2 = "Es muy buen curso";


//var busqueda = texto1.lastIndexOf("curso");       //Localiza la última coincidencia
//var busqueda = texto1.indexOf("curso");           //Localiza en el texto
//var busqueda = texto1.search("curso");            //Localiza en el texto
//var busqueda = texto1.match("curso");             //Devuelve un arreglo con varios detalles
//var busqueda = texto1.match(/curso/g);            //Localiza cúantas veces encontró la coincidencia
//var busqueda = texto1.substr(14, 5);              //Saca una subcadena
//var busqueda = texto1.charAt(44);                 //Localiza un caracter en el texto
//var busqueda = texto1.startsWith("Víctor");       //Busca al inicio del texto y devuelve un bool
//var busqueda = texto1.endsWith("Víctor Robles");  //Busca al final del texto y devuelve un bool
var busqueda = texto1.includes("JavaScript");       //Indica si el texto está o no en el texto de busqueda

console.log(busqueda);

