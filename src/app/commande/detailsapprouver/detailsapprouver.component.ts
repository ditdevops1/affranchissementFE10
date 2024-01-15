import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {ApprouverService} from '../../service/approuver.service';
import { formatDate } from '@angular/common';
import { Dg_caisse, Gs_produit, StockModule } from 'src/app/interface/stock/stock.module';
import { StockService } from 'src/app/service/stock.service';
import { LivraisonService } from 'src/app/service/livraison.service';
import swal from 'sweetalert2';
import {LignestockService} from '../../service/lignestock.service';
import {Dg_Caisse, Gs_Stock, LignestockModule} from '../../interface/lignestock/lignestock.module';
import {ContentieuxService} from '../../service/contentieux.service';
import {ContentieuxModule, Gs_livraison, Gs_StockRetourne} from '../../interface/contentieux/contentieux.module';
import {LignecontentieuxService} from '../../service/lignecontentieux.service';
import {Gs_Contentieux, LignecontentieuxModule} from '../../interface/lignecontentieux/lignecontentieux.module';
import {CommandeService} from '../../service/commande.service';



@Component({
  selector: 'app-detailsapprouver',
  templateUrl: './detailsapprouver.component.html',
  styleUrls: ['./detailsapprouver.component.css']
})
export class DetailsapprouverComponent implements OnInit {


  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup : FormGroup ;
  fourFormGroup : FormGroup ;
  form : FormGroup ;
  idP ;
  valueChecked = []

  // gstock :  Gs_Stock

  idLivraison ;
  approuvercommandes ;

    qteRecu ;
    differencetotal=0 ;
    dataLigneCtieux ;
    dataCtieux ;
    livraisonById ;
    setLivraison ;
    setCommande ;
    setLigneContentieux ;
    idLigneContentieux ;
    qttotalstock=0 ;
    montantotalstock=0;





    constructor(private _formBuilder: FormBuilder,public activedRoute:ActivatedRoute,public approuverCmdService:ApprouverService ,
    private router: Router , private stockService : StockService ,private commandeService: CommandeService,private ligneStockService:LignestockService, private livraisonService:LivraisonService, private saveContentieux: ContentieuxService, private saveLigneContentieux: LignecontentieuxService) {
    this.idLivraison=activedRoute.snapshot.params['id'] ;




    this.approuverCmdService.getDetailsApprouverCommande(this.idLivraison).subscribe(

        data => {
          this.approuvercommandes = data

          console.log("l'object",this.approuvercommandes)

         // console.log("Hello",this.approuvercommandes[0])
        //  console.log("le details des commandes à approuver par la caisse demandeur: " , this.idLivraison)
        }
    )



  }



    selectQuantite(event) {

        this.qteRecu = event.target.value;

         console.log("The Quantite Reçu is here", this.qteRecu)

    }






