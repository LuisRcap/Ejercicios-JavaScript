'use strict'

var categorias = ['Accion', 'Terror', 'Comedia'];
var peliculas = ['La verdad duele', 'La vida es bella', 'Gran Torino'];

var cine = [categorias, peliculas];

//console.log(cine[0][1]);
//console.log(cine[1][2]);

/*var elemento = prompt("Introduce tu película:");

while(elemento != "ACABAR")
{
    peliculas.push(elemento);
    elemento = prompt("Introduce tu película:");
}

//peliculas.pop();                                    //Quita un elemento de un array
//peliculas[0] = undefined;                           //Pone el elemento como indefinido
*/


var indice = peliculas.indexOf('Gran Torino'); 

if(indice > -1)
{
    peliculas.splice(indice, 1);                    //Borra elementos de un arreglo y de ser necesario inserta otros nuevos además de regresar los borrados
}

var peliculas_string = peliculas.join();            //Convierte el array en un string separado por comas

console.log(peliculas_string);