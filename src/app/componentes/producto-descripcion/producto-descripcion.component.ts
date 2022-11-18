
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


  // aca tengo un problema, zapattila carrito tiene que ser una convinacion de zapatila descripcion y un valor del talle, nose como mandarlo  

  zapatillaDescripcion:ZapatillaDescripcion ={
    id:1,
    nombre:"ADIDAS ORIGINALS NITEBALL 2.0",
    precio:30000,
    color:"blanca",
    ano:22,
    marca:"Adidas",
    linkcompra:"productoDescripcion",
    imagen1:"./assets/zapatilla1.webp", 
    imagen2:"./assets/zapatilla1.webp", 
    imagen3:"./assets/zapatilla1.webp", 
    imagen4:"./assets/zapatilla1.webp", 
    disciplina:"TREKKING",
    material:"SINTETICO",
    descripcionProducto:"• Construida sobre una base de alto rendimiento para brindar máxima sujeción y comodidad. Con una suela exterior duradera que proporciona un agarre prolongado en superficies mojadas Un antepié más ancho proporciona el ajuste cómodo que necesita para recorridos más largos.",
  }
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

  agregarCarrito(zapatillaDescripcion: ZapatillaDescripcion) {

    let talles2 = {} as Talle;
    for(var i=0; i<this.talles.length;i++){
      if(this.talles[i].talle==this.talle){
        talles2=this.talles[i];
      }
    }
    let zapatillaCarrito = {} as ZapatillaCarrito;   
    zapatillaCarrito.id=zapatillaDescripcion.id;
    zapatillaCarrito.nombre=zapatillaDescripcion.nombre;
    zapatillaCarrito.imagen1=zapatillaDescripcion.imagen1;
    zapatillaCarrito.precio=zapatillaDescripcion.precio;
    zapatillaCarrito.color=zapatillaDescripcion.color;
    zapatillaCarrito.marca=zapatillaDescripcion.marca;  

    zapatillaCarrito.talle=talles2.talle;
    zapatillaCarrito.stock=talles2.stock;
    zapatillaCarrito.cantidad=1;
// formo una key compuesta para poder usarla en el local storage
    zapatillaCarrito.key=zapatillaDescripcion.id+"-"+talles2.talle;
    this.cartService.addToCart(zapatillaCarrito);
    window.alert('Your product has been added to the cart!');
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