  ngOnInit(){

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



    setIdStatutCmdLivree(){

        this.livraisonService.getLivraison(this.idLivraison).subscribe(
            data => {
                this.livraisonById = data
                console.log("livraison before setting",this.livraisonById)
                this.livraisonById.gs_commande.gs_statusCommande["id"]=3
                this.livraisonById.gs_commande.gs_statusCommande["status"]="approuvee"

               this.commandeService.update(this.livraisonById.gs_commande.id,this.livraisonById.gs_commande).subscribe(data=>{
                    this.setCommande=data
                    console.log("les commandes setter: ",this.setCommande)


                })




               //  console.log("les livraison setter: ",this.livraisonById)



            }
        )


    }



    // update ligneContentieux

    setLigneCtieux(){

        /*this.saveLigneContentieux.update().subscribe(data=>{

            this.setLigneContentieux=data
            console.log("updated ligne contentieux",this.setLigneContentieux)
        })*/

        console.log("ligne contieux objetc",this.dataLigneCtieux)





    }






    approuver(p){

        console.log('valuechecked ', this.valueChecked)

      console.log("p est : ",p)



     // console.log("difference est : ",difference)
     console.log("quantite recu : ",this.qteRecu)
    // console.log("quantite saisi : ",p["quantite"])

   // console.log(p)

    const format = 'dd-MM-yyyy';
    const myDate = new Date();
    const locale = 'en-US';
    const formattedDate = formatDate(myDate, format, locale);

    // console.log("The date forma" ,formattedDate)
   /* this.gstock= new Gs_Stock(4,new Dg_Caisse(2))
      this.gstock["quantite"] = p["quantite"]
      this.gstock["datemjour"] =  formattedDate

      this.gstock["montant"] = p["montant"]*/




     // new Gs_produit(p["idProduit"])
     var listedifference=[] ;
     var listeqttoalstock=[] ;
     var listemontantstock=[] ;

         for (var i= 0; i<this.valueChecked.length ;i++){
             let valrecu = this.valueChecked[i]["quantite"]
              console.log("la quantite commandee est: ", valrecu)
              console.log("la quantite saisie est: ", this.valueChecked[i]["quantiteRecu"])

             let   dif = valrecu - this.valueChecked[i]["quantiteRecu"]
             console.log("the back",dif)


             this.saveLigneContentieux.saveligneContentieux(new LignecontentieuxModule(formattedDate,dif, new  Gs_Contentieux(1), new Gs_produit(this.valueChecked[i]["idProduit"]))).subscribe(data=>{

                 this.dataLigneCtieux=data
                 console.log("save ligne contentieux:", this.dataLigneCtieux)
             })


             //  differencetotal += data[i] ;
             listedifference.push(dif);
             listeqttoalstock.push(this.valueChecked[i]["quantiteRecu"]);
             listemontantstock.push(this.valueChecked[i]["quantiteRecu"]*this.valueChecked[i]["prixunitaire"])

             this.differencetotal+=listedifference[i] ;
             this.qttotalstock+=listeqttoalstock[i];
             this.montantotalstock+=listemontantstock[i];

             console.log("quantite total stock",this.qttotalstock);
             console.log("montant total stock",this.montantotalstock);


             // console.log("la difference totale est: ", this.differencetotal)


             this.ligneStockService.saveLigneStock(new LignestockModule(this.valueChecked[i]["quantiteRecu"] ,formattedDate ,new Gs_produit(this.valueChecked[i]["idProduit"]),new Gs_Stock(29))).subscribe(
                 data => {
                     console.log("data of  ligne stock :",data)
                 }
             )

         }

         console.log("la difference totale est: ", this.differencetotal)


        this.saveContentieux.saveContentieux(new ContentieuxModule(formattedDate,this.differencetotal,null,new Gs_livraison(this.idLivraison),new Gs_StockRetourne(1))).subscribe(
            data => {
                this.dataCtieux=data
                console.log("data save contentieux",this.dataCtieux)



            }
        )

        this.stockService.saveStock(new StockModule(formattedDate,this.qttotalstock ,this.montantotalstock, new Dg_caisse(2)) ).subscribe(
            data => {
                console.log("data of stock:",data)

                /*this.livraisonService.deleteLivraisonById(this.idLivraison).subscribe(data =>{

                })*/


            }
        )


       // console.log("data of contentieux",this.dataCtieux)

      this.setLigneCtieux() ;





       this.setIdStatutCmdLivree() ;

      this.router.navigate(["/commande/approuver-commande"])
    }




  retour(){
    return this.router.navigate(["/commande/approuver-commande"])
  }

    setCheckbox(event: any, value: any) {
        if (event.target.checked)
        {
            this.valueChecked.push(value)
            this.idP = value["idProduit"]

            console.log("Lidd du produit",value)

        }


    }




  rejetterLivraison() {
    swal.fire({
       title: 'Etes vous sure ?',
       text: "Vous voulez Rejetter cette commande!",
       icon: 'warning',
       showCancelButton: true,
       customClass: {
           confirmButton: 'btn btn-success',
           cancelButton: 'btn btn-danger',
       },
       confirmButtonText: 'Yes, delete it!',
       buttonsStyling: false
   }).then((result) => {
       if (result.value) { 
        this.livraisonService.deleteLivraisonById(this.idLivraison).subscribe(data =>{

        })

 
           swal.fire(
               {
                   title: 'Rejetté !',
                   text: 'Commande Rejetter.',
                   icon: 'success',
                   customClass: {
                       confirmButton: "btn btn-success",
                   },
                   buttonsStyling: false
               }
           )
       }
   })


   
   this.router.navigate(["/dashboard"])

}

  }


