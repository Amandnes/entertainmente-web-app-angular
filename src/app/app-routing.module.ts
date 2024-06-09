import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login-signUp/login/login.component';
import { SingUpComponent } from './login-signUp/sing-up/sing-up.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'sing-up', component: SingUpComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
