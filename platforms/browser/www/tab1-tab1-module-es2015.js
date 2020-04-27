(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab1/tab1.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab1/tab1.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Se Connecter\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-card class=\"welcome-card\">\n      <img src=\"/assets/img/Sipago1.jpg\" alt=\"\" />\n      <ion-card-header>\n        <ion-card-title>Welcome to SipaGo</ion-card-title>\n      </ion-card-header>\n    </ion-card>\n</ion-content>\n<ion-content >\n   <div padding>\n      <div text-center> \n          <ion-item>\n              <ion-icon name=\"person\" color=\"dark\"></ion-icon>\n              <ion-input placeholder=\"  username\" [(ngModel)]=\"username\" ></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-icon name=\"finger-print\" color=\"dark\"></ion-icon>\n            <ion-input placeholder=\"  mot de passe\" [(ngModel)]=\"mdp\" type=\"password\"></ion-input>\n          </ion-item>\n          \n              <ion-button type=\"submit\" color=\"dark\" (click)=\"toConnect()\">Se connecter\n                <ion-icon name=\"log-in\" slot=\"start\"></ion-icon>\n              </ion-button>\n        </div>\n   </div>\n     \n    \n    \n      \n  \n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");







let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"] }])
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
    })
], Tab1PageModule);



/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\nion-item {\n  --border-color: var(--ion-color-dark);\n}\n\n:host ion-item {\n  --border-color: white;\n  --highlight-color-invalid: red;\n  --highlight-color-valid: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Nhcm9iaWR5L0Rlc2t0b3AvRG9zc2llciBBc3VzL0lhbnRzYS9TZWxmIExlYXJuL01vYmlsZS9TaXBhR28vU2lwYUdvQXBwL3NyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLHFDQUFBO0FDQ0Y7O0FER0U7RUFDSSxxQkFBQTtFQUNBLDhCQUFBO0VBQ0EsNEJBQUE7QUNBTiIsImZpbGUiOiJzcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jYXJkIGltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbn1cblxuOmhvc3Qge1xuICBpb24taXRlbSB7XG4gICAgICAtLWJvcmRlci1jb2xvcjogd2hpdGU7IC8vIGRlZmF1bHQgdW5kZXJsaW5lIGNvbG9yXG4gICAgICAtLWhpZ2hsaWdodC1jb2xvci1pbnZhbGlkOiByZWQ7IC8vIGludmFsaWQgdW5kZXJsaW5lIGNvbG9yXG4gICAgICAtLWhpZ2hsaWdodC1jb2xvci12YWxpZDogcmVkOyAvLyB2YWxpZCB1bmRlcmxpbmUgY29sb3JcbiAgfVxufSIsIi53ZWxjb21lLWNhcmQgaW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xufVxuXG46aG9zdCBpb24taXRlbSB7XG4gIC0tYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgLS1oaWdobGlnaHQtY29sb3ItaW52YWxpZDogcmVkO1xuICAtLWhpZ2hsaWdodC1jb2xvci12YWxpZDogcmVkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var _providers_users_usersProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/users/usersProvider */ "./src/providers/users/usersProvider.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");


//import { LocalNotifications } from '@ionic-native/local-notifications/ngx'






let Tab1Page = class Tab1Page {
    constructor(alertController, http, navCtrl, nameUsers, router, authService, loadingCtrl) {
        this.alertController = alertController;
        this.http = http;
        this.navCtrl = navCtrl;
        this.nameUsers = nameUsers;
        this.router = router;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
    }
    toConnect() {
        this.myLoading();
        console.log('connect is clicked and the username is');
        if (!(this.username) || !(this.mdp)) {
            this.alertContr();
        }
        else {
            var tabPersoData = [this.username, this.mdp];
            //recevoir l'username et du mdp dans l'API Rest pour le mettre dans le base de donnee
            this.http.get('https://sipago.herokuapp.com/enter/provideEnter.php')
                .subscribe(theData => this.confirmIfYes(theData));
        }
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
    errorMdp() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: "veuillez reessayez",
                message: "Votre mot de passe est faux",
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    errorUsername() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
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
            yield alert.present();
        });
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
    myLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                message: 'Veuillez patientez',
                duration: 1000
            });
            yield loading.present();
        });
    }
};
Tab1Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _providers_users_usersProvider__WEBPACK_IMPORTED_MODULE_4__["nameOfUsers"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab1',
        template: __webpack_require__(/*! raw-loader!./tab1.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab1/tab1.page.html"),
        styles: [__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _providers_users_usersProvider__WEBPACK_IMPORTED_MODULE_4__["nameOfUsers"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
], Tab1Page);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module-es2015.js.map