import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TradeInrListPage } from './trade-inr-list.page';

const routes: Routes = [
  {
    path: '',
    component: TradeInrListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TradeInrListPageRoutingModule {}
