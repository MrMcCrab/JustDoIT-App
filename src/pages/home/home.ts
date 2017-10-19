// This is the landing page for the application.

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

  signIn() { // Function for the signin button.
  	this.navCtrl.push('LoginPage');
  }

  register() { // Function for the register button.
  	this.navCtrl.push('RegisterPage');
  }

}

// This file is part of the JustDoIT Application developed by Sampsa Kares, Petteri Vaskin, Mikael Haapa-aho, Juuso Heinonen, and Asko Mikkola.