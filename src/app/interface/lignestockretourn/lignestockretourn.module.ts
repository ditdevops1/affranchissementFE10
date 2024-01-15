import {Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@Injectable({
  providedIn: 'root'
})
export class LignestockretournModule {
  quantite:any
  gs_stockRetourne: Gs_StockRetourne
  gs_produit : Gs_Produit


  constructor(quantite:any,gs_stockRetourne: Gs_StockRetourne,gs_produit : Gs_Produit){
    this.quantite=quantite;
    this.gs_stockRetourne=gs_stockRetourne;
    this.gs_produit=gs_produit ;

  }


}


export class  Gs_StockRetourne{
  id: number
  constructor(id:number){
    this.id =  id
  }
}

export class Gs_Produit {
  id: number
  constructor(id:number){
    this.id= id
  }
}
