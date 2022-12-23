import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';
import { CardLibreComponent } from './card-libre/card-libre.component';
import { CardProComponent } from './card-pro/card-pro.component';
import { CardEmpresaComponent } from './card-empresa/card-empresa.component';



@NgModule({
  declarations: [
    TitleComponent,
    CardLibreComponent,
    CardProComponent,
    CardEmpresaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TitleComponent,
    CardLibreComponent,
    CardProComponent,
    CardEmpresaComponent
  ]
})
export class BodyModule { }
