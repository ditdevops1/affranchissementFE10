import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import {Produit} from '../model/Produit';
import {Commande} from '../model/Commande';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  url = environment.baseUrl

  constructor(public http: HttpClient) { }


      save(commande: any){
        return this.http.post<any>(this.url + "/commande/saveCommande", commande)
     
  }


    getCommande(id: any) {
    return this.http.get(this.url + "/commande/getCommandeById/" + id)

  }


  update(id,data:any) {
    console.log("hello",data)
    return this.http.put<Commande>(this.url+'/commande/update/'+id, data);

  }


  // liste des commande adressées à une caisse(id caisse)
  getCommandeAdresseeCaisse(id): Observable<any> {
    return this.http.get(this.url + '/commande/getCommandeAdresseeCaisse/' + id);
  }

  saveCommande(commande): Observable<any> {

    return this.http.post(this.url + "/commande/saveCommande", commande)
      .pipe(
        map((result: any) => result.json())
      );
  }





}
