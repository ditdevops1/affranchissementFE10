import { Component, OnInit } from '@angular/core';
import {ApprouverService} from '../../service/approuver.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-approuvercommande',
  templateUrl: './approuvercommande.component.html',
  styleUrls: ['./approuvercommande.component.css']
})
export class ApprouvercommandeComponent implements OnInit {

  commandeLivreeCaisse;
  notif:false ;

  constructor(public approuverService:ApprouverService,private router: Router) {

     this.getCommandeLivreeCaisse();
  }



  ngOnInit(): void {
  }


  //Liste des  commandes Livree à la caisse demandeur
  getCommandeLivreeCaisse(){
    this.approuverService.getCommandeLivreeCaisse(1).subscribe(data=> {
      this.commandeLivreeCaisse=data ;
      console.log("commandes livrées à la caisse demandeur", this.commandeLivreeCaisse)
    })

  }


  // details commande à approuver par la caisse demandeur en fonction de l'id Gs_Livraison
  detailsapprouvercmd(id:any){
    // console.log("the id",id)
    this.router.navigate(['commande/details-approuver/',id]);
  }

}
