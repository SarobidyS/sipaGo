(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/ion-menu_4-ios.entry.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ion-menu_4-ios.entry.js ***!
  \***********************************************************************/
/*! exports provided: ion_menu, ion_menu_button, ion_menu_controller, ion_menu_toggle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_menu", function() { return Menu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_menu_button", function() { return MenuButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_menu_controller", function() { return MenuController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_menu_toggle", function() { return MenuToggle; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core-13ed1ad7.js */ "./node_modules/@ionic/core/dist/esm-es5/core-13ed1ad7.js");
/* harmony import */ var _config_bb99b659_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config-bb99b659.js */ "./node_modules/@ionic/core/dist/esm-es5/config-bb99b659.js");
/* harmony import */ var _animation_5559213c_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animation-5559213c.js */ "./node_modules/@ionic/core/dist/esm-es5/animation-5559213c.js");
/* harmony import */ var _index_2c4a5477_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index-2c4a5477.js */ "./node_modules/@ionic/core/dist/esm-es5/index-2c4a5477.js");
/* harmony import */ var _theme_353a032e_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./theme-353a032e.js */ "./node_modules/@ionic/core/dist/esm-es5/theme-353a032e.js");
/* harmony import */ var _helpers_c90aaa66_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers-c90aaa66.js */ "./node_modules/@ionic/core/dist/esm-es5/helpers-c90aaa66.js");
/* harmony import */ var _cubic_bezier_90d0df24_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cubic-bezier-90d0df24.js */ "./node_modules/@ionic/core/dist/esm-es5/cubic-bezier-90d0df24.js");
var _this = undefined;








