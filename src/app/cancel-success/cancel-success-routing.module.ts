import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CancelSuccessPage } from './cancel-success.page';

const routes: Routes = [
  {
    path: '',
    component: CancelSuccessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CancelSuccessPageRoutingModule {}
