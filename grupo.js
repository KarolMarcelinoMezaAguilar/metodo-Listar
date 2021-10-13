export default class Group {
    constructor(){
        this.start = null;
    }

    add(New){
        if(this.start == null){
            this.start = New;
        } else {
            let temp = this.start;

            while(temp.next != null){
                temp = temp.next;
            }
            temp.next = New;
        }
    }

    toList(){
        let temp = this.start;

        if(this.start == null){
            console.log("No hay personas registradas");
        } else {
            do{
            console.log(`Código: ${temp.getCode()} Nombre: ${temp.getName()}`);

            temp = temp.next;
            } while(temp != null);
        }
    }
}