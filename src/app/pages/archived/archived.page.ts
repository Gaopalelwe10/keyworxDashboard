import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  selector: 'app-archived',
  templateUrl: './archived.page.html',
  styleUrls: ['./archived.page.scss'],
})
export class ArchivedPage implements OnInit {
  propertyList;
  data = false
  constructor(
    private route: Router,
    private propertyService: PropertyService,
    private navCtrl: NavController,
    private alertCtrl: AlertController
  ) { 
    this.propertyService.propertyListArchived().subscribe((data: any) => {
      this.propertyList = data.map(e => {
        return {
          key: e.payload.doc.id,
          ...e.payload.doc.data()
        }
      })
      console.log(this.propertyList);
      this.data=true;
    });
  }

  ngOnInit() {
  }
  deleteproperty(details) {

    this.alertCtrl.create({
      // message: 'Total R ' + this.price*this.increment,
      subHeader: 'Are you sure you want to delete this property permanently',
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
            this.propertyService.deletePermanently(details.key)
          }
        }
      ]
    }).then(
      alert => alert.present()
    );
  }

  sendToProperty(details){

    this.alertCtrl.create({
      // message: 'Total R ' + this.price*this.increment,
      subHeader: 'Are you sure you want to Restore this property',
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
            this.propertyService.sendToPropertyList(details.key)
          }
        }
      ]
    }).then(
      alert => alert.present()
    ); 
  }

  upadate(details) {
    // this.route.navigate(['/updateproperty'], { queryParams: { data: data } });
    this.navCtrl.navigateForward('/updateproperty', { queryParams: { key: details.key } })
  }
}
