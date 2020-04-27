(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-for-connected-tabs-for-connected-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tabs-for-connected/tabs-for-connected.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tabs-for-connected/tabs-for-connected.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<ion-tabs>\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"dashboard\">\n      <ion-icon name=\"paper\" color=\"dark\"></ion-icon>\n      <ion-label color=\"dark\">DashBoard</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"tab3\">\n      <ion-icon name=\"globe\" color=\"dark\"></ion-icon>\n      <ion-label color=\"dark\">Map</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"parametre\">\n      <ion-icon name=\"settings\" color=\"dark\"></ion-icon>\n      <ion-label color=\"dark\">parametre</ion-label>\n    </ion-tab-button>\n\n  </ion-tab-bar>\n\n\n\n</ion-tabs>"

/***/ }),

/***/ "./src/app/tabs-for-connected/tabs-for-connected.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/tabs-for-connected/tabs-for-connected.module.ts ***!
  \*****************************************************************/
/*! exports provided: TabsForConnectedPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsForConnectedPageModule", function() { return TabsForConnectedPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tabs_for_connected_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs-for-connected.page */ "./src/app/tabs-for-connected/tabs-for-connected.page.ts");
/* harmony import */ var _tabs_for_connected_router_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs-for-connected.router.module */ "./src/app/tabs-for-connected/tabs-for-connected.router.module.ts");







var TabsForConnectedPageModule = /** @class */ (function () {
    function TabsForConnectedPageModule() {
    }
    TabsForConnectedPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _tabs_for_connected_router_module__WEBPACK_IMPORTED_MODULE_6__["TabsForConnectedPageRoutingModule"]
            ],
            declarations: [_tabs_for_connected_page__WEBPACK_IMPORTED_MODULE_5__["TabsForConnectedPage"]]
        })
    ], TabsForConnectedPageModule);
    return TabsForConnectedPageModule;
}());



/***/ }),

/***/ "./src/app/tabs-for-connected/tabs-for-connected.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/tabs-for-connected/tabs-for-connected.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYnMtZm9yLWNvbm5lY3RlZC90YWJzLWZvci1jb25uZWN0ZWQucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/tabs-for-connected/tabs-for-connected.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/tabs-for-connected/tabs-for-connected.page.ts ***!
  \***************************************************************/
/*! exports provided: TabsForConnectedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsForConnectedPage", function() { return TabsForConnectedPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_users_usersProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/users/usersProvider */ "./src/providers/users/usersProvider.ts");



var TabsForConnectedPage = /** @class */ (function () {
    function TabsForConnectedPage(nameUser) {
        this.nameUser = nameUser;
        this.username = nameUser.theUsername;
    }
    TabsForConnectedPage.ctorParameters = function () { return [
        { type: _providers_users_usersProvider__WEBPACK_IMPORTED_MODULE_2__["nameOfUsers"] }
    ]; };
    TabsForConnectedPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tabs-for-connected',
            template: __webpack_require__(/*! raw-loader!./tabs-for-connected.page.html */ "./node_modules/raw-loader/index.js!./src/app/tabs-for-connected/tabs-for-connected.page.html"),
            styles: [__webpack_require__(/*! ./tabs-for-connected.page.scss */ "./src/app/tabs-for-connected/tabs-for-connected.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_users_usersProvider__WEBPACK_IMPORTED_MODULE_2__["nameOfUsers"]])
    ], TabsForConnectedPage);
    return TabsForConnectedPage;
}());



/***/ }),

/***/ "./src/app/tabs-for-connected/tabs-for-connected.router.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/tabs-for-connected/tabs-for-connected.router.module.ts ***!
  \************************************************************************/
/*! exports provided: TabsForConnectedPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsForConnectedPageRoutingModule", function() { return TabsForConnectedPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tabs_for_connected_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs-for-connected.page */ "./src/app/tabs-for-connected/tabs-for-connected.page.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");





var routes = [
    {
        path: 'tabs-for-connected',
        component: _tabs_for_connected_page__WEBPACK_IMPORTED_MODULE_3__["TabsForConnectedPage"],
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]],
        children: [
            {
                path: 'dashboard/:username',
                children: [
                    {
                        path: '',
                        loadChildren: function () {
                            return __webpack_require__.e(/*! import() | dashboard-dashboard-module */ "dashboard-dashboard-module").then(__webpack_require__.bind(null, /*! ../dashboard/dashboard.module */ "./src/app/dashboard/dashboard.module.ts")).then(function (m) { return m.DashboardPageModule; });
                        }
                    }
                ],
                canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]]
            },
            {
                path: 'tab3',
                children: [
                    {
                        path: '',
                        loadChildren: function () {
                            return __webpack_require__.e(/*! import() | tab3-tab3-module */ "tab3-tab3-module").then(__webpack_require__.bind(null, /*! ../tab3/tab3.module */ "./src/app/tab3/tab3.module.ts")).then(function (m) { return m.Tab3PageModule; });
                        }
                    }
                ]
            },
            {
                path: 'tab3/:username',
                children: [
                    {
                        path: '',
                        loadChildren: function () {
                            return __webpack_require__.e(/*! import() | tab3-tab3-module */ "tab3-tab3-module").then(__webpack_require__.bind(null, /*! ../tab3/tab3.module */ "./src/app/tab3/tab3.module.ts")).then(function (m) { return m.Tab3PageModule; });
                        }
                    }
                ]
            },
            {
                path: 'parametre',
                children: [
                    {
                        path: '',
                        loadChildren: function () {
                            return __webpack_require__.e(/*! import() | parametre-parametre-module */ "parametre-parametre-module").then(__webpack_require__.bind(null, /*! ../parametre/parametre.module */ "./src/app/parametre/parametre.module.ts")).then(function (m) { return m.ParametrePageModule; });
                        }
                    }
                ]
            },
            {
                path: 'notif/:username',
                children: [
                    {
                        path: '',
                        loadChildren: function () {
                            return __webpack_require__.e(/*! import() | notif-notif-module */ "notif-notif-module").then(__webpack_require__.bind(null, /*! ../notif/notif.module */ "./src/app/notif/notif.module.ts")).then(function (m) { return m.NotifPageModule; });
                        }
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/tabs-for-connected/dashboard/:username',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs-for-connected/dashboard/:username',
        pathMatch: 'full'
    }
];
var TabsForConnectedPageRoutingModule = /** @class */ (function () {
    function TabsForConnectedPageRoutingModule() {
    }
    TabsForConnectedPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TabsForConnectedPageRoutingModule);
    return TabsForConnectedPageRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=tabs-for-connected-tabs-for-connected-module-es5.js.map