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
import { ButtonsComponent } from './buttons/buttons.component';


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
    ButtonsComponent
    
  ]
})

export class CadastrosComponentsModule {}
