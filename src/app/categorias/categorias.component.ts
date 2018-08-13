import { CategoriasService } from './categorias.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  nomePortal;

  categorias[] = [frutas, legumes, carnes];
  
  constructor(private categoriasService: CategoriasService) { 
  	this.nomePortal = "blablablabla";
  	//this.categorias = this.categoriasService.getCategorias();
  }

  ngOnInit() {
  }

}
