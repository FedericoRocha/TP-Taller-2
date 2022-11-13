import { Component, OnInit } from '@angular/core';
import { Zapatilla } from 'src/app/interfaces/zapatilla';
import { RestApiService } from 'src/app/services/restApiService';

@Component({
  selector: 'app-carrousel-cards2',
  templateUrl: './carrousel-cards2.component.html',
  styleUrls: ['./carrousel-cards2.component.css']
})
export class CarrouselCards2Component implements OnInit {

  rutaLogo: string="./assets/logo.png";
  zapatillas: Zapatilla[];

  constructor( private restApiService:RestApiService) { }

  ngOnInit(): void {
    this.cargarZapatillaMasVendida();
  }


  cargarZapatillaMasVendida(){
    this.restApiService.ZapatillaMasVendida().pipe().subscribe(data =>
      this.zapatillas =data);
    //console.log(this.zapatillas);
  }; 
}
