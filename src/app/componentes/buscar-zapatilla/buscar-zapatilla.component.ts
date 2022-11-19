import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
import { Zapatilla } from 'src/app/interfaces/zapatilla';
import { ZapatillaCarrito } from 'src/app/interfaces/zapatillaCarrito';
import { CartService } from 'src/app/services/cart.service';
import { RestApiService } from 'src/app/services/restApiService';

@Component({
  selector: 'app-buscar-zapatilla',
  templateUrl: './buscar-zapatilla.component.html',
  styleUrls: ['./buscar-zapatilla.component.scss']
})
export class BuscarZapatillaComponent implements OnInit {

  productos: Zapatilla[];

  constructor(private route: ActivatedRoute, private carrito: CartService,  private restApiService: RestApiService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        let valorBusqueda = params["zapatilla"];
        this.buscarProductos(valorBusqueda);
      }
    );
  }

  buscarProductos(valorBusqueda) {
    this.restApiService.BuscardorZapatillasFiltro(valorBusqueda).pipe().subscribe(data => 
      this.productos = data);
      console.log(this.productos);
  }
  
  addToCart(producto: ZapatillaCarrito) {
    this.carrito.addToCart(producto)
    window.alert("se ha seleccionado el producto : " + producto.id);
  }

}
