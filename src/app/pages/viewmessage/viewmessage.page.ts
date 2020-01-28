import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

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
      private modalController:ModalController,) {

        this.route.queryParams.subscribe(params => {
          if (params && params.messageReadList) {
            this.index=JSON.parse(params.index)
            this.messageReadList = JSON.parse(params.messageReadList);
            
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

       }

  ngOnInit() {
  }

  close(){
    this.modalController.dismiss();
  }
}
