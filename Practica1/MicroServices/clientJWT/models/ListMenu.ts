import {Menu} from "./Menu";

export class ListMenu{
    public listmenus : Array<Menu>

    constructor() {
        this.listmenus= [];
        this.insert("b", "hamburguesa y papas", 50, 1);
        this.insert("b","Ensalada y arroz", 20, 2);
        this.insert("b","Tacos y Burritos", 50, 3);
        this.insert("bb","Ceviche de maricos", 40, 4);
        this.insert("bb","Pescado y Conchas", 30, 3);
    }

    insert(nombre: string, descripcion: string, precio: number , tipo: number){
        this.listmenus.push(new Menu(nombre, descripcion, precio, tipo));
    }

    getMenu(tipo : number): Menu{
        for( var x of this.listmenus){
            if(x.tipo == tipo ){
                return x;
            }
        }
        return null;
    }
}
