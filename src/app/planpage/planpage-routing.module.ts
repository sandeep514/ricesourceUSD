import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanpagePage } from './planpage.page';

const routes: Routes = [
  {
    path: '',
    component: PlanpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanpagePageRoutingModule {}
