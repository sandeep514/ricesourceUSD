import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RicechartPageRoutingModule } from './ricechart-routing.module';

import { RicechartPage } from './ricechart.page';
import { ComponentsModule } from '../components/components.module';
import { PlanpagePageModule } from '../planpage/planpage.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    IonicModule,
    RicechartPageRoutingModule,
    PlanpagePageModule
  ],
  entryComponents: [],
  declarations: [RicechartPage]
})
export class RicechartPageModule {}
