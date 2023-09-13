import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuyInrPage } from './buy-inr.page';

const routes: Routes = [
  {
    path: '',
    component: BuyInrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuyInrPageRoutingModule {}
