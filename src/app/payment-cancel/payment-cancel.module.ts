import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentCancelPageRoutingModule } from './payment-cancel-routing.module';

import { PaymentCancelPage } from './payment-cancel.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    IonicModule,
    PaymentCancelPageRoutingModule
  ],
  declarations: [PaymentCancelPage]
})
export class PaymentCancelPageModule {}
