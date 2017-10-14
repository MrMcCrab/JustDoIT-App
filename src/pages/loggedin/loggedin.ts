import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';

/**
 * Generated class for the LoggedinPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({name: 'LoggedinPage'})
@Component({
  selector: 'page-loggedin',
  templateUrl: 'loggedin.html',
})
export class LoggedinPage {

	email: string;

  constructor(private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
 	this.email = fire.auth.currentUser.email;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoggedinPage');
  }

  public logout() {
    firebase.auth().signOut().then(function() {
      console.log("Logged out!!!")
      //this.navCtrl.setRoot('LoginPage');
    }, function(error) {
      console.log("ERROR!!!")
    });
  }

}
