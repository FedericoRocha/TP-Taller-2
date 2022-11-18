import { Component, OnInit } from '@angular/core';
import { ZapatillaCarrito } from 'src/app/interfaces/zapatillaCarrito';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {
  isLogged!: Boolean;
  usuario:string;
  items : ZapatillaCarrito[]=[];
  cantidadCarritoNav=0;
  total=0;
  envio=800;
  subtotal=0;
  
  constructor(private cookieService: CookieService, protected router: Router,public cartService:CartService    
  ) {}

  ngOnInit(): void {
    this.calcularsubtotal();    
    this.usuario=this.cookieService.get("token_access");
    this.items=[];
    this.items=this.cartService.getItems();
  
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
    this.items.forEach(zapatillaCarrito =>{
    this.subtotal+=zapatillaCarrito.cantidad*zapatillaCarrito.precio
    }); 
    if(this.subtotal>20000){
      this.envio=0;
      this.total =this.subtotal+this.envio;
     }else {
      this.envio=800;
      this.total =this.subtotal+this.envio;
     }
  }
 
  ngDoCheck(): void {
    this.isLogged = this.cookieService.check("token_access")
  }
  FinalizarCompra():void{
    this.usuario=this.cookieService.get("token_access")
  }
  

}
