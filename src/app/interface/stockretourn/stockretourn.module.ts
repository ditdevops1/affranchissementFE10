import {Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';





@Injectable({
  providedIn: 'root'
})
export class StockretournModule {

  date : any
  datevalide : any
  motif :any
  dg_caisserecep: Dg_caisse
  dg_caisseretour: Dg_caisse
  gs_statutStock:  Gs_StatutStock
  dg_user: Dg_User


  constructor(date:any,datevalide : any,motif :any,dg_caisserecep: Dg_caisse,dg_caisseretour: Dg_caisse,gs_statutStock:  Gs_StatutStock, dg_user: Dg_User){
    this.date=date;
    this.datevalide=datevalide;
    this.motif=motif;
    this.dg_caisserecep=dg_caisserecep;
    this.dg_caisseretour=dg_caisseretour;
    this.gs_statutStock=gs_statutStock ;
    this.dg_user=dg_user;

  }

}


export class  Gs_StatutStock{
  id: number
  constructor(id:number){
    this.id =  id
  }
}

export class  Dg_User{
  id: number
  constructor(id:number){
    this.id =  id
  }
}

export class  Dg_caisse{
  id: number
  constructor(id:number){
    this.id =  id
  }
}



