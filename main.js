(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../home/home.module": [
		"./src/app/home/home.module.ts",
		"default~external-external-module~home-home-module~internal-internal-module~login-login-module~settin~d058928e",
		"common",
		"home-home-module"
	],
	"../login/login.module": [
		"./src/app/login/login.module.ts",
		"default~external-external-module~home-home-module~internal-internal-module~login-login-module~settin~d058928e",
		"common",
		"login-login-module"
	],
	"../settings/settings.module": [
		"./src/app/settings/settings.module.ts",
		"default~external-external-module~home-home-module~internal-internal-module~login-login-module~settin~d058928e",
		"common",
		"settings-settings-module"
	],
	"../sign-up/sign-up.module": [
		"./src/app/sign-up/sign-up.module.ts",
		"default~external-external-module~home-home-module~internal-internal-module~login-login-module~settin~d058928e",
		"common",
		"sign-up-sign-up-module"
	],
	"../verify-email/verify-email.module": [
		"./src/app/verify-email/verify-email.module.ts",
		"default~external-external-module~home-home-module~internal-internal-module~login-login-module~settin~d058928e",
		"common",
		"verify-email-verify-email-module"
	],
	"./external/external.module": [
		"./src/app/external/external.module.ts",
		"default~external-external-module~home-home-module~internal-internal-module~login-login-module~settin~d058928e",
		"common",
		"external-external-module"
	],
	"./internal/internal.module": [
		"./src/app/internal/internal.module.ts",
		"default~external-external-module~home-home-module~internal-internal-module~login-login-module~settin~d058928e",
		"common",
		"internal-internal-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    { path: '', redirectTo: 'external', pathMatch: 'full' },
    { path: 'internal', loadChildren: './internal/internal.module#InternalPageModule' },
    { path: 'external', loadChildren: './external/external.module#ExternalPageModule' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _mock_backend_mock_backend_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mock-backend/mock-backend.module */ "./src/mock-backend/mock-backend.module.ts");
/* harmony import */ var _interceptors_interceptors_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../interceptors/interceptors.module */ "./src/interceptors/interceptors.module.ts");
/* harmony import */ var _providers_api_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../providers/api/api.service */ "./src/providers/api/api.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _providers_user_user_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../providers/user/user.module */ "./src/providers/user/user.module.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _state_meta_reducer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../state/meta.reducer */ "./src/state/meta.reducer.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            entryComponents: [],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _interceptors_interceptors_module__WEBPACK_IMPORTED_MODULE_6__["InterceptorModule"],
                _mock_backend_mock_backend_module__WEBPACK_IMPORTED_MODULE_5__["MockBackendModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _providers_user_user_module__WEBPACK_IMPORTED_MODULE_9__["UserModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["StoreModule"].forRoot({}, { metaReducers: [_state_meta_reducer__WEBPACK_IMPORTED_MODULE_12__["metaReducer"]] }),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_11__["EffectsModule"].forRoot([]),
            ],
            providers: [
                _providers_api_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    baseUrl: '',
    production: false,
    tokenKey: 'AUTH_TOKEN_LOCAL'
};


/***/ }),

/***/ "./src/interceptors/auth.interceptor.ts":
/*!**********************************************!*\
  !*** ./src/interceptors/auth.interceptor.ts ***!
  \**********************************************/
/*! exports provided: TokenInterceptor, TokenProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenProvider", function() { return TokenProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _providers_user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/user/user.service */ "./src/providers/user/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var TokenInterceptor = /** @class */ (function () {
    function TokenInterceptor(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    TokenInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        var token = this.userService.getToken();
        if (token) {
            request = this.setAuthHeader(request, token);
        }
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                // option to modify successful requests here
                // console.log('success', event);
            }
        }, function (err) {
            if (err.status === 401) {
                _this.userService.removeToken();
                _this.router.navigate(['external/login']);
            }
        }));
    };
    TokenInterceptor.prototype.setAuthHeader = function (request, token) {
        return request.clone({
            setHeaders: {
                Authorization: "JWT " + token
            }
        });
    };
    TokenInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], TokenInterceptor);
    return TokenInterceptor;
}());

var TokenProvider = {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
    useClass: TokenInterceptor,
    multi: true
};


/***/ }),

/***/ "./src/interceptors/interceptors.module.ts":
/*!*************************************************!*\
  !*** ./src/interceptors/interceptors.module.ts ***!
  \*************************************************/
/*! exports provided: InterceptorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterceptorModule", function() { return InterceptorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.interceptor */ "./src/interceptors/auth.interceptor.ts");
/* harmony import */ var _url_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./url.interceptor */ "./src/interceptors/url.interceptor.ts");




