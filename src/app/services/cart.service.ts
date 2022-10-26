import { Injectable } from '@angular/core';
import { zapatillaCarrito } from 'src/app/interfaces/zapatillaCarrito';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: zapatillaCarrito[] = [{
    id:1,
    nombre:"ADIDAS ORIGINALS NITEBALL 2.0",
    imagen1:"./assets/zapatilla1.webp", 
    precio:35999,
    color:"negra",
    marca:"ADIDAS",
    talle:39,
    cantidad:1,
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
  }  
  ];
  addToCart(zapatillaCarrito: zapatillaCarrito) {
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
