import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EncargadosListPage } from './encargados-list.page';

const routes: Routes = [
  {
    path: '',
    component: EncargadosListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EncargadosListPageRoutingModule {}
