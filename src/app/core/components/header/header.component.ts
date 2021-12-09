import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/modules/authentication/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: any = "";

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(){
    //pega o usuário logado
    this.authService.currentUser.subscribe(
      data => {
        this.user = this.authService.currentUserValue;
      }
    );    
  }

}
