import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ZapatillaCarrito } from 'src/app/interfaces/zapatillaCarrito';
import { CartService } from 'src/app/services/cart.service';
import { RestApiService } from 'src/app/services/restApiService';

@Component({
  selector: 'app-buscar-zapatilla',
  templateUrl: './buscar-zapatilla.component.html',
  styleUrls: ['./buscar-zapatilla.component.scss']
})
export class BuscarZapatillaComponent implements OnInit {

  productos = [];

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
    //con el suscribe invocamos al Observable para que comparta informacion cuando se pida una solicitud
    //se le carga el resultado del json a productos
    this.restApiService.buscarZapatillas(valorBusqueda).subscribe(data => this.productos = data);
    //muestra los productos encontrados
    console.log(this.productos);
  }
  
  addToCart(producto: ZapatillaCarrito) {
    this.carrito.addToCart(producto)
    window.alert("se ha seleccionado el producto : " + producto.id);
  }

}
