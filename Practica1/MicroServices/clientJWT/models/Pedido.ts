import {Menu} from "./Menu";

export class Pedido {
    public username : string;
    public menu : number;
    public estado : number;
    public fecha : number;

    constructor(username: string, menu: number,  estado: number) {
        this.username = username;
        this.menu = menu;
        this.estado = menu;
        this.fecha = Date.now();
    }



}
