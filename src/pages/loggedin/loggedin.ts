import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, Nav } from 'ionic-angular';
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

  constructor(public app: App, private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
 	this.email = fire.auth.currentUser.email;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoggedinPage');
  }

  public logout() {
    firebase.auth().signOut().then(function() {
      console.log("Logged out!!!")
      //this.navCtrl.setRoot('LoginPage');
      //this.app.getRootNav().setRoot('LoginPage')
      this.app.setRoot('LoginPage');
    }, function(error) {
      console.log("ERROR!!!")
    });
  }

  // public logout() {
  //   this.auth.logout().subscribe(succ => {
  //     this.app.getRootNav().setRoot('login-page') //hide tabs after logout
  //   });
  // }

}
