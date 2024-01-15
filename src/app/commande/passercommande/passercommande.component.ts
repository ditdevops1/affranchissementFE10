import { Component, Input, OnInit } from '@angular/core';
import { TableData } from '../../md/md-table/md-table.component';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ProduitService } from '../../service/produit.service';
import { TypecaisseService } from '../../service/typecaisse.service';
import { TypeproduitService } from '../../service/typeproduit.service';
import { CaisseService } from '../../service/caisse.service';
import { StockService } from '../../service/stock.service';
import { CommandeModule } from '../../interface/commande/commande.module';
import { CommandeService } from '../../service/commande.service';
import { formatDate } from '@angular/common';
import { LignecommandeModule } from '../../interface/lignecommande/lignecommande.module';
import { LignecommandeService } from '../../service/lignecommande.service';
import { Observable, Subject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';
import { delay, map } from 'rxjs/operators';
import { Route } from '@angular/compiler/src/core';
import { MatDialog } from '@angular/material/dialog';
import { ModaldetailsComponent } from '../modaldetails/modaldetails.component';
import {LignestockService} from '../../service/lignestock.service';


 


@Component({
  selector: 'app-passercommande',
  templateUrl: './passercommande.component.html',
  styleUrls: ['./passercommande.component.css']
})
export class PassercommandeComponent implements OnInit {



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
  commande: CommandeModule = new CommandeModule();

  commandeRetourne;
  ligneCommande: LignecommandeModule
  idCommade = 0;
  retourne;
  commanded;
  commandeEffectueeCaisse;
  ProduitSelectionned;
  saveLigneCommande;
  IDD;
  qt = 1;
  panierStored;
  montant = 0;
  mm 

  montantSortie = 0;

  selectedItemsList = [];
  idCheckedID;

  dataModal ;

  panier: Array<LignecommandeModule> = []

  _commandeSubject = new Subject()
  user: Object;


  currentItem = 'Television';




  get commandeSubject() {
    return this._commandeSubject
  }


  constructor(private router :Router , private route: ActivatedRoute, private _formBuilder: FormBuilder, public service: ProduitService, public serviceTypeCaisse: TypecaisseService, public serviceTypeProduit: TypeproduitService,
    public servicecaisse: CaisseService, public stockService: LignestockService, public commandeService: CommandeService, public ligneService: LignecommandeService ,
    public dialog : MatDialog) {

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

    this.stockService.getStockCaisse(this.idCaisse, this.idTypeSelected).subscribe(
      data => {
        this.donneesCommandes = data

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
    this.idCheckedID = event.target.value;

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
    this.commande["dateoperation"] = formattedDate
    this.commande["iddgcaissealloueur"] = numberValue;

    console.log("On est la ",this.commande)

 
    this.commandeService.save(this.commande).subscribe(
      data => {

        console.log("The data ", data)
        this.panier.push(new LignecommandeModule(this.qt,data, this.ProduitSelectionned))


        this.panier.forEach(c => {

          this.montant += c.quantite * c.gs_produit.prix
     
        })

   
 
      }
    )
 

 
          this.idCommade = this.retourne["id"]
          this.commandeService.getCommande(this.idCommade).subscribe(
              data => {
 
    


 
                this.ligneCommande =null

                /*       this.ligneService.save(this.ligneCommande).subscribe(
                          data => {
                              console.log("Yesss", data)
                          }
                      ) */

  }
          )
  }

  

  commanderPanier() {

    this.dataModal = this.panier



    this.panier.forEach(element => {
      console.log("Je suis la ", element.gs_commande)
      this.ligneService.save(element).subscribe(
          data => {
            this.user = data
            console.log("the data in the paie ris here ", data )
            console.log("Yesss", data)
          }
      )
    })
    //vider panier
    this.panier.splice(0,this.panier.length)
    // this.panier.pop()
    this.montant = 0
    //this.openDialog()
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







