import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PassercommandeComponent} from './passercommande/passercommande.component';
import {DiligentercommandeComponent} from './diligentercommande/diligentercommande.component';
import {DetailscommandeComponent} from './detailscommande/detailscommande.component';
import {AuthGuard} from '../keycloak/auth.guard';
import {ApprouvercommandeComponent} from './approuvercommande/approuvercommande.component';
import {DetailsapprouverComponent} from './detailsapprouver/detailsapprouver.component';
import { ModaldetailsComponent } from './modaldetails/modaldetails.component';
import {RetourstockComponent} from './retourstock/retourstock.component';
import {ApprouverretourComponent} from './approuverretour/approuverretour.component';
import {DetailsapprouverstockretournComponent} from './detailsapprouverstockretourn/detailsapprouverstockretourn.component';

export const CommandeRoutes: Routes = [
  {
    path: '',
    children: [ {
      path: 'passer-commande',
      component: PassercommandeComponent,
    }]},
  {
    path: '',
    children: [ {
      path: 'diligenter-commande',
      component: DiligentercommandeComponent
    }]},

  {
    path: '',
    children: [ {
      path: 'approuver-commande',
      component: ApprouvercommandeComponent
    }]},

  {
    path: '',
    children: [ {
      path: 'retour-stock',
      component: RetourstockComponent
    }]},

  {
    path: '',
    children: [ {
      path: 'approuver-retour',
      component: ApprouverretourComponent
    }]},
  {
    path: '',
    children: [ {
      path: 'details-commande/:id',
      component: DetailscommandeComponent
    }]},
  {
    path: '',
    children: [ {
      path: 'details-approuver/:id',
      component: DetailsapprouverComponent
    }]},

  {
    path: '',
    children: [ {
      path: 'details-approuverstockretourn/:id',
      component: DetailsapprouverstockretournComponent
    }]},
    {
      path: '',
      children: [ {
        path: 'modal-details',
        component: ModaldetailsComponent,
      }]}

];


@NgModule({
  imports: [RouterModule.forChild(CommandeRoutes)],
    providers: [AuthGuard],
  exports: [RouterModule]
})
export class CommandeRoutingModule { }
