import { Component, OnInit } from '@angular/core';
import { Contacts, Contact, ContactField, ContactName} from '@ionic-native/contacts/ngx';
import { MessageService } from 'src/app/services/message.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {

  messageList;
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }
  
  constructor(
    private contacts: Contacts,
    private messageServ: MessageService,
    private profileServ: ProfileService,) {
      
      const uid = this.profileServ.getUID();

      this.messageServ.getMessages().subscribe(data => {
        this.messageList = data;
        console.log(data)
      })
 

   
  //   let contact: Contact = this.contacts.create();

  //   contact.name = new ContactName (null, '', '');
  //   contact.phoneNumbers = [new ContactField('mobile', '')];
  //   contact.save().then(
  //     () => console.log('Contact saved!', contact),
  //     (error: any) => console.error('Error saving contact.', error)
  //   );
   }


  ngOnInit() {
  }

}
