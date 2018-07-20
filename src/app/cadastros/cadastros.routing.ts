import { Routes } from '@angular/router';

import { ButtonsComponent } from './buttons/buttons.component';


export const CadastrosRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'button',
      component: ButtonsComponent
    }]
  }
];
