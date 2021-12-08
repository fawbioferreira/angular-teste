import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  // private currentUserSubject: BehaviorSubject<User>;
  // public currentUser: Observable<User>;

  constructor(private http: HttpClient, private angularFirestore: AngularFirestore) { 
    // this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    // this.currentUser = this.currentUserSubject.asObservable();
  }

  // public get currentUserValue(): User{
  //   return this.currentUserSubject.value;
  // }
  

  login(email: string, password: string){
    return new Promise((resolve, reject) => {
      this.angularFirestore.collection("clients-collection").doc('lNHub1TH6dJbmLWcApMw').valueChanges().subscribe(
        (data:any) => {

          if(password === data.password){
            localStorage.setItem('currentUser', JSON.stringify(data));
            // this.currentUserSubject.next(data);
          }

          resolve(data);
        },
        error => {
          reject(error);
        }
      )
    });
  }
}
