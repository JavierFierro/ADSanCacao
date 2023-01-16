(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/loading/loading.component */ "./src/app/shared/loading/loading.component.ts");
/* harmony import */ var _shared_spinner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/spinner.component */ "./src/app/shared/spinner.component.ts");





class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-loading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_2__["LoadingComponent"], _shared_spinner_component__WEBPACK_IMPORTED_MODULE_3__["SpinnerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layouts/full/full.component */ "./src/app/layouts/full/full.component.ts");
/* harmony import */ var _layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layouts/blank/blank.component */ "./src/app/layouts/blank/blank.component.ts");
/* harmony import */ var _layouts_full_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layouts/full/header/header.component */ "./src/app/layouts/full/header/header.component.ts");
/* harmony import */ var _layouts_full_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layouts/full/sidebar/sidebar.component */ "./src/app/layouts/full/sidebar/sidebar.component.ts");
/* harmony import */ var _layouts_full_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layouts/full/breadcrumb/breadcrumb.component */ "./src/app/layouts/full/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _demo_material_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./demo-material-module */ "./src/app/demo-material-module.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _shared_spinner_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/spinner.component */ "./src/app/shared/spinner.component.ts");
/* harmony import */ var _modules_core_core_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./modules/core/core.module */ "./src/app/modules/core/core.module.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");



























const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true,
    wheelSpeed: 2,
    wheelPropagation: true
};
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        {
            provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_21__["PERFECT_SCROLLBAR_CONFIG"],
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_15__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_22__["environment"].firebase),
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_16__["AngularFireAuthModule"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_17__["AngularFireStorageModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
            _demo_material_module__WEBPACK_IMPORTED_MODULE_14__["DemoMaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_21__["PerfectScrollbarModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_18__["SharedModule"],
            _modules_core_core_module__WEBPACK_IMPORTED_MODULE_20__["CoreModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_5__["AppRoutes"])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_8__["FullComponent"],
        _layouts_full_header_header_component__WEBPACK_IMPORTED_MODULE_10__["AppHeaderComponent"],
        _layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_9__["AppBlankComponent"],
        _shared_spinner_component__WEBPACK_IMPORTED_MODULE_19__["SpinnerComponent"],
        _layouts_full_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_11__["AppSidebarComponent"],
        _layouts_full_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_12__["AppBreadcrumbComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_15__["AngularFireModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_16__["AngularFireAuthModule"],
        _angular_fire_storage__WEBPACK_IMPORTED_MODULE_17__["AngularFireStorageModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
        _demo_material_module__WEBPACK_IMPORTED_MODULE_14__["DemoMaterialModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_21__["PerfectScrollbarModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_18__["SharedModule"],
        _modules_core_core_module__WEBPACK_IMPORTED_MODULE_20__["CoreModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                    _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_8__["FullComponent"],
                    _layouts_full_header_header_component__WEBPACK_IMPORTED_MODULE_10__["AppHeaderComponent"],
                    _layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_9__["AppBlankComponent"],
                    _shared_spinner_component__WEBPACK_IMPORTED_MODULE_19__["SpinnerComponent"],
                    _layouts_full_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_11__["AppSidebarComponent"],
                    _layouts_full_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_12__["AppBreadcrumbComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_fire__WEBPACK_IMPORTED_MODULE_15__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_22__["environment"].firebase),
                    _angular_fire_auth__WEBPACK_IMPORTED_MODULE_16__["AngularFireAuthModule"],
                    _angular_fire_storage__WEBPACK_IMPORTED_MODULE_17__["AngularFireStorageModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
                    _demo_material_module__WEBPACK_IMPORTED_MODULE_14__["DemoMaterialModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_21__["PerfectScrollbarModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_18__["SharedModule"],
                    _modules_core_core_module__WEBPACK_IMPORTED_MODULE_20__["CoreModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_5__["AppRoutes"])
                ],
                providers: [
                    {
                        provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_21__["PERFECT_SCROLLBAR_CONFIG"],
                        useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                    }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony import */ var _layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts/blank/blank.component */ "./src/app/layouts/blank/blank.component.ts");
/* harmony import */ var _modules_core_guards_auth_guard_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/core/guards/auth-guard.guard */ "./src/app/modules/core/guards/auth-guard.guard.ts");
/* harmony import */ var _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layouts/full/full.component */ "./src/app/layouts/full/full.component.ts");
/* harmony import */ var _authentication_error_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication/error/error.component */ "./src/app/authentication/error/error.component.ts");




const AppRoutes = [
    {
        path: '',
        component: _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_2__["FullComponent"],
        canActivate: [_modules_core_guards_auth_guard_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
        children: [
            {
                path: 'agricultores',
                loadChildren: () => Promise.all(/*! import() | modules-agricultores-agricultores-module */[__webpack_require__.e("default~modules-agricultores-agricultores-module~modules-formulario-linea-base-formulario-linea-base~5ca1351e"), __webpack_require__.e("modules-agricultores-agricultores-module")]).then(__webpack_require__.bind(null, /*! ./modules/agricultores/agricultores.module */ "./src/app/modules/agricultores/agricultores.module.ts")).then(m => m.AgricultoresModule)
            },
            {
                path: 'formularios/formulariosLineaBase',
                loadChildren: () => Promise.all(/*! import() | modules-formulario-linea-base-formulario-linea-base-module */[__webpack_require__.e("default~modules-agricultores-agricultores-module~modules-formulario-linea-base-formulario-linea-base~5ca1351e"), __webpack_require__.e("modules-formulario-linea-base-formulario-linea-base-module")]).then(__webpack_require__.bind(null, /*! ./modules/formulario-linea-base/formulario-linea-base.module */ "./src/app/modules/formulario-linea-base/formulario-linea-base.module.ts")).then(m => m.FormularioLineaBaseModule)
            },
            {
                path: 'formularios/formulariosVerificacion',
                loadChildren: () => Promise.all(/*! import() | modules-formulario-verificacion-formulario-verificacion-module */[__webpack_require__.e("default~modules-agricultores-agricultores-module~modules-formulario-linea-base-formulario-linea-base~5ca1351e"), __webpack_require__.e("modules-formulario-verificacion-formulario-verificacion-module")]).then(__webpack_require__.bind(null, /*! ./modules/formulario-verificacion/formulario-verificacion.module */ "./src/app/modules/formulario-verificacion/formulario-verificacion.module.ts")).then(m => m.FormularioVerificacionModule)
            },
            {
                path: '',
                redirectTo: '/agricultores',
                pathMatch: 'full'
            },
        ]
    },
    {
        path: '',
        component: _layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_0__["AppBlankComponent"],
        children: [
            {
                path: 'authentication',
                loadChildren: () => __webpack_require__.e(/*! import() | authentication-authentication-module */ "authentication-authentication-module").then(__webpack_require__.bind(null, /*! ./authentication/authentication.module */ "./src/app/authentication/authentication.module.ts")).then(m => m.AuthenticationModule)
            }
        ]
    },
    {
        path: '**',
        component: _authentication_error_error_component__WEBPACK_IMPORTED_MODULE_3__["ErrorComponent"]
    }
];


/***/ }),

/***/ "./src/app/authentication/error/error.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/authentication/error/error.component.ts ***!
  \*********************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class ErrorComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
    backHome() {
        this.router.navigate(['']);
    }
}
ErrorComponent.ɵfac = function ErrorComponent_Factory(t) { return new (t || ErrorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
ErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorComponent, selectors: [["app-error"]], decls: 10, vars: 0, consts: [[1, "login-register"], [1, "login-register-box", "error-card", "text-center"], [1, "text-uppercase"], [1, "text-muted", "m-t-30", "m-b-30"], ["mat-raised-button", "", "color", "primary", 1, "btn", "btn-info", "btn-rounded", "waves-effect", "waves-light", "m-b-40", 3, "click"]], template: function ErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "404");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Page Not Found !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "You seem to be trying to find this way to home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ErrorComponent_Template_button_click_8_listener() { return ctx.backHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Back to home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-error',
                templateUrl: './error.component.html',
                styleUrls: ['./error.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/demo-material-module.ts":
/*!*****************************************!*\
  !*** ./src/app/demo-material-module.ts ***!
  \*****************************************/
/*! exports provided: DemoMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoMaterialModule", function() { return DemoMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/cdk/accordion */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/accordion.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/cdk/observers */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/observers.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */











































/**
 * NgModule that includes all Material modules that are required to serve the demo-app.
 */
class DemoMaterialModule {
}
DemoMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DemoMaterialModule });
DemoMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DemoMaterialModule_Factory(t) { return new (t || DemoMaterialModule)(); }, imports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_33__["MatBottomSheetModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatTableModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_32__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_31__["MatBadgeModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__["MatSidenavModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_23__["MatSlideToggleModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_22__["MatSliderModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_24__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_25__["MatSortModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_30__["MatStepperModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_28__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_29__["MatTooltipModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_32__["MatNativeDateModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_34__["CdkTableModule"],
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_36__["A11yModule"],
        _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_37__["BidiModule"],
        _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_35__["CdkAccordionModule"],
        _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_40__["ObserversModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_38__["OverlayModule"],
        _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_39__["PlatformModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_41__["PortalModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DemoMaterialModule, { exports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_33__["MatBottomSheetModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatTableModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_32__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_31__["MatBadgeModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__["MatSidenavModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_23__["MatSlideToggleModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_22__["MatSliderModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_24__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_25__["MatSortModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_30__["MatStepperModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_28__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_29__["MatTooltipModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_32__["MatNativeDateModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_34__["CdkTableModule"],
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_36__["A11yModule"],
        _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_37__["BidiModule"],
        _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_35__["CdkAccordionModule"],
        _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_40__["ObserversModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_38__["OverlayModule"],
        _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_39__["PlatformModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_41__["PortalModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DemoMaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                exports: [
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                    _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_33__["MatBottomSheetModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatTableModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__["MatPaginatorModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__["MatProgressBarModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__["MatProgressSpinnerModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__["MatRadioModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_32__["MatRippleModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_31__["MatBadgeModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__["MatSidenavModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_23__["MatSlideToggleModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_22__["MatSliderModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_24__["MatSnackBarModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_25__["MatSortModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_30__["MatStepperModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__["MatTabsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_28__["MatToolbarModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_29__["MatTooltipModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_32__["MatNativeDateModule"],
                    _angular_cdk_table__WEBPACK_IMPORTED_MODULE_34__["CdkTableModule"],
                    _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_36__["A11yModule"],
                    _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_37__["BidiModule"],
                    _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_35__["CdkAccordionModule"],
                    _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_40__["ObserversModule"],
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_38__["OverlayModule"],
                    _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_39__["PlatformModule"],
                    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_41__["PortalModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/interfaces/formulario.ts":
/*!******************************************!*\
  !*** ./src/app/interfaces/formulario.ts ***!
  \******************************************/
/*! exports provided: FormularioType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormularioType", function() { return FormularioType; });
var FormularioType;
(function (FormularioType) {
    FormularioType["agriculor"] = "agricultor";
    FormularioType["formularioLineaBase"] = "formularioLineaBase";
    FormularioType["formularioVerificacion"] = "formularioVerificacion";
})(FormularioType || (FormularioType = {}));


/***/ }),

/***/ "./src/app/interfaces/tecnico.ts":
/*!***************************************!*\
  !*** ./src/app/interfaces/tecnico.ts ***!
  \***************************************/
/*! exports provided: Permiso */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Permiso", function() { return Permiso; });
var Permiso;
(function (Permiso) {
    Permiso["Ficticio"] = "ficticio";
    Permiso["Real"] = "real";
})(Permiso || (Permiso = {}));


/***/ }),

/***/ "./src/app/layouts/blank/blank.component.ts":
/*!**************************************************!*\
  !*** ./src/app/layouts/blank/blank.component.ts ***!
  \**************************************************/
/*! exports provided: AppBlankComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBlankComponent", function() { return AppBlankComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/loading/loading.component */ "./src/app/shared/loading/loading.component.ts");
/* harmony import */ var _shared_spinner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/spinner.component */ "./src/app/shared/spinner.component.ts");






class AppBlankComponent {
}
AppBlankComponent.ɵfac = function AppBlankComponent_Factory(t) { return new (t || AppBlankComponent)(); };
AppBlankComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppBlankComponent, selectors: [["app-blank"]], decls: 4, vars: 0, template: function AppBlankComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-loading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavContainer"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__["LoadingComponent"], _shared_spinner_component__WEBPACK_IMPORTED_MODULE_4__["SpinnerComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppBlankComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-blank',
                templateUrl: './blank.component.html',
                styleUrls: []
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/layouts/full/breadcrumb/breadcrumb.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/layouts/full/breadcrumb/breadcrumb.component.ts ***!
  \*****************************************************************/
/*! exports provided: AppBreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBreadcrumbComponent", function() { return AppBreadcrumbComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function AppBreadcrumbComponent_ng_template_8_li_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const url_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", url_r1.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](url_r1.title);
} }
function AppBreadcrumbComponent_ng_template_8_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const url_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](url_r1.title);
} }
function AppBreadcrumbComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppBreadcrumbComponent_ng_template_8_li_0_Template, 3, 2, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppBreadcrumbComponent_ng_template_8_li_1_Template, 2, 1, "li", 9);
} if (rf & 2) {
    const last_r2 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !last_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", last_r2);
} }
class AppBreadcrumbComponent {
    constructor(router, activatedRoute, titleService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.titleService = titleService;
        // @Input() layout;
        this.pageInfo = Object.create(null);
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => this.activatedRoute))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(route => {
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(route => route.outlet === 'primary'))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(route => route.data))
            .subscribe(event => {
            this.titleService.setTitle(event['title']);
            this.pageInfo = event;
        });
    }
    ngOnInit() { }
}
AppBreadcrumbComponent.ɵfac = function AppBreadcrumbComponent_Factory(t) { return new (t || AppBreadcrumbComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"])); };
AppBreadcrumbComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppBreadcrumbComponent, selectors: [["app-breadcrumb"]], decls: 9, vars: 2, consts: [[1, "page-breadcrumb", "p-t-20", "p-b-20", "p-l-30", "p-r-30"], ["fxLayout", "row wrap"], ["fxFlex.gt-sm", "60", "fxFlex.gt-xs", "60", "fxFlex", "100", 1, "align-self-center"], [1, "page-title", "text-themecolor", "m-0"], ["fxFlex.gt-sm", "40", "fxFlex.gt-xs", "40", "fxFlex", "100", 1, "align-self-center"], [1, "breadcrumb", "d-flex", "align-items-center", "float-right", "float-sm-left"], [1, "list-style-none", "d-flex", "align-items-center"], ["ngFor", "", 3, "ngForOf"], ["class", "breadcrumb-item", 3, "routerLink", 4, "ngIf"], ["class", "breadcrumb-item active", 4, "ngIf"], [1, "breadcrumb-item", 3, "routerLink"], ["href", "javascript:void(0)"], [1, "breadcrumb-item", "active"]], template: function AppBreadcrumbComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AppBreadcrumbComponent_ng_template_8_Template, 2, 2, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pageInfo == null ? null : ctx.pageInfo.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pageInfo == null ? null : ctx.pageInfo.urls);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppBreadcrumbComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-breadcrumb',
                templateUrl: './breadcrumb.component.html',
                styleUrls: []
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] }]; }, null); })();


/***/ }),

/***/ "./src/app/layouts/full/full.component.ts":
/*!************************************************!*\
  !*** ./src/app/layouts/full/full.component.ts ***!
  \************************************************/
/*! exports provided: FullComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullComponent", function() { return FullComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
/* harmony import */ var _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/menu-items/menu-items */ "./src/app/shared/menu-items/menu-items.ts");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./header/header.component */ "./src/app/layouts/full/header/header.component.ts");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/layouts/full/sidebar/sidebar.component.ts");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./breadcrumb/breadcrumb.component */ "./src/app/layouts/full/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../shared/loading/loading.component */ "./src/app/shared/loading/loading.component.ts");
/* harmony import */ var _shared_spinner_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../shared/spinner.component */ "./src/app/shared/spinner.component.ts");
























const _c0 = function (a0, a1, a2, a3, a4, a5) { return { "minisidebar": a0, "boxed": a1, "danger": a2, "blue": a3, "green": a4, "dark": a5 }; };
const _c1 = function (a0) { return { "minisidebar": a0 }; };
/** @title Responsive sidenav */
class FullComponent {
    constructor(router, changeDetectorRef, media, menuItems) {
        this.router = router;
        this.menuItems = menuItems;
        this.dir = 'ltr';
        this.green = true;
        this.blue = false;
        this.dark = false;
        this.minisidebar = false;
        this.boxed = false;
        this.danger = false;
        this.showHide = false;
        this.url = '';
        this.sidebarOpened = false;
        this.status = false;
        this.showSearch = false;
        this.config = {};
        this.mobileQuery = media.matchMedia('(min-width: 768px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        // tslint:disable-next-line: deprecation
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    clickEvent() {
        this.status = !this.status;
    }
    ngOnDestroy() {
        // tslint:disable-next-line: deprecation
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
}
FullComponent.ɵfac = function FullComponent_Factory(t) { return new (t || FullComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["MediaMatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_3__["MenuItems"])); };
FullComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FullComponent, selectors: [["app-full-layout"]], decls: 49, vars: 23, consts: [[1, "main-container", 3, "dir", "ngClass"], ["color", "primary", 1, "topbar", "telative"], [1, "navbar-header"], ["href", "/", 1, "navbar-brand", 2, "display", "block !important"], ["fxShow", "false", "fxShow.gt-xs", ""], ["src", "assets/images/logo-text.png", "alt", "homepage", 1, "dark-logo"], ["src", "assets/images/logo-reducido.png", "alt", "homepage", 1, "light-logo"], ["mat-icon-button", "", "value", "sidebarclosed", 3, "click"], ["fxFlex", ""], [1, "example-sidenav-container", 3, "ngClass"], ["id", "snav", "fixedTopGap", "0", 1, "pl-xs", 3, "mode", "opened", "disableClose", "perfectScrollbar", "open", "close"], ["snav", ""], [1, "app-sidebar"], ["position", "end", "mode", "over", "opened", "false", 1, "chat-panel"], ["end", ""], [1, "scroll"], ["mat-subheader", "", 1, "text-uppercase", "font-weight-bold"], ["color", "warn", 3, "change"], ["color", "warn", 3, "ngModel", "ngModelChange"], ["color", "warn", 1, "text-danger", 3, "ngModel", "ngModelChange", "change"], ["color", "warn", 1, "text-megna", 3, "ngModel", "ngModelChange", "change"], ["color", "warn", 1, "text-info", 3, "ngModel", "ngModelChange", "change"], ["color", "warn", 3, "ngModel", "ngModelChange", "change"], [1, "page-wrapper"], [1, "page-content"]], template: function FullComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-sidenav-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-sidenav", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("open", function FullComponent_Template_mat_sidenav_open_13_listener() { return ctx.sidebarOpened = true; })("close", function FullComponent_Template_mat_sidenav_close_13_listener() { return ctx.sidebarOpened = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-sidebar", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-sidenav", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-slide-toggle", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FullComponent_Template_mat_slide_toggle_change_23_listener() { return ctx.dir = ctx.dir == "rtl" ? "ltr" : "rtl"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "RTL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-slide-toggle", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FullComponent_Template_mat_slide_toggle_ngModelChange_26_listener($event) { return ctx.boxed = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Boxed Layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Colors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-checkbox", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FullComponent_Template_mat_checkbox_ngModelChange_32_listener($event) { return ctx.danger = $event; })("change", function FullComponent_Template_mat_checkbox_change_32_listener() { return ctx.green = ctx.blue = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Red");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-checkbox", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FullComponent_Template_mat_checkbox_ngModelChange_35_listener($event) { return ctx.green = $event; })("change", function FullComponent_Template_mat_checkbox_change_35_listener() { return ctx.danger = ctx.blue = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Teal Green");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-checkbox", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FullComponent_Template_mat_checkbox_ngModelChange_38_listener($event) { return ctx.blue = $event; })("change", function FullComponent_Template_mat_checkbox_change_38_listener() { return ctx.green = ctx.danger = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Blue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-checkbox", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FullComponent_Template_mat_checkbox_ngModelChange_41_listener($event) { return ctx.dark = $event; })("change", function FullComponent_Template_mat_checkbox_change_41_listener() { return ctx.green = ctx.blue = ctx.danger = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Dark ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-sidenav-content", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "app-breadcrumb");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "app-loading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "app-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dir", ctx.dir)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction6"](14, _c0, ctx.minisidebar, ctx.boxed, ctx.danger, ctx.blue, ctx.green, ctx.dark));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("margin-top", ctx.mobileQuery.matches ? 0 : 0, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c1, ctx.minisidebar));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", ctx.mobileQuery.matches ? "side" : "over")("opened", ctx.mobileQuery.matches)("disableClose", ctx.mobileQuery.matches)("perfectScrollbar", ctx.config);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.boxed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.danger);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.green);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.blue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.dark);
    } }, directives: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Dir"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__["DefaultClassDirective"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbar"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__["DefaultShowHideDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultFlexDirective"], _header_header_component__WEBPACK_IMPORTED_MODULE_11__["AppHeaderComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenav"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13__["PerfectScrollbarDirective"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_14__["AppSidebarComponent"], _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListSubheaderCssMatStyler"], _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListItem"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__["MatSlideToggle"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["NgModel"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__["MatDivider"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__["MatCheckbox"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavContent"], _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_20__["AppBreadcrumbComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_21__["LoadingComponent"], _shared_spinner_component__WEBPACK_IMPORTED_MODULE_22__["SpinnerComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FullComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-full-layout',
                templateUrl: 'full.component.html',
                styleUrls: []
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["MediaMatcher"] }, { type: _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_3__["MenuItems"] }]; }, null); })();


/***/ }),

/***/ "./src/app/layouts/full/header/header.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/layouts/full/header/header.component.ts ***!
  \*********************************************************/
/*! exports provided: AppHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppHeaderComponent", function() { return AppHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_modules_core_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/core/services/auth/auth.service */ "./src/app/modules/core/services/auth/auth.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_modules_core_services_agriculor_agricultor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/core/services/agriculor/agricultor.service */ "./src/app/modules/core/services/agriculor/agricultor.service.ts");
/* harmony import */ var src_app_modules_core_services_formularios_formulario_linea_base_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modules/core/services/formularios/formulario-linea-base.service */ "./src/app/modules/core/services/formularios/formulario-linea-base.service.ts");
/* harmony import */ var src_app_modules_core_services_formularios_formulario_verificacion_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modules/core/services/formularios/formulario-verificacion.service */ "./src/app/modules/core/services/formularios/formulario-verificacion.service.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");











class AppHeaderComponent {
    constructor(authService, snackBar, router, agricultorService, lineaBaseService, verificacionService) {
        this.authService = authService;
        this.snackBar = snackBar;
        this.router = router;
        this.agricultorService = agricultorService;
        this.lineaBaseService = lineaBaseService;
        this.verificacionService = verificacionService;
    }
    logout() {
        this.authService.logOut()
            .then(() => {
            this.agricultorService.localData = undefined;
            this.lineaBaseService.localData = undefined;
            this.verificacionService.localData = undefined;
            this.router.navigate(['authentication']);
        })
            .catch((e) => {
            this.snackBar.open(e, 'Cerrar', {
                duration: 5000
            });
        });
    }
}
AppHeaderComponent.ɵfac = function AppHeaderComponent_Factory(t) { return new (t || AppHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_modules_core_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_modules_core_services_agriculor_agricultor_service__WEBPACK_IMPORTED_MODULE_4__["AgricultorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_modules_core_services_formularios_formulario_linea_base_service__WEBPACK_IMPORTED_MODULE_5__["FormularioLineaBaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_modules_core_services_formularios_formulario_verificacion_service__WEBPACK_IMPORTED_MODULE_6__["FormularioVerificacionService"])); };
AppHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppHeaderComponent, selectors: [["app-header"]], decls: 16, vars: 1, consts: [["mat-icon-button", "", 1, "m-r-5", 3, "matMenuTriggerFor"], ["src", "assets/images/users/logo-user2.png", "alt", "user", 1, "profile-pic"], [1, "mymegamenu"], ["profile", "matMenu"], ["mat-menu-item", ""], ["mat-menu-item", "", 3, "click"]], template: function AppHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-menu", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Configuraciones ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "account_box");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Perfil ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppHeaderComponent_Template_button_click_12_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "exit_to_app");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Cerrar Sesi\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuItem"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: []
            }]
    }], function () { return [{ type: src_app_modules_core_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: src_app_modules_core_services_agriculor_agricultor_service__WEBPACK_IMPORTED_MODULE_4__["AgricultorService"] }, { type: src_app_modules_core_services_formularios_formulario_linea_base_service__WEBPACK_IMPORTED_MODULE_5__["FormularioLineaBaseService"] }, { type: src_app_modules_core_services_formularios_formulario_verificacion_service__WEBPACK_IMPORTED_MODULE_6__["FormularioVerificacionService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/layouts/full/sidebar/sidebar.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/layouts/full/sidebar/sidebar.component.ts ***!
  \***********************************************************/
/*! exports provided: AppSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSidebarComponent", function() { return AppSidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
/* harmony import */ var _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/menu-items/menu-items */ "./src/app/shared/menu-items/menu-items.ts");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _shared_accordion_accordion_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/accordion/accordion.directive */ "./src/app/shared/accordion/accordion.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_accordion_accordionlink_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/accordion/accordionlink.directive */ "./src/app/shared/accordion/accordionlink.directive.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_accordion_accordionanchor_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/accordion/accordionanchor.directive */ "./src/app/shared/accordion/accordionanchor.directive.ts");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");














function AppSidebarComponent_mat_list_item_21_a_1_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const badge_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("label label-", badge_r10.type, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](badge_r10.value);
} }
const _c0 = function (a1) { return ["/", a1]; };
function AppSidebarComponent_mat_list_item_21_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppSidebarComponent_mat_list_item_21_a_1_span_6_Template, 2, 4, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuitem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, menuitem_r2.state));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menuitem_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menuitem_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", menuitem_r2.badge);
} }
function AppSidebarComponent_mat_list_item_21_a_2_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const badge_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("label label-", badge_r13.type, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](badge_r13.value);
} }
function AppSidebarComponent_mat_list_item_21_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppSidebarComponent_mat_list_item_21_a_2_span_6_Template, 2, 4, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuitem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", menuitem_r2.state, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menuitem_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menuitem_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", menuitem_r2.badge);
} }
function AppSidebarComponent_mat_list_item_21_a_3_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const badge_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("label label-", badge_r16.type, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](badge_r16.value);
} }
function AppSidebarComponent_mat_list_item_21_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppSidebarComponent_mat_list_item_21_a_3_span_6_Template, 2, 4, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuitem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", menuitem_r2.state, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menuitem_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menuitem_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", menuitem_r2.badge);
} }
function AppSidebarComponent_mat_list_item_21_a_4_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const badge_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("label label-", badge_r19.type, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](badge_r19.value);
} }
function AppSidebarComponent_mat_list_item_21_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppSidebarComponent_mat_list_item_21_a_4_span_6_Template, 2, 4, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "keyboard_arrow_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuitem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menuitem_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menuitem_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", menuitem_r2.badge);
} }
const _c1 = function (a1, a2) { return ["/", a1, a2]; };
function AppSidebarComponent_mat_list_item_21_mat_nav_list_5_mat_list_item_1_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppSidebarComponent_mat_list_item_21_mat_nav_list_5_mat_list_item_1_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const i_r25 = ctx_r29.childitem; const j_r24 = ctx_r29.index; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return (ctx_r27.itemSelect[i_r25] = j_r24); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const childitem_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const menuitem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c1, menuitem_r2.state, childitem_r23.state));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](childitem_r23.name);
} }
function AppSidebarComponent_mat_list_item_21_mat_nav_list_5_mat_list_item_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppSidebarComponent_mat_list_item_21_mat_nav_list_5_mat_list_item_1_a_1_Template, 2, 5, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const childitem_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", childitem_r23.type === "link");
} }
function AppSidebarComponent_mat_list_item_21_mat_nav_list_5_mat_list_item_2_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppSidebarComponent_mat_list_item_21_mat_nav_list_5_mat_list_item_2_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const i_r34 = ctx_r39.childitem; const j_r33 = ctx_r39.index; const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return (ctx_r37.itemSelect[i_r34] = j_r33); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "keyboard_arrow_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const j_r33 = ctx_r40.index;
    const i_r34 = ctx_r40.childitem;
    const childitem_r32 = ctx_r40.$implicit;
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", j_r33 == ctx_r35.itemSelect[i_r34] ? "selected" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](childitem_r32.name);
} }
const _c2 = function (a1, a2, a3) { return ["/", a1, a2, a3]; };
function AppSidebarComponent_mat_list_item_21_mat_nav_list_5_mat_list_item_2_mat_nav_list_2_mat_list_item_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const child_r42 = ctx.$implicit;
    const childitem_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const menuitem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](2, _c2, menuitem_r2.state, childitem_r32.state, child_r42.state));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](child_r42.name);
} }
function AppSidebarComponent_mat_list_item_21_mat_nav_list_5_mat_list_item_2_mat_nav_list_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-nav-list", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppSidebarComponent_mat_list_item_21_mat_nav_list_5_mat_list_item_2_mat_nav_list_2_mat_list_item_1_Template, 3, 6, "mat-list-item", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const childitem_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", childitem_r32.subchildren);
} }
function AppSidebarComponent_mat_list_item_21_mat_nav_list_5_mat_list_item_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppSidebarComponent_mat_list_item_21_mat_nav_list_5_mat_list_item_2_a_1_Template, 6, 2, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppSidebarComponent_mat_list_item_21_mat_nav_list_5_mat_list_item_2_mat_nav_list_2_Template, 2, 1, "mat-nav-list", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const childitem_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", childitem_r32.type === "subchild");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", childitem_r32.type === "subchild");
} }
function AppSidebarComponent_mat_list_item_21_mat_nav_list_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-nav-list", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppSidebarComponent_mat_list_item_21_mat_nav_list_5_mat_list_item_1_Template, 2, 1, "mat-list-item", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppSidebarComponent_mat_list_item_21_mat_nav_list_5_mat_list_item_2_Template, 3, 2, "mat-list-item", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuitem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", menuitem_r2.children);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", menuitem_r2.children);
} }
function AppSidebarComponent_mat_list_item_21_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuitem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menuitem_r2.name);
} }
function AppSidebarComponent_mat_list_item_21_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppSidebarComponent_mat_list_item_21_Template_mat_list_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r48.scrollToTop(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppSidebarComponent_mat_list_item_21_a_1_Template, 7, 6, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppSidebarComponent_mat_list_item_21_a_2_Template, 7, 4, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppSidebarComponent_mat_list_item_21_a_3_Template, 7, 4, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppSidebarComponent_mat_list_item_21_a_4_Template, 9, 3, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppSidebarComponent_mat_list_item_21_mat_nav_list_5_Template, 3, 2, "mat-nav-list", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppSidebarComponent_mat_list_item_21_div_6_Template, 3, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuitem_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("group", menuitem_r2.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuitem_r2.type === "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuitem_r2.type === "extLink");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuitem_r2.type === "extTabLink");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuitem_r2.type === "sub");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuitem_r2.type === "sub");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuitem_r2.type === "saperator");
} }
class AppSidebarComponent {
    constructor(changeDetectorRef, media, menuItems) {
        this.changeDetectorRef = changeDetectorRef;
        this.media = media;
        this.menuItems = menuItems;
        this.config = {};
        this.status = true;
        this.itemSelect = [];
        this.parentIndex = 0;
        this.childIndex = 0;
        this.mobileQuery = media.matchMedia('(min-width: 768px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        // tslint:disable-next-line: deprecation
        this.mobileQuery.addListener(this._mobileQueryListener);
        const loggedTecnico = JSON.parse(localStorage.getItem("user"));
        this.nameTecnico = loggedTecnico.nombre;
    }
    setClickedRow(i, j) {
        this.parentIndex = i;
        this.childIndex = j;
    }
    subclickEvent() {
        this.status = true;
    }
    scrollToTop() {
        var _a;
        (_a = document.querySelector('.page-wrapper')) === null || _a === void 0 ? void 0 : _a.scroll({
            top: 0,
            left: 0
        });
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        // tslint:disable-next-line: deprecation
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
}
AppSidebarComponent.ɵfac = function AppSidebarComponent_Factory(t) { return new (t || AppSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["MediaMatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_2__["MenuItems"])); };
AppSidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppSidebarComponent, selectors: [["app-sidebar"]], decls: 22, vars: 2, consts: [[1, "user-profile", "text-center"], ["src", "assets/images/users/logo-user.png", "alt", "user", 1, "img-fluid", 2, "max-width", "140px"], [1, "profile-text"], [1, ""], [1, "mymegamenu"], ["sdprofile", "matMenu"], ["mat-menu-item", ""], ["appAccordion", ""], ["appAccordionLink", "", "routerLinkActive", "selected", 3, "group", "click", 4, "ngFor", "ngForOf"], ["appAccordionLink", "", "routerLinkActive", "selected", 3, "group", "click"], ["class", "", "appAccordionToggle", "", 3, "routerLink", 4, "ngIf"], ["class", "", "appAccordionToggle", "", 3, "href", 4, "ngIf"], ["class", "", "appAccordionToggle", "", "target", "_blank", 3, "href", 4, "ngIf"], ["class", "", "appAccordionToggle", "", "href", "javascript:;", 4, "ngIf"], ["class", "sub-item", 4, "ngIf"], ["class", "saperator text-muted", 4, "ngIf"], ["appAccordionToggle", "", 1, "", 3, "routerLink"], ["fxFlex", ""], [3, "class", 4, "ngFor", "ngForOf"], ["appAccordionToggle", "", 1, "", 3, "href"], ["appAccordionToggle", "", "target", "_blank", 1, "", 3, "href"], ["appAccordionToggle", "", "href", "javascript:;", 1, ""], [1, "dd-icon"], [1, "sub-item"], ["routerLinkActive", "selected", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], ["routerLinkActive", "selected"], ["class", "relative", "routerLinkActive", "selected", 3, "routerLink", "click", 4, "ngIf"], ["routerLinkActive", "selected", 1, "relative", 3, "routerLink", "click"], ["class", "", "href", "javascript: void(0);", 3, "ngClass", "click", 4, "ngIf"], ["class", "child-sub-item", 4, "ngIf"], ["href", "javascript: void(0);", 1, "", 3, "ngClass", "click"], [1, "child-sub-item"], ["routerLinkActive", "selected", 3, "routerLink"], [1, "saperator", "text-muted"]], template: function AppSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-menu", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Configruaciones ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "account_box");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Perfil ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "exit_to_app");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Cerrar Sesi\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-nav-list", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AppSidebarComponent_mat_list_item_21_Template, 7, 7, "mat-list-item", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.nameTecnico, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menuItems.getMenuitem());
    } }, directives: [_angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuItem"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatNavList"], _shared_accordion_accordion_directive__WEBPACK_IMPORTED_MODULE_6__["AccordionDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListItem"], _shared_accordion_accordionlink_directive__WEBPACK_IMPORTED_MODULE_8__["AccordionLinkDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkWithHref"], _shared_accordion_accordionanchor_directive__WEBPACK_IMPORTED_MODULE_10__["AccordionAnchorDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__["DefaultClassDirective"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppSidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidebar',
                templateUrl: './sidebar.component.html',
                styleUrls: []
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["MediaMatcher"] }, { type: _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_2__["MenuItems"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/core/core.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/core/core.module.ts ***!
  \*********************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



class CoreModule {
}
CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/core/guards/auth-guard.guard.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/core/guards/auth-guard.guard.ts ***!
  \*********************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth/auth.service */ "./src/app/modules/core/services/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        let url = state.url;
        return this.authService.hasUser().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(user => {
            if (user === null) {
                this.router.navigate(['authentication']);
                return false;
            }
            else {
                return true;
            }
        }));
    }
    canActivateChild(next, state) {
        return this.canActivate(next, state);
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/core/services/agriculor/agricultor.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/core/services/agriculor/agricultor.service.ts ***!
  \***********************************************************************/
/*! exports provided: AgricultorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgricultorService", function() { return AgricultorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_interfaces_formulario__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/interfaces/formulario */ "./src/app/interfaces/formulario.ts");
/* harmony import */ var src_app_interfaces_tecnico__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/interfaces/tecnico */ "./src/app/interfaces/tecnico.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _exportaciones_exportaciones_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../exportaciones/exportaciones.service */ "./src/app/modules/core/services/exportaciones/exportaciones.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");











class AgricultorService {
    constructor(firebase, exportacionService, http) {
        this.firebase = firebase;
        this.exportacionService = exportacionService;
        this.http = http;
    }
    initData() {
        this.localData = this.list();
    }
    list() {
        const loggedTecnico = JSON.parse(localStorage.getItem("user"));
        const collectionName = loggedTecnico.permiso === src_app_interfaces_tecnico__WEBPACK_IMPORTED_MODULE_4__["Permiso"].Real ? "agricultores" : "agricultoresFicticios";
        return this.firebase.collection(collectionName).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(agricultores => {
            return agricultores.map((agricultor) => {
                return agricultor.payload.doc.data();
            });
        }));
    }
    set(agricultor) {
        return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (agricultor.id === '' || agricultor.id === undefined) {
                agricultor.id = this.firebase.createId();
                yield this.create(agricultor);
            }
            else {
                yield this.setWithPermiso(agricultor);
            }
            resolve();
        }));
    }
    create(agricultor) {
        return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.firebase.collection("agricultores").doc(agricultor.id).set(agricultor);
            yield this.firebase.collection("agricultoresFicticios").doc(agricultor.id).set(agricultor);
            resolve();
        }));
    }
    setWithPermiso(agricultor) {
        return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loggedTecnico = JSON.parse(localStorage.getItem("user"));
            const collectionName = loggedTecnico.permiso === src_app_interfaces_tecnico__WEBPACK_IMPORTED_MODULE_4__["Permiso"].Real ? "agricultores" : "agricultoresFicticios";
            yield this.firebase.collection(collectionName).doc(agricultor.id).set(agricultor);
            resolve();
        }));
    }
    delete(agricultor) {
        return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.firebase.firestore.runTransaction((transaction) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    const docRefReal = this.firebase.firestore.collection("agricultores").doc(agricultor.id);
                    transaction.delete(docRefReal);
                    const docRefFicticio = this.firebase.firestore.collection("agricultoresFicticios").doc(agricultor.id);
                    transaction.delete(docRefFicticio);
                    return Promise.resolve();
                }));
                resolve("Agricultor eliminado correctamente");
            }
            catch (e) {
                console.log(e);
                reject("Ha ocurrido un error");
            }
        }));
    }
    get(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loggedTecnico = JSON.parse(localStorage.getItem("user"));
            const collectionName = loggedTecnico.permiso === src_app_interfaces_tecnico__WEBPACK_IMPORTED_MODULE_4__["Permiso"].Real ? "agricultores" : "agricultoresFicticios";
            try {
                const docRef = this.firebase.firestore.collection(collectionName).doc(id);
                const agricultor = (yield docRef.get()).data();
                return agricultor;
            }
            catch (e) {
                console.log(e);
                throw e;
            }
        });
    }
    getAll() {
        return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const loggedTecnico = JSON.parse(localStorage.getItem("user"));
                const collectionName = loggedTecnico.permiso === src_app_interfaces_tecnico__WEBPACK_IMPORTED_MODULE_4__["Permiso"].Real ? "agricultores" : "agricultoresFicticios";
                const agricultores = [];
                const collRef = this.firebase.firestore.collection(collectionName);
                const agricultoresData = (yield collRef.get()).docs;
                for (const agricultor of agricultoresData) {
                    agricultores.push(agricultor.data()["diccionario"]);
                }
                resolve(agricultores);
            }
            catch (e) {
                reject(e);
            }
        }));
    }
    export(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const agricultor = yield this.get(id);
                const result = yield this.exportacionService.exportFormulario(agricultor, src_app_interfaces_formulario__WEBPACK_IMPORTED_MODULE_3__["FormularioType"].agriculor);
            }
            catch (error) {
                console.log(error);
                throw error;
            }
        });
    }
    exportAll() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const agricultores = yield this.localData.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).toPromise();
                const result = yield this.exportacionService.exportAllAgricultores(agricultores, src_app_interfaces_formulario__WEBPACK_IMPORTED_MODULE_3__["FormularioType"].agriculor);
            }
            catch (error) {
                console.log(error);
                throw error;
            }
        });
    }
    descargarVerificacion(codigo, nombre, fechaVisita) {
        var mediaType = 'application/xlsx';
        return new Promise((resolve) => {
            this.http
                .get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/formulario/export/verificacion/${codigo}`, { responseType: 'blob' })
                .subscribe((response) => {
                var blob = new Blob([response], { type: mediaType });
                Object(file_saver__WEBPACK_IMPORTED_MODULE_6__["saveAs"])(blob, 'Monitoreo_' + nombre + "_" + fechaVisita + '.xlsx');
                // console.log(response.data)
                resolve([true, response.data]);
            }, (error) => {
                resolve([false, "Error al exportar excel"]);
            });
        });
    }
    descargarLineaBase(codigo, nombre, fechaVisita) {
        var mediaType = 'application/xlsx';
        return new Promise((resolve) => {
            this.http
                .get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/formulario/export/lineabase/${codigo}`, { responseType: 'blob' })
                .subscribe((response) => {
                var blob = new Blob([response], { type: mediaType });
                Object(file_saver__WEBPACK_IMPORTED_MODULE_6__["saveAs"])(blob, 'LineaBase_' + nombre + "_" + fechaVisita + '.xlsx');
                // console.log(response.data)
                resolve([true, response.data]);
            }, (error) => {
                resolve([false, "Error al exportar excel"]);
            });
        });
    }
}
AgricultorService.ɵfac = function AgricultorService_Factory(t) { return new (t || AgricultorService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_exportaciones_exportaciones_service__WEBPACK_IMPORTED_MODULE_8__["ExportacionesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"])); };
AgricultorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AgricultorService, factory: AgricultorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgricultorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"] }, { type: _exportaciones_exportaciones_service__WEBPACK_IMPORTED_MODULE_8__["ExportacionesService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/core/services/auth/auth.service.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/core/services/auth/auth.service.ts ***!
  \************************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.esm.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class AuthService {
    constructor(firebaseAuth, router) {
        this.firebaseAuth = firebaseAuth;
        this.router = router;
    }
    setPersistance() {
        return this.firebaseAuth.setPersistence(firebase_app__WEBPACK_IMPORTED_MODULE_1__["default"].auth.Auth.Persistence.SESSION);
    }
    signIn(email, password) {
        return this.firebaseAuth.signInWithEmailAndPassword(email, password);
    }
    signUp(email, password) {
        return this.firebaseAuth.createUserWithEmailAndPassword(email, password);
    }
    // AUN SIN USO
    autoLogout(expirationTimeInMinutes) {
        const timeInMiliseconds = expirationTimeInMinutes * 60 * 1000;
        setTimeout(() => {
            this.logOut();
        }, 5000);
    }
    logOut() {
        localStorage.clear();
        this.router.navigate(['/authentication', 'login']);
        return this.firebaseAuth.signOut();
    }
    hasUser() {
        return this.firebaseAuth.authState;
    }
    getUser() {
        return this.firebaseAuth.user;
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/core/services/exportaciones/exportaciones.service.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/core/services/exportaciones/exportaciones.service.ts ***!
  \******************************************************************************/
/*! exports provided: ExportacionesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportacionesService", function() { return ExportacionesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_interfaces_formulario__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/interfaces/formulario */ "./src/app/interfaces/formulario.ts");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_environments_mappers_formularioLineaBase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/mappers/formularioLineaBase */ "./src/environments/mappers/formularioLineaBase.ts");
/* harmony import */ var src_environments_mappers_formularioVerificacion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/mappers/formularioVerificacion */ "./src/environments/mappers/formularioVerificacion.ts");
/* harmony import */ var src_environments_mappers_agricultor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/mappers/agricultor */ "./src/environments/mappers/agricultor.ts");








