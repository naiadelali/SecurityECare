import { Routes } from '@angular/router';

import { ListaVidasComponent } from './vidas/lista-vidas/lista-vidas.component';


export const CadastrosRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'vidas',
      component: ListaVidasComponent
    }]
  }
];
