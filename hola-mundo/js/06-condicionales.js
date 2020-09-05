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

/* OPERADORES LÓGICOS
    And (Y): &&
    Or (O): ||
    Negación: !
*/

var year = 2018;
//Negación

if(year != 2016)
{
    console.log("El año no es 2016 realmente es: " + year);
}

//AND
if(year >= 2000 && year <= 2020)
{
    console.log("Estamos en la era actual");
}
else
{
    console.log("Estamos en la era post-moderna");
}

//OR
if(year == 2008 || (year >= 2018 && year ==2028))
{
    console.log("El año acaba en 8");
}
else
{
    console.log("Año no registrado");
}