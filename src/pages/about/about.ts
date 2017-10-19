import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import firebase from 'firebase';

@IonicPage({name: 'AboutPage'})
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public firebaseProvider: FirebaseProvider) {

    if (firebaseProvider.currentUser == " "){ // if the currentUser is not defined for some reason, it takes to the login page.
      this.navCtrl.setRoot('LoginPage');
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
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