import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import * as _ from 'lodash';
import {filter} from 'rxjs/operators';
import { map } from 'rxjs/operators';
import {Produit} from '../model/Produit';


@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  url=environment.baseUrl
  constructor(private http: HttpClient) { }


  getAll(){
    return this.http.get(this.url+'/produit/getAllProduits');
  }

  get(id): Observable<any> {
    return this.http.get(this.url+'/produit/getProduitById/'+id);
  }

  create(data:any): Observable<any> {
    return this.http.post(this.url+'/produit/saveProduit', data);

  }

  /*update(id, data:any): Observable<any> {
    return this.http.put(this.url+'/produit/updateProduit/'+id, data);
  }*/

    update(id,data:any) {
        console.log("hello",data)
        return this.http.put<Produit>(this.url+'/produit/updateProduit/'+id, data);

    }


  delete(id:any): Observable<any> {
    return this.http.delete(this.url+'/produit/deleteProduitById/'+id);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(this.url);
  }

  findByTitle(title): Observable<any> {
    return this.http.get(this.url+'?title=${title}');
  }


  selectById(id:any){
    return this.http.get(this.url+"/produit/getSelectedById/"+id)
  }

  getProduit(id:any){
    return this.http.get(this.url+"/produit/getProduitById/"+id)
  }



  getProduits(motCle:string ,page:number ,size:number){

    return this.http.get(this.url+"/produit/chercherProduits?mc="+motCle+"&size="+size+"&page="+page)



  }


}
