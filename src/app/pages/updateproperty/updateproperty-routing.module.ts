import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdatepropertyPage } from './updateproperty.page';

const routes: Routes = [
  {
    path: '',
    component: UpdatepropertyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdatepropertyPageRoutingModule {}
