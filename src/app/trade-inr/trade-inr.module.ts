import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TradeINRPageRoutingModule } from './trade-inr-routing.module';

import { TradeINRPage } from './trade-inr.page';
import { ComponentsModule } from "../components/components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TradeINRPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [TradeINRPage],
})
export class TradeINRPageModule {}
