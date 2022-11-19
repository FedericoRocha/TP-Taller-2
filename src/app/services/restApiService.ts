import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Zapatilla } from '../interfaces/zapatilla';
import { ListBucketAnalyticsConfigurationsCommand } from '@aws-sdk/client-s3';
import { Talle } from '../interfaces/Talle';
import { Imagenes } from '../interfaces/Imagenes';
import { Marca } from '../interfaces/Marca';
import { Material } from '../interfaces/Material';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Tipo } from '../interfaces/Tipo';
import { Color } from '../interfaces/Color';
import { Venta } from 'src/app/interfaces/Venta';
import { Resumen } from 'src/app/interfaces/Resumen';
import { UltimoNumero } from '../interfaces/UltimoNumero';



//Decorador que marca una clase como disponible para ser proporcionada e inyectada como dependencia//
@Injectable({
    providedIn: 'root',
})

export class RestApiService {

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    apiURL = 'http://localhost:3000';


    //Http client: Realiza solicitudes HTTP.
    //Este servicio está disponible como una clase inyectable, con métodos para realizar  solicitudes HTTP. Cada método de solicitud tiene varias firmas y el tipo de devolución varía según la firma que se llama (principalmente los valores de observe y responseType)

    constructor(private http: HttpClient) { }

    //este método va a retornar un Observable q va a ser la rta de la busqueda
    buscarZapatillas(valorBusqueda: string | undefined): Observable<any> {

        if (valorBusqueda != "" && valorBusqueda != undefined) {

            //hace una llamada get a esa url (a la api, Node) y retorna la respuesta al /componenteBuscarzapatilla y Buscarzapatilla lo asigna a la propiedad productos usada ///en el front
            return this.http.get<any>(this.apiURL + '/productos/getAll?zapatilla=' + valorBusqueda);
        }

        return this.http
            .get<any>(this.apiURL + '/productos/getAll');
    }


    agregarProductoNuevo(producto: any): Observable<any> {
        console.log(producto);
        return this.http.post<any>(this.apiURL + '/productos/createProducto', producto, this.httpOptions);
    }

    BuscardorZapatillasFiltro(valorBusqueda: any):Observable<Zapatilla[]>{
        return this.http.get<Zapatilla[]>(this.apiURL + '/productos/getProductosForBuscador/'+valorBusqueda, this.httpOptions);
    }

    ZapatillaPorId(idproducto:number): Observable<Zapatilla[]>{
       return this.http.get<Zapatilla[]>(this.apiURL + '/productos/getZapatillaporId/'+idproducto,this.httpOptions);
    }


    ZapatillaOferta(): Observable<Zapatilla[]>{
        return this.http.get<Zapatilla[]>(this.apiURL + '/productos/getOnSale', this.httpOptions);
    }

    ZapatillaMasVendida():Observable<Zapatilla[]>{
        return this.http.get<Zapatilla[]>(this.apiURL + '/productos/getProductosMasVendidos', this.httpOptions)
    }



    ImagenesPorId(idproducto:number): Observable<Imagenes[]>{
       return this.http.get<Imagenes[]>(this.apiURL + '/productos/getImagenesPorId/'+idproducto , this.httpOptions);
    }

    TallesPorId(idproducto:number): Observable<Talle[]>{
       return this.http.get<Talle[]>(this.apiURL + '/productos/getTallesporId/'+idproducto , this.httpOptions);
    }

    TodosLosProductos(): Observable<Zapatilla[]>{
        return this.http.get<Zapatilla[]>(this.apiURL + '/productos/getAllTheProducts/', this.httpOptions);
     }

     GetZapatillaForMarca(marca: number): Observable<Zapatilla[]>{
        return this.http.get<Zapatilla[]>(this.apiURL + '/productos/getProductsForMarca/'+marca, this.httpOptions);
     }
    
     GetZapatillaForMatirial(material: number): Observable<Zapatilla[]>{
        return this.http.get<Zapatilla[]>(this.apiURL + '/productos/getProductsForMatirial/'+material, this.httpOptions);
     }

     GetZapatillaForType(tipo: number): Observable<Zapatilla[]>{
        return this.http.get<Zapatilla[]>(this.apiURL + '/productos/getProductsForType/'+tipo, this.httpOptions);
     }

     GetZapatillaForTalle(talle: number): Observable<Zapatilla[]>{
        return this.http.get<Zapatilla[]>(this.apiURL + '/productos/getProductsForTalle/'+talle, this.httpOptions);
     }

     GetZapatillaForColor(color: number): Observable<Zapatilla[]>{
        return this.http.get<Zapatilla[]>(this.apiURL + '/productos/getProductsForColor/'+color, this.httpOptions);
     }

     GetAllMarcas():Observable<Marca[]>{
        return this.http.get<Marca[]>(this.apiURL + '/productos/getAllMarcas/',this.httpOptions);
     }

     GetAllMatirials():Observable<Material[]>{
        return this.http.get<Material[]>(this.apiURL + '/productos/getAllMatirials/',this.httpOptions);
     }

     GetAllTalles():Observable<Talle[]>{
        return this.http.get<Talle[]>(this.apiURL + '/productos/getAllTalles/', this.httpOptions);
     }

     GetAllTipos():Observable<Tipo[]>{
        return this.http.get<Tipo[]>(this.apiURL + '/productos/getAllTipos/', this.httpOptions);
     }

     GetAllColores():Observable<Color[]>{
        return this.http.get<Color[]>(this.apiURL + '/productos/getAllColors/', this.httpOptions);
     }

     async GetUltimaVenta():Promise<Observable<UltimoNumero[]>>{
      return await this.http.get<UltimoNumero[]>(this.apiURL + '/productos/getIDUtimaVenta', this.httpOptions)
     }

     async GuardarVenta(usuario: string,total:number){
      return await this.http.put<any>(this.apiURL + '/productos/PutNuevaCompra/'+usuario+'/'+total,this.httpOptions);
     }

     async GuardarResumen(idVenta: number,idProducto:number,talle:number,cantidad:number){
      return await this.http.put<number>(this.apiURL + '/productos/PutResumenVenta/'+idVenta+'/'+idProducto+'/'+talle+'/'+cantidad,this.httpOptions)
     }
}