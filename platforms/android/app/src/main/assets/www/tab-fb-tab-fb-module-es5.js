(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab-fb-tab-fb-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab-fb/tab-fb.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab-fb/tab-fb.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Creation de Votre Compte</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card class=\"welcome-card\">\n    <img src=\"/assets/img/Sipago1.jpg\" alt=\"\" />\n    <ion-card-header>\n      <ion-card-title>Welcome to SipaGo</ion-card-title>\n    </ion-card-header>\n  </ion-card>\n</ion-content>\n<ion-content>\n  <div padding>\n    <div text-center>\n      <div text-center>\n        <!-- <button ion-button color=\"facebook\" (click)=\"facebookLogin()\">\n          LOG IN WITH FACEBOOK\n        </button> -->\n      </div>\n    </div>\n  </div>\n\n\n\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/tab-fb/tab-fb.module.ts":
/*!*****************************************!*\
  !*** ./src/app/tab-fb/tab-fb.module.ts ***!
  \*****************************************/
/*! exports provided: TabFbPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabFbPageModule", function() { return TabFbPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tab_fb_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab-fb.page */ "./src/app/tab-fb/tab-fb.page.ts");







var routes = [
    {
        path: '',
        component: _tab_fb_page__WEBPACK_IMPORTED_MODULE_6__["TabFbPage"]
    }
];
var TabFbPageModule = /** @class */ (function () {
    function TabFbPageModule() {
    }
    TabFbPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_tab_fb_page__WEBPACK_IMPORTED_MODULE_6__["TabFbPage"]]
        })
    ], TabFbPageModule);
    return TabFbPageModule;
}());



/***/ }),

/***/ "./src/app/tab-fb/tab-fb.page.scss":
/*!*****************************************!*\
  !*** ./src/app/tab-fb/tab-fb.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-title {\n  font-family: Bahagia;\n  font-size: 24px;\n}\n\nion-button {\n  font-family: Ailerons;\n  font-size: 16px;\n  font-weight: 1000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Nhcm9iaWR5L2V0dWRlL21vYmlsZS9zaXBhR08vU2lwYUdvQXBwIChSZUxFYXNlIDEuMC4xKS9zcmMvYXBwL3RhYi1mYi90YWItZmIucGFnZS5zY3NzIiwic3JjL2FwcC90YWItZmIvdGFiLWZiLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVFO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3RhYi1mYi90YWItZmIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxle1xuICAgIGZvbnQtZmFtaWx5IDogQmFoYWdpYTtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gIH1cblxuICBpb24tYnV0dG9ue1xuICAgIGZvbnQtZmFtaWx5OiBBaWxlcm9ucztcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDA7XG59IiwiaW9uLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IEJhaGFnaWE7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIGZvbnQtZmFtaWx5OiBBaWxlcm9ucztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogMTAwMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tab-fb/tab-fb.page.ts":
/*!***************************************!*\
  !*** ./src/app/tab-fb/tab-fb.page.ts ***!
  \***************************************/
/*! exports provided: TabFbPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabFbPage", function() { return TabFbPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");


//import { Facebook } from '@ionic-native/facebook/ngx';

var TabFbPage = /** @class */ (function () {
    function TabFbPage(
    // public facebook: Facebook,
    navCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
    }
    TabFbPage.prototype.ngOnInit = function () {
    };
    TabFbPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
    ]; };
    TabFbPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab-fb',
            template: __webpack_require__(/*! raw-loader!./tab-fb.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab-fb/tab-fb.page.html"),
            styles: [__webpack_require__(/*! ./tab-fb.page.scss */ "./src/app/tab-fb/tab-fb.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
    ], TabFbPage);
    return TabFbPage;
}());



/***/ })

}]);
//# sourceMappingURL=tab-fb-tab-fb-module-es5.js.map