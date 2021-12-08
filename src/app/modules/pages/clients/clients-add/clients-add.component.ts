import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Client } from '../shared/client.model';
import { ClientsService } from '../shared/clients.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-clients-add',
  templateUrl: './clients-add.component.html',
  styleUrls: ['./clients-add.component.scss']
})
export class ClientsAddComponent implements OnInit {

  clientForm: FormGroup = new FormGroup({
    'cod': new FormControl({value: '', disabled: false}, [Validators.required]),
    'name': new FormControl({value: '', disabled: false}, [Validators.required]),
    'cpf': new FormControl({value: '', disabled: false}, [Validators.required]),
    'cep': new FormControl({value: '', disabled: false}, [Validators.required]),
    'address': new FormControl({value: '', disabled: false}, [Validators.required]),
    'number': new FormControl({value: '', disabled: false}, [Validators.required]),
    'district': new FormControl({value: '', disabled: false}, [Validators.required]),
    'complement': new FormControl({value: '', disabled: false}, [Validators.required]),
    'city': new FormControl({value: '', disabled: false}, [Validators.required]),
    'email': new FormControl({value: '', disabled: false}, [Validators.required]),
    'birthdayDate': new FormControl({value: '', disabled: false}, [Validators.required]),
  });

  constructor(private clientsService: ClientsService, private router: Router) { }

  ngOnInit(): void {
    
  }

  async submitForm(){
    if(this.clientForm.invalid){

      Swal.fire({
        title: 'Erro!',
        text: 'Preencha todos os campos',
        icon: 'error',
        confirmButtonText: 'Ok'
      })

      return;

    } else{
      let client = new Client(
        this.clientForm.controls['cod'].value,
        this.clientForm.controls['name'].value,
        this.clientForm.controls['cpf'].value,
        this.clientForm.controls['cep'].value,
        this.clientForm.controls['address'].value,
        this.clientForm.controls['number'].value,
        this.clientForm.controls['district'].value,
        this.clientForm.controls['complement'].value,
        this.clientForm.controls['city'].value,
        this.clientForm.controls['email'].value,
        this.clientForm.controls['birthdayDate'].value,
      );

      await this.clientsService.create(client);

      Swal.fire({
        title: 'Sucesso!',
        text: 'Cliente cadastrado',
        icon: 'success',
        confirmButtonText: 'Ok'
      })

      this.router.navigateByUrl('/clients')
    }
  }

  searchCep(event:any){
    let cep : string = event.target.value;
    if(cep.length === 9){
      cep = cep.replace('-','');
      this.clientsService.viacep(cep).subscribe((data) => {
        this.setAddressIntoForm(data);
      })
    }
  }

  setAddressIntoForm(data:any){
    this.clientForm.controls['address'].setValue(data.logradouro);
    this.clientForm.controls['district'].setValue(data.bairro);
    this.clientForm.controls['city'].setValue(data.localidade);
  }

}
