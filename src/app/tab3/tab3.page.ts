import { Component } from '@angular/core';

import { Platform, IonItem, NavController, LoadingController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Map, tileLayer, marker, icon } from 'leaflet';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

import { BackgroundMode } from '@ionic-native/background-mode/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { calcPossibleSecurityContexts } from '@angular/compiler/src/template_parser/binding_parser';
import { ValueAccessor } from '@ionic/angular/dist/directives/control-value-accessors/value-accessor';
import { reject } from 'q';
import { getLocaleCurrencyName } from '@angular/common';
//import { ConsoleReporter } from 'jasmine';

import { HttpClient } from '@angular/common/http';
import { RequestOptions, Headers } from '@angular/http';

import { nameOfUsers } from '../../providers/users/usersProvider';

import { NgZone } from '@angular/core';
import { Events } from '@ionic/angular';
import { ArgumentType } from '@angular/compiler/src/core';

import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

var zoom = 20;

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  dualPos: any;
  getPos: any;
  timeOut: any;
  myMap: any;
  myLatitude: any;
  myLongitude: any;
  valueToChange: any;
  numberOfNotif: any;
  charger: boolean;
  rawData = [{ "position": { "lat": -18.915658, "lgn": 47.551516 }, "title": "chicken" }, { "position": { "lat": -18.915658, "lgn": 47.551516 }, "title": "toasty" }];


  constructor(
    public http: Http,
    public plt: Platform,
    public router: Router,
    public backgroundMode: BackgroundMode,
    public geolocation: Geolocation,
    public httpcClient: HttpClient,
    public nameUsers: nameOfUsers,
    public zone: NgZone,
    public events: Events,
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public alertController: AlertController
  ) {

    //setInterval(() => {this.getPosition()},3000);
    this.charger = false;
    this.myLoading();
    

    console.log("hereeeeeeeeeeeeeeeeeee " + this.nameUsers.theUserFriend);

    // plt.ready().then(() => {
    //   this.backgroundMode.on('activate').subscribe(() => {
    //     console.log("backgound tool is actived");
    //   });
    //   this.backgroundMode.enable();
    // })

    this.getTheNumberOfNotif(this.nameUsers.theUsername);





  }
  getTheNumberOfNotif(name){
    
    this.http.post("http://localhost/sipaGo/sipago/notif/provideNotif.php" , name)
    .pipe(map(res => res.json()) , catchError(this.handleError('getDetails', [])))
    .subscribe(data => {
      console.log(data);
      this.numberOfNotif = 0;
      data.forEach(datas => {
        
        this.numberOfNotif += 1;
      });
    });
  }


  setLocalisation() {
    return new Promise((resolve) => {
      this.geolocation.getCurrentPosition().then(position => {
        resolve(position.coords.latitude);
      })
    });


  }



  //recherche des coordonnes dans la base de donne dans php et la  BDD
  ionViewWillEnter() {

    this.getTheNumberOfNotif(this.nameUsers.theUsername);
    
    if(this.charger){
      this.myOtherLoading();
    }

    
    this.plt.ready().then(() => {
      var posLat = -18.9155528;
      var posLgn = 47.5524534;
      this.nameUsers.theCurrentPositionLat = posLat;
      this.nameUsers.theCurrentPositionLgn = posLgn;

      this.getPos = setInterval(() => {
        this.geolocation.getCurrentPosition().then(position => {
          console.log(position);
          var headers = new Headers();
          headers.append("Accept", 'application/json');
          headers.append('Content-Type', 'application/json');
          const requestOptions = new RequestOptions({ headers: headers });
          console.log(position.coords.latitude);
        // this.nameUsers.theCurrentPositionLat += 0.00001;
         // this.nameUsers.theCurrentPositionLgn += 0.00001;
          var newPos = [this.nameUsers.theCurrentPositionLat, this.nameUsers.theCurrentPositionLgn, this.nameUsers.theUsername];
          console.log('the newPos>>>>>');
          console.log(newPos);
          var tabPosition = [position.coords.latitude, position.coords.longitude];
          this.http.post("http://localhost/sipaGo/sipago/positionGeter.php", newPos, requestOptions)
          .pipe(
            catchError(this.handleError('getDetails', []))
          )
            .subscribe(data => {
              console.log("the current position is" + data['_body']);
            }, error => {
              console.log(error);
            });
        })
      }, 1000);



      var headers = new Headers();
      headers.append("Accept", 'application/json');
      headers.append('Content-Type', 'application/json');
      const requestOptions = new RequestOptions({ headers: headers });


      var tabName = [this.nameUsers.theUsername, this.nameUsers.theUserFriend];

      this.initMap(tabName, requestOptions);



    });
  }


  initMap(tabName, requestOptions) {
    console.log("tafiditra tato anaty init map    ");
    //this.myMap = new Map('map').setView([-18.915658, 47.551516], zoom);

    this.myMap = new Map('map')

    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.myMap);

    const customMarkerIcon = icon({
      iconUrl: '../../assets/img/marker-icon-other.png',
      iconSize: [30, 30],
      popupAnchor: [0, -20]
    });

    const customMarkerIconUser = icon({
      iconUrl: '../../assets/img/marker-icon-user.png',
      iconSize: [30, 30],
      popupAnchor: [0, -20]
    });

    var myMarker = [];
    myMarker[0] = marker([0, 0], {
      icon: customMarkerIconUser,
      draggable: true,
      autoPan: true
    }).addTo(this.myMap);

    myMarker[1] = marker([0, 0], {
      icon: customMarkerIcon,
      draggable: true,
      autoPan: true
    })
      // .bindPopup(`<b>${place.title}</b>`, { autoClose: false })
      // .on('click', () => this.router.navigateByUrl('/restaurant'))
      .addTo(this.myMap);
    this.timeOut = setTimeout(() => {
      this.dualPos = setInterval(() => {
        this.http.post("http://localhost/sipaGo/sipago/provideDualPosition.php", tabName, requestOptions)
          .pipe(map(res => res.json()) , catchError(this.handleError('getDetails', [])))
          .subscribe(myPlace => {
            this.myMap.setView([myPlace[0].position.lat, myPlace[0].position.lgn], zoom);
            this.changePlace(myPlace, myMarker)
          });
      }, 1000)
    }, 5000)


  }

  changePlace(myPlace, myMarker) {
    var p = 0;
    myPlace.forEach((place) => {

      console.log("voila ceux qui sont dans l'API: " + place.position.lat);
      var posViewLat = parseFloat(place.position.lat);
      posViewLat = posViewLat + 0.001;
      var posViewLgn = parseFloat(place.position.lgn);
      posViewLgn = posViewLgn - 0.001;
      //myMap.panTo([posViewLat, posViewLgn]);
      console.log("this issssssssssssssssssssss ppppppppp " + p);
      myMarker[p].setLatLng([place.position.lat, place.position.lgn])
        .bindPopup(`<b>${place.title}</b>`, { autoClose: false });
      console.log("this one " + place.title);
      p++;

    });

  }

  go_notif() {
    console.log("go_notif");
    this.navCtrl.navigateForward(['/tabs-for-connected/notif', this.nameUsers.theUsername]);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.log("this is the error");
      
      this.navCtrl.navigateRoot(['/tabs-for-connected/dashboard',this.nameUsers.theUsername]);

     // this.errorReseau();

      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  
  async errorReseau() {
    const alert = await this.alertController.create({
      header: "veuillez voir votre connection",
      message: "Probleme de connection",
      buttons: ['...']
    });
    await alert.present();
  }
  
  
  ngOnInit() {
    console.log("tafiditra ngOnInit");
  }

  async myLoading(){
    const loading = await this.loadingCtrl.create({
      message: 'Prechargement de la carte',
      duration: 1000
    });
    await loading.present();
    this.charger = true;
    this.navCtrl.navigateForward(['/tabs-for-connected/dashboard', this.nameUsers.theUsername]);
  }

  async myOtherLoading(){
    const loading = await this.loadingCtrl.create({
      message: 'Chargement de la carte ... ',
      duration: 8000
    });
    await loading.present();
    //this.navCtrl.navigateForward(['/tabs-for-connected/dashboard', this.nameUsers.theUsername]);
  }

  ionViewDidLeave() {
    console.log("nialaaaaaaaaaaa");
    clearInterval(this.dualPos);
    clearInterval(this.getPos);
    clearTimeout(this.timeOut);
    this.myMap.remove();
  }
}
