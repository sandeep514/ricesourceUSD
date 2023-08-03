import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SellingINRPageRoutingModule } from './selling-inr-routing.module';

import { SellingINRPage } from './selling-inr.page';
import { ComponentsModule } from "../components/components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    IonicModule,
    SellingINRPageRoutingModule
  ],
  declarations: [SellingINRPage]
})
export class SellingINRPageModule {}
