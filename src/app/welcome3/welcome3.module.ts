import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Welcome3PageRoutingModule } from './welcome3-routing.module';

import { Welcome3Page } from './welcome3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Welcome3PageRoutingModule
  ],
  declarations: [Welcome3Page]
})
export class Welcome3PageModule {}
