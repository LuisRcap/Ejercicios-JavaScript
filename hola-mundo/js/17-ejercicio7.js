'use strict'

/*
Tabla de multiplicar de un número introducido en pantalla
*/

var numero = parseInt(prompt('¿De qué número quieres la tabla?'));

document.write("<h1>Tabla del " + numero + "</h1>")

for(var i = 1; i <= 10; i++)
{
    document.write(i + "x"+ numero + " = " + i*numero + "<br/>");
}

//Todas las tablas de multiplicar

for(var j = 1; j <= 15; j++)
{
    document.write("<h1>Tabla del " + j + "</h1>")
    for(var i = 1; i <= 10; i++)
    {
        document.write(i + "x"+ j + " = " + i*j + "<br/>");
    }
}