import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit { 
    id='';
    nombre='';
    precio='';
    cantidad='';
    color='';
    ano='';
    marca='';
    linkcompra="producto-descripcion";
    imagen1=''; 
    imagen2=''; 
    imagen3=''; 
  constructor() { }

  ngOnInit(): void {
  }

}
