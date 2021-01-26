'use strict'

//Funciones
//Una función es una agrupación reutilizable de un conjunto de instrucciones

function Calculadora(numero1, numero2, mostrar = false)
{
    //Conjunto de instrucciones a ejecutar
    if(mostrar == false)
    {
        console.log("Suma: " + (numero1 + numero2));
        console.log("Resta: " + (numero1 - numero2));
        console.log("Multiplicación: "+ (numero1 * numero2));
        console.log("División: " + (numero1 / numero2));
        console.log(mostrar);
        console.log("*************************************");
    }
    else
    {
        document.write("Suma: " + (numero1 + numero2) + "<br/>");
        document.write("Resta: " + (numero1 - numero2)+ "<br/>");
        document.write("Multiplicación: "+ (numero1 * numero2)+ "<br/>");
        document.write("División: " + (numero1 / numero2)+ "<br/>");
        document.write(mostrar + "</br>");
        document.write("*************************************");
    }

    //return "Hola, soy la calculadora";
    
}

// Invocar o llamar a la fucnión

Calculadora(1, 4);

Calculadora(2, 5, true);

/*
for(var i = 1; i <= 10; i++)
{
    console.log(i);
    Calculadora(i,8)
}
*/

