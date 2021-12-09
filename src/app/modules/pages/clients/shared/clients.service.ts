import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Client } from './client.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private angularFirestore: AngularFirestore, private http: HttpClient) { }

  create(client: Client) {
    return new Promise((resolve, reject) => {
      this.angularFirestore.collection("clients-collection")
        .add({
          address: client.address,
          birthdayDate: client.birthdayDate,
          cep: client.cep,
          city: client.city,
          cod: client.cod,
          complement: client.complement,
          cpf: client.cpf,
          district: client.district,
          email: client.email,
          name: client.name,
          number: client.number
        })
        .then(response => { resolve(response) })
    });
  }

  getAll() {
    return new Promise((resolve, reject) => {
      this.angularFirestore.collection("clients-collection").snapshotChanges().subscribe(
        data => {
          resolve(data);
        },
        error => {
          reject(error);
        }
      )
    });
  }  


  getOneByCod(id:string){
    return new Promise((resolve, reject) => {
      this.angularFirestore.collection("clients-collection").doc(id).valueChanges().subscribe(
        (data:any) => {
          resolve(data);
        },
        error => {
          reject(error);
        }
      )
    });
  }

  viacep(cep:string){
    return this.http.get(`https://viacep.com.br/ws/${cep}/json/`);
  }
}