var Menu = /** @class */ (function () {
    function class_1(hostRef) {
        Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
        this.lastOnEnd = 0;
        this.blocker = _index_2c4a5477_js__WEBPACK_IMPORTED_MODULE_4__["GESTURE_CONTROLLER"].createBlocker({ disableScroll: true });
        this.mode = Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this);
        this.isAnimating = false;
        this._isOpen = false;
        this.isPaneVisible = false;
        this.isEndSide = false;
        /**
         * If `true`, the menu is disabled.
         */
        this.disabled = false;
        /**
         * Which side of the view the menu should be placed.
         */
        this.side = 'start';
        /**
         * If `true`, swiping the menu is enabled.
         */
        this.swipeGesture = true;
        /**
         * The edge threshold for dragging the menu open.
         * If a drag/swipe happens over this value, the menu is not triggered.
         */
        this.maxEdgeStart = 50;
        this.ionWillOpen = Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this, "ionWillOpen", 7);
        this.ionWillClose = Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this, "ionWillClose", 7);
        this.ionDidOpen = Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this, "ionDidOpen", 7);
        this.ionDidClose = Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this, "ionDidClose", 7);
        this.ionMenuChange = Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this, "ionMenuChange", 7);
        this.lazyMenuCtrl = Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["k"])(this, "ion-menu-controller");
    }
    class_1.prototype.typeChanged = function (type, oldType) {
        var contentEl = this.contentEl;
        if (contentEl) {
            if (oldType !== undefined) {
                contentEl.classList.remove("menu-content-" + oldType);
            }
            contentEl.classList.add("menu-content-" + type);
            contentEl.removeAttribute('style');
        }
        if (this.menuInnerEl) {
            // Remove effects of previous animations
            this.menuInnerEl.removeAttribute('style');
        }
        this.animation = undefined;
    };
    class_1.prototype.disabledChanged = function () {
        this.updateState();
        this.ionMenuChange.emit({
            disabled: this.disabled,
            open: this._isOpen
        });
    };
    class_1.prototype.sideChanged = function () {
        this.isEndSide = Object(_helpers_c90aaa66_js__WEBPACK_IMPORTED_MODULE_6__["i"])(this.side);
    };
    class_1.prototype.swipeGestureChanged = function () {
        this.updateState();
    };
    class_1.prototype.componentWillLoad = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var menuCtrl, _a, el, parent, content, _b;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (this.type === undefined) {
                            this.type = _config_bb99b659_js__WEBPACK_IMPORTED_MODULE_2__["b"].get('menuType', this.mode === 'ios' ? 'reveal' : 'overlay');
                        }
                        _a = this;
                        return [4 /*yield*/, this.lazyMenuCtrl.componentOnReady().then(function (p) { return p._getInstance(); })];
                    case 1:
                        menuCtrl = _a.menuCtrl = _c.sent();
                        el = this.el;
                        parent = el.parentNode;
                        content = this.contentId !== undefined
                            ? document.getElementById(this.contentId)
                            : parent && parent.querySelector && parent.querySelector('[main]');
                        if (!content || !content.tagName) {
                            // requires content element
                            console.error('Menu: must have a "content" element to listen for drag events on.');
                            return [2 /*return*/];
                        }
                        this.contentEl = content;
                        // add menu's content classes
                        content.classList.add('menu-content');
                        this.typeChanged(this.type, undefined);
                        this.sideChanged();
                        // register this menu with the app's menu controller
                        menuCtrl._register(this);
                        _b = this;
                        return [4 /*yield*/, Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./index-2c4a5477.js */ "./node_modules/@ionic/core/dist/esm-es5/index-2c4a5477.js"))];
                    case 2:
                        _b.gesture = (_c.sent()).createGesture({
                            el: document,
                            gestureName: 'menu-swipe',
                            gesturePriority: 30,
                            threshold: 10,
                            canStart: function (ev) { return _this.canStart(ev); },
                            onWillStart: function () { return _this.onWillStart(); },
                            onStart: function () { return _this.onStart(); },
                            onMove: function (ev) { return _this.onMove(ev); },
                            onEnd: function (ev) { return _this.onEnd(ev); },
                        });
                        this.updateState();
                        return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.componentDidLoad = function () {
        this.ionMenuChange.emit({ disabled: this.disabled, open: this._isOpen });
    };
    class_1.prototype.componentDidUnload = function () {
        this.blocker.destroy();
        this.menuCtrl._unregister(this);
        if (this.animation) {
            this.animation.destroy();
        }
        if (this.gesture) {
            this.gesture.destroy();
            this.gesture = undefined;
        }
        this.animation = undefined;
        this.contentEl = this.backdropEl = this.menuInnerEl = undefined;
    };
    class_1.prototype.onSplitPaneChanged = function (ev) {
        this.isPaneVisible = ev.detail.isPane(this.el);
        this.updateState();
    };
    class_1.prototype.onBackdropClick = function (ev) {
        if (this._isOpen && this.lastOnEnd < ev.timeStamp - 100) {
            var shouldClose = (ev.composedPath)
                ? !ev.composedPath().includes(this.menuInnerEl)
                : false;
            if (shouldClose) {
                ev.preventDefault();
                ev.stopPropagation();
                this.close();
            }
        }
    };
    /**
     * Returns `true` is the menu is open.
     */
    class_1.prototype.isOpen = function () {
        return Promise.resolve(this._isOpen);
    };
    /**
     * Returns `true` is the menu is active.
     *
     * A menu is active when it can be opened or closed, meaning it's enabled
     * and it's not part of a `ion-split-pane`.
     */
    class_1.prototype.isActive = function () {
        return Promise.resolve(this._isActive());
    };
    /**
     * Opens the menu. If the menu is already open or it can't be opened,
     * it returns `false`.
     */
    class_1.prototype.open = function (animated) {
        if (animated === void 0) { animated = true; }
        return this.setOpen(true, animated);
    };
    /**
     * Closes the menu. If the menu is already closed or it can't be closed,
     * it returns `false`.
     */
    class_1.prototype.close = function (animated) {
        if (animated === void 0) { animated = true; }
        return this.setOpen(false, animated);
    };
    /**
     * Toggles the menu. If the menu is already open, it will try to close, otherwise it will try to open it.
     * If the operation can't be completed successfully, it returns `false`.
     */
    class_1.prototype.toggle = function (animated) {
        if (animated === void 0) { animated = true; }
        return this.setOpen(!this._isOpen, animated);
    };
    /**
     * Opens or closes the button.
     * If the operation can't be completed successfully, it returns `false`.
     */
    class_1.prototype.setOpen = function (shouldOpen, animated) {
        if (animated === void 0) { animated = true; }
        return this.menuCtrl._setOpen(this, shouldOpen, animated);
    };
    class_1.prototype._setOpen = function (shouldOpen, animated) {
        if (animated === void 0) { animated = true; }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // If the menu is disabled or it is currently being animated, let's do nothing
                        if (!this._isActive() || this.isAnimating || shouldOpen === this._isOpen) {
                            return [2 /*return*/, false];
                        }
                        this.beforeAnimation(shouldOpen);
                        return [4 /*yield*/, this.loadAnimation()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.startAnimation(shouldOpen, animated)];
                    case 2:
                        _a.sent();
                        this.afterAnimation(shouldOpen);
                        return [2 /*return*/, true];
                }
            });
        });
    };
    class_1.prototype.loadAnimation = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var width, _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        width = this.menuInnerEl.offsetWidth;
                        if (width === this.width && this.animation !== undefined) {
                            return [2 /*return*/];
                        }
                        this.width = width;
                        // Destroy existing animation
                        if (this.animation) {
                            this.animation.destroy();
                            this.animation = undefined;
                        }
                        // Create new animation
                        _a = this;
                        return [4 /*yield*/, this.menuCtrl._createAnimation(this.type, this)];
                    case 1:
                        // Create new animation
                        _a.animation = _b.sent();
                        this.animation.fill('both');
                        return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.startAnimation = function (shouldOpen, animated) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var isReversed, ani;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        isReversed = !shouldOpen;
                        ani = this.animation
                            .direction((isReversed) ? 'reverse' : 'normal')
                            .easing((isReversed) ? 'cubic-bezier(0.4, 0.0, 0.6, 1)' : 'cubic-bezier(0.0, 0.0, 0.2, 1)');
                        if (!animated) return [3 /*break*/, 2];
                        return [4 /*yield*/, ani.playAsync()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        ani.playSync();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype._isActive = function () {
        return !this.disabled && !this.isPaneVisible;
    };
    class_1.prototype.canSwipe = function () {
        return this.swipeGesture && !this.isAnimating && this._isActive();
    };
    class_1.prototype.canStart = function (detail) {
        if (!this.canSwipe()) {
            return false;
        }
        if (this._isOpen) {
            return true;
            // TODO error
        }
        else if (this.menuCtrl.getOpenSync()) {
            return false;
        }
        return checkEdgeSide(window, detail.currentX, this.isEndSide, this.maxEdgeStart);
    };
    class_1.prototype.onWillStart = function () {
        this.beforeAnimation(!this._isOpen);
        return this.loadAnimation();
    };
    class_1.prototype.onStart = function () {
        if (!this.isAnimating || !this.animation) {
            Object(_helpers_c90aaa66_js__WEBPACK_IMPORTED_MODULE_6__["b"])(false, 'isAnimating has to be true');
            return;
        }
        // the cloned animation should not use an easing curve during seek
        this.animation
            .direction((this._isOpen) ? 'reverse' : 'normal')
            .progressStart(true);
    };
    class_1.prototype.onMove = function (detail) {
        if (!this.isAnimating || !this.animation) {
            Object(_helpers_c90aaa66_js__WEBPACK_IMPORTED_MODULE_6__["b"])(false, 'isAnimating has to be true');
            return;
        }
        var delta = computeDelta(detail.deltaX, this._isOpen, this.isEndSide);
        var stepValue = delta / this.width;
        this.animation
            .progressStep(stepValue);
    };
    class_1.prototype.onEnd = function (detail) {
        var _this = this;
        if (!this.isAnimating || !this.animation) {
            Object(_helpers_c90aaa66_js__WEBPACK_IMPORTED_MODULE_6__["b"])(false, 'isAnimating has to be true');
            return;
        }
        var isOpen = this._isOpen;
        var isEndSide = this.isEndSide;
        var delta = computeDelta(detail.deltaX, isOpen, isEndSide);
        var width = this.width;
        var stepValue = delta / width;
        var velocity = detail.velocityX;
        var z = width / 2.0;
        var shouldCompleteRight = velocity >= 0 && (velocity > 0.2 || detail.deltaX > z);
        var shouldCompleteLeft = velocity <= 0 && (velocity < -0.2 || detail.deltaX < -z);
        var shouldComplete = isOpen
            ? isEndSide ? shouldCompleteRight : shouldCompleteLeft
            : isEndSide ? shouldCompleteLeft : shouldCompleteRight;
        var shouldOpen = !isOpen && shouldComplete;
        if (isOpen && !shouldComplete) {
            shouldOpen = true;
        }
        this.lastOnEnd = detail.timeStamp;
        // Account for rounding errors in JS
        var newStepValue = (shouldComplete) ? 0.001 : -0.001;
        /**
         * TODO: stepValue can sometimes return a negative
         * value, but you can't have a negative time value
         * for the cubic bezier curve (at least with web animations)
         * Not sure if the negative step value is an error or not
         */
        var adjustedStepValue = (stepValue <= 0) ? 0.01 : stepValue;
        /**
         * Animation will be reversed here, so need to
         * reverse the easing curve as well
         *
         * Additionally, we need to account for the time relative
         * to the new easing curve, as `stepValue` is going to be given
         * in terms of a linear curve.
         */
        newStepValue += Object(_cubic_bezier_90d0df24_js__WEBPACK_IMPORTED_MODULE_7__["g"])(new _cubic_bezier_90d0df24_js__WEBPACK_IMPORTED_MODULE_7__["P"](0, 0), new _cubic_bezier_90d0df24_js__WEBPACK_IMPORTED_MODULE_7__["P"](0.4, 0), new _cubic_bezier_90d0df24_js__WEBPACK_IMPORTED_MODULE_7__["P"](0.6, 1), new _cubic_bezier_90d0df24_js__WEBPACK_IMPORTED_MODULE_7__["P"](1, 1), adjustedStepValue);
        this.animation
            .easing('cubic-bezier(0.4, 0.0, 0.6, 1)')
            .onFinish(function () { return _this.afterAnimation(shouldOpen); }, {
            oneTimeCallback: true
        })
            .progressEnd(shouldComplete, newStepValue, 300);
    };
    class_1.prototype.beforeAnimation = function (shouldOpen) {
        Object(_helpers_c90aaa66_js__WEBPACK_IMPORTED_MODULE_6__["b"])(!this.isAnimating, '_before() should not be called while animating');
        // this places the menu into the correct location before it animates in
        // this css class doesn't actually kick off any animations
        this.el.classList.add(SHOW_MENU);
        if (this.backdropEl) {
            this.backdropEl.classList.add(SHOW_BACKDROP);
        }
        this.blocker.block();
        this.isAnimating = true;
        if (shouldOpen) {
            this.ionWillOpen.emit();
        }
        else {
            this.ionWillClose.emit();
        }
    };
    class_1.prototype.afterAnimation = function (isOpen) {
        Object(_helpers_c90aaa66_js__WEBPACK_IMPORTED_MODULE_6__["b"])(this.isAnimating, '_before() should be called while animating');
        // keep opening/closing the menu disabled for a touch more yet
        // only add listeners/css if it's enabled and isOpen
        // and only remove listeners/css if it's not open
        // emit opened/closed events
        this._isOpen = isOpen;
        this.isAnimating = false;
        if (!this._isOpen) {
            this.blocker.unblock();
        }
        if (isOpen) {
            // add css class
            if (this.contentEl) {
                this.contentEl.classList.add(MENU_CONTENT_OPEN);
            }
            // emit open event
            this.ionDidOpen.emit();
        }
        else {
            // remove css classes
            this.el.classList.remove(SHOW_MENU);
            if (this.contentEl) {
                this.contentEl.classList.remove(MENU_CONTENT_OPEN);
            }
            if (this.backdropEl) {
                this.backdropEl.classList.remove(SHOW_BACKDROP);
            }
            // emit close event
            this.ionDidClose.emit();
        }
    };
    class_1.prototype.updateState = function () {
        var isActive = this._isActive();
        if (this.gesture) {
            this.gesture.setDisabled(!isActive || !this.swipeGesture);
        }
        // Close menu immediately
        if (!isActive && this._isOpen) {
            // close if this menu is open, and should not be enabled
            this.forceClosing();
        }
        if (!this.disabled && this.menuCtrl) {
            this.menuCtrl._setActiveMenu(this);
        }
        Object(_helpers_c90aaa66_js__WEBPACK_IMPORTED_MODULE_6__["b"])(!this.isAnimating, 'can not be animating');
    };
    class_1.prototype.forceClosing = function () {
        Object(_helpers_c90aaa66_js__WEBPACK_IMPORTED_MODULE_6__["b"])(this._isOpen, 'menu cannot be closed');
        this.isAnimating = true;
        var ani = this.animation.direction('reverse');
        ani.playSync();
        this.afterAnimation(false);
    };
    class_1.prototype.render = function () {
        var _a;
        var _this = this;
        var _b = this, isEndSide = _b.isEndSide, type = _b.type, disabled = _b.disabled, mode = _b.mode, isPaneVisible = _b.isPaneVisible;
        return (Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["H"], { role: "navigation", class: (_a = {},
                _a[mode] = true,
                _a["menu-type-" + type] = true,
                _a['menu-enabled'] = !disabled,
                _a['menu-side-end'] = isEndSide,
                _a['menu-side-start'] = !isEndSide,
                _a['menu-pane-visible'] = isPaneVisible,
                _a) }, Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "menu-inner", ref: function (el) { return _this.menuInnerEl = el; } }, Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot", null)), Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["h"])("ion-backdrop", { ref: function (el) { return _this.backdropEl = el; }, class: "menu-backdrop", tappable: false, stopPropagation: false })));
    };
    Object.defineProperty(class_1.prototype, "el", {
        get: function () { return Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "watchers", {
        get: function () {
            return {
                "type": ["typeChanged"],
                "disabled": ["disabledChanged"],
                "side": ["sideChanged"],
                "swipeGesture": ["swipeGestureChanged"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "style", {
        get: function () { return ":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color,#fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{left:0;right:auto;top:0;bottom:0;-webkit-transform:translate3d(-9999px,0,0);transform:translate3d(-9999px,0,0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}:host-context([dir=rtl]) .menu-inner,[dir=rtl] .menu-inner{left:unset;right:unset;left:auto;right:0;-webkit-transform:translate3d(calc(-1 * -9999px),0,0);transform:translate3d(calc(-1 * -9999px),0,0)}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;right:auto;left:0}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;right:0;left:auto}ion-backdrop{display:none;opacity:.01;z-index:-1}\@media (max-width:340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translateZ(0);transform:translateZ(0)}:host(.menu-type-overlay){z-index:80}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none!important;transform:none!important;-webkit-box-shadow:none!important;box-shadow:none!important}:host(.menu-pane-visible) ion-backdrop{display:hidden!important}:host(.menu-type-push){z-index:80}:host(.menu-type-push) .show-backdrop{display:block}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
var computeDelta = function (deltaX, isOpen, isEndSide) {
    return Math.max(0, isOpen !== isEndSide ? -deltaX : deltaX);
};
var checkEdgeSide = function (win, posX, isEndSide, maxEdgeStart) {
    if (isEndSide) {
        return posX >= win.innerWidth - maxEdgeStart;
    }
    else {
        return posX <= maxEdgeStart;
    }
};
var SHOW_MENU = 'show-menu';
var SHOW_BACKDROP = 'show-backdrop';
var MENU_CONTENT_OPEN = 'menu-content-open';
// Get the menu controller element
var getMenuController = function (doc) {
    var menuControllerElement = doc.querySelector('ion-menu-controller');
    if (!menuControllerElement) {
        return Promise.resolve(undefined);
    }
    return menuControllerElement.componentOnReady();
};
// Given a menu, toggle it
var toggleMenu = function (menu) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
    var menuCtrl, menuEl;
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, getMenuController(document)];
            case 1:
                menuCtrl = _a.sent();
                if (!menuCtrl) return [3 /*break*/, 3];
                return [4 /*yield*/, menuCtrl.get(menu)];
            case 2:
                menuEl = _a.sent();
                if (menuEl) {
                    menuCtrl.toggle(menu);
                }
                _a.label = 3;
            case 3: return [2 /*return*/];
        }
    });
}); };
// Given a menu, return whether or not the menu toggle should be visible
var updateVisibility = function (menu) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
    var menuCtrl, menuEl, _a;
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, getMenuController(document)];
            case 1:
                menuCtrl = _b.sent();
                if (!menuCtrl) return [3 /*break*/, 5];
                return [4 /*yield*/, menuCtrl.get(menu)];
            case 2:
                menuEl = _b.sent();
                _a = menuEl;
                if (!_a) return [3 /*break*/, 4];
                return [4 /*yield*/, menuEl.isActive()];
            case 3:
                _a = (_b.sent());
                _b.label = 4;
            case 4:
                if (_a) {
                    return [2 /*return*/, true];
                }
                _b.label = 5;
            case 5: return [2 /*return*/, false];
        }
    });
}); };
var MenuButton = /** @class */ (function () {
    function class_2(hostRef) {
        var _this = this;
        Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
        this.visible = false;
        /**
         * If `true`, the user cannot interact with the menu button.
         */
        this.disabled = false;
        /**
         * Automatically hides the menu button when the corresponding menu is not active
         */
        this.autoHide = true;
        /**
         * The type of the button.
         */
        this.type = 'button';
        this.setVisibility = function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, updateVisibility(this.menu)];
                    case 1:
                        _a.visible = _b.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        this.onClick = function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, toggleMenu(this.menu)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
    }
    class_2.prototype.componentDidLoad = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.setVisibility()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    class_2.prototype.visibilityChanged = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.setVisibility()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    class_2.prototype.render = function () {
        var _a;
        var _b = this, color = _b.color, disabled = _b.disabled;
        var mode = Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this);
        var menuIcon = _config_bb99b659_js__WEBPACK_IMPORTED_MODULE_2__["b"].get('menuIcon', 'menu');
        var hidden = this.autoHide && !this.visible;
        var attrs = {
            type: this.type
        };
        return (Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["H"], { onClick: this.onClick, "aria-disabled": disabled ? 'true' : null, "aria-hidden": hidden ? 'true' : null, class: Object.assign((_a = {}, _a[mode] = true, _a), Object(_theme_353a032e_js__WEBPACK_IMPORTED_MODULE_5__["c"])(color), { 'button': true, 'menu-button-hidden': hidden, 'menu-button-disabled': disabled, 'ion-activatable': true, 'ion-focusable': true }) }, Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["h"])("button", Object.assign({}, attrs, { disabled: this.disabled, class: "button-native" }), Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot", null, Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["h"])("ion-icon", { icon: menuIcon, mode: mode, lazy: false })), mode === 'md' && Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["h"])("ion-ripple-effect", { type: "unbounded" }))));
    };
    Object.defineProperty(class_2, "style", {
        get: function () { return ":host{--background:transparent;--color-focused:var(--color);--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:.5;pointer-events:none}\@media (any-hover:hover){:host(:hover) .button-native{background:var(--background-hover);color:var(--color-hover)}}:host(.ion-focused) .button-native{background:var(--background-focused);color:var(--color-focused)}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host-context(ion-toolbar:not(.ion-color)){color:var(--ion-toolbar-color,var(--color))}:host{--background-focused:rgba(var(--ion-color-primary-rgb,56,128,255),0.1);--border-radius:4px;--color:var(--ion-color-primary,#3880ff);--padding-start:5px;--padding-end:5px;height:32px;font-size:31px}:host(.activated){opacity:.4}\@media (any-hover:hover){:host(:hover){opacity:.6}}:host(.ion-color.ion-focused) .button-native{background:rgba(var(--ion-color-base-rgb),.1)}"; },
        enumerable: true,
        configurable: true
    });
    return class_2;
}());
/**
 * baseAnimation
 * Base class which is extended by the various types. Each
 * type will provide their own animations for open and close
 * and registers itself with Menu.
 */
