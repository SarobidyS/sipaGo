import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage'
import { Platform, ToastController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { nameOfUsers } from '../../providers/users/usersProvider'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authState = new BehaviorSubject(false);

  constructor(
    public router: Router,
    public storage: Storage,
    public platform : Platform,
    public toasController: ToastController,
    public nameOfUsers: nameOfUsers
  ) { 
    this.platform.ready().then(()=>{
      this.ifLoggedIn();
    })
  }

  ifLoggedIn(){
    this.storage.get('USER_INFO').then((response) => {
      if (response) {
        this.authState.next(true);
      }
    });
  }
  login() {
    var dummy_response = {
      user_name: 'test'
    };
    this.storage.set('USER_INFO', dummy_response).then((response) => {
      var username = this.nameOfUsers.theUsername;
      this.router.navigate(['/tabs-for-connected/dashboard/',username]);
      this.authState.next(true);
    });
  }

  logout() {
    this.storage.remove('USER_INFO').then(() => {
      this.router.navigate(['/tabs/tab1']);
      this.authState.next(false);
    });
  }
 
  isAuthenticated() {
    return this.authState.value;
  }
}
