import { AuthService } from '../services/auth.service';
import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { FormGroup, FormBuilder } from '@angular/forms';
import { User } from '../crud/user';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  invalidLogin: boolean = false; 
  loginForm: FormGroup;
  loggedInUser: User;

  constructor(
    private router: Router, 
    private authService: AuthService, 
    public formBuilder: FormBuilder,
    ) {
        //build the loging form
        this.loginForm  = this.formBuilder.group({
          email: '',
          password: ''
        });
     }

  signIn(credentials) {
        let result = this.authService.login(credentials);

        if (result)
          this.router.navigate(['/']);
        else  
          this.invalidLogin = true; 
     
  }
}
