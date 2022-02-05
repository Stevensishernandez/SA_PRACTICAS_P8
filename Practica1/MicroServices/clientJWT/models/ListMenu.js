"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListMenu = void 0;
var Menu_1 = require("./Menu");
var ListMenu = /** @class */ (function () {
    function ListMenu() {
        this.listmenus = [];
        this.insert("b", "hamburguesa y papas", 50, 1);
        this.insert("b", "Ensalada y arroz", 20, 2);
        this.insert("b", "Tacos y Burritos", 50, 3);
        this.insert("bb", "Ceviche de maricos", 40, 4);
        this.insert("bb", "Pescado y Conchas", 30, 3);
    }
    ListMenu.prototype.insert = function (nombre, descripcion, precio, tipo) {
        this.listmenus.push(new Menu_1.Menu(nombre, descripcion, precio, tipo));
    };
    ListMenu.prototype.getMenu = function (tipo) {
        for (var _i = 0, _a = this.listmenus; _i < _a.length; _i++) {
            var x = _a[_i];
            if (x.tipo == tipo) {
                return x;
            }
        }
        return null;
    };
    return ListMenu;
}());
exports.ListMenu = ListMenu;
