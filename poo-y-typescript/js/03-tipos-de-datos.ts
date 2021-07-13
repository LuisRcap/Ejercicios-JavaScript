type alfanumerico = string | number;

// string
//let cadena: string | number = "LuisRcap";
let cadena: alfanumerico = "LuisRcap";
cadena = 44;

// number
let numero: number = 12;

// booleano
let verdadero_falso: boolean = true;

// Any
let cualquiera: any = 'hola';
cualquiera = 77;

// Array
var lenguajes: Array<string> = ['PHP', "JS", 'CSS'];

let years: any[] = ['DOCE', 13, 14];

console.log(cadena, numero, verdadero_falso, lenguajes, years);