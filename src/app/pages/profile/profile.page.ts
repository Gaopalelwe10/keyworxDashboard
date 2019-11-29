import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  agents: any;
  currentuser: string;
  private Profiles: AngularFirestoreDocument
  sub
  name: string;
  agentList;
  uploadPercent: number;

  constructor(
    private profileServ: ProfileService,  
    private afAuth: AngularFireAuth,
    private router: Router,
    public afs: AngularFirestore,
    private alertCtrl: AlertController) {

    const uid = this.afAuth.auth.currentUser.uid;

    this.profileServ.getAgent(uid).subscribe(data => {
      this.agentList = data;
      console.log(data)
    })

    this.agents = this.afs.collection('agent').valueChanges();
    this.currentuser = this.profileServ.getUID();
    console.log(this.currentuser)
    this.Profiles = afs.doc(`agent/${profileServ.getUID()}`)
    this.sub = this.Profiles.valueChanges().subscribe(event => {
      this.name = event.name
     
    })
    
   }

  ngOnInit() {
  }

  uploadProfilePic(event){
    this.profileServ.uploadPhoto(event).subscribe((data:number)=>{
      this.uploadPercent=data
      console.log(this.uploadPercent)
    })
  }

  async nameChange(agentList) {
    const alert = await this.alertCtrl.create({
      subHeader: 'Edit Name',
      inputs: [
        {
          name: 'name',
          type: 'text',
          value: agentList.name,
          placeholder: 'Name'
        },

      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          }
        }, {
          text: 'Ok',
          handler: (a) => {
            console.log(a.name1)
            this.Profiles.update({

              name: a.name,
            })

          }
        }
      ]
    });
    await alert.present();
    let result = await alert.onDidDismiss();
  }

  async surnameChange(agentList) {
    const alert = await this.alertCtrl.create({
      subHeader: 'Edit Surname',
      inputs: [
        {
          name: 'surname',
          type: 'text',
          value: agentList.surname,
          placeholder: 'Surname'
        },

      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          }
        }, {
          text: 'Ok',
          handler: (a) => {
            console.log(a.surname1)
            this.Profiles.update({

              surname: a.surname,
            })

          }
        }
      ]
    });
    await alert.present();
    let result = await alert.onDidDismiss();
  }

  async companyChange(agentList) {
    const alert = await this.alertCtrl.create({
      subHeader: 'Edit Company Name',
      inputs: [
        {
          name: 'companyName',
          type: 'text',
          value: agentList.companyName,
          placeholder: 'Company Name'
        },

      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          }
        }, {
          text: 'Ok',
          handler: (a) => {
            console.log(a.companyName1)
            this.Profiles.update({

              companyName: a.companyName,
            })

          }
        }
      ]
    });
    await alert.present();
    let result = await alert.onDidDismiss();
  }

  async numberChange(agentList) {
    const alert = await this.alertCtrl.create({
      subHeader: 'Edit Number',
      inputs: [
        {
          name: 'number',
          type: 'text',
          value: agentList.number,
          placeholder: 'Number'
        },

      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          }
        }, {
          text: 'Ok',
          handler: (a) => {
            console.log(a.number1)
            this.Profiles.update({

              number: a.number,
            })

          }
        }
      ]
    });
    await alert.present();
    let result = await alert.onDidDismiss();
  }
}
