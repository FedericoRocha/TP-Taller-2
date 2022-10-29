import { Component, OnInit } from '@angular/core';
import { ZapatillaCarrito } from 'src/app/interfaces/zapatillaCarrito';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {


  items = this.cartService.getItems();// esto tira el error  

  total=0;
  envio=0;
  subtotal=0;
  
  constructor(
    private cartService: CartService
    
  ) {}

  ngOnInit(): void {
    this.calcularsubtotal();
    
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
    this.calcularsubtotal();

  }
  restarCantidad(item:ZapatillaCarrito):void{
    if(item.cantidad>1){
      item.cantidad--;
      localStorage.setItem(item.key, JSON.stringify(item));
    }   
    this.calcularsubtotal();
  }

  // nose como importar para borrar desde el servicio carrito
  clearCart(){
    this.total=0;
    this.cartService.clearCart();

  }
  eliminarItem(key:string){
    this.cartService.eliminarItem(key);
  }
  calcularsubtotal(){
    this.subtotal=0;
    this.items.forEach(zapatillaCarrito =>{
      this.subtotal+=zapatillaCarrito.cantidad*zapatillaCarrito.precio
    });    
    
  }
 


}
