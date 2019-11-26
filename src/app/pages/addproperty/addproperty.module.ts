import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddpropertyPageRoutingModule } from './addproperty-routing.module';

import { AddpropertyPage } from './addproperty.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddpropertyPageRoutingModule
  ],
  declarations: [AddpropertyPage]
})
export class AddpropertyPageModule {}
