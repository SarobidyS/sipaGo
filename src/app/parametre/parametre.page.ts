import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, AlertController, LoadingController } from '@ionic/angular';
import { RequestOptions, Headers } from '@angular/http';
import { Http } from "@angular/http";

import { nameOfUsers } from '../../providers/users/usersProvider';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Button } from 'protractor';

import { IonicSelectableComponent } from 'ionic-selectable';

import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

import { AuthenticationService } from '../services/authentication.service';

import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


@Component({
  selector: 'app-parametre',
  templateUrl: './parametre.page.html',
  styleUrls: ['./parametre.page.scss'],
})
export class ParametrePage implements OnInit {

  myFriendsName: string;

  users: any = [];

  numberOfNotif: any;



  selected_user = null;



  constructor(public navCtrl: NavController,
    public http: Http,
    public nameUsers: nameOfUsers,
    public geolocation: Geolocation,
    public alertController: AlertController,
    public router: Router,
    public authService: AuthenticationService,
    public loadingCtrl: LoadingController
  ) {
    // this.http.post('http://localhost/sipaGo/sipago/recherche/provideSearch.php',this.nameUsers.theUsername).subscribe(
    //   data => {
    //     var dataBrute = JSON.parse(data['_body']);
    //     console.log(dataBrute[0].username);
    //     for (var i = 0; i < (dataBrute[0].username).length; i++) {
    //       if (dataBrute[0].username[i] == this.nameUsers.theUsername) {

    //       }
    //       else {
    //         this.users.push({ id: i, name: dataBrute[0].username[i] })
    //       }

    //     }
    //   }
     

  
    
      //this.getTheNumberOfNotif(this.nameUsers.theUsername);
  }

  ionViewWillEnter() {
    this.users.length = 0;
    this.http.post('http://localhost/sipaGo/sipago/recherche/provideSearch.php', this.nameUsers.theUsername)
    .pipe(map(res => res.json()) ,  catchError(this.handleError('getDetails', [])))
    .subscribe(data => {
      console.log(data);
      console.log(Object.values(data));
      var array_data = Object.values(data);
      var i = 0;
      for (i = 0; i < array_data.length; i++) {
        if (array_data[i] == this.nameUsers.theUsername) {

        }
        else {
          this.users.push({ id: i, name: array_data[i] })
        }
      }
    });
    this.getTheNumberOfNotif(this.nameUsers.theUsername);
  }


  //   this.users = [
  //     {
  //       id: 0,
  //       name: "iantsa",
  //     },
  //     {
  //       id: 1,
  //       name: "sarobidy"
  //     }
  //   ]

addFriends() {
  if (this.selected_user == null) {
    console.log("nulle");
    this.alertNull();
  }
  else {

    setTimeout(()=>{
      this.alertAppend(this.selected_user.name);
    },1100);
   
    var dbname = this.nameUsers.theUsername;
    var arrayOfPost = [dbname, this.selected_user.name];
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    const requestOptions = new RequestOptions({ headers: headers });
    this.http.post("http://localhost/sipaGo/sipago/createTable/appendFriends/appendMyListOfFriends.php", arrayOfPost, requestOptions)
    .pipe(
      catchError(this.handleError('getDetails', []))
    ).subscribe(data => {
      console.log(data["_body"]);
    });
    this.myLoading();
  }

}

seDeconnecter() {
  this.myLoading();
  this.authService.logout();
  setTimeout(() => {
    this.router.navigateByUrl('/tabs/tab1');
  }, 1100);
  
}
doRefresh(event) {
  console.log('Begin async operation');
    this.users.length = 0;
    this.http.post('http://localhost/sipaGo/sipago/recherche/provideSearch.php', this.nameUsers.theUsername)
    .pipe(map(res => res.json()) , catchError(this.handleError('getDetails', [])))
    .subscribe(data => {
      console.log(data);
      console.log(Object.values(data));
      var array_data = Object.values(data);
      var i = 0;
      for (i = 0; i < array_data.length; i++) {
        if (array_data[i] == this.nameUsers.theUsername) {

        }
        else {
          this.users.push({ id: i, name: array_data[i] })
        }
      }
    });
    this.getTheNumberOfNotif(this.nameUsers.theUsername);

  setTimeout(() => {
    console.log('Async operation has ended');
    event.target.complete();
  }, 2000);
}
getTheNumberOfNotif(name){
  this.numberOfNotif = 0;
  this.http.post("http://localhost/sipaGo/sipago/notif/provideNotif.php" , name)
  .pipe(map(res => res.json()) , catchError(this.handleError('getDetails', [])))
  .subscribe(data => {
    console.log(data);
    console.log(data);
    data.forEach(datas => {
      this.numberOfNotif += 1;
    });
  });
}

async alertNull() {
  const alert = await this.alertController.create({
    message: "Veuillez selectionner quelqu'un",
    buttons: ['OK']
  })
  await alert.present();
}

async alertAppend(theName) {
  const alert = await this.alertController.create({
    header: "Success",
    subHeader: theName + " a été ajouter a votre liste d'amis",
    message: "Mais pour pouvoir voir " + theName + " dans votre carte , il faut que " + theName + " vous ajoute en retour!",
    buttons: ['OK']
  })
  await alert.present();
}

async myLoading(){
  const loading = await this.loadingCtrl.create({
    message: 'Veuillez patientez',
    duration: 1000
  });
  await loading.present();
}

go_notif() {
  console.log("go_notif");
  this.navCtrl.navigateForward(['/tabs-for-connected/notif', this.nameUsers.theUsername]);
}

private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.log("this is the error");
    this.errorReseau();

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
}

}