class ExportacionesService {
    constructor() { }
    exportFormulario(formulario, formularioType) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const dataFormulario = yield this.prepareOneDataRecursive(formulario);
                const header = this.mapHeader(dataFormulario, formularioType);
                const arrayDataFormulario = [dataFormulario];
                const indiceMaximo = this.maxFormularioKeys(arrayDataFormulario);
                const csvArray = yield this.generateCSVArray(arrayDataFormulario, header, indiceMaximo);
                const blob = new Blob([csvArray], { type: 'text/csv' });
                Object(file_saver__WEBPACK_IMPORTED_MODULE_3__["saveAs"])(blob, `${formularioType}_${formulario["id"]}.csv`);
                return true;
            }
            catch (error) {
                console.log(error);
                throw error;
            }
        });
    }
    exportarAllFormularios(formularios, formularioType) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const dataFormulario = yield this.prepareAllDataRecursive(formularios);
                const indiceMaximo = this.maxFormularioKeys(dataFormulario);
                const header = this.mapHeader(dataFormulario[indiceMaximo], formularioType);
                const csvArray = yield this.generateCSVArray(dataFormulario, header, indiceMaximo);
                const blob = new Blob([csvArray], { type: 'text/csv' });
                Object(file_saver__WEBPACK_IMPORTED_MODULE_3__["saveAs"])(blob, `${formularioType}_TODOS.csv`);
                return true;
            }
            catch (error) {
                console.log(error);
                throw error;
            }
        });
    }
    exportAllAgricultores(agricultores, formularioType) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const dataFormulario = yield this.prepareAllDataRecursiveAgricultor(agricultores);
                const indiceMaximo = this.maxFormularioKeys(dataFormulario);
                const header = this.mapHeader(dataFormulario[indiceMaximo], formularioType);
                const csvArrayText = yield this.generateCSVArray(dataFormulario, header, indiceMaximo);
                const blob = new Blob([csvArrayText], { type: 'text/csv' });
                Object(file_saver__WEBPACK_IMPORTED_MODULE_3__["saveAs"])(blob, `${formularioType}_TODOS.csv`);
                return true;
            }
            catch (error) {
                console.log(error);
                throw error;
            }
        });
    }
    generateCSVArray(dataFormulario, header, indiceMaximo) {
        return new Promise((resolve, reject) => {
            const replacer = (key, value) => value === null ? 'N/A' : value; // specify how you want to handle null values here
            const headerData = indiceMaximo !== undefined ? Object.keys(dataFormulario[indiceMaximo]) : Object.keys(dataFormulario);
            const title = 'Formulario exportado a CSV';
            const csv = dataFormulario.map(row => headerData.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(';'));
            csv.unshift(header.join(';'));
            csv.unshift(title);
            const csvArray = csv.join('\r\n');
            resolve(csvArray);
        });
    }
    mapHeader(object, formularioType) {
        try {
            const formularioMapperBlank = this.pickMapper(formularioType);
            const header = Object.keys(object);
            let arrayHeaders = [];
            for (let key of header) {
                if (formularioMapperBlank[key] !== undefined) {
                    arrayHeaders.push(formularioMapperBlank[key].codigo);
                }
                else if (key === 'id' || key === 'nombre' || key === 'idformulario' || key === 'tecnico' || key === 'fechaVisita') {
                    arrayHeaders.push(key.toUpperCase());
                }
            }
            return arrayHeaders;
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }
    pickMapper(formularioType) {
        let formularioMapperBlank;
        switch (formularioType) {
            case src_app_interfaces_formulario__WEBPACK_IMPORTED_MODULE_2__["FormularioType"].agriculor:
                formularioMapperBlank = src_environments_mappers_agricultor__WEBPACK_IMPORTED_MODULE_6__["agricultorMapper"];
                break;
            case src_app_interfaces_formulario__WEBPACK_IMPORTED_MODULE_2__["FormularioType"].formularioLineaBase:
                formularioMapperBlank = src_environments_mappers_formularioLineaBase__WEBPACK_IMPORTED_MODULE_4__["formularioLineaBaseMapper"];
                break;
            case src_app_interfaces_formulario__WEBPACK_IMPORTED_MODULE_2__["FormularioType"].formularioVerificacion:
                formularioMapperBlank = src_environments_mappers_formularioVerificacion__WEBPACK_IMPORTED_MODULE_5__["formularioVerificacionMapper"];
                break;
            default:
                break;
        }
        return formularioMapperBlank;
    }
    maxFormularioKeys(listaFormularios) {
        let arrayCantidadKeys = [];
        for (let value of listaFormularios) {
            arrayCantidadKeys.push(Object.keys(value).length);
        }
        let maxKeys = Math.max(...arrayCantidadKeys);
        let indx = arrayCantidadKeys.indexOf(maxKeys);
        return indx;
    }
    prepareAllDataRecursive(formularios) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let dataFormulario = [];
            for (let formulario of formularios) {
                const element = {
                    idformulario: formulario["id"],
                    id: formulario["agricultor"]["id"],
                    nombre: formulario["agricultor"]["secciones"]["datosPersonales"]["preguntas"]["nombre"]["respuesta"],
                    tecnico: formulario["tecnico"]["nombre"],
                    fechaVisita: formulario["fechaVisita"],
                };
                let objSeccion = formulario["secciones"];
                for (let nombreSeccion in objSeccion) {
                    this.planObjectRecursive(objSeccion[nombreSeccion], element);
                }
                dataFormulario.push(element);
            }
            return dataFormulario;
        });
    }
    prepareAllDataRecursiveAgricultor(agricultores) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let dataFormulario = [];
            for (let data of agricultores) {
                const element = {
                    id: data["id"]
                };
                let objSeccion = data["secciones"];
                for (let nombreSeccion in objSeccion) {
                    this.planObjectRecursive(objSeccion[nombreSeccion], element);
                }
                dataFormulario.push(element);
            }
            return dataFormulario;
        });
    }
    planObjectRecursive(object, element) {
        for (let nombrePregunta in object['preguntas']) {
            if (Array.isArray(object['preguntas'][nombrePregunta]['respuesta'])) {
                let arrayString = object['preguntas'][nombrePregunta]['respuesta'].toString();
                element[nombrePregunta] = arrayString;
            }
            else if (object['preguntas'][nombrePregunta]['arreglo'] !== undefined) {
                let contador = 1;
                for (let objDinamico of object['preguntas'][nombrePregunta]['arreglo']) {
                    for (let keyObjetoDinamico in objDinamico) {
                        element[keyObjetoDinamico + contador] = objDinamico[keyObjetoDinamico]['respuesta'];
                    }
                    contador++;
                }
            }
            else {
                element[nombrePregunta] = object['preguntas'][nombrePregunta]['respuesta'];
            }
            if (object['preguntas'][nombrePregunta]['preguntas'] !== undefined) {
                this.planObjectRecursive(object['preguntas'][nombrePregunta], element);
            }
        }
        for (let nombreSeccion in object['secciones']) {
            let newSeccionObj = object['secciones'][nombreSeccion];
            this.planObjectRecursive(newSeccionObj, element);
        }
    }
    prepareOneDataRecursive(formulario) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const dataFormulario = {
                idformulario: formulario["id"],
                id: formulario["agricultor"]["id"],
                nombre: formulario["agricultor"]["secciones"]["datosPersonales"]["preguntas"]["nombre"]["respuesta"],
                tecnico: formulario["tecnico"]["nombre"],
                fechaVisita: formulario["fechaVisita"],
            };
            let objSeccion = formulario["secciones"];
            for (let nombreSeccion in objSeccion) {
                this.planObjectRecursive(objSeccion[nombreSeccion], dataFormulario);
            }
            return dataFormulario;
        });
    }
}
ExportacionesService.ɵfac = function ExportacionesService_Factory(t) { return new (t || ExportacionesService)(); };
ExportacionesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ExportacionesService, factory: ExportacionesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExportacionesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/core/services/formularios/formulario-linea-base.service.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/core/services/formularios/formulario-linea-base.service.ts ***!
  \************************************************************************************/
