'use strict'

/*
Mostrar todos los números impares que hay entre dos números introducidos por el usuario
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

while(numero1 < numero2)
{
    numero1++;
    if(numero1%2 != 0)
    {
        console.log("El "+ numero1 +" es impar");
    }
}