import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MybidsPageRoutingModule } from './mybids-routing.module';

import { MybidsPage } from './mybids.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MybidsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MybidsPage]
})
export class MybidsPageModule {}
