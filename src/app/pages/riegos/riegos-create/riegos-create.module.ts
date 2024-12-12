import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RiegosCreatePageRoutingModule } from './riegos-create-routing.module';

import { RiegosCreatePage } from './riegos-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RiegosCreatePageRoutingModule
  ],
  declarations: [RiegosCreatePage]
})
export class RiegosCreatePageModule {}
