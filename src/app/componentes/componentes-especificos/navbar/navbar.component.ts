import { Component, DoCheck , OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { CookieService } from 'ngx-cookie-service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
 
  //carritoNumero=0;  

  public productos = [];
  isLogged!: Boolean

  constructor(private cookieService: CookieService, protected router: Router,public CartService:CartService) { 
    // aca declarar el numero del carrito
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

  ngDoCheck(): void {
    this.isLogged = this.cookieService.check("token_access")
  }

  LogOut(){
    this.cookieService.delete("token_access")
    this.router.navigate(["/"])
  }

}
