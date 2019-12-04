import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { ProfileService } from 'src/app/services/profile.service';
import { PropertyService } from 'src/app/services/property.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-updateproperty',
  templateUrl: './updateproperty.page.html',
  styleUrls: ['./updateproperty.page.scss'],
})
export class UpdatepropertyPage implements OnInit {
  UpdatepropertyForm: FormGroup;

  uploadPercent: Observable<number>;
  downloadU: any;
  mainImage = "";
  propertyid
  imageList

  isporpetyDetails: boolean = true;
  property = {
    description: '',
    price: '',
    location: '',
    typeofproperty: '',
    bedrooms: '',
    bathrooms: '',
    kitchens: '',
    garage: '',
    lounges: '',
    garden: '',
    pets: '',
    pool: '',
    diningroom: '',
    mainImage: '',
  }
  key: any;
  constructor(
    private fb: FormBuilder,
    private storage: AngularFireStorage,
    private afs: AngularFirestore,
    private profileService: ProfileService,
    private propertyService: PropertyService,
    private routeA: ActivatedRoute
  ) {
    this.routeA.queryParams
      .subscribe(params => {
        this.key = params.key;
        console.log(this.key)
      });

    this.UpdatepropertyForm = fb.group({
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
      diningroom: ['', Validators.required],
    });


  }

  ngOnInit() {
    this.propertyService.update2property(this.key).subscribe((data: any) => {
      this.mainImage = data.mainImage
      this.UpdatepropertyForm = this.fb.group({
        description: new FormControl(data.description, Validators.required),
        price: [data.price, Validators.required],
        location: [data.location, Validators.required],
        typeofproperty: [data.typeofproperty, Validators.required],
        bedrooms: [data.bedrooms, Validators.required],
        bathrooms: [data.bathrooms, Validators.required],
        kitchens: [data.kitchens, Validators.required],
        garage: [data.garage, Validators.required],
        lounges: [data.lounges, Validators.required],
        garden: [data.garden, Validators.required],
        pets: [data.pets, Validators.required],
        pool: [data.pool, Validators.required],
        diningroom: [data.diningroom, Validators.required],
      });
    })
  }

  update() {
    this.isporpetyDetails = false
    this.property.description = this.UpdatepropertyForm.value.description;
    this.property.price = this.UpdatepropertyForm.value.price;
    this.property.location = this.UpdatepropertyForm.value.location;
    this.property.typeofproperty = this.UpdatepropertyForm.value.typeofproperty;
    this.property.bedrooms = this.UpdatepropertyForm.value.bedrooms;
    this.property.bathrooms = this.UpdatepropertyForm.value.bathrooms;
    this.property.kitchens = this.UpdatepropertyForm.value.kitchens;
    this.property.garage = this.UpdatepropertyForm.value.garage;
    this.property.lounges = this.UpdatepropertyForm.value.lounges;
    this.property.garden = this.UpdatepropertyForm.value.garden;
    this.property.pets = this.UpdatepropertyForm.value.pets;
    this.property.pool = this.UpdatepropertyForm.value.pool;
    this.property.diningroom = this.UpdatepropertyForm.value.diningroom;
    this.property.mainImage = this.mainImage;

    console.log(this.property)


    this.propertyService.updateproperty(this.key, this.property)
    
    this.propertyService.imageList(this.key).subscribe(data=>{
      this.imageList = data.map(e => {
        return {
          key: e.payload.doc.id,
          ...e.payload.doc.data()
        } 
      });
      console.log(this.imageList);
    })
  }
}
