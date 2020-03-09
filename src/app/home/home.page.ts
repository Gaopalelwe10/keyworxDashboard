import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { PropertyService } from '../services/property.service';
import { UsersService } from '../services/users.service';
import { MessageService } from '../services/message.service';
import { DatePipe } from '@angular/common';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [DatePipe]
})
export class HomePage {

  property = 0;
  users = 0;
  message = 0;
  messagesList; 

  labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  LineChart = [];
  date = [];

  value: string;

  Jan = 0;
  Feb = 0;
  Mar = 0;
  Apr = 0;
  May = 0;
  June = 0;
  July = 0;
  Aug = 0;
  Sept = 0;
  Oct = 0;
  Nov = 0;
  Dec = 0;


  public data = []
  constructor(
    private menuCtrl: MenuController,
    private propertyService: PropertyService,
    private userService: UsersService,
    private messageServ: MessageService,
    public datepipe: DatePipe
  ) {
    this.propertyService.propertyList().subscribe((data: any) => {
      this.property = data.length
    })

    this.userService.getUsers().subscribe((data1: any) => {
      this.users = data1.length
    })

    this.messageServ.getMessages().subscribe((data2: any) => {
      this.message = data2.length
    })

    this.lineChart();
    this.lineChart2();
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }
  
  lineChart() {
    this.messageServ.getMessages().subscribe((data: any) => {
      this.messagesList = data.map(e => {
        return {
          key: e.payload.doc.id,
          ...e.payload.doc.data()
        }
      })
      this.messagesList.forEach(element => {
        this.value = this.datepipe.transform(element.date, 'MMM');

        if (this.value === 'Jan') {
          this.Jan++;
        }

        if (this.value === 'Feb') {
          this.Feb++;
        }

        if (this.value === "Mar") {
          this.Mar++;
        }
        if (this.value === "Apr") {
          this.Apr++;
        }
        if (this.value === "May") {
          this.May++;
        }
        if (this.value === "Jun") {
          this.June++;
        }
        if (this.value === "Jul") {
          this.July++;
        }
        if (this.value === "Aug") {
          this.Aug++;
        }
        if (this.value === "Sep") {
          this.Sept++;
        }
        if (this.value === "Oct") {
          this.Oct++;
        }
        if (this.value === "Nov") {
          this.Nov++;
        }
        if (this.value === "Dec") {
          this.Dec++;
        }
       
      });

      this.LineChart = new Chart('lineChart1', {
        type: 'line',
        data: {
          labels: this.labels,
          datasets: [{
            label: 'Messages per month',
            data: [this.Jan, this.Feb, this.Mar, this.Apr, this.May, this.June, this.July, this.Aug, this.Sept, this.Oct, this.Nov, this.Dec],
            // data: [12, 0, 0, this.Apr, this.May, this.June, this.July, this.Aug, this.Sept, this.Oct, this.Nov, this.Dec],
            fill: true,
            lineTension: 0.2,
            borderColor: "#a02b2d",
            backgroundColor: '#a05f7b',
            borderWidth: 1
          }]

        },
        options: {
          responsive: true,
          title: {
            text: "Line Chart",
            display: true
          },
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      });
      this.value = null
      this.Jan = 0;
      this.Feb = 0;
      this.Mar = 0;
      this.Apr = 0;
      this.May = 0;
      this.June = 0;
      this.July = 0;
      this.Aug = 0;
      this.Sept = 0;
      this.Oct = 0;
      this.Nov = 0;
      this.Dec = 0;
    })
  }

  lineChart2() {
    this.userService.getUsers().subscribe((data: any) => {
      data.forEach(element => {
        this.value = this.datepipe.transform(element.created, 'MMM');

        if (this.value === 'Jan') {
          this.Jan++;
        }

        if (this.value === 'Feb') {
          this.Feb++;
        }

        if (this.value === "Mar") {
          this.Mar++;
        }
        if (this.value === "Apr") {
          this.Apr++;
        }
        if (this.value === "May") {
          this.May++;
        }
        if (this.value === "Jun") {
          this.June++;
        }
        if (this.value === "Jul") {
          this.July++;
        }
        if (this.value === "Aug") {
          this.Aug++;
        }
        if (this.value === "Sep") {
          this.Sept++;
        }
        if (this.value === "Oct") {
          this.Oct++;
        }
        if (this.value === "Nov") {
          this.Nov++;
        }
        if (this.value === "Dec") {
          this.Dec++;
        }
 
      });

      this.LineChart = new Chart('lineChart2', {
        type: 'line',
        data: {
          labels: this.labels,
          datasets: [{
            label: 'Users registered per month',
            data: [this.Jan, this.Feb, this.Mar, this.Apr, this.May, this.June, this.July, this.Aug, this.Sept, this.Oct, this.Nov, this.Dec],
            // data: [12, 0, 0, this.Apr, this.May, this.June, this.July, 9, this.Sept, this.Oct, this.Nov, this.Dec],
            fill: true,
            lineTension: 0.2,
            borderColor: "#a02b2d",
            backgroundColor: '#6c9377',
            borderWidth: 1
          }]

        },
        options: {
          responsive: true,
          title: {
            text: "Line Chart",
            display: true
          },
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      });
      
      this.value = null
      this.Jan = 0;
      this.Feb = 0;
      this.Mar = 0;
      this.Apr = 0;
      this.May = 0;
      this.June = 0;
      this.July = 0;
      this.Aug = 0;
      this.Sept = 0;
      this.Oct = 0;
      this.Nov = 0;
      this.Dec = 0;
    })
  }

}
