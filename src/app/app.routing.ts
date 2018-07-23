import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { AppBlankComponent } from './layouts/blank/blank.component';
export const AppRoutes: Routes = [{
  path: '',
  component: FullComponent,
  children: [{ 
    path: '', 
    redirectTo: '/dashboard', 
    pathMatch: 'full' 
  }, {
    path: 'cadastros',
    loadChildren: './cadastros/cadastros.module#CadastrosComponentsModule'
  }, {
    path: 'material',
    loadChildren: './material-component/material.module#MaterialComponentsModule'
  }
  , {
    path: 'forms',
    loadChildren: './forms/forms.module#FormModule'
  }, {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  }]
}, {
  path: '',
  component: AppBlankComponent,
  children: [{
    path: 'authentication',
    loadChildren: './authentication/authentication.module#AuthenticationModule'
  }]
}, {
  path: '**',
  redirectTo: 'authentication/404'
}];
