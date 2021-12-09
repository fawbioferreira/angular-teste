import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './modules/authentication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-teste';
  user: any = "";

  constructor(private authService: AuthenticationService){}

  ngOnInit(){
    this.authService.currentUser.subscribe(
      data => {
        this.user = this.authService.currentUserValue;
      }
    );
  }
}
