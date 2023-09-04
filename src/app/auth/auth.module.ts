import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LayoutPageComponent } from './ui-pages/layout-page/layout-page.component';
import { LoginPageComponent } from './ui-pages/login-page/login-page.component';
import { RegisterPageComponent } from './ui-pages/register-page/register-page.component';


@NgModule({
  declarations: [
    LayoutPageComponent,
    LoginPageComponent,
    RegisterPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
