import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MybidsPage } from './mybids.page';

const routes: Routes = [
  {
    path: '',
    component: MybidsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MybidsPageRoutingModule {}
