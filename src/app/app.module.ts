import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

//import { Facebook } from '@ionic-native/facebook/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Map, tileLayer, marker, icon } from 'leaflet';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import {HttpModule} from '@angular/http';
import { NavController } from '@ionic/angular';

import { HttpBackend, HttpXhrBackend } from '@angular/common/http';
import { NativeHttpModule, NativeHttpBackend, NativeHttpFallback } from 'ionic-native-http-connection-backend';
import { HttpClient, HttpHandler } from '@angular/common/http';
//import { LocalNotifications } from '@ionic-native/local-notifications/ngx'
import { HttpClientModule } from '@angular/common/http';
//Pour les geolocalisations:
import { nameOfUsers } from '../providers/users/usersProvider';

import { BackgroundMode } from '@ionic-native/background-mode/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';

import { AuthGuardService } from './services/auth-guard.service';
import { AuthenticationService } from './services/authentication.service';

import { Storage, IonicStorageModule } from '@ionic/storage';




@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule , HttpModule ,HttpClientModule,IonicStorageModule.forRoot() , ],
  providers: [
    StatusBar,
    Geolocation,
    BackgroundMode,
    HttpClient,
    AuthGuardService,
    AuthenticationService,
    //Storage,
    //Facebook,
   //ttpHandler,
    NavController,
    
   // LocalNotifications,
    // map,
    // Map,
    // tileLayer,
    // marker,
    // icon,
    SplashScreen,
    nameOfUsers,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
