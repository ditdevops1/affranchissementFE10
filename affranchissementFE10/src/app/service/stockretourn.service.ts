import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Commande} from '../model/Commande';
import {StockRetourn} from '../model/StockRetourn';

@Injectable({
  providedIn: 'root'
})
export class StockretournService {

  url = environment.baseUrl ;

  constructor(public  http:HttpClient) { }


  saveStockRetourn(stockretourn:any){
    return this.http.post(this.url+"/stockretourn/saveStockRetourn/",stockretourn)
  }

  // update stockRetourn

  update(id,data:any) {
    console.log("hello",data)
    return this.http.put<StockRetourn>(this.url+'/stockretourn/update/'+id, data);

  }





  // liste des StockRetourn adressées à une caisse(id caisse) qui recoit le stock retourné
  getStockRetournAdresseeCaisse(id): Observable<any> {
    return this.http.get(this.url + '/stockretourn/getStockRetournAdresseeCaisse/' + id);
  }


  getStockRetournById(id: any) {
    return this.http.get(this.url + "/stockretourn/getStockRetournById/" + id)

  }

}
