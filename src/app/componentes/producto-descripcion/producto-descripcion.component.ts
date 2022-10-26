
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Talles } from 'src/app/interfaces/talles';
import { Zapatilla } from 'src/app/interfaces/zapatilla';

import { zapatillaCarrito } from 'src/app/interfaces/zapatillaCarrito';
import { ZapatillaDescripcion } from 'src/app/interfaces/zapatillaDescripcion';
import { CartService } from 'src/app/services/cart.service';

@Component({  
  selector: 'app-producto-descripcion',
  templateUrl: './producto-descripcion.component.html',
  styleUrls: ['./producto-descripcion.component.scss']
})
export class ProductoDescripcionComponent implements OnInit {

  zapatillaDescripcion:ZapatillaDescripcion={
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
  talles:Talles[]=[{ numero:10 },{ numero:10 },{ numero:10 }
]

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService

  ) { }

  ngOnInit(): void {
  }
  addToCart(ZapatillaCarrito: zapatillaCarrito) {
    this.cartService.addToCart(ZapatillaCarrito);
    window.alert('Your product has been added to the cart!');
  }

}
