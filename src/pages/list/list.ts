import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import firebase from 'firebase';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { FirebaseListObservable } from 'angularfire2/database';
import { AuthService } from '../../providers/auth-service/auth-service';

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

  constructor(private navCtrl: NavController, private auth: AuthService, public navParams: NavParams, public firebaseProvider: FirebaseProvider) {
    let info = this.auth.getUserInfo();
    //this.username = info['name'];
    //this.email = info['email'];
    this.shoppingItems = this.firebaseProvider.getShoppingItems();
  }

  addItem() {
    this.firebaseProvider.addItem(this.newItem);
  }
 
  removeItem(id) {
    this.firebaseProvider.removeItem(id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

}
