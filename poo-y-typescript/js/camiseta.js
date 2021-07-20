// Clase (Molde del objeto)
var Camiseta = /** @class */ (function () {
    // Métodos (Funciones o acciones del objeto)
    function Camiseta(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    return Camiseta;
}());
var camiseta = new Camiseta("rojo", "Manga larga", "Nike", "L", 14);
camiseta.setColor("Rojo");
//camiseta.getColor();
console.log(camiseta);