var InterceptorModule = /** @class */ (function () {
    function InterceptorModule() {
    }
    InterceptorModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            providers: [
                _url_interceptor__WEBPACK_IMPORTED_MODULE_3__["UrlProvider"],
                _auth_interceptor__WEBPACK_IMPORTED_MODULE_2__["TokenProvider"]
            ]
        })
    ], InterceptorModule);
    return InterceptorModule;
}());



/***/ }),

/***/ "./src/interceptors/url.interceptor.ts":
/*!*********************************************!*\
  !*** ./src/interceptors/url.interceptor.ts ***!
  \*********************************************/
/*! exports provided: UrlInterceptor, UrlProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlInterceptor", function() { return UrlInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlProvider", function() { return UrlProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");




var UrlInterceptor = /** @class */ (function () {
    function UrlInterceptor() {
    }
    UrlInterceptor.prototype.intercept = function (request, next) {
        request = request.clone({
            url: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + request.url
        });
        return next.handle(request);
    };
    UrlInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UrlInterceptor);
    return UrlInterceptor;
}());

var UrlProvider = {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
    useClass: UrlInterceptor,
    multi: true
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/mock-backend/mock-backend.database.ts":
/*!***************************************************!*\
  !*** ./src/mock-backend/mock-backend.database.ts ***!
  \***************************************************/
/*! exports provided: database */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "database", function() { return database; });
var database = {
    user: [
        {
            id: 123,
            email_address: 'test@user.com',
            name: 'password'
        }
    ]
};


/***/ }),

/***/ "./src/mock-backend/mock-backend.handlers.ts":
/*!***************************************************!*\
  !*** ./src/mock-backend/mock-backend.handlers.ts ***!
  \***************************************************/
/*! exports provided: handlers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handlers", function() { return handlers; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _mock_backend_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mock-backend.database */ "./src/mock-backend/mock-backend.database.ts");



var getToken = function (request) { return request.headers.get('Authorization').replace('Bearer ', ''); };
var handlers = {
    '/auth': {
        POST: function (request) {
            var user = _mock_backend_database__WEBPACK_IMPORTED_MODULE_2__["database"].user.find(function (u) { return u.email_address === request.body.email_address; });
            if (!user) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpErrorResponse"]({
                    error: {
                        header: '¡Lo sentimos!',
                        message: 'Correo electrónico o constraseña inválida'
                    },
                    status: 400
                }));
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]({
                status: 201,
                body: { access_token: user.id }
            }));
        }
    },
    '/user/current-user': {
        GET: function (request) {
            var user = _mock_backend_database__WEBPACK_IMPORTED_MODULE_2__["database"].user.find(function (u) { return u.id.toString() === getToken(request); });
            if (!user) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpErrorResponse"]({ status: 401 }));
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]({
                status: 201,
                body: user
            }));
        }
    },
    '/sign-up': {
        POST: function (request) {
            var existing = _mock_backend_database__WEBPACK_IMPORTED_MODULE_2__["database"].user.find(function (u) { return u.email_address === request.body.email_address; });
            if (existing) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpErrorResponse"]({
                    error: {
                        header: '¡Lo sentimos!',
                        message: 'Ya existe un usuario registrado con esa dirección de correo electrónico'
                    },
                    status: 400
                }));
            }
            var user = {
                email_address: request.body.email_address,
                name: request.body.name,
                id: Math.floor(Math.random() * (1000))
            };
            _mock_backend_database__WEBPACK_IMPORTED_MODULE_2__["database"].user.push(user);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]({
                status: 201,
                body: null
            }));
        }
    },
};


/***/ }),

/***/ "./src/mock-backend/mock-backend.interceptor.ts":
/*!******************************************************!*\
  !*** ./src/mock-backend/mock-backend.interceptor.ts ***!
  \******************************************************/
/*! exports provided: MockBackendInterceptor, MockBackendProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockBackendInterceptor", function() { return MockBackendInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockBackendProvider", function() { return MockBackendProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _mock_backend_handlers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mock-backend.handlers */ "./src/mock-backend/mock-backend.handlers.ts");






