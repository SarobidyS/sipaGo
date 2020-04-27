(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notif-notif-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/notif/notif.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/notif/notif.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Vos notifications</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngFor=\"let friends of listNotif\">\n    <ion-item (click)=\"confirm(friends.name)\" [disabled]=\"friends.type\">\n      <ion-icon name=\"person-add\" slot=\"start\" color=\"dark\"></ion-icon>\n      <label *ngIf=\"friends.type\">{{friends.name }} a accepter votre demande</label>\n      <label  *ngIf=\"!friends.type\">{{ friends.name }}  vous a envoyer une demande</label>\n      <ion-icon name=\"done-all\" slot=\"end\" color=\"danger\"></ion-icon>\n    </ion-item>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/notif/notif.module.ts":
/*!***************************************!*\
  !*** ./src/app/notif/notif.module.ts ***!
  \***************************************/
/*! exports provided: NotifPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifPageModule", function() { return NotifPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _notif_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notif.page */ "./src/app/notif/notif.page.ts");







const routes = [
    {
        path: '',
        component: _notif_page__WEBPACK_IMPORTED_MODULE_6__["NotifPage"]
    }
];
let NotifPageModule = class NotifPageModule {
};
NotifPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_notif_page__WEBPACK_IMPORTED_MODULE_6__["NotifPage"]]
    })
], NotifPageModule);



/***/ }),

/***/ "./src/app/notif/notif.page.scss":
/*!***************************************!*\
  !*** ./src/app/notif/notif.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdGlmL25vdGlmLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/notif/notif.page.ts":
/*!*************************************!*\
  !*** ./src/app/notif/notif.page.ts ***!
  \*************************************/
/*! exports provided: NotifPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifPage", function() { return NotifPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var _providers_users_usersProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/users/usersProvider */ "./src/providers/users/usersProvider.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







let NotifPage = class NotifPage {
    constructor(http, nameOfUsers, alertController, loadingCtrl) {
        this.http = http;
        this.nameOfUsers = nameOfUsers;
        this.alertController = alertController;
        this.loadingCtrl = loadingCtrl;
        this.listNotif = [];
        console.log("atoooooooooo");
        this.myLoading();
        var myName = this.nameOfUsers.theUsername;
        this.http.post("https://sipago.herokuapp.com/notif/provideNotif.php", myName)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res.json()))
            .subscribe(data => {
            console.log(data);
            data.forEach(datas => {
                this.listNotif.push(datas);
            });
        });
    }
    confirm(friends) {
        this.confirmAlert(friends);
        this.ifConfirm = true;
        console.log(friends);
        var type = 1;
        var arrayOfPost = [this.nameOfUsers.theUsername, friends, type];
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        const requestOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: headers });
        this.http.post("https://sipago.herokuapp.com/createTable/appendFriends/acceptNotif.php", arrayOfPost, requestOptions).subscribe(data => {
            console.log(data["_body"]);
        });
        arrayOfPost = [this.nameOfUsers.theUsername, friends];
        this.http.post("https://sipago.herokuapp.com/createTable/appendFriends/appendMyListOfFriendsOther.php", arrayOfPost, requestOptions).subscribe(data => {
            console.log(data["_body"]);
        });
    }
    confirmAlert(friends) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                message: "Vous avez ajouter " + friends + " avec succes ",
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
    ngOnInit() {
    }
};
NotifPage.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] },
    { type: _providers_users_usersProvider__WEBPACK_IMPORTED_MODULE_3__["nameOfUsers"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] }
];
NotifPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notif',
        template: __webpack_require__(/*! raw-loader!./notif.page.html */ "./node_modules/raw-loader/index.js!./src/app/notif/notif.page.html"),
        styles: [__webpack_require__(/*! ./notif.page.scss */ "./src/app/notif/notif.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"],
        _providers_users_usersProvider__WEBPACK_IMPORTED_MODULE_3__["nameOfUsers"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]])
], NotifPage);



/***/ })

}]);
//# sourceMappingURL=notif-notif-module-es2015.js.map