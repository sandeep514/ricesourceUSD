import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrivatepolicyPage } from './privatepolicy.page';

const routes: Routes = [
  {
    path: '',
    component: PrivatepolicyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivatepolicyPageRoutingModule {}
