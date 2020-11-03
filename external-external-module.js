(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["external-external-module"],{

/***/ "./src/app/external/external.guard.ts":
/*!********************************************!*\
  !*** ./src/app/external/external.guard.ts ***!
  \********************************************/
/*! exports provided: ExternalGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExternalGuard", function() { return ExternalGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/user/user.service */ "./src/providers/user/user.service.ts");




var ExternalGuard = /** @class */ (function () {
    function ExternalGuard(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    ExternalGuard.prototype.canActivate = function (next, state) {
        if (!this.userService.getToken()) {
            return true;
        }
        this.router.navigate(['internal/home']);
        return false;
    };
    ExternalGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ExternalGuard);
    return ExternalGuard;
}());



/***/ }),

/***/ "./src/app/external/external.module.ts":
/*!*********************************************!*\
  !*** ./src/app/external/external.module.ts ***!
  \*********************************************/
/*! exports provided: ExternalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExternalPageModule", function() { return ExternalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _external_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./external.page */ "./src/app/external/external.page.ts");
/* harmony import */ var _external_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./external.guard */ "./src/app/external/external.guard.ts");







var routes = [
    {
        path: '', component: _external_page__WEBPACK_IMPORTED_MODULE_5__["ExternalPage"], canActivate: [_external_guard__WEBPACK_IMPORTED_MODULE_6__["ExternalGuard"]],
        children: [
            { path: 'login', loadChildren: '../login/login.module#LoginPageModule' },
            { path: 'sign-up', loadChildren: '../sign-up/sign-up.module#SignUpPageModule' },
            { path: 'verify-email', loadChildren: '../verify-email/verify-email.module#VerifyEmailPageModule' },
            { path: '', redirectTo: 'login', pathMatch: 'full' }
        ]
    }
];
var ExternalPageModule = /** @class */ (function () {
    function ExternalPageModule() {
    }
    ExternalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_external_page__WEBPACK_IMPORTED_MODULE_5__["ExternalPage"]]
        })
    ], ExternalPageModule);
    return ExternalPageModule;
}());



/***/ }),

/***/ "./src/app/external/external.page.html":
/*!*********************************************!*\
  !*** ./src/app/external/external.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/external/external.page.scss":
/*!*********************************************!*\
  !*** ./src/app/external/external.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4dGVybmFsL2V4dGVybmFsLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/external/external.page.ts":
/*!*******************************************!*\
  !*** ./src/app/external/external.page.ts ***!
  \*******************************************/
/*! exports provided: ExternalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExternalPage", function() { return ExternalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ExternalPage = /** @class */ (function () {
    function ExternalPage() {
    }
    ExternalPage.prototype.ngOnInit = function () {
    };
    ExternalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-external',
            template: __webpack_require__(/*! ./external.page.html */ "./src/app/external/external.page.html"),
            styles: [__webpack_require__(/*! ./external.page.scss */ "./src/app/external/external.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ExternalPage);
    return ExternalPage;
}());



/***/ })

}]);
//# sourceMappingURL=external-external-module.js.map