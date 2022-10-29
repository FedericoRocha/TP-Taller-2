import { Injectable } from '@angular/core';
import { ZapatillaCarrito } from 'src/app/interfaces/zapatillaCarrito';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: ZapatillaCarrito[]=[];

  addToCart(zapatillaCarrito: ZapatillaCarrito) {


    // si no existe en el local storage se agrega
     const keys = Object.keys(localStorage);

    let existe = false;
    keys.forEach(key => {
      if ( key == zapatillaCarrito.key){
        existe = true;
        // saco el adicionar si exiistia, no puedo chequear que sigan disponibles el Stock del talle desde aca
        //zapatillaCarrito.cantidad ++;
        localStorage.setItem(zapatillaCarrito.key, JSON.stringify(zapatillaCarrito));
      }
    });
    if (!existe) {
      //this.items.push(zapatillaCarrito);
      localStorage.setItem(zapatillaCarrito.key, JSON.stringify(zapatillaCarrito));
    }
  }
  

  getItems() {
    // recorrer elas keys guardadas, parse json
    // pusharlas para retornar la lista creada
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
  
  constructor() { }
}