/*! exports provided: FormularioLineaBaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormularioLineaBaseService", function() { return FormularioLineaBaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_interfaces_formulario__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/interfaces/formulario */ "./src/app/interfaces/formulario.ts");
/* harmony import */ var _formulario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./formulario.service */ "./src/app/modules/core/services/formularios/formulario.service.ts");
/* harmony import */ var src_app_interfaces_tecnico__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/interfaces/tecnico */ "./src/app/interfaces/tecnico.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _exportaciones_exportaciones_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../exportaciones/exportaciones.service */ "./src/app/modules/core/services/exportaciones/exportaciones.service.ts");









class FormularioLineaBaseService extends _formulario_service__WEBPACK_IMPORTED_MODULE_4__["FormularioService"] {
    constructor(firebase, exportacionService) {
        super(firebase);
        this.firebase = firebase;
        this.exportacionService = exportacionService;
    }
    get(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loggedTecnico = JSON.parse(localStorage.getItem("user"));
            const collectionName = loggedTecnico.permiso === src_app_interfaces_tecnico__WEBPACK_IMPORTED_MODULE_5__["Permiso"].Real ? "formularios" : "formulariosFicticios";
            return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const docRef = this.firebase.firestore.collection(`/${collectionName}/lineaBase/diccionarios`).doc(id);
                const formulario = (yield docRef.get()).data()["diccionario"];
                resolve(formulario);
            }));
        });
    }
    list() {
        const loggedTecnico = JSON.parse(localStorage.getItem("user"));
        const collectionName = loggedTecnico.permiso === src_app_interfaces_tecnico__WEBPACK_IMPORTED_MODULE_5__["Permiso"].Real ? "formularios" : "formulariosFicticios";
        return this.firebase.collection(`/${collectionName}/lineaBase/estructuras`).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((formularios) => {
            return formularios.map((formulario) => {
                return formulario.payload.doc.data();
            });
        }));
    }
    listByAgricultor(agricultorId) {
        const loggedTecnico = JSON.parse(localStorage.getItem("user"));
        const collectionName = loggedTecnico.permiso === src_app_interfaces_tecnico__WEBPACK_IMPORTED_MODULE_5__["Permiso"].Real ? "formularios" : "formulariosFicticios";
        return this.firebase.collection(`/${collectionName}/lineaBase/estructuras`, ref => ref.where('agricultorId', '==', agricultorId))
            .snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((formularios) => {
            return formularios.map((formulario) => {
                return formulario.payload.doc.data();
            });
        }));
    }
    getAllFormularios() {
        const loggedTecnico = JSON.parse(localStorage.getItem("user"));
        const collectionName = loggedTecnico.permiso === src_app_interfaces_tecnico__WEBPACK_IMPORTED_MODULE_5__["Permiso"].Real ? "formularios" : "formulariosFicticios";
        return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const formularios = [];
                const collRef = this.firebase.firestore.collection(`/${collectionName}/lineaBase/diccionarios`);
                const formulariosData = (yield collRef.get()).docs;
                for (const formulario of formulariosData) {
                    formularios.push(formulario.data()["diccionario"]);
                }
                resolve(formularios);
            }
            catch (e) {
                reject(e);
            }
        }));
    }
    set(item) {
        const formularioLineaBase = item;
        return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (formularioLineaBase.id === "" || formularioLineaBase.id === undefined) {
                formularioLineaBase.id = this.firebase.createId();
                yield this.create(formularioLineaBase);
            }
            else {
                yield this.setWithPermiso(formularioLineaBase);
            }
            resolve();
        }));
    }
    create(formularioLineaBase) {
        return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.setWithPermiso(formularioLineaBase, src_app_interfaces_tecnico__WEBPACK_IMPORTED_MODULE_5__["Permiso"].Real);
                yield this.setWithPermiso(formularioLineaBase, src_app_interfaces_tecnico__WEBPACK_IMPORTED_MODULE_5__["Permiso"].Ficticio);
                resolve();
            }
            catch (e) {
                console.log(e);
                throw (e);
            }
        }));
    }
    setWithPermiso(formularioLineaBase, codedPermiso) {
        return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const loggedTecnico = JSON.parse(localStorage.getItem("user"));
                const permiso = codedPermiso ? codedPermiso : loggedTecnico.permiso;
                const collectionName = permiso === src_app_interfaces_tecnico__WEBPACK_IMPORTED_MODULE_5__["Permiso"].Real ? "formularios" : "formulariosFicticios";
                yield this.firebase.collection(`/${collectionName}/lineaBase/diccionarios`).doc(formularioLineaBase.id).set({
                    id: formularioLineaBase.id,
                    diccionario: formularioLineaBase
                });
                yield this.firebase.firestore.collection(`/${collectionName}/lineaBase/estructuras`).doc(formularioLineaBase.id).set({
                    id: formularioLineaBase.id,
                    agricultor: formularioLineaBase.agricultor.secciones.datosPersonales.preguntas.nombre.respuesta,
                    agricultorId: formularioLineaBase.agricultor.id,
                    fechaVisita: formularioLineaBase.fechaVisita,
                    tecnico: formularioLineaBase.tecnico.nombre
                });
                resolve();
            }
            catch (e) {
                console.log(e);
                throw (e);
            }
        }));
    }
    delete(formulario) {
        return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.firebase.firestore.runTransaction((transaction) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    const docRefEstructuraReal = this.firebase.firestore.collection("/formularios/lineaBase/estructuras").doc(formulario.id);
                    transaction.delete(docRefEstructuraReal);
                    const docRefEstructuraFicticio = this.firebase.firestore.collection("/formulariosFicticios/lineaBase/estructuras").doc(formulario.id);
                    transaction.delete(docRefEstructuraFicticio);
                    const docRefReal = this.firebase.firestore.collection("/formularios/lineaBase/diccionarios").doc(formulario.id);
                    transaction.delete(docRefReal);
                    const docRefFicticio = this.firebase.firestore.collection("/formulariosFicticios/lineaBase/diccionarios").doc(formulario.id);
                    transaction.delete(docRefFicticio);
                    return Promise.resolve();
                }));
                resolve("Formulario de linea base eliminado correctamente");
            }
            catch (e) {
                console.log(e);
                reject("Ha ocurrido un error");
            }
        }));
    }
    export(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const formulario = yield this.get(id);
                const result = yield this.exportacionService.exportFormulario(formulario, src_app_interfaces_formulario__WEBPACK_IMPORTED_MODULE_3__["FormularioType"].formularioLineaBase);
            }
            catch (error) {
                console.log(error);
                throw error;
            }
        });
    }
    exportAll() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                // const formularios = await this.localData.pipe(take(1)).toPromise();
                const formularios = yield this.getAllFormularios();
                const result = yield this.exportacionService.exportarAllFormularios(formularios, src_app_interfaces_formulario__WEBPACK_IMPORTED_MODULE_3__["FormularioType"].formularioLineaBase);
            }
            catch (error) {
                console.log(error);
                throw error;
            }
        });
    }
}
FormularioLineaBaseService.ɵfac = function FormularioLineaBaseService_Factory(t) { return new (t || FormularioLineaBaseService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_exportaciones_exportaciones_service__WEBPACK_IMPORTED_MODULE_7__["ExportacionesService"])); };
FormularioLineaBaseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FormularioLineaBaseService, factory: FormularioLineaBaseService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FormularioLineaBaseService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"] }, { type: _exportaciones_exportaciones_service__WEBPACK_IMPORTED_MODULE_7__["ExportacionesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/core/services/formularios/formulario-verificacion.service.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/core/services/formularios/formulario-verificacion.service.ts ***!
  \**************************************************************************************/
/*! exports provided: FormularioVerificacionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormularioVerificacionService", function() { return FormularioVerificacionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_interfaces_formulario__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/interfaces/formulario */ "./src/app/interfaces/formulario.ts");
/* harmony import */ var src_app_interfaces_tecnico__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/interfaces/tecnico */ "./src/app/interfaces/tecnico.ts");
/* harmony import */ var _formulario_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./formulario.service */ "./src/app/modules/core/services/formularios/formulario.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _exportaciones_exportaciones_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../exportaciones/exportaciones.service */ "./src/app/modules/core/services/exportaciones/exportaciones.service.ts");









class FormularioVerificacionService extends _formulario_service__WEBPACK_IMPORTED_MODULE_5__["FormularioService"] {
    constructor(firebase, exportacionService) {
        super(firebase);
        this.firebase = firebase;
        this.exportacionService = exportacionService;
    }
    get(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loggedTecnico = JSON.parse(localStorage.getItem("user"));
            const collectionName = loggedTecnico.permiso === src_app_interfaces_tecnico__WEBPACK_IMPORTED_MODULE_4__["Permiso"].Real ? "formularios" : "formulariosFicticios";
            return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const docRef = this.firebase.firestore.collection(`/${collectionName}/verificacion/diccionarios`).doc(id);
                const formulario = (yield docRef.get()).data()["diccionario"];
                resolve(formulario);
            }));
        });
    }
    list() {
        const loggedTecnico = JSON.parse(localStorage.getItem("user"));
        const collectionName = loggedTecnico.permiso === src_app_interfaces_tecnico__WEBPACK_IMPORTED_MODULE_4__["Permiso"].Real ? "formularios" : "formulariosFicticios";
        return this.firebase.collection(`/${collectionName}/verificacion/estructuras`).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(formularios => {
            return formularios.map((formulario) => {
                return formulario.payload.doc.data();
            });
        }));
    }
    listByAgricultor(agricultorId) {
        const loggedTecnico = JSON.parse(localStorage.getItem("user"));
        const collectionName = loggedTecnico.permiso === src_app_interfaces_tecnico__WEBPACK_IMPORTED_MODULE_4__["Permiso"].Real ? "formularios" : "formulariosFicticios";
        return this.firebase.collection(`/${collectionName}/verificacion/estructuras`, ref => ref.where('agricultorId', '==', agricultorId))
            .snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(formularios => {
            return formularios.map((formulario) => {
                return formulario.payload.doc.data();
            });
        }));
    }
    getAllFormularios() {
        const loggedTecnico = JSON.parse(localStorage.getItem("user"));
        const collectionName = loggedTecnico.permiso === src_app_interfaces_tecnico__WEBPACK_IMPORTED_MODULE_4__["Permiso"].Real ? "formularios" : "formulariosFicticios";
        return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const formularios = [];
                const collRef = this.firebase.firestore.collection(`/${collectionName}/verificacion/diccionarios`);
                const formulariosData = (yield collRef.get()).docs;
                for (const formulario of formulariosData) {
                    formularios.push(formulario.data()["diccionario"]);
                }
                resolve(formularios);
            }
            catch (e) {
                reject(e);
            }
        }));
    }
    set(item) {
        const formularioVerificacion = item;
        return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (formularioVerificacion.id === "" || formularioVerificacion.id === undefined) {
                formularioVerificacion.id = this.firebase.createId();
                yield this.create(formularioVerificacion);
            }
            else {
                yield this.setWithPermiso(formularioVerificacion);
            }
            resolve();
        }));
    }
    create(formularioVerificacion) {
        return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.setWithPermiso(formularioVerificacion, src_app_interfaces_tecnico__WEBPACK_IMPORTED_MODULE_4__["Permiso"].Real);
                yield this.setWithPermiso(formularioVerificacion, src_app_interfaces_tecnico__WEBPACK_IMPORTED_MODULE_4__["Permiso"].Ficticio);
                resolve();
            }
            catch (e) {
                console.log(e);
                throw (e);
            }
        }));
    }
    setWithPermiso(formularioVerificacion, codedPermiso) {
        return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const loggedTecnico = JSON.parse(localStorage.getItem("user"));
                const permiso = codedPermiso ? codedPermiso : loggedTecnico.permiso;
                let collectionName = permiso === src_app_interfaces_tecnico__WEBPACK_IMPORTED_MODULE_4__["Permiso"].Real ? "formularios" : "formulariosFicticios";
                yield this.firebase.collection(`/${collectionName}/verificacion/diccionarios`).doc(formularioVerificacion.id).set({
                    id: formularioVerificacion.id,
                    diccionario: formularioVerificacion
                });
                yield this.firebase.firestore.collection(`/${collectionName}/verificacion/estructuras`).doc(formularioVerificacion.id).set({
                    id: formularioVerificacion.id,
                    agricultor: formularioVerificacion.agricultor.secciones.datosPersonales.preguntas.nombre.respuesta,
                    agricultorId: formularioVerificacion.agricultor.id,
                    fechaVisita: formularioVerificacion.fechaVisita,
                    tecnico: formularioVerificacion.tecnico.nombre
                });
                resolve();
            }
            catch (e) {
                console.log(e);
                throw (e);
            }
        }));
    }
    delete(formulario) {
        return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.firebase.firestore.runTransaction((transaction) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    const docRefEstructuraReal = this.firebase.firestore.collection("/formularios/verificacion/estructuras").doc(formulario.id);
                    transaction.delete(docRefEstructuraReal);
                    const docRefEstructuraFicticio = this.firebase.firestore.collection("/formulariosFicticios/verificacion/estructuras").doc(formulario.id);
                    transaction.delete(docRefEstructuraFicticio);
                    const docRefReal = this.firebase.firestore.collection("/formularios/verificacion/diccionarios").doc(formulario.id);
                    transaction.delete(docRefReal);
                    const docRefFicticio = this.firebase.firestore.collection("/formulariosFicticios/verificacion/diccionarios").doc(formulario.id);
                    transaction.delete(docRefFicticio);
                    return Promise.resolve();
                }));
                resolve("Formulario de verificacion eliminado correctamente");
            }
            catch (e) {
                console.log(e);
                reject("Ha ocurrido un error");
            }
        }));
    }
    export(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const formulario = yield this.get(id);
                const result = yield this.exportacionService.exportFormulario(formulario, src_app_interfaces_formulario__WEBPACK_IMPORTED_MODULE_3__["FormularioType"].formularioVerificacion);
            }
            catch (error) {
                console.log(error);
                throw error;
            }
        });
    }
    exportAll() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                // const formularios = await this.localData.pipe(take(1)).toPromise();
                const formularios = yield this.getAllFormularios();
                const result = yield this.exportacionService.exportarAllFormularios(formularios, src_app_interfaces_formulario__WEBPACK_IMPORTED_MODULE_3__["FormularioType"].formularioVerificacion);
            }
            catch (error) {
                console.log(error);
                throw error;
            }
        });
    }
}
FormularioVerificacionService.ɵfac = function FormularioVerificacionService_Factory(t) { return new (t || FormularioVerificacionService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_exportaciones_exportaciones_service__WEBPACK_IMPORTED_MODULE_7__["ExportacionesService"])); };
FormularioVerificacionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FormularioVerificacionService, factory: FormularioVerificacionService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FormularioVerificacionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"] }, { type: _exportaciones_exportaciones_service__WEBPACK_IMPORTED_MODULE_7__["ExportacionesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/core/services/formularios/formulario.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/core/services/formularios/formulario.service.ts ***!
  \*************************************************************************/
