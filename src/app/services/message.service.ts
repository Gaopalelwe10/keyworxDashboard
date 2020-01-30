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
    return this.afs.collection('message' ,ref=>ref.where('AgentUid', '==' ,this.profileService.getUID() )).snapshotChanges();
  }
  getMessagesUnRead(){
    return this.afs.collection('message' ,ref=>ref.where('AgentUid', '==' ,this.profileService.getUID()).where('isRead', '==', false )).snapshotChanges();
  }
  getMessagesRead(){
    return this.afs.collection('message' ,ref=>ref.where('AgentUid', '==' ,this.profileService.getUID()).where('isRead', '==', true )).snapshotChanges();
  }

  // updateMessage(uid, isRead){
  //   return this.afs.collection("message").doc(uid).update(isRead == true )
  // }

  deleteMessaged(messageid){
    return this.afs.collection("message").doc(messageid).delete().then(() => {
      this.alertCtrl.create({
        subHeader: 'Message successfully deleted',
        buttons: [
          {
            text: 'ok',
            handler: (bluh) => {
              this.router.navigateByUrl('pages/message');
            }
          }
        ]
      }).then (
        alert => alert.present()
      );
    })
  }


  deletethis(messageid){
    return this.afs.collection('message').doc(messageid).delete()
  }
  
}
