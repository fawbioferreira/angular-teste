import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    'email': new FormControl({value: '', disabled: false}, [Validators.required]),
    'password': new FormControl({value: '', disabled: false}, [Validators.required]),
  })

  constructor(private authService: AuthenticationService, private activatedRoute : ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  submitForm(){
    if(this.loginForm.invalid){
      Swal.fire({
        title: 'Erro',
        text: 'Preencha todos os campos',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    } else {

      this.authService.login(this.loginForm.controls['email'].value,this.loginForm.controls['password'].value).then  (
        data => {
          const url_params = this.activatedRoute.snapshot.queryParams;
          if (url_params.returnUrl) {
            this.router.navigateByUrl(url_params.returnUrl);            
          } else {
            this.router.navigateByUrl('/');
          }
        },
        error => {
  
        }
      );

    }
  }

}
