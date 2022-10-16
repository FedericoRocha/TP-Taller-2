import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-perfil',
    templateUrl: './perfil.component.html',
    styleUrls: ['./perfil.component.css']
  })
  
export class PerfilComponent implements OnInit {

    tipoCliente="consumidor final";
    email="juan.m@gmail.com"
    nombre=" juan";
    apellido = "martinez";
    documento="32.060.000";
    direccion=" el rodeo ";
    numero="2222";
    localidad=" haedo";
    provincia="Bs As";
    partido="moron";
    codigoPostal="1777";
    telefono="011-6060-2020";
    piso="";
    departamento="";
    entrecalles=" boedo y zapiola";   


    constructor( ){}

    ngOnInit(): void {

    }  
  }