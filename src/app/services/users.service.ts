import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor( 
    private afs: AngularFirestore
    ) { }

    getUsers(){
      return this.afs.collection('users').valueChanges();
    }
}
