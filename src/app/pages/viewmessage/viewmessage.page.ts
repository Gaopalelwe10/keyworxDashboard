import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController, AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';
import { PropertyService } from 'src/app/services/property.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-viewmessage',
  templateUrl: './viewmessage.page.html',
  styleUrls: ['./viewmessage.page.scss'],
})
export class ViewmessagePage implements OnInit {
  index: any;
  sliderOpts={ 
    zoom: { 
      maxRatio: 3
    }
  };
  messageUnReadList: any;
  propertyLink: unknown[];
  messageList: unknown[];
  messageReadList(messageReadList: any) {
    throw new Error("Method not implemented.");
  }

  constructor(private navParams:NavParams,  
    private route:ActivatedRoute,
      private modalController:ModalController,
      private messageServ: MessageService,
      private alertCtrl: AlertController,
      private afs : AngularFirestore,
      private propertyService: PropertyService, 
      private router: Router ,
      ) {

        this.route.queryParams.subscribe(params => {
          if (params && params.messageReadList) {
            this.index=JSON.parse(params.index)
            this.messageReadList = JSON.parse(params.messageReadList) ;
            
            console.log(this.messageReadList)
            console.log(this.index)
          }
          
        });
        this.route.queryParams.subscribe(params => {
          if (params && params.messageUnReadList) {
            this.index=JSON.parse(params.index)
            this.messageUnReadList = JSON.parse(params.messageUnReadList);
            
            console.log(this.messageUnReadList)
            console.log(this.index)
          }
          
        });

        // this.messageServ.updateMessage().
        // this.propertyService.propertyList().subscribe((data: any) => {
        //   this.propertyLink = data.map(e => {
        //     return {
        //       key: e.payload.doc.id,
        //       ...e.payload.doc.data()
        //     }
        //   })
        //   // console.log("p")
        //   console.log(this.propertyLink = this.messageList.propertyid);
        // })

        this.messageServ.getMessages().subscribe(data => {
          this.messageList = data;
          // console.log('mggg')
          console.log(data)
          console.log(this.messageList);
        })
       }

  ngOnInit() {
  }

  close(){
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
            this.messageServ.deleteMessage(msg.key)
          }
        }
      ]
    }).then(
      alert => alert.present()
    );
  }

 
}
