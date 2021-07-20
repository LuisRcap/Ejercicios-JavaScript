"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var camiseta_1 = require("./camiseta");
var Main = /** @class */ (function () {
    function Main() {
        console.log("Aplicación JS cargada");
    }
    Main.prototype.getCamiseta = function () {
        return new camiseta_1.Camiseta("Rojo", "Manga larga", "Nike", "L", 14);
    };
    return Main;
}());
var main = new Main();
