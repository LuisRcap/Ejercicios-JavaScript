'use strict'

$(document).ready(() =>
{
    //SELECTOR DE ID
    $("#rojo").css("background", "red")
                .css("color", "white");
    $("#amarillo").css("background", "yellow")
                .css("color", "green");
    $("#verde").css("background", "green")
                .css("color", "white");

    //SELECTORES DE CLASES
    var miClase = $(".zebra").css("padding", "5px");

    $(".sin_borde").click(function()
    { 
        console.log("click dato");
        $(this).addClass("zebra");        
    });

    //Selectores de etiqueta
    var parrafos = $("p").css("cursor", "pointer");
    parrafos.click(function()
    {
        var that = $(this);
        if(!that.hasClass("grande"))
        {
            that.addClass("grande");
        }
        else
        {
            that.removeClass("grande");
        }
        
        
    });
});