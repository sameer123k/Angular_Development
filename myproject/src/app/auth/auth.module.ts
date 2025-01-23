import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    NotFoundComponent,
    UserDashboardComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,

    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AuthModule { }
