import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ProfileService } from './profile.service';
import { AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { MapboxOutput } from './mapbox.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  http: any;

  constructor(
    private afs : AngularFirestore,
    private profileService: ProfileService,
    private alertCtrl: AlertController,
    private router: Router ,
    public toastController: ToastController
    ) { }

  getMessages(){
    return this.afs.collection('message' ,ref=>ref.where('AgentUid', '==' ,this.profileService.getUID() )).snapshotChanges();
  }
  getMessagesUnRead(){
    return this.afs.collection('message' ,ref=>ref.where('AgentUid', '==' ,this.profileService.getUID()).where('isRead', '==', false ).orderBy('date')).snapshotChanges();
  }
  getMessagesRead(){
    return this.afs.collection('message' ,ref=>ref.where('AgentUid', '==' ,this.profileService.getUID()).where('isRead', '==', true ).orderBy('date')).snapshotChanges();
  }

  updateMessage(uid){
    return this.afs.collection("message").doc(uid).update({
      isRead: true
    })
  }

  updateMessageUnread(uid){
    return this.afs.collection("message").doc(uid).update({
      isRead: false
    })
  }

  deleteMessaged(messageid){
    return this.afs.collection("message").doc(messageid).delete().then(async () => {
      const toast = await this.toastController.create({
        color:'primary',
        message: 'Message successfully deleted',
        duration: 1000
      });
      toast.present();
      // this.router.navigateByUrl('pages/message');
    })
  }


  deletethis(messageid){
    return this.afs.collection('message').doc(messageid).delete()
  }
  
  search_word(query: string) {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';
    return this.http.get(url + query + '.json?types=address&country=ZA&access_token=pk.eyJ1IjoibmVvLXB1bGUiLCJhIjoiY2p4cTI0MGF0MGlnajNjbDMzMW9nMzJ6OSJ9.QgND5rJKyVYEmTjBJIrq3g')
      .pipe(map((res: MapboxOutput) => {
        return res.features;
      }))
    }
}
