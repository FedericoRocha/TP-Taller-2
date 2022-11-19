import { Component, DoCheck , OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { CookieService } from 'ngx-cookie-service';
import { Token } from '@angular/compiler';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
 CantidadCarritoNav:number =0;
  public productos = [];
  isLogged!: Boolean
  usuario:any;

  constructor(private cookieService: CookieService, protected router: Router,public cartService:CartService) { 
    // esto esta mal, nose como llamar a la funcion    
    this.CantidadCarritoNav= localStorage.length  
  }
    
  ngOnInit(): void {
    this.usuario=localStorage.getItem("emailUsuario");
    
    //this.CantidadCarritoNav= localStorage.getItem("cantidadCarritoNav");
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
    localStorage.removeItem("emailUsuario")
    localStorage.clear
    this.cookieService.delete("token_access")
    this.router.navigate(["/"])
  }

}
