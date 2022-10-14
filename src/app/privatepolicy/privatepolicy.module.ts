import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrivatepolicyPageRoutingModule } from './privatepolicy-routing.module';

import { PrivatepolicyPage } from './privatepolicy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrivatepolicyPageRoutingModule
  ],
  declarations: [PrivatepolicyPage]
})
export class PrivatepolicyPageModule {}
