"use strict";
class Programa {
    constructor() {
        this.nombre = "";
        this.version = 0;
    }
    getNombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    getVersion() {
        return this.version;
    }
    setVersion(version) {
        this.version = version;
    }
}
class EditorVideo extends Programa {
    constructor() {
        super();
        this.timeLine = 0;
    }
    setTimeLine(timeLine) {
        this.timeLine = timeLine;
    }
    getTimeLine() {
        return this.timeLine;
    }
    getAllData() {
        return this.getNombre() + " - " + this.getVersion() + " - " + this.getTimeLine();
    }
}
var editor = new EditorVideo();
editor.setNombre("Camtasia Studio");
editor.setVersion(8);
editor.setTimeLine(4000);
console.log(editor.getAllData());
// Lógica del formulario
var programas = [];
function guardar() {
    var nombre = document.getElementById("nombre").value.toString();
    var programa = new Programa();
    programa.setNombre(nombre);
    programa.setVersion(1);
    programas.push(programa);
    var list = "";
    for (let i = 0; i < programas.length; i++) {
        list = list + "<li>" + programas[i].getNombre() + "</li>";
    }
    var listado = document.getElementById("listado");
    listado.innerHTML = list;
    document.getElementById("nombre").value = "";
}
