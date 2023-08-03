import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrandsPageRoutingModule } from './brands-routing.module';

import { BrandsPage } from './brands.page';
import { IonicSelectableModule } from "ionic-selectable";
import { ComponentsModule } from "../components/components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicSelectableModule,
    BrandsPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [BrandsPage],
})
export class BrandsPageModule {}
