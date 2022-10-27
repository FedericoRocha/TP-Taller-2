
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Talles } from 'src/app/interfaces/talles';
import { Zapatilla } from 'src/app/interfaces/zapatilla';


import { ZapatillaDescripcion } from 'src/app/interfaces/zapatillaDescripcion';
import { CartService } from 'src/app/services/cart.service';
import { ZapatillaCarrito } from 'src/app/interfaces/zapatillaCarrito';

@Component({  
  selector: 'app-producto-descripcion',
  templateUrl: './producto-descripcion.component.html',
  styleUrls: ['./producto-descripcion.component.scss']
})
export class ProductoDescripcionComponent implements OnInit {

  zapatillaCarrito:ZapatillaCarrito;
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
  talles:Talles[]=[{ numero:35,stock:10 },{ numero:37,stock:1 },{ numero:40,stock:5 }
]

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { 
  }
  addToCart(product: ZapatillaCarrito) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

  ngOnInit(): void {    
  }
}
