(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./node_modules/ng-http-loader/fesm2015/ng-http-loader.js":
/*!****************************************************************!*\
  !*** ./node_modules/ng-http-loader/fesm2015/ng-http-loader.js ***!
  \****************************************************************/
/*! exports provided: AbstractLoader, NgHttpLoaderComponent, NgHttpLoaderModule, PendingRequestsInterceptor, PendingRequestsInterceptorProvider, SPINKIT_COMPONENTS, SkChasingDotsComponent, SkCubeGridComponent, SkDoubleBounceComponent, SkRotatingPlaneComponent, SkSpinnerPulseComponent, SkThreeBounceComponent, SkWanderingCubesComponent, SkWaveComponent, Spinkit, SpinnerVisibilityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractLoader", function() { return AbstractLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgHttpLoaderComponent", function() { return NgHttpLoaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgHttpLoaderModule", function() { return NgHttpLoaderModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendingRequestsInterceptor", function() { return PendingRequestsInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendingRequestsInterceptorProvider", function() { return PendingRequestsInterceptorProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPINKIT_COMPONENTS", function() { return SPINKIT_COMPONENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkChasingDotsComponent", function() { return SkChasingDotsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkCubeGridComponent", function() { return SkCubeGridComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkDoubleBounceComponent", function() { return SkDoubleBounceComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkRotatingPlaneComponent", function() { return SkRotatingPlaneComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkSpinnerPulseComponent", function() { return SkSpinnerPulseComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkThreeBounceComponent", function() { return SkThreeBounceComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkWanderingCubesComponent", function() { return SkWanderingCubesComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkWaveComponent", function() { return SkWaveComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spinkit", function() { return Spinkit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerVisibilityService", function() { return SpinnerVisibilityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");






/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class AbstractLoader {
}
AbstractLoader.propDecorators = {
    backgroundColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SkChasingDotsComponent extends AbstractLoader {
}
SkChasingDotsComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'sk-chasing-dots',
                template: "<!--\nCopyright (c) 2015 Tobias Ahlin\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of\nthis software and associated documentation files (the \"Software\"), to deal in\nthe Software without restriction, including without limitation the rights to\nuse, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of\nthe Software, and to permit persons to whom the Software is furnished to do so,\nsubject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS\nFOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR\nCOPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER\nIN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\nCONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n-->\n\n<div class=\"sk-chasing-dots\" [class.colored]=\"!backgroundColor\">\n    <div class=\"sk-child sk-dot1\" [style.background-color]='backgroundColor'></div>\n    <div class=\"sk-child sk-dot2\" [style.background-color]='backgroundColor'></div>\n</div>\n",
                styles: [".sk-chasing-dots{top:50%;margin:auto;width:40px;height:40px;position:relative;text-align:center;-webkit-animation:2s linear infinite sk-chasingDotsRotate;animation:2s linear infinite sk-chasingDotsRotate}.sk-chasing-dots .sk-child{width:60%;height:60%;display:inline-block;position:absolute;top:0;border-radius:100%;-webkit-animation:2s ease-in-out infinite sk-chasingDotsBounce;animation:2s ease-in-out infinite sk-chasingDotsBounce}.sk-chasing-dots .sk-dot2{top:auto;bottom:0;-webkit-animation-delay:-1s;animation-delay:-1s}@-webkit-keyframes sk-chasingDotsRotate{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes sk-chasingDotsRotate{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes sk-chasingDotsBounce{0%,100%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes sk-chasingDotsBounce{0%,100%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1);transform:scale(1)}}"]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SkCubeGridComponent extends AbstractLoader {
}
SkCubeGridComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'sk-cube-grid',
                template: "<!--\nCopyright (c) 2015 Tobias Ahlin\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of\nthis software and associated documentation files (the \"Software\"), to deal in\nthe Software without restriction, including without limitation the rights to\nuse, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of\nthe Software, and to permit persons to whom the Software is furnished to do so,\nsubject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS\nFOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR\nCOPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER\nIN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\nCONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n-->\n\n<div class=\"sk-cube-grid\" [class.colored]=\"!backgroundColor\">\n    <div class=\"sk-cube sk-cube1\" [style.background-color]='backgroundColor'></div>\n    <div class=\"sk-cube sk-cube2\" [style.background-color]='backgroundColor'></div>\n    <div class=\"sk-cube sk-cube3\" [style.background-color]='backgroundColor'></div>\n    <div class=\"sk-cube sk-cube4\" [style.background-color]='backgroundColor'></div>\n    <div class=\"sk-cube sk-cube5\" [style.background-color]='backgroundColor'></div>\n    <div class=\"sk-cube sk-cube6\" [style.background-color]='backgroundColor'></div>\n    <div class=\"sk-cube sk-cube7\" [style.background-color]='backgroundColor'></div>\n    <div class=\"sk-cube sk-cube8\" [style.background-color]='backgroundColor'></div>\n    <div class=\"sk-cube sk-cube9\" [style.background-color]='backgroundColor'></div>\n</div>\n",
                styles: [".sk-cube-grid{position:relative;top:50%;width:40px;height:40px;margin:auto}.sk-cube-grid .sk-cube{width:33.33%;height:33.33%;float:left;-webkit-animation:1.3s ease-in-out infinite sk-cubeGridScaleDelay;animation:1.3s ease-in-out infinite sk-cubeGridScaleDelay}.sk-cube-grid .sk-cube1{-webkit-animation-delay:.2s;animation-delay:.2s}.sk-cube-grid .sk-cube2{-webkit-animation-delay:.3s;animation-delay:.3s}.sk-cube-grid .sk-cube3{-webkit-animation-delay:.4s;animation-delay:.4s}.sk-cube-grid .sk-cube4{-webkit-animation-delay:.1s;animation-delay:.1s}.sk-cube-grid .sk-cube5{-webkit-animation-delay:.2s;animation-delay:.2s}.sk-cube-grid .sk-cube6{-webkit-animation-delay:.3s;animation-delay:.3s}.sk-cube-grid .sk-cube7{-webkit-animation-delay:0s;animation-delay:0s}.sk-cube-grid .sk-cube8{-webkit-animation-delay:.1s;animation-delay:.1s}.sk-cube-grid .sk-cube9{-webkit-animation-delay:.2s;animation-delay:.2s}@-webkit-keyframes sk-cubeGridScaleDelay{0%,100%,70%{-webkit-transform:scale3D(1,1,1);transform:scale3D(1,1,1)}35%{-webkit-transform:scale3D(0,0,1);transform:scale3D(0,0,1)}}@keyframes sk-cubeGridScaleDelay{0%,100%,70%{-webkit-transform:scale3D(1,1,1);transform:scale3D(1,1,1)}35%{-webkit-transform:scale3D(0,0,1);transform:scale3D(0,0,1)}}"]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SkDoubleBounceComponent extends AbstractLoader {
}
SkDoubleBounceComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'sk-double-bounce',
                template: "<!--\nCopyright (c) 2015 Tobias Ahlin\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of\nthis software and associated documentation files (the \"Software\"), to deal in\nthe Software without restriction, including without limitation the rights to\nuse, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of\nthe Software, and to permit persons to whom the Software is furnished to do so,\nsubject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS\nFOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR\nCOPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER\nIN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\nCONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n-->\n\n<div class=\"sk-double-bounce\" [class.colored]=\"!backgroundColor\">\n    <div class=\"sk-child sk-double-bounce1\" [style.background-color]='backgroundColor'></div>\n    <div class=\"sk-child sk-double-bounce2\" [style.background-color]='backgroundColor'></div>\n</div>\n",
                styles: [".sk-double-bounce{top:50%;width:40px;height:40px;position:relative;margin:auto}.sk-double-bounce .sk-child{width:100%;height:100%;border-radius:50%;background-color:#333;opacity:.6;position:absolute;top:0;left:0;-webkit-animation:2s ease-in-out infinite sk-doubleBounce;animation:2s ease-in-out infinite sk-doubleBounce}.sk-double-bounce .sk-double-bounce2{-webkit-animation-delay:-1s;animation-delay:-1s}@-webkit-keyframes sk-doubleBounce{0%,100%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes sk-doubleBounce{0%,100%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1);transform:scale(1)}}"]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SkRotatingPlaneComponent extends AbstractLoader {
}
SkRotatingPlaneComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'sk-rotating-plane',
                template: "<!--\nCopyright (c) 2015 Tobias Ahlin\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of\nthis software and associated documentation files (the \"Software\"), to deal in\nthe Software without restriction, including without limitation the rights to\nuse, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of\nthe Software, and to permit persons to whom the Software is furnished to do so,\nsubject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS\nFOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR\nCOPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER\nIN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\nCONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n-->\n\n<div class=\"sk-rotating-plane colored-parent\" [style.background-color]='backgroundColor'></div>\n",
                styles: [".sk-rotating-plane{position:relative;top:50%;width:40px;height:40px;margin:auto;-webkit-animation:1.2s ease-in-out infinite sk-rotatePlane;animation:1.2s ease-in-out infinite sk-rotatePlane}@-webkit-keyframes sk-rotatePlane{0%{-webkit-transform:perspective(120px) rotateX(0) rotateY(0);transform:perspective(120px) rotateX(0) rotateY(0)}50%{-webkit-transform:perspective(120px) rotateX(-180.1deg) rotateY(0);transform:perspective(120px) rotateX(-180.1deg) rotateY(0)}100%{-webkit-transform:perspective(120px) rotateX(-180deg) rotateY(-179.9deg);transform:perspective(120px) rotateX(-180deg) rotateY(-179.9deg)}}@keyframes sk-rotatePlane{0%{-webkit-transform:perspective(120px) rotateX(0) rotateY(0);transform:perspective(120px) rotateX(0) rotateY(0)}50%{-webkit-transform:perspective(120px) rotateX(-180.1deg) rotateY(0);transform:perspective(120px) rotateX(-180.1deg) rotateY(0)}100%{-webkit-transform:perspective(120px) rotateX(-180deg) rotateY(-179.9deg);transform:perspective(120px) rotateX(-180deg) rotateY(-179.9deg)}}"]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SkSpinnerPulseComponent extends AbstractLoader {
}
SkSpinnerPulseComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'sk-spinner-pulse',
                template: "<!--\nCopyright (c) 2015 Tobias Ahlin\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of\nthis software and associated documentation files (the \"Software\"), to deal in\nthe Software without restriction, including without limitation the rights to\nuse, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of\nthe Software, and to permit persons to whom the Software is furnished to do so,\nsubject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS\nFOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR\nCOPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER\nIN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\nCONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n-->\n\n<div class=\"sk-spinner sk-spinner-pulse colored-parent\" [style.background-color]='backgroundColor'></div>\n",
                styles: [".sk-spinner-pulse{position:relative;top:50%;width:40px;height:40px;margin:auto;border-radius:100%;-webkit-animation:1s ease-in-out infinite sk-pulseScaleOut;animation:1s ease-in-out infinite sk-pulseScaleOut}@-webkit-keyframes sk-pulseScaleOut{0%{-webkit-transform:scale(0);transform:scale(0)}100%{-webkit-transform:scale(1);transform:scale(1);opacity:0}}@keyframes sk-pulseScaleOut{0%{-webkit-transform:scale(0);transform:scale(0)}100%{-webkit-transform:scale(1);transform:scale(1);opacity:0}}"]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SkThreeBounceComponent extends AbstractLoader {
}
SkThreeBounceComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'sk-three-bounce',
                template: "<!--\nCopyright (c) 2015 Tobias Ahlin\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of\nthis software and associated documentation files (the \"Software\"), to deal in\nthe Software without restriction, including without limitation the rights to\nuse, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of\nthe Software, and to permit persons to whom the Software is furnished to do so,\nsubject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS\nFOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR\nCOPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER\nIN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\nCONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n-->\n\n<div class=\"sk-three-bounce\" [class.colored]=\"!backgroundColor\">\n    <div class=\"sk-child sk-bounce1\" [style.background-color]='backgroundColor'></div>\n    <div class=\"sk-child sk-bounce2\" [style.background-color]='backgroundColor'></div>\n    <div class=\"sk-child sk-bounce3\" [style.background-color]='backgroundColor'></div>\n</div>\n",
                styles: [".sk-three-bounce{top:50%;position:relative;margin:auto;width:80px;text-align:center}.sk-three-bounce .sk-child{width:20px;height:20px;border-radius:100%;display:inline-block;-webkit-animation:1.4s ease-in-out infinite both sk-three-bounce;animation:1.4s ease-in-out infinite both sk-three-bounce}.sk-three-bounce .sk-bounce1{-webkit-animation-delay:-.32s;animation-delay:-.32s}.sk-three-bounce .sk-bounce2{-webkit-animation-delay:-.16s;animation-delay:-.16s}@-webkit-keyframes sk-three-bounce{0%,100%,80%{-webkit-transform:scale(0);transform:scale(0)}40%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes sk-three-bounce{0%,100%,80%{-webkit-transform:scale(0);transform:scale(0)}40%{-webkit-transform:scale(1);transform:scale(1)}}"]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SkWanderingCubesComponent extends AbstractLoader {
}
SkWanderingCubesComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'sk-wandering-cubes',
                template: "<!--\nCopyright (c) 2015 Tobias Ahlin\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of\nthis software and associated documentation files (the \"Software\"), to deal in\nthe Software without restriction, including without limitation the rights to\nuse, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of\nthe Software, and to permit persons to whom the Software is furnished to do so,\nsubject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS\nFOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR\nCOPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER\nIN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\nCONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n-->\n\n<div class=\"sk-wandering-cubes\" [class.colored]=\"!backgroundColor\">\n    <div class=\"sk-cube sk-cube1\" [style.background-color]='backgroundColor'></div>\n    <div class=\"sk-cube sk-cube2\" [style.background-color]='backgroundColor'></div>\n</div>\n",
                styles: [".sk-wandering-cubes{top:50%;margin:auto;width:40px;height:40px;position:relative}.sk-wandering-cubes .sk-cube{width:10px;height:10px;position:absolute;top:0;left:0;-webkit-animation:1.8s ease-in-out -1.8s infinite both sk-wanderingCube;animation:1.8s ease-in-out -1.8s infinite both sk-wanderingCube}.sk-wandering-cubes .sk-cube2{-webkit-animation-delay:-.9s;animation-delay:-.9s}@-webkit-keyframes sk-wanderingCube{0%{-webkit-transform:rotate(0);transform:rotate(0)}25%{-webkit-transform:translateX(30px) rotate(-90deg) scale(.5);transform:translateX(30px) rotate(-90deg) scale(.5)}50%{-webkit-transform:translateX(30px) translateY(30px) rotate(-179deg);transform:translateX(30px) translateY(30px) rotate(-179deg)}50.1%{-webkit-transform:translateX(30px) translateY(30px) rotate(-180deg);transform:translateX(30px) translateY(30px) rotate(-180deg)}75%{-webkit-transform:translateX(0) translateY(30px) rotate(-270deg) scale(.5);transform:translateX(0) translateY(30px) rotate(-270deg) scale(.5)}100%{-webkit-transform:rotate(-360deg);transform:rotate(-360deg)}}@keyframes sk-wanderingCube{0%{-webkit-transform:rotate(0);transform:rotate(0)}25%{-webkit-transform:translateX(30px) rotate(-90deg) scale(.5);transform:translateX(30px) rotate(-90deg) scale(.5)}50%{-webkit-transform:translateX(30px) translateY(30px) rotate(-179deg);transform:translateX(30px) translateY(30px) rotate(-179deg)}50.1%{-webkit-transform:translateX(30px) translateY(30px) rotate(-180deg);transform:translateX(30px) translateY(30px) rotate(-180deg)}75%{-webkit-transform:translateX(0) translateY(30px) rotate(-270deg) scale(.5);transform:translateX(0) translateY(30px) rotate(-270deg) scale(.5)}100%{-webkit-transform:rotate(-360deg);transform:rotate(-360deg)}}"]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SkWaveComponent extends AbstractLoader {
}
SkWaveComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'sk-wave',
                template: "<!--\nCopyright (c) 2015 Tobias Ahlin\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of\nthis software and associated documentation files (the \"Software\"), to deal in\nthe Software without restriction, including without limitation the rights to\nuse, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of\nthe Software, and to permit persons to whom the Software is furnished to do so,\nsubject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS\nFOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR\nCOPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER\nIN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\nCONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n-->\n\n<div class=\"sk-wave\" [class.colored]=\"!backgroundColor\">\n    <div class=\"sk-rect sk-rect1\" [style.background-color]='backgroundColor'></div>\n    <div class=\"sk-rect sk-rect2\" [style.background-color]='backgroundColor'></div>\n    <div class=\"sk-rect sk-rect3\" [style.background-color]='backgroundColor'></div>\n    <div class=\"sk-rect sk-rect4\" [style.background-color]='backgroundColor'></div>\n    <div class=\"sk-rect sk-rect5\" [style.background-color]='backgroundColor'></div>\n</div>\n",
                styles: [".sk-wave{position:relative;top:50%;margin:auto;width:50px;height:40px;text-align:center;font-size:10px}.sk-wave .sk-rect{float:left;margin-right:1px;height:100%;width:6px;display:inline-block;-webkit-animation:1.2s ease-in-out infinite sk-waveStretchDelay;animation:1.2s ease-in-out infinite sk-waveStretchDelay}.sk-wave .sk-rect1{-webkit-animation-delay:-1.2s;animation-delay:-1.2s}.sk-wave .sk-rect2{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.sk-wave .sk-rect3{-webkit-animation-delay:-1s;animation-delay:-1s}.sk-wave .sk-rect4{-webkit-animation-delay:-.9s;animation-delay:-.9s}.sk-wave .sk-rect5{-webkit-animation-delay:-.8s;animation-delay:-.8s}@-webkit-keyframes sk-waveStretchDelay{0%,100%,40%{-webkit-transform:scaleY(.4);transform:scaleY(.4)}20%{-webkit-transform:scaleY(1);transform:scaleY(1)}}@keyframes sk-waveStretchDelay{0%,100%,40%{-webkit-transform:scaleY(.4);transform:scaleY(.4)}20%{-webkit-transform:scaleY(1);transform:scaleY(1)}}"]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PendingRequestsInterceptor {
    constructor() {
        this._pendingRequests = 0;
        this._pendingRequestsStatus$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this._filteredUrlPatterns = [];
        this._filteredMethods = [];
        this._filteredHeaders = [];
    }
    /**
     * @return {?}
     */
    get pendingRequestsStatus$() {
        return this._pendingRequestsStatus$.asObservable();
    }
    /**
     * @return {?}
     */
    get pendingRequests() {
        return this._pendingRequests;
    }
    /**
     * @return {?}
     */
    get filteredUrlPatterns() {
        return this._filteredUrlPatterns;
    }
    /**
     * @param {?} httpMethods
     * @return {?}
     */
    set filteredMethods(httpMethods) {
        this._filteredMethods = httpMethods;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set filteredHeaders(value) {
        this._filteredHeaders = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set forceByPass(value) {
        this._forceByPass = value;
    }
    /**
     * @private
     * @param {?} url
     * @return {?}
     */
    shouldBypassUrl(url) {
        return this._filteredUrlPatterns.some((/**
         * @param {?} e
         * @return {?}
         */
        e => {
            return e.test(url);
        }));
    }
    /**
     * @private
     * @param {?} req
     * @return {?}
     */
    shouldBypassMethod(req) {
        return this._filteredMethods.some((/**
         * @param {?} e
         * @return {?}
         */
        e => {
            return e.toUpperCase() === req.method.toUpperCase();
        }));
    }
    /**
     * @private
     * @param {?} req
     * @return {?}
     */
    shouldBypassHeader(req) {
        return this._filteredHeaders.some((/**
         * @param {?} e
         * @return {?}
         */
        e => {
            return req.headers.has(e);
        }));
    }
    /**
     * @private
     * @param {?} req
     * @return {?}
     */
    shouldBypass(req) {
        return this._forceByPass
            || this.shouldBypassUrl(req.urlWithParams)
            || this.shouldBypassMethod(req)
            || this.shouldBypassHeader(req);
    }
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    intercept(req, next) {
        /** @type {?} */
        const shouldBypass = this.shouldBypass(req);
        if (!shouldBypass) {
            this._pendingRequests++;
            if (1 === this._pendingRequests) {
                this._pendingRequestsStatus$.next(true);
            }
        }
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])((/**
         * @return {?}
         */
        () => {
            if (!shouldBypass) {
                this._pendingRequests--;
                if (0 === this._pendingRequests) {
                    this._pendingRequestsStatus$.next(false);
                }
            }
        })));
    }
}
PendingRequestsInterceptor.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ PendingRequestsInterceptor.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function PendingRequestsInterceptor_Factory() { return new PendingRequestsInterceptor(); }, token: PendingRequestsInterceptor, providedIn: "root" });
/** @type {?} */
const PendingRequestsInterceptorProvider = [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
        useExisting: PendingRequestsInterceptor,
        multi: true
    }];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SpinnerVisibilityService {
    /**
     * @param {?} pendingRequestsInterceptor
     */
    constructor(pendingRequestsInterceptor) {
        this.pendingRequestsInterceptor = pendingRequestsInterceptor;
        this._visibility$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
    }
    /**
     * @return {?}
     */
    get visibility$() {
        return this._visibility$.asObservable();
    }
    /**
     * @return {?}
     */
    show() {
        this.pendingRequestsInterceptor.forceByPass = true;
        this._visibility$.next(true);
    }
    /**
     * @return {?}
     */
    hide() {
        this._visibility$.next(false);
        this.pendingRequestsInterceptor.forceByPass = false;
    }
}
SpinnerVisibilityService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
SpinnerVisibilityService.ctorParameters = () => [
    { type: PendingRequestsInterceptor }
];
/** @nocollapse */ SpinnerVisibilityService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function SpinnerVisibilityService_Factory() { return new SpinnerVisibilityService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(PendingRequestsInterceptor)); }, token: SpinnerVisibilityService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const Spinkit = {
    skChasingDots: 'sk-chasing-dots',
    skCubeGrid: 'sk-cube-grid',
    skDoubleBounce: 'sk-double-bounce',
    skRotatingPlane: 'sk-rotationg-plane',
    skSpinnerPulse: 'sk-spinner-pulse',
    skThreeBounce: 'sk-three-bounce',
    skWanderingCubes: 'sk-wandering-cubes',
    skWave: 'sk-wave',
};
/** @type {?} */
const SPINKIT_COMPONENTS = [
    SkCubeGridComponent,
    SkChasingDotsComponent,
    SkDoubleBounceComponent,
    SkRotatingPlaneComponent,
    SkSpinnerPulseComponent,
    SkThreeBounceComponent,
    SkWanderingCubesComponent,
    SkWaveComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgHttpLoaderComponent {
    /**
     * @param {?} pendingRequestsInterceptor
     * @param {?} spinnerVisibility
     */
    constructor(pendingRequestsInterceptor, spinnerVisibility) {
        this.pendingRequestsInterceptor = pendingRequestsInterceptor;
        this.spinnerVisibility = spinnerVisibility;
        this.spinkit = Spinkit;
        this.visibleUntil = Date.now();
        this.backdrop = true;
        this.debounceDelay = 0;
        this.entryComponent = null;
        this.extraDuration = 0;
        this.filteredHeaders = [];
        this.filteredMethods = [];
        this.filteredUrlPatterns = [];
        this.minDuration = 0;
        this.opacity = '.7';
        this.spinner = Spinkit.skWave;
    }
    /**
     * @private
     * @return {?}
     */
    initIsvisibleObservable() {
        const [showSpinner$, hideSpinner$] = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["partition"])(this.pendingRequestsInterceptor.pendingRequestsStatus$, (/**
         * @param {?} h
         * @return {?}
         */
        h => h));
        this.isVisible$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(this.pendingRequestsInterceptor.pendingRequestsStatus$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((/**
         * @return {?}
         */
        () => showSpinner$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounce"])((/**
         * @return {?}
         */
        () => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(this.debounceDelay))))))), showSpinner$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((/**
         * @return {?}
         */
        () => hideSpinner$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounce"])((/**
         * @return {?}
         */
        () => this.getVisibilityTimer$())))))), this.spinnerVisibility.visibility$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((/**
         * @param {?} h
         * @return {?}
         */
        h => this.updateExpirationDelay(h))));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.initIsvisibleObservable();
        this.nullifySpinnerIfEntryComponentIsDefined();
        this.initFilters();
    }
    /**
     * @private
     * @return {?}
     */
    nullifySpinnerIfEntryComponentIsDefined() {
        if (this.entryComponent) {
            this.spinner = null;
        }
    }
    /**
     * @private
     * @return {?}
     */
    initFilters() {
        this.initFilteredUrlPatterns();
        this.initFilteredMethods();
        this.initFilteredHeaders();
    }
    /**
     * @private
     * @return {?}
     */
    initFilteredUrlPatterns() {
        if (!(this.filteredUrlPatterns instanceof Array)) {
            throw new TypeError('`filteredUrlPatterns` must be an array.');
        }
        if (!!this.filteredUrlPatterns.length) {
            this.filteredUrlPatterns.forEach((/**
             * @param {?} e
             * @return {?}
             */
            e => this.pendingRequestsInterceptor.filteredUrlPatterns.push(new RegExp(e))));
        }
    }
    /**
     * @private
     * @return {?}
     */
    initFilteredMethods() {
        if (!(this.filteredMethods instanceof Array)) {
            throw new TypeError('`filteredMethods` must be an array.');
        }
        this.pendingRequestsInterceptor.filteredMethods = this.filteredMethods;
    }
    /**
     * @private
     * @return {?}
     */
    initFilteredHeaders() {
        if (!(this.filteredHeaders instanceof Array)) {
            throw new TypeError('`filteredHeaders` must be an array.');
        }
        this.pendingRequestsInterceptor.filteredHeaders = this.filteredHeaders;
    }
    /**
     * @private
     * @param {?} showSpinner
     * @return {?}
     */
    updateExpirationDelay(showSpinner) {
        if (showSpinner) {
            this.visibleUntil = Date.now() + this.minDuration;
        }
    }
    /**
     * @private
     * @return {?}
     */
    getVisibilityTimer$() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(Math.max(this.extraDuration, this.visibleUntil - Date.now()));
    }
}
NgHttpLoaderComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'ng-http-loader',
                template: "<div id=\"spinner\"\n     *ngIf=\"isVisible$ | async\"\n     [class.backdrop]=\"backdrop\"\n     [style.opacity]=\"opacity\">\n\n    <ng-container *ngComponentOutlet=\"entryComponent\"></ng-container>\n\n    <sk-cube-grid\n        *ngIf=\"spinner === spinkit.skCubeGrid\"\n        [backgroundColor]=\"backgroundColor\">\n    </sk-cube-grid>\n\n    <sk-chasing-dots\n        *ngIf=\"spinner === spinkit.skChasingDots\"\n        [backgroundColor]=\"backgroundColor\">\n    </sk-chasing-dots>\n\n    <sk-double-bounce\n        *ngIf=\"spinner === spinkit.skDoubleBounce\"\n        [backgroundColor]=\"backgroundColor\">\n    </sk-double-bounce>\n\n    <sk-rotating-plane\n        *ngIf=\"spinner === spinkit.skRotatingPlane\"\n        [backgroundColor]=\"backgroundColor\">\n    </sk-rotating-plane>\n\n    <sk-spinner-pulse\n        *ngIf=\"spinner === spinkit.skSpinnerPulse\"\n        [backgroundColor]=\"backgroundColor\">\n    </sk-spinner-pulse>\n\n    <sk-three-bounce\n        *ngIf=\"spinner === spinkit.skThreeBounce\"\n        [backgroundColor]=\"backgroundColor\">\n    </sk-three-bounce>\n\n    <sk-wandering-cubes\n        *ngIf=\"spinner === spinkit.skWanderingCubes\"\n        [backgroundColor]=\"backgroundColor\">\n    </sk-wandering-cubes>\n\n    <sk-wave\n        *ngIf=\"spinner === spinkit.skWave\"\n        [backgroundColor]=\"backgroundColor\">\n    </sk-wave>\n\n</div>\n\n",
                styles: ["#spinner{top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);position:fixed;z-index:9999}#spinner.backdrop{top:0;left:0;height:100%;width:100%;background-color:#f1f1f1;display:flex;align-items:center;justify-content:center;-webkit-transform:none;transform:none}::ng-deep .colored-parent,::ng-deep .colored>div{background-color:#333}"]
            }] }
];
/** @nocollapse */
NgHttpLoaderComponent.ctorParameters = () => [
    { type: PendingRequestsInterceptor },
    { type: SpinnerVisibilityService }
];
NgHttpLoaderComponent.propDecorators = {
    backdrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    backgroundColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    debounceDelay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    entryComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    extraDuration: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    filteredHeaders: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    filteredMethods: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    filteredUrlPatterns: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    minDuration: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    opacity: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    spinner: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgHttpLoaderModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: NgHttpLoaderModule,
            providers: [
                PendingRequestsInterceptorProvider,
            ],
        };
    }
}
NgHttpLoaderModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [
                    NgHttpLoaderComponent,
                    ...SPINKIT_COMPONENTS,
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                ],
                exports: [
                    NgHttpLoaderComponent,
                    ...SPINKIT_COMPONENTS,
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=ng-http-loader.js.map


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tab1/tab1.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab1/tab1.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Se Connecter\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-card class=\"welcome-card\">\n      <img src=\"/assets/img/Sipago1.jpg\" alt=\"\" />\n      <ion-card-header>\n        <ion-card-title>Welcome to SipaGo</ion-card-title>\n      </ion-card-header>\n    </ion-card>\n</ion-content>\n<ion-content >\n   <div padding>\n      <div text-center> \n          <ion-item>\n              <ion-icon name=\"person\" color=\"dark\"></ion-icon>\n              <ion-input placeholder=\"  username\" [(ngModel)]=\"username\" ></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-icon name=\"finger-print\" color=\"dark\"></ion-icon>\n            <ion-input placeholder=\"  mot de passe\" [(ngModel)]=\"mdp\" type=\"password\"></ion-input>\n          </ion-item>\n          \n              <ion-button type=\"submit\" color=\"dark\" (click)=\"toConnect()\">Se connecter\n                <ion-icon name=\"log-in\" slot=\"start\"></ion-icon>\n              </ion-button>\n        </div>\n   </div>\n\n    \n    \n      \n  \n</ion-content>\n"

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
/* harmony import */ var ng_http_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-http-loader */ "./node_modules/ng-http-loader/fesm2015/ng-http-loader.js");








