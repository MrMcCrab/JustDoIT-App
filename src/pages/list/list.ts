import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
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

  constructor(private navCtrl: NavController, private auth: AuthService, public navParams: NavParams, public firebaseProvider: FirebaseProvider) {
    let info = this.auth.getUserInfo();
    console.log(info);
    //this.username = info['name'];
    //this.email = info['email'];
    this.shoppingItems = this.firebaseProvider.getShoppingItems(this.firebaseProvider.currentUser);
    console.log(this.firebaseProvider.currentUser);
  }

  addItem() {
    this.firebaseProvider.addItem(this.newItem, this.firebaseProvider.currentUser);
  }
 
  removeItem(id) {
    this.firebaseProvider.removeItem(id, this.firebaseProvider.currentUser);
  }

  public logout() {
    firebase.auth().signOut().then(() => {
      console.log("Logged out!!!")
      this.firebaseProvider.currentUser = " ";
      this.navCtrl.setRoot('LoginPage');
    }, function(error) {
      console.log("ERROR!!!")
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

}
