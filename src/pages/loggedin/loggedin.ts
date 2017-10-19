// This page is shown as the "home" page to the user.

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import firebase from 'firebase';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage({name: 'LoggedinPage'})
@Component({
  selector: 'page-loggedin',
  templateUrl: 'loggedin.html',
})
export class LoggedinPage {

  email: string;
  name: string;

  constructor(public app: App, public navCtrl: NavController, public navParams: NavParams, private fire: AngularFireAuth, public firebaseProvider: FirebaseProvider) {
   this.email = fire.auth.currentUser.email;
   //this.name = fire.auth.currentUser.displayName;
   if (firebaseProvider.currentUser == " "){
    this.navCtrl.setRoot('LoginPage');
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoggedinPage');
  }

  public logout() {
    firebase.auth().signOut().then(() => {
      console.log("Logged out!")
      this.firebaseProvider.currentUser = " "; // sets the currentUser to nobody.
      //this.navCtrl.setRoot('LoginPage');
      document.location.href = 'index.html'; // reloads the app to force the user out of the member area.
    }, function(error) {
      console.log("Error!")
    });
  }


}

// This file is part of the JustDoIT Application developed by Sampsa Kares, Petteri Vaskin, Mikael Haapa-aho, Juuso Heinonen, and Asko Mikkola.
