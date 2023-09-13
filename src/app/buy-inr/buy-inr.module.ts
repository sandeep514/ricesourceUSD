import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuyInrPageRoutingModule } from './buy-inr-routing.module';

import { BuyInrPage } from './buy-inr.page';
import { ComponentsModule } from "../components/components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuyInrPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [BuyInrPage],
})
export class BuyInrPageModule {}
