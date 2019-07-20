import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { FormComponent } from './form/form.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserService } from './user.service';
import { UserPhotoComponent } from './user-photo/user-photo.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { AuthenticationService } from './authentication.service';

@NgModule({
  imports: [
    BrowserModule, 
    FormsModule, 
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
    ],
  declarations: [AppComponent, FormComponent, NavBarComponent, FooterComponent, UserDetailComponent, UserPhotoComponent, LoginFormComponent],
  bootstrap: [AppComponent],
  providers: [UserService, AuthenticationService],
})
export class AppModule { }
