import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/componentes-especificos/navbar/navbar.component';
import { FooterComponent } from './componentes/componentes-especificos/footer/footer.component';
import { CarrouselComponent } from './componentes/componentes-especificos/carrousel/carrousel.component';
import { CarrouselCardsComponent } from './componentes/componentes-especificos/carrousel-cards/carrousel-cards.component';
import { HomeComponent } from './componentes/home/home.component';
import { RouterModule, Routes } from '@angular/router';


import { CarrouselCards2Component } from './componentes/componentes-especificos/carrousel-cards2/carrousel-cards2.component';
import { CarrouselCardsPromosComponent } from './componentes/componentes-especificos/carrousel-cards-promos/carrousel-cards-promos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './componentes/login/login.component';
import { CrearcuentaComponent } from './componentes/crearcuenta/crearcuenta.component';
import { VigilanteGuard } from 'src/app/guard/vigilante.guard';

import { PerfilComponent } from './componentes/componentes-especificos/perfil/perfil.compoent';
import { ContactoComponent } from './componentes/componentes-especificos/contacto/contacto.component';
import { ProductoDescripcionComponent } from './componentes/producto-descripcion/producto-descripcion.component';
import { CarritoComponent } from './componentes/carrito/carrito.component';







const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'crearcuenta', component: CrearcuentaComponent },
  // producto tiene que ser un modelo no una pagina, no tengo idea de como redireccionarla para que se cargen los datos dle producto seleccionado
  { path: 'productoDescripcion', component: ProductoDescripcionComponent }, 
  { path: 'carrito', component: CarritoComponent }, 
  { path: 'perfil', component: PerfilComponent },  
  // tenes que explicarme esta linea
  { path: '**', pathMatch: 'full', redirectTo: 'login' },
  
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PerfilComponent,
    FooterComponent,
    CarrouselComponent,
    CarrouselCardsComponent,
    HomeComponent,
    ContactoComponent,
    CarrouselCards2Component,
    CarrouselCardsPromosComponent,
    LoginComponent,
    CrearcuentaComponent,
    ProductoDescripcionComponent,
    CarritoComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
