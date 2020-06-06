import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudService } from './crud/crud.service';
import { CrudModule } from './crud/crud.module';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { LoginComponent } from './login/login.component';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { AdminComponent } from './admin/admin.component';
import { AuthService } from './auth.service';
import * as http from '@angular/common/http';
import { OrderService } from './order.service';
import { AuthHttp, AUTH_PROVIDERS, provideAuth, AuthConfig } from 'angular2-jwt/angular2-jwt';
import { AdminAuthGuard } from './admin-auth-guard.service';
import { AuthGuard } from './auth-guard.service';
import { MockBackend } from '@angular/http/testing';
import { HttpResponse, HttpClient } from '@angular/common/http';

export function getAuthHttp(http) {
  return new AuthHttp(new AuthConfig({
    tokenName: 'token'
  }), http);
}

@NgModule({
  declarations: [ 
    AppComponent,
    SignupFormComponent,
    LoginComponent,
    AdminUsersComponent,
    AdminHomeComponent,
    NoAccessComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CrudModule
  ],
  providers: [
    CrudService,
    OrderService,
    AuthService,

    AuthGuard,
    AdminAuthGuard,
    AuthHttp,
    
    MockBackend, // For creating a mock back-end. You don't need these in a real app. 
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }