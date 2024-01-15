import {Injectable, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Dg_Caisse} from '../lignestock/lignestock.module';
import {Gs_produit} from '../stock/stock.module';


@Injectable({
  providedIn: 'root'
})


export class ContentieuxModule {

  datemjour : any
  differencetotal:any
  observation:any
  gs_livraison: Gs_livraison
  gs_stockRetourne: Gs_StockRetourne


  constructor(datemjour:any,differencetotal:any,observation:any,gs_livraison:Gs_livraison,gs_stockRetourne:Gs_StockRetourne){

        this.datemjour=datemjour
        this.differencetotal=differencetotal
        this.observation=observation
        this.gs_livraison=gs_livraison
        this.gs_stockRetourne=gs_stockRetourne


  }




}



export class  Gs_livraison{
  id: number
  constructor(id:number){
    this.id =  id
  }


}


export class Gs_StockRetourne {
    id:number
    constructor(id:number){
        this.id=id
    }

}