var baseAnimation = function () {
    // https://material.io/guidelines/motion/movement.html#movement-movement-in-out-of-screen-bounds
    // https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves
    // "Apply the sharp curve to items temporarily leaving the screen that may return
    // from the same exit point. When they return, use the deceleration curve. On mobile,
    // this transition typically occurs over 300ms" -- MD Motion Guide
    return Object(_animation_5559213c_js__WEBPACK_IMPORTED_MODULE_3__["c"])()
        .easing('cubic-bezier(0.0, 0.0, 0.2, 1)') // Deceleration curve (Entering the screen)
        .duration(300);
};
/**
 * Menu Overlay Type
 * The menu slides over the content. The content
 * itself, which is under the menu, does not move.
 */
var menuOverlayAnimation = function (menu) {
    var closedX;
    var openedX;
    var BOX_SHADOW_WIDTH = 8;
    var width = menu.width + BOX_SHADOW_WIDTH;
    var menuAnimation = Object(_animation_5559213c_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    var backdropAnimation = Object(_animation_5559213c_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    if (menu.isEndSide) {
        // right side
        closedX = width + 'px';
        openedX = '0px';
    }
    else {
        // left side
        closedX = -width + 'px';
        openedX = '0px';
    }
    menuAnimation
        .addElement(menu.menuInnerEl)
        .fromTo('transform', "translateX(" + closedX + ")", "translateX(" + openedX + ")");
    backdropAnimation
        .addElement(menu.backdropEl)
        .fromTo('opacity', 0.01, 0.32);
    return baseAnimation().addAnimation([menuAnimation, backdropAnimation]);
};
/**
 * Menu Push Type
 * The content slides over to reveal the menu underneath.
 * The menu itself also slides over to reveal its bad self.
 */
var menuPushAnimation = function (menu) {
    var contentOpenedX;
    var menuClosedX;
    var width = menu.width;
    if (menu.isEndSide) {
        contentOpenedX = -width + 'px';
        menuClosedX = width + 'px';
    }
    else {
        contentOpenedX = width + 'px';
        menuClosedX = -width + 'px';
    }
    var menuAnimation = Object(_animation_5559213c_js__WEBPACK_IMPORTED_MODULE_3__["c"])()
        .addElement(menu.menuInnerEl)
        .fromTo('transform', "translateX(" + menuClosedX + ")", 'translateX(0px)');
    var contentAnimation = Object(_animation_5559213c_js__WEBPACK_IMPORTED_MODULE_3__["c"])()
        .addElement(menu.contentEl)
        .fromTo('transform', 'translateX(0px)', "translateX(" + contentOpenedX + ")");
    var backdropAnimation = Object(_animation_5559213c_js__WEBPACK_IMPORTED_MODULE_3__["c"])()
        .addElement(menu.backdropEl)
        .fromTo('opacity', 0.01, 0.32);
    return baseAnimation().addAnimation([menuAnimation, backdropAnimation, contentAnimation]);
};
/**
 * Menu Reveal Type
 * The content slides over to reveal the menu underneath.
 * The menu itself, which is under the content, does not move.
 */
var menuRevealAnimation = function (menu) {
    var openedX = (menu.width * (menu.isEndSide ? -1 : 1)) + 'px';
    var contentOpen = Object(_animation_5559213c_js__WEBPACK_IMPORTED_MODULE_3__["c"])()
        .addElement(menu.contentEl)
        .fromTo('transform', 'translateX(0px)', "translateX(" + openedX + ")");
    return baseAnimation().addAnimation(contentOpen);
};
var MenuController = /** @class */ (function () {
    function class_3(hostRef) {
        Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
        this.menus = [];
        this.menuAnimations = new Map();
        this.registerAnimation('reveal', menuRevealAnimation);
        this.registerAnimation('push', menuPushAnimation);
        this.registerAnimation('overlay', menuOverlayAnimation);
    }
    /**
     * Open the menu. If a menu is not provided then it will open the first
     * menu found. If the specified menu is `start` or `end`, then it will open
     * the enabled menu on that side. Otherwise, it will try to find the menu
     * using the menu's `id` property. If a menu is not found then it will
     * return `false`.
     *
     * @param menu The menuId or side of the menu to open.
     */
    class_3.prototype.open = function (menu) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var menuEl;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.get(menu)];
                    case 1:
                        menuEl = _a.sent();
                        if (menuEl) {
                            return [2 /*return*/, menuEl.open()];
                        }
                        return [2 /*return*/, false];
                }
            });
        });
    };
    /**
     * Close the menu. If a menu is specified, it will close that menu.
     * If no menu is specified, then it will close any menu that is open.
     * If it does not find any open menus, it will return `false`.
     *
     * @param menu The menuId or side of the menu to close.
     */
    class_3.prototype.close = function (menu) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var menuEl;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (menu !== undefined ? this.get(menu) : this.getOpen())];
                    case 1:
                        menuEl = _a.sent();
                        if (menuEl !== undefined) {
                            return [2 /*return*/, menuEl.close()];
                        }
                        return [2 /*return*/, false];
                }
            });
        });
    };
    /**
     * Toggle the menu open or closed. If the menu is already open, it will try to
     * close the menu, otherwise it will try to open it. Returns `false` if
     * a menu is not found.
     *
     * @param menu The menuId or side of the menu to toggle.
     */
    class_3.prototype.toggle = function (menu) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var menuEl;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.get(menu)];
                    case 1:
                        menuEl = _a.sent();
                        if (menuEl) {
                            return [2 /*return*/, menuEl.toggle()];
                        }
                        return [2 /*return*/, false];
                }
            });
        });
    };
    /**
     * Enable or disable a menu. Disabling a menu will not allow gestures
     * for that menu or any calls to open it. This is useful when there are
     * multiple menus on the same side and only one of them should be allowed
     * to open. Enabling a menu will automatically disable all other menus
     * on that side.
     *
     * @param enable If `true`, the menu should be enabled.
     * @param menu The menuId or side of the menu to enable or disable.
     */
    class_3.prototype.enable = function (enable, menu) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var menuEl;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.get(menu)];
                    case 1:
                        menuEl = _a.sent();
                        if (menuEl) {
                            menuEl.disabled = !enable;
                        }
                        return [2 /*return*/, menuEl];
                }
            });
        });
    };
    /**
     * Enable or disable the ability to swipe open the menu.
     *
     * @param enable If `true`, the menu swipe gesture should be enabled.
     * @param menu The menuId or side of the menu to enable or disable the swipe gesture on.
     */
    class_3.prototype.swipeGesture = function (enable, menu) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var menuEl;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.get(menu)];
                    case 1:
                        menuEl = _a.sent();
                        if (menuEl) {
                            menuEl.swipeGesture = enable;
                        }
                        return [2 /*return*/, menuEl];
                }
            });
        });
    };
    /**
     * Get whether or not the menu is open. Returns `true` if the specified
     * menu is open. If a menu is not specified, it will return `true` if
     * any menu is currently open.
     *
     * @param menu The menuId or side of the menu that is being checked.
     */
    class_3.prototype.isOpen = function (menu) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var menuEl, menuEl;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(menu != null)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.get(menu)];
                    case 1:
                        menuEl = _a.sent();
                        return [2 /*return*/, (menuEl !== undefined && menuEl.isOpen())];
                    case 2: return [4 /*yield*/, this.getOpen()];
                    case 3:
                        menuEl = _a.sent();
                        return [2 /*return*/, menuEl !== undefined];
                }
            });
        });
    };
    /**
     * Get whether or not the menu is enabled. Returns `true` if the
     * specified menu is enabled. Returns `false` if a menu is disabled
     * or not found.
     *
     * @param menu The menuId or side of the menu that is being checked.
     */
    class_3.prototype.isEnabled = function (menu) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var menuEl;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.get(menu)];
                    case 1:
                        menuEl = _a.sent();
                        if (menuEl) {
                            return [2 /*return*/, !menuEl.disabled];
                        }
                        return [2 /*return*/, false];
                }
            });
        });
    };
    /**
     * Get a menu instance. If a menu is not provided then it will return the first
     * menu found. If the specified menu is `start` or `end`, then it will return the
     * enabled menu on that side. Otherwise, it will try to find the menu using the menu's
     * `id` property. If a menu is not found then it will return `null`.
     *
     * @param menu The menuId or side of the menu.
     */
    class_3.prototype.get = function (menu) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var menuRef, menuEl;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.waitUntilReady()];
                    case 1:
                        _a.sent();
                        if (menu === 'start' || menu === 'end') {
                            menuRef = this.find(function (m) { return m.side === menu && !m.disabled; });
                            if (menuRef) {
                                return [2 /*return*/, menuRef];
                            }
                            // didn't find a menu side that is enabled
                            // so try to get the first menu side found
                            return [2 /*return*/, this.find(function (m) { return m.side === menu; })];
                        }
                        else if (menu != null) {
                            // the menuId was not left or right
                            // so try to get the menu by its "id"
                            return [2 /*return*/, this.find(function (m) { return m.menuId === menu; })];
                        }
                        menuEl = this.find(function (m) { return !m.disabled; });
                        if (menuEl) {
                            return [2 /*return*/, menuEl];
                        }
                        // get the first menu in the array, if one exists
                        return [2 /*return*/, this.menus.length > 0 ? this.menus[0].el : undefined];
                }
            });
        });
    };
    /**
     * Get the instance of the opened menu. Returns `null` if a menu is not found.
     */
    class_3.prototype.getOpen = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.waitUntilReady()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.getOpenSync()];
                }
            });
        });
    };
    /**
     * Get all menu instances.
     */
    class_3.prototype.getMenus = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.waitUntilReady()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.getMenusSync()];
                }
            });
        });
    };
    /**
     * Get whether or not a menu is animating. Returns `true` if any
     * menu is currently animating.
     */
    class_3.prototype.isAnimating = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.waitUntilReady()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.isAnimatingSync()];
                }
            });
        });
    };
    /**
     * Registers a new animation that can be used with any `ion-menu` by
     * passing the name of the animation in its `type` property.
     *
     * @param name The name of the animation to register.
     * @param animation The animation function to register.
     */
    class_3.prototype.registerAnimation = function (name, animation) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.menuAnimations.set(name, animation);
                return [2 /*return*/];
            });
        });
    };
    /**
     * @internal
     */
    class_3.prototype._getInstance = function () {
        return Promise.resolve(this);
    };
    class_3.prototype._register = function (menu) {
        var menus = this.menus;
        if (menus.indexOf(menu) < 0) {
            if (!menu.disabled) {
                this._setActiveMenu(menu);
            }
            menus.push(menu);
        }
    };
    class_3.prototype._unregister = function (menu) {
        var index = this.menus.indexOf(menu);
        if (index > -1) {
            this.menus.splice(index, 1);
        }
    };
    class_3.prototype._setActiveMenu = function (menu) {
        // if this menu should be enabled
        // then find all the other menus on this same side
        // and automatically disable other same side menus
        var side = menu.side;
        this.menus
            .filter(function (m) { return m.side === side && m !== menu; })
            .forEach(function (m) { return m.disabled = true; });
    };
    class_3.prototype._setOpen = function (menu, shouldOpen, animated) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var openedMenu;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.isAnimatingSync()) {
                            return [2 /*return*/, false];
                        }
                        if (!shouldOpen) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.getOpen()];
                    case 1:
                        openedMenu = _a.sent();
                        if (!(openedMenu && menu.el !== openedMenu)) return [3 /*break*/, 3];
                        return [4 /*yield*/, openedMenu.setOpen(false, false)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/, menu._setOpen(shouldOpen, animated)];
                }
            });
        });
    };
    class_3.prototype._createAnimation = function (type, menuCmp) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var animationBuilder, animation;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                animationBuilder = this.menuAnimations.get(type);
                if (!animationBuilder) {
                    throw new Error('animation not registered');
                }
                animation = animationBuilder(menuCmp);
                if (!_config_bb99b659_js__WEBPACK_IMPORTED_MODULE_2__["b"].getBoolean('animated', true)) {
                    animation.duration(0);
                }
                return [2 /*return*/, animation];
            });
        });
    };
    class_3.prototype.getOpenSync = function () {
        return this.find(function (m) { return m._isOpen; });
    };
    class_3.prototype.getMenusSync = function () {
        return this.menus.map(function (menu) { return menu.el; });
    };
    class_3.prototype.isAnimatingSync = function () {
        return this.menus.some(function (menu) { return menu.isAnimating; });
    };
    class_3.prototype.find = function (predicate) {
        var instance = this.menus.find(predicate);
        if (instance !== undefined) {
            return instance.el;
        }
        return undefined;
    };
    class_3.prototype.waitUntilReady = function () {
        return Promise.all(Array.from(document.querySelectorAll('ion-menu'))
            .map(function (menu) { return menu.componentOnReady(); }));
    };
    Object.defineProperty(class_3, "style", {
        get: function () { return ".menu-content{-webkit-transform:translateZ(0);transform:translateZ(0)}.menu-content-open{cursor:pointer;-ms-touch-action:manipulation;touch-action:manipulation;pointer-events:none}.ios .menu-content-reveal{-webkit-box-shadow:-8px 0 42px rgba(0,0,0,.08);box-shadow:-8px 0 42px rgba(0,0,0,.08)}[dir=rtl].ios .menu-content-reveal{-webkit-box-shadow:8px 0 42px rgba(0,0,0,.08);box-shadow:8px 0 42px rgba(0,0,0,.08)}.md .menu-content-push,.md .menu-content-reveal{-webkit-box-shadow:0 2px 22px 0 rgba(0,0,0,.09),4px 0 16px 0 rgba(0,0,0,.18);box-shadow:0 2px 22px 0 rgba(0,0,0,.09),4px 0 16px 0 rgba(0,0,0,.18)}"; },
        enumerable: true,
        configurable: true
    });
    return class_3;
}());
var MenuToggle = /** @class */ (function () {
    function class_4(hostRef) {
        var _this = this;
        Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
        this.visible = false;
        /**
         * Automatically hides the content when the corresponding menu is not active.
         *
         * By default, it's `true`. Change it to `false` in order to
         * keep `ion-menu-toggle` always visible regardless the state of the menu.
         */
        this.autoHide = true;
        this.setVisibility = function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, updateVisibility(this.menu)];
                    case 1:
                        _a.visible = _b.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        this.onClick = function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, toggleMenu(this.menu)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
    }
    class_4.prototype.componentDidLoad = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.setVisibility()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    class_4.prototype.visibilityChanged = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.setVisibility()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    class_4.prototype.render = function () {
        var _a;
        var mode = Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this);
        var hidden = this.autoHide && !this.visible;
        return (Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["H"], { onClick: this.onClick, "aria-hidden": hidden ? 'true' : null, class: (_a = {},
                _a[mode] = true,
                _a['menu-toggle-hidden'] = hidden,
                _a) }, Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot", null)));
    };
    Object.defineProperty(class_4, "style", {
        get: function () { return ":host(.menu-toggle-hidden){display:none}"; },
        enumerable: true,
        configurable: true
    });
    return class_4;
}());



/***/ })

}]);
//# sourceMappingURL=39-es5.js.map