(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dashboard.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-item lines=\"none\">\n      <ion-title>Dashboard</ion-title>\n      <ion-badge color=\"warning\" slot=\"end\">{{ numberOfNotif }}</ion-badge>\n      <ion-icon color=\"dark\" slot=\"end\" name=\"notifications\" (click)=\"go_notif()\"></ion-icon>\n    </ion-item>\n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <div text-center class=\"ion-text-uppercase\">\n    <ion-label color=\"danger\" style=\"font-family: Ailerons; font-size: 24px\">Liste de mes amis</ion-label>\n  </div>\n  <div *ngIf=\"lenghtOf\">\n    <ion-card>\n      <img src=\"/assets/img/girl_friends.jpg\" />\n      <ion-card-header>\n        <ion-card-subtitle>Bonjour,</ion-card-subtitle>\n        <ion-card-title>{{ myName }}</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        SipaGo est bien plus amusant avec des amis.\n        Allez dans parametre pour ajouter de nouveaux amis.\n        :)\n      </ion-card-content>\n    </ion-card>\n  </div>\n  <div *ngFor=\"let friend of myFriendData\">\n\n\n    <ion-grid>\n      <ion-list class=\"center\">\n        <ion-row>\n          <ion-col size='8'>\n            <div>\n              <ion-item>\n                <ion-icon name=\"person\" color=\"dark\"></ion-icon>\n                <ion-label class=\"ion-text-capitalize\"> {{ friend.name }}</ion-label>\n                <ion-icon *ngIf=\"friend.isHitako\" name=\"wifi\" (click)=\"voir(friend.name)\" color=\"dark\"></ion-icon>\n                <ion-icon *ngIf=\"!friend.isHitako\" name=\"eye-off\" color=\"dark\"></ion-icon>\n              </ion-item>\n            </div>\n          </ion-col>\n          <ion-col>\n            <div>\n              <ion-item size='50%' class=\"apekarina\">\n                <ion-label class=\"ion-text-capitalize\">Vue</ion-label>\n                <ion-checkbox color=\"dark\" slot=\"end\" [(ngModel)]=\"friend.isMahita\" (click)=\"aseho(friend.name)\">\n                </ion-checkbox>\n              </ion-item>\n\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-list>\n    </ion-grid>\n\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard.page */ "./src/app/dashboard/dashboard.page.ts");







let DashboardPageModule = class DashboardPageModule {
};
DashboardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{ path: '', component: _dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"] }])
        ],
        declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"]]
    })
], DashboardPageModule);



/***/ }),

/***/ "./src/app/dashboard/dashboard.page.scss":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".apekarina {\n  margin-top: 0%;\n}\n\nion-title {\n  font-family: Bahagia;\n  font-size: 24px;\n}\n\nion-item ion-label {\n  font-family: theSecret;\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Nhcm9iaWR5L2V0dWRlL21vYmlsZS9zaXBhR08vU2lwYUdvQXBwIChSZUxFYXNlIDEuMC4xKS9zcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQucGFnZS5zY3NzIiwic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUNDSjs7QURDQTtFQUNJLG9CQUFBO0VBQ0EsZUFBQTtBQ0VKOztBRENBO0VBQ0ksc0JBQUE7RUFDQSxlQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcGVrYXJpbmEge1xuICAgIG1hcmdpbi10b3A6IDAlO1xufVxuaW9uLXRpdGxle1xuICAgIGZvbnQtZmFtaWx5IDogQmFoYWdpYTtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gIH1cblxuaW9uLWl0ZW0gaW9uLWxhYmVse1xuICAgIGZvbnQtZmFtaWx5OiB0aGVTZWNyZXQ7XG4gICAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4iLCIuYXBla2FyaW5hIHtcbiAgbWFyZ2luLXRvcDogMCU7XG59XG5cbmlvbi10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBCYWhhZ2lhO1xuICBmb250LXNpemU6IDI0cHg7XG59XG5cbmlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiB0aGVTZWNyZXQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.page.ts":
/*!*********************************************!*\
  !*** ./src/app/dashboard/dashboard.page.ts ***!
  \*********************************************/
/*! exports provided: DashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPage", function() { return DashboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _providers_users_usersProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../providers/users/usersProvider */ "./src/providers/users/usersProvider.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");









let DashboardPage = class DashboardPage {
    constructor(http, navCtrl, nameOfUsers, router, loadingCtrl, alertController) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.nameOfUsers = nameOfUsers;
        this.router = router;
        this.loadingCtrl = loadingCtrl;
        this.alertController = alertController;
        this.listAmi = [];
        this.myFriendData = [];
        this.myName = this.nameOfUsers.theUsername;
        console.log("the name of the users is " + this.myName);
        ///mandeha indray louny a
        console.log("3 secondes");
        this.http.post("https://sipago.herokuapp.com/amiProvider.php", this.myName)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res.json()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getDetails', [])))
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
            this.http.post("https://sipago.herokuapp.com/amiProvider.php", this.myName)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res.json()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getDetails', [])))
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
        }, 10000);
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
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(result);
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
        this.http.post("https://sipago.herokuapp.com/notif/provideNotif.php", name)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res.json()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getDetails', [])))
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
        this.http.post("https://sipago.herokuapp.com/amiProvider.php", this.myName)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res.json()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getDetails', [])))
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
                this.http.post("https://sipago.herokuapp.com/change/changeVueProvider.php", array_changer)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getDetails', []))).subscribe(data => {
                    console.log("ny azony dia: " + data['_body']);
                }, error => {
                    console.log(error);
                });
            }
            i++;
        });
    }
    myLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                message: 'Veuillez patientez',
                duration: 5500
            });
            yield loading.present();
        });
    }
    ionViewDidLeave() {
        console.log("nialaaaaaaaaaaa");
        clearInterval(this.setInt);
    }
};
DashboardPage.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _providers_users_usersProvider__WEBPACK_IMPORTED_MODULE_5__["nameOfUsers"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
DashboardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(/*! raw-loader!./dashboard.page.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.page.html"),
        styles: [__webpack_require__(/*! ./dashboard.page.scss */ "./src/app/dashboard/dashboard.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _providers_users_usersProvider__WEBPACK_IMPORTED_MODULE_5__["nameOfUsers"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
], DashboardPage);



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module-es2015.js.map