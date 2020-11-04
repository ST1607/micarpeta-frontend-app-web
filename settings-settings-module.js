(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-settings-module"],{

/***/ "./src/app/settings/settings.module.ts":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.module.ts ***!
  \*********************************************/
/*! exports provided: SettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings.page */ "./src/app/settings/settings.page.ts");






var routes = [
    {
        path: '', component: _settings_page__WEBPACK_IMPORTED_MODULE_5__["SettingsPage"],
        children: [
            { path: '', redirectTo: 'settings', pathMatch: 'full' }
        ]
    }
];
var SettingsPageModule = /** @class */ (function () {
    function SettingsPageModule() {
    }
    SettingsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_5__["SettingsPage"]]
        })
    ], SettingsPageModule);
    return SettingsPageModule;
}());



/***/ }),

/***/ "./src/app/settings/settings.page.html":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w-full  p-6 text-gray-700 rounded font-family-karla\" style=\"background: #edf2f7;\">\n    <div class=\"container mx-auto px-4 sm:px-8\" >\n        <div class=\"py-8\">\n            <div>\n                <h2 class=\"text-2xl font-semibold leading-tight\">Solicitudes Recibidas/Enviadas</h2>\n            </div>\n            <div class=\"my-2 flex sm:flex-row flex-col justify-end\">\n                <div class=\"flex flex-row mb-1 sm:mb-0\">\n                    <div class=\"relative\">\n                        <button class=\"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 p-1 rounded disabled:bg-blue-500 disabled:opacity-50\"\n                        data-cy=\"uploadButton\"\n                        type=\"submit\">Nueva Solicitud\n                      </button>\n                    </div>\n                </div>\n            </div>\n            <div class=\"-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto\">\n                <div class=\"inline-block min-w-full shadow rounded-lg overflow-hidden\">\n                    <table class=\"min-w-full leading-normal\">\n                        <thead>\n                            <tr>\n                                <th\n                                    class=\"px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider\">\n                                    Tipo de solicitud\n                                </th>\n                                <th\n                                    class=\"px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider\">\n                                    Creado en\n                                </th>\n                                <th\n                                    class=\"px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider\">\n                                    Estado\n                                </th>\n                                <th\n                                    class=\"px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider\">\n                                    Acción\n                                </th>                                \n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td class=\"px-5 py-5 border-b border-gray-200 bg-white text-sm\">\n                                    <div class=\"flex items-center\">\n                                        <div class=\"flex-shrink-0 w-10 h-10\">\n                                            <img class=\"w-full h-full rounded-full\"\n                                                src=\"https://www.vippng.com/png/full/396-3961185_document-png-circle-document-icon.png\"\n                                                alt=\"\" />\n                                        </div>\n                                        <div class=\"ml-3\">\n                                            <p class=\"text-gray-900 whitespace-no-wrap\">\n                                                Petición COPNIA\n                                            </p>\n                                        </div>\n                                    </div>\n                                </td>\n                                <td class=\"px-5 py-5 border-b border-gray-200 bg-white text-sm\">\n                                    <p class=\"text-gray-900 whitespace-no-wrap\">\n                                        Nov 1, 2020\n                                    </p>\n                                </td>\n                                <td class=\"px-5 py-5 border-b border-gray-200 bg-white text-sm\">\n                                    <span\n                                        class=\"relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight\">\n                                        <span aria-hidden\n                                            class=\"absolute inset-0 bg-green-200 opacity-50 rounded-full\"></span>\n                                        <span class=\"relative\">Enviado</span>\n                                    </span>\n                                </td>\n                                <td class=\"px-5 py-5 border-b border-gray-200 bg-white text-sm\">\n                                    <p class=\"text-gray-900 whitespace-no-wrap\">--</p>\n                                </td>                                \n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/settings/settings.page.scss":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/settings/settings.page.ts":
/*!*******************************************!*\
  !*** ./src/app/settings/settings.page.ts ***!
  \*******************************************/
/*! exports provided: SettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPage", function() { return SettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SettingsPage = /** @class */ (function () {
    function SettingsPage() {
    }
    SettingsPage.prototype.ngOnInit = function () {
    };
    SettingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.page.html */ "./src/app/settings/settings.page.html"),
            styles: [__webpack_require__(/*! ./settings.page.scss */ "./src/app/settings/settings.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SettingsPage);
    return SettingsPage;
}());



/***/ })

}]);
//# sourceMappingURL=settings-settings-module.js.map