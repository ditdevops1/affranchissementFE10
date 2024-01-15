import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockRoutingModule } from './stock-routing.module';
import { StockreceveurComponent } from './stockreceveur/stockreceveur.component';
import { StockautrecaisseComponent } from './stockautrecaisse/stockautrecaisse.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../app.module';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [StockreceveurComponent, StockautrecaisseComponent],
  imports: [
    CommonModule,
    StockRoutingModule,
    FormsModule,
    MaterialModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class StockModule { }
