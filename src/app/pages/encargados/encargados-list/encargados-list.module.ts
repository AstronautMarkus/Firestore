import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EncargadosListPageRoutingModule } from './encargados-list-routing.module';

import { EncargadosListPage } from './encargados-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EncargadosListPageRoutingModule
  ],
  declarations: [EncargadosListPage]
})
export class EncargadosListPageModule {}
