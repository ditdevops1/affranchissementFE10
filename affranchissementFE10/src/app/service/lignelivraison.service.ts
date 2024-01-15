import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LignelivraisonService {

  url=environment.baseUrl

  constructor(private http:HttpClient) { }


  saveLigneLivraison(ligneLivraison){

    return this.http.post(this.url+"/lignelivraison/saveLigneLivraison",ligneLivraison)
  }
}
