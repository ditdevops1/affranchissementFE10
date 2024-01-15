import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LignecommandeModule {



  quantite: number
  gs_commande: any
  gs_produit: any

  constructor(quantite: number, gs_commande: any, gs_produit: any) {

    this.quantite = quantite
    this.gs_commande = gs_commande
    this.gs_produit = gs_produit
  }



}
