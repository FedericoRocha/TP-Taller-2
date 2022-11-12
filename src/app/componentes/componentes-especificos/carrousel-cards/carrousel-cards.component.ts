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
  zapatillas: Zapatilla[];

irAProductoDescripcion(zapatilla: Zapatilla){

}
  constructor(
    private restApiService:RestApiService) { }

  ngOnInit(): void {
    this.cargarZapatilla();
  }

  cargarZapatilla(){
    this.restApiService.ZapatillaOferta().pipe().subscribe(data =>
      this.zapatillas =data);
    //console.log(this.zapatillas);
  }; 
}


