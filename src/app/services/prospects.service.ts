import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProspectsService {

  constructor(private afs: AngularFirestore) { }

  getFavourite(){
    return this.afs.collection('favourite').valueChanges();
  }
}
