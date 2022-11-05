import { Component, OnInit } from '@angular/core';
import { Zapatilla } from 'src/app/interfaces/zapatilla';
import { RestApiService } from 'src/app/services/restApiService';



@Component({
  selector: 'app-carrousel-cards',
  templateUrl: './carrousel-cards.component.html',
  styleUrls: ['./carrousel-cards.component.css']
})
export class CarrouselCardsComponent implements OnInit {
  
  rutaLogo: string="./assets/logo.png";
  //esto se tiene que cargar desd ela base
  zapatillas: Zapatilla[];

irAProductoDescripcion(zapatilla: Zapatilla){

}
  constructor(
    private restApiService:RestApiService) { }

  ngOnInit(): void {
    this.cargarZapatilla();
  }

  cargarZapatilla(){
    this.restApiService.ZapatillaOferta().subscribe(data => this.zapatillas = data); 
    console.log(this.zapatillas);
  }
}


