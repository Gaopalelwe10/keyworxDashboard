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
    return this.afs.collection("properties" ,ref=>ref.where('uid', '==' ,this.profileService.getUID()).where('archived','==', false)).snapshotChanges()
  }

  propertyListArchived(){
    return this.afs.collection("properties" ,ref=>ref.where('uid', '==' ,this.profileService.getUID() ).where('archived','==', true)).snapshotChanges()
  }

  sendToArchive(propertyid){
    return this.afs.collection('properties').doc(propertyid).update({
      archived:true
    })
  }
  sendToPropertyList(propertyid){
    return this.afs.collection('properties').doc(propertyid).update({
      archived:false
    })
  }
  pushUpload(upload: Upload, propertyid) {
    let storageRef = firebase.storage().ref();
    let imageName=upload.file.name + Date.now();
    let uploadTask = storageRef.child(`${this.basePath}/${imageName}`).put(upload.file);

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
        upload.name = imageName

        uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
          console.log('File available at', downloadURL);

          this.afs.collection("properties").doc(propertyid).collection("images").add({
            downloadURL: downloadURL,
            name: imageName,

          })
        });



      }
    );
  }

  delete(propertyid,imageid){
    return this.afs.collection('properties').doc(propertyid).collection("images").doc(imageid).delete()
  }

  deletePermanently(propertyid){
    const path= 'properties/'+propertyid+'/images'
    firebase.firestore().collection(path).get()
      .then(querySnapshot => {
          querySnapshot.forEach(doc=> {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());

              const storageRef = this.storage.storage.ref().child('uploads/' + doc.data().name);
              storageRef.delete().then(() => {
                firebase.firestore().collection('properties').doc(propertyid).collection("images").doc(doc.id).delete().then(()=>{
                  firebase.firestore().collection('properties').doc(propertyid).delete();
                })
                console.log(" File deleted successfully")
              }).catch(function (error) {
                // Uh-oh, an error occurred!
                console.log("Uh-oh, an error occurred!")
              });
          });
      })
      .catch(error=> {
          console.log("Error getting documents: ", error);
      });
   }
}
