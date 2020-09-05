'use strict'

//WHILE
var year = 2018;

while(year != 1990)
{
    console.log("Estamos en el año: " + year);
    
    if(year == 2000)
    {
        break;
    }
    
    year--;
}

//DO WHILE
var years = 30;

do
{
    alert("Solo cuando sea diferente a 20");
    years--;
}while(years > 25)