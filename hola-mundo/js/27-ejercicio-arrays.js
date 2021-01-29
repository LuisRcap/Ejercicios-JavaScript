'use strict'

/*
1. Pida 6 numeros y los meta en un array
2. Tiene que mostrar el array entero (todos sus elementos) en el cuerpo de la página y en la consola
3. Ordenarlo y mostrarlo
4. Invertir su orden y mostrarlo
5. Mostrar cuántos elementos tiene el array
6. Búsqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice
(Se valorará el uso de funciones)
*/

function mostrarArray(elementos, textoCustom = "")
{
    document.write("<h1>Contenido del array " + textoCustom + "</h1>");
    document.write("<ul>");
    elementos.forEach((elemento, indice) => 
    {
        document.write("<li><strong>" + elemento + "</strong></li>");
    }); 
    document.write("</ul>");
}


//Pedir 6 números

//var numeros = new Array(6);
var numeros = [];

for(var i = 0; i < 6; i++)
{
    //numeros[i] = parseInt(prompt("Digite un número para la posición " + i));
    numeros.push(parseInt(prompt("Digite un número para la posición " + i)));
}

//Mostrar en el cuerpo de la página
mostrarArray(numeros);

//Mostrar el array por la consola
console.log(numeros);

//Ordenar y mostrar
numeros.sort(function(a,b){return a-b});
console.log(numeros);
mostrarArray(numeros, "ordenado");

//Invertir y mostrar
numeros.reverse();
mostrarArray(numeros, "revertido");

//Contar elementos
document.write("<h1>El array tiene " + numeros.length + " elementos</h1>");

//Busqueda
var busqueda = parseInt(prompt("Busca un número", 0));
var posicion = numeros.findIndex(numero => numero == busqueda);

if(posicion && posicion != -1)
{
    document.write("<hr/><h1>ENCONTRADO</h1>");
    document.write("<h1>Posición de la búsqueda " + posicion + "</h1><hr/>");
}
else
{
    document.write("<hr/><h1>NO ENCONTRADO</h1><hr/>");
}

