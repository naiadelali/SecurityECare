import 'hammerjs';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { DemoMaterialModule} from '../demo-material-module';
import { CdkTableModule } from '@angular/cdk/table';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CadastrosRoutes } from './cadastros.routing';
import { ListaVidasComponent } from './vidas/lista-vidas/lista-vidas.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CadastrosRoutes),
    DemoMaterialModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    CdkTableModule
  ],
  providers: [

  ],
  entryComponents: [
    // DialogOverviewExampleDialogComponent
  ],
  declarations: [
    ListaVidasComponent
    
  ]
})

export class CadastrosComponentsModule {}
