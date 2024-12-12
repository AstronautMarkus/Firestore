import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RiegosEditPage } from './riegos-edit.page';

const routes: Routes = [
  {
    path: '',
    component: RiegosEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RiegosEditPageRoutingModule {}
