import { Injectable } from '@angular/core';
import { productos } from '../productos';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  productos=productos;
  items =[];

  constructor() { }

  agregar(producto: { id: number; clasificacion: string; marca: string; descripcion: string; precio: number; cantidad: number; disponible: boolean; imagen: string; }){
      this.productos.push(producto);
      return this.productos;
  }

  editar(id: any){
}
  
  buscar(id: number) {
    this.productos.findIndex(e=>e.id==id)
  }

  eliminar(id: number){
    const resultado= this.productos.findIndex(e=>e.id==id);
    this.productos.splice(resultado,1);
    return this.productos;
  }
}
