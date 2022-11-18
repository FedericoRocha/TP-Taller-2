
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Talle } from 'src/app/interfaces/Talle';
import  {Imagenes}  from 'src/app/interfaces/Imagenes';
import { RestApiService } from 'src/app/services/restApiService';


import { ZapatillaDescripcion } from 'src/app/interfaces/zapatillaDescripcion';
import { CartService } from 'src/app/services/cart.service';
import { ZapatillaCarrito } from 'src/app/interfaces/zapatillaCarrito';
import { Zapatilla } from 'src/app/interfaces/zapatilla';


@Component({  
  selector: 'app-producto-descripcion',
  templateUrl: './producto-descripcion.component.html',
  styleUrls: ['./producto-descripcion.component.scss']
})
export class ProductoDescripcionComponent implements OnInit {

  idproducto='';
  rutaLogo: string="./assets/logo.png";



zapatillas:Zapatilla [] = [];
  
  talles:Talle[]=[] ;
  imagenes:Imagenes[]=[];

  talle:number;

  constructor(
    private route: ActivatedRoute, 
    private restApiService:RestApiService, 
    private cartService: CartService
  ) { 
      console.log(this.route.snapshot.paramMap.get('id'))
  }

  agregarCarrito(zapatillas: Zapatilla) {

    let talles2 = {} as Talle;
    for(var i=0; i<this.talles.length;i++){
      if(this.talles[i].talle==this.talle){
        talles2=this.talles[i];
      }
    }
    let zapatillaCarrito = {} as ZapatillaCarrito;   
    zapatillaCarrito.id=zapatillas.id;
    zapatillaCarrito.nombre=zapatillas.nombre;
   // zapatillaCarrito.imagen1=zapatillas.imagen1;
    zapatillaCarrito.precio=zapatillas.precio;
    zapatillaCarrito.talle=talles2.talle;
    zapatillaCarrito.stock=talles2.stock;
    zapatillaCarrito.cantidad=1;
  // formo una key compuesta para poder usarla en el local storage
    zapatillaCarrito.key=zapatillas.id+"-"+talles2.talle;
    this.cartService.addToCart(zapatillaCarrito);
    window.alert('El producto se agrego');
  }

  ngOnInit(): void {    
    let idproducto=this.route.snapshot.paramMap.get('id');  
    this.cargarZapatillaporID(idproducto); 
    this.cargarImagenesporId(idproducto); 
    this.cargarTallesporId(idproducto); 

    }
    cargarZapatillaporID(idproducto){
      this.restApiService.ZapatillaPorId(idproducto).pipe().subscribe(data => this.zapatillas=data);
    } 

    cargarImagenesporId(idproducto){
      this.restApiService.ImagenesPorId(idproducto).pipe().subscribe(data => this.imagenes =data);
    }

    cargarTallesporId(idproducto){
      this.restApiService.TallesPorId(idproducto).pipe().subscribe(data => this.talles =data);
    }
  }


