import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CaisseService {
  url = environment.baseUrl

  constructor(public  http:HttpClient) { }

  getAllCaisses(){
    return this.http.get(this.url+'/caisse/getAllCaisses');
  }


  getCaisseByStructure(idStructure:any): Observable<any> {
    return  this.http.get(this.url+"/caisse/getCaisseByStructure/"+idStructure)

  }

}
