import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MaterialModule } from '../app.module';

import { CommandeRoutingModule } from './commande-routing.module';
import { PassercommandeComponent } from './passercommande/passercommande.component';
//import {MatInputModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import { DiligentercommandeComponent } from './diligentercommande/diligentercommande.component';
import { DetailscommandeComponent } from './detailscommande/detailscommande.component';
import { ApprouvercommandeComponent } from './approuvercommande/approuvercommande.component';
import { DetailsapprouverComponent } from './detailsapprouver/detailsapprouver.component';
import { ModaldetailsComponent } from './modaldetails/modaldetails.component';
import { RetourstockComponent } from './retourstock/retourstock.component';
import { ApprouverretourComponent } from './approuverretour/approuverretour.component';
import { DetailsapprouverstockretournComponent } from './detailsapprouverstockretourn/detailsapprouverstockretourn.component';

@NgModule({
  declarations: [PassercommandeComponent, DiligentercommandeComponent, DetailscommandeComponent, ApprouvercommandeComponent, DetailsapprouverComponent, ModaldetailsComponent, RetourstockComponent, ApprouverretourComponent, DetailsapprouverstockretournComponent],
  imports: [
    CommonModule,
    CommandeRoutingModule,
    FormsModule,
    MaterialModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class CommandeModule { }
