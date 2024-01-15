import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApprouverService {
  url = environment.baseUrl


  constructor(public http: HttpClient) { }


  // liste des commande livree à une caisse(id caisse)
  getCommandeLivreeCaisse(id): Observable<any> {
    return this.http.get(this.url + '/livraison/getCommandeLivreeCaisse/' +id);
  }


  //details commande à appouver par la caisse demandeur en fonction de l'id du Gs_Livraison
  getDetailsApprouverCommande(id): Observable<any> {
    return this.http.get(this.url+'/lignelivraison/getApprouverCmdLivreeCaisse/'+id);
  }


  //  get Ligne Livraison  by id Livraison
  getLigneLivByIdLivraison(id): Observable<any> {
    return this.http.get(this.url+'/lignelivraison/getLigneLivByIdLivraison/'+id);
  }




}
