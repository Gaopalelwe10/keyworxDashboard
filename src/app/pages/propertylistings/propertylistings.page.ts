import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-propertylistings',
  templateUrl: './propertylistings.page.html',
  styleUrls: ['./propertylistings.page.scss'],
})
export class PropertylistingsPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  
  addproperty() {
    this.route.navigateByUrl("addproperty")
  }
}
