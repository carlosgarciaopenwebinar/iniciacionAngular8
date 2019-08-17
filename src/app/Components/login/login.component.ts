import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private login: LoginService) { }

  ngOnInit() {}

  signIn() {
    this.login.signIn();
  }

  signOut() {
    this.login.signOut();
  }

}