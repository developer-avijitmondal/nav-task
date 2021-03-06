import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminlogoutComponent } from './adminlogout/adminlogout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponent,
    NavbarComponent,
    AdminLoginComponent,
    AdmindashboardComponent,

    AdminlogoutComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
