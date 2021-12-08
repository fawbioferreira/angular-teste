import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private angularFirestore: AngularFirestore) { }

  create(product: Product) {
    return new Promise((resolve, reject) => {
      this.angularFirestore.collection("products-collection")
        .add({          
          cod: product.cod,          
          name: product.name,
          value: product.value
        })
        .then(response => { resolve(response) })
    });
  }

  getAll() {
    return new Promise((resolve, reject) => {
      this.angularFirestore.collection("products-collection").snapshotChanges().subscribe(
        data => {
          resolve(data);
          console.log("cirado")
        },
        error => {
          reject(error);
        }
      )
    });
  }
}
