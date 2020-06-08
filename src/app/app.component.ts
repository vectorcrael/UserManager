import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

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

      if(!authService.isLoggedIn())
      {
        this.router.navigate(['/login']);
      }
     }

     logout(){
      this.authService.logout();
      this.router.navigate(['/login']);
     }
}
