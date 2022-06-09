import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HotdealsPageRoutingModule } from './hotdeals-routing.module';

import { HotdealsPage } from './hotdeals.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    IonicModule,
    HotdealsPageRoutingModule
  ],
  declarations: [HotdealsPage]
})
export class HotdealsPageModule {}
