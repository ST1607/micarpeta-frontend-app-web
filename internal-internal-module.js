(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["internal-internal-module"],{

/***/ "./src/app/internal/internal.guard.ts":
/*!********************************************!*\
  !*** ./src/app/internal/internal.guard.ts ***!
  \********************************************/
/*! exports provided: InternalGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InternalGuard", function() { return InternalGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/user/user.service */ "./src/providers/user/user.service.ts");




var InternalGuard = /** @class */ (function () {
    function InternalGuard(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    InternalGuard.prototype.canActivate = function (next, state) {
        if (this.userService.getToken()) {
            return true;
        }
        this.router.navigate(['external/login']);
        return false;
    };
    InternalGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], InternalGuard);
    return InternalGuard;
}());



/***/ }),

/***/ "./src/app/internal/internal.module.ts":
/*!*********************************************!*\
  !*** ./src/app/internal/internal.module.ts ***!
  \*********************************************/
/*! exports provided: InternalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InternalPageModule", function() { return InternalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _internal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./internal.page */ "./src/app/internal/internal.page.ts");
/* harmony import */ var _internal_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./internal.guard */ "./src/app/internal/internal.guard.ts");
/* harmony import */ var _components_alert_modal_alert_modal_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/alert-modal/alert-modal.module */ "./src/app/components/alert-modal/alert-modal.module.ts");
/* harmony import */ var _components_loading_spinner_loading_spinner_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/loading-spinner/loading-spinner.module */ "./src/app/components/loading-spinner/loading-spinner.module.ts");









var routes = [
    {
        path: '', component: _internal_page__WEBPACK_IMPORTED_MODULE_5__["InternalPage"], canActivate: [_internal_guard__WEBPACK_IMPORTED_MODULE_6__["InternalGuard"]],
        children: [
            { path: 'home', loadChildren: '../home/home.module#HomePageModule' },
            { path: 'settings', loadChildren: '../settings/settings.module#SettingsPageModule' },
            { path: '', redirectTo: 'home', pathMatch: 'full' }
        ]
    }
];
var InternalPageModule = /** @class */ (function () {
    function InternalPageModule() {
    }
    InternalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _components_alert_modal_alert_modal_module__WEBPACK_IMPORTED_MODULE_7__["AlertModalModule"],
                _components_loading_spinner_loading_spinner_module__WEBPACK_IMPORTED_MODULE_8__["LoadingSpinnerModule"]
            ],
            declarations: [_internal_page__WEBPACK_IMPORTED_MODULE_5__["InternalPage"]]
        })
    ], InternalPageModule);
    return InternalPageModule;
}());



/***/ }),

/***/ "./src/app/internal/internal.page.html":
/*!*********************************************!*\
  !*** ./src/app/internal/internal.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"min-h-screen w-full relative font-family-karla\" style=\"background: #edf2f7;\">\n\n    <app-loading-spinner *ngIf=\"showLoading\" [fullScreen]=\"true\"></app-loading-spinner>\n    <app-alert-modal [config]=\"alertConfig\" (result)=\"logoutAlertCallback($event)\"></app-alert-modal>\n\n    <nav class=\"flex items-center justify-between flex-wrap bg-blue-700 p-8\">\n        <div class=\"flex items-center flex-shrink-0 text-white mr-6\">\n            <svg class=\"fill-current h-8 w-8 mr-2\" width=\"54\" height=\"54\" viewBox=\"0 0 54 54\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z\"/></svg>\n            <span class=\"font-semibold text-xl tracking-tight mr-8\">OPERADOR MI CARPETA</span>\n        </div>\n        <div class=\"flex-grow flex items-center w-auto\">\n            <div class=\"text-sm flex-grow\">\n            <span [routerLink]=\"['home']\" class=\"mt-0 inline-block hover:text-white hover:underline mr-4 outline-none cursor-pointer\" [ngClass]=\"[router.url === '/internal/home' ? 'text-white underline' : 'text-blue-200']\">\n                DOCUMENTOS\n            </span>\n                <span [routerLink]=\"['settings']\"  class=\"mt-0 inline-block hover:text-white hover:underline outline-none cursor-pointer\" [ngClass]=\"[router.url === '/internal/settings' ? 'text-white underline' : 'text-blue-200']\">\n                SOLICITUDES\n            </span>\n            </div>\n            <div>\n            <span (click)=\"confirmLogout()\" class=\"inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-0\">\n                CERRAR SESIÓN\n            </span>\n            </div>\n        </div>\n    </nav>\n\n    <div class=\"p-6\">\n        <router-outlet ></router-outlet>\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/internal/internal.page.scss":
/*!*********************************************!*\
  !*** ./src/app/internal/internal.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludGVybmFsL2ludGVybmFsLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/internal/internal.page.ts":
/*!*******************************************!*\
  !*** ./src/app/internal/internal.page.ts ***!
  \*******************************************/
/*! exports provided: InternalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InternalPage", function() { return InternalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _providers_user_user_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/user/user.actions */ "./src/providers/user/user.actions.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");








var InternalPage = /** @class */ (function () {
    function InternalPage(router, actions$, store) {
        this.router = router;
        this.actions$ = actions$;
        this.store = store;
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    InternalPage.prototype.ngOnInit = function () {
        var _this = this;
        this.actions$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unsubscribe)).subscribe(function (action) {
            switch (action.type) {
                case _providers_user_user_actions__WEBPACK_IMPORTED_MODULE_4__["LOGOUT_SUCCESS"]:
                    _this.logoutSuccess();
                    break;
                case _providers_user_user_actions__WEBPACK_IMPORTED_MODULE_4__["LOGOUT_FAILURE"]:
                    _this.logoutFailure(action.payload);
                    break;
                default:
                    break;
            }
        });
    };
    InternalPage.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    InternalPage.prototype.confirmLogout = function () {
        this.alertConfig = {
            header: 'Confirmar',
            message: '¿Está seguro que desea salir?',
            confirm: 'ACEPTAR',
            cancel: 'CANCELAR'
        };
    };
    InternalPage.prototype.logoutAlertCallback = function (logout) {
        if (logout) {
            this.showLoading = true;
            this.store.dispatch(new _providers_user_user_actions__WEBPACK_IMPORTED_MODULE_4__["LogoutRequest"]());
        }
        this.alertConfig = null;
    };
    InternalPage.prototype.logoutSuccess = function () {
        this.router.navigate(['/external/login'], { replaceUrl: true });
        this.showLoading = false;
    };
    InternalPage.prototype.logoutFailure = function (response) {
        this.showLoading = false;
        this.alertConfig = {
            header: response.error.header,
            message: response.error.message,
            confirm: 'ACEPTAR'
        };
    };
    InternalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-internal',
            template: __webpack_require__(/*! ./internal.page.html */ "./src/app/internal/internal.page.html"),
            styles: [__webpack_require__(/*! ./internal.page.scss */ "./src/app/internal/internal.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["Actions"], _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"]])
    ], InternalPage);
    return InternalPage;
}());



/***/ })

}]);
//# sourceMappingURL=internal-internal-module.js.map