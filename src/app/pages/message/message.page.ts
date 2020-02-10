import { Component, OnInit } from '@angular/core';
import { Contacts, Contact, ContactField, ContactName} from '@ionic-native/contacts/ngx';
import { MessageService } from 'src/app/services/message.service';
import { ProfileService } from 'src/app/services/profile.service';
import { ModalController, AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewmessagePage } from '../viewmessage/viewmessage.page';
import {MatPaginatorIntl} from '@angular/material/paginator';
import { Feature } from 'src/app/services/mapbox.service';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {
 
  Segment = "unread"

  messageList;
  messageReadList;
  messageUnReadList;
  selectedMessage = null;

  // segmentChanged(ev: any) {
  //   console.log('Segment changed', ev);
  // }
  //  searchbar = document.querySelector('ion-searchbar');
  //  items = Array.from(document.querySelector('div').children);

  message: string[] = [];
  messageService: any;
  searchTerm: string;
  temp: any;
  rows: any;
  table: any;
  location: any;
  messageListLoad: any;

  constructor(
    private contacts: Contacts,
    private messageServ: MessageService,
    private profileServ: ProfileService,
    private route: ActivatedRoute,
    private router: Router,
    private modalController: ModalController,
    private alertCtrl: AlertController,
    private firestore: AngularFirestore
    ) {

      this.messageServ.getMessages().subscribe((data:any )=> {
        this.messageList = data.map(e => {
          return {
            key: e.payload.doc.id,
            ...e.payload.doc.data()
          }
        })
        console.log('mggg')
       
        console.log(this.messageList);
      })

      this.messageServ.getMessagesRead().subscribe((data:any ) => {
          this.messageReadList = data;
          this.messageListLoad = data;
        this.messageReadList = data.map(e => {
          return {
            key: e.payload.doc.id,
            ...e.payload.doc.data()
          }
        })
   
        console.log(this.messageReadList);
      })

      this.messageServ.getMessagesUnRead().subscribe((data:any ) => {
        this.messageUnReadList = data.map(e => {
          return {
            key: e.payload.doc.id,
            ...e.payload.doc.data()
          }
        })

        console.log(this.messageUnReadList);
        
      })
 

    // let contact: Contact = this.contacts.create();

    // contact.name = new ContactName (null, '', '');
    // contact.phoneNumbers = [new ContactField('mobile', '')];
    // contact.save().then(
    //   () => console.log('Contact saved!', contact),
    //   (error: any) => console.error('Error saving contact.', error)
    // );
    }

    initializeItems(): void {
      this.messageReadList  = this.messageListLoad;
    }
    
    search(event) {
  
    this.initializeItems();
    const searchTerm = event.srcElement.value;


    if (!searchTerm) {
      return;
    }  

      this.messageReadList = this.messageReadList.filter(current => {
        if (current.name && searchTerm) {
          if (current.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
            return true;
          }
          return false;
        }
      });
  
    }
    
  ngOnInit() {
   
  }

  OpenPreview(msg) {
    this.messageServ.updateMessage(msg.key)
    this.modalController.create({
      component: ViewmessagePage,
      componentProps: {
        msg: msg
      }
    }).then(modal => modal.present())
    

  }
 
}
