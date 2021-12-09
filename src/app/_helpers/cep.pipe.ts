import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cep'
})
@Injectable({
  providedIn: 'root'
})
export class CepPipe implements PipeTransform {

  constructor() { }
  transform(cep:any) {
    let cepLimpo = cep.replace(/\D/g,"");             //Remove tudo o que não é dígito

    cepLimpo = cepLimpo.replace(/(\d)(\d{3})$/,"$1-$2");
    
    return cepLimpo;
  }

}
