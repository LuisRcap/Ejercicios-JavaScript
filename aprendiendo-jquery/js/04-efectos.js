$(document).ready(() =>
{
    
    $("#mostrar").hide();

    $("#mostrar").click(function()              //Aparte de fadeTo están las funciones fadeIn, fadeOut, toggle, fadeToggle, slideToggle
    {                                           //slideUp, slideDown, show y hide
        $(this).hide();
        $("#ocultar").show()
        $("#caja").fadeTo('slow', 1);
    });

    $("#ocultar").click(function()
    {
        $(this).hide();
        $("#mostrar").show()
        $("#caja").fadeTo('slow', 0);
    });


    $("#todoenuno").click(function()
    {
        $("#caja").slideToggle('fast');
    });
    
});