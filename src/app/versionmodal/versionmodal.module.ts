import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VersionmodalPageRoutingModule } from './versionmodal-routing.module';

import { VersionmodalPage } from './versionmodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VersionmodalPageRoutingModule
  ],
  declarations: [VersionmodalPage]
})
export class VersionmodalPageModule {}
