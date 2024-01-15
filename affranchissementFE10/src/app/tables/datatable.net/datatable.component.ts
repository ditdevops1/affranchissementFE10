// IMPORTANT: this is a plugin which requires jQuery for initialisation and data manipulation

import { Component, OnInit, AfterViewInit, Inject } from '@angular/core';
import { ProduitService } from '../../service/produit.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ExtendedTableComponent } from '../extendedtable/extendedtable.component';
import { showWarningOnce } from 'tslint/lib/error';
import { Router } from '@angular/router';
import {any} from 'codelyzer/util/function';


declare interface DataTable {
    headerRow: string[];
    footerRow: string[];
    dataRows: string[][];
}

declare const $: any;




@Component({
    selector: 'app-data-table-cmp',
    templateUrl: 'datatable.component.html'
})


export class DataTableComponent implements OnInit,AfterViewInit {
    pageProduits: any;
    motCle: string = "";
    currentPage: number = 0;
    pages: Array<number>;
    size: number = 5;

    allProduit ;
    public dataTable: DataTable;
    listProd =[] ;





    public constructor(public service: ProduitService, private router: Router, public dialog: MatDialog) {



       // this.getAllProduit() ;
       this.getAllProduit()
       this.refres() ;
       this.refres() ;
        this.doSearch()


    }



    ngOnInit() {

        this.refres() ;
        this.refres() ;
        //this.getAllProduit() ;




        this.dataTable = {
            headerRow: ['N °', 'Prix', 'Libellé','Actions' ],
            footerRow: [ 'N °', 'Prix', 'Libellé','Actions' ],

            dataRows:this.listProd






        };



    }


    ngAfterViewInit() {
        $('#datatables').DataTable({
            "pagingType": "full_numbers",
            "lengthMenu": [
                [10, 25, 50, -1],
                [10, 25, 50, "All"]
            ],
            responsive: true,
            language: {
                search: "_INPUT_",
                searchPlaceholder: "Search records",
            }

        });

        const table = $('#datatables').DataTable();

        // Edit record
        table.on('click', '.edit', function(e) {
            const $tr = $(this).closest('tr');
            const data = table.row($tr).data();
            alert('You press on Row: ' + data[0] + ' ' + data[1] + ' ' + data[2] + '\'s row.');
            e.preventDefault();
        });

        // Delete a record
        table.on('click', '.remove', function(e) {
            const $tr = $(this).closest('tr');
            table.row($tr).remove().draw();
            e.preventDefault();
        });

        //Like record
        table.on('click', '.like', function(e) {
            alert('You clicked on Like button');
            e.preventDefault();
        });

        $('.card .material-datatables label').addClass('form-group');
    }

    refres(){
       return  this.router.navigate(['tables/datatables.net']);

    }




    getAllProduit(){
        // get all produits
        this.service.getAll().subscribe(
            data => {

                this.allProduit = data


                $(function() {
                    $('#datatable').DataTable({
                        "pagingType": "full_numbers",
                        "lengthMenu": [
                            [10, 25, 50, -1],
                            [10, 25, 50, "All"]
                        ],
                        responsive: true,
                        language: {
                            search: "_INPUT_",
                            searchPlaceholder: "Search records",
                        }

                    }) ;
                })

                for (var i=0; i<this.allProduit.length; i++){

                    this.listProd.push([this.allProduit[i]["id"],this.allProduit[i]["prix"],this.allProduit[i]["libelle"]])
                }
                console.log("the all produits " , this.allProduit)
                console.log("List Prod " , this.listProd)
                this.ngOnInit() ;

            }
        )





    }






    doSearch() {
        console.log("the word " , this.motCle)
        this.service.getProduits(this.motCle, this.currentPage, this.size)
            .subscribe(data => {
                this.pageProduits = data;
                console.log("here", data["totalPages"])
                console.log("rr",this.pageProduits)

                this.pages = new Array(data["totalPages"]);
            }, err => {
                console.log(err);
            });
    }

    chercher() {

        this.doSearch();

    }

    gotoPage(i: number) {
        this.currentPage = i;
        this.doSearch();
    }

    onDeleteContact(p: any) {
        let confirm = window.confirm('Etes vours sure ?');
        if (confirm == true) {

            this.service.delete(p.id)
                .subscribe(data => {
                    this.pageProduits.content.splice(
                        this.pageProduits.content.indexOf(p), 1
                    )

                }, err => {
                    console.log(err);

                })

        }
    }


    openDialog() {
        this.dialog.open(ExtendedTableComponent, {
            data: {
                user: 'user A'
            },
            height: '400px',
            width: '600px',
        });
    }



    modifier(id:any){
        // console.log("the id",id)
        this.router.navigate(['tables/regular/',id]);
    }




}
