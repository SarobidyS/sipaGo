import { Component, OnInit } from '@angular/core';
//import { Facebook } from '@ionic-native/facebook/ngx';
import { NavController, ToastController } from '@ionic/angular';
import Parse from 'parse';

@Component({
  selector: 'app-tab-fb',
  templateUrl: './tab-fb.page.html',
  styleUrls: ['./tab-fb.page.scss'],
})
export class TabFbPage implements OnInit {

  constructor(
   // public facebook: Facebook,
    public navCtrl: NavController,
    public toastCtrl : ToastController,
  ) { }

  ngOnInit() {
  }

  // async facebookLogin() {
  //   try {
  //     // Log in to Facebook and request user data
  //     let facebookResponse = await this.facebook.login(['public_profile', 'email']);
  //     let facebookAuthData = {
  //       id: facebookResponse.authResponse.userID,
  //       access_token: facebookResponse.authResponse.accessToken,
  //     };

  //     // Request the user from parse
  //     let toLinkUser = new Parse.User();
  //     let user = await toLinkUser._linkWith('facebook', {authData: facebookAuthData});

  //     // If user did not exist, updates its data
  //     if (!user.existed()) {
  //       let userData = await this.facebook.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture)', []);
  //       user.set('username', userData.name);
  //       user.set('name', userData.name);
  //       user.set('email', userData.email);
  //       await user.save();
  //     }

  //     this.navCtrl.navigateRoot('HomePage');
  //   } catch (err) {
  //     console.log('Error logging in', err);

  //     const alert = await this.toastCtrl.create({
  //       message: err.message,
  //       duration: 2000
  //     });
  //     await alert.present();
  //   }
  // }

}
