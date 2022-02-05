import {Pedido} from "./Pedido";

export class ListPedidos{
    public listpedidos : Array<Pedido>

    constructor() {
        this.listpedidos = [];
    }

    insert( username : string, menu : number, estado : number){
        this.listpedidos.push(new Pedido(username, menu, estado));
        }

    getPedido(username : string): Array<Pedido>{
        var temp = [];
        for( var x of this.listpedidos){
            if(x.username == username ){
                temp.push(x);
            }
        }
        return temp;
    }

}
