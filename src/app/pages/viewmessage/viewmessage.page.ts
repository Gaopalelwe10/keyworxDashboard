import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController, AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';
import { PropertyService } from 'src/app/services/property.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Contacts, ContactName, ContactField, Contact } from '@ionic-native/contacts/ngx';

@Component({
  selector: 'app-viewmessage',
  templateUrl: './viewmessage.page.html',
  styleUrls: ['./viewmessage.page.scss'],
})
export class ViewmessagePage implements OnInit {
  index: any;
  sliderOpts = {
    zoom: {
      maxRatio: 3
    }
  };
  messageUnReadList: any;
  propertyLink:any;
  messageList:any;
  messageReadList: any;


  constructor(private navParams: NavParams,
    private route: ActivatedRoute,
    private contacts: Contacts,
    private modalController: ModalController,
    private messageServ: MessageService,
    private alertCtrl: AlertController,
    private afs: AngularFirestore,
    private propertyService: PropertyService,
    private router: Router,
  ) {

    this.route.queryParams.subscribe(params => {
      if (params && params.messageReadList) {
        this.index = JSON.parse(params.index)
        this.messageReadList = JSON.parse(params.messageReadList);

        console.log(this.messageReadList)
        console.log(this.index)
      }

    });
    this.route.queryParams.subscribe(params => {
      if (params && params.messageUnReadList) {
        this.index = JSON.parse(params.index)
        this.messageUnReadList = JSON.parse(params.messageUnReadList);

        console.log(this.messageUnReadList)
        console.log(this.index)
      }
    });

    this.route.queryParams.subscribe(params => {
      if (params && params.messageList) {
        this.index = JSON.parse(params.index)
        this.messageList = JSON.parse(params.messageList);

        console.log(this.messageList)
        console.log(this.index)
      }

    });
    this.propertyService.propertyList().subscribe((data: any) => {
      this.propertyLink = data.map(e => {
        return {
          key: e.payload.doc.id,
          ...e.payload.doc.data()
        }
      })
      console.log(this.propertyLink);
    })

    this.messageServ.getMessages().subscribe(data => {
      this.messageList = data;
      // console.log('mggg')
      console.log(data)
      console.log(this.messageList);
    })

  }

  ngOnInit() {

  }

  close() {
    this.modalController.dismiss();
  }

  deleteMessage(msg) {

    this.alertCtrl.create({
      subHeader: 'Are you sure you want to delete this message',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {

            console.log('Cancel clicked');
          }
        },
        {
          text: 'Confirm',
          handler: () => {
            this.messageServ.deleteMessaged(msg.key).then(() => {
              this.modalController.dismiss();;
            });
          }
        }
      ]
    }).then(
      alert => alert.present()
    );
  }


  async delete(key) {
    const alert = await this.alertCtrl.create({
      header: 'Confirm!',
      message: 'Are you sure want to delete this info?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('cancel');
          }
        }, {
          text: 'Okay',
          handler: () => {
            this.afs.collection("message").doc('messageList/' + key).delete()
            // firebase.database().ref('infos/'+key).remove();
          }
        }
      ]
    });

    await alert.present();
  }

  updateMessage(msg) {
    this.messageServ.updateMessageUnread(msg.key).then(() => {
      this.modalController.dismiss();
    })
  }


  createContact(msg,details) {
    let contact: Contact = this.contacts.create();
    // console.log(this.messageList.name + this.propertyLink.location)
    console.log(msg.name)
    console.log(details.location)
    contact.name = new ContactName(null, details.location, msg.name);
    contact.phoneNumbers = [new ContactField('mobile', msg.number)];
    contact.save().then(() =>
      console.log('contact saved!'),
      (error: any) =>
        console.error('Error saving contact.', error)
    );

  }
}
