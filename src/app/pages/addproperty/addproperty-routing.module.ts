import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddpropertyPage } from './addproperty.page';

const routes: Routes = [
  {
    path: '',
    component: AddpropertyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddpropertyPageRoutingModule {}
