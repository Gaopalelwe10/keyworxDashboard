import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ProfileService } from './profile.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(
    private afs : AngularFirestore,
    private profileService: ProfileService
    ) { }

  getMessages(){
    return this.afs.collection('message' ,ref=>ref.where('uid', '==' ,this.profileService.getUID() )).valueChanges();
  }
  getMessagesUnRead(){
    return this.afs.collection('message' ,ref=>ref.where('uid', '==' ,this.profileService.getUID()).where('isRead', '==', false )).valueChanges();
  }
  getMessagesRead(){
    return this.afs.collection('message' ,ref=>ref.where('uid', '==' ,this.profileService.getUID()).where('isRead', '==', true )).valueChanges();
  }

  // updateMessage(uid, isRead){
  //   return this.afs.collection("message").doc(uid).update((isRead).where('isRead', '==', false ) == true)
  // }
}
