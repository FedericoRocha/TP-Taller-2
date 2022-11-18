import { Component, DoCheck , OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { CarritoService } from 'src/app/services/carrito.service';
//import { CookieService } from 'ngx-cookie-service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
 
  //carritoNumero=0;  

  public productos = [];
  isLogged!: Boolean

  constructor(protected router: Router) { 
    
  }
    
  ngOnInit(): void {
  }

  onClick(){
    console.log('ejecutando redirect');
    this.router.navigate(['/buscar-zapatilla'])
  }

  buscadorZapatillas() {
    let zapatilla = (<HTMLInputElement>document.getElementById("txtZapatilla")).value;
    this.router.navigate(['/buscar-zapatilla', { zapatilla }]);
  }
}
