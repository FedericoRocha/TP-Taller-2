import { DateTime } from "aws-sdk/clients/devicefarm";

export interface Venta{
    id:number,
    usuario:string,
    fecha: DateTime
}