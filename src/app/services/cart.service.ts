import { Injectable } from '@angular/core';
import { ZapatillaCarrito } from 'src/app/interfaces/zapatillaCarrito';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  items: ZapatillaCarrito[] = [{
    id:1,
    nombre:"ADIDAS ORIGINALS NITEBALL 2.0",
    imagen1:"./assets/zapatilla1.webp", 
    precio:35999,
    color:"negra",
    marca:"ADIDAS",
    talle:39,
    cantidad:1,
    stock:2,
  },
  {
    id:1,
    nombre:"PUMA TRC BLAZE",
    imagen1:"./assets/zapatilla2.webp", 
    precio:35999,
    color:"negra",
    marca:"PUMA",
    talle:39,
    cantidad:1,
    stock:10,
  }  
  ];
  addToCart(zapatillaCarrito: ZapatillaCarrito) {
    this.items.push(zapatillaCarrito);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  constructor() { }
}
