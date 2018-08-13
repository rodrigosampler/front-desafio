import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriasService } from './categorias.service';
import { CategoriasComponent } from './categorias.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  	CategoriasComponent
  ],
  exports: [
  	CategoriasComponent
  ],
  providers: [
  	CategoriasService
  ]

})
export class CategoriasModule { }
