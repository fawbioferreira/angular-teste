import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  constructor(private angularFirestore: AngularFirestore) { }

  
  getAll() {
    return new Promise((resolve, reject) => {
      this.angularFirestore.collection("sales-collection").snapshotChanges().subscribe(
        data => {
          resolve(data);
        },
        error => {
          reject(error);
        }
      )
    });
  }

  getOneById(cod:string){
    return new Promise((resolve, reject) => {
      this.angularFirestore.collection("products-collection").doc(cod).valueChanges().subscribe(
        (data:any) => {
          resolve(data);
        },
        error => {
          reject(error);
        }
      )
    });
  }
}
