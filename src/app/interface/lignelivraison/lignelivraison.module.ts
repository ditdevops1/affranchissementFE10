import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Injectable({
  providedIn: 'root'
})

export class  LignelivraisonModule {

  quantitecommande: number
  quantiterecu: number
  gs_livraison : Gs_livraison
  gs_produit : Gs_produit

  constructor(quantitecommande: number, quantiterecu: number ,gs_livraison : Gs_livraison ,gs_produit : Gs_produit){
    this.quantitecommande = quantitecommande
    this.quantiterecu =  quantiterecu
    this.gs_livraison = gs_livraison
    this.gs_produit= gs_produit

  }

}

export class  Gs_livraison{
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







