import { Component, OnInit } from '@angular/core';
import { Zapatilla } from 'src/app/interfaces/zapatilla';



@Component({
  selector: 'app-carrousel-cards',
  templateUrl: './carrousel-cards.component.html',
  styleUrls: ['./carrousel-cards.component.css']
})
export class CarrouselCardsComponent implements OnInit {
  
  rutaLogo: string="./assets/logo.png";
  //esto se tiene que cargar desd ela base
  zapatillas: Zapatilla[]=
  [{
    id:1,
    nombre:"ZAPATILLAS ADIDAS ORIGINALS NITEBALL 2.0'",
    precio:35999,
    cantidad:30,
    color:"negra",
    ano:2022,
    marca:"nike",
    linkcompra:"productoDescripcion",
    imagen1:"./assets/zapatilla1.webp", 
    imagen2:"",
    imagen3:"",
    imagen4:"",
    pocoStock: false,
    oferta:false,
    
  },
  {
    id:2,
    nombre:'ZAPATILLAS PUMA TRC BLAZE',
    precio:29999,
    cantidad:30,
    color:"negra",
    ano:2022,
    marca:"PUMA",
    linkcompra:"productoDescripcion",
    imagen1:"./assets/zapatilla2.webp", 
    imagen2:"",
    imagen3:"",
    imagen4:"",
    pocoStock: false,
    oferta:false,
  },   
  {
    id:6,
    nombre:'ZAPATILLAS PUMA TRC BLAZE',
    precio:29999,
    cantidad:30,
    color:"negra",
    ano:2022,
    marca:"nike",
    linkcompra:"productoDescripcion",
    imagen1:"./assets/zapatilla3.webp", 
    imagen2:"",
    imagen3:"",
    imagen4:"",
    pocoStock: false,
    oferta:true,
  },    
  {
    id:4,
    nombre:'ZAPATILLAS PUMA TRC BLAZE',
    precio:29999,
    cantidad:30,
    color:"negra",
    ano:2022,
    marca:"nike",
    linkcompra:"productoDescripcion",
    imagen1:"./assets/zapatilla4.webp", 
    imagen2:"",
    imagen3:"",
    imagen4:"",
    pocoStock: false,
    oferta:false,
  }      
  
]
  constructor() { }

  ngOnInit(): void {
  }

}
