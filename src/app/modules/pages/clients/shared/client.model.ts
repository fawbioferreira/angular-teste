export class Client{

    cod: number = 0;
    name: string = "";
    cpf: string = "";
    cep: string = "";
    address: string = "";
    number: number = 0;
    district: string = "";
    complement: string = "";
    city: string = "";
    email: string = "";
    birthdayDate: string = ""


    constructor(
        cod: number, 
        name: string, 
        cpf: string, 
        cep: string, 
        address: string, 
        number: number,
        district: string,
        complement: string,
        city: string,
        email: string,
        birthdayDate: string
    ){
        this.cod = cod;
        this.name = name;
        this.cpf = cpf;
        this.cep = cep;
        this.address = address;
        this.number = number;
        this.district = district;
        this.complement = complement;
        this.city = city;
        this.email = email;
        this.birthdayDate = birthdayDate;
    }

}