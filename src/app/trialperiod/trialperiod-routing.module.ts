import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrialperiodPage } from './trialperiod.page';

const routes: Routes = [
  {
    path: '',
    component: TrialperiodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrialperiodPageRoutingModule {}
