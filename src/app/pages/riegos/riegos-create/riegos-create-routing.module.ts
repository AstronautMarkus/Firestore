import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RiegosCreatePage } from './riegos-create.page';

const routes: Routes = [
  {
    path: '',
    component: RiegosCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RiegosCreatePageRoutingModule {}
