import {Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@Injectable({
  providedIn: 'root'
})
export class StockModule {

    datemjour : any
    quantite:any
    montant :any
    dg_caisse: Dg_caisse

  constructor(datemjour : any ,quantite:any ,montant :any ,dg_caisse: Dg_caisse){
      this.datemjour =  datemjour
      this.quantite = quantite
      this.montant = montant
      this.dg_caisse= dg_caisse

  }

}

export class  Dg_caisse{
  id: number
  constructor(id:number){
    this.id =  id
  }
}
export class Gs_produit {
  id: number
  constructor(id:number){
    this.id= id
  }
 }
