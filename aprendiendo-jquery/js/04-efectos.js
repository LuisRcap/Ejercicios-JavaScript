$(document).ready(() =>
{
    var caja = $("#caja");
    
    $("#mostrar").hide();

    $("#mostrar").click(function()              //Aparte de fadeTo están las funciones fadeIn, fadeOut, toggle, fadeToggle, slideToggle
    {                                           //slideUp, slideDown, show y hide
        $(this).hide();
        $("#ocultar").show()
        caja.fadeTo('slow', 1);
    });

    $("#ocultar").click(function()
    {
        $(this).hide();
        $("#mostrar").show()
        caja.fadeTo('slow', 0);
    });


    $("#todoenuno").click(function()
    {
        caja.slideToggle('fast');
    });
    

    $("#animar").click(function()
    {
        caja.animate({
                        marginLeft: '500px',
                        fontSize: '40px',
                        height: '110px'
                     }, 'slow')
            .animate(
            {
                borderRadius: '900px',
                marginTop: '80px'
            }, 'slow')
            .animate(
            {
                borderRadius: '0px',
                marginLeft: '0px'
            })
            .animate(
            {
                borderRadius: '100px',
                marginTop: '0px'
            })
            .animate(
            {
                marginLeft: '500px',
                fontSize: '40px',
                height: '110px'
            }, 'slow');
    });

});