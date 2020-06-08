import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudService } from './crud/crud.service';
import { CrudModule } from './crud/crud.module';
import { LoginComponent } from './login/login.component';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminComponent } from './admin/admin.component';
import { AuthService } from './services/auth.service';
import { AuthHttp, AuthConfig } from 'angular2-jwt/angular2-jwt';
import { AuthGuard } from './services/auth-guard.service';
import { MockBackend } from '@angular/http/testing';
import { HomeWelcomeComponent } from './home-welcome/home-welcome.component';
import { RegisterComponent } from './register/register.component';
import {ReactiveFormsModule} from '@angular/forms';

export function getAuthHttp(http) {
  return new AuthHttp(new AuthConfig({
    tokenName: 'token'
  }), http);
}

@NgModule({
  declarations: [ 
    AppComponent,
    LoginComponent,
    AdminUsersComponent,
    AdminHomeComponent,
    AdminComponent,
    HomeWelcomeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CrudModule,
    ReactiveFormsModule
  ],
  providers: [
    CrudService,
    AuthService,

    AuthGuard,
    AuthHttp,
    
    MockBackend, 
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
