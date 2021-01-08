'use strict'

//Funciones
//Una función es una agrupación reutilizable de un conjunto de instrucciones

function Calculadora(numero1, numero2)
{
    //Conjunto de instrucciones a ejecutar
    console.log("Suma: " + (numero1 + numero2));
    console.log("Resta: " + (numero1 - numero2));
    console.log("Multiplicación: "+ (numero1 * numero2));
    console.log("División: " + (numero1 / numero2));
    console.log("*************************************");
    return "Hola, soy la calculadora";
}

// Invocar o llamar a la fucnión

for(var i = 1; i <= 10; i++)
{
    console.log(i);
    Calculadora(i,8)
}