import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PortPageRoutingModule } from './port-routing.module';

import { PortPage } from './port.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    PortPageRoutingModule
  ],
  declarations: [PortPage]
})
export class PortPageModule {}
