import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotdealsPage } from './hotdeals.page';

const routes: Routes = [
  {
    path: '',
    component: HotdealsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotdealsPageRoutingModule {}
