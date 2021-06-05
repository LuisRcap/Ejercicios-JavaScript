$(document).ready(function()
{
    // MouseOver MouseOut
    var caja = $("#caja");

    caja.mouseover(function () { 
        $(this).css("background", "red");
    });

    caja.mouseout(function () { 
        $(this).css("background", "green");
    });
});