import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TradeUsdDetailsPage } from './trade-usd-details.page';

const routes: Routes = [
  {
    path: '',
    component: TradeUsdDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TradeUsdDetailsPageRoutingModule {}
