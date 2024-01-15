import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProduitService } from '../../service/produit.service';
import { DataTableComponent } from '../datatable.net/datatable.component';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { TypeproduitService } from '../../service/typeproduit.service';
import { Produit } from '../../model/Produit';
import { MatDialogModule } from '@angular/material/dialog';
import { ServicethemeService } from '../../service/servicetheme.service';
import { data, type } from 'jquery';

import { ThemeModule } from '../../interface/theme/theme.module';
import {ProduitModule} from '../../interface/produit/produit.module';
import swal from 'sweetalert2';



@Component({
    selector: 'app-extended-table-cmp',
    templateUrl: 'extendedtable.component.html'
})



export class ExtendedTableComponent implements OnInit {
    libelle: any;
    form: FormGroup;
    donnestypeproduit;
    donnesproduit;
    produits;
    recup;
    idTypeproduit;
    mySelect ;
    selectedValue: any;
    allTheme;
    themeSelected;
    idThemeSelected;
    themeSelect: any;
    typeProduit: any;
    prix;
    produit: ProduitModule =  new ProduitModule() ;

    retor ;





    constructor(public service: ProduitService, public serviceTypeProduit: TypeproduitService, private fb: FormBuilder, private dialogRef: MatDialogRef<ExtendedTableComponent>, @Inject(MAT_DIALOG_DATA) { typeproduitlib, libelle, quantite }: Produit,
                public themeservice: ServicethemeService) {
        this.getTypeProduit();
        this.getProduit()

        this.getThemes()


        this.form = fb.group({
            typeproduitlib: [typeproduitlib, Validators.required],
            libelle: [libelle, Validators.required],
            quantite: [quantite, Validators.required]

        });


    }

    getThemes() {
        return this.themeservice.getAllTheme().subscribe(data => {
                this.allTheme = data
            }

        )
    }
    ngOnInit(): void {
    }

    getTypeProduit() {
        this.serviceTypeProduit.getAllTypeProduit().subscribe(data => {
            this.donnestypeproduit = data;
            console.log("all tyype produiut", this.donnestypeproduit)

        });
    }

    getProduit() {
        this.service.getAll().subscribe(data => {
            this.donnesproduit = data;
        });
    }

    selectChange(event) {
        this.idTypeproduit = event.target.value;

        this.serviceTypeProduit.getTypeProduit(this.idTypeproduit).subscribe(
            data => {
                this.typeProduit = data;
            }
        )
        this.service.selectById(this.idTypeproduit).subscribe(data => {
            this.produits = data
        })
    }


    selectLibelle(event) {

        this.libelle = this.mySelect
        console.log("the libelle" , this.libelle)

    }

    selectChangeTheme(event) {
        this.idThemeSelected = event.target.value;
        this.themeservice.getTheme(this.idThemeSelected).subscribe(
            data => {
                this.themeSelect = data
                console.log("azzz", this.themeSelect)
            }
        )
    }

    SelectPrix(event){
        console.log("the prix "  , this.prix)
    }



    save() {

        this.produit["libelle"] = this.libelle ;
        this.produit["prix"] = this.prix ;
        this.produit["gs_theme"] = this.themeSelect ;
        this.produit["gs_typeProduit"] = this.typeProduit ;


        this.service.create(this.produit).subscribe(
            data => {

                this.retor = data
                console.log("aziz",this.retor)


            }
        )
        swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            buttonsStyling: false,
            customClass:{
              confirmButton: "btn btn-success",
            },
            icon: "success"
        });
    


        this.dialogRef.close(this.form.value);


    }

    close() {
        this.dialogRef.close();
    }

  

}









