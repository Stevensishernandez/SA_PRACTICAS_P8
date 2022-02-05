export class Menu {
    public resturante : string;
    public descripcion : string;
    public tipo : number;
    public precio: number;

    constructor(restaurante: string, descripcion : string, precio : number, tipo: number) {
        this.resturante = restaurante;
        this.descripcion = descripcion;
        this.precio = precio;
        this.tipo = tipo;
    }
}
