import { Injectable } from '@angular/core';
//mport { productos } from '../productos';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  //productos=productos;
  items =[];

  constructor() { }

  /*agregar(producto: { id:number,nombre:string,precio:number,cantidad:number,color:string,ano:number,marca:string,
    linkcompra:string,imagen1:string, imagen2:string, imagen3:string,imagen4:string,pocoStock: boolean,oferta:boolean}){
      this.productos.push(producto);
      return this.productos;*/
  }
/*
 editar(id: any){
}
  
  buscar(id: number) {
   this.productos.findIndex(e=>e.id==id)
  }

 eliminar(id: number){
   / const resultado= this.productos.findIndex(e=>e.id==id);
    this.productos.splice(resultado,1);
    return this.productos;
 }}
    */ 

