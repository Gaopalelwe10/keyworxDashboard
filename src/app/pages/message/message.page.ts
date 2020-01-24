import { Component, OnInit } from '@angular/core';
import { Contacts, Contact, ContactField, ContactName} from '@ionic-native/contacts/ngx';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

  constructor(private contacts: Contacts) { 

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
