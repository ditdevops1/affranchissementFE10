import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Gs_produit} from '../stock/stock.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class LignecontentieuxModule {



  date : any
  difference:any
  gs_contentieux : Gs_Contentieux
  gs_produit : Gs_produit


  constructor(date:any,difference:any,gs_contentieux:any,gs_produit:any){

    this.date=date
    this.difference=difference
    this.gs_contentieux=gs_contentieux
    this.gs_produit=gs_produit


  }

}



export class  Gs_Contentieux{
  id: number
  constructor(id:number){
    this.id =  id
  }


}




