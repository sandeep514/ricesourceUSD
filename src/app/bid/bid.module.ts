import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BidPageRoutingModule } from './bid-routing.module';

import { BidPage } from './bid.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    BidPageRoutingModule
  ],
  declarations: [BidPage]
})
export class BidPageModule {}
