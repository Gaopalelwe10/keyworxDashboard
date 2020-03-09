import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { ProfileService } from 'src/app/services/profile.service';
import { PropertyService } from 'src/app/services/property.service';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { MapboxService, Feature } from 'src/app/services/mapbox.service';
import { AlertController } from '@ionic/angular';
import { Upload } from 'src/app/uploads/shared/upload';
import * as _ from "lodash";
@Component({
  selector: 'app-updateproperty',
  templateUrl: './updateproperty.page.html',
  styleUrls: ['./updateproperty.page.scss'],
})
export class UpdatepropertyPage implements OnInit {

  Segment = "Property"
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
    category: '',
    lng: '',
    lat: '',
  }
  key: any;

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
    private routeA: ActivatedRoute,
    public mapboxService: MapboxService,
    private alertCtrl: AlertController,
    private router: Router
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
      category: ['', Validators.required],
    });


  }

  ngOnInit() {
    this.propertyService.update2property(this.key).subscribe((data: any) => {
      this.mainImage = data.mainImage
      this.lng = data.lng;
      this.lat = data.lat;
      this.selectedAddress=data.location
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
        category: [data.category, Validators.required],
      });
    })
  
    this.propertyService.imageList(this.key).subscribe(data => {
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
    this.property.location = this.selectedAddress;
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
    this.property.category = this.UpdatepropertyForm.value.category;
    this.property.mainImage = this.mainImage;
    this.property.lat = this.lat;
    this.property.lng = this.lng;
    console.log(this.property)


    this.propertyService.updateproperty(this.key, this.property).then(() => {
      this.alertCtrl.create({
        // message: 'Upload doc, xlsx, pdf, accdb, docx',
        subHeader: "Information is updated successfully",
        buttons: [

          {
            text: 'ok',
            handler: () => {
              this.router.navigateByUrl('propertylistings')
            }
          }
        ]
      }).then(
        alert => alert.present()
      );
    })


  }

  selectedFiles: FileList;
  currentUpload: Upload;

  detectFiles(event) {
    this.selectedFiles = event.target.files;
    this.uploadMulti()
  }

  uploadMulti() {
    let files = this.selectedFiles
    if (this.selectedFiles != null) {


      let filesIndex = _.range(files.length)
      _.each(filesIndex, (idx) => {
        this.currentUpload = new Upload(files[idx]);
        this.propertyService.pushUpload(this.currentUpload, this.key)
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

    this.selectedFiles = null
  }

  delete(image) {
    this.alertCtrl.create({
      subHeader: 'Are you sure you to delete this image',
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


            const storageRef = this.storage.storage.ref().child('/uploads/' + image.name);
            console.log("delete " + storageRef)

            this.propertyService.delete(this.key, image.key).then(() => {
              storageRef.delete().then(() => {
                console.log(" File deleted successfully")
              }).catch(function (error) {
                // Uh-oh, an error occurred!
                console.log("Uh-oh, an error occurred!")
              });
            })


          }
        }
      ]
    }).then(
      alert => alert.present()
    );



  }

}
