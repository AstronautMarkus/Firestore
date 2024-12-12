import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RiegosListPageRoutingModule } from './riegos-list-routing.module';

import { RiegosListPage } from './riegos-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RiegosListPageRoutingModule
  ],
  declarations: [RiegosListPage]
})
export class RiegosListPageModule {}
