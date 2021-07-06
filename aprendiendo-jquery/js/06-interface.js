$(document).ready(() =>
{
    // Mover elemento por la página
    $('.elemento').draggable();

    // Redimensionar
    $('.elemento').resizable();

    // Seleccioonar elementos
    $('.lista-seleccionable').selectable();
});