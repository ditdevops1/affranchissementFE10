import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TableData } from '../md/md-table/md-table.component';
import { LegendItem, ChartType } from '../md/md-chart/md-chart.component';
import * as Chartist from 'chartist';
import {KeycloakService} from 'keycloak-angular';
import {UsersconsummesService} from '../service/usersconsummes.service';
import { StockService } from '../service/stock.service';

declare const $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit, AfterViewInit {
   //constructor(private navbarTitleService: NavbarTitleService, private notificationService: NotificationService) { }

    tok ;

    email:string ;
    listrole ;
    allStock ;

    hasAccess ;


    constructor(private keycloak:KeycloakService , public  userInfoService : UsersconsummesService ,
      private stockService : StockService)
    {

        this.keycloak.loadUserProfile(true).then(res =>{

            this.email=res.email
 

        });

        this.listrole=this.keycloak.getUserRoles();
      console.log( "les roles du user connecté: "+this.keycloak.getUserRoles());

      this.getAllStock()

    }



    getAllStock(){
      return this.stockService.getAllStock().subscribe(data => {

        this.allStock =  data

        console.log("the data", this.allStock)

      })
    }



    
    isCaveau(){
      this.hasAccess =  false 
   if(this.keycloak.getUserRoles().includes("ROLE_CAVEAU")){
       this.hasAccess = true
   }

   return this.hasAccess
      

         }

  isReceveur(){
      this.hasAccess =  false
      if(this.keycloak.getUserRoles().includes("ROLE_RECEVEUR")){
          this.hasAccess = true
      }

      return this.hasAccess


  }


  

 
  // constructor(private navbarTitleService: NavbarTitleService) { }
  public ngOnInit() {

    
      
   }
   ngAfterViewInit() {
       
   }
}
