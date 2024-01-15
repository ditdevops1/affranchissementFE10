import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modaldetails',
  templateUrl: './modaldetails.component.html',
  styleUrls: ['./modaldetails.component.css']
})
export class ModaldetailsComponent implements OnInit {

  donnees ;

 
 
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {

    console.log("the item shared", data)

    this.donnees = data["dataKey"]

    console.log("the data of Aziziiz " , this.donnees)


   
 

     
  }

  ngOnInit(): void {

 
  }

}
