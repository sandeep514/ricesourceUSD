import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlanpagePageRoutingModule } from './planpage-routing.module';

import { PlanpagePage } from './planpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlanpagePageRoutingModule
  ],
  declarations: [PlanpagePage]
})
export class PlanpagePageModule {}
