import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LignecommandeService {
  url=environment.baseUrl
  constructor(public http:HttpClient) { }


  save(lignecommande:any){
    return this.http.post(this.url+"/lignecommande/saveLigneCommande",lignecommande)
  }

  getCommandeEffectueeCaisse(id): Observable<any> {
    return this.http.get(this.url+'/lignecommande/getcommandeEffectueeCaisse/'+id);
  }

  // liste des commande adressées à une caisse(id caisse)
  getCommandeAdresseeCaisse(id): Observable<any> {
    return this.http.get(this.url+'/lignecommande/getCommandeAdresseeCaisse/'+id);
  }


  delete(id:any): Observable<any> {
    return this.http.delete(this.url+'/lignecommande/deleteLigneCommandeById/'+id);
  }

   


  //details commande à diligenter
  getDetailsCommande(id): Observable<any> {
    return this.http.get(this.url+'/lignecommande/getCmdCaisse/'+id);
  }


  // liste des commande adressées à une caisse(id caisse) en fonction de l'id de la commande
  getCommandeCaisse(idCaisse:any , idCommande:any): Observable<any> {
    return  this.http.get(this.url+"/lignecommande/getCommandeCaisse/"+idCaisse+"/"+idCommande)

  }




}