/*! exports provided: FormularioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormularioService", function() { return FormularioService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");




class FormularioService {
    constructor(firebaseObj) {
        this.firebaseObj = firebaseObj;
    }
    initData() {
        this.localData = this.list();
    }
    writeSections(docRef, formulario, transaction) {
        try {
            const seccionesCollRef = docRef.collection("secciones");
            for (let section of Object.keys(formulario["secciones"])) {
                transaction.set(seccionesCollRef.doc(section), { id: section });
                const questionsRef = seccionesCollRef.doc(section).collection("preguntas");
                if (formulario["secciones"][section]["preguntas"] != undefined) {
                    for (let question of Object.keys(formulario["secciones"][section]["preguntas"])) {
                        this.writeQuestions(question, formulario["secciones"][section]["preguntas"], questionsRef, transaction);
                    }
                }
                if (formulario["secciones"][section]["secciones"] != undefined) {
                    const lastObject = formulario["secciones"][section];
                    this.writeSections(seccionesCollRef.doc(section), lastObject, transaction);
                }
            }
        }
        catch (e) {
            console.log(e);
            throw (e);
        }
    }
    writeQuestions(question, lastObject, lastCollectionRef, transaction) {
        for (let response of Object.keys(lastObject[question])) {
            if (response === "respuesta") {
                try {
                    transaction.set(lastCollectionRef.doc(question), {
                        id: question,
                        pregunta: question,
                        respuesta: lastObject[question][response] === undefined ? "" : lastObject[question][response]
                    });
                }
                catch (e) {
                    console.log(e);
                    throw (e);
                }
            }
            else if (response === "preguntas") {
                const newCollectionRef = lastCollectionRef.doc(question).collection("preguntas");
                const newLastObject = lastObject[question][response];
                for (let question in newLastObject) {
                    this.writeQuestions(question, newLastObject, newCollectionRef, transaction);
                }
            }
            else if (response === "arreglo") {
                try {
                    transaction.set(lastCollectionRef.doc(question), {
                        id: question,
                        arreglo: lastObject[question][response]
                    });
                }
                catch (e) {
                    console.log(e);
                    throw (e);
                }
                const objetosRef = lastCollectionRef.doc(question).collection("objetos");
                const arreglo = lastObject[question][response];
                for (let numeroPregunta of Object.keys(arreglo)) {
                    const newLastObject = arreglo[numeroPregunta];
                    transaction.set(objetosRef.doc(numeroPregunta), { id: numeroPregunta });
                    const newCollectionRef = objetosRef.doc(numeroPregunta).collection("preguntas");
                    for (let questInArray in newLastObject) {
                        this.writeQuestions(questInArray, newLastObject, newCollectionRef, transaction);
                    }
                }
            }
        }
    }
    // NO ESTA EN USO
    fetchSections(formulario) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const initialCollRef = this.firebaseObj.firestore.collection(`formulariosLineaBase/${formulario.id}/secciones`);
            try {
                const secciones = yield initialCollRef.get();
                for (const seccion of secciones.docs) {
                    const seccionData = seccion.data();
                    const preguntasCollectionRef = initialCollRef.doc(seccionData["id"]).collection("preguntas");
                    const preguntasCollection = yield preguntasCollectionRef.get();
                    for (const pregunta of preguntasCollection.docs) {
                        const preguntaData = pregunta.data();
                        yield this.fetchQuestions(preguntaData, formulario["secciones"][seccionData["id"]]["preguntas"], preguntasCollectionRef);
                    }
                }
            }
            catch (e) {
                console.log(e);
                throw e;
            }
        });
    }
    // NO ESTA EN USO
    fetchQuestions(data, lastObject, lastCollectionRef) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const question = data["id"];
            if (lastObject[question] !== undefined) {
                for (let response of Object.keys(lastObject[question])) {
                    if (response === "respuesta") {
                        lastObject[question][response] = data["respuesta"];
                    }
                    else if (response === "preguntas") {
                        const newCollectionRef = lastCollectionRef.doc(question).collection("preguntas");
                        const newLastObject = lastObject[question][response];
                        try {
                            const preguntas = yield newCollectionRef.get();
                            for (const pregunta of preguntas.docs) {
                                const preguntaData = pregunta.data();
                                yield this.fetchQuestions(preguntaData, newLastObject, newCollectionRef);
                            }
                        }
                        catch (e) {
                            console.log(e);
                            throw e;
                        }
                    }
                    else if (response === "arreglo") {
                        lastObject[question][response] = data["arreglo"];
                    }
                }
            }
        });
    }
    deleteSections(seccionCollRef, transaction) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const secciones = (yield seccionCollRef.get()).docs;
            for (let seccion of secciones) {
                const id = seccion.data()["id"];
                const seccionRef = seccionCollRef.doc(id);
                const questions = (yield seccionRef.collection("preguntas").get()).docs;
                for (let question of questions) {
                    yield this.deleteQuestions(question.data(), seccionRef.collection('preguntas'), transaction);
                }
                yield this.deleteSections(seccionRef.collection("secciones"), transaction);
                transaction.delete(seccionRef);
            }
        });
    }
    deleteQuestions(data, lastRef, transaction) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const question = data["id"];
            const questionRef = lastRef.doc(question);
            const newQuestions = (yield questionRef.collection("preguntas").get()).docs;
            for (const newQuestion of newQuestions) {
                yield this.deleteQuestions(newQuestion.data(), questionRef.collection("preguntas"), transaction);
            }
            transaction.delete(questionRef);
        });
    }
}
FormularioService.ɵfac = function FormularioService_Factory(t) { return new (t || FormularioService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"])); };
FormularioService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FormularioService, factory: FormularioService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FormularioService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/core/services/tecnico/tecnico.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/core/services/tecnico/tecnico.service.ts ***!
  \******************************************************************/
/*! exports provided: TecnicoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TecnicoService", function() { return TecnicoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../auth/auth.service */ "./src/app/modules/core/services/auth/auth.service.ts");






class TecnicoService {
    constructor(firebase, authService) {
        this.firebase = firebase;
        this.authService = authService;
    }
    /*
    fetch(): Promise<void> {
      return new Promise<void>((resolve, reject) => {
        this.authService.getUser().subscribe(user => {
          this.getTecnicoById(user?.uid).subscribe(tecnico => {
            const storedTecnico = {
              nombre: tecnico.nombre,
              permiso: tecnico.permiso
            };
            localStorage.setItem('user', JSON.stringify(storedTecnico));
            resolve();
          });
        });
      });
    }
    */
    getLocalUser() {
        return new Promise((resolve, reject) => {
            this.authService.getUser().subscribe(user => {
                this.getTecnicoById(user === null || user === void 0 ? void 0 : user.uid).subscribe(tecnico => {
                    resolve(tecnico);
                });
            });
        });
    }
    get(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const docRef = this.firebase.firestore.collection("tecnicos").doc(id);
            const tecnico = (yield docRef.get()).data();
            return tecnico;
        });
    }
    getTecnicoById(id) {
        return this.firebase.collection("tecnicos").doc(id)
            .snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(tecnico => {
            return tecnico.payload.data();
        }));
    }
}
TecnicoService.ɵfac = function TecnicoService_Factory(t) { return new (t || TecnicoService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"])); };
TecnicoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TecnicoService, factory: TecnicoService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TecnicoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] }, { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/accordion/accordion.directive.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/accordion/accordion.directive.ts ***!
  \*********************************************************/
/*! exports provided: AccordionDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionDirective", function() { return AccordionDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs/add/operator/filter.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AccordionDirective {
    constructor(router) {
        this.router = router;
        this.navlinks = [];
        setTimeout(() => this.checkOpenLinks());
    }
    closeOtherLinks(selectedLink) {
        this.navlinks.forEach((link) => {
            if (link !== selectedLink) {
                link.selected = false;
            }
        });
    }
    addLink(link) {
        this.navlinks.push(link);
    }
    removeGroup(link) {
        const index = this.navlinks.indexOf(link);
        if (index !== -1) {
            this.navlinks.splice(index, 1);
        }
    }
    checkOpenLinks() {
        this.navlinks.forEach((link) => {
            if (link.group) {
                const routeUrl = this.router.url;
                const currentUrl = routeUrl.split('/');
                if (currentUrl.indexOf(link.group) > 0) {
                    link.selected = true;
                    this.closeOtherLinks(link);
                }
            }
        });
    }
    ngAfterContentChecked() {
    }
}
AccordionDirective.ɵfac = function AccordionDirective_Factory(t) { return new (t || AccordionDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AccordionDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: AccordionDirective, selectors: [["", "appAccordion", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccordionDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appAccordion]'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/accordion/accordionanchor.directive.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/accordion/accordionanchor.directive.ts ***!
  \***************************************************************/
/*! exports provided: AccordionAnchorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionAnchorDirective", function() { return AccordionAnchorDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accordionlink.directive */ "./src/app/shared/accordion/accordionlink.directive.ts");




class AccordionAnchorDirective {
    constructor(navlink) {
        this.navlink = navlink;
    }
    onClick(e) {
        this.navlink.toggle();
    }
}
AccordionAnchorDirective.ɵfac = function AccordionAnchorDirective_Factory(t) { return new (t || AccordionAnchorDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionLinkDirective"])); };
AccordionAnchorDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: AccordionAnchorDirective, selectors: [["", "appAccordionToggle", ""]], hostBindings: function AccordionAnchorDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccordionAnchorDirective_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccordionAnchorDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appAccordionToggle]'
            }]
    }], function () { return [{ type: _accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionLinkDirective"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionLinkDirective"]]
            }] }]; }, { onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/accordion/accordionlink.directive.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/accordion/accordionlink.directive.ts ***!
  \*************************************************************/
/*! exports provided: AccordionLinkDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionLinkDirective", function() { return AccordionLinkDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _accordion_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accordion.directive */ "./src/app/shared/accordion/accordion.directive.ts");




class AccordionLinkDirective {
    constructor(nav) {
        this._selected = false;
        this.nav = nav;
    }
    get selected() {
        return this._selected;
    }
    set selected(value) {
        this._selected = value;
        if (value) {
            this.nav.closeOtherLinks(this);
        }
    }
    ngOnInit() {
        this.nav.addLink(this);
    }
    ngOnDestroy() {
        this.nav.removeGroup(this);
    }
    toggle() {
        this.selected = !this.selected;
    }
}
AccordionLinkDirective.ɵfac = function AccordionLinkDirective_Factory(t) { return new (t || AccordionLinkDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_accordion_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionDirective"])); };
AccordionLinkDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: AccordionLinkDirective, selectors: [["", "appAccordionLink", ""]], hostVars: 2, hostBindings: function AccordionLinkDirective_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", ctx.selected);
    } }, inputs: { group: "group", selected: "selected" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccordionLinkDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appAccordionLink]'
            }]
    }], function () { return [{ type: _accordion_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionDirective"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_accordion_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionDirective"]]
            }] }]; }, { group: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.selected']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/accordion/index.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/accordion/index.ts ***!
  \*******************************************/
/*! exports provided: AccordionAnchorDirective, AccordionLinkDirective, AccordionDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _accordionanchor_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accordionanchor.directive */ "./src/app/shared/accordion/accordionanchor.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionAnchorDirective", function() { return _accordionanchor_directive__WEBPACK_IMPORTED_MODULE_0__["AccordionAnchorDirective"]; });

/* harmony import */ var _accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accordionlink.directive */ "./src/app/shared/accordion/accordionlink.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionLinkDirective", function() { return _accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionLinkDirective"]; });

/* harmony import */ var _accordion_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accordion.directive */ "./src/app/shared/accordion/accordion.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionDirective", function() { return _accordion_directive__WEBPACK_IMPORTED_MODULE_2__["AccordionDirective"]; });






/***/ }),

/***/ "./src/app/shared/confirm-dialog/confirm-dialog.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/confirm-dialog/confirm-dialog.component.ts ***!
  \*******************************************************************/
/*! exports provided: ConfirmDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogComponent", function() { return ConfirmDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);



class ConfirmDialogComponent {
    constructor() { }
    ngOnInit() {
    }
    confirm(title, message, confirmButtonText) {
        return new Promise((resolve, reject) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                title: title,
                text: message,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                cancelButtonText: 'Cancelar',
                confirmButtonText: confirmButtonText
            }).then((result) => {
                resolve(result.isConfirmed);
            });
        });
    }
}
ConfirmDialogComponent.ɵfac = function ConfirmDialogComponent_Factory(t) { return new (t || ConfirmDialogComponent)(); };
ConfirmDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfirmDialogComponent, selectors: [["app-confirm-dialog"]], decls: 0, vars: 0, template: function ConfirmDialogComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb25maXJtLWRpYWxvZy9jb25maXJtLWRpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfirmDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-confirm-dialog',
                templateUrl: './confirm-dialog.component.html',
                styleUrls: ['./confirm-dialog.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/data-table/data-table.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/data-table/data-table.component.ts ***!
  \***********************************************************/
/*! exports provided: DataTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableComponent", function() { return DataTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../confirm-dialog/confirm-dialog.component */ "./src/app/shared/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../loading/loading.component */ "./src/app/shared/loading/loading.component.ts");
/* harmony import */ var src_app_modules_core_services_tecnico_tecnico_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modules/core/services/tecnico/tecnico.service */ "./src/app/modules/core/services/tecnico/tecnico.service.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");











class DataTableComponent {
    constructor(tecnicoServiceObj, breakpointObserverObj, changeDetectorObj, snackBarObj) {
        this.tecnicoServiceObj = tecnicoServiceObj;
        this.breakpointObserverObj = breakpointObserverObj;
        this.changeDetectorObj = changeDetectorObj;
        this.snackBarObj = snackBarObj;
        this.displayedColumns = [];
        this.paginator = Object.create(null);
        this.sort = Object.create(null);
        breakpointObserverObj.observe(['(max-width: 600px)']).subscribe(result => {
            this.displayedColumns = result.matches ?
                this.displayedColumns :
                this.displayedColumns;
        });
    }
    /**
     * Set the paginator and sort after the view init since this component will
     * be able to query its view for the initialized paginator and sort.
     */
    ngAfterViewInit() {
        setTimeout(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading.open();
            yield this.fetchData();
            this.loading.close();
        }), 0);
    }
    fetchData() {
        return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.dataService.localData) {
                this.dataService.initData();
            }
            this.dataService.localData.subscribe(data => {
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
                resolve();
            });
        }));
    }
    applyFilter(filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    }
    onTrashCanClicked(row) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.confirmDialog.confirm('¿Estas seguro?', 'Es imposible recuperar el registro luego de ser eliminado', 'Aceptar')
                .then((isConfirmed) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (isConfirmed) {
                    yield this.deleteData(row);
                }
            }));
        });
    }
    onExportClicked(row) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.loading.open();
                yield this.exportData(row);
                this.loading.success('Listo', 'Registro exportado correctamente');
            }
            catch (error) {
                this.loading.error('Error', 'No se ha podido exportar el registro');
            }
        });
    }
    deleteData(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.loading.open();
                const message = yield this.dataService.delete(item);
                this.loading.success('Listo', message);
            }
            catch (e) {
                this.loading.error('Error', 'No se ha eliminado el registro');
            }
        });
    }
    exportData(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.dataService.export(item["id"]);
                this.changeDetectorObj.detectChanges();
            }
            catch (e) {
                this.snackBarObj.open(e, 'Cerrar', {
                    duration: 5000,
                });
            }
        });
    }
}
DataTableComponent.ɵfac = function DataTableComponent_Factory(t) { return new (t || DataTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_modules_core_services_tecnico_tecnico_service__WEBPACK_IMPORTED_MODULE_7__["TecnicoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"])); };
DataTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DataTableComponent, selectors: [["app-data-table"]], viewQuery: function DataTableComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmDialogComponent"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__["LoadingComponent"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.confirmDialog = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.loading = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 0, vars: 0, template: function DataTableComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9kYXRhLXRhYmxlL2RhdGEtdGFibGUuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DataTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-data-table',
                templateUrl: './data-table.component.html',
                styleUrls: ['./data-table.component.scss']
            }]
    }], function () { return [{ type: src_app_modules_core_services_tecnico_tecnico_service__WEBPACK_IMPORTED_MODULE_7__["TecnicoService"] }, { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__["BreakpointObserver"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"] }]; }, { confirmDialog: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmDialogComponent"]]
        }], loading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__["LoadingComponent"]]
        }], paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true }]
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/loading/loading.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/loading/loading.component.ts ***!
  \*****************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);



class LoadingComponent {
    constructor() { }
    ngOnInit() {
    }
    open() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            title: 'Por favor espere',
            allowEscapeKey: false,
            allowOutsideClick: false,
            timer: 99999999999,
            didOpen: () => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.showLoading();
            }
        });
    }
    close() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.close();
    }
    success(title, message) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            title: title,
            text: message,
            icon: 'success',
            showConfirmButton: false,
            didOpen: () => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.hideLoading();
            }
        });
    }
    error(title, message) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            title: title,
            text: message,
            icon: 'error',
            didOpen: () => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.hideLoading();
            }
        });
    }
    destroy() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.close();
    }
}
LoadingComponent.ɵfac = function LoadingComponent_Factory(t) { return new (t || LoadingComponent)(); };
LoadingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingComponent, selectors: [["app-loading"]], decls: 0, vars: 0, template: function LoadingComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9sb2FkaW5nL2xvYWRpbmcuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loading',
                templateUrl: './loading.component.html',
                styleUrls: ['./loading.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/menu-items/menu-items.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/menu-items/menu-items.ts ***!
  \*************************************************/
/*! exports provided: MenuItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItems", function() { return MenuItems; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


const MENUITEMS = [
    {
        state: 'agricultores',
        name: 'Agricultores',
        type: 'link',
        icon: 'person'
    },
    {
        state: 'formularios',
        name: 'Formularios',
        type: 'sub',
        icon: 'assignment',
        children: [
            {
                state: 'formulariosLineaBase',
                name: 'Linea Base',
                type: 'link'
            },
            {
                state: 'formulariosVerificacion',
                name: 'Verificación',
                type: 'link'
            }
        ]
    },
];
class MenuItems {
    getMenuitem() {
        return MENUITEMS;
    }
}
MenuItems.ɵfac = function MenuItems_Factory(t) { return new (t || MenuItems)(); };
MenuItems.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MenuItems, factory: MenuItems.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuItems, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _menu_items_menu_items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-items/menu-items */ "./src/app/shared/menu-items/menu-items.ts");
/* harmony import */ var _accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accordion */ "./src/app/shared/accordion/index.ts");
/* harmony import */ var _data_table_data_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data-table/data-table.component */ "./src/app/shared/data-table/data-table.component.ts");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loading/loading.component */ "./src/app/shared/loading/loading.component.ts");
/* harmony import */ var _demo_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../demo-material-module */ "./src/app/demo-material-module.ts");
/* harmony import */ var _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./confirm-dialog/confirm-dialog.component */ "./src/app/shared/confirm-dialog/confirm-dialog.component.ts");








class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, providers: [_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_1__["MenuItems"]], imports: [[
            _demo_material_module__WEBPACK_IMPORTED_MODULE_5__["DemoMaterialModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionAnchorDirective"],
        _accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionLinkDirective"],
        _accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionDirective"],
        _data_table_data_table_component__WEBPACK_IMPORTED_MODULE_3__["DataTableComponent"],
        _loading_loading_component__WEBPACK_IMPORTED_MODULE_4__["LoadingComponent"],
        _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmDialogComponent"]], imports: [_demo_material_module__WEBPACK_IMPORTED_MODULE_5__["DemoMaterialModule"]], exports: [_accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionAnchorDirective"],
        _accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionLinkDirective"],
        _accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionDirective"],
        _data_table_data_table_component__WEBPACK_IMPORTED_MODULE_3__["DataTableComponent"],
        _loading_loading_component__WEBPACK_IMPORTED_MODULE_4__["LoadingComponent"],
        _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmDialogComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionAnchorDirective"],
                    _accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionLinkDirective"],
                    _accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionDirective"],
                    _data_table_data_table_component__WEBPACK_IMPORTED_MODULE_3__["DataTableComponent"],
                    _loading_loading_component__WEBPACK_IMPORTED_MODULE_4__["LoadingComponent"],
                    _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmDialogComponent"],
                ],
                exports: [
                    _accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionAnchorDirective"],
                    _accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionLinkDirective"],
                    _accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionDirective"],
                    _data_table_data_table_component__WEBPACK_IMPORTED_MODULE_3__["DataTableComponent"],
                    _loading_loading_component__WEBPACK_IMPORTED_MODULE_4__["LoadingComponent"],
                    _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmDialogComponent"]
                ],
                imports: [
                    _demo_material_module__WEBPACK_IMPORTED_MODULE_5__["DemoMaterialModule"]
                ],
                providers: [_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_1__["MenuItems"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/spinner.component.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/spinner.component.ts ***!
  \*********************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function SpinnerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SpinnerComponent {
    constructor(router, document) {
        this.router = router;
        this.document = document;
        this.isSpinnerVisible = true;
        this.backgroundColor = 'rgba(0, 115, 170, 0.69)';
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                this.isSpinnerVisible = true;
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] ||
                event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationCancel"] ||
                event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationError"]) {
                this.isSpinnerVisible = false;
            }
        }, () => {
            this.isSpinnerVisible = false;
        });
    }
    ngOnDestroy() {
        this.isSpinnerVisible = false;
    }
}
SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) { return new (t || SpinnerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])); };
SpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpinnerComponent, selectors: [["app-spinner"]], inputs: { backgroundColor: "backgroundColor" }, decls: 1, vars: 1, consts: [["class", "preloader", 4, "ngIf"], [1, "preloader"], [1, "spinner"], [1, "double-bounce1"], [1, "double-bounce2"]], template: function SpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SpinnerComponent_div_0_Template, 4, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSpinnerVisible);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpinnerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-spinner',
                template: `<div class="preloader" *ngIf="isSpinnerVisible">
        <div class="spinner">
          <div class="double-bounce1"></div>
          <div class="double-bounce2"></div>
        </div>
    </div>`,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
            }] }]; }, { backgroundColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/environments/config/constantes/agricultoresConstantes.ts":
/*!**********************************************************************!*\
  !*** ./src/environments/config/constantes/agricultoresConstantes.ts ***!
  \**********************************************************************/
/*! exports provided: agricultor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "agricultor", function() { return agricultor; });
const genero = ['MASCULINO', 'FEMENINO'];
const estados = ['ACTIVO/A', 'INSCRITO', 'POR VISITAR'];
const estadoCivil = ['SOLTERO', 'UNIÓN LIBRE', 'SEPARADO/A', 'CASADO/A', 'DIVORCIADO/A', 'VIUDO/A'];
const educacion = ['ANALFABETO', 'PRIMARIA', 'SECUNDARIA', 'SUPERIOR'];
const discapacidad = ['SI', 'NO'];
const agricultor = {
    genero,
    estados,
    estadoCivil,
    educacion,
    discapacidad
};


/***/ }),

/***/ "./src/environments/config/constantes/formularioLineaBase.ts":
/*!*******************************************************************!*\
  !*** ./src/environments/config/constantes/formularioLineaBase.ts ***!
  \*******************************************************************/
/*! exports provided: formularioLineaBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formularioLineaBase", function() { return formularioLineaBase; });
const yesNoAnswer = ['SI', 'NO'];
const hectareajeTipoTerreno = ['PROPIO', 'ARRENDADO', 'AMBOS'];
const hectareajeCultivoCacao = ['MONOCULTIVO', 'POLICULTIVO'];
const hectareajeAsociadoConTiene = ['MAIZ', 'NARANJA', 'PLATANO', 'MANI', 'OTRO'];
const hectareajeDistanciaPlantas = ['3X3', '3,5X3,5', '4X4', '4,5X4,5', 'OTRO'];
const hectareajeTipoUbicacionZona = ['CERCA A ZONA PROTEGIDA', 'EN ZONA DE AMORTIGUAMIENTO', 'DENTRO DE ZONA PROTEGIDA'];
const zonasProtegidas = ['SAMAMA', 'ABRAS MANTQ.', 'OTRO'];
const formularioLineaBase = {
    yesNoAnswer,
    hectareajeTipoTerreno,
    hectareajeCultivoCacao,
    hectareajeAsociadoConTiene,
    hectareajeDistanciaPlantas,
    hectareajeTipoUbicacionZona,
    zonasProtegidas
};


/***/ }),

/***/ "./src/environments/config/constantes/formularioVerificacion.ts":
/*!**********************************************************************!*\
  !*** ./src/environments/config/constantes/formularioVerificacion.ts ***!
  \**********************************************************************/
