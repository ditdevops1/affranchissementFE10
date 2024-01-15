import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';




@Injectable({
  providedIn: 'root'
})
export class TypecaisseService {

  url = environment.baseUrl

  constructor(public  http:HttpClient) { }


  getAll(){
    // return this.http.get(this.url+'/dg_TypeCaisse');
    return this.http.get(this.url+'/typecaisse/getAll');
  }



}
