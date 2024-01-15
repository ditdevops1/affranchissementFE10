import { Component, OnInit } from '@angular/core';
import { LignecommandeService } from '../../service/lignecommande.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { LivraisonModule } from 'src/app/interface/livraison/livraison.module';
import { CommandeService } from 'src/app/service/commande.service';
import {  Gs_livraison, Gs_produit, LignelivraisonModule } from 'src/app/interface/lignelivraison/lignelivraison.module';
import { formatDate } from '@angular/common';
import { LivraisonService } from 'src/app/service/livraison.service';
import { LignelivraisonService } from 'src/app/service/lignelivraison.service';


@Component({
  selector: 'app-detailscommande',
  templateUrl: './detailscommande.component.html',
  styleUrls: ['./detailscommande.component.css']
})
export class DetailscommandeComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourFormGroup: FormGroup;
  form: FormGroup;

  livraison: LivraisonModule = new LivraisonModule()

   
  paniers: Array<LignelivraisonModule> = []
  paniersLignLiv:  Array<LignelivraisonModule> = []

  lignecommandes;
  idCommande;
  commandees;
  commandeRetoure
  PP;
  Qte;
  id;
  idP ;
  QteCommande ;

  livreRetour ;

  observation ;
  ligneLiv : LignelivraisonModule
  commandeById ;
  setCommande ;

  boo


  constructor(private router: Router, private _formBuilder: FormBuilder, public activedRoute: ActivatedRoute, public ligneService: LignecommandeService,
    private commandeService: CommandeService, private livraisonService: LivraisonService , private ligneLivraisonService: LignelivraisonService
  ) {

    this.idCommande = activedRoute.snapshot.params['id'];



   // console.log("thhhhhe iddd", this.idCommande)
    //  console.log("Hz",this.idCommande)




    this.ligneService.getDetailsCommande(this.idCommande).subscribe(
      data => {
        this.commandees = data


       // console.log("Je suis la encore by",this.commandees)



      }
    )

    this.commandeService.getCommande(this.idCommande).subscribe(
      data => {
      //  console.log("Soradi",data)
      }
    )


  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.fourFormGroup = this._formBuilder.group({
      fourCtrl: ['', Validators.required]
    });
  }


  setIdStatutcmd(){

    this.commandeService.getCommande(this.idCommande).subscribe(
        data => {
          this.commandeById = data
          this.commandeById.gs_statusCommande["id"]=2
          this.commandeById.gs_statusCommande["status"]="livree"

          this.commandeService.update(this.idCommande,this.commandeById).subscribe(data=>{
            this.setCommande=data
        //    console.log("objet commande set: ",this.setCommande)


          })




        //  console.log("les commande setter: ",this.commandeById)



        }
    )


  }


  commander() {

  }

  cancelCommande() {

    this.router.navigate(["commande/diligenter-commande"])

  }

  selectQuantite(event) {

    this.Qte = event.target.value;

   // console.log("The Quantite is here", this.Qte)

  }

  selectProduit(event,l) {

   // this.paniers.push(event.target.value)

    this.paniers.forEach(ele => {
      console.log(ele)
    })
  }

  AjouterLivraison() {

    const format = 'dd-MM-yyyy';
    const myDate = new Date();
    const locale = 'en-US';
    const formattedDate = formatDate(myDate, format, locale);
    this.livraison["observation"] = this.observation
    this.livraison["datelivraison"] = formattedDate
    this.livraison["gs_commande"]["id"] = Number(this.idCommande)


    this.livraisonService.saveLivraison(this.livraison).subscribe(
      data => {
        this.PP=data["id"]




        this.livreRetour =  data
        this.paniersLignLiv.push(new LignelivraisonModule(this.QteCommande  , this.Qte , new Gs_livraison(data["id"]) , new Gs_produit(this.idP) ))



       console.log("Lobject",this.paniersLignLiv)

        for (var i =0 ; i<this.paniers.length ;i++ ) {

          console.log("one element",this.paniers[i])



          this.ligneLivraisonService.saveLigneLivraison(new LignelivraisonModule(this.paniers[i]["quantiteCommande"]  , this.paniers[i]["quantiteLivraison"], new Gs_livraison(data["id"]) , new Gs_produit(this.paniers[i]["idProduit"]) )).subscribe(

              data =>{
                console.log("L'object ligne Livraison",this.paniersLignLiv)


              }
          )

        }


      }


    )
    console.log("liste ligne Liv",this.paniersLignLiv)
     // this.ligneLivraisonService.saveLigneLivraison(this.paniersLignLiv)

    this.setIdStatutcmd() ;

    this.router.navigate(["/commande/diligenter-commande"])



  }


  setCheckbox(event: any, value: any) {
    if (event.target.checked)
      {
        console.log("YES",this.PP)
        this.idP = value["idProduit"]
        this.QteCommande = value["quantiteCommande"]

     //   console.log("je suis dans le push " , value)
       console.log("The value",value)

      this.paniers.push(value)
      }
    else{
     this.paniers= this.paniers.filter(val => val != value);
    }
      
  //  console.log("Madicke",this.paniers)
  //  console.log("benaz ",this.paniers[0])
    }


  ligneLivePasser(){
   console.log("la liste avant de passer une commande",this.paniersLignLiv)

 
    
  }

   




}
