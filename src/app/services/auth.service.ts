import { Injectable } from '@angular/core';
import { CrudService } from '../crud/crud.service';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt'; 
import { User } from '../crud/user'; 

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: any; 
  currentUserObject: User; 
  users: User[];

  constructor(
    private crudService: CrudService
    ) {

    //get data from the service  
    this.crudService.getAll().subscribe((data: User[])=>{
      console.log(data);
      this.users = data;
    });  
    
    let token = localStorage.getItem('token');

    if (token) {
      let jwt = new JwtHelper();
      this.currentUser = jwt.decodeToken(token);
    };
  }

  login(credentials) { 
    let result : User;

    if(this.users)
      result = this.users.find(x => x.email === credentials.email && x.password === credentials.password);
      
    if (result && result.token) {

      //Hard coded for simulation
      ////Regular User Token
      //localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjEyMTIxMSIsIm5hbWUiOiJFbHJveSBOeW9uaSIsImlhdCI6MTUxNjIzOTAyMn0.HZtm0Czx0QK4DIhpU--X9jM1g_GSvUdATqDMXoCMpJg'); 
      //Admin Token
      localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkVscm95IE55b25pIiwiYWRtaW4iOnRydWV9.bcM7UvV9BXL_fqvUOqeFYIuojwyALeQk447DIw7DaCA'); 
      ////Default Get token from result object
      //localStorage.setItem('token', result.token);
      
      let jwt = new JwtHelper();
      this.currentUser = jwt.decodeToken(localStorage.getItem('token'));
      
      
      localStorage.setItem('user', JSON.stringify(result));
      this.currentUserObject = result;

      return true; 
    }
    else 
      return false; 
  }

  isAdminUser(){
    if(this.currentUserObject)
      return this.currentUserObject.role==='admin';
    else
      return false;
  }

checkForUserItem(){
  if (!this.currentUserObject)
    this.currentUserObject = JSON.parse(localStorage.getItem('user'));
}

  getLoginName(){
    this.checkForUserItem();

    if(this.currentUserObject)
      return this.currentUserObject.name;
    else
      return "Default User";
  }

  getLoginID (){
    this.checkForUserItem();

    if(this.currentUserObject)
      return this.currentUserObject.id;
    else
      return 0;
  }

  logout() { 
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.currentUser = null;
  }

  isLoggedIn() { 
    return tokenNotExpired('token');
  }
}

