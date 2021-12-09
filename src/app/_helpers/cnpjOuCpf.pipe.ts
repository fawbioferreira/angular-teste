import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { cpf, cnpj } from 'cpf-cnpj-validator'; 

@Pipe({
  name: 'cnpjOuCpf'
})
@Injectable({
  providedIn: 'root'
})
export class CnpjOuCpfPipe implements PipeTransform {

  constructor() { }
  transform(palavra:any) {
    let palavraLimpa = palavra.replace(/\D/g, '')
    if(palavraLimpa.length <= 11){
      palavraLimpa = palavraLimpa.replace(/(\d{3})(\d)/, '$1.$2'); //Coloca um ponto entre o terceiro e o quarto dígitos
      palavraLimpa = palavraLimpa.replace(/(\d{3})(\d)/, '$1.$2'); //Coloca um ponto entre o terceiro e o quarto dígitos
      //de novo (para o segundo bloco de números)
      palavraLimpa = palavraLimpa.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); //Coloca um hífen entre o terceiro e o quarto dígitos
    } else{
      palavraLimpa = palavraLimpa.replace(/^(\d{2})(\d)/, '$1.$2'); //Coloca ponto entre o segundo e o terceiro dígitos
      palavraLimpa = palavraLimpa.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3'); //Coloca ponto entre o quinto e o sexto dígitos
      palavraLimpa = palavraLimpa.replace(/\.(\d{3})(\d)/, '.$1/$2'); //Coloca uma barra entre o oitavo e o nono dígitos
      palavraLimpa = palavraLimpa.replace(/(\d{4})(\d)/, '$1-$2'); //Coloca um hífen depois do bloco de quatro dígitos
    }
    return palavraLimpa
  }

  verifica(palavra:any){
    let palavraLimpa = palavra.replace(/\D/g, '')
    if(palavraLimpa.length <= 11){
      return cpf.isValid(palavraLimpa);
    } else{
      return cnpj.isValid(palavraLimpa);
    }
  }

}
