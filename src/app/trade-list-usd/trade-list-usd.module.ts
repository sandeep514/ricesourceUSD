import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TradeListUsdPageRoutingModule } from './trade-list-usd-routing.module';

import { TradeListUsdPage } from './trade-list-usd.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    TradeListUsdPageRoutingModule
  ],
  declarations: [TradeListUsdPage]
})
export class TradeListUsdPageModule { }
