'use strict'

/*
Hacer un programa que muestre todos los números entre dos números introducidos por el usuario
*/
var numero1 = 0;
var numero2 = 0;
do
{
    numero1 = parseInt(prompt("Introduce el primer número", 0));
    if(isNaN(numero1))
    {
        alert("Introduzca un valor numerico");
    }
}while(isNaN(numero1))

do
{
    numero2 = parseInt(prompt("Introduce el segundo número", 0));
    if(isNaN(numero2))
    {
        alert("Introduzca un valor numerico");
    }
    else if(numero2 < numero1)
    {
        alert("El segundo número debe ser mayor que el primero");
    }
}while(isNaN(numero2) || numero2 < numero1)

document.write("<h1>De "+ numero1 + " a "+ numero2 +"están estos números:</h1>")

for(var i = numero1; i <= numero2; i++)
{
    document.write(i+"<br/>")
}