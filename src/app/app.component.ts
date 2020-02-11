import { Component } from '@angular/core';

import { Platform, MenuController, LoadingController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ProfileService } from './services/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'analytics'
    },
    {
      title: 'Message',
      url: '/message',
      icon: 'mail'
    },
    {
      title: 'Properties',
      url: '/propertylistings',
      icon: 'home'
    }, {
      title: 'Archived',
      url: '/archived',
      icon: 'archive'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private profileService: ProfileService,
    private router: Router,
    private menuCtrl: MenuController,
    public loadingCtrl: LoadingController,
  ) {
    this.initializeApp();
    // this.loader()
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.statusBar.styleLightContent()
      this.splashScreen.hide();
    });
  }
  profile() {
    this.menuCtrl.close()
    this.router.navigateByUrl('profile')
  }
  logout() {
    this.profileService.logout();
  }
  async loader(){
    const loading = await this.loadingCtrl.create({
      message: 'Loading',
      cssClass: 'custom-loader2',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();

    console.log('Loading dismissed!');
  }
}
