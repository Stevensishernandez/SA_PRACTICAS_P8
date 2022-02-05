export class User {
    public username : string;
    public email : string;
    public pass : string;
    public tipo : number;

    constructor(username: string, email: string, pass: string, tipo: number) {
        this.username = username;
        this.email = email;
        this.pass = pass;
        this.tipo = tipo;
    }
}

