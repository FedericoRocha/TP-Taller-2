import { Component, OnInit } from '@angular/core';
import { ProductoComponent } from '../producto/producto.component';

@Component({
  selector: 'app-carrousel-cards',
  templateUrl: './carrousel-cards.component.html',
  styleUrls: ['./carrousel-cards.component.css']
})
export class CarrouselCardsComponent implements OnInit {
  
  productos=
  [{  
    imagen1:"./assets/zapatilla1.webp",
    linkcompra:"productoDescripcion",
  nombre:'ZAPATILLAS ADIDAS ORIGINALS NITEBALL 2.0',
  precio:'35.999',
  cantidad: '',
  color:'negra',
  ano:'2022',    },
  {  
    imagen1:"./assets/zapatilla2.webp",
    linkcompra:"productoDescripcion",
    nombre:'ZAPATILLAS PUMA TRC BLAZE',
  precio:'29.999',
  cantidad: '',
  color:'negra',
  ano:'2022',    },
  {  
    imagen1:"./assets/zapatilla3.webp",
    linkcompra:"productoDescripcion",
    nombre:'ZAPATILLAS FILA EXCURSION',
  precio:'35.999',
  cantidad: '',
  color:'negra',
  ano:'2022',    },
  {  
    imagen1:"./assets/zapatilla4.webp",
    linkcompra:"productoDescripcion",
    nombre:'ZAPATILLAS FILA RENNO',
  precio:'$25.489',
  cantidad: '',
  color:'negra',
  ano:'2022',    },
]
  constructor() { }

  ngOnInit(): void {
  }

}
