import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, AlertController } from '@ionic/angular';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

import { nameOfUsers } from '../../providers/users/usersProvider';

import { Router, NavigationExtras } from '@angular/router';

import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage {
  myName: any;
  listAmi: any = [];
  myFriendData: any = [];
  lenghtOf: boolean;
  numberOfNotif: any;
  setInt: any;
  constructor(
    public http: Http,
    public navCtrl: NavController,
    public nameOfUsers: nameOfUsers,
    public router: Router,
    public loadingCtrl: LoadingController,
    public alertController: AlertController
  ) {




    this.myName = this.nameOfUsers.theUsername;
    console.log("the name of the users is " + this.myName);
    ///mandeha indray louny a
    console.log("3 secondes");
    this.http.post("http://localhost/sipaGo/sipago/amiProvider.php", this.myName)
      .pipe(map(res => res.json()), catchError(this.handleError('getDetails', [])))
      .subscribe(data => {
        this.lenghtOf = true;
        console.log("all friend is: " + data[0].name);
        this.myFriendData = data;
        this.listAmi.length = 0;
        data.forEach(datas => {
          this.listAmi.push(datas.name);
        });
        if (this.listAmi.length == 0) {
          this.lenghtOf = true;
          console.log("0 ilay legnth");
        }
        else {
          this.lenghtOf = false;
        }
      }, error => {
        console.log(error);
      });
    //refressh
    

    this.myLoading();

  }

  ionViewWillEnter() {
    this.getTheNumberOfNotif(this.myName);
    this.setInt = setInterval(() => {
      console.log("3 secondes");
      
      this.http.post("http://localhost/sipaGo/sipago/amiProvider.php", this.myName)
        .pipe(map(res => res.json()) , catchError(this.handleError('getDetails', [])))
        .subscribe(data => {
          this.lenghtOf = true;
          console.log("all friend is: " + data[0].name);
          this.myFriendData = data;
          this.listAmi.length = 0;
          data.forEach(datas => {
            this.listAmi.push(datas.name);
          });
          console.log(this.listAmi.length);
          if (this.listAmi.length == 0) {
            this.lenghtOf = true;
            console.log("0 ilay legnth");
          }
          else {
            this.lenghtOf = false;
          }
        }, error => {
          console.log(error);
        });

    }, 10000)
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

  voir(name) {
    console.log(name);
    this.nameOfUsers.theUserFriend = name;
    this.navCtrl.navigateForward(['/tabs-for-connected/tab3', name]);
  }

  go_notif() {
    console.log("go_notif");
    this.navCtrl.navigateForward(['/tabs-for-connected/notif', this.nameOfUsers.theUsername]);
  }

  getTheNumberOfNotif(name) {
    this.numberOfNotif = 0;
    this.http.post("http://localhost/sipaGo/sipago/notif/provideNotif.php", name)
      .pipe(map(res => res.json()) , catchError(this.handleError('getDetails', [])))
      .subscribe(data => {
        console.log(data);
        console.log(data);
        data.forEach(datas => {
          this.numberOfNotif += 1;
        });
      });
  }

  doRefresh(event) {
    console.log('Begin async operation');
    console.log("3 secondes");
    
    this.http.post("http://localhost/sipaGo/sipago/amiProvider.php", this.myName)
      .pipe(map(res => res.json()) , catchError(this.handleError('getDetails', [])))
      .subscribe(data => {
        this.lenghtOf = true;
        console.log("all friend is: " + data[0].name);
        this.myFriendData = data;
        this.listAmi.length = 0;
        data.forEach(datas => {
          this.listAmi.push(datas.name);
        });
        if (this.listAmi.length == 0) {
          this.lenghtOf = true;
          console.log("0 ilay legnth");
        }
        else {
          this.lenghtOf = false;
        }
      }, error => {
        console.log(error);
      });

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  aseho(nameOfTheMahita) {
    console.log(nameOfTheMahita);
    var i = 0;
    this.myFriendData.forEach(friend => {
      if (friend.name == nameOfTheMahita) {
        console.log(friend.name + "is changed " + this.myFriendData[i].isMahita);
        var array_changer = [friend.name, this.nameOfUsers.theUsername];
        this.http.post("http://localhost/sipaGo/sipago/change/changeVueProvider.php", array_changer)
        .pipe(
          catchError(this.handleError('getDetails', []))
        ).subscribe(data => {
          console.log("ny azony dia: " + data['_body']);
        }, error => {
          console.log(error);
        });
      }
      i++;
    });

  }

  async myLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Veuillez patientez',
      duration: 5500
    });
    await loading.present();
  }

  ionViewDidLeave() {
    console.log("nialaaaaaaaaaaa");
    clearInterval(this.setInt);
  }

}
