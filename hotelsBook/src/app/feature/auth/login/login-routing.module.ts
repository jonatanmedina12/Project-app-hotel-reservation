import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

export const AUTH_ROUTES: Routes = [{

      path: '',
      component: LoginComponent
}];

@NgModule({
  imports: [],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
