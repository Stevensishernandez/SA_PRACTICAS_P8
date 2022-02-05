"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListUser = void 0;
var Menu_1 = require("./Menu");
var ListUser = /** @class */ (function () {
    function ListUser() {
        this.listmenus = [];
        this.insert("hamburguesa y papas", 50, 1);
        this.insert("Ensalada y arroz", 20, 2);
        this.insert("Pescado y Conchas", 30, 3);
        this.insert("Ceviche de maricos", 40, 4);
        this.insert("Tacos y Burritos", 50, 5);
    }
    ListUser.prototype.insert = function (descripcion, precio, tipo) {
        this.listmenus.push(new Menu_1.Menu(descripcion, precio, tipo));
    };
    return ListUser;
}());
exports.ListUser = ListUser;
