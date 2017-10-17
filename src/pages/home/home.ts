import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular'; 
import { IonicPage } from 'ionic-angular';

@IonicPage({name: 'HomePage'})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	@ViewChild('username') uname;
	@ViewChild('password') password;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
  }

  signIn() {
  	this.navCtrl.push('LoginPage');
  }

  register() {
  	this.navCtrl.push('RegisterPage');
  }

}
