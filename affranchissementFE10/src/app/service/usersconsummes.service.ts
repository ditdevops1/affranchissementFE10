import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersconsummesService {

  userConsumApi = environment.api

  constructor(public  http:HttpClient) { }

  userInfo(username:string){

    return  this.http.get("http://localhost:8081/api/userinfos/"+username)
  }

  structureById(id): Observable<any>{

    return  this.http.get("http://localhost:8081/api/getStructureById/"+id)
  }





}
