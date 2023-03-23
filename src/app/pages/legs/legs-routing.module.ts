import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LegsPage } from './legs.page';

const routes: Routes = [
  {
    path: '',
    component: LegsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LegsPageRoutingModule {}
