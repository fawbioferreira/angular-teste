export class Product{

    cod: number = 0;
    name: string = "";
    value: number = 0;

    constructor(
        cod: number, 
        name: string, 
        value: number
    ){
        this.cod = cod;
        this.name = name;
        this.value = value;
    }

}