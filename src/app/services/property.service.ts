import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertController } from '@ionic/angular';
import { AngularFireStorage } from '@angular/fire/storage';
import { Upload } from '../uploads/shared/upload';
import * as firebase from 'firebase'
import { AngularFireList } from '@angular/fire/database';
import { ProfileService } from './profile.service';
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
    private profileService: ProfileService 
  ) {

  }

  addproperty(propertyid, property) {
    return this.afs.collection("properties").doc(propertyid).set(property)
  }

  imageList(propertyid){
    return this.afs.collection("properties").doc(propertyid).collection("images").snapshotChanges()
  }

  propertyList(){
    return this.afs.collection("properties" ,ref=>ref.where('uid', '==' ,this.profileService.getUID() )).snapshotChanges()
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