/*! exports provided: formularioVerificacion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formularioVerificacion", function() { return formularioVerificacion; });
const yesNoAnswer = ['SI', 'NO'];
const empytYesNoAnswer = ['', 'SI', 'NO'];
const datosFincaMotivoAreaNueva = ['EXPANSION', 'RENOVACION'];
const datosFincaUsoAreaNueva = ['BOSQUE', 'PLANTACION', 'HUERTA VIEJA', 'RASTROJO', 'OTROS'];
const Meses = ['ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO', 'JULIO', 'AGOSTO', 'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE'];
const manejoSueloTipoSuelo = ['FRANCO', 'ARENOSO', 'ARCILLOSO', 'LIMOSO'];
const manejoSueloManeraCorregirPH = ['QUIMICO', 'NATURAL'];
const manejoSueloTipoProductoQuimico = ['CAL AGRICOLA', 'YESO', 'CAL VIVA', 'OTROS'];
const manejoSueloTipoProductoNatural = ['ACIDOS HUMICOS', 'ENMIENDAS ORGANICAS', 'OTROS'];
const fertilizacionTipoProductoFertilizaCacaotales = ['QUIMICO', 'NATURAL', 'AMBOS'];
const vecesAlAnio = ['1 A 2 VECES', '3 A 4 VECES', '5 A 6 VECES', 'NUNCA'];
const fertilizacionTipoFertilizanteRecibido = ['EDAFICO', 'BIOESTIMULANTE', 'INSECTICIDAS', 'FOLIAR', 'CORRECTORES DE PH', 'BIOLES', 'FUNGICIDAS'];
const fertilizacionPercepcionFertilizanteRecibido = ['AUMENTA LA PRODUCCION', 'SE MANTIENE IGUAL', 'DISMINUYE LA PRODUCCION'];
const controlMalezaTipoMaleza = ['HOJA ANCHA', 'HOJA ANGOSTA', 'AMBAS'];
const controlMalezaComoControlaMaleza = ['QUIMICO', 'MECANICO/MANUAL', 'NATURAL/ORGANICO'];
const controlMalezaTipoRecomendacion = ['NO', 'TECNICO', 'EMPIRICO'];
const podaTipoPodaAplica = ['FORMACION', 'MANTENIMIENTO', 'FITOSANITARIA', 'REHABILITACION'];
const podaPlagas = ['XILEBORUS', 'CHINCHORRO', 'HORMIGA', 'OTROS'];
const podaEnfermedades = ['PHYTOPHTORA', 'MAL DE MACHETE', 'ROSELLINIA', 'OTROS'];
const mipeTipoControl = ['QUIMICO', 'MECANICO/MANUAL', 'BIOLOGICO'];
const registrosProductorEspecifiqueTipoCuenta = ['BANCO FORMAL', 'COOPERATIVA AHORRO Y CRÉDITO', 'BANCOS COMUNALES', 'OTROS'];
const fermentacionFermentaCacao = ['SIEMPRE', 'A VECES', 'NUNCA'];
const fermentacionRazonNoFermenta = ['LIMITANTE DE CLIMA', 'CARECE DE  INFRAESTRUCTURA', 'DESCONOCIMIENTO DEL TEMA', 'NECESIDAD DE LIQUIDEZ'];
const fermentacionComoHace1 = ['SACOS PLASTICO', 'TIPO LAGARTO', 'SACOS DE YUTE', 'CAJON DE MADERA', 'CAÑA PICADA', 'OTRO'];
const fermentacionComoHace2 = ['CON MEDIDAS', 'SIN MEDIDAS'];
const secadoNivelHumedad = ['BABA', '1 SOL', '2 SOLES', '3 SOLES', '4 SOLES', 'OTROS'];
const secadoComoRealizaSecado = ['ASFALTO', 'TENDAL CAÑA', 'TENDAL DE CEMENTO', 'MARQUESINA', 'SECADORA', 'PLASTICO NEGRO', 'PLASTICO BLANCO', 'OTRO'];
const ventaFrecuencia = ['UNA VEZ', 'DOS VECES', 'TRES O MAS VECES'];
const conservacionAguaManejoDesechosTipoExtraccion = ['GRAVEDAD', 'MECANIZADO'];
const conservacionAguaManejoDesechosInfraestructuraRiego = ['SUB-FOLIAR', 'GOTEO', 'CAÑON'];
const conservacionAguaManejoDesechosImpactoRiego = ['ALTO', 'MEDIO', 'BAJO'];
const conservacionAguaManejoDesechosDisenioRiego = ['FIJO', 'MOVIBLE'];
const conservacionAguaManejoDesechosFiltroEcologicoParaQueUso = ['LIXIVIADO DE CACAO', 'AGUAS RESIDUALES', 'RESIDUOS DE PRODUCTOS'];
const conservacionAguaManejoDesechosCriterioClasificarBasuraDomestica = ['PELIGROSO Y NO PELIGROSO', 'ORGÁNICO E INORGÁNICO', 'BIOLOGICO, PLASTICO Y VIDRIO'];
const conservacionAguaManejoDesechosTratamientoBasura = ['VENDE', 'RECOLECTOR', 'RECOLECTOR Y QUEMA', 'REUTILIZA', 'ENTIERRA', 'QUEMA'];
const conservacionAguaManejoDesechosLugarAlmacenamiento = ['BODEGA', 'AMBIENTE', 'CASA', 'OTRO'];
const conservacionSuelosBiodiversidadPractivasConservacionSuelo = ['NO', 'COBERTURA VEGETAL', 'BARRERAS VIVAS', 'OTRAS'];
const conservacionSuelosBiodiversidadEspeciesArboles = ['LAUREL', 'FERNANSANCHEZ', 'TECA', 'GUAYACAN', 'OTRAS'];
const proteccionAreasRibereniasNombreFuenteHidrica = ['VERTIENTE', 'ESTERO', 'RIO', 'POZO', 'OTRO'];
const proteccionAreasRibereniasTipoFuenteHidrica = ['SUPERFICIAL', 'TEMPORAL', 'ARTIFICIAL', 'SUBTERRANEA', 'PERMANENTE', 'NATURAL'];
const proteccionAreasRibereniasConsideradaFuenteHidrica = ['PRIMARIA', 'SECUNDARIA', 'TERCIARIA'];
const proteccionAreasRibereniasComoBrindaProtFuentHidr = ['ZONA DE AMORTIGUAMIENTO', 'MALEZA', 'ARBOLES', 'ARBUSTOS', 'OTROS'];
const proteccionAreasRibereniasDistanciaRequerida = ['15 MTRS', '8 MTRS', '5 MTRS', 'OTRO'];
const proteccionAreasAltoValorTipoProblemaErosion = ['DESLIZAMIENTO LADERAS', 'HÍDRICA', 'PENDIENTES VULNERABLES', 'EÓLICA'];
const proteccionAreasAltoValorComoQuePracticas = ['OXIGENACIÓN', 'INCREMENTO DE SOMBRAS', 'OTRAS'];
const proteccionAreasAltoValorGradoPresentanPendientes = ['0 A 25', '26 A 50', '51 A 75', '76 A 100'];
const proteccionAreasAltoValorTipoAreaForestal = ['B. PRIMARIOS', 'B. SECUNDARIOS', 'PLANTACIONES', 'REMANENTE'];
const proteccionAreasAltoValorCualesEspeciesPeligroExtincion = ['VEGETAL', 'ANIMAL', 'AMBAS'];
const proteccionAreasAltoValorTipoAltoValor = ['AVC1 - Diversidad de Especie', 'AVC2 - Ecosistemas a Escala paisaje', 'AVC3 - Ecosistemas y Habitats', 'AVC4 - Servicios Ecosistemicos', 'AVC5 - Necesidades de las Comunidades', 'AVC6 - Valores Culturales'];
const diversificacionUsoCultivoDiferenteCacao = ['VENTA', 'CONSUMO', 'AMBOS'];
const diversificacionOtraActividadDentroFincaConIngreso = ['PORCICULTURA', 'PISCICULTURA', 'APICULTURA', 'ELAB. PROD. ORGANICOS', 'VIVERO', 'OTROS', 'NO'];
const diversificacionActividadFueraFincaConIngreso = ['UNI. NEGOCIOS BIOFABRICAS', 'UNID. NEGOCIOS VIVEROS', 'BRIGADAS REHABILITACION'];
const utilidad = ['', 'MUCHA UTILIDAD', 'UTIL', 'POCA UTILIDAD'];
const estado = ['', 'BUENO', 'REGULAR', 'MALO'];
const recetarioTipoSuelo = ['FRANCO', 'ARENO', 'ARCILLOSO', 'FLIMOSO'];
const plazo = ['CP (1-12 meses)', 'MP (1-3 años)', 'LP (4-5 años)'];
const topografia = ['PLANO', 'PENDIENTE'];
const causasPrincipalesMortalidad = ['ESTROFEO', 'LLENADO DE FUNDAS', 'PRESENCIA HONGOS', 'INMADUREZ PLANTAS', 'OTROS'];
const formularioVerificacion = {
    yesNoAnswer,
    empytYesNoAnswer,
    datosFincaMotivoAreaNueva,
    datosFincaUsoAreaNueva,
    Meses,
    manejoSueloTipoSuelo,
    manejoSueloManeraCorregirPH,
    manejoSueloTipoProductoNatural,
    manejoSueloTipoProductoQuimico,
    fertilizacionTipoProductoFertilizaCacaotales,
    vecesAlAnio,
    fertilizacionTipoFertilizanteRecibido,
    fertilizacionPercepcionFertilizanteRecibido,
    controlMalezaTipoMaleza,
    controlMalezaComoControlaMaleza,
    controlMalezaTipoRecomendacion,
    podaTipoPodaAplica,
    podaEnfermedades,
    podaPlagas,
    mipeTipoControl,
    registrosProductorEspecifiqueTipoCuenta,
    fermentacionFermentaCacao,
    fermentacionRazonNoFermenta,
    fermentacionComoHace1,
    fermentacionComoHace2,
    secadoNivelHumedad,
    secadoComoRealizaSecado,
    ventaFrecuencia,
    conservacionAguaManejoDesechosTipoExtraccion,
    conservacionAguaManejoDesechosInfraestructuraRiego,
    conservacionAguaManejoDesechosImpactoRiego,
    conservacionAguaManejoDesechosDisenioRiego,
    conservacionAguaManejoDesechosFiltroEcologicoParaQueUso,
    conservacionAguaManejoDesechosCriterioClasificarBasuraDomestica,
    conservacionAguaManejoDesechosTratamientoBasura,
    conservacionAguaManejoDesechosLugarAlmacenamiento,
    conservacionSuelosBiodiversidadPractivasConservacionSuelo,
    conservacionSuelosBiodiversidadEspeciesArboles,
    proteccionAreasRibereniasNombreFuenteHidrica,
    proteccionAreasRibereniasTipoFuenteHidrica,
    proteccionAreasRibereniasConsideradaFuenteHidrica,
    proteccionAreasRibereniasComoBrindaProtFuentHidr,
    proteccionAreasRibereniasDistanciaRequerida,
    proteccionAreasAltoValorTipoProblemaErosion,
    proteccionAreasAltoValorComoQuePracticas,
    proteccionAreasAltoValorGradoPresentanPendientes,
    proteccionAreasAltoValorTipoAreaForestal,
    proteccionAreasAltoValorCualesEspeciesPeligroExtincion,
    proteccionAreasAltoValorTipoAltoValor,
    diversificacionUsoCultivoDiferenteCacao,
    diversificacionOtraActividadDentroFincaConIngreso,
    diversificacionActividadFueraFincaConIngreso,
    utilidad,
    estado,
    recetarioTipoSuelo,
    plazo,
    topografia,
    causasPrincipalesMortalidad
};


/***/ }),

/***/ "./src/environments/config/firebase.ts":
/*!*********************************************!*\
  !*** ./src/environments/config/firebase.ts ***!
  \*********************************************/
/*! exports provided: firebase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firebase", function() { return firebase; });
const firebase = {
    apiKey: "AIzaSyDv1omeWz2ecc3l1tc9jtK5mcRJEUvNaxU",
    authDomain: "adsanchez-5bde7.firebaseapp.com",
    projectId: "adsanchez-5bde7",
    storageBucket: "adsanchez-5bde7.appspot.com",
    messagingSenderId: "696673678366",
    appId: "1:696673678366:web:08ea3e54c26b52bd11ea0f"
};


/***/ }),

/***/ "./src/environments/config/menuItems.ts":
/*!**********************************************!*\
  !*** ./src/environments/config/menuItems.ts ***!
  \**********************************************/
/*! exports provided: menuItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuItems", function() { return menuItems; });
const menuItems = [
    { title: "Inicio", routerLink: "/inicio/home", icon: "home" },
    { title: "Agricultores", routerLink: "/inicio/agricultores", icon: "person" },
    { title: "Formularios Linea Base", routerLink: "/inicio/formulariosLineaBase", icon: "backup_table" },
    { title: "Formularios Verificacion", routerLink: "/inicio/formulariosVerificacion", icon: "fact_check" },
    { title: "Exportaciones", routerLink: "/inicio/exportaciones", icon: "table_view" },
    { title: "Log out", routerLink: "", icon: "logout" }
];


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
/* harmony import */ var _config_firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config/firebase */ "./src/environments/config/firebase.ts");
/* harmony import */ var _config_constantes_agricultoresConstantes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config/constantes/agricultoresConstantes */ "./src/environments/config/constantes/agricultoresConstantes.ts");
/* harmony import */ var _config_menuItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config/menuItems */ "./src/environments/config/menuItems.ts");
/* harmony import */ var _mappers_agricultor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mappers/agricultor */ "./src/environments/mappers/agricultor.ts");
/* harmony import */ var _mappers_formularioLineaBase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mappers/formularioLineaBase */ "./src/environments/mappers/formularioLineaBase.ts");
/* harmony import */ var _config_constantes_formularioLineaBase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config/constantes/formularioLineaBase */ "./src/environments/config/constantes/formularioLineaBase.ts");
/* harmony import */ var _config_constantes_formularioVerificacion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./config/constantes/formularioVerificacion */ "./src/environments/config/constantes/formularioVerificacion.ts");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.







const environment = {
    production: false,
    menuItems: _config_menuItems__WEBPACK_IMPORTED_MODULE_2__["menuItems"],
    firebase: _config_firebase__WEBPACK_IMPORTED_MODULE_0__["firebase"],
    constantes: {
        agricultor: _config_constantes_agricultoresConstantes__WEBPACK_IMPORTED_MODULE_1__["agricultor"],
        formularioLineaBase: _config_constantes_formularioLineaBase__WEBPACK_IMPORTED_MODULE_5__["formularioLineaBase"],
        formularioVerificacion: _config_constantes_formularioVerificacion__WEBPACK_IMPORTED_MODULE_6__["formularioVerificacion"]
    },
    mappers: {
        agricultorMapper: _mappers_agricultor__WEBPACK_IMPORTED_MODULE_3__["agricultorMapper"],
        formularioLineaBaseMapper: _mappers_formularioLineaBase__WEBPACK_IMPORTED_MODULE_4__["formularioLineaBaseMapper"]
    },
    // apiUrl:"https://cacaoback.herokuapp.com"
    apiUrl: "http://localhost:8080"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/environments/mappers/agricultor.ts":
/*!************************************************!*\
  !*** ./src/environments/mappers/agricultor.ts ***!
  \************************************************/
/*! exports provided: agricultorMapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "agricultorMapper", function() { return agricultorMapper; });
const agricultorMapper = {
    codigo: {
        codigo: 'COD',
        pregunta: 'CODIGO DE AGRICULTOR'
    },
    cedula: {
        codigo: 'CI',
        pregunta: 'CÉDULA'
    },
    nombre: {
        codigo: 'NOMBRE',
        pregunta: 'NOMBRE DEL AGRICULTOR'
    },
    estado: {
        codigo: 'ESTADO',
        pregunta: 'ESTADO'
    },
    fechaNacimiento: {
        codigo: 'SE02_FECHNAC',
        pregunta: 'FECHA DE NACIMIENTO'
    },
    genero: {
        codigo: 'SE01_GÉNERO',
        pregunta: 'GÉNERO'
    },
    estadoCivil: {
        codigo: 'SE04_ESTCIV',
        pregunta: 'ESTADO CIVIL'
    },
    nivelEducacion: {
        codigo: 'SE05_NIVEDUC',
        pregunta: 'NIVEL DE EDUCACION'
    },
    celulares: {
        codigo: 'SE06_CEL',
        pregunta: 'CELULARES'
    },
    telefono: {
        codigo: 'SE08_TLFNO',
        pregunta: 'TLFNO. CONVENCIONAL'
    },
    isDiscapacitado: {
        codigo: 'SE09_DISC',
        pregunta: 'PRESENTA DISCAPACIDAD'
    },
    tecnico: {
        codigo: 'TECNICO',
        pregunta: 'TECNICO'
    },
    fechaVisita: {
        codigo: 'F_VISITA21',
        pregunta: 'FECHA DE VISITA'
    },
    viaPrincipalComunicacion: {
        codigo: 'SE10_COM',
        pregunta: 'VÍA PRINCIPAL DE COMUNICACIÓN'
    },
    comentariosComunicacion: {
        codigo: 'SE10_COMB',
        pregunta: 'COMENTARIOS ADICIONALES SOBRE COMUNICACIÓN'
    },
    provincia: {
        codigo: 'FIN24_PROV',
        pregunta: 'PROVINCIA'
    },
    canton: {
        codigo: 'FIN02_CANT',
        pregunta: 'CANTÓN'
    },
    parroquia: {
        codigo: 'FIN03_PARR',
        pregunta: 'PARROQUIA'
    },
    recinto: {
        codigo: 'FIN04_REC',
        pregunta: 'RECINTO'
    },
    nombreFinca: {
        codigo: 'FIN05_NOMF',
        pregunta: 'NOMBRE DE LA FINCA'
    },
    descripcionLlegarFinca: {
        codigo: 'FIN06_DESCF',
        pregunta: 'DESCRIPCION DETALLADA PARA LLEGAR A LA FINCA'
    },
    casaProductorDentroFinca: {
        codigo: 'FIN28_CASA',
        pregunta: 'CASA DEL PRODUCTOR DENTRO DE FINCA'
    },
    descripcionLlegarCasa: {
        codigo: 'FIN29_UBCAS',
        pregunta: 'DESCRIPCIÓN DETALLADA PARA LLEGAR A LA CASA'
    },
    dimensionTotalFinca: {
        codigo: 'FIN07_DIM',
        pregunta: 'DIMENSION TOTAL DE LA FINCA'
    },
    terreno: {
        codigo: 'FIN08_TERR',
        pregunta: 'EL TERRENO ES'
    },
    cultivoCacao: {
        codigo: 'FIN09_CULT',
        pregunta: 'EL CULTIVO DE CACAO ES',
    },
    asociadoConTiene: {
        codigo: 'FIN10_ASOCCOTIEN',
        pregunta: 'ESTÁ ASOCIADO CON / TIENE'
    },
    otrosEspecifique: {
        codigo: 'FIN29_COTRO',
        pregunta: 'OTRO ESPECIFIQUE'
    },
    areaNetaCacao: {
        codigo: 'CAC01_AREA',
        pregunta: 'AREA NETA DE CACAO'
    },
    distanciaPlantas: {
        codigo: 'CAC02_DIST',
        pregunta: 'DISTANCIA DE PLANTAS'
    },
    plantasXHectareas: {
        codigo: 'CAC03_PLAXH',
        pregunta: 'PLANTAS POR HECTAREAS'
    },
    tipoUbicacionZona: {
        codigo: 'CAC53_ZPRO',
        pregunta: 'LA FINCA SE ENCUENTRA'
    },
    zonaProtegida: {
        codigo: 'CAC54_ZPN',
        pregunta: 'INDIQUE EL NOMBRE DE LA ZONA PROTEGIDA'
    },
    otraZona: {
        codigo: 'CAC55_OTRO',
        pregunta: 'INDIQUE EL NOMBRE DE LA ZONA PROTEGIDA - OTRO'
    },
    areaTotalCNN: {
        codigo: 'CAC04_CCNAR',
        pregunta: 'AREA TOTAL DE CCN'
    },
    areaProduccion: {
        codigo: 'CAC05_CCNPRO',
        pregunta: 'AREA EN PRODUCCIÓN'
    },
    edadCacaoProductivo: {
        codigo: 'CAC06_CCNED',
        pregunta: 'EDAD CACAO PRODUCTIVO'
    },
    areaRecienSembrada: {
        codigo: 'CAC07_CCNREC',
        pregunta: 'AREA RECIEN SEMBRADA'
    },
    edadCacaoReciente: {
        codigo: 'CAC08_CCNEDR',
        pregunta: 'EDAD CACAO RECIENTE'
    },
    produccionAnioAnteriorCacaoCNN: {
        codigo: 'CAC34_PRODCC',
        pregunta: 'PRODUCCIÓN AÑO ANTERIOR CACAO CNN'
    },
    precioPromedio: {
        codigo: 'CAC36_PRECC',
        pregunta: 'CUAL ES EL PRECIO PROMEDIO QUE LE PAGAN POR EL CACAO CNN'
    },
    tieneCacaoImproductivo: {
        codigo: 'CAC40_REC',
        pregunta: 'TIENE CACAO CCN IMPRODUCTIVO QUE PUEDA SER RECONVERTIDO A NACIONAL'
    },
    cuantasHectareasImproductivo: {
        codigo: 'CAC41_RHA',
        pregunta: 'CUANTAS HECTAREAS'
    },
    areaTotalNacional: {
        codigo: 'CAC09_NAREA',
        pregunta: 'ÁREA TOTAL DE NACIONAL'
    },
    areaTotalNacionalViejo: {
        codigo: 'CAC10_ACVIEJ',
        pregunta: 'ÁREA TOTAL DE NACIONAL VIEJO'
    },
    edadCacaoViejo: {
        codigo: 'CAC11_ECVIEJ',
        pregunta: 'EDAD CACAO VIEJO'
    },
    brotesBasales: {
        codigo: 'CAC56_BROT',
        pregunta: 'PRESENTA BROTES BASALES'
    },
    arbolesElite: {
        codigo: 'CAC57_ELIT',
        pregunta: 'PRESENTA ARBOLES ELITE'
    },
    areaTotalViejoInjertado: {
        codigo: 'CAC12_ACVIN',
        pregunta: 'HA. TOTAL VIEJO INJERTADO'
    },
    areaViejoInjertado: {
        codigo: 'CAC42_AVI',
        pregunta: 'AREA VIEJO INJERTADO (1)'
    },
    edadViejoInjertado: {
        codigo: 'CAC13_ECVIN',
        pregunta: 'EDAD VIEJO INJERTADO (1)'
    },
    areaTotalNuevosClones: {
        codigo: 'CAC14_NCAR',
        pregunta: 'HA. TOTAL NUEVOS CLONES'
    },
    areaNuevosClones: {
        codigo: 'CAC45_ANC',
        pregunta: 'AREA NUEVOS CLONES (1)'
    },
    edadNuevosClones: {
        codigo: 'CAC15_NCED',
        pregunta: 'EDAD NUEVOS CLONES (1)'
    },
    produccionAnioAnteriorCacaoNacional: {
        codigo: 'CAC33_PRODN',
        pregunta: 'PRODUCCIÓN AÑO ANTERIOR CACAO NACIONAL'
    },
    precioPromedioXCacao: {
        codigo: 'CAC35_PREN',
        pregunta: 'CUAL ES EL PRECIO PROMEDIO QUE LE PAGAN POR EL CACAO NACIONAL'
    },
    usoAnteriorAreaNueva: {
        codigo: 'CAC16_NCUSO',
        pregunta: 'USO ANTERIOR DEL AREA NUEVA'
    },
    otroUsoAnteriorAreaNueva: {
        codigo: 'CAC16_NCUSOTRO',
        pregunta: 'OTRO USO ANTERIOR DEL AREA NUEVA'
    },
    tipoVariedad: {
        codigo: 'CAC17_TIPVARI',
        pregunta: 'TIPO VARIEDAD'
    },
    especifiqueOtros: {
        codigo: 'CAC51_NC801',
        pregunta: 'VARIEDAD ESPECIFIQUE OTROS'
    },
    variedadesSembradasCalificacion: {
        codigo: 'CAC22_NCVAS',
        pregunta: 'LAS VARIEDADES SEMBRADAS DEMUESTRAN SER'
    },
    plantulasCondicionesEdafoclimaticas: {
        codigo: 'CAC23_PCOND',
        pregunta: 'SOBRE PLANTULAS: ADAPTACION A CONDICIONES EDAFOCLIMATICAS'
    },
    plantulasRendimiento: {
        codigo: 'CAC24_PREND',
        pregunta: 'SOBRE LAS PLANTULAS: RENDIMIENTO'
    },
    plantulasVigorPlanta: {
        codigo: 'CAC25_PVIG',
        pregunta: 'SOBRE LAS PLANTULAS: VIGOR DE LA PLANTA'
    },
    plantulasResistenciaEnfermedades: {
        codigo: 'CAC26_PREST',
        pregunta: 'SOBRE LAS PLANTULAS: RESISTENCIA A ENFERMEDADES'
    },
    nombreVivero: {
        codigo: 'CAC27_NVIV',
        pregunta: 'NOMBRE DEL VIVERO'
    },
    ubicacionVivero: {
        codigo: 'CAC28_UBIV',
        pregunta: 'UBICACIÓN DEL VIVERO'
    },
    encargadoPropagacion: {
        codigo: 'CAC29_PROP',
        pregunta: 'QUIEN REALIZO LA PROPAGACION'
    },
    otroEncargadoPropagacion: {
        codigo: 'CAC29_PROPOTRO',
        pregunta: 'QUIEN OTRO REALIZO LA PROPAGACION'
    },
    tipoConocimiento: {
        codigo: 'CAC30_CONC',
        pregunta: 'TIPO DE CONOCIMIENTO'
    },
    entidadDonacion: {
        codigo: 'CAC31_DONO',
        pregunta: 'ENTIDAD QUE DONÓ (En caso de ser donación)'
    },
    cantidadPlantasRecibidas: {
        codigo: 'CAC32_NPLANT',
        pregunta: 'CANTIDAD DE PLANTAS RECIBIDAS'
    },
    queCultivoPoda: {
        codigo: 'POD02_CULP',
        pregunta: 'QUE CULTIVO PODA'
    },
    predio: {
        codigo: 'PREDIO',
        pregunta: 'PREDIO'
    },
    productor: {
        codigo: 'PRODUCTOR',
        pregunta: 'PRODUCTOR'
    },
    coordenadasX: {
        codigo: 'FIN25_COOXV',
        pregunta: 'COORDENADAS X'
    },
    coordenadasY: {
        codigo: 'FIN26_COOYV',
        pregunta: 'COORDENADAS Y'
    },
    altura: {
        codigo: 'FIN27_ALTV',
        pregunta: 'ALTURA'
    },
    croquisPath: {
        codigo: 'CROQUIS',
        pregunta: 'CROQUIS PATH'
    },
    recibirPlantasCacaoNacional: {
        codigo: 'PRO01_PLACN',
        pregunta: 'RECIBIR PLANTAS DE CACAO NACIONAL'
    },
    aprenderElabProductosNaturales: {
        codigo: 'PRO07_PNAT',
        pregunta: 'APRENDER ELAB. PRODUCTOS NATURALES'
    },
    bandejasCajonesFermentacion: {
        codigo: 'PRO08_FERM',
        pregunta: 'BANDEJAS O CAJONES DE FERMENTACION '
    },
    dispuestoHacerloPropiaCuenta: {
        codigo: 'PRO10_PROP',
        pregunta: 'ESTÁ DISPUESTO A HACERLO POR SU PROPIA CUENTA'
    },
    tendalesElevadosCania: {
        codigo: 'PRO09_TEND',
        pregunta: 'TENDALES ELEVADOS DE CAÑA'
    },
    secadorasComunitarias: {
        codigo: 'PRO11_SECC',
        pregunta: 'SECADORAS COMUNITARIAS'
    },
    contarAgrupacionParaProyecto: {
        codigo: 'PRO12_AGRUP',
        pregunta: 'CUENTA CON AGRUPACION/VECINOS PARA TRABAJAR EN EL PROYECTO'
    },
    huertosOrganicos: {
        codigo: 'PRO13_HUER',
        pregunta: 'HUERTOS ORGANICOS'
    },
    desarrolloViveros: {
        codigo: 'PRO14_VIV',
        pregunta: 'DESARROLLO DE VIVEROS'
    },
    desarrolloVentaFertilizantes: {
        codigo: 'PRO15_VFER',
        pregunta: 'DESARROLLO Y VENTA DE FERTILIZANTES'
    },
    rehabilitacionFinca: {
        codigo: 'PRO17_REHB',
        pregunta: 'REHABILITACIÓN DE FINCA'
    },
    brigadaPodadores: {
        codigo: 'PRO18_BRIG',
        pregunta: 'BRIGADA DE PODADORES'
    },
    contarExperienciaPoda: {
        codigo: 'PRO19_EXPP',
        pregunta: 'CUENTA CON EXPERIENCIA EN PODA'
    },
    aniosExperiencia: {
        codigo: 'PRO20_AEXP',
        pregunta: 'AÑOS DE EXPERIENCIA EN PODA'
    },
    tieneAreaLibreParaSembrar: {
        codigo: 'PRO02_HALB',
        pregunta: 'TIENE AREA LIBRE PARA SEMBRAR'
    },
    areaLibre: {
        codigo: 'PRO03_NHA',
        pregunta: 'CUANTO HAY DE AREA LIBRE'
    },
    necesitaRehaReinjerto: {
        codigo: 'PRO04_REHAB',
        pregunta: 'NECESIDAD REHAB. / REINJERTO'
    },
    cantidad: {
        codigo: 'PRO05_NREHB',
        pregunta: 'CUANTO NECESITA'
    },
    incrementarProductividad: {
        codigo: 'INC_PROD',
        pregunta: 'INCREMENTAR PRODUCTIVIDAD'
    },
    mejorarCalidadCacao: {
        codigo: 'MEJOR_CALIDAD',
        pregunta: 'MEJORAR CALIDAD CACAO'
    },
    diversificacionIngresos: {
        codigo: 'DIVER_INGRESOS',
        pregunta: 'DIVERSIFICACIÓN DE INGRESOS'
    },
};


/***/ }),

