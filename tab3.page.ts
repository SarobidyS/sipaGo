import { Component } from '@angular/core';

import { Platform, IonItem } from '@ionic/angular';
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

var zoom = 20;

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  myLatitude: any;
  myLongitude: any;
  valueToChange: any;
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
    public events: Events
  ) {

    //setInterval(() => {this.getPosition()},3000);
    plt.ready().then(() => {
      this.backgroundMode.on('activate').subscribe(() => {
        console.log("backgound tool is actived");
      });
      this.backgroundMode.enable();
    })

    setInterval(() => {
      this.events.subscribe('updateScreen', () => {
        this.zone.run(() => {
          console.log('force update the screen');
        });
      });
    }, 2000)



  }


  setLocalisation() {
    return new Promise((resolve) => {
      this.geolocation.getCurrentPosition().then(position => {
        resolve(position.coords.latitude);
      })
    });


  }

  //recherche des coordonnes dans la base de donne dans php et la  BDD
  ngAfterViewInit() {
    this.plt.ready().then(() => {
      var posLat = -18.9155528;
      var posLgn = 47.5524534;
      this.nameUsers.theCurrentPositionLat = posLat;
      this.nameUsers.theCurrentPositionLgn = posLgn;

      setInterval(() => {
        this.geolocation.getCurrentPosition().then(position => {
          console.log(position);
          var headers = new Headers();
          headers.append("Accept", 'application/json');
          headers.append('Content-Type', 'application/json');
          const requestOptions = new RequestOptions({ headers: headers });
          console.log(position.coords.latitude);
          this.nameUsers.theCurrentPositionLat += 0.0001;
          this.nameUsers.theCurrentPositionLgn += 0.0001;
          var newPos = [this.nameUsers.theCurrentPositionLat, this.nameUsers.theCurrentPositionLgn];
          console.log('the newPos>>>>>');
          console.log(newPos);
          var tabPosition = [position.coords.latitude, position.coords.longitude];
          this.http.post("http://localhost/sipaGo/sipago/positionGeter.php", newPos, requestOptions)
            .subscribe(data => {
              console.log("the current position is" + data['_body']);
            }, error => {
              console.log(error);
            });
        })
      }, 2000);



      var headers = new Headers();
      headers.append("Accept", 'application/json');
      headers.append('Content-Type', 'application/json');
      const requestOptions = new RequestOptions({ headers: headers });

      var tabName = [this.nameUsers.theUsername];

      this.http.post("http://localhost/sipaGo/sipago/providePosition.php", tabName, requestOptions)
        .pipe(map(res => res.json()))
        .subscribe(myPlace => this.initMap(myPlace));

    });
  }


  initMap(myPlace) {
    const map = new Map('map').setView([-18.915658, 47.551516], zoom);

    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const customMarkerIcon = icon({
      iconUrl: '../../assets/img/marker-icon.png',
      iconSize: [30, 30],
      popupAnchor: [0, -20]
    });

    myPlace.forEach((place) => {

      console.log("voila ceux qui sont dans l'API: " + place.position.lat);
      
        marker([place.position.lat, place.position.lgn], {
          icon: customMarkerIcon,
          draggable: true,
          autoPan: true
        })
          .bindPopup(`<b>${place.title}</b>`, { autoClose: false })
          .on('click', () => this.router.navigateByUrl('/restaurant'))
          .addTo(map).openPopup();
        //  map.removeLayer(marker);

        setInterval(() =>{
          marker.setLatLng([place.position.lat, place.position.lgn]);
        });

      });

      
    

  }




}



