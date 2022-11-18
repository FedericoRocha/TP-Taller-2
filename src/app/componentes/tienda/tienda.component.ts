import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/interfaces/Color';
import { Marca } from 'src/app/interfaces/Marca';
import { Material } from 'src/app/interfaces/Material';
import { Talle} from 'src/app/interfaces/Talle';
import { Tipo } from 'src/app/interfaces/Tipo';
import { Zapatilla } from 'src/app/interfaces/zapatilla';
import { RestApiService } from 'src/app/services/restApiService';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.scss']
})
export class TiendaComponent implements OnInit {

  rutaLogo: string="./assets/logo.png";
  zapatillas: Zapatilla[];
  Marcas: Marca[];
  Materiales: Material[];
  Talles: Talle[];
  Tipos: Tipo[];
  Colores: Color[];
  

  constructor(private restApiService:RestApiService) { }

  ngOnInit(): void {
    this.cargarTodasLasZapatillas();
    this.CargarTodasLasMarcas();
    this.CargarTodosLosMateriales();
    this.CargarTodosLosTalles();
    this.CargarTodosLosTipos();
    this.CargarTodosLosColores();
  }

  cargarTodasLasZapatillas(){
    this.restApiService.TodosLosProductos().pipe().subscribe(data =>
      this.zapatillas = data);
  }

  CargarZapatillasForMarca(marca: number){
    this.restApiService.GetZapatillaForMarca(marca).pipe().subscribe(data =>
      this.zapatillas = data);
  }

  CargarZapatillasForMatirial(material: number){
    this.restApiService.GetZapatillaForMatirial(material).pipe().subscribe(data =>
      this.zapatillas = data);
  }

  CargarZapatillasForTalle(talle: number){
    this.restApiService.GetZapatillaForTalle(talle).pipe().subscribe(data =>
      this.zapatillas = data);
  }

  CargarZapatillasForType(tipo: number){
    this.restApiService.GetZapatillaForType(tipo).pipe().subscribe(data =>
      this.zapatillas = data);
  }

  CargarZapatillasForColor(color: number){
    this.restApiService.GetZapatillaForColor(color).pipe().subscribe(data =>
      this.zapatillas = data);
      console.log(this.zapatillas);
  }

  CargarTodasLasMarcas(){
    this.restApiService.GetAllMarcas().pipe().subscribe(data =>
      this.Marcas = data);
  }

  CargarTodosLosMateriales(){
    this.restApiService.GetAllMatirials().pipe().subscribe(data =>
      this.Materiales = data);
  }

  CargarTodosLosTalles(){
    this.restApiService.GetAllTalles().pipe().subscribe(data =>
      this.Talles = data);
  }

  CargarTodosLosTipos(){
    this.restApiService.GetAllTipos().pipe().subscribe(data =>
      this.Tipos = data);
  }

  CargarTodosLosColores(){
    this.restApiService.GetAllColores().pipe().subscribe(data =>
      this.Colores = data);
  }
}
