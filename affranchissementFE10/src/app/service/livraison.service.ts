import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {Commande} from '../model/Commande';

@Injectable({
  providedIn: 'root'
})
export class LivraisonService {
  url=environment.baseUrl

  constructor(private http : HttpClient) { }



  saveLivraison(livraison){
    return this.http.post(this.url+'/livraison/saveLivraison', livraison);

  }

  getLivraison(id: any) {
    return this.http.get(this.url + "/livraison/getLivraisonById/" + id)

  }

  update(id,data:any) {
    console.log("hello",data)
    return this.http.put(this.url+'/livraison/update/'+id, data);

  }



  deleteLivraisonById(id:any){
    return this.http.delete(this.url+'/livraison/deleteLivraisonById/'+id);


  }
}