var MockBackendInterceptor = /** @class */ (function () {
    function MockBackendInterceptor() {
    }
    MockBackendInterceptor.prototype.intercept = function (request, next) {
        // wrap in delayed observable to simulate server api call
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function () {
            // need to assert type as Observable<HttpEvent<any>> when accessing the functions this way
            if (_mock_backend_handlers__WEBPACK_IMPORTED_MODULE_5__["handlers"].hasOwnProperty(request.url) && _mock_backend_handlers__WEBPACK_IMPORTED_MODULE_5__["handlers"][request.url].hasOwnProperty(request.method)) {
                return _mock_backend_handlers__WEBPACK_IMPORTED_MODULE_5__["handlers"][request.url][request.method](request);
            }
            return next.handle(request);
        }))
            // call materialize and dematerialize to ensure delay even if an error is thrown
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["materialize"])())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(1000))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["dematerialize"])());
    };
    MockBackendInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MockBackendInterceptor);
    return MockBackendInterceptor;
}());

var MockBackendProvider = {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
    useClass: MockBackendInterceptor,
    multi: true
};


/***/ }),

/***/ "./src/mock-backend/mock-backend.module.ts":
/*!*************************************************!*\
  !*** ./src/mock-backend/mock-backend.module.ts ***!
  \*************************************************/
/*! exports provided: MockBackendModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockBackendModule", function() { return MockBackendModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock_backend_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mock-backend.interceptor */ "./src/mock-backend/mock-backend.interceptor.ts");



var MockBackendModule = /** @class */ (function () {
    function MockBackendModule() {
    }
    MockBackendModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            providers: [
                _mock_backend_interceptor__WEBPACK_IMPORTED_MODULE_2__["MockBackendProvider"]
            ]
        })
    ], MockBackendModule);
    return MockBackendModule;
}());



/***/ }),

/***/ "./src/providers/api/api.service.ts":
/*!******************************************!*\
  !*** ./src/providers/api/api.service.ts ***!
  \******************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.delay = 0;
    }
    ApiService.prototype.get = function (endpoint, params, reqOpts) {
        if (!reqOpts) {
            reqOpts = {
                params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            };
        }
        if (params) {
            reqOpts.params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            for (var k in params) {
                reqOpts.params = reqOpts.params.set(k, params[k]);
            }
        }
        return this.http.get(endpoint, reqOpts).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(this.delay));
    };
    ApiService.prototype.post = function (endpoint, body, reqOpts) {
        return this.http.post(endpoint, body, reqOpts).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(this.delay));
    };
    ApiService.prototype.put = function (endpoint, body, reqOpts) {
        return this.http.put(endpoint, body, reqOpts).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(this.delay));
    };
    ApiService.prototype.delete = function (endpoint, reqOpts) {
        return this.http.delete(endpoint, reqOpts).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(this.delay));
    };
    ApiService.prototype.patch = function (endpoint, body, reqOpts) {
        return this.http.patch(endpoint, body, reqOpts).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(this.delay));
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/providers/user/user.actions.ts":
/*!********************************************!*\
  !*** ./src/providers/user/user.actions.ts ***!
  \********************************************/
/*! exports provided: SIGN_UP_REQUEST, SignUpRequest, SIGN_UP_SUCCESS, SignUpSuccess, SIGN_UP_FAILURE, SignUpFailure, LOGIN_REQUEST, LoginRequest, LOGIN_SUCCESS, LoginSuccess, LOGIN_FAILURE, LoginFailure, LOGOUT_REQUEST, LogoutRequest, LOGOUT_SUCCESS, LogoutSuccess, LOGOUT_FAILURE, LogoutFailure, GET_USER_REQUEST, GetUserRequest, GET_USER_SUCCESS, GetUserSuccess, GET_USER_FAILURE, GetUserFailure, USE_CACHED_USER, UseCachedUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_REQUEST", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpRequest", function() { return SignUpRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_SUCCESS", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpSuccess", function() { return SignUpSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_FAILURE", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpFailure", function() { return SignUpFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_REQUEST", function() { return LOGIN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRequest", function() { return LoginRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_SUCCESS", function() { return LOGIN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginSuccess", function() { return LoginSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_FAILURE", function() { return LOGIN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFailure", function() { return LoginFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT_REQUEST", function() { return LOGOUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutRequest", function() { return LogoutRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT_SUCCESS", function() { return LOGOUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutSuccess", function() { return LogoutSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT_FAILURE", function() { return LOGOUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutFailure", function() { return LogoutFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_USER_REQUEST", function() { return GET_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUserRequest", function() { return GetUserRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_USER_SUCCESS", function() { return GET_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUserSuccess", function() { return GetUserSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_USER_FAILURE", function() { return GET_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUserFailure", function() { return GetUserFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USE_CACHED_USER", function() { return USE_CACHED_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UseCachedUser", function() { return UseCachedUser; });
// SIGN_UP NEW USERS -----------------------------------
var SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
var SignUpRequest = /** @class */ (function () {
    function SignUpRequest(payload) {
        this.payload = payload;
        this.type = SIGN_UP_REQUEST;
    }
    return SignUpRequest;
}());

var SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
var SignUpSuccess = /** @class */ (function () {
    function SignUpSuccess() {
        this.type = SIGN_UP_SUCCESS;
    }
    return SignUpSuccess;
}());

var SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
var SignUpFailure = /** @class */ (function () {
    function SignUpFailure(payload) {
        this.payload = payload;
        this.type = SIGN_UP_FAILURE;
    }
    return SignUpFailure;
}());

// LOGIN EXISTING USERS --------------------------------
var LOGIN_REQUEST = 'LOGIN_REQUEST';
var LoginRequest = /** @class */ (function () {
    function LoginRequest(payload) {
        this.payload = payload;
        this.type = LOGIN_REQUEST;
    }
    return LoginRequest;
}());

var LOGIN_SUCCESS = 'LOGIN_SUCCESS';
var LoginSuccess = /** @class */ (function () {
    function LoginSuccess() {
        this.type = LOGIN_SUCCESS;
    }
    return LoginSuccess;
}());

var LOGIN_FAILURE = 'LOGIN_FAILURE';
var LoginFailure = /** @class */ (function () {
    function LoginFailure(payload) {
        this.payload = payload;
        this.type = LOGIN_FAILURE;
    }
    return LoginFailure;
}());

// LOGOUT ----------------------------------------------
var LOGOUT_REQUEST = 'LOGOUT_REQUEST';
var LogoutRequest = /** @class */ (function () {
    function LogoutRequest() {
        this.type = LOGOUT_REQUEST;
    }
    return LogoutRequest;
}());

var LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
var LogoutSuccess = /** @class */ (function () {
    function LogoutSuccess() {
        this.type = LOGOUT_SUCCESS;
    }
    return LogoutSuccess;
}());

var LOGOUT_FAILURE = 'LOGOUT_FAILURE';
var LogoutFailure = /** @class */ (function () {
    function LogoutFailure(payload) {
        this.payload = payload;
        this.type = LOGOUT_FAILURE;
    }
    return LogoutFailure;
}());

// GET ----------------------------------------------
var GET_USER_REQUEST = 'GET_USER_REQUEST';
var GetUserRequest = /** @class */ (function () {
    function GetUserRequest() {
        this.type = GET_USER_REQUEST;
    }
    return GetUserRequest;
}());

var GET_USER_SUCCESS = 'GET_USER_SUCCESS';
var GetUserSuccess = /** @class */ (function () {
    function GetUserSuccess(payload) {
        this.payload = payload;
        this.type = GET_USER_SUCCESS;
    }
    return GetUserSuccess;
}());

var GET_USER_FAILURE = 'GET_USER_FAILURE';
var GetUserFailure = /** @class */ (function () {
    function GetUserFailure(payload) {
        this.payload = payload;
        this.type = GET_USER_FAILURE;
    }
    return GetUserFailure;
}());

var USE_CACHED_USER = 'USE_CACHED_USER';
var UseCachedUser = /** @class */ (function () {
    function UseCachedUser() {
        this.type = USE_CACHED_USER;
    }
    return UseCachedUser;
}());



/***/ }),

/***/ "./src/providers/user/user.effects.ts":
/*!********************************************!*\
  !*** ./src/providers/user/user.effects.ts ***!
  \********************************************/
/*! exports provided: UserEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEffects", function() { return UserEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user.service */ "./src/providers/user/user.service.ts");
/* harmony import */ var _user_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user.actions */ "./src/providers/user/user.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");








