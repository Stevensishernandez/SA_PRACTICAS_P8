import {User} from "./User";

export class ListUser{
    public listusuarios : Array<User>

    constructor() {
        this.listusuarios = [];
        this.insert("a","a","a", 1);
        this.insert("aa","aa","aa", 1);
        this.insert("b","b","b", 2);
        this.insert("bb","bb","bb", 2);
        this.insert("c","c","c", 3);
        this.insert("cc","cc","cc", 3);
    }

    insert(username: string, email: string, pass: string, tipo: number){
        this.listusuarios.push(new User(username,email,pass, tipo));
    }

    getList() : Array<User>{
        return this.listusuarios;
    }

    getUser(username : string, pass : string) : User{
        for( let x of this.listusuarios){
            if(x.username == username && x.pass == pass){
                console.log("Si se encontro el usuario y es de tipo" + x.tipo.toString());
                return x;
            }
        }
        console.log("No se encontro el usuario");
        return null;
    }
}
