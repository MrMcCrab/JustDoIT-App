import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
//import { HomePage } from '../pages/home/home';
//import { LoginPage } from '../pages/login/login';
//import { LoggedinPage } from '../pages/loggedin/loggedin';
//import { RegisterPage } from '../pages/register/register';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FirebaseProvider } from '../providers/firebase/firebase';
import { AuthService } from '../providers/auth-service/auth-service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

const firebaseAuth = {
    apiKey: "AIzaSyCRAIQFWLkArtm-BoHQPcG1-0RD9fWLeDs",
    authDomain: "mobileappdev-4b655.firebaseapp.com",
    databaseURL: "https://mobileappdev-4b655.firebaseio.com",
    projectId: "mobileappdev-4b655",
    storageBucket: "",
    messagingSenderId: "626449268452"
  };

@NgModule({
  declarations: [
    MyApp,
    //HomePage,
    //LoginPage,
    //RegisterPage,
    //LoggedinPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    //HomePage,
    //LoginPage,
    //RegisterPage,
    //LoggedinPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider,
    AngularFireDatabase,
    AuthService
  ]
})
export class AppModule {}
