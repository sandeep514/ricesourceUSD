import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Welcome2PageRoutingModule } from './welcome2-routing.module';

import { Welcome2Page } from './welcome2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Welcome2PageRoutingModule
  ],
  declarations: [Welcome2Page]
})
export class Welcome2PageModule {}
