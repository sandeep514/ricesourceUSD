import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TradeListUsdPage } from './trade-list-usd.page';

const routes: Routes = [
  {
    path: '',
    component: TradeListUsdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TradeListUsdPageRoutingModule {}
