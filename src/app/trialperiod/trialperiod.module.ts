import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrialperiodPageRoutingModule } from './trialperiod-routing.module';

import { TrialperiodPage } from './trialperiod.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrialperiodPageRoutingModule
  ],
  declarations: [TrialperiodPage]
})
export class TrialperiodPageModule {}
