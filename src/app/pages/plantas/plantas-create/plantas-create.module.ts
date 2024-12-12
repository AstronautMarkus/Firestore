import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlantasCreatePageRoutingModule } from './plantas-create-routing.module';

import { PlantasCreatePage } from './plantas-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlantasCreatePageRoutingModule
  ],
  declarations: [PlantasCreatePage]
})
export class PlantasCreatePageModule {}
