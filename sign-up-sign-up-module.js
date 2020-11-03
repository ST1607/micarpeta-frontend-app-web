(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sign-up-sign-up-module"],{

/***/ "./src/app/sign-up/sign-up-page.component.html":
/*!*****************************************************!*\
  !*** ./src/app/sign-up/sign-up-page.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"h-screen w-screen flex items-center justify-center  relative\">\n\n  <app-loading-spinner *ngIf=\"showLoading\" [fullScreen]=\"true\"></app-loading-spinner>\n  <app-alert-modal [config]=\"alertConfig\" (result)=\"errorAlertCallback()\"></app-alert-modal>\n\n  <div class=\"w-full flex flex-wrap font-family-karla\">\n\n    <!-- Register Section -->\n    <div class=\"w-full md:w-1/2 flex flex-col\">\n\n      <div class=\"flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24\">\n        <a href=\"#\" class=\"bg-blue-700 text-white font-bold text-xl p-4\">OPERADOR MI CARPETA</a>\n      </div>\n\n      <div class=\"flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32\">\n                \n        <p class=\"text-center text-3xl\">Registro de usuario</p>\n        <form [formGroup]=\"signUpForm\" (ngSubmit)=\"signUp()\" class=\"flex flex-col pt-3 md:pt-8\">\n\n          <div class=\"flex flex-col pt-4\">\n            <label for=\"documento\" class=\"text-lg\"># Documento</label>\n            <input placeholder=\"Documento\" type=\"number\" formControlName=\"number\" data-cy=\"documentInput\"\n            class=\"shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline\"/>\n            <!--\n            <div data-cy=\"documentWarning\"\n            [class.invisible]=\"!(!signUpForm.controls.document.valid && signUpForm.controls.document.dirty && signUpForm.controls.document.touched)\"\n                class=\"px-1 text-red-400 pt-0 pb-0 text-sm\">\n                Por favor introduzca un número de documento.\n            </div>\n            -->\n            <div data-cy=\"documentWarning\"\n            [class.invisible]=\"!false\"\n                class=\"px-1 text-red-400 pt-0 pb-0 text-sm\">\n                Por favor introduzca un número de documento.\n            </div>\n          </div>\n\n          <div class=\"flex flex-col pt-1\">\n            <label for=\"fullname\" class=\"text-lg\">Nombre y Apellido</label>\n            <input placeholder=\"Nombre y Apellido\" type=\"text\" formControlName=\"text\" data-cy=\"nameInput\"\n            class=\"shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline\"/>\n            <div data-cy=\"nameWarning\"\n            [class.invisible]=\"!false\"\n                class=\"px-1 text-red-400 pt-0 pb-0 text-sm\">\n                Por favor introduzca un número de documento.\n            </div>\n          </div>\n\n          <div class=\"flex flex-col pt-1\">\n            <label for=\"email\" class=\"text-lg\">Correo electrónico</label>\n            <input placeholder=\"user@dominio.com\" required type=\"email\" formControlName=\"emailAddress\"\n                  data-cy=\"'emailAddressInput'\"\n                  class=\"shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline\">\n\n            <div data-cy=\"emailWarning\"\n                [class.invisible]=\"!(!signUpForm.controls.emailAddress.valid && signUpForm.controls.emailAddress.dirty && signUpForm.controls.emailAddress.touched)\"\n                class=\"px-1 text-red-400 pt-0 pb-0 text-sm\">\n                Por favor introduzca una dirección de correo válida.\n            </div>\n          </div>\n\n          <div class=\"flex flex-col pt-1\">\n            <label for=\"password\" class=\"text-lg\">Contraseña</label>\n            <input placeholder=\"Contraseña\" required type=\"password\" formControlName=\"password\" data-cy=\"passwordInput\"\n            class=\"shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline\"/>\n\n            <div data-cy=\"passwordWarning\"\n                [class.invisible]=\"!(!signUpForm.controls.password.valid && signUpForm.controls.password.dirty && signUpForm.controls.password.touched)\"\n                class=\"px-1 text-red-400 pt-0 pb-0 text-sm\">\n                Por favor introduzca una contraseña de al menos 8 caracteres.\n            </div>\n          </div>\n\n          <button class=\"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 p-1 mt-6 rounded disabled:bg-blue-500 disabled:opacity-50\"\n            data-cy=\"signUpButton\"\n            type=\"submit\" [disabled]=\"signUpForm.invalid\">REGISTRARSE\n          </button>\n\n          <div class=\"text-center pt-2 pb-2\">\n            <p>¿Ya tiene una cuenta? &nbsp;&nbsp;<button class=\"bg-transparent text-blue-400 hover:text-blue-700 py-2 mt-6\"\n              data-cy=\"loginButton\" type=\"button\" [routerLink]=\"['/external/login']\">INICIE SESIÓN AQUÍ.\n              </button></p>\n          </div>\n\n        </form>\n      </div>\n\n    </div>\n\n    <!-- Image Section -->\n    <div class=\"w-1/2 shadow-2xl\">\n      <img class=\"object-cover w-full h-screen hidden md:block\" src=\"https://images.unsplash.com/photo-1557487307-8dc8ec048eb8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80\">\n    </div>    \n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/sign-up/sign-up-page.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/sign-up/sign-up-page.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ24tdXAvc2lnbi11cC1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/sign-up/sign-up-page.component.ts":
/*!***************************************************!*\
  !*** ./src/app/sign-up/sign-up-page.component.ts ***!
  \***************************************************/
/*! exports provided: SignUpPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpPage", function() { return SignUpPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _providers_user_user_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../providers/user/user.actions */ "./src/providers/user/user.actions.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");









