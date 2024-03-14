import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoaderComponentPageRoutingModule } from './loader-component-routing.module';

import { LoaderComponentPage } from './loader-component.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoaderComponentPageRoutingModule
  ],
  declarations: [LoaderComponentPage]
})
export class LoaderComponentPageModule {}
