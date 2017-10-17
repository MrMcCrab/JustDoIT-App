import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()

export class FirebaseProvider {

  // constructor(public http: Http) {
  //   console.log('Hello FirebaseProvider Provider');
  // }

  constructor(public afd: AngularFireDatabase) {
    console.log('Hello FirebaseProvider Provider');
  }

  currentUser = " ";
  
  getShoppingItems(name) {
    return this.afd.list('/users/'+name+'/');
  }

  getUsers() {
    return this.afd.list('/users/');
  }

  addUser(name) {
    this.afd.list('/users/'+name+'/').push("Test Product");
  }

  addItem(name, currentId) {
    this.afd.list('/users/'+currentId+'/').push(name);
  }
 
  removeItem(id, currentId) {
    this.afd.list('/users/'+currentId+'/').remove(id);
  }


}
