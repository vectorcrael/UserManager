import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './guard/auth.guard';
import { HomeComponent } from './crud/home/home.component';
import { DetailsComponent } from './crud/details/details.component';
import { CreateComponent } from './crud/create/create.component';
import { UpdateComponent } from './crud/update/update.component';


const routes: Routes = [
  //{ path: '', canActivate: [AuthGuard] },
  //routes for the administrator
  { path: 'admin/home', component: AdminHomeComponent },
  { path: 'admin/user', component: AdminUsersComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'no-access', component: NoAccessComponent },
  { path: 'register', component: RegisterComponent },

  //crud module routes
  { path: 'user', redirectTo: 'user/home', pathMatch: 'full'},
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
