import { Component, OnInit } from '@angular/core';
import { ZapatillaCarrito } from 'src/app/interfaces/zapatillaCarrito';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { CookieService } from 'ngx-cookie-service';
import { RestApiService } from 'src/app/services/restApiService';
import { Venta } from 'src/app/interfaces/Venta';
import { Resumen } from 'src/app/interfaces/Resumen';
import { UltimoNumero } from 'src/app/interfaces/UltimoNumero';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {
  isLogged!: Boolean;
  usuario:string;
  items : ZapatillaCarrito[]=[];
  cantidadCarritoNav:number;
  total=0;
  envio=800;
  subtotal=0;
  idUltimaVenta:UltimoNumero[]=[];
  Venta : Venta;
  Resumen: Resumen;
  usuarioVenta:any;
  
  constructor(private cookieService: CookieService, protected router: Router,public cartService:CartService,private restApiService:RestApiService
  ) {

  }
  ngOnInit(): void {    
    this.usuario=this.cookieService.get("token_access");
    this.usuarioVenta=localStorage.getItem("emailUsuario");
    this.items=this.cartService.getItems();
    this.calcularsubtotal();
    this.calcularNumeroCarrito();
  }

  calcularNumeroCarrito(){
    this.items.forEach(zapatillaCarrito =>{
    this.cantidadCarritoNav+=zapatillaCarrito.cantidad
    }); 
    localStorage.setItem("cantidadCarritoNav", JSON.stringify(this.cantidadCarritoNav));
  }

  
    agregarCantidad(item:ZapatillaCarrito):void{

    if(item.cantidad==5 || item.cantidad==item.stock){
      alert("cantidad maxima de permitida");
    }    
    if(item.cantidad<5 && item.cantidad<item.stock){
      item.cantidad++;
      localStorage.setItem(item.key, JSON.stringify(item));
      this.calcularsubtotal();
      this.calcularNumeroCarrito();
    }    

  }
  restarCantidad(item:ZapatillaCarrito):void{
    if(item.cantidad>1){
      item.cantidad=item.cantidad-1;
      localStorage.setItem(item.key, JSON.stringify(item));
      this.calcularsubtotal();
      this.calcularNumeroCarrito();
    }   
   
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
        this.calcularNumeroCarrito();
    });
    this.calcularNumeroCarrito(); 
    if(this.subtotal>30000){
      this.envio=0;
      this.total =this.subtotal;
     }else {
      this.envio=800;
      this.total =this.subtotal+this.envio;
     }
  }
 
  ngDoCheck(): void {
    this.isLogged = this.cookieService.check("token_access")
  }


  async FinalizarCompra():Promise<void>{
        //this.usuario=this.cookieService.get("token_access");

    (await this.restApiService.GuardarVenta(this.usuarioVenta,this.total)).pipe().subscribe();

    (await this.restApiService.GetUltimaVenta()).pipe().subscribe(data =>{
      this.idUltimaVenta = data
      
      let valor = JSON.parse(JSON.stringify(this.idUltimaVenta));
      valor=valor[0].ultimaCompra;

      this.items.forEach(async element => {
        (await this.restApiService.GuardarResumen(valor, element.id, element.talle, element.cantidad)).pipe().subscribe();
      });
    });
     
    alert("Se realizo la compra con exito");
    this.clearCart();
    this.router.navigate(['/login']); 
  }

}
