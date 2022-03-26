import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RicechartPage } from './ricechart.page';

const routes: Routes = [
  {
    path: '',
    component: RicechartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RicechartPageRoutingModule {}
