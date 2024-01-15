import { Component, OnInit } from '@angular/core';
import {LignecommandeService} from '../../service/lignecommande.service';
import {CommandeService} from '../../service/commande.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-diligentercommande',
  templateUrl: './diligentercommande.component.html',
  styleUrls: ['./diligentercommande.component.css']
})
export class DiligentercommandeComponent implements OnInit {
  commandeAdresseeCaisse ;

  constructor(public commandeService:CommandeService,private router: Router) {

    this.getCommandeAdresseeCaisse()
  }

  ngOnInit() {
  }

  //Liste des  commandes adressées à la caisse alloueur
  getCommandeAdresseeCaisse(){
    this.commandeService.getCommandeAdresseeCaisse(2).subscribe(data=> {
      this.commandeAdresseeCaisse=data ;
      console.log("commandes adressées à la caisse alloueur", this.commandeAdresseeCaisse)
    })

  }

  // details commandes
  details(id:any){
    // console.log("the id",id)
    this.router.navigate(['commande/details-commande/',id]);
  }

}
