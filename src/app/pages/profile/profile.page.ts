import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  agentList;
  uploadPercent: number;

  constructor(private profileServ: ProfileService,  private afAuth: AngularFireAuth) {

    const uid = this.afAuth.auth.currentUser.uid;

    this.profileServ.getAgent(uid).subscribe(data => {
      this.agentList = data;
      console.log(data)
    })
   }

  ngOnInit() {
  }

  uploadProfilePic(event){
    this.profileServ.uploadPhoto(event).subscribe((data:number)=>{
      this.uploadPercent=data
      console.log(this.uploadPercent)
    })
  }
}
