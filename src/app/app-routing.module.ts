import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './crud/home/home.component';
import { ViewComponent } from './crud/view/view.component';
import { DetailsComponent } from './crud/details/details.component';
import { CreateComponent } from './crud/create/create.component';
import { UpdateComponent } from './crud/update/update.component';


const routes: Routes = [
  //{ path: '', canActivate: [AuthGuard] },
  //routes for the administrator
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'register', component: RegisterComponent },

  //crud module routes
  { path: 'user', redirectTo: 'user/home', pathMatch: 'full'},
  { path: 'user/view', component: ViewComponent },
  { path: 'user/home', component: HomeComponent },
  { path: 'user/details/:UserId', component: DetailsComponent },
  { path: 'user/create', component: CreateComponent },
  { path: 'user/update/:UserId', component: UpdateComponent },
 
  //{ path: '**', redirectTo: '' }  // otherwise redirect to home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