/***/ "./src/environments/mappers/formularioLineaBase.ts":
/*!*********************************************************!*\
  !*** ./src/environments/mappers/formularioLineaBase.ts ***!
  \*********************************************************/
/*! exports provided: formularioLineaBaseMapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formularioLineaBaseMapper", function() { return formularioLineaBaseMapper; });
const formularioLineaBaseMapper = {
    fechaVisita: {
        codigo: 'F_VISITALB',
        pregunta: 'FECHA VISITA'
    },
    clasificacionMiembroFamiliar: {
        codigo: 'FA01_MF',
        pregunta: 'CLASIFICACIÓN DEL MIEMBRO FAMILIAR'
    },
    edad: {
        codigo: 'FA02_ED',
        pregunta: 'EDAD DEL MIEMBRO FAMILIAR'
    },
    genero: {
        codigo: 'FA03_GEN',
        pregunta: 'GÉNERO DEL MIEMBRO FAMILIAR'
    },
    seguridadSocial: {
        codigo: 'FA04_SS',
        pregunta: 'SEGURIDAD SOCIAL DEL MIEMBRO FAMILIAR'
    },
    nivelEduacion: {
        codigo: 'FA05_EDU',
        pregunta: 'NIVEL DE EDUCACIÓN'
    },
    laboraEnFinca: {
        codigo: 'FA06_LAB',
        pregunta: 'LABORA EN LA FINCA'
    },
    laborRealizado: {
        codigo: 'FA07_LABR',
        pregunta: 'LABOR QUE REALIZA'
    },
    horasAlDiaTrabaja: {
        codigo: 'FA08_HOR',
        pregunta: '¿CUÁNTAS HORAS AL DÍA LABORA?'
    },
    tieneOtraFuenteIngreso: {
        codigo: 'FA09_RD',
        pregunta: 'TIENE OTRA FUENTE DE INGRESOS'
    },
    sueldoIngresoMensual: {
        codigo: 'FA10_ING',
        pregunta: 'SUELDO O INGRESO MENSUAL'
    },
    familiarDiscapacitado: {
        codigo: 'FA42_DISCF',
        pregunta: 'ALGUN FAMILIAR QUE PRESENTE DISCAPACIDAD'
    },
    esposaInvolucradaEntrevista: {
        codigo: 'FA43_ESPA',
        pregunta: 'LA ESPOSA SE INVOLUCRA EN LA ENTREVISTA'
    },
    esposoIncluyeEsposaEntrevista: {
        codigo: 'FA44_ESPO',
        pregunta: 'ESPOSO INCLUYE A ESPOSA EN LA ENTREVISTA'
    },
    deseoIngresoAdicionalConyuge: {
        codigo: 'FA45_CONYIN',
        pregunta: 'GUSTARIA QUE SU CONYUGE TUVIESE ALGUN INGRESO ADICIONAL'
    },
    deseoTrabajoMedioTiempoProyectosFuturos: {
        codigo: 'FA46_MTVIV',
        pregunta: 'GUSTARÍA UN TRABAJO DE1/2 TIEMPO EN PROYECTOS FUTUROS DEL PROG.'
    },
    comoCual: {
        codigo: 'FA48_CUAL',
        pregunta: '¿COMO CUÁL?'
    },
    hijoInteresadoEnProyectosRehabilitacionFinca: {
        codigo: 'FA47_HIJP',
        pregunta: 'SU HIJO ESTARÍA INTERESADO EN PARTICIPAR EN PROYECTOS DE REHABILITACIÓN DE FINCA Y BRIGADAS'
    },
    interesElaborarFertilizanteNaturalOrganico: {
        codigo: 'FER18_CAPF',
        pregunta: '¿LE INTERERESARÍA ELABORAR FERTILIZANTES NATURALES / ORGÁNICOS?'
    },
    plagasAfectanCultivo: {
        codigo: 'MIPE09_PLAG',
        pregunta: 'PLAGAS QUE AFECTAN GENERALMENTE EN EL CULTIVO'
    },
    enfermedadesAfectanCultivo: {
        codigo: 'MIPE15_ENFERM',
        pregunta: 'ENFERMEDADES QUE AFECTAN GENERALMENTE EN EL CULTIVO'
    },
    productoParaPlagas: {
        codigo: 'MIPE07_PLA',
        pregunta: 'PRODUCTO QUIMICO O NATURAL QUE APLICÓ PARA LAS PLAGAS'
    },
    productoParaEnfermedades: {
        codigo: 'MIPE08_ENF',
        pregunta: 'PRODUCTO QUIMICO O NATURAL QUE APLICÓ PARA LAS ENFERMEDADES'
    },
    llevaRegistroPerdidasMazorcasXMonilla: {
        codigo: 'MIPE20_MZM',
        pregunta: '¿LLEVA REGISTRO DEL NÚMERO/PORCENTAJE DE MAZORCAS QUE PIERDE ANUALMENTE POR MONILLA?',
    },
    cantidadPerdidaMazorcas: {
        codigo: 'MIPE21_NMAZ',
        pregunta: '¿CUANTAS?'
    },
    periodoFertilizacion: {
        codigo: 'LAB01_F',
        pregunta: 'FERTILIZA'
    },
    periodoPoda: {
        codigo: 'LAB02_P',
        pregunta: 'PODA'
    },
    periodoControlMaleza: {
        codigo: 'LAB03_C',
        pregunta: 'CONTROLA MALEZA'
    },
    periodoMIPE: {
        codigo: 'LAB04_M',
        pregunta: 'MIPE'
    },
    periodoCosecha: {
        codigo: 'LAB05_C',
        pregunta: 'COSECHA'
    },
    accidentesLaboralesUltimoAnio: {
        codigo: 'SSO07_ACC',
        pregunta: '¿HA HABIDO ACCIDENTES LABORALES EN LA FINCA DURANTE EL ULTIMO AÑO?'
    },
    tipoAccidente: {
        codigo: 'SSO08_TACC',
        pregunta: 'QUÉ TIPO DE ACCIDENTE'
    },
    periodoIntoxicacionPresente: {
        codigo: 'SSO09_INT',
        pregunta: '¿HA SUFRIDO UD. O ALGUN MIEMBRO DE LA FAMILIA O ALGUN TRABAJADOR DE ALGUN EPISODIO DE INTOXICACION?'
    },
    producto: {
        codigo: 'SSO10_PROI',
        pregunta: '¿CON QUE PRODUCTO?'
    },
    centroSaludCercano: {
        codigo: 'SSO11_CS',
        pregunta: 'HAY UN CENTRO DE SALUD CERCANO'
    },
    periodoCadaTumba: {
        codigo: 'COS01_TUM',
        pregunta: 'SUS TUMBAS LAS REALIZA:'
    },
    latasCacaoXTumba: {
        codigo: 'COS02_LTC',
        pregunta: '¿CUÁNTAS LATAS DE CACAO FRESCO COSECHA POR TUMBA?'
    },
    realizaEscurridoSecadoCCN51: {
        codigo: 'FEM01_CCN',
        pregunta: '¿REALIZA ESCURRIDO Y/O PRE-SECADO PARA EL CCN51?'
    },
    diasFermentadoCacao: {
        codigo: 'FEM03_DIASF',
        pregunta: '¿CUÁNTOS DIAS FERMENTA EL CACAO?'
    },
    almacenaCacaoDespSecado: {
        codigo: 'CM01_ALM',
        pregunta: '¿ALMACENA EL CACAO DESPUES DEL SECADO?'
    },
    tiempoAlmacenadoCacao: {
        codigo: 'CM02_TALM',
        pregunta: 'POR CUANTO TIEMPO'
    },
    propiedadTransporte: {
        codigo: 'CM03_TRANS',
        pregunta: 'PROPIEDAD DEL TRANSPORTE'
    },
    tipoTransporte: {
        codigo: 'CM04_TTRAN',
        pregunta: 'TIPO DEL TRANSPORTE'
    },
    registroFinancieroFinca: {
        codigo: 'RGP01_RG',
        pregunta: '¿CUENTA CON UN REGISTRO DE COSTOS, GASTOS Y ACTIVIDADES DE LA FINCA?'
    },
    tipoRegistrosFinancierosFinca: {
        codigo: 'RGP07_PRM',
        pregunta: '¿QUÉ PARÁMETRO UTILIZA PARA CONTROLAR LOS RESULTADOS DE LAS ACTIVIDADES DE SU FINCA?'
    },
    perteneceAsocProgrCertif: {
        codigo: 'ASO01_PRO',
        pregunta: 'PERTENECE A UNA ORGANIZACIÓN / PROGRAMA / CERTIFICACION DE CACAO'
    },
    nombreAsociacion: {
        codigo: 'ASO02_NPRO',
        pregunta: 'NOMBRE DEL PROGRAMA, ASOCIACION, ETC'
    },
    cantidadMiembros: {
        codigo: 'ASO03_NMIEM',
        pregunta: 'CUANTOS MIEMBROS TIENE DICHA ASOCIACION'
    },
    recibeBeneficios: {
        codigo: 'ASO04_BENEF',
        pregunta: 'RECIBE BENEFICIOS O PROYECTOS DE DESARROLLO DE LA MISMA'
    },
    tiposBeneficios: {
        codigo: 'ASO05_TIPBENEF',
        pregunta: 'QUÉ TIPO DE BENEFICIOS'
    },
    otroTiposBeneficios: {
        codigo: 'ASO05_TIPBENEFOTRO',
        pregunta: 'QUÉ OTRO TIPO DE BENEFICIOS'
    },
    ayudaOtraInstitucion: {
        codigo: 'ASO14_OTRI',
        pregunta: 'RECIBE AYUDA DE ALGUNA OTRA INSTITUCIÓN?'
    },
    nombreOtraInstitucion: {
        codigo: 'ASO15_NINST',
        pregunta: 'NOMBRE DE INSTITUCIÓN'
    },
    tipoAyuda: {
        codigo: 'ASO16_AYUI',
        pregunta: 'TIPO DE AYUDA'
    },
    contrataTrabajadores: {
        codigo: 'LBS01_TRAB',
        pregunta: '¿CONTRATA TRABAJADORES?'
    },
    cantidadTrabajadores: {
        codigo: 'LBS02_NTRAB',
        pregunta: '¿CUÁNTOS TRABAJADORES?'
    },
    areaInicialContrato: {
        codigo: 'LBS03_ARTR',
        pregunta: '¿A PARTIR DE QUÉ CANTIDAD DE ÁREA CONTRATA?'
    },
    tipoContratoTrabajo: {
        codigo: 'LBS04_TTRAB',
        pregunta: 'LOS TRABAJADORES QUE CONTRATA SON'
    },
    contrataMenoresEdad: {
        codigo: 'LBS05_MED',
        pregunta: '¿CONTRATA TRABAJADORES MENORES DE 18 AÑOS?'
    },
    poseePermiso: {
        codigo: 'LBS12_MEDAD',
        pregunta: 'EN CASO DE SI, ¿CUENTA CON UN PERMISO DE TRABAJO PARA MENOR DE EDAD?'
    },
    baseContratoAgricola: {
        codigo: 'LBS06_CONT',
        pregunta: '¿CUMPLE UD. CON LA BASE DEL CONTRATO AGRICOLA POR UN DIA PARA EL CONTRATO DE SU PERSONAL DE TEMPORADA?'
    },
    energiaElectrica: {
        codigo: 'SBA01_EE',
        pregunta: 'CUENTA CON ENERGIA ELECTRICA'
    },
    tipoAguaConsumoFamiliar: {
        codigo: 'SBA02_CAG',
        pregunta: 'EL AGUA PARA CONSUMO FAMILIAR Y PREPARACION DE ALIMENTO ES'
    },
    conocimientoManejoDesechos: {
        codigo: 'HDE06_MDE',
        pregunta: '¿TIENE UD. CONOCIMIENTO SOBRE EL MANEJO DE DESECHOS?'
    },
    productoContaminaEcosistema: {
        codigo: 'HDE07_CONT',
        pregunta: 'EL PRODUCTOR CONTAMINA ECOSISTEMAS ACUATICOS O TERRESTRES'
    },
    ubicacionDesechosAguasNegras: {
        codigo: 'HDE08_UBIDES',
        pregunta: '¿DÓNDE SE VIERTEN LAS AGUAS NEGRAS Y LOS DESECHOS LIQUIDOS?'
    },
    tieneArbolesSombrio: {
        codigo: 'BIO03_SOMB',
        pregunta: '¿EL PRODUCTOR TIENE ARBOLES DE SOMBRIO?'
    },
    cultivaVegetalesHortalizasFrutas: {
        codigo: 'BIO13_OCUL',
        pregunta: 'ADICIONAL AL CACAO, ¿DESTINA UD. ESPACIO PARA CULTIVO DE VEGETALES, HORTALIZAS Y FRUTAS DE AUTOCONSUMO?'
    },
    compraProductosMercadoLocales: {
        codigo: 'BIO14_MERC',
        pregunta: 'COMPRA UD. ESTOS PRODUCTOS EN MERCADO LOCALES'
    },
    valorPromedioGastado: {
        codigo: 'BIO15_GAST',
        pregunta: '¿CUÁL ES EL VALOR QUE GASTA SEMANALMENTE EN COMPRA DE ESTOS PRODUCTOS?'
    }
};


/***/ }),

/***/ "./src/environments/mappers/formularioVerificacion.ts":
/*!************************************************************!*\
  !*** ./src/environments/mappers/formularioVerificacion.ts ***!
  \************************************************************/
