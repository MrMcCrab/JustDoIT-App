// The main provider file.

import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()

export class FirebaseProvider {

  constructor(public afd: AngularFireDatabase) {
    console.log('Hello FirebaseProvider Provider');
  }

  currentUser = " "; // tells the app the username of the account that is currently using the application.
  
  getShoppingItems(name) { // finds the correct database folder for the current user.
    return this.afd.list('/users/'+name+'/');
  }

  getUsers() { // returns all registered users.
    return this.afd.list('/users/');
  }

  addUser(name) { // creates the database folder and test item for a newly registered user.
    this.afd.list('/users/'+name+'/').push("Test Product");
  }

  addItem(name, currentId) { // adds an item to the current user's database folder.
    this.afd.list('/users/'+currentId+'/').push(name);
  }
 
  removeItem(id, currentId) { // removes an item from the current user's database folder.
    this.afd.list('/users/'+currentId+'/').remove(id);
  }


}

// This file is part of the JustDoIT Application developed by Sampsa Kares, Petteri Vaskin, Mikael Haapa-aho, Juuso Heinonen, and Asko Mikkola.
