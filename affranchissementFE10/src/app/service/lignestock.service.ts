import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LignestockService {

  url = environment.baseUrl ;

  constructor(public  http:HttpClient) { }

  getStockCaisse(idCaisse:any , idTypeProduit:any): Observable<any> {
    return  this.http.get(this.url+"/lignestock/getStockCaisse/"+idCaisse+"/"+idTypeProduit)

  }



  getstockparTypeProduit(idCaisse:any , idTypeProduit:any, datepicker:any): Observable<any> {
    return  this.http.get(this.url+"/lignestock/stockparTypeProduit/"+idCaisse+"/"+idTypeProduit+"/"+datepicker)

  }


  gettoutStock(idCaisse:any , datepicker:any): Observable<any> {
    return  this.http.get(this.url+"/lignestock/toutStock/"+idCaisse+"/"+datepicker)

  }


  getOneStock(id:any){
    return this.http.get(this.url+"/lignestock/getStock/"+id)
  }

  saveLigneStock(stock:any){
    return this.http.post(this.url+"/lignestock/saveStock/",stock)
  }

  getAllStock(){
    return this.http.get(this.url+"/lignestock/getAllStocks/")
  }




}
