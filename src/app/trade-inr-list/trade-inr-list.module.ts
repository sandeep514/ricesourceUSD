import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TradeInrListPageRoutingModule } from './trade-inr-list-routing.module';

import { TradeInrListPage } from './trade-inr-list.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TradeInrListPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TradeInrListPage]
})
export class TradeInrListPageModule { }
