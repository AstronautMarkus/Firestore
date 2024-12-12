import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPage } from './admin.page';

// Páginas Plantas CRUD

import { PlantasCreatePage } from '../plantas/plantas-create/plantas-create.page';
import { PlantasListPage } from '../plantas/plantas-list/plantas-list.page';
import { PlantasDetailPage } from '../plantas/plantas-detail/plantas-detail.page';
import { PlantasEditPage } from '../plantas/plantas-edit/plantas-edit.page';

// Páginas Encargados CRUD

import { EncargadosCreatePage } from '../encargados/encargados-create/encargados-create.page';
import { EncargadosListPage } from '../encargados/encargados-list/encargados-list.page';
import { EncargadosDetailPage } from '../encargados/encargados-detail/encargados-detail.page';
import { EncargadosEditPage } from '../encargados/encargados-edit/encargados-edit.page';

// Páginas Riegos CRUD

import { RiegosCreatePage } from '../riegos/riegos-create/riegos-create.page';
import { RiegosListPage } from '../riegos/riegos-list/riegos-list.page';
import { RiegosDetailPage } from '../riegos/riegos-detail/riegos-detail.page';
import { RiegosEditPage } from '../riegos/riegos-edit/riegos-edit.page';


const routes: Routes = [
  {
    path: '',
    component: AdminPage
  },
  {
    path: 'plantas-create',
    component: PlantasCreatePage
  },
  {
    path: 'plantas-list',
    component: PlantasListPage
  },
  {
    path: 'plantas-detail/:id',
    component: PlantasDetailPage
  },
  {
    path: 'plantas-edit/:id',
    component: PlantasEditPage
  },
  {
    path: 'encargados-create',
    component: EncargadosCreatePage
  },
  {
    path: 'encargados-list',
    component: EncargadosListPage
  },
  {
    path: 'encargados-detail/:id',
    component: EncargadosDetailPage
  },
  {
    path: 'encargados-edit/:id',
    component: EncargadosEditPage
  },
  {
    path: 'riegos-create',
    component: RiegosCreatePage
  },
  {
    path: 'riegos-list',
    component: RiegosListPage
  },
  {
    path: 'riegos-detail/:id',
    component: RiegosDetailPage
  },
  {
    path: 'riegos-edit/:id',
    component: RiegosEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPageRoutingModule {}
