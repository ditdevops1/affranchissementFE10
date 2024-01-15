import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {StockretournService} from '../../service/stockretourn.service';

@Component({
  selector: 'app-approuverretour',
  templateUrl: './approuverretour.component.html',
  styleUrls: ['./approuverretour.component.css']
})
export class ApprouverretourComponent implements OnInit {

  stockretournCaisse ;

  constructor(public stockretournService:StockretournService,private router: Router) {

      this.getStockRetournCaisse();


  }

  ngOnInit(): void {
  }


  //Liste StockRetourn retournée à la caisse qui recoit le stock retourné
  getStockRetournCaisse(){
    this.stockretournService.getStockRetournAdresseeCaisse(2).subscribe(data=> {
      this.stockretournCaisse=data ;
      console.log("Stock retourn à la caisse : ", this.stockretournCaisse)
    })

  }



  // details StockRetourn à approuver par la caisse qui recoit le stock retourné en fonction de l'id Gs_StockRetourn
  detailsapprouverStockRetourn(id:any){
    // console.log("the id",id)
    this.router.navigate(['commande/details-approuverstockretourn/',id]);
  }

}
