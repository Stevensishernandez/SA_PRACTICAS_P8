import {Menu} from "./Menu";

export class ListUser{
    public listmenus : Array<Menu>

    constructor() {
        this.listmenus= [];
        this.insert("hamburguesa y papas", 50, 1);
        this.insert("Ensalada y arroz", 20, 2);
        this.insert("Pescado y Conchas", 30, 3);
        this.insert("Ceviche de maricos", 40, 4);
        this.insert("Tacos y Burritos", 50, 5);
    }

    insert(descripcion: string, precio: number , tipo: number){
        this.listmenus.push(new Menu(descripcion, precio, tipo));
    }
}
