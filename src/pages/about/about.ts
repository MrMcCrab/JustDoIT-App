import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { FirebaseListObservable } from 'angularfire2/database';
import { AuthService } from '../../providers/auth-service/auth-service';
import firebase from 'firebase';

/**
 * Generated class for the AboutPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({name: 'AboutPage'})
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public firebaseProvider: FirebaseProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
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

}
