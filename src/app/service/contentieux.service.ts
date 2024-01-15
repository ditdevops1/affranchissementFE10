import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentieuxService {

  url = environment.baseUrl ;

  constructor(public  http:HttpClient) { }


  saveContentieux(contentieux:any){
    return this.http.post(this.url+"/contentieux/saveContentieux/",contentieux)
  }



  // get Id Produit From Ligne Livraison By Id Livraison
  getIdProdFromLignLivByIdLiv(id): Observable<any> {
    return this.http.get(this.url + '/contentieux/getIdProdFromLignLivByIdLiv/' +id);
  }




}
