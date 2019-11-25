import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PropertylistingsPageRoutingModule } from './propertylistings-routing.module';

import { PropertylistingsPage } from './propertylistings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PropertylistingsPageRoutingModule
  ],
  declarations: [PropertylistingsPage]
})
export class PropertylistingsPageModule {}
