import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OceanfreightsPageRoutingModule } from './oceanfreights-routing.module';

import { OceanfreightsPage } from './oceanfreights.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    OceanfreightsPageRoutingModule
  ],
  declarations: [OceanfreightsPage]
})
export class OceanfreightsPageModule {}
