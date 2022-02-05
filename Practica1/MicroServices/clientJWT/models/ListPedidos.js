"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListPedidos = void 0;
var Pedido_1 = require("./Pedido");
var ListPedidos = /** @class */ (function () {
    function ListPedidos() {
        this.listpedidos = [];
    }
    ListPedidos.prototype.insert = function (username, menu, estado) {
        this.listpedidos.push(new Pedido_1.Pedido(username, menu, estado));
    };
    ListPedidos.prototype.getPedido = function (username) {
        var temp = [];
        for (var _i = 0, _a = this.listpedidos; _i < _a.length; _i++) {
            var x = _a[_i];
            if (x.username == username) {
                temp.push(x);
            }
        }
        return temp;
    };
    return ListPedidos;
}());
exports.ListPedidos = ListPedidos;