var SignUpPage = /** @class */ (function () {
    function SignUpPage(router, actions$, store) {
        this.router = router;
        this.actions$ = actions$;
        this.store = store;
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
    }
    SignUpPage.prototype.ngOnInit = function () {
        var _this = this;
        this.signUpForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            emailAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)])
        });
        this.actions$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe)).subscribe(function (action) {
            switch (action.type) {
                case _providers_user_user_actions__WEBPACK_IMPORTED_MODULE_6__["SIGN_UP_SUCCESS"]:
                    _this.signUpSuccess();
                    break;
                case _providers_user_user_actions__WEBPACK_IMPORTED_MODULE_6__["SIGN_UP_FAILURE"]:
                    _this.signUpFailure(action.payload);
                    break;
                default:
                    break;
            }
        });
    };
    SignUpPage.prototype.signUp = function () {
        this.showLoading = true;
        var payload = {
            email_address: this.signUpForm.controls.emailAddress.value,
            password: this.signUpForm.controls.password.value
        };
        this.store.dispatch(new _providers_user_user_actions__WEBPACK_IMPORTED_MODULE_6__["SignUpRequest"](payload));
    };
    SignUpPage.prototype.signUpSuccess = function () {
        // pass replaceUrl so that the sign-up component is destroyed after the verification message
        this.router.navigate(['/external/verify-email'], { replaceUrl: true });
        this.showLoading = false;
    };
    SignUpPage.prototype.signUpFailure = function (response) {
        this.showLoading = false;
        this.alertConfig = {
            header: response.error.header,
            message: response.error.message,
            confirm: 'OK'
        };
    };
    SignUpPage.prototype.errorAlertCallback = function () {
        this.alertConfig = null;
    };
    SignUpPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! ./sign-up-page.component.html */ "./src/app/sign-up/sign-up-page.component.html"),
            styles: [__webpack_require__(/*! ./sign-up-page.component.scss */ "./src/app/sign-up/sign-up-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], SignUpPage);
    return SignUpPage;
}());



/***/ }),

/***/ "./src/app/sign-up/sign-up.module.ts":
/*!*******************************************!*\
  !*** ./src/app/sign-up/sign-up.module.ts ***!
  \*******************************************/
/*! exports provided: SignUpPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpPageModule", function() { return SignUpPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sign_up_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sign-up-page.component */ "./src/app/sign-up/sign-up-page.component.ts");
/* harmony import */ var _components_loading_spinner_loading_spinner_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/loading-spinner/loading-spinner.module */ "./src/app/components/loading-spinner/loading-spinner.module.ts");
/* harmony import */ var _components_alert_modal_alert_modal_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/alert-modal/alert-modal.module */ "./src/app/components/alert-modal/alert-modal.module.ts");








var routes = [
    {
        path: '',
        component: _sign_up_page_component__WEBPACK_IMPORTED_MODULE_5__["SignUpPage"]
    }
];
var SignUpPageModule = /** @class */ (function () {
    function SignUpPageModule() {
    }
    SignUpPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _components_alert_modal_alert_modal_module__WEBPACK_IMPORTED_MODULE_7__["AlertModalModule"],
                _components_loading_spinner_loading_spinner_module__WEBPACK_IMPORTED_MODULE_6__["LoadingSpinnerModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_sign_up_page_component__WEBPACK_IMPORTED_MODULE_5__["SignUpPage"]]
        })
    ], SignUpPageModule);
    return SignUpPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=sign-up-sign-up-module.js.map