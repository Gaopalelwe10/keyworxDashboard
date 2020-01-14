import { Component, OnInit } from '@angular/core';
import { ProspectsService } from 'src/app/services/prospects.service';

@Component({
  selector: 'app-prospects',
  templateUrl: './prospects.page.html',
  styleUrls: ['./prospects.page.scss'],
})
export class ProspectsPage implements OnInit {

  prospectList

  constructor( private prosServ: ProspectsService) {

    this.prosServ.getFavourite().subscribe((data )=> {
      this.prospectList = data;

      console.log(data)
    })

  }

  ngOnInit() {
  }

}
