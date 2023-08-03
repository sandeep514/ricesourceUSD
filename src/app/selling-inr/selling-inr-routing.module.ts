import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SellingINRPage } from './selling-inr.page';

const routes: Routes = [
  {
    path: '',
    component: SellingINRPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SellingINRPageRoutingModule {}
