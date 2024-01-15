import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Commande} from '../model/Commande';
import {LigneContentieux} from '../model/LigneContentieux';

@Injectable({
  providedIn: 'root'
})
export class LignecontentieuxService {

  url = environment.baseUrl ;

  constructor(public  http:HttpClient) { }


  saveligneContentieux(lignecontentieux:any){
    return this.http.post(this.url+"/lignecontentieux/saveligneContentieux/",lignecontentieux)
  }


  getAllLigneContentieux(){
    return this.http.get(this.url+'/lignecontentieux/getAllLigneContentieux');
  }


  update(id,data:any) {
    console.log("hello",data)
    return this.http.put<LigneContentieux>(this.url+'/lignecontentieux/update/'+id, data);

  }

}
