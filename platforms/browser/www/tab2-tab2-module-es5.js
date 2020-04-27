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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");







var Tab2PageModule = /** @class */ (function () {
    function Tab2PageModule() {
    }
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
    return Tab2PageModule;
}());



/***/ }),

/***/ "./src/app/tab2/tab2.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item {\n  --border-color: var(--ion-color-dark);\n}\n\n:host ion-item {\n  --border-color: white;\n  --highlight-color-invalid: red;\n  --highlight-color-valid: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Nhcm9iaWR5L0Rlc2t0b3AvRG9zc2llciBBc3VzL0lhbnRzYS9TZWxmIExlYXJuL01vYmlsZS9TaXBhR28vU2lwYUdvQXBwL3NyYy9hcHAvdGFiMi90YWIyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFiMi90YWIyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLHFDQUFBO0FDQUo7O0FESUk7RUFDSSxxQkFBQTtFQUNBLDhCQUFBO0VBQ0EsNEJBQUE7QUNEUiIsImZpbGUiOiJzcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmlvbi1pdGVtIHtcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICB9XG4gIFxuICA6aG9zdCB7XG4gICAgaW9uLWl0ZW0ge1xuICAgICAgICAtLWJvcmRlci1jb2xvcjogd2hpdGU7IC8vIGRlZmF1bHQgdW5kZXJsaW5lIGNvbG9yXG4gICAgICAgIC0taGlnaGxpZ2h0LWNvbG9yLWludmFsaWQ6IHJlZDsgLy8gaW52YWxpZCB1bmRlcmxpbmUgY29sb3JcbiAgICAgICAgLS1oaWdobGlnaHQtY29sb3ItdmFsaWQ6IHJlZDsgLy8gdmFsaWQgdW5kZXJsaW5lIGNvbG9yXG4gICAgfVxuICB9IiwiaW9uLWl0ZW0ge1xuICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xufVxuXG46aG9zdCBpb24taXRlbSB7XG4gIC0tYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgLS1oaWdobGlnaHQtY29sb3ItaW52YWxpZDogcmVkO1xuICAtLWhpZ2hsaWdodC1jb2xvci12YWxpZDogcmVkO1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var Tab2Page = /** @class */ (function () {
    function Tab2Page(http, alertController, navCtrl, loadingCtrl) {
        var _this = this;
        this.http = http;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.listAnarana = [];
        setInterval(function () {
            _this.http.get('https://sipago.herokuapp.com/enter/provideEnter.php')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json(); }))
                .subscribe(function (data) {
                console.log(data[0].username);
                //console.log(Object.values(data));
                //var array_data = Object.values(data);
                var i = 0;
                for (i = 0; i < data[0].username.length; i++) {
                    _this.listAnarana.push(data[0].username[i]);
                }
            });
        }, 3000);
    }
    Tab2Page.prototype.createAccount = function () {
        var _this = this;
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
            var requestOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: headers });
            this.http.post("https://sipago.herokuapp.com/enter/fetchDataFromIonic.php", tabPersoData, requestOptions)
                .subscribe(function (data) {
                console.log(data['_body']);
            }, function (error) {
                console.log(error);
            });
            this.myLoading();
            setTimeout(function () {
                _this.accountConfirmed();
            }, 1100);
        }
    };
    Tab2Page.prototype.alertContr = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: "Attention",
                            message: "Vous devez completer tous les cases",
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab2Page.prototype.alertMitovy = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            message: "Veuillez prendre un autre username car celui ci est deja pris!",
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab2Page.prototype.testMitovy = function (anarana) {
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
    };
    Tab2Page.prototype.alertContrMdp = function () {
        var alert = this.alertController.create({
            header: "Mot de passe incorrect",
            message: "Vos deux mots de passse ne se ressemble pas",
            buttons: ['Compris']
        }).then(function (alert) { return alert.present(); });
    };
    Tab2Page.prototype.myLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: 'Veuillez patientez',
                            duration: 1000
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
    Tab2Page.prototype.accountConfirmed = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: "Succes",
                            message: "Votre compte a bien ete creer",
                            buttons: [
                                {
                                    text: "OK",
                                    handler: function () {
                                        _this.navCtrl.navigateRoot('tabs/tab1');
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab2Page.prototype.createTableUser = function () {
        console.log("tafiditra ato amle createtable user");
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var requestOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: headers });
        this.http.post("https://sipago.herokuapp.com/createTable/createTableUser.php", this.username, requestOptions).subscribe(function (data) {
            console.log(data['_body']);
        }, function (error) {
            console.log(error);
        });
    };
    Tab2Page.prototype.navigateToConnectPage = function () {
        console.log("tokony my naviguer");
        this.navCtrl.navigateRoot('/tabs/tab1');
    };
    Tab2Page.ctorParameters = function () { return [
        { type: _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
    ]; };
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
    return Tab2Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module-es5.js.map