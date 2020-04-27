import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AuthenticationService } from './services/authentication.service';
import { Router } from '@angular/router';

import { nameOfUsers } from '../providers/users/usersProvider';
 
declare var map;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authenticationService: AuthenticationService,
    private router: Router,
    private nameUsers: nameOfUsers
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    this.authenticationService.authState.subscribe(state => {
      if (state) {
        var username = this.nameUsers.theUsername;
        this.router.navigate(['tabs-for-connected/dashboard',username]);
      } else {
        this.router.navigate(['tabs/tab1']);
      }
    });
  }
}
