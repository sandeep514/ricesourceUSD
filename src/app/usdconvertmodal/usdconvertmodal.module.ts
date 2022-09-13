import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsdconvertmodalPageRoutingModule } from './usdconvertmodal-routing.module';

import { UsdconvertmodalPage } from './usdconvertmodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsdconvertmodalPageRoutingModule
  ],
  declarations: [UsdconvertmodalPage]
})
export class UsdconvertmodalPageModule {}
