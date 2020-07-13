import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  { path:'home', redirectTo:'',pathMatch:'full' },
  { path:'',component: HomeComponent },
  { path:'admin-login', component : AdminLoginComponent },
  { path:'login', component :LoginComponent},
  { path:'signup', component :SignupComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
