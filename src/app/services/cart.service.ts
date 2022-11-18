import { Injectable } from '@angular/core';
import { ZapatillaCarrito } from 'src/app/interfaces/zapatillaCarrito';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: ZapatillaCarrito[]=[];
  carritoNumero:0;
  cantidadCarritoNav=0;

  addToCart(zapatillaCarrito: ZapatillaCarrito) {

    // si no existe en el local storage se agrega
     const keys = Object.keys(localStorage);

    let existe = false;
    keys.forEach(key => {
      if ( key == zapatillaCarrito.key){
        existe = true;     
        localStorage.setItem(zapatillaCarrito.key, JSON.stringify(zapatillaCarrito));
        this.carritoNumero++;
        localStorage.setItem("carrito", JSON.stringify(this.carritoNumero))
      }
    });
    if (!existe) {      
      localStorage.setItem(zapatillaCarrito.key, JSON.stringify(zapatillaCarrito));
      this.carritoNumero++;
      localStorage.setItem("carrito", JSON.stringify(this.carritoNumero))
    }
  }
    
  getItems() {
    // recorrer elas keys guardadas, parse json
    // agregar los items. para retornar la lista creada 
    //regresarla
    //tira error porque recarga cada vez que se cambia depagina
    const keys = Object.keys(localStorage);    
    keys.forEach(key => {	
      if(true==this.validarKey(key)){
     this.items.push(JSON.parse(localStorage[key]));}
    
      });
      return this.items;
  }

  clearCart() {
   // localStorage.clear();    
    const keys = Object.keys(localStorage);    
    keys.forEach(key => {	
      if(true==this.validarKey(key)){
      localStorage.removeItem(key);}
      });

    location. reload();
  }

  eliminarItem(key:string) {   
      localStorage.removeItem(key);
     location. reload();
   }

 // porque? para filtrar que solo borren las keys de los productos, creo que se borra el token del usuario sino
  private idRegex = /^\d{1,3}[-]\d{1,2}$/;  
   validarKey(key: string) {    
		return this.idRegex.test(key);
	}
/*  esto no anda
  calcularCantidadCarritoNav():number{
    this.items.forEach(zapatillaCarrito =>{
      this.cantidadCarritoNav+=zapatillaCarrito.cantidad});
    return this.cantidadCarritoNav
  }
  */
  constructor() { }
}
