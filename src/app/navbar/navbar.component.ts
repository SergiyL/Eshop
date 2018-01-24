import { LoadDataService } from './../services/load-data.service';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  categories$;

  constructor(public authServ: AuthenticationService,
              private loadDataServ: LoadDataService) {
              this.categories$ = loadDataServ.getData();
              
              }

  ngOnInit() {
  }

  loginGoogle() {
    this.authServ.loginGoogle();
  }

  loginEmail() {
    this.authServ.loginEmail();
  }

  createUser() {
    this.authServ.createUser();
  }

  logout() {
    this.authServ.logout();
  }

}
