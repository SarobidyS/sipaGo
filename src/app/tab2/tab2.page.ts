import { Component } from '@angular/core';
import { AlertController, LoadingController } from "@ionic/angular"
import { alertController } from '@ionic/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { RequestOptions, Headers } from '@angular/http';
import { Http } from '@angular/http';
import { ThrowStmt } from '@angular/compiler';
import { map } from 'rxjs/operators';

import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  username: string;
  mdp: string;
  firstname: string;
  lastname: string;
  confirmMdp: string;
  valiny: boolean;
  listAnarana: any = [];
  constructor(public http: Http,
    public alertController: AlertController,
    public navCtrl: NavController,
    public loadingCtrl: LoadingController
  ) {
    setInterval(()=>{
      this.http.get('http://localhost/sipaGo/sipago/enter/provideEnter.php')
      .pipe(map(res => res.json()) , catchError(this.handleError('getDetails', [])))
      .subscribe(data => {
        console.log(data[0].username);
        //console.log(Object.values(data));
        //var array_data = Object.values(data);
        var i = 0;
        for (i = 0; i < data[0].username.length; i++) {
          this.listAnarana.push(data[0].username[i]);
        }
      });
    },3000);
    
  }

  createAccount() {
    console.log('connect is clicked and the username is');
    if (!(this.username) || !(this.mdp) || !(this.confirmMdp) || !(this.firstname) || !(this.lastname)) {
      this.alertContr();
    }
    else if (this.testMitovy(this.username) == true) {
      console.log("tafiditra ato");
      this.alertMitovy();
    }
    else if ((this.mdp) != (this.confirmMdp)) {
      this.alertContrMdp();
    }
    else {
      
      var tabPersoData = [ this.username , this.mdp];
      this.createTableUser();
      //envoye de l'username et du mdp dans l'API Rest pour le mettre dans le base de donnee
      var headers = new Headers();
      headers.append("Accept", 'application/json');
      headers.append('Content-Type', 'application/json' );
      const requestOptions = new RequestOptions({ headers: headers });
      this.http.post("http://localhost/sipaGo/sipago/enter/fetchDataFromIonic.php", tabPersoData, requestOptions)
      .pipe(
        catchError(this.handleError('getDetails', []))
      )
      .subscribe(data => {
        console.log(data['_body']);
       }, error => {
        console.log(error);
      });
      this.myLoading();
      setTimeout(()=>{
        this.accountConfirmed();
      },1100)
      
    }
  }

  async alertContr() {
    const alert = await this.alertController.create({
      header: "Attention",
      message: "Vous devez completer tous les cases",
      buttons: ['OK']
    })
    await alert.present();
  }

  async alertMitovy() {
    const alert = await this.alertController.create({
      message: "Veuillez prendre un autre username car celui ci est deja pris!",
      buttons: ['OK']
    })
    await alert.present();
  }

  testMitovy(anarana) {
    this.valiny = false;
    console.log("eto amle test mitovy");
    var i = 0;
    for (i = 0; i < this.listAnarana.length; i++) {
        if(this.listAnarana[i] == anarana){
          this.valiny = true;
        }
        else{}
    }

    console.log("this.valiny: " + this.valiny);
    return this.valiny;


  }

  alertContrMdp() {
    const alert = this.alertController.create({
      header: "Mot de passe incorrect",
      message: "Vos deux mots de passse ne se ressemble pas",
      buttons: ['Compris']
    }).then(alert => alert.present());
  }

  async myLoading(){
    const loading = await this.loadingCtrl.create({
      message: 'Veuillez patientez',
      duration: 1000
    });
    await loading.present();
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



  async accountConfirmed() {
    const alert = await this.alertController.create({
      header: "Succes",
      message: "Votre compte a bien ete creer",
      buttons: [
        {
          text: "OK",
          handler: () => {
            this.navCtrl.navigateRoot('tabs/tab1');
          }
        }
      ]
    });
    await alert.present();
  }

  createTableUser() {
    console.log("tafiditra ato amle createtable user");
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    const requestOptions = new RequestOptions({ headers: headers });
    this.http.post("http://localhost/sipaGo/sipago/createTable/createTableUser.php", this.username, requestOptions).subscribe(data => {
      console.log(data['_body']);
    }, error => {
      console.log(error);
    });
  }

  navigateToConnectPage() {
    console.log("tokony my naviguer");
    this.navCtrl.navigateRoot('/tabs/tab1');
  }
}
