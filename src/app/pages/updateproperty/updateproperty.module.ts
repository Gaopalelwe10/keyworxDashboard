import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatepropertyPageRoutingModule } from './updateproperty-routing.module';

import { UpdatepropertyPage } from './updateproperty.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatepropertyPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [UpdatepropertyPage]
})
export class UpdatepropertyPageModule {}
