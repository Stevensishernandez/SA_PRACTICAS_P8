"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListUser = void 0;
var User_1 = require("./User");
var ListUser = /** @class */ (function () {
    function ListUser() {
        this.listusuarios = [];
        this.insert("a", "a", "a", 1);
        this.insert("aa", "aa", "aa", 1);
        this.insert("b", "b", "b", 2);
        this.insert("bb", "bb", "bb", 2);
        this.insert("c", "c", "c", 3);
        this.insert("cc", "cc", "cc", 3);
    }
    ListUser.prototype.insert = function (username, email, pass, tipo) {
        this.listusuarios.push(new User_1.User(username, email, pass, tipo));
    };
    ListUser.prototype.getList = function () {
        return this.listusuarios;
    };
    ListUser.prototype.getUser = function (username, pass) {
        for (var _i = 0, _a = this.listusuarios; _i < _a.length; _i++) {
            var x = _a[_i];
            if (x.username == username && x.pass == pass) {
                console.log("Si se encontro el usuario y es de tipo" + x.tipo.toString());
                return x;
            }
        }
        console.log("No se encontro el usuario");
        return null;
    };
    return ListUser;
}());
exports.ListUser = ListUser;
