(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");
/* harmony import */ var _components_loading_spinner_loading_spinner_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/loading-spinner/loading-spinner.module */ "./src/app/components/loading-spinner/loading-spinner.module.ts");
/* harmony import */ var _components_alert_modal_alert_modal_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/alert-modal/alert-modal.module */ "./src/app/components/alert-modal/alert-modal.module.ts");








var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _components_alert_modal_alert_modal_module__WEBPACK_IMPORTED_MODULE_7__["AlertModalModule"],
                _components_loading_spinner_loading_spinner_module__WEBPACK_IMPORTED_MODULE_6__["LoadingSpinnerModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.html":
/*!***************************************!*\
  !*** ./src/app/login/login.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"h-screen w-screen flex items-center justify-center  relative \">\n\n    <app-loading-spinner *ngIf=\"showLoading\" [fullScreen]=\"true\"></app-loading-spinner>\n    <app-alert-modal [config]=\"alertConfig\" (result)=\"errorAlertCallback()\"></app-alert-modal>\n    \n    <div class=\"w-full flex flex-wrap font-family-karla\">\n\n        <!-- Login Section -->\n        <div class=\"w-full md:w-1/2 flex flex-col\">\n\n            <div class=\"flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24\">\n                \n                <a href=\"#\" class=\"bg-blue-700 text-white font-bold text-xl p-4\">OPERADOR MI CARPETA</a>\n            </div>\n\n            <div class=\"flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32\">\n                \n                <p class=\"text-center text-3xl\">Inicio de sesión</p>\n                <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\" class=\"flex flex-col pt-3 md:pt-8\">\n                    \n                    <div class=\"flex flex-col pt-4\">\n                        <label for=\"email\" class=\"text-lg\">Correo electrónico</label>\n                        <input placeholder=\"user@dominio.com\" required type=\"email\" formControlName=\"emailAddress\"\n                            data-cy=\"'emailAddressInput'\"\n                            class=\"shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline\">\n                        <div data-cy=\"emailWarning\"\n                            [class.invisible]=\"!(!loginForm.controls.emailAddress.valid && loginForm.controls.emailAddress.dirty && loginForm.controls.emailAddress.touched)\"\n                            class=\"px-1 text-red-400 pt-0 pb-0 text-sm\">\n                            Por favor introduzca una dirección de correo válida.\n                        </div>\n                    </div>\n\n                    <div class=\"flex flex-col pt-1\">\n                        <label for=\"password\" class=\"text-lg\">Contraseña</label>\n                        <input placeholder=\"Contraseña\" required type=\"password\" formControlName=\"password\" data-cy=\"passwordInput\"\n                            class=\"shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline\"/>\n\n                        <div data-cy=\"passwordWarning\"\n                            [class.invisible]=\"!(!loginForm.controls.password.valid && loginForm.controls.password.dirty && loginForm.controls.password.touched)\"\n                            class=\"px-1 text-red-400 pt-0 pb-0 text-sm\">\n                            Por favor introduzca una contraseña de al menos 8 caracteres.\n                        </div>\n                    </div>\n\n                    <button class=\"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 p-1 mt-6 rounded disabled:bg-blue-500 disabled:opacity-50\"\n                    data-cy=\"loginButton\"\n                    type=\"submit\" [disabled]=\"loginForm.invalid\">INGRESAR\n                    </button>\n                    \n                    <div class=\"text-center pt-2 pb-2\">\n                        <p>¿No posee una cuenta? &nbsp;&nbsp;<button class=\"bg-transparent text-blue-400 hover:text-blue-700 py-2 mt-6\"\n                        data-cy=\"signUpButton\" type=\"button\" [routerLink]=\"['/external/sign-up']\">REGÍSTRESE AQUÍ.\n                        </button></p>\n                    </div>\n\n                </form>\n            </div>\n\n        </div>\n\n        <!-- Image Section -->\n        <div class=\"w-1/2 shadow-2xl\">\n            <img class=\"object-cover w-full h-screen hidden md:block\" src=\"https://images.unsplash.com/photo-1557487307-8dc8ec048eb8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80\">\n        </div>\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _providers_user_user_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/user/user.actions */ "./src/providers/user/user.actions.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");









var LoginPage = /** @class */ (function () {
    function LoginPage(router, actions$, store) {
        this.router = router;
        this.actions$ = actions$;
        this.store = store;
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
    }
    LoginPage.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    LoginPage.prototype.ngOnInit = function () {
        var _this = this;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            emailAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)])
        });
        this.actions$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.unsubscribe)).subscribe(function (action) {
            switch (action.type) {
                case _providers_user_user_actions__WEBPACK_IMPORTED_MODULE_4__["LOGIN_SUCCESS"]:
                    _this.loginSuccess();
                    break;
                case _providers_user_user_actions__WEBPACK_IMPORTED_MODULE_4__["LOGIN_FAILURE"]:
                    _this.loginFailure(action.payload);
                    break;
                default:
                    break;
            }
        });
    };
    LoginPage.prototype.login = function () {
        this.showLoading = true;
        var payload = {
            email_address: this.loginForm.controls.emailAddress.value,
            password: this.loginForm.controls.password.value
        };
        this.store.dispatch(new _providers_user_user_actions__WEBPACK_IMPORTED_MODULE_4__["LoginRequest"](payload));
    };
    LoginPage.prototype.loginSuccess = function () {
        this.router.navigate(['/internal/home'], { replaceUrl: true });
        this.showLoading = false;
    };
    LoginPage.prototype.loginFailure = function (response) {
        this.showLoading = false;
        this.alertConfig = {
            header: response.error.header,
            message: response.error.message,
            confirm: 'OK'
        };
    };
    LoginPage.prototype.errorAlertCallback = function () {
        this.alertConfig = null;
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["Actions"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map