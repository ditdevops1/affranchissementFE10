import { Component, OnInit } from '@angular/core';



import { MatDialog } from '@angular/material/dialog';
import { ModaldetailsComponent } from '../modaldetails/modaldetails.component';
import {LignestockService} from '../../service/lignestock.service';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {CommandeModule} from '../../interface/commande/commande.module';
import {LignecommandeModule} from '../../interface/lignecommande/lignecommande.module';
import {Subject} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {ProduitService} from '../../service/produit.service';
import {TypecaisseService} from '../../service/typecaisse.service';
import {TypeproduitService} from '../../service/typeproduit.service';
import {CaisseService} from '../../service/caisse.service';
import {CommandeService} from '../../service/commande.service';
import {LignecommandeService} from '../../service/lignecommande.service';
import {formatDate} from '@angular/common';
import {StockModule} from '../../interface/stock/stock.module';
import {Dg_caisse, Dg_User, Gs_StatutStock, StockretournModule} from '../../interface/stockretourn/stockretourn.module';
import {StockretournService} from '../../service/stockretourn.service';
import {Gs_Produit, Gs_StockRetourne, LignestockretournModule} from '../../interface/lignestockretourn/lignestockretourn.module';
import {LignestockretournService} from '../../service/lignestockretourn.service';

@Component({
  selector: 'app-retourstock',
  templateUrl: './retourstock.component.html',
  styleUrls: ['./retourstock.component.css']
})
export class RetourstockComponent implements OnInit {



  isShown = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourFormGroup: FormGroup;
  form: FormGroup;
  isEditable = false;
  disableSelect = new FormControl(false);
  typePSelected;
  idTypeSelected;
  donneesCommandes;
  idCaisse;
  donnes;
  myCommannde;
  datatypeproduit;
  datacaisse;
  qtDispo;
  stockretourn: StockretournModule= new StockretournModule(new Date(),new Date(),"retourne",new Dg_caisse(2),new Dg_caisse(1),new Gs_StatutStock(1),new Dg_User(1))
  lignestockretourn: LignestockretournModule

  commandeRetourne;
  ligneCommande: LignecommandeModule
  idCommade = 0;
  idStockRetourn = 0;
  retourne;
  commanded;
  commandeEffectueeCaisse;
  ProduitSelectionned:Gs_Produit ;
  IDD;
  idP ;
  qt = 1;
  panierStored;
  montant = 0;
  mm

  montantSortie = 0;

  selectedItemsList = [];
  idCheckedID;

  dataModal ;

  panier: Array<LignestockretournModule> = []

  _commandeSubject = new Subject()
  user: Object;


  currentItem = 'Television';




  get commandeSubject() {
    return this._commandeSubject
  }


  constructor(private router :Router , private route: ActivatedRoute, private _formBuilder: FormBuilder, public service: ProduitService, public serviceTypeCaisse: TypecaisseService, public serviceTypeProduit: TypeproduitService,
              public servicecaisse: CaisseService,public stockretournService: StockretournService, public stockService: LignestockService, public commandeService: CommandeService, public ligneService: LignecommandeService ,
              public dialog : MatDialog,public ligneStockRetournService: LignestockretournService) {

    this.getTypesProduit()
    this.getTypesCaisse()
    this.getCaisse()
    this._commandeSubject.subscribe(
        (data) => {
          this.getcommandeEffectueeCaisse()
        }
    )
    this.getcommandeEffectueeCaisse()

    this.form = this._formBuilder.group({
      checkArray: this._formBuilder.array([])
    })

    console.log("the montantAAA", this.montant)

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


    /*this.route.data.subscribe((data: { roles: ['ROLE_GUICHET']}) => {
            if (this.data.roles === 'ROLE_GUICHET') {
                isShown = true
            }
        });*/
  }

  onSubmit(f: NgForm) {
    this.service.create(f.value);
  }

