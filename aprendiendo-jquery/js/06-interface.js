$(document).ready(() =>
{
    // Mover elemento por la página
    $('.elemento').draggable();

    // Redimensionar
    $('.elemento').resizable();

    // Seleccioonar y ordenar elementos
    //$('.lista-seleccionable').selectable();
    $('.lista-seleccionable').sortable(
    {
        update: function(event, ui) {
            console.log('Ha cambiado la lista');
        }
    });

    // Drop
    $('#elemento-movido').draggable();
    $('#area').droppable({
        drop: function()
        {
            console.log("Has soltado algo dentro del área");
        }
    });

    // Efectos
    $('#mostrar').click(function()
    {
        //$('.caja-efectos').fadeToggle();            //Efecto de desvanecido
        //$('.caja-efectos').toggle('explode');       // Efecto de separación en varios pedazos
        //$('.caja-efectos').toggle('blind');         // Efecto de cortina
        //$('.caja-efectos').toggle('slide');         // Efecto de deslizamiento
        //$('.caja-efectos').toggle('drop');          // Efecto de deslizamiento con degradado
        //$('.caja-efectos').toggle('fold');          // Efecto de desdoblamiento
        //$('.caja-efectos').toggle('puff');          // Efecto de aparecer y desaparecer desvanecido
        //$('.caja-efectos').toggle('scale');         // Efecto de agrandar
        //$('.caja-efectos').toggle('shake', "slow");         // Efecto de sacudir y aparecer con parametro de velocidad
        $('.caja-efectos').toggle('shake', 4000);       // Efecto con velocidad en milisegundos
    });

    // Tooltip
    $(document).tooltip();

});