'use strict'

//Condicional if

var edad = 19;
var nombre = "David Suarez";



/* OPERADORES RELACIONALES
    Mayor: >
    Menor: <
    Mayor o igual: >=
    Menor o igual: <=
    Igual: ==
    Diferente: !=
*/

//Si pasa esto
if(edad >= 18)
{
    //ejecuta esto
    //El usuario es mayor de edad
    console.log(nombre + " tiene " + edad + " años, es mayor de edad.");

    if(edad <= 33)
    {
        console.log("Todavía eres millenial");
    }
    else if(edad >= 70)
    {
        console.log("Eres anciano");
    }
    else
    {
        console.log("Ya no eres millenial");
    }
}
else
{
    //El usuario es menor de edad
    console.log(nombre + " tiene " + edad + " años, es menor de edad.");
}