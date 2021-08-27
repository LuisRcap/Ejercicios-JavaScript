"use strict";
class Coche {
    constructor() {
        this.color = null;
        this.modelo = null;
        this.velocidad = null;
    }
    getColor() {
        return this.color;
    }
    setColor(color) {
        this.color = color;
    }
}
var coche = new Coche();
var coche2 = new Coche();
var coche3 = new Coche();
coche.setColor("Rojo");
coche2.setColor("Azul");
coche3.setColor("Verde");
console.log("El color del coche 1 es: " + coche.getColor());
console.log("El color del coche 2 es: " + coche2.getColor());
console.log("El color del coche 3 es: " + coche3.getColor());
