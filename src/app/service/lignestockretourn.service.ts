import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LignestockretournService {

  url = environment.baseUrl ;

  constructor(public  http:HttpClient) { }


  saveLigneStockRetourn(lignestockretourn:any){
    return this.http.post(this.url+"/lignestockretourn/saveLigneStockRetourn/",lignestockretourn)
  }
}
