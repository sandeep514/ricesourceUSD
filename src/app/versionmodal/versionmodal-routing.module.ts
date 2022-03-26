import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VersionmodalPage } from './versionmodal.page';

const routes: Routes = [
  {
    path: '',
    component: VersionmodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VersionmodalPageRoutingModule {}
