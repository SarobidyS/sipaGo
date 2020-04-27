import { Component } from '@angular/core';
//import { LocalNotifications } from '@ionic-native/local-notifications/ngx'
import { AlertController, LoadingController } from "@ionic/angular"
import { alertController, loadingController } from '@ionic/core';
import { NavController } from '@ionic/angular';

import { HttpClient } from '@angular/common/http';
import { RequestOptions, Headers } from '@angular/http';
import { Http } from '@angular/http';

import { nameOfUsers } from '../../providers/users/usersProvider';

import { Router } from '@angular/router';

import { AuthenticationService } from '../services/authentication.service';

import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  username: string;
  mdp: string;
  loadingController: any;
  chargement: any;
  compteur = 0;
  constructor(public alertController: AlertController,
    public http: Http,
    public navCtrl: NavController,
    public nameUsers: nameOfUsers,
    public router: Router,
    public authService: AuthenticationService,
    public loadingCtrl: LoadingController,
    public https: HttpClient
  ) { }



  toConnect() {
    
    this.firstLoad();
    this.chargement = setInterval(()=>{
      this.myLoading();
      this.compteur += 1;
      console.log(this.compteur);
      if(this.compteur >= 4){
        this.errorReseau();
        console.log("tafiditra ato ve");
        clearInterval(this.chargement);
      }
    },1900);
    console.log('connect is clicked and the username is');
    
    if (!(this.username) || !(this.mdp)) {
      this.alertContr();
    }
    else {

      var tabPersoData = [this.username, this.mdp];
      //recevoir l'username et du mdp dans l'API Rest pour le mettre dans le base de donnee
      this.http.get('http://localhost/sipaGo/sipago/enter/provideEnter.php')
        .pipe(
          catchError(this.handleError('getDetails', []))
        )
        .subscribe(theData => {
           this.confirmIfYes(theData);
           clearInterval(this.chargement);
          })
        ;
    }
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.log("this is the error");
      this.errorReseau();

      clearInterval(this.chargement);

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
  

  confirmIfYes(theData) {
    var dataBrute = JSON.parse(theData['_body']);
    console.log("tafiditra amle confirmYes");
    console.log((dataBrute[0].username).length);
    var i = 0;
    var j = 0;
    var entrerDansQlqBoucle = false;
    for (i = 0; i < dataBrute[0].username.length; i++) {
      if (this.username == dataBrute[0].username[i]) {
        console.log('tafiditra ato amle boucle');
        if (this.mdp == dataBrute[1].mdp[i]) {
          console.log("sa ato");
          this.nameUsers.theUsername = this.username;
          this.goToDashBoard();
          this.myLoading();
          entrerDansQlqBoucle = true;
        }
        else {
          console.log('tafiditra ato amle else');
          this.errorMdp();
          entrerDansQlqBoucle = true;
        }
      }
      j++;
    }
    if ((j == dataBrute[0].username.length) && !(entrerDansQlqBoucle)) {
      console.log("tsy mety ilay username");
      this.errorUsername();
    }

  }

  goToDashBoard() {
    this.authService.login();
    this.router.navigate(['/tabs-for-connected/dashboard', this.username], { skipLocationChange: true });
  }

  async errorMdp() {
    const alert = await this.alertController.create({
      header: "veuillez reessayez",
      message: "Votre mot de passe est faux",
      buttons: ['OK']
    });
    await alert.present();
  }

 

  async errorUsername() {
    const alert = await this.alertController.create({
      header: "veuillez reessayez",
      message: "Votre Username n'existe pas",
      buttons: [
        {
          text: "Ok"
        },
        {
          text: "Creer un Compte",
          handler: () => {
            this.navCtrl.navigateRoot("/tabs/tab2");
          }
        }
      ]
    });
    await alert.present();
  }




  async alertContr() {
    const alert = await this.alertController.create({
      header: "Attention",
      message: "Vous devez completer tous les cases",
      buttons: ['OK']
    })
    await alert.present();
  }


  async firstLoad() {
    const loading = await this.loadingCtrl.create({
      message: 'Veuillez patientez',
      duration: 2000
    });
    await loading.present();
    
  }

  async myLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Veuillez patientez',
      duration: 2000
    });
    await loading.present();
    
  }
}
