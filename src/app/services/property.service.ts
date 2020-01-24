import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController } from '@ionic/angular';
import { AngularFireStorage } from '@angular/fire/storage';
import { Upload } from '../uploads/shared/upload';
import * as firebase from 'firebase'
import { AngularFireList } from '@angular/fire/database';
import { ProfileService } from './profile.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  private basePath: string = '/uploads';
  uploads: AngularFireList<Upload[]>;

  imageURL
  constructor(
    private afs: AngularFirestore,
    private alertCtrl: AlertController,
    private storage: AngularFireStorage,
    private profileService: ProfileService,
    private router: Router 
  ) {

  }

  addproperty(propertyid, property) {
    return this.afs.collection("properties").doc(propertyid).set(property)
  }

  update2property(propertyid){
    return this.afs.collection("properties").doc(propertyid).valueChanges();
  }
  
  updateproperty(propertyid, property){
    return this.afs.collection("properties").doc(propertyid).update(property)
  }

  deleteproperty(propertyid){
    return this.afs.collection("properties").doc(propertyid).delete().then(() => {
      this.alertCtrl.create({
        subHeader: 'Property successfully deleted',
        buttons: [
          {
            text: 'ok',
            handler: () => {
              this.router.navigateByUrl('propertylistings');
            }
          }
        ]
      }).then (
        alert => alert.present()
      );
    })
  }

  imageList(propertyid){
    return this.afs.collection("properties").doc(propertyid).collection("images").snapshotChanges()
  }

  propertyList(){
    return this.afs.collection("properties" ,ref=>ref.where('uid', '==' ,this.profileService.getUID() )).snapshotChanges()
  }

  getProperty(){
    return this.afs.collection('properties' ,ref=>ref.where('uid', '==' ,this.profileService.getUID() )).valueChanges();
  }
  pushUpload(upload: Upload, propertyid) {
    let storageRef = firebase.storage().ref();
    let uploadTask = storageRef.child(`${this.basePath}/${upload.file.name}`).put(upload.file);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        // upload in progress
        upload.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      },
      (error) => {
        // upload failed
        console.log(error)
      },
      () => {
        // upload success
        // upload.url = uploadTask.snapshot.downloadURL
        upload.name = upload.file.name

        uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
          console.log('File available at', downloadURL);

          this.afs.collection("properties").doc(propertyid).collection("images").add({
            downloadURL: downloadURL,
            name: upload.file.name,

          })
        });



      }
    );
  }
}
