export default class Person {
    constructor(code, name){
        this.name = name;
        this.code = code;
        this.next = null;
    }

    getName(){
        return this.name;
    }

    getCode(){
        return this.code;
    }
}