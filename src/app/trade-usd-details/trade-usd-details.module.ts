import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TradeUsdDetailsPageRoutingModule } from './trade-usd-details-routing.module';

import { TradeUsdDetailsPage } from './trade-usd-details.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    TradeUsdDetailsPageRoutingModule
  ],
  declarations: [TradeUsdDetailsPage]
})
export class TradeUsdDetailsPageModule { }
