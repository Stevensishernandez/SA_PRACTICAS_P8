export class Menu {
    public descripcion : string;
    public tipo : number;
    public precio: number;

    constructor(descripcion : string, precio : number, tipo: number) {
        this.descripcion = descripcion;
        this.precio = precio;
        this.tipo = tipo;
    }
}

