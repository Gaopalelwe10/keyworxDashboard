import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts/ngx';
import { MessageService } from 'src/app/services/message.service';
import { ProfileService } from 'src/app/services/profile.service';
import { ModalController, AlertController, Platform } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewmessagePage } from '../viewmessage/viewmessage.page';
import * as moment from 'moment';
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
  messageReadListLoad: any;
  messageUnReadListLoad: any;
  isBrowser = false
  isSearchbar: boolean = false;
  isSegment: boolean = true;
  isHover: boolean = false;
  constructor(
    private messageServ: MessageService,
    private modalController: ModalController,
    private platform: Platform,
    private alertCtrl: AlertController,

  ) {

    if (this.platform.is("desktop")) {
      this.isBrowser = true
    }

    this.messageServ.getMessages().subscribe((data: any) => {
      this.messageList = data.map(e => {
        return {
          key: e.payload.doc.id,
          ...e.payload.doc.data()
        }
      }).reverse()
      this.messageListLoad = this.messageList;

      console.log(this.messageList);
    })

    this.messageServ.getMessagesRead().subscribe((data: any) => {

      this.messageReadList = data.map(e => {
        return {
          key: e.payload.doc.id,
          ...e.payload.doc.data()
        }
      }).reverse()

      this.messageReadListLoad = data.map(e => {
        return {
          key: e.payload.doc.id,
          ...e.payload.doc.data()
        }
      }).reverse()

    })

    this.messageServ.getMessagesUnRead().subscribe((data: any) => {
      this.messageUnReadList = data.map(e => {
        return {
          key: e.payload.doc.id,
          ...e.payload.doc.data()
        }
      }).reverse()

      this.messageUnReadListLoad = data.map(e => {
        return {
          key: e.payload.doc.id,
          ...e.payload.doc.data()
        }
      }).reverse()
    })

  }


  ngOnInit() {

  }

  initializeItems(): void {
    this.messageList = this.messageListLoad;
    this.messageReadList = this.messageReadListLoad;
    this.messageUnReadList = this.messageUnReadListLoad;
  }

  search(event) {

    this.initializeItems();
    const searchTerm = event.srcElement.value;


    if (!searchTerm) {
      return;
    }

    this.messageList = this.messageList.filter(currentlist => {
      if (currentlist.name && searchTerm) {
        if (currentlist.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });

    this.messageReadList = this.messageReadList.filter(currentRead => {
      if (currentRead.name && searchTerm) {
        if (currentRead.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });

    this.messageUnReadList = this.messageUnReadList.filter(currentUnRead => {
      if (currentUnRead.name && searchTerm) {
        if (currentUnRead.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });

  }

  onScroll(event) {
    if (event.detail.deltaY > 0) {
      console.log("scrolling down, ");
      // this.foundation.hiddenTabs = true;
      this.isSegment = false
    } else if (event.detail.deltaY < 0) {
      console.log("scrolling up, ");
      this.isSegment = true
      // this.foundation.hiddenTabs = false;
    };
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

            });
          }
        }
      ]
    }).then(
      alert => alert.present()
    );
  }
  shorten_text(text) {
    var maxLength = 18;
    var ret = text;
    if (ret.length > maxLength) {
      ret = ret.substr(0, maxLength - 3) + ".";
    }
    return ret;
  }

  timeFrame(time) {

    // return moment(time).calendar("HH:mm");
    var otherDates = moment(time).fromNow();
    var calback = function () {
      return '[' + otherDates + ']';
    }
    return moment(time).calendar(null, {
      sameDay: 'HH:mm',
      nextDay: calback,
      nextWeek: calback,
      lastDay: "DD MMM",
      lastWeek: "DD MMM",
      sameElse: 'DD/MM/YYYY'
    });
  }

  getColor(str) {
    let letter = str.substring(0, 1).toLowerCase()
    switch (letter) {
      case "a":
        return "#7CB9E8";
      case "b":
        return "blue";
      case "c":
        return "#81613C";
      case "d":
        return "#CD9575";
      case "e":
        return "#614051";
      case "f":
        return "Firebrick";
      case "g":
        return "#B8860B";
      case "h":
        return "#915C83";
      case "i":
        return "	#568203";
      case "j":
        return "#FF91AF	";
      case "k":
        return "#C19A6B";
      case "l":
        return "#1DACD6";
      case "m":
        return "#7F1734";
      case "n":
        return "#1974D2";
      case "o":
        return "Orange";
      case "p":
        return "pink";
      case "q":
        return "#436B95";
      case "r":
        return "red";
      case "s":
        return "#FF3800";
      case "t":
        return "#E68FAC";
      case "u":
        return "#C95A49";
      case "v":
        return "#8806CE";
      case "w":
        return "#536878";
      case "x":
        return "#856D4D";
      case "y":
        return "Yellow";
      case "z":
        return "#9932CC";
      default:
        return "gray";
    }
  }
}
