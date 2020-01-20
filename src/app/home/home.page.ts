import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { PropertyService } from '../services/property.service';
import { UsersService } from '../services/users.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  property = 0;
  users = 0;
  message = 0;

  constructor(
    private menuCtrl: MenuController,
    private propertyService: PropertyService,
    private userService: UsersService,
    private messageServ: MessageService
  ) {
    this.propertyService.getProperty().subscribe((data: any) => {
      this.property = data.length
    })

    this.userService.getUsers().subscribe((data1: any) => {
      this.users = data1.length
    })

    this.messageServ.getMessages().subscribe((data2: any) => {
      this.message = data2.length
    })
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }
}
