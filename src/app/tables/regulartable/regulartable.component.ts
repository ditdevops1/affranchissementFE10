import { Component, OnInit } from '@angular/core';
import { TableData } from '../../md/md-table/md-table.component';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ProduitService} from '../../service/produit.service';
import {TypecaisseService} from '../../service/typecaisse.service';
import {TypeproduitService} from '../../service/typeproduit.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-regular-table-cmp',
    templateUrl: 'regulartable.component.html'
})

export class RegularTableComponent implements OnInit {

    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;
    isEditable = false;
    disableSelect = new FormControl(false);
    produits ;

    donnes ;
    datatypeproduit;
    allProduit;
    id ;

    constructor(public activedRoute:ActivatedRoute , public produitSerevice:ProduitService ,public router :Router) {

        this.id=activedRoute.snapshot.params['id'] ;

        this.produitSerevice.getProduit(this.id).subscribe(
            data => {
                this.produits = data
                console.log("the data" , this.produits)
            }
        )
        // console.log("The id is here",this.id)

        this.getAllProduit() ;


    }

    ngOnInit() {


    }

    getAllProduit(){
        // get all produits

        this.produitSerevice.getAll().subscribe(
            data => {
                this.allProduit = data
                console.log("the all produits " , this.allProduit)
            }
        )


    }

    modifier(){
        this.produitSerevice.update(this.id,this.produits).subscribe(
            (data : any)=>  {
                this.produits = data
                console.log("produit updated : ",this.produits);
            }
        )

        alert("produit updated success")
       this.getAllProduit() ;



       this.router.navigate(['tables/datatables.net']);


    }

    retour(){
        this.router.navigate(['tables/datatables.net']);

    }



    getProduit(){


    }


    getTypesCaisse(){


    }



    getTypesProduit(){


    }






}
