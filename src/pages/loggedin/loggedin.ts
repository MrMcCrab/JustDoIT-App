import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, App, Nav } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';
import { FirebaseProvider } from './../../providers/firebase/firebase';
//import { FirebaseListObservable } from 'angularfire2/database';
//import { AuthService } from '../../providers/auth-service/auth-service';

@IonicPage({name: 'LoggedinPage'})
@Component({
  selector: 'page-loggedin',
  templateUrl: 'loggedin.html',
})
export class LoggedinPage {

  email: string;
  name: string;

  constructor(public app: App, private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams,  public firebaseProvider: FirebaseProvider) {
   this.email = fire.auth.currentUser.email;
   //this.name = fire.auth.currentUser.displayName;

  }

 

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoggedinPage');
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
