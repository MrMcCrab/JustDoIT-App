import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoggedinPage } from './loggedin';

@NgModule({
  declarations: [
    LoggedinPage,
  ],
  imports: [
    IonicPageModule.forChild(LoggedinPage),
  ],
  exports: [
    LoggedinPage
  ]
})
export class LoggedinPageModule {}

// This file is part of the JustDoIT Application developed by Sampsa Kares, Petteri Vaskin, Mikael Haapa-aho, Juuso Heinonen, and Asko Mikkola.