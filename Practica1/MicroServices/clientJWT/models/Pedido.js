"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pedido = void 0;
var Pedido = /** @class */ (function () {
    function Pedido(username, menu, estado) {
        this.username = username;
        this.menu = menu;
        this.estado = menu;
        this.fecha = Date.now();
    }
    return Pedido;
}());
exports.Pedido = Pedido;
