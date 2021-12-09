import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './user.model';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient, private angularFirestore: AngularFirestore) { 
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser') || '{}') as User);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User{
    return this.currentUserSubject.value;
  }
  

  login(email: string, password: string){  
    //busca sempre o mesmo usuário e só compara a senha pra ver se está correto  
    return new Promise((resolve, reject) => {
      this.angularFirestore.collection("users-collection").doc("lNHub1TH6dJbmLWcApMw").valueChanges().subscribe(
        (data:any) => {
          if(password === data.password){
            localStorage.setItem('currentUser', JSON.stringify(data));
            this.currentUserSubject.next(data);
          } else {
            Swal.fire({
              title: 'Erro',
              text: 'Email ou senha errados',
              icon: 'error',
              confirmButtonText: 'Ok'
            });
          }
          resolve(data);
        },
        error => {
          reject(error);
        }
      )
    });
  }

  logout(){
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next({} as User);
  }
}
