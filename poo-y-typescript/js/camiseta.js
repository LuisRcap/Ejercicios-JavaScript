// Clase (Molde del objeto)
var Camiseta = /** @class */ (function () {
    function Camiseta() {
    }
    // Métodos (Funciones o acciones del objeto)
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    return Camiseta;
}());
var camiseta = new Camiseta();
camiseta.setColor("Rojo");
//camiseta.getColor();
var playera = new Camiseta();
playera.setColor("Azul");
console.log(camiseta.getColor(), playera);
