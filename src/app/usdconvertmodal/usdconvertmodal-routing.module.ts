import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsdconvertmodalPage } from './usdconvertmodal.page';

const routes: Routes = [
  {
    path: '',
    component: UsdconvertmodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsdconvertmodalPageRoutingModule {}
