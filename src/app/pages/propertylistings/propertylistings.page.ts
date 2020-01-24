import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PropertyService } from 'src/app/services/property.service';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-propertylistings',
  templateUrl: './propertylistings.page.html',
  styleUrls: ['./propertylistings.page.scss'],
})
export class PropertylistingsPage implements OnInit {
  propertyList
  constructor(
    private route: Router,
    private propertyService: PropertyService,
    private navCtrl: NavController,
    private alertCtrl: AlertController
  ) {
    this.propertyService.propertyList().subscribe((data: any) => {
      this.propertyList = data.map(e => {
        return {
          key: e.payload.doc.id,
          ...e.payload.doc.data()
        }
      })
      console.log(this.propertyList);
    })
  }

  ngOnInit() {
  }

  addproperty() {
    this.route.navigateByUrl("addproperty")
  }
  deleteproperty(details) {

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
            this.propertyService.deleteproperty(details.key)
          }
        }
      ]
    }).then(
      alert => alert.present()
    );
  }
  upadate(data) {
    // this.route.navigate(['/updateproperty'], { queryParams: { data: data } });
    this.navCtrl.navigateForward('/updateproperty', { queryParams: { key: data.key } })
  }
}
