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

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  }
  agregarCantidad(item:ZapatillaCarrito):void{

    if(item.cantidad==5 || item.cantidad==item.stock){
      alert("cantidad maxima de permitida");
    }

    // la idea que tenga un maximo de compra o traer el stock de los items
    if(item.cantidad<5 && item.cantidad<item.stock){
      item.cantidad++;
    }


  }
  restarCantidad(item:ZapatillaCarrito):void{
    if(item.cantidad>1){
      item.cantidad--;
    }   
  }
  // nose como importar para borrar el carrito
  clearCart(){
    this.cartService.clearCart();
  }
 


}
