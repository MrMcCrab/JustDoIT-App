// This is the tabs bar visible at the bottom of the application user interface.

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({name: 'TabsPage'})
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1Root='LoggedinPage';
  tab2Root='ListPage';
  tab3Root='AboutPage';
  myIndex: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.myIndex = navParams.data.tabIndex || 0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}

// This file is part of the JustDoIT Application developed by Sampsa Kares, Petteri Vaskin, Mikael Haapa-aho, Juuso Heinonen, and Asko Mikkola.