/*! exports provided: formularioVerificacionMapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formularioVerificacionMapper", function() { return formularioVerificacionMapper; });
const formularioVerificacionMapper = {
    incrementoHectareajeFinca: {
        codigo: 'FIN19_INCHA',
        pregunta: 'HA INCREMENTADO HECTAREAJE EN SU FINCA',
    },
    cantidadAumento: {
        codigo: 'FIN20_CUANH',
        pregunta: '¿CUANTO?'
    },
    mesIncrementoHectareaje: {
        codigo: 'FIN21_MESH',
        pregunta: 'MES'
    },
    motivoAreaNueva: {
        codigo: 'FIN22_MOTIV',
        pregunta: 'MOTIVO AREA NUEVA'
    },
    usoAreaNueva: {
        codigo: 'FIN23_USOANT',
        pregunta: '¿CUAL ERA EL USO DEL AREA NUEVA?'
    },
    incrementoFueraTamanioFinca: {
        codigo: 'FIN28_NHA',
        pregunta: '¿INCREMENTO FUERA DE TAMAÑO DE FINCA?'
    },
    realizoInjertosUltimos12Meses: {
        codigo: 'FER20_INJ',
        pregunta: 'HA REALIZADO INJERTO LOS ULTIMOS 12 MESES PARA REJUVENECER LAS PLANTAS',
    },
    mesRealizoInjertos: {
        codigo: 'FER21_MESINJ',
        pregunta: '¿EN QUÉ MES?'
    },
    tipoSuelo: {
        codigo: 'BIO16_TSUEL',
        pregunta: 'TIPO DE SUELO'
    },
    capacitacionTomaMuestrasSuelo: {
        codigo: 'FER22_CMS',
        pregunta: '¿HA RECIBIDO CAPACITACIÓN EN LA TOMA DE MUESTRAS DE SUELO?'
    },
    analisisSuelo: {
        codigo: 'FER01_AS',
        pregunta: '¿HA REALIZADO ANÁLISIS DE SUELO?',
    },
    sueloPH: {
        codigo: 'FER02_PH',
        pregunta: 'PH DEL SUELO'
    },
    suelosNivelesAltosAcidez: {
        codigo: 'FER03_ACD',
        pregunta: 'SUELOS MUESTRAN NIVELES ALTOS DE ACIDEZ',
    },
    corregidoPHSueloFinca: {
        codigo: 'FER04_CPH1',
        pregunta: 'HA CORREGIDO PH DEL SUELO EN FINCA'
    },
    maneraCorregidoPHSuelo: {
        codigo: 'FER05_CPH2',
        pregunta: '¿CÓMO HA CORREGIDO PH DEL SUELO?',
    },
    tipoProducto: {
        codigo: 'FER06_TIPOPROD',
        pregunta: 'TIPO PRODUCTO'
    },
    tipoProductoQuimico: {
        codigo: 'FER06_QUI',
        pregunta: 'TIPO PRODUCTO (QUIMICO)'
    },
    tipoProductoNatural: {
        codigo: 'FER07_NAT',
        pregunta: 'TIPO PRODUCTO (NATURAL)'
    },
    fertilizaCacaotales: {
        codigo: 'FER08_FER',
        pregunta: 'FERTILIZA SUS CACAOTALES'
    },
    tipoProductoUsado: {
        codigo: 'FER09_TFER',
        pregunta: '¿QUÉ TIPO DE PRODUCTO UTILIZA?'
    },
    usaFertilizanteEdafico: {
        codigo: 'FER10_EDF',
        pregunta: 'USA FERTILIZANTE EDÁFICO',
    },
    vecesUsadoAlAnioFertilizanteEdafico: {
        codigo: 'FER11_EDFC',
        pregunta: 'CUÁNTAS VECES AL AÑO'
    },
    usaFertilizanteFoliar: {
        codigo: 'FER16_FOL',
        pregunta: 'USA FERTILIZANTE FOLIAR',
    },
    vecesUsadoAlAnioFertilizanteFoliar: {
        codigo: 'FER17_FOLC',
        pregunta: 'CUÁNTAS VECES AL AÑO'
    },
    recibidoFertilizanteKits: {
        codigo: 'FER23_FERA&D',
        pregunta: 'HA RECIBIDO FERTILIZANTE / KITS GRATUITOS DE A&D SANCHEZ',
    },
    tipoFertilizanteRecibido: {
        codigo: 'FER24_TIPFERTIL',
        pregunta: 'TIPO FERTILIZANTES RECIBIDOS'
    },
    opinionEfectividadFertilizante: {
        codigo: 'FER26_EFEC',
        pregunta: 'CUÁL ES SU PERCEPCIÓN SOBRE LA EFECTIVIDAD DE DICHO FERTILIZANTE'
    },
    repetirCompraConDescuento: {
        codigo: 'FER27_DESCT',
        pregunta: '¿REPETIRÍA LA COMPRA CON UN 20% DE DESCUENTO?'
    },
    disminuidoProductosQuimicosPorOrganicos: {
        codigo: 'FER31_DISMQ',
        pregunta: 'HA DISMINUIDO USO DE PRODUCTOS QUÍMICOS POR ORGÁNICOS'
    },
    poseeBodega: {
        codigo: 'BOD01_ALM',
        pregunta: 'FINCA TIENE BODEGA PARA ALMACENAR INSECTICIDAS, FERTILIZANTES, HERRAMIENTAS'
    },
    bodegaSegura: {
        codigo: 'BOD02_SEG',
        pregunta: 'SU BODEGA ES SEGURA'
    },
    bodegaOrdenada: {
        codigo: 'BOD03_ORD',
        pregunta: 'SU BODEGA ES ORDENADA'
    },
    clasificadaXProducto: {
        codigo: 'BOD04_CLAS',
        pregunta: 'ESTÁ CLASIFICADA POR PRODUCTO'
    },
    tieneRegistroAlmacena: {
        codigo: 'BOD08_LISTALM',
        pregunta: 'TIENE REGISTRO DE LO QUE ALMACENA'
    },
    cuentaDuchaEmergencia: {
        codigo: 'BOD05_EMER',
        pregunta: 'CUENTA CON DUCHA DE EMERGENCIA'
    },
    conocimientoProdcutosPermitidosLINDT: {
        codigo: 'BOD06_LINDT',
        pregunta: '¿TIENE CONOCIMIENTO DE LA LISTA DE PRODUCTOS PERMITIDOS POR EL PROGRAMA LINDT?'
    },
    controlaMalezas: {
        codigo: 'MAL01_CMA',
        pregunta: 'CONTROLA MALEZAS',
    },
    tiposMalezaEncontrada: {
        codigo: 'MAL02_TMAL',
        pregunta: 'TIPOS DE MALEZAS QUE SE PRESENTAN CON REGULARIDAD'
    },
    comoControlaMaleza: {
        codigo: 'MAL03_CONTRLMAL',
        pregunta: '¿CÓMO CONTROLA MALEZA?'
    },
    productoQuimicoUsado: {
        codigo: 'MAL09_PQ',
        pregunta: 'SI ES CONTROL QUÍMICO, QUÉ PRODUCTO APLICÓ ULTIMAMENTE'
    },
    regularidadProductoQuimicoUsado: {
        codigo: 'MAL10_TQUI',
        pregunta: 'CON QUÉ REGULARIDAD APLICA ESTOS PRODUCTOS QUÍMICOS?'
    },
    recomendacionSeguidaAplicandoProductoQuimico: {
        codigo: 'MAL11_RECM',
        pregunta: 'SE RIGE POR ALGÚN TIPO DE RECOMENDACIÓN AL MOMENTO DE REALIZAR UNA APLICACIÓN'
    },
    conocimientoDisposicionMaquinariaAgricola: {
        codigo: 'MAL06_MAQ',
        pregunta: 'CONTROL MECÁNICO: SABE UD. QUE TENEMOS A DISPOSICIÓN MAQUINARIAS DE USO AGRÍCOLA',
    },
    haceUsoMisma: {
        codigo: 'MAL07_USOM',
        pregunta: 'HACE USO DE LA MISMA'
    },
    tiempoPromedioUso: {
        codigo: 'MAL08_TUSO',
        pregunta: 'TIEMPO PROMEDIO DE USO (EN DÍAS):'
    },
    realizaPoda: {
        codigo: 'POD01_RPO',
        pregunta: 'REALIZA PODA',
    },
    tipoPoda: {
        codigo: 'POD03_TIPOPOD',
        pregunta: '¿QUÉ TIPO DE PODA APLICA?'
    },
    podaFormacionEsCorrecta: {
        codigo: 'POD07_CFORM',
        pregunta: '¿LA PODA REALIZADA POR EL AGRICULTOR ES LA CORRECTA?: FORMACION'
    },
    podaMantenimientoEsCorrecta: {
        codigo: 'POD08_CMANT',
        pregunta: '¿LA PODA REALIZADA POR EL AGRICULTOR ES LA CORRECTA?: MANTENIMIENTO'
    },
    podaFitosanitariaEsCorrecta: {
        codigo: 'POD09_CFITO',
        pregunta: '¿LA PODA REALIZADA POR EL AGRICULTOR ES LA CORRECTA?: FITOSANITARIA'
    },
    podaRehabilitacionEsCorrecta: {
        codigo: 'POD10_CREHB',
        pregunta: '¿LA PODA REALIZADA POR EL AGRICULTOR ES LA CORRECTA?: REHABILITACION'
    },
    cortesLaceracionesPlantaMalaPoda: {
        codigo: 'POD12_LACER',
        pregunta: 'OBSERVA CORTES O LACERACIONES EN LA PLANTA POR MALA PODA'
    },
    mazorcasEstadoPudricion: {
        codigo: 'POD11_PUDR',
        pregunta: 'OBSERVA MAZORCAS EN ESTADO DE PUDRICIÓN'
    },
    malaPodaAlbergaPlagasEnfermedades: {
        codigo: 'POD13_PLGEN',
        pregunta: 'PRODUCTO DE LA MALA PODA, LA PLANTA  ALBERGA PLAGAS Y ENFERMEDADES',
    },
    plagasMalaPoda: {
        codigo: 'POD14_PLAG',
        pregunta: 'PLAGAS'
    },
    enfermedadesMalaPoda: {
        codigo: 'POD18_ENFER',
        pregunta: 'ENFERMEDADES'
    },
    realizaPracticasMPE: {
        codigo: 'MIPE01_PRA',
        pregunta: 'REALIZA PRÁCTICAS DE MIPE',
    },
    tipoControlMPE: {
        codigo: 'MIPE02_TIPCONTRL',
        pregunta: 'TIPO DE CONTROL'
    },
    corrigioProblemasMPE: {
        codigo: 'MIPE05_COR',
        pregunta: 'CON LA APLICACIÓN REALIZADA SE CORRIGIÓ LOS PROBLEMAS DE MIPE DETECTADOS'
    },
    fincaLibreAplicacionQuimica: {
        codigo: 'MIPE06_LIBR',
        pregunta: 'LA FINCA SE PUEDE CONSIDERAR LIBRE DE APLICACIÓN QUÍMICA'
    },
    controlaEnfermedades: {
        codigo: 'MIPE22_CENF',
        pregunta: 'SABE COMO CONTROLAR LAS RESPECTIVAS ENFERMEDADES'
    },
    reduccionIncidenciaPlagasEnfermedades: {
        codigo: 'MIPE23_RCAP',
        pregunta: 'DESDE QUE APLICA CRITERIOS APRENDIDOS EN CAPACITACIÓN Y ASIST. TÉCNICA HA VISTO REDUCCIÓN EN INCIDENCIA DE PLAGAS Y ENFERMEDADES'
    },
    trabajadoresLlevadosCapacitacionesSSO: {
        codigo: 'SSO01_CAP',
        pregunta: '¿HA LLEVADO A SUS TRABAJADORES A LAS CAPACITACIONES DE SSO?'
    },
    usoPictograma: {
        codigo: 'SSO04_PIC',
        pregunta: 'USO DE PICTOGRAMA'
    },
    buenasPracticasFincaTrabajadores: {
        codigo: 'SSO02_BPT',
        pregunta: '¿HA COMUNICADO A LOS TRABAJADORES SOBRE BUENAS PRÁCTICAS EN LA FINCA?'
    },
    botiquin: {
        codigo: 'SSO05_BOT',
        pregunta: 'CUENTA CON BOTIQUÍN'
    },
    eppAntesPlaguicida: {
        codigo: 'SSO03_EPP',
        pregunta: '¿UTILIZA EPP ANTES DE APLICACIÓN DE PLAGUICIDA?'
    },
    instruccionesPrimerosAuxilios: {
        codigo: 'SSO06_PAX',
        pregunta: 'INSTRUCCIONES PRIMEROS AUXILIOS'
    },
    ventaAnualCacaoQuintales: {
        codigo: 'RGP03_QQV',
        pregunta: 'SABE UD. QUE CANTIDADES VENDE ANUALMENTE DE CACAO (EN QUINTALES)'
    },
    ventaAnualCacaoUSD: {
        codigo: 'RGP04_ING',
        pregunta: 'CUÁL ES EL INGRESO POR VENTAS EN UN AÑO (EN USD)'
    },
    egresoCompraMateriales: {
        codigo: 'RGP05_EGRI',
        pregunta: 'CUÁL ES EL EGRESO POR COMPRA DE MATERIALES E INSUMOS (USD)'
    },
    egresoManoObra: {
        codigo: 'RGP06_EGRM',
        pregunta: 'CUÁL ES EL EGRESO POR MANO DE OBRA (USD)'
    },
    manejoCuadernilloRegistros: {
        codigo: 'RGP08_CUAD',
        pregunta: 'MANEJO DEL CUADERNILLO DE REGISTROS'
    },
    manejoCostosPlanificacionFinanciera: {
        codigo: 'RGP09_PLANF',
        pregunta: 'MANEJO DE COSTOS Y PLANIFICACIÓN FINANCIERA DE FINCA'
    },
    disponibilidadAhorrarEnCuenta: {
        codigo: 'ASO12_CTA',
        pregunta: 'TIENE USTED LA DISPONIBILIDAD DE AHORRAR EN UNA CUENTA',
    },
    tipoInstitucionAhorroCuenta: {
        codigo: 'ASO13_TCTA',
        pregunta: 'ESPECIFIQUE INSTITUCION CUENTA DE AHORRO'
    },
    cosechaSeparadoCacaoNacionalCCN51: {
        codigo: 'COS03_SNAC',
        pregunta: '¿COSECHA POR SEPARADO EL CACAO NACIONAL DEL CCN51?'
    },
    plantasLaceracionesCicatricesMalaPractica: {
        codigo: 'COS04_LAC',
        pregunta: 'LAS PLANTAS SE ENCUENTRAN CON LACERACIONES O CICATRICES POR MALA PRÁCTICA DE COSECHA'
    },
    fermentaCacao: {
        codigo: 'FEM02_FERM',
        pregunta: 'FERMENTA SU CACAO'
    },
    razonNoFermenta: {
        codigo: 'FEM04_RAZNOFERM',
        pregunta: 'RAZÓN POR LA QUE NO FERMENTA'
    },
    modoFermentacion: {
        codigo: 'FEM08_TIPF',
        pregunta: 'CUANDO FERMENTA LO HACE'
    },
    medidasHigieneFermentacion: {
        codigo: 'FEM09_HIGF',
        pregunta: 'CUANDO FERMENTA LO HACE'
    },
    aumentoIngresoPorFermentacion: {
        codigo: 'FEM10_INCF',
        pregunta: '¿HA INCREMENTADO SUS INGRESOS DEBIDO A UN MEJOR TRATAMIENTO EN LA FERMENTACIÓN?'
    },
    nivelHumedadCacaoVendido: {
        codigo: 'SEC01_HUM',
        pregunta: 'CON QUÉ NIVEL DE HUMEDAD VENDE SU CACAO'
    },
    maneraRealzarSecado: {
        codigo: 'SEC02_SECADOMANER',
        pregunta: '¿CÓMO REALIZA EL SECADO?'
    },
    mejoraIngresoMejorTratamientoSecadoCacao: {
        codigo: 'SEC10_SING',
        pregunta: '¿HA INCREMENTADO SUS INGRESOS DEBIDO A UN MEJOR TRATAMIENTO DE SU PRODUCTO EN EL SECADO?'
    },
    personaVenderCacao: {
        codigo: 'CM06_EMP',
        pregunta: '¿A QUIÉN LE VENDE EL CACAO?',
    },
    razon1: {
        codigo: 'CM07_RAZV1',
        pregunta: '¿POR QUÉ?: RAZÓN 1'
    },
    razon2: {
        codigo: 'CM08_RAZV2',
        pregunta: '¿POR QUÉ?: RAZÓN 2'
    },
    recibeBonosEmpresaProgramaLINDT: {
        codigo: 'CM11_BON19',
        pregunta: 'HA RECIBIDO BONOS QUE LA EMPRESA OFRECE DEL PROGRAMA LINDT',
    },
    frecuenciaRecibeBono: {
        codigo: 'CM12_FBON19',
        pregunta: '¿CON QUÉ FRECUENCIA?'
    },
    discriminacion: {
        codigo: 'LBS07_DISCR',
        pregunta: 'DISCRIMINACIÓN'
    },
    explotacion: {
        codigo: 'LBS08_EXPL',
        pregunta: 'EXPLOTACIÓN'
    },
    trabajoInfantil: {
        codigo: 'LBS09_TRAINF',
        pregunta: 'TRABAJO INFANTIL'
    },
    documentosSoporte: {
        codigo: 'LBS10_DOCM',
        pregunta: 'DOCUMENTOS DE SOPORTE'
    },
    montoAcuerdoContratoAgricola: {
        codigo: 'LBS11_CONTRA',
        pregunta: 'MONTO DE ACUERDO AL CONTRATO AGRÍCOLA'
    },
    fincaConRiego: {
        codigo: 'HDE01_RIEG',
        pregunta: 'FINCA CUENTA CON RIEGO'
    },
    disenioRiego: {
        codigo: 'HDE02_DISRIEG',
        pregunta: 'DISEÑO DEL RIEGO',
    },
    hectareasDisenioRiego: {
        codigo: 'HDE31_HECTRIEG',
        pregunta: 'HECTÁREAS CON RIEGO'
    },
    hectareasDisenioRiegoFijo: {
        codigo: 'HDE31_HARF',
        pregunta: 'HECTÁREAS CON RIEGO FIJO'
    },
    hectareasDisenioRiegoMovible: {
        codigo: 'HHDE33_HARM',
        pregunta: 'HECTÁREAS CON RIEGO MOVIBLE'
    },
    permisoExtraerAguaRiego: {
        codigo: 'HDE03_PERM',
        pregunta: 'PERMISO DE EXTRAER AGUA PARA RIEGO'
    },
    analisisAguaRiego: {
        codigo: 'HDE04_ANAG',
        pregunta: 'REALIZA ANÁLISIS DE AGUA DE RIEGO'
    },
    presentaAnexos: {
        codigo: 'HDE05_ANEX',
        pregunta: 'PRESENTA ANEXOS'
    },
    utilizaFiltroEcologico: {
        codigo: 'HDE08_FILT',
        pregunta: 'UTILIZA FILTRO ECOLÓGICO',
    },
    razonUsoFiltroEcologico: {
        codigo: 'HDE09_PFILT',
        pregunta: 'PARA QUÉ LO UTILIZA'
    },
    areaDeschPlasticos: {
        codigo: 'HDE10_ADES',
        pregunta: 'CUENTA CON ÁREA  DESECH. PLÁSTICOS'
    },
    fincaLibrePlasticos: {
        codigo: 'HDE11_LIBP',
        pregunta: 'FINCA ESTÁ LIBRE DE PLÁCTICOS'
    },
    clasificaBasuraDomestica: {
        codigo: 'HDE16_BDOM',
        pregunta: 'CLASIFICA BASURA DOMÉSTICA'
    },
    criterioClasificaBasuraDomestica: {
        codigo: 'HDE17_CRITCLASFBAS',
        pregunta: 'CUÁL ES EL CRITERIO'
    },
    practicaReciclajeCompostaje: {
        codigo: 'HDE20_RECI',
        pregunta: 'PRACTICA RECICLAJE O COMPOSTAJE'
    },
    tratamientoBasura: {
        codigo: 'HDE21_TRATB',
        pregunta: 'CUÁL ES EL TRATAMIENTO DE LA BASURA'
    },
    conocimientoAreaRecepcioEnvasesProductosQuimicos: {
        codigo: 'HDE22_RECP',
        pregunta: '¿SABE USTED QUE LA EMPRESA CUENTA CON UN ÁREA DE RECEPCIÓN DE ENVASES DE PRODUCTOS QUÍMICOS VACÍOS?',
    },
    usoServicioAreaRecepcioEnvasesProductosQuimicos: {
        codigo: 'HDE23_SERV',
        pregunta: 'HA HECHO USO DE ESTE SERVICIO'
    },
    frecuenciaUsoServicioAreaRecepcioEnvasesProductosQuimicos: {
        codigo: 'HDE24_FREQ',
        pregunta: 'FRECUENCIA'
    },
    almacenaSeguridadEnvasesPrevioTraslado: {
        codigo: 'HDE25_ALMC',
        pregunta: 'ALMACENA CON SEGURIDAD LOS ENVASES PREVIO AL TRASLADO DE DESTINO',
    },
    lugarAlmacena: {
        codigo: 'HDE26_LALM',
        pregunta: 'CUÁL ES EL LUGAR DE ALMACENAMIENTO'
    },
    tratamientoAguasNegras: {
        codigo: 'HDE27_AGNEG',
        pregunta: 'TRATAMIENTO AGUA NEGRA'
    },
    tipoExtraccion: {
        codigo: 'HDE28_RIEGP',
        pregunta: 'TIPO EXTRACCIÓN'
    },
    infraestructuraRiego: {
        codigo: 'HDE29_HARIEG',
        pregunta: 'INFRAESTRUCTURA DEL RIEGO'
    },
    impactoRiego: {
        codigo: 'HDE30_IMPR',
        pregunta: 'IMPACTO DEL RIEGO'
    },
    practicasConservacionSuelos: {
        codigo: 'BIO01_SUEL',
        pregunta: 'PRODUCTOR UTILIZA PRÁCTICAS DE CONSERVACIÓN DE SUELOS'
    },
    practicaDeforestacion: {
        codigo: 'BIO12_DEF',
        pregunta: 'OBSERVA QUE PRODUCTOR PRACTIQUE DEFORESTACIÓN'
    },
    plantadoArbolesSombrioRecient: {
        codigo: 'BIO16_ARBREC',
        pregunta: 'HA PLANTADO ÁRBOLES DE SOMBRÍO RECIENTEMENTE',
    },
    cuantosArbolesSombrio: {
        codigo: 'BIO17_NARBREC',
        pregunta: '¿CUÁNTOS?'
    },
    promedioArbolesXHectarea: {
        codigo: 'BIO18_NARBH',
        pregunta: 'PROMEDIO DE ÁRBOLES POR HECTÁREA'
    },
    reforestadoOrillas: {
        codigo: 'BIO19_RORIL',
        pregunta: '¿HA REFORESTADO LAS ORILLAS?'
    },
    promedioArbolXHectarea12MAltura: {
        codigo: 'BIO04_MTR',
        pregunta: 'PROMEDIO DE ÁRBOLES X HA. QUE SUPERAN LOS 12 METROS DE ALTURA'
    },
    especiesDiferentesArbolesXHectarea: {
        codigo: 'BIO06_ESPAR',
        pregunta: 'ESPECIES DIFERENTES DE ÁRBOLES QUE EXISTEN X HA'
    },
    especiesArbolesEnCultivo: {
        codigo: 'BIO07_ESPECIE',
        pregunta: '¿QUÉ ESPECIES DE ÁRBOLES PRESENTA EL CULTIVO?',
    },
    especifiqueOtrosEspeciesArboles: {
        codigo: 'BIO11_OTR',
        pregunta: 'ESPECIFIQUE OTRAS'
    },
    poseeFuenteHidrica: {
        codigo: 'RIB01_FHID',
        pregunta: 'POSEE ALGUNA FUENTE HÍDRICA'
    },
    nombreFuenteHidrica: {
        codigo: 'RIB02_NOMBFUENTHIDR',
        pregunta: 'NOMBRE FUENTE HIDRICA'
    },
    especifiqueOtros: {
        codigo: 'RIB06_OTR',
        pregunta: 'ESPECIFIQUE OTROS'
    },
    consideradaFuenteHidrica: {
        codigo: 'RIB07_CFHI',
        pregunta: 'CÓMO SON CONSIDERADAS LAS FUENTES HÍDRICAS'
    },
    tipoFuenteHidrica: {
        codigo: 'RIB08_TIPFUENTHIDR',
        pregunta: 'TIPO FUENTE HIDRICA'
    },
    poseeNacientes: {
        codigo: 'RIB14_NAC',
        pregunta: 'SU FINCA POSEE NACIENTES'
    },
    cuantasNacientes: {
        codigo: 'RIB15_NNAC',
        pregunta: 'CUÁNTAS NACIENTES'
    },
    brindaProteccionFuenteHidrica: {
        codigo: 'RIB16_PROFH',
        pregunta: 'SE BRINDA PROTECCIÓN A FUENTES HÍDRICAS',
    },
    comoBrindaProtFuentHidr: {
        codigo: 'RIB17_CPRO',
        pregunta: 'CÓMO (ZONA AMORTIGU.)'
    },
    distanciaRequerida: {
        codigo: 'RIB18_DISTR',
        pregunta: 'SE CUMPLE CON LAS DISTANCIAS REQUERIDAS'
    },
    sueloPresentaProblemaErosion: {
        codigo: 'RIB19_EROS',
        pregunta: 'SU SUELO PRESENTA PROBLEMAS DE EROSIÓN'
    },
    tipoProblemaErosion: {
        codigo: 'RIB20_PERO',
        pregunta: 'TIPO DE PROBLEMA DE EROSIÓN QUE PRESENTA'
    },
    necesitaImplementarPracticasMejoraSuelo: {
        codigo: 'RIB21_MEJS',
        pregunta: 'SE NECESITA IMPLEMENTAR PRÁCTICAS DE MEJORA DE SUELOS'
    },
    comoQuePracticas: {
        codigo: 'RIB22_COM',
        pregunta: 'CÓMO PRACTICAS'
    },
    gradoPresentanPendientes: {
        codigo: 'RIB23_GRAD',
        pregunta: 'GRADO QUE PRESENTAN LAS PENDIENTES'
    },
    cuentaConAreaForestales: {
        codigo: 'RIB24_AFOR',
        pregunta: 'CUENTA CON ÁREAS FORESTALES'
    },
    tipoAreaForestal: {
        codigo: 'RIB25_TAFOR',
        pregunta: 'TIPO AREA FORESTAL'
    },
    realizaPlanesCorteExtraccionMadera: {
        codigo: 'RIB26_CORT',
        pregunta: 'REALIZA PLANES DE CORTE PARA EXTRACCIÓN DE MADERA'
    },
    presentaAnexosAreasAltoValor: {
        codigo: 'RIB27_ANEX',
        pregunta: 'PRESENTA ANEXOS'
    },
    realizaPlanesReforestacion: {
        codigo: 'RIB28_REFOR',
        pregunta: 'REALIZA PLANES DE REFORESTACIÓN'
    },
    conoceEspeciePeligroExtincionEnFinca: {
        codigo: 'RIB29_PEXT',
        pregunta: 'CONOCE ALGUNA ESPECIE EN PELIGRO DE EXTINCIÓN, RARA O AMENAZADA EN SU FINCA'
    },
    cualesEspeciesPeligroExtincion: {
        codigo: 'RIB30_ESPC',
        pregunta: 'CUALES ESPECIES EN PELIGRO DE EXTINCION'
    },
    especifiqueCualesEspeciesPeligroExtincion: {
        codigo: 'RIB33_ESPECPELIGEXTIN',
        pregunta: 'ESPECIFIQUE ESPECIE PELIGO EXTINCION'
    },
    fincaConsideradaAltoValor: {
        codigo: 'RIB31_ALTV',
        pregunta: 'LA FINCA ES CONSIDERADA DE ALTO VALOR'
    },
    tipoAltoValor: {
        codigo: 'RIB32_AVTIPO',
        pregunta: 'TIPO DE FINCA DE ALTO VALOR'
    },
    usoCultivoDiferenteCacao: {
        codigo: 'FIN15_OBJC',
        pregunta: 'UD DESTINA LOS CULTIVOS DIFERENTES AL CACAO A'
    },
    otraActividadDentroFincaConIngreso: {
        codigo: 'FIN32_ONF',
        pregunta: 'REALIZA OTRA ACTIVIDAD DENTRO DE LA FINCA QUE GENERE INGRESOS',
    },
    otraActividadFueraFincaConIngreso: {
        codigo: 'FIN33_ACTIVONF',
        pregunta: 'OTRA ACTIVIDAD'
    },
    huertosOrganicosEnFinca: {
        codigo: 'BEN45_HUEROR',
        pregunta: 'HA IMPLEMENTADO HUERTOS ORGÁNICOS DENTRO DE SU FINCA'
    },
    realizaActividadFueraFincaConIngreso: {
        codigo: 'FIN30_OFF',
        pregunta: 'REALIZA ACTIVIDAD ADICIONAL FUERA DE FINCA QUE GENERE INGRESOS',
    },
    actividadFueraFincaConIngreso: {
        codigo: 'FIN34_ACTIVFUERAF',
        pregunta: 'ACTIVIDAD FUERA FINCA CON INGRESO'
    },
    utilidadCacaoFinoAromaSostenibilidadTrazabilidad: {
        codigo: 'CAP06_M1UTI',
        pregunta: 'UTILIDAD CACAO FINO DE AROMA, SOSTENIBILIDAD Y TRAZABILIDAD'
    },
    aplicaCacaoFinoAromaSostenibilidadTrazabilidad: {
        codigo: 'CAP07_M1APL',
        pregunta: 'APLICA CACAO FINO DE AROMA, SOSTENIBILIDAD Y TRAZABILIDAD'
    },
    utilidadBuenasPracticasAgricolas: {
        codigo: 'CAP10_M2UTI',
        pregunta: 'UTILIDAD BUENAS PRÁCTICAS AGRÍCOLAS'
    },
    aplicaBuenasPracticasAgricolas: {
        codigo: 'CAP11_M2APL',
        pregunta: 'APLICA BUENAS PRÁCTICAS AGRÍCOLAS'
    },
    utilidadParametrosCalidad: {
        codigo: 'CAP14_M3UTIL',
        pregunta: 'UTILIDAD PARÁMETROS DE CALIDAD'
    },
    aplicaParametrosCalidad: {
        codigo: 'CAP15_M3APL',
        pregunta: 'APLICA PARÁMETROS DE CALIDAD'
    },
    utilidadBuenasPracticasSociales: {
        codigo: 'CAP18_M4UTIL',
        pregunta: 'UTILIDAD BUENAS PRÁCTICAS SOCIALES'
    },
    aplicaBuenasPracticasSociales: {
        codigo: 'CAP19_M4APL',
        pregunta: 'APLICA BUENAS PRÁCTICAS SOCIALES'
    },
    utilidadBuenasPracticasAmbientales: {
        codigo: 'CAP22_M5UTIL',
        pregunta: 'UTILIDAD BUENAS PRÁCTICAS AMBIENTALES'
    },
    aplicaBuenasPracticasAmbientales: {
        codigo: 'CAP23_M5APL',
        pregunta: 'APLICA BUENAS PRÁCTICAS AMBIENTALES'
    },
    utilidadElaboracionProductosOrganicos: {
        codigo: 'CAP26_T1UTIL',
        pregunta: 'UTILIDAD ELABORACIÓN DE PRODUCTOS ORGÁNICOS'
    },
    aplicaElaboracionProductosOrganicos: {
        codigo: 'CAP27_T1APL',
        pregunta: 'APLICA ELABORACIÓN DE PRODUCTOS ORGÁNICOS'
    },
    utilidadReproduccionVegetativa: {
        codigo: 'CAP30_T2UTIL',
        pregunta: 'UTILIDAD REPRODUCCIÓN VEGETATIVA'
    },
    aplicaReproduccionVegetativa: {
        codigo: 'CAP31_T2APL',
        pregunta: 'APLICA REPRODUCCIÓN VEGETATIVA'
    },
    utilidadPoda: {
        codigo: 'CAP34_T3UTIL',
        pregunta: 'UTILIDAD PODA'
    },
    aplicaPoda: {
        codigo: 'CAP35_T3APL',
        pregunta: 'APLICA PODA'
    },
    utilidadApicultura: {
        codigo: 'CAP38_T4UTIL',
        pregunta: 'UTILIDAD APICULTURA'
    },
    aplicaApicultura: {
        codigo: 'CAP39_T4APL',
        pregunta: 'APLICA APICULTURA'
    },
    utilidadPorcicultura: {
        codigo: 'CAP42_T5UTIL',
        pregunta: 'UTILIDAD PORCICULTURA'
    },
    aplicaPorcicultura: {
        codigo: 'CAP43_T5APL',
        pregunta: 'APLICA PORCICULTURA'
    },
    utilidadPiscicultura: {
        codigo: 'CAP46_T6UTIL',
        pregunta: 'UTILIDAD PISCICULTURA'
    },
    aplicaPiscicultura: {
        codigo: 'CAP47_T6APL',
        pregunta: 'APLICA PISCICULTURA'
    },
    utilidadRiego: {
        codigo: 'CAP50_T7UTIL',
        pregunta: 'UTILIDAD REIGO'
    },
    aplicaRiego: {
        codigo: 'CAP51_T7APL',
        pregunta: 'APLICA RIEGO'
    },
    utilidadAgroforesteriaDinamica: {
        codigo: 'CAP69_SAFU',
        pregunta: 'UTILIDAD AGROFORESTERÍA DINÁMICA'
    },
    aplicaAgroforesteriaDinamica: {
        codigo: 'CAP70_SAFA',
        pregunta: 'APLICA AGROFORESTERÍA DINÁMICA'
    },
    temasAdicionalesGustariaAprender: {
        codigo: 'CAP58_PROXC',
        pregunta: 'QUÉ TEMAS ADICIONALES LE GUSTARÍA APRENDER EN PRÓXIMAS CAPACITACIONES'
    },
    necesidadesDetectadasFinca: {
        codigo: 'BEN46_ONEC',
        pregunta: 'OTRAS NECESIDADES DETECTADAS EN LA FINCA'
    },
    estadoPlantasFrutales: {
        codigo: 'INC01-PLANTFRUT',
        pregunta: 'ESTADO PLANTAS FRUTALES'
    },
    estadoPlantasForestales: {
        codigo: 'INC02-PLANTFOREST',
        pregunta: 'ESTADO PLANTAS FORESTALES'
    },
    estadoOtrosAmbiental: {
        codigo: 'INC03-OTROSAMBIENT',
        pregunta: 'ESTADO OTROS AMBIENTAL'
    },
    necesitaPlantasFrutales: {
        codigo: 'INC04-PLANTFRUT',
        pregunta: 'NECESITA PLANTAS FRUTALES'
    },
    necesitaPlantasForestales: {
        codigo: 'INC05-PLANTFOREST',
        pregunta: 'NECESITA PLANTAS FORESTALES'
    },
    necesitaOtrosAmbiental: {
        codigo: 'INC06-OTROSAMBIENT',
        pregunta: 'NECESITA OTROS AMBIENTAL'
    },
    estadoFertilizanteEdafico: {
        codigo: 'INC07-FERTEDAF',
        pregunta: 'ESTADO FERTILIZANTE EDAFICO'
    },
    estadoFertilizanteFoliar: {
        codigo: 'INC08-FERTFOLR',
        pregunta: 'ESTADO FERTILIZANTE FOLIAR'
    },
    necesitaFertilizanteEdafico: {
        codigo: 'INC09-FERTEDAF',
        pregunta: 'NECESITA FERTILIZANTE EDAFICO'
    },
    necesitaFertilizanteFoliar: {
        codigo: 'INC10-FERTFOLR',
        pregunta: 'NECESITA FERTILIZANTE FOLIAR'
    },
    estadoMotoguadania: {
        codigo: 'INC11-MOTOGUAD',
        pregunta: 'ESTADO MOTO GUADAÑA'
    },
    estadoMotosierra: {
        codigo: 'INC12-MOTOSIE',
        pregunta: 'ESTADO MOTOSIERRA'
    },
    estadoPodadoraDeAltura: {
        codigo: 'INC13-PODADALTU',
        pregunta: 'ESTADO PODADORA DE ALTURA'
    },
    estadoBombaRiego: {
        codigo: 'INC14-BOMBRIEGO',
        pregunta: 'ESTADO BOMBA RIEGO'
    },
    estadoBombaAMotor: {
        codigo: 'INC15-BOMBMOT',
        pregunta: 'ESTADO BOMBA A MOTOR'
    },
    estadoOtrosMaquinariaAgricola: {
        codigo: 'INC16-OTROSMAQAGRI',
        pregunta: 'ESTADO OTROS MAQUINARIA AGRICOLA'
    },
    necesitaMotoguadania: {
        codigo: 'INC17-MOTOGUAD',
        pregunta: 'NECESITA MOTO GUADAÑA'
    },
    necesitaMotosierra: {
        codigo: 'INC18-MOTOSIE',
        pregunta: 'NECESITA MOTO SIERRA'
    },
    necesitaPodadoraDeAltura: {
        codigo: 'INC19-PODADALTU',
        pregunta: 'NECESITA PODADORA DE ALTURA'
    },
    necesitaBombaRiego: {
        codigo: 'INC20-BOMBRIEGO',
        pregunta: 'NECESITA BOMBA DE RIEGO'
    },
    necesitaBombaAMotor: {
        codigo: 'INC21-BOMBMOT',
        pregunta: 'NECESITA BOMBA A MOTOR'
    },
    necesitaOtrosMaquinariaAgricola: {
        codigo: 'INC22-OTROSMAQAGRI',
        pregunta: 'NECESITA OTROS MAQUINARIA AGRICOLA'
    },
    estadoTijeras: {
        codigo: 'INC23-TIJERAS',
        pregunta: 'ESTADO TIJERAS'
    },
    estadoSerruchos: {
        codigo: 'INC24-SERRUCH',
        pregunta: 'ESTADO SERRUCHOS'
    },
    estadoMachetes: {
        codigo: 'INC25-MACHET',
        pregunta: 'ESTADO MACHETES'
    },
    estadoBaldes: {
        codigo: 'INC26-BALD',
        pregunta: 'ESTADO BALDES'
    },
    estadoTanques: {
        codigo: 'INC27-TANQ',
        pregunta: 'ESTADO TANQUES'
    },
    estadoPalas: {
        codigo: 'INC28-PAL',
        pregunta: 'ESTADO PALAS'
    },
    estadoEPP: {
        codigo: 'INC29-EPP',
        pregunta: 'ESTADO EPP'
    },
    estadoKitPoda: {
        codigo: 'INC29-KITPOD',
        pregunta: 'ESTADO KIT PODA'
    },
    estadoKitVivero: {
        codigo: 'INC30-KITVIVER',
        pregunta: 'ESTADO KIT VIVERO'
    },
    estadoOtrosHerramientas: {
        codigo: 'INC31-OTRHERRA',
        pregunta: 'ESTADO OTROS HERRAMIENTAS'
    },
    necesitaTijeras: {
        codigo: 'INC32-TIJER',
        pregunta: 'NECESITA TIJERAS'
    },
    necesitaSerruchos: {
        codigo: 'INC33-SERRUC',
        pregunta: 'NECESITA SERRUCHOS'
    },
    necesitaMachetes: {
        codigo: 'INC34-MACHET',
        pregunta: 'NECESITA MACHETES'
    },
    necesitaBaldes: {
        codigo: 'INC35-BALD',
        pregunta: 'NECESITA BALDES'
    },
    necesitaTanques: {
        codigo: 'INC36-TANQ',
        pregunta: 'NECESITA TANQUES'
    },
    necesitaPalas: {
        codigo: 'INC37-PAL',
        pregunta: 'NECESITA PALAS'
    },
    necesitaEPP: {
        codigo: 'INC38-EPP',
        pregunta: 'NECESITA EPP'
    },
    necesitaKitPoda: {
        codigo: 'INC39-KITPOD',
        pregunta: 'NECESITA KIT DE PODA'
    },
    necesitaKitVivero: {
        codigo: 'INC40-KITVIV',
        pregunta: 'NECESITA KIT DE VIVERO'
    },
    necesitaOtrosHerramientas: {
        codigo: 'INC41-OTRHERR',
        pregunta: 'NECESITA OTRAS HERRAMIENTAS'
    },
    necesitaPlantasCacao800801: {
        codigo: 'INC42-PLANTCAC800801',
        pregunta: 'NECESITA PLANTAS CACAO 800-801'
    },
    necesitaComboApicola: {
        codigo: 'INC43-COMBAPIC',
        pregunta: 'NECESITA COMBO APICOLA'
    },
    necesitaPiesCriasInsumos: {
        codigo: 'INC44-PIEINSU',
        pregunta: 'NECESITA PIES DE CRIAS E INSUMOS'
    },
    necesitaPecesInsumos: {
        codigo: 'INC45-PECINSUM',
        pregunta: 'NECESITA PECES E INSUMOS'
    },
    necesitaRiego: {
        codigo: 'INC46-RIEG',
        pregunta: 'NECESITA REIGO'
    },
    necesitaOtrosProyectosInversion: {
        codigo: 'INC47-OTRPROYINV',
        pregunta: 'NECESITA OTROS PROYECTOS INVERSION'
    },
    disponibilidadInvertirPlantasCacao800801: {
        codigo: 'INC48-PLANTCAC800801',
        pregunta: 'DISPONIBILIDAD A INVERTIR EN PLANTAS DE CACAO 800-801'
    },
    disponibilidadInvertirComboApicola: {
        codigo: 'INC49-COMBAPIC',
        pregunta: 'DISPONIBILIDAD A INVERTIR EN COMBO APICOLA'
    },
    disponibilidadInvertirPiesCriasInsumos: {
        codigo: 'INC50-PIECRIASINSU',
        pregunta: 'DISPONIBILIDAD A INVERTIR EN PIES DE CRIAS E INSUMOS'
    },
    disponibilidadInvertirPecesInsumos: {
        codigo: 'INC51-PECINSU',
        pregunta: 'DISPONIBILIDAD A INVERTIR EN PECES E INSUMOS'
    },
    disponibilidadInvertirRiego: {
        codigo: 'INC52-RIEG',
        pregunta: 'DISPONIBILIDAD A INVERTIR EN RIEGO'
    },
    disponibilidadInvertirOtros: {
        codigo: 'INC53-OTROSPROYINV',
        pregunta: 'DISPONIBILIDAD A INVERTIR EN OTROS PROYECTOS DE INVERSION'
    },
    condAdecuadasPlantasCacao800801: {
        codigo: 'INC54-PLANTCAC800801',
        pregunta: 'CONDICIONES ADECUADAS DE PLANTAS DE CACAO 800-801'
    },
    condAdecuadasComboApicola: {
        codigo: 'INC55-COMBBAPIC',
        pregunta: 'CONDICIONES ADECUADAS DE COMBO APICOLA'
    },
    condAdecuadasPiesCriasInsumos: {
        codigo: 'INC56-PIECRIAINSUM',
        pregunta: 'CONDICIONES ADECUADAS DE PIES DE CRIAS E INSUMOS'
    },
    condAdecuadasPecesInsumos: {
        codigo: 'INC57-PECINSUM',
        pregunta: 'CONDICIONES ADECUADAS DE PECES E INSUMOS'
    },
    condAdecuadasRiego: {
        codigo: 'INC58-REIG',
        pregunta: 'CONDICIONES ADECUADAS DE RIEGO'
    },
    condAdecuadasOtros: {
        codigo: 'INC59-OTROPROYINV',
        pregunta: 'CONDICIONES ADECUADAS DE OTROS PROYECTOS DE INVERSION'
    },
    condEconomicasPlantasCacao800801: {
        codigo: 'INC60-PLANTCAC800801',
        pregunta: 'CONDICIONES ECONOMICAS DE PLANTAS DE CACAO 800-801'
    },
    condEconomicasComboApicola: {
        codigo: 'INC61-COMBAPIC',
        pregunta: 'CONDICIONES ECONOMICAS DE COMBO APICOLA'
    },
    condEconomicasPiesCriasInsumos: {
        codigo: 'INC62-PIECRIAINSUM',
        pregunta: 'CONDICIONES ECONOMICAS DE PIES DE CRIAS E INSUMO'
    },
    condEconomicasPecesInsumos: {
        codigo: 'INC63-PECINSUM',
        pregunta: 'CONDICIONES ECONOMICAS DE PECES E INSUMOS'
    },
    condEconomicasRiego: {
        codigo: 'INC64-RIEGO',
        pregunta: 'CONDICIONES ECONOMICAS DE RIEGO'
    },
    condEconomicasOtros: {
        codigo: 'INC65-OTROPROYINV',
        pregunta: 'CONDICIONES ECONOMICAS DE OTROS PROYECTOS DE INVERSION'
    },
    necesitaCajonFermentacion: {
        codigo: 'INC66-CAJFERMT',
        pregunta: 'NECESITA CAJON FERMENTACION'
    },
    necesitaMarquesinas: {
        codigo: 'INC67-MARQUE',
        pregunta: 'NECESITA MARQUESINAS'
    },
    necesitaTendales: {
        codigo: 'INC68-TEND',
        pregunta: 'NECESITA TENDALES'
    },
    necesitaSecadoras: {
        codigo: 'INC69-SECAD',
        pregunta: 'NECESITA SECADORAS'
    },
    necesitaOtrosCalidadPostCosecha: {
        codigo: 'INC70-OTROCALPOSCOSE',
        pregunta: 'NECESITA OTROS CALIDAD DE POST COSECHA'
    },
    disponibilidadInvertirCajonFermentacion: {
        codigo: 'INC71-CAJFERMT',
        pregunta: 'DISPONIBILIDAD A INVERTIR CAJON FERMENTACION'
    },
    disponibilidadInvertirMarquesinas: {
        codigo: 'INC72-CAJFERMT',
        pregunta: 'DISPONIBILIDAD A INVERTIR MARQUESINAS'
    },
    disponibilidadInvertirTendales: {
        codigo: 'INC73-CAJFERMT',
        pregunta: 'DISPONIBILIDAD A INVERTIR TENDALES'
    },
    disponibilidadInvertirSecadoras: {
        codigo: 'INC74-CAJFERMT',
        pregunta: 'DISPONIBILIDAD A INVERTIR SECADORAS'
    },
    disponibilidadInvertirOtrosCalidadPostCosecha: {
        codigo: 'INC75-CAJFERMT',
        pregunta: 'DISPONIBILIDAD A INVERTIR OTROS CALIDAD DE POST COSECHA'
    },
    condAdecuadasFermentacion: {
        codigo: 'INC76-CAJFER',
        pregunta: 'CONDICIONES ADECUADAS CAJON FERMENTACION'
    },
    condAdecuadasMarquesinas: {
        codigo: 'INC77-MARQUE',
        pregunta: 'CONDICIONES ADECUADAS MARQUESINAS'
    },
    condAdecuadasTendales: {
        codigo: 'INC78-TENDA',
        pregunta: 'CONDICIONES ADECUADAS TENDALES'
    },
    condAdecuadasSecadoras: {
        codigo: 'INC79-SECAD',
        pregunta: 'CONDICIONES ADECUADAS SECADORAS'
    },
    condAdecuadasOtrosCalidadPostCosecha: {
        codigo: 'INC80-OTROSCALPOSTCOSECH',
        pregunta: 'CONDICIONES ADECUADAS OTROS CALDIAD POST COSECHA'
    },
    condEconomicasFermentacion: {
        codigo: 'INC81-FERMENT',
        pregunta: 'CONDICIONES ECONOMICAS CAJON FERMENTACION'
    },
    condEconomicasMarquesinas: {
        codigo: 'INC82-MARQUE',
        pregunta: 'CONDICIONES ECONOMICAS MARQUESINAS'
    },
    condEconomicasTendales: {
        codigo: 'INC83-TENDA',
        pregunta: 'CONDICIONES ECONOMICAS TENDALES'
    },
    condEconomicasSecadoras: {
        codigo: 'INC84-SECADOR',
        pregunta: 'CONDICIONES ECONOMICAS SECADORAS'
    },
    condEconomicasOtrosCalidadPostCosecha: {
        codigo: 'INC85-OTROCALPOSTCOSECH',
        pregunta: 'CONDICIONES ECONOMICAS OTROS CALIDAD POST COSECHA'
    },
    realizaPodaFormacion: {
        codigo: 'POD03_FORM',
        pregunta: ''
    },
    realizaPodaMantenimiento: {
        codigo: 'POD04_MANT',
        pregunta: ''
    },
    realizaPodaFitosanitaria: {
        codigo: 'POD05_FITO',
        pregunta: ''
    },
    realizaPodaRehabilitacion: {
        codigo: 'POD06_REHAB',
        pregunta: ''
    },
    tieneDisenoFijo: {
        codigo: '',
        pregunta: ''
    },
    tieneDisenoMovible: {
        codigo: '',
        pregunta: ''
    }
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/javierfierro/Documents/ADSanCacao/cacao-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map