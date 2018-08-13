import { Injectable } from '@angular/core';

@Injectable()
export class CategoriasService {

  
  constructor() { }

  getCategorias(){
  	return ['Carnes', 'Legumes', 'Frutas'];
  }

}
