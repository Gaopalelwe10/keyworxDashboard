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
import { MapboxService, Feature } from 'src/app/services/mapbox.service';
import { AlertController } from '@ionic/angular';
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
    propertyid: "",
    category:'',
    reactionCount:0,
    created:'',
    lng:'',
    lat:'',
    archived:false,
  }

  addresses: string[] = [];
  coodinateses: string[] = [];

  selectedAddress = null;
  selectedcoodinates = null;
  listMabox: any;
  lng;
  lat;
  constructor(
    private fb: FormBuilder,
    private storage: AngularFireStorage,
    private afs: AngularFirestore,
    private profileService: ProfileService,
    private propertyService: PropertyService,
    public mapboxService: MapboxService,
    private alertCtrl: AlertController
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
      category:['', Validators.required],
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


  search(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    if (searchTerm && searchTerm.length > 0) {
      this.mapboxService.search_word(searchTerm)
        .subscribe((features: Feature[]) => {
          this.coodinateses = features.map(feat => feat.geometry)
          this.addresses = features.map(feat => feat.place_name)
          this.listMabox = features;
          console.log(this.listMabox)
        });
    } else {
      this.addresses = [];
    }
  }

  onSelect(address, i) {
    this.selectedAddress = address;
    //  selectedcoodinates=

    console.log("lng:" + JSON.stringify(this.listMabox[i].geometry.coordinates[0]))
    console.log("lat:" + JSON.stringify(this.listMabox[i].geometry.coordinates[1]))
    this.lng = JSON.stringify(this.listMabox[i].geometry.coordinates[0])
    this.lat = JSON.stringify(this.listMabox[i].geometry.coordinates[1])

    console.log("index =" + i)
    console.log(this.selectedAddress)

    //add to FireBase
    // this.dog.collection('coordinate').add({
    //   lat: this.temp.coordinates[1],
    //   lng: this.temp.coordinates[0],
    //   address: address,
    // }).then(function (ref) {
    //   console.log("document was written with ID : " + ref);
    //   alert("physical address : " + address + " , saved successful..")
    // }).catch(function (ee) {
    //   console.log(ee)
    //   console.log("error while processing ..")
    // });
    this.addresses = [];
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
    if(this.mainImage != ""){
      this.isporpetyDetails=false
      this.property.uid = this.profileService.getUID();
      this.property.description = this.AddpropertyForm.value.description;
      this.property.price = this.AddpropertyForm.value.price;
      this.property.location = this.selectedAddress ;
      this.property.typeofproperty = this.AddpropertyForm.value.typeofproperty;
      this.property.bedrooms = this.AddpropertyForm.value.bedrooms;
      this.property.bathrooms = this.AddpropertyForm.value.bathrooms;
      this.property.kitchens = this.AddpropertyForm.value.kitchens;
      this.property.garage = this.AddpropertyForm.value.garage;
      this.property.lounges = this.AddpropertyForm.value.lounges;
      this.property.garden = this.AddpropertyForm.value.garden;
      this.property.pets = this.AddpropertyForm.value.pets;
      this.property.pool = this.AddpropertyForm.value.pool;
      this.property.diningroom = this.AddpropertyForm.value.diningroom;
      this.property.category=this.AddpropertyForm.value.category;
      this.property.mainImage = this.mainImage;
      this.property.propertyid = this.propertyid;
      this.property.lat=this.lat;
      this.property.lng=this.lng;
      console.log(this.property)
  
  
      this.propertyService.addproperty(this.propertyid, this.property)
    }else{
      this.alertCtrl.create({
        subHeader: "Pleace select upload main image",
        buttons: [
          {
            text: 'ok',
            handler: () => {
            }
          }
        ]
      }).then(
        alert => alert.present()
      );
    }
  }
  selectedFiles: FileList;
  currentUpload: Upload;

  detectFiles(event) {
    this.selectedFiles = event.target.files;
  }

  uploadMulti() {
    let files = this.selectedFiles
    if (this.selectedFiles != null) {
      let filesIndex = _.range(files.length)
      _.each(filesIndex, (idx) => {
        this.currentUpload = new Upload(files[idx]);
        this.propertyService.pushUpload(this.currentUpload, this.propertyid)
      })
    } else {
      this.alertCtrl.create({
        subHeader: "Pleace select images",
        buttons: [
          {
            text: 'ok',
            handler: () => {
            }
          }
        ]
      }).then(
        alert => alert.present()
      );
    }
    this.selectedFiles == null
  }



}
