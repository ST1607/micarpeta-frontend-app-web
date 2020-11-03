(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["verify-email-verify-email-module"],{

/***/ "./src/app/verify-email/verify-email.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/verify-email/verify-email.module.ts ***!
  \*****************************************************/
/*! exports provided: VerifyEmailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyEmailPageModule", function() { return VerifyEmailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _verify_email_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./verify-email.page */ "./src/app/verify-email/verify-email.page.ts");






var routes = [
    {
        path: '',
        component: _verify_email_page__WEBPACK_IMPORTED_MODULE_5__["VerifyEmailPage"]
    }
];
var VerifyEmailPageModule = /** @class */ (function () {
    function VerifyEmailPageModule() {
    }
    VerifyEmailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_verify_email_page__WEBPACK_IMPORTED_MODULE_5__["VerifyEmailPage"]]
        })
    ], VerifyEmailPageModule);
    return VerifyEmailPageModule;
}());



/***/ }),

/***/ "./src/app/verify-email/verify-email.page.html":
/*!*****************************************************!*\
  !*** ./src/app/verify-email/verify-email.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"h-screen w-screen flex items-center justify-center px-2 relative\">\n\n\t<div class=\"w-full sm:w-3/4 lg:w-1/2 xl:w-1/3 bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 flex flex-col\">\n\n\t\t<h1 class=\"text-3xl text-center mb-4 text-gray-700\">\n\t\t\tAccount created!\n\t\t</h1>\n\n\t\t<p class=\"text-gray-600 mb-4\">\n\t\t\tBefore you login, please verify your email address by clicking on the link in email we just sent you.\n\t\t</p>\n\n\t\t<button class=\"bg-brand-500 hover:bg-brand-700 text-white font-bold py-2 px-4 rounded mt-4\"\n\t\t\t\t[routerLink]=\"['/external/login']\" data-cy=\"continueButton\">\n\t\t\tContinue\n\t\t</button>\n\n\t</div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/verify-email/verify-email.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/verify-email/verify-email.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlcmlmeS1lbWFpbC92ZXJpZnktZW1haWwucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/verify-email/verify-email.page.ts":
/*!***************************************************!*\
  !*** ./src/app/verify-email/verify-email.page.ts ***!
  \***************************************************/
/*! exports provided: VerifyEmailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyEmailPage", function() { return VerifyEmailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VerifyEmailPage = /** @class */ (function () {
    function VerifyEmailPage() {
    }
    VerifyEmailPage.prototype.ngOnInit = function () {
    };
    VerifyEmailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-verify-email',
            template: __webpack_require__(/*! ./verify-email.page.html */ "./src/app/verify-email/verify-email.page.html"),
            styles: [__webpack_require__(/*! ./verify-email.page.scss */ "./src/app/verify-email/verify-email.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], VerifyEmailPage);
    return VerifyEmailPage;
}());



/***/ })

}]);
//# sourceMappingURL=verify-email-verify-email-module.js.map