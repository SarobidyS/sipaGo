(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab2/tab2.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab2/tab2.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Creer un Nouveau Compte\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n  \n\n\n<ion-content>\n        <div padding>\n           <div text-center> \n                  <img src=\"/assets/img/create_dark.jpg\" alt=\"\" width=\"100%\" style=\"border-radius: 10px;\"/> \n               <ion-item>\n                   <ion-icon name=\"clipboard\" color=\"dark\"></ion-icon>\n                   <ion-input placeholder=\" Firstname\" [(ngModel)]=\"firstname\"></ion-input>\n               </ion-item>\n               <ion-item>\n                  <ion-icon name=\"clipboard\" color=\"dark\"></ion-icon>\n                  <ion-input placeholder=\" Lastname\" [(ngModel)]=\"lastname\"></ion-input>\n              </ion-item>\n              <ion-item>\n                  <ion-icon name=\"code-working\" color=\"dark\"></ion-icon>\n                  <ion-input placeholder=\" Username\" [(ngModel)]=\"username\"></ion-input>\n              </ion-item>\n               <ion-item>\n                 <ion-icon name=\"key\" color=\"dark\"></ion-icon>\n                 <ion-input placeholder=\" Mot de passe\" [(ngModel)]=\"mdp\" type=\"password\"></ion-input>\n               </ion-item>\n               <ion-item>\n                  <ion-icon name=\"key\" color=\"dark\"></ion-icon>\n                  <ion-input placeholder=\" Confirmer mot de passe\" [(ngModel)]=\"confirmMdp\" type=\"password\"></ion-input>\n              </ion-item>\n               \n                   <ion-button type=\"submit\" color=\"danger\" (click)=\"createAccount()\">Creer un compte\n                    <ion-icon name=\"attach\" slot=\"start\"></ion-icon>\n                   </ion-button>\n                   <ion-button type=\"submit\" color=\"danger\" (click)=\"navigateToConnectPage()\">Se connecter\n                    <ion-icon name=\"log-in\" slot=\"start\"></ion-icon>\n                   </ion-button>\n             </div>\n        </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab2/tab2.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");







let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"] }])
        ],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]]
    })
], Tab2PageModule);



/***/ }),

/***/ "./src/app/tab2/tab2.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item {\n  --border-color: var(--ion-color-dark);\n}\n\n:host ion-item {\n  --border-color: white;\n  --highlight-color-invalid: red;\n  --highlight-color-valid: red;\n}\n\nion-title {\n  font-family: Bahagia;\n  font-size: 24px;\n}\n\nion-button {\n  font-family: Ailerons;\n  font-size: 16px;\n  font-weight: 1000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Nhcm9iaWR5L2V0dWRlL21vYmlsZS9zaXBhR08vU2lwYUdvQXBwIChSZUxFYXNlIDEuMC4xKS9zcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxxQ0FBQTtBQ0FKOztBRElJO0VBQ0kscUJBQUE7RUFDQSw4QkFBQTtFQUNBLDRCQUFBO0FDRFI7O0FETUU7RUFDRSxvQkFBQTtFQUNBLGVBQUE7QUNISjs7QURNRTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDSEoiLCJmaWxlIjoic3JjL2FwcC90YWIyL3RhYjIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pb24taXRlbSB7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgfVxuICBcbiAgOmhvc3Qge1xuICAgIGlvbi1pdGVtIHtcbiAgICAgICAgLS1ib3JkZXItY29sb3I6IHdoaXRlOyAvLyBkZWZhdWx0IHVuZGVybGluZSBjb2xvclxuICAgICAgICAtLWhpZ2hsaWdodC1jb2xvci1pbnZhbGlkOiByZWQ7IC8vIGludmFsaWQgdW5kZXJsaW5lIGNvbG9yXG4gICAgICAgIC0taGlnaGxpZ2h0LWNvbG9yLXZhbGlkOiByZWQ7IC8vIHZhbGlkIHVuZGVybGluZSBjb2xvclxuICAgIH1cbiAgfVxuXG5cbiAgaW9uLXRpdGxle1xuICAgIGZvbnQtZmFtaWx5IDogQmFoYWdpYTtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gIH1cblxuICBpb24tYnV0dG9ue1xuICAgIGZvbnQtZmFtaWx5OiBBaWxlcm9ucztcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDA7XG59IiwiaW9uLWl0ZW0ge1xuICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xufVxuXG46aG9zdCBpb24taXRlbSB7XG4gIC0tYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgLS1oaWdobGlnaHQtY29sb3ItaW52YWxpZDogcmVkO1xuICAtLWhpZ2hsaWdodC1jb2xvci12YWxpZDogcmVkO1xufVxuXG5pb24tdGl0bGUge1xuICBmb250LWZhbWlseTogQmFoYWdpYTtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG5pb24tYnV0dG9uIHtcbiAgZm9udC1mYW1pbHk6IEFpbGVyb25zO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/tab2/tab2.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");









let Tab2Page = class Tab2Page {
    constructor(http, alertController, navCtrl, loadingCtrl) {
        this.http = http;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.listAnarana = [];
        setInterval(() => {
            this.http.get('https://sipago.herokuapp.com/enter/provideEnter.php')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res.json()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getDetails', [])))
                .subscribe(data => {
                console.log(data[0].username);
                //console.log(Object.values(data));
                //var array_data = Object.values(data);
                var i = 0;
                for (i = 0; i < data[0].username.length; i++) {
                    this.listAnarana.push(data[0].username[i]);
                }
            });
        }, 3000);
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
            var tabPersoData = [this.username, this.mdp];
            this.createTableUser();
            //envoye de l'username et du mdp dans l'API Rest pour le mettre dans le base de donnee
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            const requestOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: headers });
            this.http.post("https://sipago.herokuapp.com/enter/fetchDataFromIonic.php", tabPersoData, requestOptions)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getDetails', [])))
                .subscribe(data => {
                console.log(data['_body']);
            }, error => {
                console.log(error);
            });
            this.myLoading();
            setTimeout(() => {
                this.accountConfirmed();
            }, 1100);
        }
    }
    alertContr() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: "Attention",
                message: "Vous devez completer tous les cases",
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    alertMitovy() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                message: "Veuillez prendre un autre username car celui ci est deja pris!",
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    testMitovy(anarana) {
        this.valiny = false;
        console.log("eto amle test mitovy");
        var i = 0;
        for (i = 0; i < this.listAnarana.length; i++) {
            if (this.listAnarana[i] == anarana) {
                this.valiny = true;
            }
            else { }
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
    myLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                message: 'Veuillez patientez',
                duration: 1000
            });
            yield loading.present();
        });
    }
    handleError(operation = 'operation', result) {
        return (error) => {
            // TODO: send the error to remote logging infrastructure
            console.log("this is the error");
            this.errorReseau();
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            //this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(result);
        };
    }
    errorReseau() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: "veuillez voir votre connection",
                message: "Probleme de connection",
                buttons: ['...']
            });
            yield alert.present();
        });
    }
    accountConfirmed() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
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
            yield alert.present();
        });
    }
    createTableUser() {
        console.log("tafiditra ato amle createtable user");
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        const requestOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: headers });
        this.http.post("https://sipago.herokuapp.com/createTable/createTableUser.php", this.username, requestOptions).subscribe(data => {
            console.log(data['_body']);
        }, error => {
            console.log(error);
        });
    }
    navigateToConnectPage() {
        console.log("tokony my naviguer");
        this.navCtrl.navigateRoot('/tabs/tab1');
    }
};
Tab2Page.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab2',
        template: __webpack_require__(/*! raw-loader!./tab2.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab2/tab2.page.html"),
        styles: [__webpack_require__(/*! ./tab2.page.scss */ "./src/app/tab2/tab2.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
], Tab2Page);



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module-es2015.js.map