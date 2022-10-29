import { Component, OnInit } from '@angular/core';
import { ZapatillaCarrito } from 'src/app/interfaces/zapatillaCarrito';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {


  items = this.cartService.getItems();
  total=0;
  envio=0;
  subtotal=0;
  
  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
      this.items.forEach(zapatillaCarrito =>{
      this.total=zapatillaCarrito.cantidad*zapatillaCarrito.precio
    });    
  }
    agregarCantidad(item:ZapatillaCarrito):void{

    if(item.cantidad==5 || item.cantidad==item.stock){
      alert("cantidad maxima de permitida");
    }

    // la idea que tenga un maximo de compra o traer el stock de los items
    if(item.cantidad<5 && item.cantidad<item.stock){
      item.cantidad++;
      localStorage.setItem(item.key, JSON.stringify(item));
    }

  }
  restarCantidad(item:ZapatillaCarrito):void{
    if(item.cantidad>1){
      item.cantidad--;
      localStorage.setItem(item.key, JSON.stringify(item));
    }   
  }

  // nose como importar para borrar desde el servicio carrito
  clearCart(){
    this.cartService.clearCart();
  }
  eliminarItem(key:string){
    this.cartService.eliminarItem(key);
  }
 


}
