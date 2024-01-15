import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class TypeproduitService {

  url = environment.baseUrl

  constructor(public  http:HttpClient) { }


  getAllTypeProduit(){
    return this.http.get(this.url+'/typeproduit/getAllTypeProduits');
  }

  getTypeProduit(id:any) : Observable<Object>{
    return this.http.get(this.url+"/typeproduit/getTypeProduit/"+id)
  }
}
