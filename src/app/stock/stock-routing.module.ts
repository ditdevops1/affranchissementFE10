import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AuthGuard} from '../keycloak/auth.guard';
import {StockreceveurComponent} from './stockreceveur/stockreceveur.component';
import {StockautrecaisseComponent} from './stockautrecaisse/stockautrecaisse.component';


export const StockRoutes: Routes = [
  {
    path: '',
    children: [ {
      path: 'stock-receveur',
      component: StockreceveurComponent,
    }]},
  {
    path: '',
    children: [ {
      path: 'stock-autrecaisse',
      component: StockautrecaisseComponent,
    }]}

];


@NgModule({
  imports: [RouterModule.forChild(StockRoutes)],
  providers: [AuthGuard],
  exports: [RouterModule]
})
export class StockRoutingModule { }
