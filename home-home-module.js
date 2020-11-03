(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");






var routes = [
    {
        path: '', component: _home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"],
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' }
        ]
    }
];
var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w-full  p-6 text-gray-700 rounded font-family-karla\" style=\"background: #edf2f7;\">\n    <div class=\"container mx-auto px-4 sm:px-8\" >\n        <div class=\"py-8\">\n            <div>\n                <h2 class=\"text-2xl font-semibold leading-tight\">Documentos almacenados</h2>\n            </div>\n            <div class=\"my-2 flex sm:flex-row flex-col justify-end\">\n                <div class=\"flex flex-row mb-1 sm:mb-0\">\n                    <div class=\"relative\">\n                        <button class=\"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 p-1 rounded disabled:bg-blue-500 disabled:opacity-50\"\n                        data-cy=\"uploadButton\"\n                        type=\"submit\">Subir documento\n                      </button>\n                    </div>\n                </div>\n            </div>\n            <div class=\"-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto\">\n                <div class=\"inline-block min-w-full shadow rounded-lg overflow-hidden\">\n                    <table class=\"min-w-full leading-normal\">\n                        <thead>\n                            <tr>\n                                <th\n                                    class=\"px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider\">\n                                    Nombre\n                                </th>\n                                <th\n                                    class=\"px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider\">\n                                    Creado en\n                                </th>\n                                <th\n                                    class=\"px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider\">\n                                    Estado\n                                </th>\n                                <th\n                                    class=\"px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider\">\n                                    Acción\n                                </th>                                \n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td class=\"px-5 py-5 border-b border-gray-200 bg-white text-sm\">\n                                    <div class=\"flex items-center\">\n                                        <div class=\"flex-shrink-0 w-10 h-10\">\n                                            <img class=\"w-full h-full rounded-full\"\n                                                src=\"https://www.vippng.com/png/full/396-3961185_document-png-circle-document-icon.png\"\n                                                alt=\"\" />\n                                        </div>\n                                        <div class=\"ml-3\">\n                                            <p class=\"text-gray-900 whitespace-no-wrap\">\n                                                NotasMaestríaEafit\n                                            </p>\n                                        </div>\n                                    </div>\n                                </td>\n                                <td class=\"px-5 py-5 border-b border-gray-200 bg-white text-sm\">\n                                    <p class=\"text-gray-900 whitespace-no-wrap\">\n                                        Ene 21, 2020\n                                    </p>\n                                </td>\n                                <td class=\"px-5 py-5 border-b border-gray-200 bg-white text-sm\">\n                                    <span\n                                        class=\"relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight\">\n                                        <span aria-hidden\n                                            class=\"absolute inset-0 bg-green-200 opacity-50 rounded-full\"></span>\n                                        <span class=\"relative\">Firmado</span>\n                                    </span>\n                                </td>\n                                <td class=\"px-5 py-5 border-b border-gray-200 bg-white text-sm\">\n                                    <p class=\"text-gray-900 whitespace-no-wrap\">--</p>\n                                </td>                                \n                            </tr>\n                            <tr>\n                                <td class=\"px-5 py-5 border-b border-gray-200 bg-white text-sm\">\n                                    <div class=\"flex items-center\">\n                                        <div class=\"flex-shrink-0 w-10 h-10\">\n                                            <img class=\"w-full h-full rounded-full\"\n                                                src=\"https://www.vippng.com/png/full/396-3961185_document-png-circle-document-icon.png\"\n                                                alt=\"\" />\n                                        </div>\n                                        <div class=\"ml-3\">\n                                            <p class=\"text-gray-900 whitespace-no-wrap\">\n                                                PasaporteColombiano\n                                            </p>\n                                        </div>\n                                    </div>\n                                </td>\n                                <td class=\"px-5 py-5 border-b border-gray-200 bg-white text-sm\">\n                                    <p class=\"text-gray-900 whitespace-no-wrap\">\n                                        Ene 01, 2020\n                                    </p>\n                                </td>\n                                <td class=\"px-5 py-5 border-b border-gray-200 bg-white text-sm\">\n                                    <span\n                                        class=\"relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight\">\n                                        <span aria-hidden\n                                            class=\"absolute inset-0 bg-green-200 opacity-50 rounded-full\"></span>\n                                        <span class=\"relative\">Firmado</span>\n                                    </span>\n                                </td>\n                                <td class=\"px-5 py-5 border-b border-gray-200 bg-white text-sm\">\n                                    <p class=\"text-gray-900 whitespace-no-wrap\">--</p>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td class=\"px-5 py-5 border-b border-gray-200 bg-white text-sm\">\n                                    <div class=\"flex items-center\">\n                                        <div class=\"flex-shrink-0 w-10 h-10\">\n                                            <img class=\"w-full h-full rounded-full\"\n                                                src=\"https://www.vippng.com/png/full/396-3961185_document-png-circle-document-icon.png\"\n                                                alt=\"\" />\n                                        </div>\n                                        <div class=\"ml-3\">\n                                            <p class=\"text-gray-900 whitespace-no-wrap\">\n                                                CartaLaboral\n                                            </p>\n                                        </div>\n                                    </div>\n                                </td>\n                                <td class=\"px-5 py-5 border-b border-gray-200 bg-white text-sm\">\n                                    <p class=\"text-gray-900 whitespace-no-wrap\">\n                                        Ene 10, 2020\n                                    </p>\n                                </td>\n                                <td class=\"px-5 py-5 border-b border-gray-200 bg-white text-sm\">\n                                    <span\n                                        class=\"relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight\">\n                                        <span aria-hidden\n                                            class=\"absolute inset-0 bg-orange-200 opacity-50 rounded-full\"></span>\n                                        <span class=\"relative\">Por aprobación</span>\n                                    </span>\n                                </td>\n                                <td class=\"px-5 py-5 border-b border-gray-200 bg-white text-sm\">\n                                    <p class=\"text-gray-900 whitespace-no-wrap\">--</p>\n                                </td>                                \n                            </tr>\n                            <tr>\n                                <td class=\"px-5 py-5 bg-white text-sm\">\n                                    <div class=\"flex items-center\">\n                                        <div class=\"flex-shrink-0 w-10 h-10\">\n                                            <img class=\"w-full h-full rounded-full\"\n                                                src=\"https://www.vippng.com/png/full/396-3961185_document-png-circle-document-icon.png\"\n                                                alt=\"\" />\n                                        </div>\n                                        <div class=\"ml-3\">\n                                            <p class=\"text-gray-900 whitespace-no-wrap\">\n                                                FacturaServiciosPublicos\n                                            </p>\n                                        </div>\n                                    </div>\n                                </td>\n                                <td class=\"px-5 py-5 bg-white text-sm\">\n                                    <p class=\"text-gray-900 whitespace-no-wrap\">Ene 18, 2020</p>\n                                </td>\n                                <td class=\"px-5 py-5 bg-white text-sm\">\n                                    <span\n                                        class=\"relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight\">\n                                        <span aria-hidden\n                                            class=\"absolute inset-0 bg-red-200 opacity-50 rounded-full\"></span>\n                                        <span class=\"relative\">Temporal</span>\n                                    </span>\n                                </td>\n                                <td class=\"px-5 py-5 bg-white text-sm\">\n                                    <button class=\"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 p-1 rounded disabled:bg-blue-500 disabled:opacity-50\"\n                                    data-cy=\"uploadButton\"\n                                    type=\"submit\">Validar\n                                  </button>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomePage = /** @class */ (function () {
    function HomePage() {
    }
    HomePage.prototype.ngOnInit = function () {
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map