import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'message',
    loadChildren: () => import('./pages/message/message.module').then( m => m.MessagePageModule)
  },
 
  {
    path: 'propertylistings',
    loadChildren: () => import('./pages/propertylistings/propertylistings.module').then( m => m.PropertylistingsPageModule)
  },
  {
    path: 'addproperty',
    loadChildren: () => import('./pages/addproperty/addproperty.module').then( m => m.AddpropertyPageModule)
  },
  {
    path: 'updateproperty',
    loadChildren: () => import('./pages/updateproperty/updateproperty.module').then( m => m.UpdatepropertyPageModule)
  },  {
    path: 'viewmessage',
    loadChildren: () => import('./pages/viewmessage/viewmessage.module').then( m => m.ViewmessagePageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
