import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PropertylistingsPage } from './propertylistings.page';

const routes: Routes = [
  {
    path: '',
    component: PropertylistingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PropertylistingsPageRoutingModule {}
