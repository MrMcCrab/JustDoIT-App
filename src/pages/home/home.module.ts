import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
@NgModule({
  declarations: [HomePage],
  imports: [IonicPageModule.forChild(HomePage)],
  exports: [HomePage]
})
export class HomePageModule { }

// This file is part of the JustDoIT Application developed by Sampsa Kares, Petteri Vaskin, Mikael Haapa-aho, Juuso Heinonen, and Asko Mikkola.