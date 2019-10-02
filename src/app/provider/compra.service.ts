import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Compra } from './compra.model';

@Injectable({
  providedIn: 'root'
})
export class CompraService {
  formData:Compra 
  readonly rootURL = 'http://localhost:52998/api';
  list: Compra[];

  constructor(private http:HttpClient) { }

  PostCompra()
  {
    return this.http.post(this.rootURL+'/Compras',this.formData)
  }

  PutCompra()
  {
    return this.http.put(this.rootURL+'/Compras/'+this.formData.idVentaPk,this.formData)
  }
  DeleteCompra(id)
  {
    return this.http.delete(this.rootURL+'/Compras/'+id)
  }

  refreshLista()
  {
    this.http.get(this.rootURL+'/Compras')
    .toPromise()
    .then(res=>this.list = res as Compra[]);
  }
}
