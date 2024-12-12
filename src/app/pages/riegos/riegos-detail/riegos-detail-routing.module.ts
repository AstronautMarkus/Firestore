import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RiegosDetailPage } from './riegos-detail.page';

const routes: Routes = [
  {
    path: '',
    component: RiegosDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RiegosDetailPageRoutingModule {}
