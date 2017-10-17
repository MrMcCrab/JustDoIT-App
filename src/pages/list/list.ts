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
   if (firebaseProvider.currentUser == " "){
    this.navCtrl.setRoot('LoginPage');
    } else {
      this.shoppingItems = this.firebaseProvider.getShoppingItems(this.firebaseProvider.currentUser);
      console.log(this.firebaseProvider.currentUser);
    }
  }

  addItem() {
    if (this.firebaseProvider.currentUser == " "){
      this.navCtrl.setRoot('LoginPage');
      } else {
        this.firebaseProvider.addItem(this.newItem, this.firebaseProvider.currentUser);
        this.toast.create({
          message: `Item added!`,
          duration: 2000
          }).present();
      }
  }
 
  removeItem(id) {
    if (this.firebaseProvider.currentUser == " "){
      this.navCtrl.setRoot('LoginPage');
      } else {
        this.firebaseProvider.removeItem(id, this.firebaseProvider.currentUser);
      }
  }

  public logout() {
    firebase.auth().signOut().then(() => {
      console.log("Logged out!")
      this.firebaseProvider.currentUser = " ";
      //this.navCtrl.setRoot('LoginPage');
      document.location.href = 'index.html';
    }, function(error) {
      console.log("Error!")
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

}