let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            ng_http_loader__WEBPACK_IMPORTED_MODULE_7__["NgHttpLoaderModule"].forRoot(),
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

module.exports = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\nion-item {\n  --border-color: var(--ion-color-dark);\n}\n\n:host ion-item {\n  --border-color: white;\n  --highlight-color-invalid: red;\n  --highlight-color-valid: red;\n}\n\nion-title {\n  font-family: Bahagia;\n  font-size: 24px;\n}\n\nion-card-title {\n  font-family: theSecret;\n  font-size: 30px;\n}\n\nion-input {\n  font-style: italic;\n}\n\nion-button {\n  font-family: Ailerons;\n  font-size: 16px;\n  font-weight: 1000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Nhcm9iaWR5L2V0dWRlL21vYmlsZS9zaXBhR08vU2lwYUdvQXBwIChSZUxFYXNlIDEuMC4xKS9zcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQ0FBQTtBQ0NGOztBREdFO0VBQ0kscUJBQUE7RUFDQSw4QkFBQTtFQUNBLDRCQUFBO0FDQU47O0FES0E7RUFDRSxvQkFBQTtFQUNBLGVBQUE7QUNGRjs7QURLQTtFQUNFLHNCQUFBO0VBQ0EsZUFBQTtBQ0ZGOztBREtBO0VBQ0Usa0JBQUE7QUNGRjs7QURLQTtFQUNJLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5pb24taXRlbSB7XG4gIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG59XG5cbjpob3N0IHtcbiAgaW9uLWl0ZW0ge1xuICAgICAgLS1ib3JkZXItY29sb3I6IHdoaXRlOyAvLyBkZWZhdWx0IHVuZGVybGluZSBjb2xvclxuICAgICAgLS1oaWdobGlnaHQtY29sb3ItaW52YWxpZDogcmVkOyAvLyBpbnZhbGlkIHVuZGVybGluZSBjb2xvclxuICAgICAgLS1oaWdobGlnaHQtY29sb3ItdmFsaWQ6IHJlZDsgLy8gdmFsaWQgdW5kZXJsaW5lIGNvbG9yXG4gIH1cbn1cblxuXG5pb24tdGl0bGV7XG4gIGZvbnQtZmFtaWx5IDogQmFoYWdpYTtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG5pb24tY2FyZC10aXRsZXtcbiAgZm9udC1mYW1pbHk6IHRoZVNlY3JldDtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG5pb24taW5wdXQge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbmlvbi1idXR0b257XG4gICAgZm9udC1mYW1pbHk6IEFpbGVyb25zO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogMTAwMDtcbn0iLCIud2VsY29tZS1jYXJkIGltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbn1cblxuOmhvc3QgaW9uLWl0ZW0ge1xuICAtLWJvcmRlci1jb2xvcjogd2hpdGU7XG4gIC0taGlnaGxpZ2h0LWNvbG9yLWludmFsaWQ6IHJlZDtcbiAgLS1oaWdobGlnaHQtY29sb3ItdmFsaWQ6IHJlZDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IEJhaGFnaWE7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuaW9uLWNhcmQtdGl0bGUge1xuICBmb250LWZhbWlseTogdGhlU2VjcmV0O1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cbmlvbi1pbnB1dCB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIGZvbnQtZmFtaWx5OiBBaWxlcm9ucztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogMTAwMDtcbn0iXX0= */"

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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var _providers_users_usersProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../providers/users/usersProvider */ "./src/providers/users/usersProvider.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");


