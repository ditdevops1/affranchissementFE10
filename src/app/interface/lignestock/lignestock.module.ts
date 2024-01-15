import {Injectable, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Gs_produit} from '../stock/stock.module';




@Injectable({
  providedIn: 'root'
})

export class LignestockModule {

  quantite:any
  date : any
  gs_produit : Gs_produit
  gs_stock: Gs_Stock

  constructor( quantite:any ,date: any ,gs_produit : Gs_produit ,gs_stock: Gs_Stock){
    this.quantite = quantite
    this.date = date
    this.gs_produit = gs_produit
    this.gs_stock= gs_stock

  }


}


export class Gs_Stock {
  id: number
  constructor(id:number){
    this.id= id
  }
}


export class Dg_Caisse {
  id: number
  constructor(id:number){
    this.id= id

  }
}


