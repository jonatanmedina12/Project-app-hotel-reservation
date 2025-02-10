import { Routes } from '@angular/router';
import { LAYOUTS_ROUTES } from './layouts/layouts-routing.module';
import { AUTH_ROUTES } from './feature/auth/login/login-routing.module';

export const routes: Routes = [
    {
      path: '',
      children: LAYOUTS_ROUTES
    },
    {
      path: 'login',
      children: AUTH_ROUTES
    }
  ];