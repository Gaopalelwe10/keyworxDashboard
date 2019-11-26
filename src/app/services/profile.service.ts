import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { NavController, AlertController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class ProfileService {

  private agentDoc: AngularFirestoreDocument<User>

  selectedFile = null;
  uploadPercent: any;
  downloadU: any;
  uniqkey: any;
  today: any = new Date();
  date = this.today.getDate() + "" + (this.today.getMonth() + 1) + "" + this.today.getFullYear();
  time = this.today.getHours() + "" + this.today.getMinutes();
  dateTime = this.date + "" + this.time;
  progress

  constructor(
    private afs: AngularFirestore,
    private nav: NavController,
    public afAuth: AngularFireAuth,
    private alertCtrl: AlertController,
    private storage: AngularFireStorage,
  ) { 
    afAuth.auth.onAuthStateChanged((user) => {
      if (user) {
        this.nav.navigateRoot("home");
      } else {
        this.nav.navigateRoot("");
      }
    })
  }

  async login(email: string, password: string) {
    await this.afAuth.auth.signInWithEmailAndPassword(email, password).then((success) => {
      console.log(success);
    }).catch((err) => {
      this.alertCtrl.create({
        // message: 'You can not order more than six',
        subHeader: err.message,
        buttons: ['Ok']
      }).then(
        alert => alert.present()
      );
    })
  }
  async logout() {
    await this.afAuth.auth.signOut().then((success) => {
      console.log(success);
      console.log("success");
      this.nav.navigateRoot("login");
    }).catch((error) => {
      console.log(error)
    })
  }

  getAgent(key){
    this.agentDoc = this.afs.doc<User>('agent/' + key);
    return this.agentDoc.valueChanges();
  }

  update(User, key){
    this.agentDoc = this.afs.doc<User>('agent/' + key);
    return this.agentDoc.update(User);
  }

  getUID(): string {
    return this.afAuth.auth.currentUser.uid;
  }

  uploadPhoto(event) {
    const file = event.target.files[0];
    this.uniqkey = 'PIC' + this.dateTime;
    const filePath = this.uniqkey;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    // observe percentage changes
    task.snapshotChanges().pipe(
      finalize(() => {
        this.downloadU = fileRef.getDownloadURL().subscribe(urlPath => {
          console.log(urlPath);

          this.afs.doc('agent/' + this.getUID()).update({
            photoURL: urlPath
          })
          this.uploadPercent = null;
        });
      })
    ).subscribe();
    return this.uploadPercent = task.percentageChanges();
  }
}