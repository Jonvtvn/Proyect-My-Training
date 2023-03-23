import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArmsPage } from './arms.page';

const routes: Routes = [
  {
    path: '',
    component: ArmsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArmsPageRoutingModule {}
