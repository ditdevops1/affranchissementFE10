import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {ApprouverstockretournService} from '../../service/approuverstockretourn.service';
import {StockService} from '../../service/stock.service';
import {LignestockService} from '../../service/lignestock.service';
import {StockretournService} from '../../service/stockretourn.service';
import {Gs_Stock, LignestockModule} from '../../interface/lignestock/lignestock.module';
import {ApprouverService} from '../../service/approuver.service';
import {LivraisonService} from '../../service/livraison.service';
import {formatDate} from '@angular/common';
import {Dg_caisse, Gs_produit, StockModule} from '../../interface/stock/stock.module';
import swal from "sweetalert2";
import {ContentieuxService} from '../../service/contentieux.service';
import {ContentieuxModule, Gs_livraison, Gs_StockRetourne} from '../../interface/contentieux/contentieux.module';
import {Gs_Contentieux, LignecontentieuxModule} from '../../interface/lignecontentieux/lignecontentieux.module';
import {LignecontentieuxService} from '../../service/lignecontentieux.service';

@Component({
  selector: 'app-detailsapprouverstockretourn',
  templateUrl: './detailsapprouverstockretourn.component.html',
  styleUrls: ['./detailsapprouverstockretourn.component.css']
})
export class DetailsapprouverstockretournComponent implements OnInit {



  // gstock :  Gs_Stock


  idStockRetourn ;
  approuverStockRetourn ;
  qteRecu ;
  idP ;
  valueChecked = []
  differencetotal=0 ;
  dataLigneCtieux ;
  dataCtieux ;
  qttotalstock=0 ;
  montantotalstock=0;
  stockRetournById ;
  setStockRetourn ;



  constructor( public activedRoute:ActivatedRoute,public approuverStockRetournService:ApprouverstockretournService,private stockRetournService:StockretournService,private router: Router , private stockService : StockService , private ligneStockService:LignestockService, private livraisonService:LivraisonService,private saveContentieux: ContentieuxService,private saveLigneContentieux:LignecontentieuxService) {
    this.idStockRetourn=activedRoute.snapshot.params['id'] ;

    console.log("je suis la madické")
    this.approuverStockRetournService.getDetailsApprouverStockRetourn(this.idStockRetourn).subscribe(

        data => {
          this.approuverStockRetourn = data

          console.log("theeee",data)

          console.log("Hello",this.approuverStockRetourn[0])
          console.log("le details des StockRetourn à approuver par la caisse : " , this.idStockRetourn)
        }
    )




  }





  selectQuantite(event) {

    this.qteRecu = event.target.value;

    console.log("The Quantite Reçu is here", this.qteRecu)

  }






  ngOnInit(){

  }

  setIdStatutStockRetourn(){
    this.stockRetournService.getStockRetournById(this.idStockRetourn).subscribe(data=>{

      this.stockRetournById=data
      console.log("stock retourne before setting",this.stockRetournById)
      this.stockRetournById.gs_statutStock["id"]=2
      this.stockRetournById.gs_statutStock["libelle"]="approuvee"

      this.stockRetournService.update(this.stockRetournById.id,this.stockRetournById).subscribe(data=>{
        this.setStockRetourn=data
        console.log("les stock retourn setter:",this.setStockRetourn)
      })


    })


  }




  retour(){

    return this.router.navigate(["/commande/approuver-retour"])


  }

  setCheckbox(event: any, value: any) {
    if (event.target.checked)
    {
      this.valueChecked.push(value)
      this.idP = value["idProduit"]

      console.log("Lidd du produit",value)

    }


  }



  approuver(p){


    console.log(p)

    let difference = this.qteRecu - p["quantite"]

    console.log("difference est : ",difference)

    const format = 'dd-MM-yyyy';
    const myDate = new Date();
    const locale = 'en-US';
    const formattedDate = formatDate(myDate, format, locale);

    console.log("The date forma" ,formattedDate)
   /* this.gstock= new Gs_Stock(29,new Dg_Caisse(2))
    this.gstock["quantite"] = p["quantite"]
    this.gstock["datemjour"] =  formattedDate

    this.gstock["montant"] = p["montant"]*/





    /*   this.stockService.saveStock(new StockModule(p["quantite"] ,formattedDate , p["montant"], new Gs_produit(2) , new Dg_caisse(2)) ).subscribe(
         data => {
           console.log("the stock stored is here",data)

           this.livraisonService.deleteLivraisonById(this.idLivraison).subscribe(data =>{

           })


         }
       )*/






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
      console.log("les id produit sont : ",this.valueChecked[i]["idProduit"])


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

       // ligne contentieux

      this.ligneStockService.saveLigneStock(new LignestockModule(this.valueChecked[i]["quantiteRecu"] ,formattedDate ,new Gs_produit(this.valueChecked[i]["idProduit"]),new Gs_Stock(30))).subscribe(
          data => {
            console.log("data of  ligne stock :",data)



          }
      )



    }

    console.log("la difference totale est: ", this.differencetotal)
    console.log("l'id stock retourn est: ", this.idStockRetourn)


    this.saveContentieux.saveContentieux(new ContentieuxModule(formattedDate,this.differencetotal,null,new Gs_livraison(1),new Gs_StockRetourne(this.idStockRetourn))).subscribe(
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



    console.log("La valeur de p est: ",p)

   // console.log("the neww ",new LignestockModule(p["quantite"] ,formattedDate ,new Gs_produit(1), this.gstock))


    this.setIdStatutStockRetourn()

    this.router.navigate(["/commande/approuver-retour"])
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
        this.livraisonService.deleteLivraisonById(this.idStockRetourn).subscribe(data =>{

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
