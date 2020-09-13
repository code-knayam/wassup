import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AuthRoutingModule } from './auth-routing.module';
import { MatCardModule } from '@angular/material/card';
@NgModule({
  declarations: [AuthComponent, SigninComponent, SignupComponent],
  imports: [CommonModule, AuthRoutingModule, MatCardModule],
})
export class AuthModule {}
