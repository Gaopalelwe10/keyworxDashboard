import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController, AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';

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
  messageReadList(messageReadList: any) {
    throw new Error("Method not implemented.");
  }

  constructor(private navParams:NavParams,  
    private route:ActivatedRoute,
      private modalController:ModalController,
      private messageServ: MessageService,
      private alertCtrl: AlertController,
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

       }

  ngOnInit() {
  }

  close(){
    this.modalController.dismiss();
  }

  deleteMessage(msg) {

    this.alertCtrl.create({
      // message: 'Total R ' + this.price*this.increment,
      subHeader: 'Are you sure you want to delete this property',
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
