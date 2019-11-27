import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-addproperty',
  templateUrl: './addproperty.page.html',
  styleUrls: ['./addproperty.page.scss'],
})
export class AddpropertyPage implements OnInit {
  AddpropertyForm: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) {
    this.AddpropertyForm = fb.group({
      description: ['', Validators.required],
      price: ['', Validators.required],
      location: ['', Validators.required],
      typeofproperty: ['', Validators.required],
      bedrooms: ['', Validators.required],
      bathrooms: ['', Validators.required],
      kitchens: ['', Validators.required],
      garage: ['', Validators.required],
      lounges: ['', Validators.required],
      garden: ['', Validators.required],
      pets: ['', Validators.required],
      pool: ['', Validators.required],
      diningroom :['', Validators.required],
    });
  }

  ngOnInit() {
  }

}
