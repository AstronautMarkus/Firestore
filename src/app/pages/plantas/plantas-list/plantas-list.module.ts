import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlantasListPageRoutingModule } from './plantas-list-routing.module';

import { PlantasListPage } from './plantas-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlantasListPageRoutingModule
  ],
  declarations: [PlantasListPage]
})
export class PlantasListPageModule {}
