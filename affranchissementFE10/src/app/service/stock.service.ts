import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  url = environment.baseUrl ;

  constructor(public  http:HttpClient) { }

  getStockCaisse(idCaisse:any , idTypeProduit:any): Observable<any> {
    return  this.http.get(this.url+"/stock/getStockCaisse/"+idCaisse+"/"+idTypeProduit)

  }


  getOneStock(id:any){
    return this.http.get(this.url+"/stock/getStock/"+id)
  }

  saveStock(stock:any){
    return this.http.post(this.url+"/stock/saveStock/",stock)
  }

  getAllStock(){
    return this.http.get(this.url+"/stock/getAllStocks/")
  }

  


}
