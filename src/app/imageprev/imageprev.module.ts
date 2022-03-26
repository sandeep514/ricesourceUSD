import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImageprevPageRoutingModule } from './imageprev-routing.module';

import { ImageprevPage } from './imageprev.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImageprevPageRoutingModule
  ],
  declarations: [ImageprevPage]
})
export class ImageprevPageModule {}
