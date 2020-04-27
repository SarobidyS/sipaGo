(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dashboard.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-item lines=\"none\">\n      <ion-title>Dashboard</ion-title>\n      <ion-badge color=\"warning\" slot=\"end\">{{ numberOfNotif }}</ion-badge>\n      <ion-icon color=\"dark\" slot=\"end\" name=\"notifications\" (click)=\"go_notif()\"></ion-icon>\n    </ion-item>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item text-center class=\"ion-text-uppercase\">\n    <ion-label color=\"danger\">Liste de mes amis</ion-label>\n  </ion-item>\n  <div *ngIf=\"lenghtOf\">\n    <ion-card>\n      <img src=\"/assets/img/girl_friends.jpg\" />\n      <ion-card-header>\n        <ion-card-subtitle>Bonjour,</ion-card-subtitle>\n        <ion-card-title>{{ myName }}</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        SipaGo est bien plus amusant avec des amis.\n        Allez dans parametre pour ajouter de nouveaux amis.\n        :)\n      </ion-card-content>\n    </ion-card>\n  </div>\n  <div *ngFor=\"let friend of myFriendData\">\n\n\n    <ion-grid>\n      <ion-list class=\"center\">\n        <ion-row>\n          <ion-col size='8'>\n            <div>\n              <ion-item>\n                <ion-icon name=\"person\" color=\"dark\"></ion-icon>\n                <ion-label class=\"ion-text-capitalize\"> {{ friend.name }}</ion-label>\n                <ion-icon *ngIf=\"friend.isHitako\" name=\"wifi\" (click)=\"voir(friend.name)\" color=\"dark\"></ion-icon>\n                <ion-icon *ngIf=\"!friend.isHitako\" name=\"eye-off\" color=\"dark\"></ion-icon>\n              </ion-item>\n            </div>\n          </ion-col>\n          <ion-col>\n            <div>\n              <ion-item size='50%' class=\"apekarina\">\n                <ion-label class=\"ion-text-capitalize\">Vue</ion-label>\n                <ion-checkbox color=\"dark\" slot=\"end\" [(ngModel)]=\"friend.isMahita\" (click)=\"aseho(friend.name)\">\n                </ion-checkbox>\n              </ion-item>\n\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-list>\n    </ion-grid>\n\n  </div>\n</ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard.page */ "./src/app/dashboard/dashboard.page.ts");







var DashboardPageModule = /** @class */ (function () {
    function DashboardPageModule() {
    }
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
    return DashboardPageModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.page.scss":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".apekarina {\n  margin-top: -5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Nhcm9iaWR5L0Rlc2t0b3AvRG9zc2llciBBc3VzL0lhbnRzYS9TZWxmIExlYXJuL01vYmlsZS9TaXBhR28vU2lwYUdvQXBwL3NyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5wYWdlLnNjc3MiLCJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBla2FyaW5hIHtcbiAgICBtYXJnaW4tdG9wOiAtNSU7XG59IiwiLmFwZWthcmluYSB7XG4gIG1hcmdpbi10b3A6IC01JTtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _providers_users_usersProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../providers/users/usersProvider */ "./src/providers/users/usersProvider.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var DashboardPage = /** @class */ (function () {
    function DashboardPage(http, navCtrl, nameOfUsers, router, loadingCtrl) {
        var _this = this;
        this.http = http;
        this.navCtrl = navCtrl;
        this.nameOfUsers = nameOfUsers;
        this.router = router;
        this.loadingCtrl = loadingCtrl;
        this.listAmi = [];
        this.myFriendData = [];
        this.myName = this.nameOfUsers.theUsername;
        console.log("the name of the users is " + this.myName);
        this.setInt = setInterval(function () {
            console.log("3 secondes");
            _this.http.post("https://sipago.herokuapp.com/amiProvider.php", _this.myName)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json(); }))
                .subscribe(function (data) {
                _this.lenghtOf = true;
                console.log("all friend is: " + data[0].name);
                _this.myFriendData = data;
                data.forEach(function (datas) {
                    _this.listAmi.push(datas.name);
                });
                if (_this.listAmi.length == 0) {
                    _this.lenghtOf = true;
                    console.log("0 ilay legnth");
                }
                else {
                    _this.lenghtOf = false;
                }
            }, function (error) {
                console.log(error);
            });
        }, 4000);
        this.myLoading();
    }
    DashboardPage.prototype.ionViewWillEnter = function () {
        this.getTheNumberOfNotif(this.myName);
    };
    DashboardPage.prototype.voir = function (name) {
        console.log(name);
        this.nameOfUsers.theUserFriend = name;
        this.navCtrl.navigateForward(['/tabs-for-connected/tab3', name]);
    };
    DashboardPage.prototype.go_notif = function () {
        console.log("go_notif");
        this.navCtrl.navigateForward(['/tabs-for-connected/notif', this.nameOfUsers.theUsername]);
    };
    DashboardPage.prototype.getTheNumberOfNotif = function (name) {
        var _this = this;
        this.numberOfNotif = 0;
        this.http.post("https://sipago.herokuapp.com/notif/provideNotif.php", name)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json(); }))
            .subscribe(function (data) {
            console.log(data);
            data.forEach(function (datas) {
                _this.numberOfNotif += 1;
            });
        });
    };
    DashboardPage.prototype.aseho = function (nameOfTheMahita) {
        var _this = this;
        console.log(nameOfTheMahita);
        var i = 0;
        this.myFriendData.forEach(function (friend) {
            if (friend.name == nameOfTheMahita) {
                console.log(friend.name + "is changed " + _this.myFriendData[i].isMahita);
                var array_changer = [friend.name, _this.nameOfUsers.theUsername];
                _this.http.post("https://sipago.herokuapp.com/change/changeVueProvider.php", array_changer).subscribe(function (data) {
                    console.log("ny azony dia: " + data['_body']);
                }, function (error) {
                    console.log(error);
                });
            }
            i++;
        });
    };
    DashboardPage.prototype.myLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: 'Veuillez patientez',
                            duration: 5500
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DashboardPage.prototype.ionViewDidLeave = function () {
        console.log("nialaaaaaaaaaaa");
        clearInterval(this.setInt);
    };
    DashboardPage.ctorParameters = function () { return [
        { type: _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _providers_users_usersProvider__WEBPACK_IMPORTED_MODULE_5__["nameOfUsers"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
    ]; };
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
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
    ], DashboardPage);
    return DashboardPage;
}());



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module-es5.js.map