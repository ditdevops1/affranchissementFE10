import { Component, OnInit } from '@angular/core';
import {TypeproduitService} from '../../service/typeproduit.service';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import {formatDate} from '@angular/common';
import {LignestockService} from '../../service/lignestock.service';



declare const require: any;

declare const $: any;

@Component({
  selector: 'app-stockreceveur',
  templateUrl: './stockreceveur.component.html',
  styleUrls: ['./stockreceveur.component.css']
})
export class StockreceveurComponent implements OnInit {

  opt1 :any ;
  opt2 :any ;

  selected ="aa";
  select =""
  p ;
  form: FormGroup;

  datatypeproduit

  datepickerselected ;
  stockpartypeproduit;
  toutstock;
  tmp :any ;





  constructor(public serviceTypeProduit: TypeproduitService,private ligneStockService:LignestockService) {
    this.getTypesProduit()
    console.log("Azzzz", this.choix(this.select) )
    console.log("lid choisi" , this.selected)



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


  getstockparTypeProduit(){

    this.ligneStockService.getstockparTypeProduit(1,this.selected,this.tmp).subscribe(data => {
      this.stockpartypeproduit = data;

      console.log("le stock par type produit: "+this.stockpartypeproduit)
    })


  }


  gettoutStock(){

    this.ligneStockService.gettoutStock(1,this.tmp).subscribe(data => {
      this.toutstock = data;

      console.log("tout le stock : "+this.toutstock)
    })


  }








  choix(select){
    if (select=="option1")
      return this.opt1 ==true
    if (select ==this.opt2)
      return  this.opt2=true
  }



  recher(){
    this.getstockparTypeProduit()

    console.log("je suis aziz",this.tmp)


    console.log("Je suis la ",this.selected)
    console.log("date picker: ",this.datepickerselected);
  }

  rechertoutstock(){

    this.gettoutStock()
  }

  touch: boolean;


  ngOnInit() {}
  myFunc(val: any) {
    // code here
  }

  getTypesProduit() {
    this.serviceTypeProduit.getAllTypeProduit().subscribe(data => {
      this.datatypeproduit = data;
      console.log(this.datatypeproduit)
    })
  }







}
