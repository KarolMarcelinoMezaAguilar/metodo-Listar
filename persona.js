export default class Persona {
    constructor(code, name){
        this.name = name;
        this.code = code;
        this.next = null;
    }

    getName(){
        return this.nombre;
    }

    getCode(){
        return this.codigo;
    }
}