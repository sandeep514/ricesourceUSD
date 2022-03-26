import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtherservicesPageRoutingModule } from './otherservices-routing.module';

import { OtherservicesPage } from './otherservices.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    OtherservicesPageRoutingModule
  ],
  declarations: [OtherservicesPage]
})
export class OtherservicesPageModule {}
