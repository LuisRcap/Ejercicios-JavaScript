"use strict";
class Coche {
    constructor() {
        this.color = null;
        this.modelo = "";
        this.velocidad = 0;
    }
    getColor() {
        return this.color;
    }
    setColor(color) {
        this.color = color;
    }
    getModelo() {
        return this.modelo;
    }
    getVelocidad() {
        return this.velocidad;
    }
    acelerar() {
        this.velocidad++;
    }
    frenar() {
        this.velocidad--;
    }
}
var coche = new Coche();
var coche2 = new Coche();
var coche3 = new Coche();
coche.setColor("Rojo");
coche.acelerar();
coche.acelerar();
coche.acelerar();
console.log("El color del coche 1 es: " + coche.getColor());
console.log("La velocidad del coche 1 es: " + coche.getVelocidad());
coche.frenar();
console.log("La velocidad después de frenar del coche 1 es: " + coche.getVelocidad());
/*
coche2.setColor("Azul");
coche3.setColor("Verde");
console.log("El color del coche 2 es: " + coche2.getColor());
console.log("El color del coche 3 es: " + coche3.getColor());*/ 
