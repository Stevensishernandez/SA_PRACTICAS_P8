import {Restaurante} from "./Restaurante";

export class ListRestaurante{
    public listarestaurantes : Array<Restaurante>

    constructor() {
        this.listarestaurantes = [];
        this.insert("restuarante de comida rapida", "b");
        this.insert("restaurante de comida al horno", "bb");
    }

    insert(descripcion: string, nombre : string ){
        this.listarestaurantes.push(new Restaurante(descripcion, nombre));
    }
}
