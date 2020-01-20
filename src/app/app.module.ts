import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Contacts, Contact, ContactField, ContactName} from '@ionic-native/contacts/ngx';

import { AngularFireModule } from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const firebaseConfig = {
  apiKey: "AIzaSyA4CMD51Wz_G564J0h4HJeFG27-UI12Kkw",
    authDomain: "keyworkx.firebaseapp.com",
    databaseURL: "https://keyworkx.firebaseio.com",
    projectId: "keyworkx",
    storageBucket: "keyworkx.appspot.com",
    messagingSenderId: "128522126421",
    appId: "1:128522126421:web:bf8e034c8207cdac6f40dc",
    measurementId: "G-L60BJ3N668"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    BrowserAnimationsModule,

    
  ],
  providers: [
    StatusBar,
    SplashScreen,Contacts, Contact,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
