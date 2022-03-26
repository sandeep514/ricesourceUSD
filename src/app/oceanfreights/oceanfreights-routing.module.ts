import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OceanfreightsPage } from './oceanfreights.page';

const routes: Routes = [
  {
    path: '',
    component: OceanfreightsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OceanfreightsPageRoutingModule {}
