import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ProfileService } from './profile.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(
    private afs : AngularFirestore,
    private profileService: ProfileService,
    private alertCtrl: AlertController,
    private router: Router 

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
  //   return this.afs.collection("message").doc(uid).update(isRead == true )
  // }

  deleteMessage(messageid){
    return this.afs.collection("message").doc(messageid).delete().then(() => {
      this.alertCtrl.create({
        subHeader: 'Property successfully deleted',
        buttons: [
          {
            text: 'ok',
            handler: () => {
              this.router.navigateByUrl('message');
            }
          }
        ]
      }).then (
        alert => alert.present()
      );
    })
  }
}
