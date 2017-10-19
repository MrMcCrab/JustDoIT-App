// This file contains the main functionality for the app.

import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { FirebaseListObservable } from 'angularfire2/database';
import { AuthService } from '../../providers/auth-service/auth-service';
import firebase from 'firebase';

@IonicPage({name: 'ListPage'})
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})

export class ListPage {
  shoppingItems: FirebaseListObservable<any[]>;
  newItem = '';
  username = '';
  email = '';

  @ViewChild('username') user;
  @ViewChild('password') password;

  constructor(private navCtrl: NavController, private auth: AuthService, public navParams: NavParams, public firebaseProvider: FirebaseProvider, private toast: ToastController) {
    let info = this.auth.getUserInfo();
    console.log(info);
    console.log(this.firebaseProvider.currentUser);
   if (firebaseProvider.currentUser == " "){ // first makes sure that there really is an active user.
    this.navCtrl.setRoot('LoginPage'); // if not, it takes to the login page.
    } else {
      this.shoppingItems = this.firebaseProvider.getShoppingItems(this.firebaseProvider.currentUser); // sends the currentUser to the 'getShoppingItems' function.
      console.log(this.firebaseProvider.currentUser);
    }
  }

  addItem() {
    if (this.firebaseProvider.currentUser == " "){
      this.navCtrl.setRoot('LoginPage');
      } else {
        this.firebaseProvider.addItem(this.newItem, this.firebaseProvider.currentUser); // sends the new item name and the currentUser to the 'addItem' function.
        this.toast.create({ // gives feedback to the user for their action.
          message: `Item added!`,
          duration: 2000
          }).present();
      }
  }
 
  removeItem(id) {
    if (this.firebaseProvider.currentUser == " "){
      this.navCtrl.setRoot('LoginPage');
      } else {
        this.firebaseProvider.removeItem(id, this.firebaseProvider.currentUser); // sends the selected item name and the currentUser to the 'removeItem' function.
      }
  }

  public logout() {
    firebase.auth().signOut().then(() => {
      console.log("Logged out!")
      this.firebaseProvider.currentUser = " "; // sets the currentUser to nobody.
      document.location.href = 'index.html'; // reloads the app to force the user out of the member area.
    }, function(error) {
      console.log("Error!")
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

}

// This file is part of the JustDoIT Application developed by Sampsa Kares, Petteri Vaskin, Mikael Haapa-aho, Juuso Heinonen, and Asko Mikkola.