  selectTypeProduit(event) {

    this.idTypeSelected = event.target.value;

    /*this.stockService.getStockCaisse(this.idCaisse, this.idTypeSelected).subscribe(
        data => {
          this.donneesCommandes = data

        }
    )*/


    this.stockService.getStockCaisse(1, this.idTypeSelected).subscribe(
        data => {
          this.donneesCommandes = data
          console.log("jr duid la ",this.donneesCommandes)

        }
    )

  }
  getProduit() {
    this.service.getAll().subscribe(data => {
      this.donnes = data;
    })
  }
  getTypesCaisse() {
    this.serviceTypeCaisse.getAll().subscribe(data => {
      this.donnes = data;
    })
  }

  getCaisse() {
    this.servicecaisse.getAllCaisses().subscribe(data => {
      this.datacaisse = data;
    })
  }

  getTypesProduit() {
    this.serviceTypeProduit.getAllTypeProduit().subscribe(data => {
      this.datatypeproduit = data;
    })
  }

  getcommandeEffectueeCaisse() {
    this.ligneService.getCommandeEffectueeCaisse(1).subscribe(data => {
      this.commandeEffectueeCaisse = data;
    })
  }


  selectIdCaisse(event) {

    this.idCaisse = event.target.value;
  }

  selectProduit(event) {
    this.idCheckedID = this.idP ;

    this.service.get(this.idCheckedID).subscribe(
        data => {

          this.ProduitSelectionned = data;

        }
    )


  }

  getqt(event) {
    this.qt = event.target.value;

    return this.qt

  }


  ajouoterPanier() {
    let a ;
    this.montant = 0;

    const format = 'dd-MM-yyyy';
    const myDate = new Date();
    const locale = 'en-US';
    const formattedDate = formatDate(myDate, format, locale);
    var numberValue = Number(this.idCaisse);
    this.stockretourn["date"] = formattedDate
    this.stockretourn["datevalide"] = formattedDate
   // this.stockretourn["iddgcaissealloueur"] = numberValue;



    this.stockretournService.saveStockRetourn(this.stockretourn).subscribe(
        data => {


         // this.panier.push(new LignecommandeModule(this.qt,data, this.ProduitSelectionned))
          this.panier.push(new LignestockretournModule(this.qt,new Gs_StockRetourne(data["id"]),  this.ProduitSelectionned))


          /*this.panier.forEach(c => {

            this.montant += c.quantite * c.gs_produit.prix

          })*/



        }
    )



   // this.idCommade = this.retourne["id"]
    this.idStockRetourn = this.retourne["id"]
    this.stockretournService.getStockRetournById( this.idStockRetourn).subscribe(
        data => {





          //this.ligneCommande =null
          this.lignestockretourn =null

          /*       this.ligneService.save(this.ligneCommande).subscribe(
                    data => {
                        console.log("Yesss", data)
                    }
                ) */


                this.ligneStockRetournService.saveLigneStockRetourn(this.lignestockretourn).subscribe(
                   data => {

                   }
               )

        }
    )
  }


  setCheckbox(event: any, value: any) {
    if (event.target.checked)
    {
     this.idP = value.gs_produit["id"]

      this.service.get(this.idP).subscribe(
          data => {

            this.ProduitSelectionned = data;

          }
      )

      //this.QteCommande = value["quantiteCommande"]


     // this.paniers.push(value)
    }


  }



  commanderPanier() {

    this.dataModal = this.panier



    this.panier.forEach(element => {
      this.ligneStockRetournService.saveLigneStockRetourn(element).subscribe(
          data => {
            console.log("stockerR saved",data)
          }
      )

    })
    //proceed
    this.panier.pop()
    this.montant = 0


  }





  openDialog() {
    const dialogRef = this.dialog.open(ModaldetailsComponent ,{
      height: '400px',
      width: '600px',
      data: {
        dataKey: this.dataModal
      }
    });



    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }



  postCommade(commandep) {



  }



  getCommanndeById(id) {

    return this.commandeService.getCommande(id).subscribe(
        data => {
          this.commandeRetourne = data

          this.commandeRetourne

        }
    )

  }

  showSwal(type) {
    if (type == 'success-message') {


    }
  }



  removeFoodOrder(ligneCommande: LignecommandeModule): void {
    this.montant = this.montant - (ligneCommande.quantite * ligneCommande.gs_produit.prix)
    this.panier = this.panier.filter(({ quantite }) => quantite !== ligneCommande.quantite);
  }




}
