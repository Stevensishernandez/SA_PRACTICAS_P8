"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListRestaurante = void 0;
var Restaurante_1 = require("./Restaurante");
var ListRestaurante = /** @class */ (function () {
    function ListRestaurante() {
        this.listarestaurantes = [];
        this.insert("restuarante de comida rapida", "b");
        this.insert("restaurante de comida al horno", "bb");
    }
    ListRestaurante.prototype.insert = function (descripcion, nombre) {
        this.listarestaurantes.push(new Restaurante_1.Restaurante(descripcion, nombre));
    };
    return ListRestaurante;
}());
exports.ListRestaurante = ListRestaurante;
