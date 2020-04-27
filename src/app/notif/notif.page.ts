import { Component, OnInit } from '@angular/core';

import { Http } from '@angular/http';

import { RequestOptions, Headers } from '@angular/http';

import { nameOfUsers } from '../../providers/users/usersProvider';
import { map } from 'rxjs/operators';
import { alertController } from '@ionic/core';
import { AlertController, LoadingController } from '@ionic/angular';

import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Component({
  selector: 'app-notif',
  templateUrl: './notif.page.html',
  styleUrls: ['./notif.page.scss'],
})
export class NotifPage implements OnInit {
  listNotif: any = [];
  ifConfirm: boolean;
  constructor(
    public http: Http,
    public nameOfUsers: nameOfUsers,
    public alertController: AlertController,
    public loadingCtrl: LoadingController
  ) {

    console.log("atoooooooooo");

    this.myLoading();

    var myName = this.nameOfUsers.theUsername
    this.http.post("http://localhost/sipaGo/sipago/notif/provideNotif.php", myName)
      .pipe(map(res => res.json()) ,catchError(this.handleError('getDetails', [])))
      .subscribe(data => {
        console.log(data);
        this.listNotif.length = 0;
        data.forEach(datas => {
          this.listNotif.push(datas);
        });
      });

  }
  ionViewWillEnter() {
    var myName = this.nameOfUsers.theUsername
    this.http.post("http://localhost/sipaGo/sipago/notif/provideNotif.php", myName)
      .pipe(map(res => res.json()) ,catchError(this.handleError('getDetails', [])))
      .subscribe(data => {
        console.log(data);
        this.listNotif.length = 0;
        data.forEach(datas => {
          this.listNotif.push(datas);
        });
      });
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

  confirm(friends) {
    this.confirmAlert(friends);
    this.ifConfirm = true;
    console.log(friends);
    var type = 1;
    var arrayOfPost = [this.nameOfUsers.theUsername, friends, type];
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    const requestOptions = new RequestOptions({ headers: headers });
    this.http.post("http://localhost/sipaGo/sipago/createTable/appendFriends/acceptNotif.php", arrayOfPost, requestOptions)
    .pipe(
      catchError(this.handleError('getDetails', []))
    ).subscribe(data => {
      console.log(data["_body"]);
    });
    arrayOfPost = [this.nameOfUsers.theUsername, friends];

    this.http.post("http://localhost/sipaGo/sipago/createTable/appendFriends/appendMyListOfFriendsOther.php", arrayOfPost, requestOptions)
    .pipe(
      catchError(this.handleError('getDetails', []))
    ).subscribe(data => {
      console.log(data["_body"]);
    });
  }

  async confirmAlert(friends) {
    const alert = await this.alertController.create({
      message: "Vous avez ajouter " + friends + " avec succes ",
      buttons: ['OK']
    })
    await alert.present();
  }

  async myLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Veuillez patientez',
      duration: 1000
    });
    await loading.present();
  }

  doRefresh(event) {
    console.log('Begin async operation');

    var myName = this.nameOfUsers.theUsername
    
    this.http.post("http://localhost/sipaGo/sipago/notif/provideNotif.php", myName)
      .pipe(map(res => res.json()) ,catchError(this.handleError('getDetails', [])))
      .subscribe(data => {
        console.log(data);
        this.listNotif.length = 0;
        data.forEach(datas => {
          this.listNotif.push(datas);
        });
      });

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  ngOnInit() {
  }

}