var UserEffects = /** @class */ (function () {
    function UserEffects(actions$, userService, store$) {
        var _this = this;
        this.actions$ = actions$;
        this.userService = userService;
        this.store$ = store$;
        this.register$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_user_actions__WEBPACK_IMPORTED_MODULE_6__["SIGN_UP_REQUEST"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (action) {
            return _this.userService.signUp(action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () { return new _user_actions__WEBPACK_IMPORTED_MODULE_6__["SignUpSuccess"](); }), 
            // need to catch the error or the stream will end
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _user_actions__WEBPACK_IMPORTED_MODULE_6__["SignUpFailure"](err)); }));
        }));
        this.login$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_user_actions__WEBPACK_IMPORTED_MODULE_6__["LOGIN_REQUEST"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (action) {
            return _this.userService.login(action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
                _this.userService.setToken(data.access_token);
                return new _user_actions__WEBPACK_IMPORTED_MODULE_6__["LoginSuccess"]();
            }), 
            // need to catch the error or the stream will end
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _user_actions__WEBPACK_IMPORTED_MODULE_6__["LoginFailure"](err)); }));
        }));
        this.logout$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_user_actions__WEBPACK_IMPORTED_MODULE_6__["LOGOUT_REQUEST"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (action) {
            return _this.userService.logout().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () {
                _this.userService.removeToken();
                return new _user_actions__WEBPACK_IMPORTED_MODULE_6__["LogoutSuccess"]();
            }), 
            // need to catch the error or the stream will end
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _user_actions__WEBPACK_IMPORTED_MODULE_6__["LogoutFailure"](err)); }));
        }));
        this.get$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_user_actions__WEBPACK_IMPORTED_MODULE_6__["GET_USER_REQUEST"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["withLatestFrom"])(this.store$.select('user')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (_a) {
            var action = _a[0], user = _a[1];
            if (user) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _user_actions__WEBPACK_IMPORTED_MODULE_6__["UseCachedUser"]());
            }
            else {
                return _this.userService.getMyself().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return new _user_actions__WEBPACK_IMPORTED_MODULE_6__["GetUserSuccess"](data); }), 
                // need to catch the error or the stream will end
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _user_actions__WEBPACK_IMPORTED_MODULE_6__["GetUserFailure"](err)); }));
            }
        }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UserEffects.prototype, "register$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UserEffects.prototype, "login$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UserEffects.prototype, "logout$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UserEffects.prototype, "get$", void 0);
    UserEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"], _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"]])
    ], UserEffects);
    return UserEffects;
}());



/***/ }),

/***/ "./src/providers/user/user.module.ts":
/*!*******************************************!*\
  !*** ./src/providers/user/user.module.ts ***!
  \*******************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.service */ "./src/providers/user/user.service.ts");
/* harmony import */ var _user_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user.reducer */ "./src/providers/user/user.reducer.ts");
/* harmony import */ var _user_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user.effects */ "./src/providers/user/user.effects.ts");







var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forFeature('user', _user_reducer__WEBPACK_IMPORTED_MODULE_5__["userReducer"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["EffectsModule"].forFeature([_user_effects__WEBPACK_IMPORTED_MODULE_6__["UserEffects"]])
            ],
            providers: [_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]]
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "./src/providers/user/user.reducer.ts":
/*!********************************************!*\
  !*** ./src/providers/user/user.reducer.ts ***!
  \********************************************/
/*! exports provided: userReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userReducer", function() { return userReducer; });
/* harmony import */ var _user_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.actions */ "./src/providers/user/user.actions.ts");

function userReducer(state, action) {
    switch (action.type) {
        case _user_actions__WEBPACK_IMPORTED_MODULE_0__["GET_USER_SUCCESS"]:
            return action.payload;
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/providers/user/user.service.ts":
/*!********************************************!*\
  !*** ./src/providers/user/user.service.ts ***!
  \********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/api.service */ "./src/providers/api/api.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");






var UserService = /** @class */ (function () {
    function UserService(apiService) {
        this.apiService = apiService;
    }
    UserService.prototype.setToken = function (token) {
        localStorage.setItem(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].tokenKey, JSON.stringify(token));
    };
    UserService.prototype.getToken = function () {
        return JSON.parse(localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].tokenKey));
    };
    UserService.prototype.removeToken = function () {
        localStorage.removeItem(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].tokenKey);
    };
    UserService.prototype.login = function (payload) {
        var _this = this;
        return this.apiService.post('/auth', payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (userToken) { return _this.setToken(userToken.access_token); }));
    };
    UserService.prototype.getMyself = function () {
        return this.apiService.get('/user/current-user');
    };
    UserService.prototype.logout = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.removeToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(500));
    };
    UserService.prototype.signUp = function (payload) {
        return this.apiService.post('/sign-up', payload);
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/state/meta.reducer.ts":
/*!***********************************!*\
  !*** ./src/state/meta.reducer.ts ***!
  \***********************************/
/*! exports provided: metaReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducer", function() { return metaReducer; });
/* harmony import */ var _providers_user_user_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../providers/user/user.actions */ "./src/providers/user/user.actions.ts");

// all actions are passing through the meta reducers before being handed over to the feature reducers
function metaReducer(reducer) {
    return function (state, action) {
        switch (action.type) {
            case _providers_user_user_actions__WEBPACK_IMPORTED_MODULE_0__["LOGOUT_SUCCESS"]:
                return {};
            default:
                return reducer(state, action);
        }
    };
}


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/darry/Documents/Personal/Eafit/Arquitecturas modernas/Entrega3/Repo/micarpeta-frontend-app-web/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map