import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RiegosListPage } from './riegos-list.page';

const routes: Routes = [
  {
    path: '',
    component: RiegosListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RiegosListPageRoutingModule {}
