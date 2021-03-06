import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'user-manager';
  constructor(public router: Router,
    public authService: AuthService
    ){ 
      //ensure that the user is logged in - this simulates what a guard does
      if(!authService.isLoggedIn() && router.url !== '/register')
      {
        this.router.navigate(['/login']);
      }
     }

     logout(){
      this.authService.logout();
      this.router.navigate(['/login']);
     }

     getCurrentUser(){
      //Open the details with the current user
      this.router.navigate(['/user/details/', this.authService.getLoginID()]); 
     }
}
