import { Component, OnInit } from '@angular/core';
import {CaisseService} from '../../service/caisse.service';
import {formatDate} from '@angular/common';
import {LignestockService} from '../../service/lignestock.service';

@Component({
  selector: 'app-stockautrecaisse',
  templateUrl: './stockautrecaisse.component.html',
  styleUrls: ['./stockautrecaisse.component.css']
})
export class StockautrecaisseComponent implements OnInit {

  caissebystructure ;
  selectedCaisse ="";
  datepickerselected
  tmp :any ;
  toutstock;

  constructor(public servicecaisse: CaisseService,private ligneStockService:LignestockService) {
    this.getcaisseByStrcuture()
    console.log("la caisse choisie: " , this.selectedCaisse)


  }

  ngOnInit(): void {
  }


  onChangeEvent(event){
    //console.log(event);

    const format = 'dd-MM-yyyy';
    // const myDate = new Date();
    const locale = 'en-US';
    this.datepickerselected=event.value
    const formattedDate = formatDate( this.datepickerselected, format, locale);
    this.tmp = formattedDate ;
    console.log("la date choisi: "+formattedDate);
    return  formattedDate;
  }


  gettoutStock(){

    this.ligneStockService.gettoutStock(this.selectedCaisse,this.tmp).subscribe(data => {
      this.toutstock = data;

      console.log("tout le stock : "+this.toutstock)
    })


  }

  rechertoutstock(){

    this.gettoutStock()
    console.log("la caisse choisie: ",this.selectedCaisse)
  }


  getcaisseByStrcuture(){

    this.servicecaisse.getCaisseByStructure(1).subscribe(data => {
      this.caissebystructure = data;

      console.log("caisses by structure : "+this.caissebystructure)
    })


  }

}