//import { LocalNotifications } from '@ionic-native/local-notifications/ngx'









let Tab1Page = class Tab1Page {
    constructor(alertController, http, navCtrl, nameUsers, router, authService, loadingCtrl, https) {
        this.alertController = alertController;
        this.http = http;
        this.navCtrl = navCtrl;
        this.nameUsers = nameUsers;
        this.router = router;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.https = https;
        this.compteur = 0;
    }
    toConnect() {
        this.firstLoad();
        this.chargement = setInterval(() => {
            this.myLoading();
            this.compteur += 1;
            console.log(this.compteur);
            if (this.compteur >= 4) {
                this.errorReseau();
                console.log("tafiditra ato ve");
                clearInterval(this.chargement);
            }
        }, 1900);
        console.log('connect is clicked and the username is');
        if (!(this.username) || !(this.mdp)) {
            this.alertContr();
        }
        else {
            var tabPersoData = [this.username, this.mdp];
            //recevoir l'username et du mdp dans l'API Rest pour le mettre dans le base de donnee
            this.http.get('https://sipago.herokuapp.com/enter/provideEnter.php')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["catchError"])(this.handleError('getDetails', [])))
                .subscribe(theData => {
                this.confirmIfYes(theData);
                clearInterval(this.chargement);
            });
        }
    }
    handleError(operation = 'operation', result) {
        return (error) => {
            // TODO: send the error to remote logging infrastructure
            console.log("this is the error");
            this.errorReseau();
            clearInterval(this.chargement);
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            //this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["of"])(result);
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
    firstLoad() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                message: 'Veuillez patientez',
                duration: 2000
            });
            yield loading.present();
        });
    }
    myLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                message: 'Veuillez patientez',
                duration: 2000
            });
            yield loading.present();
        });
    }
};
Tab1Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _providers_users_usersProvider__WEBPACK_IMPORTED_MODULE_5__["nameOfUsers"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab1',
        template: __webpack_require__(/*! raw-loader!./tab1.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab1/tab1.page.html"),
        styles: [__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _providers_users_usersProvider__WEBPACK_IMPORTED_MODULE_5__["nameOfUsers"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        _services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], Tab1Page);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module-es2015.js.map