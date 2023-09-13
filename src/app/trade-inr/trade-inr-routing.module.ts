import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TradeINRPage } from './trade-inr.page';

const routes: Routes = [
  {
    path: '',
    component: TradeINRPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TradeINRPageRoutingModule {}
