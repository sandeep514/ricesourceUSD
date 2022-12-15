import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CancelSuccessPageRoutingModule } from './cancel-success-routing.module';

import { CancelSuccessPage } from './cancel-success.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    IonicModule,
    CancelSuccessPageRoutingModule
  ],
  declarations: [CancelSuccessPage]
})
export class CancelSuccessPageModule {}
