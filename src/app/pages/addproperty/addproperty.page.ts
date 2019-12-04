import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ProfileService } from 'src/app/services/profile.service';
import { PropertyService } from 'src/app/services/property.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Upload } from 'src/app/uploads/shared/upload';
import * as _ from "lodash";
@Component({
  selector: 'app-addproperty',
  templateUrl: './addproperty.page.html',
  styleUrls: ['./addproperty.page.scss'],
})
export class AddpropertyPage implements OnInit {
  AddpropertyForm: FormGroup;

  uploadPercent: Observable<number>;
  downloadU: any;
  mainImage = "";
  propertyid
  imageList
  
  isporpetyDetails: boolean= true;
  property = {
    uid: '',
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
    propertyid: ""
  }

  constructor(
    private fb: FormBuilder,
    private storage: AngularFireStorage,
    private afs: AngularFirestore,
    private profileService: ProfileService,
    private propertyService: PropertyService
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
      diningroom: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.propertyid = this.afs.createId();
    console.log("key" + this.propertyid)
    this.propertyService.imageList(this.propertyid).subscribe(data=>{
      this.imageList = data.map(e => {
        return {
          key: e.payload.doc.id,
          ...e.payload.doc.data()
        } 
      });
      console.log(this.imageList);
    })
  }
  uploadFile(event) {
    const file = event.target.files[0];

    const filePath = 'PIC' + Math.random().toString(36).substring(2);
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    // observe percentage changes
    this.uploadPercent = task.percentageChanges();


    task.snapshotChanges().pipe(
      finalize(() => {
        this.downloadU = fileRef.getDownloadURL().subscribe(url => {
          console.log(url);
          this.mainImage = url
          this.uploadPercent = null;
        });
      })
    ).subscribe();
  }

  Addproperty() {
    this.isporpetyDetails=false
    this.property.uid = this.profileService.getUID();
    this.property.description = this.AddpropertyForm.value.description;
    this.property.price = this.AddpropertyForm.value.price;
    this.property.location = this.AddpropertyForm.value.location;
    this.property.typeofproperty = this.AddpropertyForm.value.typeofproperty;
    this.property.bedrooms = this.AddpropertyForm.value.bedrooms;
    this.property.bathrooms = this.AddpropertyForm.value.bathrooms;
    this.property.kitchens = this.AddpropertyForm.value.kitchens;
    this.property.garage = this.AddpropertyForm.value.garage;
    this.property.lounges = this.AddpropertyForm.value.lounges;
    this.property.garden = this.AddpropertyForm.value.garden;
    this.property.pets = this.AddpropertyForm.value.garden;
    this.property.pool = this.AddpropertyForm.value.pool;
    this.property.diningroom = this.AddpropertyForm.value.diningroom;
    this.property.mainImage = this.mainImage;
    this.property.propertyid = this.propertyid;
    console.log(this.property)


    this.propertyService.addproperty(this.propertyid, this.property)
  }
  selectedFiles: FileList;
  currentUpload: Upload;

  detectFiles(event) {
    this.selectedFiles = event.target.files;
  }

  uploadMulti() {
    let files = this.selectedFiles
    let filesIndex = _.range(files.length)
    _.each(filesIndex, (idx) => {
      this.currentUpload = new Upload(files[idx]);
      this.propertyService.pushUpload(this.currentUpload, this.propertyid)
    }
    )
  }



}
