import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApprouverstockretournService {
  url = environment.baseUrl

  constructor(public http: HttpClient) { }



  //details StockRetourn à appouver par la caisse qui recoit le stock retourné en fonction de l'id du Gs_StockRetourn
  getDetailsApprouverStockRetourn(id): Observable<any> {
    return this.http.get(this.url+'/lignestockretourn/getApprouverStockRetournCaisse/'+id);
  }
}
