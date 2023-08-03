import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrandDetailsPageRoutingModule } from './brand-details-routing.module';

import { BrandDetailsPage } from './brand-details.page';
import { IonicSelectableModule } from "ionic-selectable";
import { ComponentsModule } from "../components/components.module";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicSelectableModule,
    ComponentsModule,
    BrandDetailsPageRoutingModule
  ],
  declarations: [BrandDetailsPage]
})
export class BrandDetailsPageModule {}
