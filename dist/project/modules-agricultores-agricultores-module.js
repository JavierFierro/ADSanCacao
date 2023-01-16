(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-agricultores-agricultores-module"],{

/***/ "./src/app/modules/agricultores/agricultores.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/agricultores/agricultores.module.ts ***!
  \*************************************************************/
/*! exports provided: AgricultoresModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgricultoresModule", function() { return AgricultoresModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _components_agricultores_agricultores_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/agricultores/agricultores.component */ "./src/app/modules/agricultores/components/agricultores/agricultores.component.ts");
/* harmony import */ var _agricultores_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./agricultores.routing */ "./src/app/modules/agricultores/agricultores.routing.ts");
/* harmony import */ var _demo_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../demo-material-module */ "./src/app/demo-material-module.ts");
/* harmony import */ var _components_edit_agricultor_edit_agricultor_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/edit-agricultor/edit-agricultor.component */ "./src/app/modules/agricultores/components/edit-agricultor/edit-agricultor.component.ts");
/* harmony import */ var _components_sections_datos_personales_datos_personales_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/sections/datos-personales/datos-personales.component */ "./src/app/modules/agricultores/components/sections/datos-personales/datos-personales.component.ts");
/* harmony import */ var _components_sections_informacion_finca_informacion_finca_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/sections/informacion-finca/informacion-finca.component */ "./src/app/modules/agricultores/components/sections/informacion-finca/informacion-finca.component.ts");
/* harmony import */ var _components_sections_hectareaje_hectareaje_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/sections/hectareaje/hectareaje.component */ "./src/app/modules/agricultores/components/sections/hectareaje/hectareaje.component.ts");
/* harmony import */ var _components_sections_cacao_cnn_cacao_cnn_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/sections/cacao-cnn/cacao-cnn.component */ "./src/app/modules/agricultores/components/sections/cacao-cnn/cacao-cnn.component.ts");
/* harmony import */ var _components_sections_cacao_nacional_cacao_nacional_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/sections/cacao-nacional/cacao-nacional.component */ "./src/app/modules/agricultores/components/sections/cacao-nacional/cacao-nacional.component.ts");
/* harmony import */ var _components_sections_cacao_nacional_nuevos_clones_cacao_nacional_nuevos_clones_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/sections/cacao-nacional-nuevos-clones/cacao-nacional-nuevos-clones.component */ "./src/app/modules/agricultores/components/sections/cacao-nacional-nuevos-clones/cacao-nacional-nuevos-clones.component.ts");
/* harmony import */ var _components_sections_origen_plantas_origen_plantas_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/sections/origen-plantas/origen-plantas.component */ "./src/app/modules/agricultores/components/sections/origen-plantas/origen-plantas.component.ts");
/* harmony import */ var _components_sections_croquis_croquis_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/sections/croquis/croquis.component */ "./src/app/modules/agricultores/components/sections/croquis/croquis.component.ts");
/* harmony import */ var src_app_shared_canvas_canvas_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/canvas/canvas.component */ "./src/app/shared/canvas/canvas.component.ts");
/* harmony import */ var _formulario_linea_base_components_sections_priorizacion_participacion_proyectos_priorizacion_participacion_proyectos_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../formulario-linea-base/components/sections/priorizacion-participacion-proyectos/priorizacion-participacion-proyectos.component */ "./src/app/modules/formulario-linea-base/components/sections/priorizacion-participacion-proyectos/priorizacion-participacion-proyectos.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");





















class AgricultoresModule {
}
AgricultoresModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AgricultoresModule });
AgricultoresModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AgricultoresModule_Factory(t) { return new (t || AgricultoresModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _demo_material_module__WEBPACK_IMPORTED_MODULE_6__["DemoMaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_18__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_agricultores_routing__WEBPACK_IMPORTED_MODULE_5__["AgricultoresRoutes"])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AgricultoresModule, { declarations: [_components_agricultores_agricultores_component__WEBPACK_IMPORTED_MODULE_4__["AgricultoresComponent"],
        _components_edit_agricultor_edit_agricultor_component__WEBPACK_IMPORTED_MODULE_7__["EditAgricultorComponent"],
        _components_sections_datos_personales_datos_personales_component__WEBPACK_IMPORTED_MODULE_8__["DatosPersonalesComponent"],
        _components_sections_informacion_finca_informacion_finca_component__WEBPACK_IMPORTED_MODULE_9__["InformacionFincaComponent"],
        _components_sections_hectareaje_hectareaje_component__WEBPACK_IMPORTED_MODULE_10__["HectareajeComponent"],
        _components_sections_cacao_cnn_cacao_cnn_component__WEBPACK_IMPORTED_MODULE_11__["CacaoCNNComponent"],
        _components_sections_cacao_nacional_cacao_nacional_component__WEBPACK_IMPORTED_MODULE_12__["CacaoNacionalComponent"],
        _components_sections_cacao_nacional_nuevos_clones_cacao_nacional_nuevos_clones_component__WEBPACK_IMPORTED_MODULE_13__["CacaoNacionalNuevosClonesComponent"],
        _components_sections_origen_plantas_origen_plantas_component__WEBPACK_IMPORTED_MODULE_14__["OrigenPlantasComponent"],
        _formulario_linea_base_components_sections_priorizacion_participacion_proyectos_priorizacion_participacion_proyectos_component__WEBPACK_IMPORTED_MODULE_17__["PriorizacionParticipacionProyectosComponent"],
        _components_sections_croquis_croquis_component__WEBPACK_IMPORTED_MODULE_15__["CroquisComponent"],
        src_app_shared_canvas_canvas_component__WEBPACK_IMPORTED_MODULE_16__["CanvasComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _demo_material_module__WEBPACK_IMPORTED_MODULE_6__["DemoMaterialModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_18__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AgricultoresModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _components_agricultores_agricultores_component__WEBPACK_IMPORTED_MODULE_4__["AgricultoresComponent"],
                    _components_edit_agricultor_edit_agricultor_component__WEBPACK_IMPORTED_MODULE_7__["EditAgricultorComponent"],
                    _components_sections_datos_personales_datos_personales_component__WEBPACK_IMPORTED_MODULE_8__["DatosPersonalesComponent"],
                    _components_sections_informacion_finca_informacion_finca_component__WEBPACK_IMPORTED_MODULE_9__["InformacionFincaComponent"],
                    _components_sections_hectareaje_hectareaje_component__WEBPACK_IMPORTED_MODULE_10__["HectareajeComponent"],
                    _components_sections_cacao_cnn_cacao_cnn_component__WEBPACK_IMPORTED_MODULE_11__["CacaoCNNComponent"],
                    _components_sections_cacao_nacional_cacao_nacional_component__WEBPACK_IMPORTED_MODULE_12__["CacaoNacionalComponent"],
                    _components_sections_cacao_nacional_nuevos_clones_cacao_nacional_nuevos_clones_component__WEBPACK_IMPORTED_MODULE_13__["CacaoNacionalNuevosClonesComponent"],
                    _components_sections_origen_plantas_origen_plantas_component__WEBPACK_IMPORTED_MODULE_14__["OrigenPlantasComponent"],
                    _formulario_linea_base_components_sections_priorizacion_participacion_proyectos_priorizacion_participacion_proyectos_component__WEBPACK_IMPORTED_MODULE_17__["PriorizacionParticipacionProyectosComponent"],
                    _components_sections_croquis_croquis_component__WEBPACK_IMPORTED_MODULE_15__["CroquisComponent"],
                    src_app_shared_canvas_canvas_component__WEBPACK_IMPORTED_MODULE_16__["CanvasComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _demo_material_module__WEBPACK_IMPORTED_MODULE_6__["DemoMaterialModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_18__["SharedModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_agricultores_routing__WEBPACK_IMPORTED_MODULE_5__["AgricultoresRoutes"])
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/agricultores/agricultores.routing.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/agricultores/agricultores.routing.ts ***!
  \**************************************************************/
/*! exports provided: AgricultoresRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgricultoresRoutes", function() { return AgricultoresRoutes; });
/* harmony import */ var _components_agricultores_agricultores_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/agricultores/agricultores.component */ "./src/app/modules/agricultores/components/agricultores/agricultores.component.ts");
/* harmony import */ var _components_edit_agricultor_edit_agricultor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/edit-agricultor/edit-agricultor.component */ "./src/app/modules/agricultores/components/edit-agricultor/edit-agricultor.component.ts");


const AgricultoresRoutes = [
    {
        path: '',
        component: _components_agricultores_agricultores_component__WEBPACK_IMPORTED_MODULE_0__["AgricultoresComponent"],
        data: {
            title: 'Agricultores',
        }
    },
    {
        path: 'edit-agricultor',
        component: _components_edit_agricultor_edit_agricultor_component__WEBPACK_IMPORTED_MODULE_1__["EditAgricultorComponent"],
        data: {
            title: 'Crear Agricultor'
        }
    },
    {
        path: 'edit-agricultor/:id',
        component: _components_edit_agricultor_edit_agricultor_component__WEBPACK_IMPORTED_MODULE_1__["EditAgricultorComponent"],
        data: {
            title: 'Editar Agricultor'
        }
    }
];


/***/ }),

/***/ "./src/app/modules/agricultores/components/agricultores/agricultores.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/agricultores/components/agricultores/agricultores.component.ts ***!
  \****************************************************************************************/
/*! exports provided: AgricultoresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgricultoresComponent", function() { return AgricultoresComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/data-table/data-table.component */ "./src/app/shared/data-table/data-table.component.ts");
/* harmony import */ var src_app_modules_core_services_tecnico_tecnico_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/core/services/tecnico/tecnico.service */ "./src/app/modules/core/services/tecnico/tecnico.service.ts");
/* harmony import */ var _core_services_agriculor_agricultor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../core/services/agriculor/agricultor.service */ "./src/app/modules/core/services/agriculor/agricultor.service.ts");
/* harmony import */ var src_app_modules_core_services_importaciones_importaciones_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modules/core/services/importaciones/importaciones.service */ "./src/app/modules/core/services/importaciones/importaciones.service.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/confirm-dialog/confirm-dialog.component */ "./src/app/shared/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/loading/loading.component */ "./src/app/shared/loading/loading.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");




















function AgricultoresComponent_mat_header_cell_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " C\u00E9dula ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AgricultoresComponent_mat_cell_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", row_r11.secciones.datosPersonales.preguntas.cedula.respuesta, " ");
} }
function AgricultoresComponent_mat_header_cell_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Nombre ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AgricultoresComponent_mat_cell_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", row_r12.secciones.datosPersonales.preguntas.nombre.respuesta, " ");
} }
function AgricultoresComponent_mat_header_cell_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Fecha de Nacimiento ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AgricultoresComponent_mat_cell_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r13 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r6.formatDate(row_r13.secciones.datosPersonales.preguntas.fechaNacimiento.respuesta), " ");
} }
function AgricultoresComponent_mat_header_cell_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Acciones ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AgricultoresComponent_mat_cell_29_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AgricultoresComponent_mat_cell_29_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const row_r14 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.onItemSelected(row_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "svg", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "path", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "path", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AgricultoresComponent_mat_cell_29_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const row_r14 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.onTrashCanClicked(row_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "svg", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "path", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AgricultoresComponent_mat_header_row_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-header-row");
} }
function AgricultoresComponent_mat_row_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-row");
} }
const _c0 = function () { return [5, 10, 25, 100]; };
class AgricultoresComponent extends src_app_shared_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_2__["DataTableComponent"] {
    constructor(tecnicoService, agricultorService, importacionService, breakpointObserver, changeDetector, snackBar, router) {
        super(tecnicoService, breakpointObserver, changeDetector, snackBar);
        this.tecnicoService = tecnicoService;
        this.agricultorService = agricultorService;
        this.importacionService = importacionService;
        this.breakpointObserver = breakpointObserver;
        this.changeDetector = changeDetector;
        this.snackBar = snackBar;
        this.router = router;
        this.displayedColumns = ['cedula', 'nombre', 'fechaNacimiento', 'acciones'];
        super.dataService = this.agricultorService;
        super.displayedColumns = this.displayedColumns;
    }
    formatDate(fechaNacimiento) {
        if ((typeof fechaNacimiento) === 'string') {
            return fechaNacimiento;
        }
        else {
            const fecha = new Date(fechaNacimiento.seconds * 1000);
            return fecha.toLocaleDateString();
        }
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        setTimeout(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading.open();
            yield this.initView();
            this.loading.close();
        }), 0);
    }
    initView() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.fetchData();
            this.dataSource.filterPredicate = (data, filter) => {
                return data.secciones.datosPersonales.preguntas.nombre.respuesta.toLocaleLowerCase().includes(filter.toLocaleLowerCase());
            };
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        });
    }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue;
    }
    onItemSelected(row) {
        this.router.navigate(['agricultores', 'edit-agricultor', row["id"]]);
    }
    onAddClicked() {
        this.router.navigate(['agricultores', 'edit-agricultor']);
    }
    exportAll() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.loading.open();
                yield this.agricultorService.exportAll();
                this.loading.success('Listo', 'Registros exportados correctamente');
            }
            catch (error) {
                console.log(error);
                this.loading.error('Error', 'No se han podido exportar los registros');
            }
        });
    }
    onImportClicked(event) {
        const inputEvent = document.getElementById('csvFileUpload').click();
    }
    import(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                let header = false;
                const files = event.srcElement.files;
                this.loading.open();
                yield this.importacionService.importAgricultores(files, header, ';');
                this.loading.success('Listo', 'Agricultores importados correctamente');
            }
            catch (e) {
                this.loading.error('Error', 'No se han podido importar los agricultores');
            }
        });
    }
}
AgricultoresComponent.ɵfac = function AgricultoresComponent_Factory(t) { return new (t || AgricultoresComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_modules_core_services_tecnico_tecnico_service__WEBPACK_IMPORTED_MODULE_3__["TecnicoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_agriculor_agricultor_service__WEBPACK_IMPORTED_MODULE_4__["AgricultorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_modules_core_services_importaciones_importaciones_service__WEBPACK_IMPORTED_MODULE_5__["ImportacionesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"])); };
AgricultoresComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AgricultoresComponent, selectors: [["app-agricultores"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 37, vars: 5, consts: [[1, "container-fluid"], [1, "row", "justify-content-center"], ["mat-button", "", "color", "primary", 1, "col-md-4", "col-6", 3, "click"], ["type", "file", "name", "File Upload", "id", "csvFileUpload", "accept", ".csv", 3, "change"], ["fileImportInput", ""], ["fxLayout", "row wrap"], ["fxFlex.gt-sm", "100", "fxFlex.gt-xs", "100", "fxFlex", "100"], [1, "bg-light", "p-10", "p-r-20", "p-l-20"], ["matInput", "", "placeholder", "Filter", 3, "keyup"], [1, "responsive-table"], ["matSort", "", 3, "dataSource"], ["matColumnDef", "cedula"], ["mat-sort-header", "", 4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "nombre"], ["matColumnDef", "fechaNacimiento"], ["matColumnDef", "acciones"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], [3, "pageSizeOptions"], [1, "button-container"], ["mat-fab", "", "color", "primary", "aria-label", "A\u00F1adir", 3, "click"], ["mat-sort-header", ""], ["mat-icon-button", "", "color", "primary", 1, "m-r-5", "m-l-5", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-pencil-square"], ["d", "M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"], ["fill-rule", "evenodd", "d", "M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"], ["mat-icon-button", "", "color", "warn", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-eraser"], ["d", "M8.086 2.207a2 2 0 0 1 2.828 0l3.879 3.879a2 2 0 0 1 0 2.828l-5.5 5.5A2 2 0 0 1 7.879 15H5.12a2 2 0 0 1-1.414-.586l-2.5-2.5a2 2 0 0 1 0-2.828l6.879-6.879zm2.121.707a1 1 0 0 0-1.414 0L4.16 7.547l5.293 5.293 4.633-4.633a1 1 0 0 0 0-1.414l-3.879-3.879zM8.746 13.547 3.453 8.254 1.914 9.793a1 1 0 0 0 0 1.414l2.5 2.5a1 1 0 0 0 .707.293H7.88a1 1 0 0 0 .707-.293l.16-.16z"]], template: function AgricultoresComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-confirm-dialog");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-loading");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AgricultoresComponent_Template_button_click_4_listener() { return ctx.exportAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Exportar Todos");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AgricultoresComponent_Template_button_click_6_listener($event) { return ctx.onImportClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AgricultoresComponent_Template_input_change_7_listener($event) { return ctx.import($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function AgricultoresComponent_Template_input_keyup_15_listener($event) { return ctx.applyFilter($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](18, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, AgricultoresComponent_mat_header_cell_19_Template, 2, 0, "mat-header-cell", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, AgricultoresComponent_mat_cell_20_Template, 2, 1, "mat-cell", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](21, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, AgricultoresComponent_mat_header_cell_22_Template, 2, 0, "mat-header-cell", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, AgricultoresComponent_mat_cell_23_Template, 2, 1, "mat-cell", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](24, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, AgricultoresComponent_mat_header_cell_25_Template, 2, 0, "mat-header-cell", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, AgricultoresComponent_mat_cell_26_Template, 2, 1, "mat-cell", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](27, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, AgricultoresComponent_mat_header_cell_28_Template, 2, 0, "mat-header-cell", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, AgricultoresComponent_mat_cell_29_Template, 8, 0, "mat-cell", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, AgricultoresComponent_mat_header_row_30_Template, 1, 0, "mat-header-row", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, AgricultoresComponent_mat_row_31_Template, 1, 0, "mat-row", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "mat-paginator", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AgricultoresComponent_Template_button_click_34_listener() { return ctx.onAddClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c0));
    } }, directives: [_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_9__["ConfirmDialogComponent"], _shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_10__["LoadingComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__["MatPaginator"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatRow"]], styles: ["#csvFileUpload[_ngcontent-%COMP%] {\n  display: block;\n  visibility: hidden;\n  width: 0;\n  height: 0;\n}\n\n.button-container[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 2%;\n  right: 1%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZ3JpY3VsdG9yZXMvY29tcG9uZW50cy9hZ3JpY3VsdG9yZXMvYWdyaWN1bHRvcmVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hZ3JpY3VsdG9yZXMvY29tcG9uZW50cy9hZ3JpY3VsdG9yZXMvYWdyaWN1bHRvcmVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NzdkZpbGVVcGxvYWQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xufVxuXG4uYnV0dG9uLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAyJTtcbiAgcmlnaHQ6IDElO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgricultoresComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-agricultores',
                templateUrl: './agricultores.component.html',
                styleUrls: ['./agricultores.component.scss']
            }]
    }], function () { return [{ type: src_app_modules_core_services_tecnico_tecnico_service__WEBPACK_IMPORTED_MODULE_3__["TecnicoService"] }, { type: _core_services_agriculor_agricultor_service__WEBPACK_IMPORTED_MODULE_4__["AgricultorService"] }, { type: src_app_modules_core_services_importaciones_importaciones_service__WEBPACK_IMPORTED_MODULE_5__["ImportacionesService"] }, { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["BreakpointObserver"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/agricultores/components/edit-agricultor/edit-agricultor.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/agricultores/components/edit-agricultor/edit-agricultor.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: EditAgricultorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAgricultorComponent", function() { return EditAgricultorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_modules_formulario_linea_base_components_sections_priorizacion_participacion_proyectos_priorizacion_participacion_proyectos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/formulario-linea-base/components/sections/priorizacion-participacion-proyectos/priorizacion-participacion-proyectos.component */ "./src/app/modules/formulario-linea-base/components/sections/priorizacion-participacion-proyectos/priorizacion-participacion-proyectos.component.ts");
/* harmony import */ var src_app_shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/loading/loading.component */ "./src/app/shared/loading/loading.component.ts");
/* harmony import */ var _sections_cacao_cnn_cacao_cnn_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sections/cacao-cnn/cacao-cnn.component */ "./src/app/modules/agricultores/components/sections/cacao-cnn/cacao-cnn.component.ts");
/* harmony import */ var _sections_cacao_nacional_nuevos_clones_cacao_nacional_nuevos_clones_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sections/cacao-nacional-nuevos-clones/cacao-nacional-nuevos-clones.component */ "./src/app/modules/agricultores/components/sections/cacao-nacional-nuevos-clones/cacao-nacional-nuevos-clones.component.ts");
/* harmony import */ var _sections_cacao_nacional_cacao_nacional_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sections/cacao-nacional/cacao-nacional.component */ "./src/app/modules/agricultores/components/sections/cacao-nacional/cacao-nacional.component.ts");
/* harmony import */ var _sections_croquis_croquis_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sections/croquis/croquis.component */ "./src/app/modules/agricultores/components/sections/croquis/croquis.component.ts");
/* harmony import */ var _sections_datos_personales_datos_personales_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../sections/datos-personales/datos-personales.component */ "./src/app/modules/agricultores/components/sections/datos-personales/datos-personales.component.ts");
/* harmony import */ var _sections_hectareaje_hectareaje_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../sections/hectareaje/hectareaje.component */ "./src/app/modules/agricultores/components/sections/hectareaje/hectareaje.component.ts");
/* harmony import */ var _sections_informacion_finca_informacion_finca_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../sections/informacion-finca/informacion-finca.component */ "./src/app/modules/agricultores/components/sections/informacion-finca/informacion-finca.component.ts");
/* harmony import */ var _sections_origen_plantas_origen_plantas_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../sections/origen-plantas/origen-plantas.component */ "./src/app/modules/agricultores/components/sections/origen-plantas/origen-plantas.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_modules_core_services_agriculor_agricultor_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/modules/core/services/agriculor/agricultor.service */ "./src/app/modules/core/services/agriculor/agricultor.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");































function EditAgricultorComponent_mat_panel_title_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " CACAO NACIONAL - NUEVOS CLONES ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EditAgricultorComponent_mat_panel_title_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " CACAO NACIONAL - NUEVOS CLONES ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " (AGRICULTOR NO POSEE NUEVOS CLONES)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class EditAgricultorComponent {
    constructor(formBuilder, agricultorService, snackBar, activatedRoute, changeDetector, router) {
        this.formBuilder = formBuilder;
        this.agricultorService = agricultorService;
        this.snackBar = snackBar;
        this.activatedRoute = activatedRoute;
        this.changeDetector = changeDetector;
        this.router = router;
        this.agricultorForm = this.formBuilder.group({});
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.loading.open();
        this.setAgricultor();
    }
    setAgricultor() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.fetchAgricultor();
            this.updateView();
            this.setFormValues();
            this.loading.close();
        });
    }
    updateView() {
        this.changeDetector.detectChanges();
    }
    fetchAgricultor() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const id = this.activatedRoute.snapshot.paramMap.get("id");
            if (id !== null) {
                this.agricultor = yield this.agricultorService.get(id);
                this.datosPersonalesComponent.setAgricultor(this.agricultor);
                this.croquisComponent.setAgricultor(this.agricultor);
            }
        });
    }
    tieneNuevosClones() {
        if (this.agricultor) {
            return Number(this.agricultor.secciones.cacaoNacional.preguntas.areaTotalNuevosClones.respuesta) > 0;
        }
        return false;
    }
    reset() {
        this.agricultorForm.reset();
    }
    onSubmit() {
        this.loading.open();
        let agricultorParam = {
            id: "",
            secciones: {
                datosPersonales: this.datosPersonalesComponent.seccion,
                informacionFinca: this.informacionFincaComponent.seccion,
                hectareaje: this.hectareajeComponent.seccion,
                cacaoCNN: this.cacaoCNNComponent.seccion,
                cacaoNacional: this.cacaoNacionalComponent.seccion,
                cacaoNacionalNuevosClones: this.cacaoNacionalNuevosClonesComponent.seccion,
                origenPlantas: this.origenPlantasComponent.seccion,
                priorizacionParticipacionProyectos: this.priorizacionParticipacionProyectosComponent.seccion,
                croquis: this.croquisComponent.seccion
            }
        };
        if (this.agricultor) {
            agricultorParam.id = this.agricultor.id;
        }
        this.agricultorService.set(agricultorParam).then(() => {
            this.loading.success('Listo', 'Agricultor guardado correctamente');
            setTimeout(() => {
                this.router.navigate(['agricultores']);
            }, 1000);
        }).catch((e) => {
            console.log(e);
            this.snackBar.open(e, 'Cerrar', {
                duration: 5000,
            });
        });
    }
    setFormValues() {
        if (!(this.agricultor === undefined || this.agricultor === null)) {
            this.datosPersonalesComponent.setValues(this.agricultor);
            this.informacionFincaComponent.setValues(this.agricultor);
            this.hectareajeComponent.setValues(this.agricultor);
            this.cacaoCNNComponent.setValues(this.agricultor);
            this.cacaoNacionalComponent.setValues(this.agricultor);
            this.cacaoNacionalNuevosClonesComponent.setValues(this.agricultor);
            this.origenPlantasComponent.setValues(this.agricultor);
            this.priorizacionParticipacionProyectosComponent.setValues(this.agricultor);
            this.croquisComponent.setValues(this.agricultor);
        }
    }
}
EditAgricultorComponent.ɵfac = function EditAgricultorComponent_Factory(t) { return new (t || EditAgricultorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_modules_core_services_agriculor_agricultor_service__WEBPACK_IMPORTED_MODULE_13__["AgricultorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"])); };
EditAgricultorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EditAgricultorComponent, selectors: [["app-edit-agricultor"]], viewQuery: function EditAgricultorComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](src_app_shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__["LoadingComponent"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_sections_datos_personales_datos_personales_component__WEBPACK_IMPORTED_MODULE_8__["DatosPersonalesComponent"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_sections_informacion_finca_informacion_finca_component__WEBPACK_IMPORTED_MODULE_10__["InformacionFincaComponent"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_sections_hectareaje_hectareaje_component__WEBPACK_IMPORTED_MODULE_9__["HectareajeComponent"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_sections_cacao_cnn_cacao_cnn_component__WEBPACK_IMPORTED_MODULE_4__["CacaoCNNComponent"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_sections_cacao_nacional_cacao_nacional_component__WEBPACK_IMPORTED_MODULE_6__["CacaoNacionalComponent"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_sections_cacao_nacional_nuevos_clones_cacao_nacional_nuevos_clones_component__WEBPACK_IMPORTED_MODULE_5__["CacaoNacionalNuevosClonesComponent"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_sections_origen_plantas_origen_plantas_component__WEBPACK_IMPORTED_MODULE_11__["OrigenPlantasComponent"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](src_app_modules_formulario_linea_base_components_sections_priorizacion_participacion_proyectos_priorizacion_participacion_proyectos_component__WEBPACK_IMPORTED_MODULE_2__["PriorizacionParticipacionProyectosComponent"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_sections_croquis_croquis_component__WEBPACK_IMPORTED_MODULE_7__["CroquisComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.loading = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.datosPersonalesComponent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.informacionFincaComponent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.hectareajeComponent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.cacaoCNNComponent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.cacaoNacionalComponent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.cacaoNacionalNuevosClonesComponent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.origenPlantasComponent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.priorizacionParticipacionProyectosComponent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.croquisComponent = _t.first);
    } }, decls: 66, vars: 13, consts: [[1, "example-card"], [3, "formGroup", "ngSubmit"], ["hideToggle", ""], [3, "parentForm"], [4, "ngIf"], [1, "mt-3"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled"], ["mat-button", "", "type", "reset"], [2, "color", "red"]], template: function EditAgricultorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-loading");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "AGRICULTOR");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function EditAgricultorComponent_Template_form_ngSubmit_5_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-expansion-panel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " DATOS PERSONALES ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "app-datos-personales", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-expansion-panel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " INFORMACI\u00D3N DE LA FINCA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "app-informacion-finca", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-expansion-panel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " HECTAREAJE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "app-hectareaje", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-expansion-panel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " CACAO CCN ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "app-cacao-cnn", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "mat-accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "mat-expansion-panel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " CACAO NACIONAL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "app-cacao-nacional", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "mat-accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "mat-expansion-panel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, EditAgricultorComponent_mat_panel_title_39_Template, 2, 0, "mat-panel-title", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, EditAgricultorComponent_mat_panel_title_40_Template, 4, 0, "mat-panel-title", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "app-cacao-nacional-nuevos-clones", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "mat-accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "mat-expansion-panel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, " ORIGEN DE LAS PLANTAS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "app-origen-plantas", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "mat-accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "mat-expansion-panel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, " PRIORIZACI\u00D3N EN PARTICIPACI\u00D3N DE PROYECTOS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "app-priorizacion-participacion-proyectos", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "mat-accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "mat-expansion-panel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, " CROQUIS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "app-croquis", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Guardar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Resetear");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.agricultorForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("parentForm", ctx.agricultorForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("parentForm", ctx.agricultorForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("parentForm", ctx.agricultorForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("parentForm", ctx.agricultorForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("parentForm", ctx.agricultorForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.tieneNuevosClones());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.tieneNuevosClones());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("parentForm", ctx.agricultorForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("parentForm", ctx.agricultorForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("parentForm", ctx.agricultorForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("parentForm", ctx.agricultorForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.agricultorForm.valid);
    } }, directives: [src_app_shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__["LoadingComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormGroupDirective"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__["MatExpansionPanelTitle"], _sections_datos_personales_datos_personales_component__WEBPACK_IMPORTED_MODULE_8__["DatosPersonalesComponent"], _sections_informacion_finca_informacion_finca_component__WEBPACK_IMPORTED_MODULE_10__["InformacionFincaComponent"], _sections_hectareaje_hectareaje_component__WEBPACK_IMPORTED_MODULE_9__["HectareajeComponent"], _sections_cacao_cnn_cacao_cnn_component__WEBPACK_IMPORTED_MODULE_4__["CacaoCNNComponent"], _sections_cacao_nacional_cacao_nacional_component__WEBPACK_IMPORTED_MODULE_6__["CacaoNacionalComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgIf"], _sections_cacao_nacional_nuevos_clones_cacao_nacional_nuevos_clones_component__WEBPACK_IMPORTED_MODULE_5__["CacaoNacionalNuevosClonesComponent"], _sections_origen_plantas_origen_plantas_component__WEBPACK_IMPORTED_MODULE_11__["OrigenPlantasComponent"], src_app_modules_formulario_linea_base_components_sections_priorizacion_participacion_proyectos_priorizacion_participacion_proyectos_component__WEBPACK_IMPORTED_MODULE_2__["PriorizacionParticipacionProyectosComponent"], _sections_croquis_croquis_component__WEBPACK_IMPORTED_MODULE_7__["CroquisComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_19__["MatButton"]], styles: ["mat-card-actions[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n  margin-bottom: 0.7rem !important;\n  padding-top: 0;\n}\n\n#delete[_ngcontent-%COMP%] {\n  padding: 0;\n  margin-left: -1rem;\n  align-items: center;\n  margin-top: 20%;\n  min-width: 100%;\n  height: -webkit-min-content;\n  height: min-content;\n  width: -webkit-min-content;\n  width: min-content;\n}\n\n.add-button[_ngcontent-%COMP%] {\n  margin-top: -1rem;\n  margin-bottom: 1rem;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n@media screen and (max-width: 769px) {\n  #delete[_ngcontent-%COMP%] {\n    align-self: flex-end;\n  }\n\n  .fit[_ngcontent-%COMP%] {\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    margin-left: 1rem;\n    margin-top: -1rem;\n  }\n\n  .add-button[_ngcontent-%COMP%] {\n    margin-top: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZ3JpY3VsdG9yZXMvY29tcG9uZW50cy9lZGl0LWFncmljdWx0b3IvZWRpdC1hZ3JpY3VsdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUFBLG1CQUFBO0VBQ0EsMEJBQUE7RUFBQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGOztBQU1BO0VBQ0U7SUFDSSxvQkFBQTtFQUhKOztFQU1BO0lBQ0ksMEJBQUE7SUFBQSx1QkFBQTtJQUFBLGtCQUFBO0lBQ0EsaUJBQUE7SUFDQSxpQkFBQTtFQUhKOztFQU1BO0lBQ0ksYUFBQTtFQUhKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FncmljdWx0b3Jlcy9jb21wb25lbnRzL2VkaXQtYWdyaWN1bHRvci9lZGl0LWFncmljdWx0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZC1hY3Rpb25ze1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC43cmVtIWltcG9ydGFudDtcbiAgcGFkZGluZy10b3A6IDA7XG59XG5cbiNkZWxldGUge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW4tbGVmdDogLTFyZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwJTtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xuICB3aWR0aDogbWluLWNvbnRlbnQ7XG59XG5cbi5hZGQtYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogLTFyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbkBtZWRpYSBzY3JlZW4ge1xuICBcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY5cHgpIHtcbiAgI2RlbGV0ZSB7XG4gICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgfVxuXG4gIC5maXQge1xuICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgICBtYXJnaW4tdG9wOiAtMXJlbTtcbiAgfVxuXG4gIC5hZGQtYnV0dG9uIHtcbiAgICAgIG1hcmdpbi10b3A6IDA7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EditAgricultorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-edit-agricultor',
                templateUrl: './edit-agricultor.component.html',
                styleUrls: ['./edit-agricultor.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormBuilder"] }, { type: src_app_modules_core_services_agriculor_agricultor_service__WEBPACK_IMPORTED_MODULE_13__["AgricultorService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__["MatSnackBar"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_15__["ActivatedRoute"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"] }]; }, { loading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [src_app_shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__["LoadingComponent"]]
        }], datosPersonalesComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_sections_datos_personales_datos_personales_component__WEBPACK_IMPORTED_MODULE_8__["DatosPersonalesComponent"]]
        }], informacionFincaComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_sections_informacion_finca_informacion_finca_component__WEBPACK_IMPORTED_MODULE_10__["InformacionFincaComponent"]]
        }], hectareajeComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_sections_hectareaje_hectareaje_component__WEBPACK_IMPORTED_MODULE_9__["HectareajeComponent"]]
        }], cacaoCNNComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_sections_cacao_cnn_cacao_cnn_component__WEBPACK_IMPORTED_MODULE_4__["CacaoCNNComponent"]]
        }], cacaoNacionalComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_sections_cacao_nacional_cacao_nacional_component__WEBPACK_IMPORTED_MODULE_6__["CacaoNacionalComponent"]]
        }], cacaoNacionalNuevosClonesComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_sections_cacao_nacional_nuevos_clones_cacao_nacional_nuevos_clones_component__WEBPACK_IMPORTED_MODULE_5__["CacaoNacionalNuevosClonesComponent"]]
        }], origenPlantasComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_sections_origen_plantas_origen_plantas_component__WEBPACK_IMPORTED_MODULE_11__["OrigenPlantasComponent"]]
        }], priorizacionParticipacionProyectosComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [src_app_modules_formulario_linea_base_components_sections_priorizacion_participacion_proyectos_priorizacion_participacion_proyectos_component__WEBPACK_IMPORTED_MODULE_2__["PriorizacionParticipacionProyectosComponent"]]
        }], croquisComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_sections_croquis_croquis_component__WEBPACK_IMPORTED_MODULE_7__["CroquisComponent"]]
        }] }); })();


/***/ }),

/***/ "./src/app/modules/agricultores/components/sections/cacao-cnn/cacao-cnn.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/agricultores/components/sections/cacao-cnn/cacao-cnn.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: CacaoCNNComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacaoCNNComponent", function() { return CacaoCNNComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_interfaces_tecnico__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/interfaces/tecnico */ "./src/app/interfaces/tecnico.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");











function CacaoCNNComponent_div_34_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", value_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r3, " ");
} }
function CacaoCNNComponent_div_34_mat_form_field_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Cu\u00E1ntas Hect\u00E1reas");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CacaoCNNComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Tiene Cacao CCN que pueda ser reconvertido a Nacional");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-select", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CacaoCNNComponent_div_34_mat_option_5_Template, 2, 2, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CacaoCNNComponent_div_34_mat_form_field_6_Template, 4, 0, "mat-form-field", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.tieneCacaoImproductivo());
} }
class CacaoCNNComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.options = ['SI', 'NO'];
        this.cacaoCNN = this.formBuilder.group({
            areaTotalCNN: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            areaProduccion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            edadCacaoProductivo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            areaRecienSembrada: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            edadCacaoReciente: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            produccionAnioAnteriorCacaoCNN: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            precioPromedio: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            tieneCacaoImproductivo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            cuantasHectareasImproductivo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
    }
    ngOnInit() {
    }
    onSubmit() {
    }
    isFicticio() {
        const loggedTecnico = JSON.parse(localStorage.getItem("user"));
        return loggedTecnico.permiso === src_app_interfaces_tecnico__WEBPACK_IMPORTED_MODULE_2__["Permiso"].Ficticio;
    }
    tieneCacaoImproductivo() {
        return this.cacaoCNN.get('tieneCacaoImproductivo').value === 'SI';
    }
    get seccion() {
        return {
            preguntas: {
                areaTotalCNN: {
                    respuesta: this.cacaoCNN.value.areaTotalCNN
                },
                areaProduccion: {
                    respuesta: this.cacaoCNN.value.areaProduccion
                },
                edadCacaoProductivo: {
                    respuesta: this.cacaoCNN.value.edadCacaoProductivo
                },
                areaRecienSembrada: {
                    respuesta: this.cacaoCNN.value.areaRecienSembrada
                },
                edadCacaoReciente: {
                    respuesta: this.cacaoCNN.value.edadCacaoReciente
                },
                produccionAnioAnteriorCacaoCNN: {
                    respuesta: this.cacaoCNN.value.produccionAnioAnteriorCacaoCNN
                },
                precioPromedio: {
                    respuesta: this.cacaoCNN.value.precioPromedio
                },
                tieneCacaoImproductivo: {
                    respuesta: this.cacaoCNN.value.tieneCacaoImproductivo,
                    preguntas: {
                        cuantasHectareasImproductivo: {
                            respuesta: this.cacaoCNN.value.cuantasHectareasImproductivo
                        }
                    }
                }
            }
        };
    }
    setValues(agricultor) {
        this.cacaoCNN.get('areaTotalCNN')
            .setValue(agricultor.secciones.cacaoCNN.preguntas.areaTotalCNN.respuesta);
        this.cacaoCNN.get('areaProduccion')
            .setValue(agricultor.secciones.cacaoCNN.preguntas.areaProduccion.respuesta);
        this.cacaoCNN.get('edadCacaoProductivo')
            .setValue(agricultor.secciones.cacaoCNN.preguntas.edadCacaoProductivo.respuesta);
        this.cacaoCNN.get('areaRecienSembrada')
            .setValue(agricultor.secciones.cacaoCNN.preguntas.areaRecienSembrada.respuesta);
        this.cacaoCNN.get('edadCacaoReciente')
            .setValue(agricultor.secciones.cacaoCNN.preguntas.edadCacaoReciente.respuesta);
        this.cacaoCNN.get('produccionAnioAnteriorCacaoCNN')
            .setValue(agricultor.secciones.cacaoCNN.preguntas.produccionAnioAnteriorCacaoCNN.respuesta);
        this.cacaoCNN.get('precioPromedio')
            .setValue(agricultor.secciones.cacaoCNN.preguntas.precioPromedio.respuesta);
        this.cacaoCNN.get('tieneCacaoImproductivo')
            .setValue(agricultor.secciones.cacaoCNN.preguntas.tieneCacaoImproductivo.respuesta);
        this.cacaoCNN.get('cuantasHectareasImproductivo')
            .setValue(agricultor.secciones.cacaoCNN.preguntas.tieneCacaoImproductivo.preguntas.cuantasHectareasImproductivo.respuesta);
    }
}
CacaoCNNComponent.ɵfac = function CacaoCNNComponent_Factory(t) { return new (t || CacaoCNNComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
CacaoCNNComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CacaoCNNComponent, selectors: [["app-cacao-cnn"]], inputs: { parentForm: "parentForm" }, decls: 35, vars: 2, consts: [[3, "formGroup", "ngSubmit"], [1, "container-fluid"], [1, "row"], ["appearance", "outline", 1, "col-md-4"], ["matInput", "", "formControlName", "areaTotalCNN", "autocomplete", "off"], ["matInput", "", "formControlName", "areaProduccion", "autocomplete", "off"], ["matInput", "", "formControlName", "edadCacaoProductivo", "autocomplete", "off"], [1, "col-md-4"], ["matInput", "", "formControlName", "areaRecienSembrada", "autocomplete", "off"], ["matInput", "", "formControlName", "edadCacaoReciente", "autocomplete", "off"], ["appearance", "outline", 1, "col-md-6"], ["matInput", "", "formControlName", "produccionAnioAnteriorCacaoCNN", "autocomplete", "off"], ["matInput", "", "formControlName", "precioPromedio", "autocomplete", "off"], ["class", "row", 4, "ngIf"], ["appearance", "outline", 1, "col-md-8"], ["formControlName", "tieneCacaoImproductivo"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "col-md-4", "appearance", "outline", 4, "ngIf"], [3, "value"], ["matInput", "", "formControlName", "cuantasHectareasImproductivo", "autocomplete", "off"]], template: function CacaoCNNComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CacaoCNNComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Area Total de CNN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Area en Produccion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Edad Cacao Productivo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Area Recien Sembrada");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Edad Cacao Reciente");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Produccion A\u00F1o Anterior");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Precio Promedio Cacao");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, CacaoCNNComponent_div_34_Template, 7, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.cacaoCNN);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isFicticio());
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWdyaWN1bHRvcmVzL2NvbXBvbmVudHMvc2VjdGlvbnMvY2FjYW8tY25uL2NhY2FvLWNubi5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CacaoCNNComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cacao-cnn',
                templateUrl: './cacao-cnn.component.html',
                styleUrls: ['./cacao-cnn.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, { parentForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/modules/agricultores/components/sections/cacao-nacional-nuevos-clones/cacao-nacional-nuevos-clones.component.ts":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/modules/agricultores/components/sections/cacao-nacional-nuevos-clones/cacao-nacional-nuevos-clones.component.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: CacaoNacionalNuevosClonesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacaoNacionalNuevosClonesComponent", function() { return CacaoNacionalNuevosClonesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");











function CacaoNacionalNuevosClonesComponent_mat_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const uso_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", uso_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](uso_r9);
} }
function CacaoNacionalNuevosClonesComponent_mat_form_field_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Especifique:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CacaoNacionalNuevosClonesComponent_mat_option_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const variedad_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", variedad_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](variedad_r10);
} }
function CacaoNacionalNuevosClonesComponent_mat_form_field_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Especifique:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CacaoNacionalNuevosClonesComponent_mat_option_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const variedad_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", variedad_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](variedad_r11);
} }
function CacaoNacionalNuevosClonesComponent_mat_option_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const opcion_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", opcion_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](opcion_r12);
} }
function CacaoNacionalNuevosClonesComponent_mat_option_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const opcion_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", opcion_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](opcion_r13);
} }
function CacaoNacionalNuevosClonesComponent_mat_option_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const opcion_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", opcion_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](opcion_r14);
} }
function CacaoNacionalNuevosClonesComponent_mat_option_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const opcion_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", opcion_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](opcion_r15);
} }
class CacaoNacionalNuevosClonesComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.usosAnteriores = [
            "BOSQUE",
            "PLANTACION",
            "HUERTA VIEJA",
            "OTRO"
        ];
        this.variedades = [
            "103",
            "96",
            "95",
            "800",
            "801",
            "NO SABE",
            "OTRO"
        ];
        this.variedadesSembradasClas = ["POSITIVAS", "NEGATIVAS"];
        this.opcionesPlantulas = [
            "NEUTRAL",
            "FAVORABLES",
            "DESFAVORABLES"
        ];
        this.cacaoNacionalNuevosClones = this.formBuilder.group({
            usoAnteriorAreaNueva: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            otroUsoAnteriorAreaNueva: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            tipoVariedad: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            especifiqueOtros: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            variedadesSembradasCalificacion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            plantulasCondicionesEdafoclimaticas: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            plantulasRendimiento: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            plantulasVigorPlanta: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            plantulasResistenciaEnfermedades: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
    }
    ngOnInit() {
    }
    onSubmit() {
    }
    otroUsoAnteriorAreaNueva() {
        const uso = this.cacaoNacionalNuevosClones.get('usoAnteriorAreaNueva').value;
        return uso === 'OTRO';
    }
    otroTipoVariedad() {
        const tiposVariedad = this.cacaoNacionalNuevosClones.get('tipoVariedad').value;
        return tiposVariedad.includes('OTRO');
    }
    get seccion() {
        return {
            preguntas: {
                usoAnteriorAreaNueva: {
                    respuesta: this.cacaoNacionalNuevosClones.value.usoAnteriorAreaNueva,
                    preguntas: {
                        otroUsoAnteriorAreaNueva: {
                            respuesta: this.cacaoNacionalNuevosClones.value.otroUsoAnteriorAreaNueva,
                        }
                    }
                },
                tipoVariedad: {
                    respuesta: this.cacaoNacionalNuevosClones.value.tipoVariedad,
                    preguntas: {
                        especifiqueOtros: {
                            respuesta: this.cacaoNacionalNuevosClones.value.especifiqueOtros
                        }
                    }
                },
                variedadesSembradasCalificacion: {
                    respuesta: this.cacaoNacionalNuevosClones.value.variedadesSembradasCalificacion
                },
                plantulasCondicionesEdafoclimaticas: {
                    respuesta: this.cacaoNacionalNuevosClones.value.plantulasCondicionesEdafoclimaticas
                },
                plantulasRendimiento: {
                    respuesta: this.cacaoNacionalNuevosClones.value.plantulasRendimiento
                },
                plantulasVigorPlanta: {
                    respuesta: this.cacaoNacionalNuevosClones.value.plantulasVigorPlanta
                },
                plantulasResistenciaEnfermedades: {
                    respuesta: this.cacaoNacionalNuevosClones.value.plantulasResistenciaEnfermedades
                }
            }
        };
    }
    setValues(agricultor) {
        this.cacaoNacionalNuevosClones.get('usoAnteriorAreaNueva')
            .setValue(agricultor.secciones.cacaoNacionalNuevosClones.preguntas.usoAnteriorAreaNueva.respuesta);
        this.cacaoNacionalNuevosClones.get('otroUsoAnteriorAreaNueva')
            .setValue(agricultor.secciones.cacaoNacionalNuevosClones.preguntas.usoAnteriorAreaNueva.preguntas.otroUsoAnteriorAreaNueva.respuesta);
        this.cacaoNacionalNuevosClones.get('tipoVariedad')
            .setValue(agricultor.secciones.cacaoNacionalNuevosClones.preguntas.tipoVariedad.respuesta);
        this.cacaoNacionalNuevosClones.get('especifiqueOtros')
            .setValue(agricultor.secciones.cacaoNacionalNuevosClones.preguntas.tipoVariedad.preguntas.especifiqueOtros.respuesta);
        this.cacaoNacionalNuevosClones.get('variedadesSembradasCalificacion')
            .setValue(agricultor.secciones.cacaoNacionalNuevosClones.preguntas.variedadesSembradasCalificacion.respuesta);
        this.cacaoNacionalNuevosClones.get('plantulasCondicionesEdafoclimaticas')
            .setValue(agricultor.secciones.cacaoNacionalNuevosClones.preguntas.plantulasCondicionesEdafoclimaticas.respuesta);
        this.cacaoNacionalNuevosClones.get('plantulasRendimiento')
            .setValue(agricultor.secciones.cacaoNacionalNuevosClones.preguntas.plantulasRendimiento.respuesta);
        this.cacaoNacionalNuevosClones.get('plantulasVigorPlanta')
            .setValue(agricultor.secciones.cacaoNacionalNuevosClones.preguntas.plantulasVigorPlanta.respuesta);
        this.cacaoNacionalNuevosClones.get('plantulasResistenciaEnfermedades')
            .setValue(agricultor.secciones.cacaoNacionalNuevosClones.preguntas.plantulasResistenciaEnfermedades.respuesta);
    }
}
CacaoNacionalNuevosClonesComponent.ɵfac = function CacaoNacionalNuevosClonesComponent_Factory(t) { return new (t || CacaoNacionalNuevosClonesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
CacaoNacionalNuevosClonesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CacaoNacionalNuevosClonesComponent, selectors: [["app-cacao-nacional-nuevos-clones"]], inputs: { parentForm: "parentForm" }, decls: 48, vars: 11, consts: [[3, "formGroup", "ngSubmit"], [1, "container-fluid"], [1, "row"], ["appearance", "outline", 1, "col-sm-4"], ["formControlName", "usoAnteriorAreaNueva", "autocomplete", "off"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "col-sm-8", "appearance", "outline", 4, "ngIf"], ["formControlName", "tipoVariedad", "autocomplete", "off", "multiple", ""], [1, "row", "justify-content-center"], ["appearance", "outline", 1, "col-sm-6"], ["formControlName", "variedadesSembradasCalificacion", "autocomplete", "off"], [1, "space-down", "mb-3", 3, "inset"], ["formControlName", "plantulasCondicionesEdafoclimaticas", "autocomplete", "off"], ["formControlName", "plantulasRendimiento", "autocomplete", "off"], ["formControlName", "plantulasVigorPlanta", "autocomplete", "off"], ["formControlName", "plantulasResistenciaEnfermedades", "autocomplete", "off"], [3, "value"], ["appearance", "outline", 1, "col-sm-8"], ["matInput", "", "formControlName", "otroUsoAnteriorAreaNueva", "autocomplete", "off"], ["matInput", "", "formControlName", "especifiqueOtros", "autocomplete", "off"]], template: function CacaoNacionalNuevosClonesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CacaoNacionalNuevosClonesComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Uso Anterior del Area Nueva");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CacaoNacionalNuevosClonesComponent_mat_option_8_Template, 2, 2, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CacaoNacionalNuevosClonesComponent_mat_form_field_9_Template, 4, 0, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Que Variedad Tiene");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CacaoNacionalNuevosClonesComponent_mat_option_15_Template, 2, 2, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, CacaoNacionalNuevosClonesComponent_mat_form_field_16_Template, 4, 0, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Las variedades sembradas muestran ser:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, CacaoNacionalNuevosClonesComponent_mat_option_22_Template, 2, 2, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "mat-divider", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Sobre las plantulas:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Adaptacion Condiciones Edafoclimaticas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, CacaoNacionalNuevosClonesComponent_mat_option_31_Template, 2, 2, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Rendimiento");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, CacaoNacionalNuevosClonesComponent_mat_option_36_Template, 2, 2, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Vigor de la Planta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, CacaoNacionalNuevosClonesComponent_mat_option_42_Template, 2, 2, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Resistencia a Enfermedades");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, CacaoNacionalNuevosClonesComponent_mat_option_47_Template, 2, 2, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.cacaoNacionalNuevosClones);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.usosAnteriores);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.otroUsoAnteriorAreaNueva());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.variedades);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.otroTipoVariedad());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.variedadesSembradasClas);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inset", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.opcionesPlantulas);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.opcionesPlantulas);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.opcionesPlantulas);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.opcionesPlantulas);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDivider"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatOption"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWdyaWN1bHRvcmVzL2NvbXBvbmVudHMvc2VjdGlvbnMvY2FjYW8tbmFjaW9uYWwtbnVldm9zLWNsb25lcy9jYWNhby1uYWNpb25hbC1udWV2b3MtY2xvbmVzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CacaoNacionalNuevosClonesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cacao-nacional-nuevos-clones',
                templateUrl: './cacao-nacional-nuevos-clones.component.html',
                styleUrls: ['./cacao-nacional-nuevos-clones.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, { parentForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/modules/agricultores/components/sections/cacao-nacional/cacao-nacional.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/agricultores/components/sections/cacao-nacional/cacao-nacional.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: CacaoNacionalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacaoNacionalComponent", function() { return CacaoNacionalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");














function CacaoNacionalComponent_mat_option_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", value_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r5, " ");
} }
function CacaoNacionalComponent_mat_option_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", value_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r6, " ");
} }
function CacaoNacionalComponent_div_47_div_1_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CacaoNacionalComponent_div_47_div_1_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const i_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.deleteViejoInjertado(i_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CacaoNacionalComponent_div_47_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CacaoNacionalComponent_div_47_div_1_button_1_Template, 3, 0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.getFormArray("viejosInjertados").length > 1);
} }
function CacaoNacionalComponent_div_47_mat_form_field_2_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function CacaoNacionalComponent_div_47_mat_form_field_2_Template_input_input_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r17.calculateAreaViejoInjertado(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Area Viejo Injertado ", i_r8 + 1, "");
} }
function CacaoNacionalComponent_div_47_mat_form_field_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Edad Viejo Injertado ", i_r8 + 1, "");
} }
function CacaoNacionalComponent_div_47_div_4_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CacaoNacionalComponent_div_47_div_4_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const i_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.deleteViejoInjertado(i_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CacaoNacionalComponent_div_47_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CacaoNacionalComponent_div_47_div_4_button_1_Template, 3, 0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.getFormArray("viejosInjertados").length > 1);
} }
function CacaoNacionalComponent_div_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CacaoNacionalComponent_div_47_div_1_Template, 2, 1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CacaoNacionalComponent_div_47_mat_form_field_2_Template, 4, 2, "mat-form-field", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CacaoNacionalComponent_div_47_mat_form_field_3_Template, 4, 2, "mat-form-field", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CacaoNacionalComponent_div_47_div_4_Template, 2, 1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r8 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r8 !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r8 !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r8 !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r8 !== 0);
} }
function CacaoNacionalComponent_div_68_div_1_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CacaoNacionalComponent_div_68_div_1_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const i_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.deleteNuevosClones(i_r26); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CacaoNacionalComponent_div_68_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CacaoNacionalComponent_div_68_div_1_button_1_Template, 3, 0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r27.getFormArray("nuevosClones").length > 1);
} }
function CacaoNacionalComponent_div_68_mat_form_field_2_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function CacaoNacionalComponent_div_68_mat_form_field_2_Template_input_input_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r35.calculateAreaNuevosClones(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Area Nuevos Clones ", i_r26 + 1, "");
} }
function CacaoNacionalComponent_div_68_mat_form_field_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Edad Nuevos Clones ", i_r26 + 1, "");
} }
function CacaoNacionalComponent_div_68_div_4_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CacaoNacionalComponent_div_68_div_4_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const i_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index; const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r40.deleteNuevosClones(i_r26); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CacaoNacionalComponent_div_68_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CacaoNacionalComponent_div_68_div_4_button_1_Template, 3, 0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r30.getFormArray("nuevosClones").length > 1);
} }
function CacaoNacionalComponent_div_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CacaoNacionalComponent_div_68_div_1_Template, 2, 1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CacaoNacionalComponent_div_68_mat_form_field_2_Template, 4, 2, "mat-form-field", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CacaoNacionalComponent_div_68_mat_form_field_3_Template, 4, 2, "mat-form-field", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CacaoNacionalComponent_div_68_div_4_Template, 2, 1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r26 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r26 !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r26 !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r26 !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r26 !== 0);
} }
function CacaoNacionalComponent_mat_error_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.getErrorMessage(ctx_r4.cacaoNacional.get("precioPromedioXCacao")));
} }
class CacaoNacionalComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.cacaoNacional = this.formBuilder.group({
            areaTotalNacional: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            areaTotalNacionalViejo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            edadCacaoViejo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            brotesBasales: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            arbolesElite: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            areaTotalViejoInjertado: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            viejosInjertados: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]([
                new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                    areaViejoInjertado: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                    edadViejoInjertado: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                }),
            ]),
            areaTotalNuevosClones: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            nuevosClones: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]([
                new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                    areaNuevosClones: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                    edadNuevosClones: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
                })
            ]),
            produccionAnioAnteriorCacaoNacional: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            precioPromedioXCacao: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^[+-]?([0-9]+\.?[0-9]*|\.[0-9]+)$")])
        });
    }
    ngOnInit() {
        this.yesNoAnswer = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].constantes.formularioLineaBase.yesNoAnswer;
    }
    onSubmit() {
    }
    calculateAreaTotal() {
        const areaNacionalViejo = Number(this.cacaoNacional.value.areaTotalNacionalViejo.replace(',', '.'));
        const areaViejoInjertado = Number(this.cacaoNacional.value.areaTotalViejoInjertado.replace(',', '.'));
        const areaNuevosClones = Number(this.cacaoNacional.value.areaTotalNuevosClones.replace(',', '.'));
        const areaTotal = areaNacionalViejo + areaViejoInjertado + areaNuevosClones;
        this.cacaoNacional.get('areaTotalNacional').setValue(areaTotal.toLocaleString("pt-BR"));
    }
    calculateAreaViejoInjertado() {
        let areaTotal = 0;
        const viejosInjertados = this.getFormArray("viejosInjertados").controls;
        for (let viejoInjertado of viejosInjertados) {
            areaTotal += Number(viejoInjertado.value.areaViejoInjertado.replace(',', '.'));
        }
        this.cacaoNacional.get('areaTotalViejoInjertado').setValue(areaTotal.toLocaleString("pt-BR"));
        this.calculateAreaTotal();
    }
    calculateAreaNuevosClones() {
        let areaTotal = 0;
        const nuevosClones = this.getFormArray("nuevosClones").controls;
        for (let nuevoClon of nuevosClones) {
            areaTotal += Number(nuevoClon.value.areaNuevosClones.replace(',', '.'));
        }
        this.cacaoNacional.get('areaTotalNuevosClones').setValue(areaTotal.toLocaleString("pt-BR"));
        this.calculateAreaTotal();
    }
    getFormArray(key) {
        return this.cacaoNacional.get(key);
    }
    createViejoInjertadoField() {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            areaViejoInjertado: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            edadViejoInjertado: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        });
    }
    addViejoInjertado() {
        this.getFormArray("viejosInjertados").push(this.createViejoInjertadoField());
    }
    deleteViejoInjertado(index) {
        this.getFormArray("viejosInjertados").removeAt(index);
        this.calculateAreaViejoInjertado();
    }
    viejosInjertadosToObject() {
        const questions = [];
        for (let value of this.getFormArray("viejosInjertados").controls) {
            const viejoInjertado = {
                areaViejoInjertado: {
                    respuesta: value.get("areaViejoInjertado").value
                },
                edadViejoInjertado: {
                    respuesta: value.get("edadViejoInjertado").value
                }
            };
            questions.push(viejoInjertado);
        }
        return questions;
    }
    createNuevosClonesField() {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            areaNuevosClones: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            edadNuevosClones: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        });
    }
    addNuevosClones() {
        this.getFormArray("nuevosClones").push(this.createNuevosClonesField());
    }
    deleteNuevosClones(index) {
        this.getFormArray("nuevosClones").removeAt(index);
        this.calculateAreaNuevosClones();
    }
    nuevosClonesToObject() {
        const questions = [];
        for (let value of this.getFormArray("nuevosClones").controls) {
            const nuevosClones = {
                areaNuevosClones: {
                    respuesta: value.get("areaNuevosClones").value
                },
                edadNuevosClones: {
                    respuesta: value.get("edadNuevosClones").value
                }
            };
            questions.push(nuevosClones);
        }
        return questions;
    }
    getErrorMessage(formulario) {
        if (formulario.hasError('required')) {
            return 'Debe ingresar un valor';
        }
        else if (formulario.hasError('pattern')) {
            if (formulario.errors.pattern.requiredPattern == '^[a-zA-Z ]*$') {
                return 'Ingrese caracteres';
            }
            if (formulario.errors.pattern.requiredPattern == '^[+-]?([0-9]+\.?[0-9]*|\.[0-9]+)$') {
                return 'Ingrese numeros';
            }
        }
        else if (!formulario.hasError('minLength')) {
            return 'Ingresar un valor de longitud aceptable';
        }
    }
    get seccion() {
        return {
            preguntas: {
                areaTotalNacional: {
                    respuesta: this.cacaoNacional.value.areaTotalNacional
                },
                areaTotalNacionalViejo: {
                    respuesta: this.cacaoNacional.value.areaTotalNacionalViejo
                },
                edadCacaoViejo: {
                    respuesta: this.cacaoNacional.value.edadCacaoViejo
                },
                brotesBasales: {
                    respuesta: this.cacaoNacional.value.brotesBasales
                },
                arbolesElite: {
                    respuesta: this.cacaoNacional.value.arbolesElite
                },
                areaTotalViejoInjertado: {
                    respuesta: this.cacaoNacional.value.areaTotalViejoInjertado
                },
                viejosInjertados: {
                    arreglo: this.viejosInjertadosToObject()
                },
                areaTotalNuevosClones: {
                    respuesta: this.cacaoNacional.value.areaTotalNuevosClones
                },
                nuevosClones: {
                    arreglo: this.nuevosClonesToObject()
                },
                produccionAnioAnteriorCacaoNacional: {
                    respuesta: this.cacaoNacional.value.produccionAnioAnteriorCacaoNacional
                },
                precioPromedioXCacao: {
                    respuesta: this.cacaoNacional.value.precioPromedioXCacao
                }
            }
        };
    }
    setViejosInjertados(agricultor) {
        agricultor.secciones.cacaoNacional.preguntas.viejosInjertados.arreglo.forEach((value, index) => {
            if (index !== 0) {
                this.addViejoInjertado();
            }
            this.getFormArray("viejosInjertados").controls[index].get("areaViejoInjertado").setValue(value["areaViejoInjertado"]["respuesta"]);
            this.getFormArray("viejosInjertados").controls[index].get("edadViejoInjertado").setValue(value["edadViejoInjertado"]["respuesta"]);
        });
    }
    setNuevosClones(agricultor) {
        agricultor.secciones.cacaoNacional.preguntas.nuevosClones.arreglo.forEach((value, index) => {
            if (index !== 0) {
                this.addNuevosClones();
            }
            this.getFormArray("nuevosClones").controls[index].get("areaNuevosClones").setValue(value["areaNuevosClones"]["respuesta"]);
            this.getFormArray("nuevosClones").controls[index].get("edadNuevosClones").setValue(value["edadNuevosClones"]["respuesta"]);
        });
    }
    setValues(agricultor) {
        this.cacaoNacional.get('areaTotalNacional')
            .setValue(agricultor.secciones.cacaoNacional.preguntas.areaTotalNacional.respuesta);
        this.cacaoNacional.get('areaTotalNacionalViejo')
            .setValue(agricultor.secciones.cacaoNacional.preguntas.areaTotalNacionalViejo.respuesta);
        this.cacaoNacional.get('edadCacaoViejo')
            .setValue(agricultor.secciones.cacaoNacional.preguntas.edadCacaoViejo.respuesta);
        this.cacaoNacional.get('brotesBasales')
            .setValue(agricultor.secciones.cacaoNacional.preguntas.brotesBasales.respuesta);
        this.cacaoNacional.get('arbolesElite')
            .setValue(agricultor.secciones.cacaoNacional.preguntas.arbolesElite.respuesta);
        this.cacaoNacional.get('areaTotalViejoInjertado')
            .setValue(agricultor.secciones.cacaoNacional.preguntas.areaTotalViejoInjertado.respuesta);
        this.setViejosInjertados(agricultor);
        this.setNuevosClones(agricultor);
        this.cacaoNacional.get('areaTotalNuevosClones')
            .setValue(agricultor.secciones.cacaoNacional.preguntas.areaTotalNuevosClones.respuesta);
        this.cacaoNacional.get('produccionAnioAnteriorCacaoNacional')
            .setValue(agricultor.secciones.cacaoNacional.preguntas.produccionAnioAnteriorCacaoNacional.respuesta);
        this.cacaoNacional.get('precioPromedioXCacao')
            .setValue(agricultor.secciones.cacaoNacional.preguntas.precioPromedioXCacao.respuesta);
    }
}
CacaoNacionalComponent.ɵfac = function CacaoNacionalComponent_Factory(t) { return new (t || CacaoNacionalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
CacaoNacionalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CacaoNacionalComponent, selectors: [["app-cacao-nacional"]], inputs: { parentForm: "parentForm" }, decls: 84, vars: 14, consts: [[3, "formGroup", "ngSubmit"], [1, "container-fluid"], [1, "row"], ["appearance", "outline", 1, "col-md-4"], ["matInput", "", "readonly", "", "formControlName", "areaTotalNacional", "autocomplete", "off"], [1, "space-down", "mb-3", 3, "inset"], ["matInput", "", "formControlName", "areaTotalNacionalViejo", "autocomplete", "off", 3, "input"], [1, "col-md-4"], ["matInput", "", "formControlName", "edadCacaoViejo", "autocomplete", "off"], ["formControlName", "brotesBasales"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "arbolesElite"], ["matInput", "", "readonly", "", "formControlName", "areaTotalViejoInjertado", "autocomplete", "off"], ["formArrayName", "viejosInjertados", 1, "col-md-8"], ["appearance", "outline", 1, "col-md-6", 3, "formGroupName"], ["matInput", "", "formControlName", "areaViejoInjertado", "autocomplete", "off", 3, "input"], ["matInput", "", "formControlName", "edadViejoInjertado", "autocomplete", "off"], ["formArrayName", "viejosInjertados", "class", "row justify-content-end", 4, "ngFor", "ngForOf"], [1, "row", "justify-content-end"], [1, "col-md-4", "add-button"], ["mat-button", "", "color", "primary", "mat-flat-button", "", 3, "click"], ["matInput", "", "readonly", "", "formControlName", "areaTotalNuevosClones", "autocomplete", "off"], ["formArrayName", "nuevosClones", 1, "col-md-8"], ["matInput", "", "formControlName", "areaNuevosClones", "autocomplete", "off", 3, "input"], ["matInput", "", "formControlName", "edadNuevosClones", "autocomplete", "off"], ["formArrayName", "nuevosClones", "class", "row justify-content-end", 4, "ngFor", "ngForOf"], ["appearance", "outline", 1, "col-md-6"], ["matInput", "", "formControlName", "produccionAnioAnteriorCacaoNacional", "autocomplete", "off"], ["matInput", "", "formControlName", "precioPromedioXCacao", "autocomplete", "off"], [4, "ngIf"], [3, "value"], ["formArrayName", "viejosInjertados", 1, "row", "justify-content-end"], ["class", "col-md-1 col-xs-1 display-fr", 4, "ngIf"], ["class", "col-md-4", "appearance", "outline", 3, "formGroupName", 4, "ngIf"], ["class", "col-md-1 col-xs-1 display-bck", 4, "ngIf"], [1, "col-md-1", "col-xs-1", "display-fr"], ["class", "delete", "mat-flat-button", "", 3, "click", 4, "ngIf"], ["mat-flat-button", "", 1, "delete", 3, "click"], ["appearance", "outline", 1, "col-md-4", 3, "formGroupName"], [1, "col-md-1", "col-xs-1", "display-bck"], ["formArrayName", "nuevosClones", 1, "row", "justify-content-end"]], template: function CacaoNacionalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CacaoNacionalComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Area Total Nacional");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "mat-divider", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Area Total Nacional Viejo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function CacaoNacionalComponent_Template_input_input_13_listener() { return ctx.calculateAreaTotal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Edad Cacao Viejo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Presenta Brotes Basales");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, CacaoNacionalComponent_mat_option_25_Template, 2, 2, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Presenta Arboles Elite");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, CacaoNacionalComponent_mat_option_30_Template, 2, 2, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "mat-divider", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Area Total Viejo Injertado");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-form-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Area Viejo Injertado 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function CacaoNacionalComponent_Template_input_input_42_listener() { return ctx.calculateAreaViejoInjertado(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-form-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Edad Viejo Injertado 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, CacaoNacionalComponent_div_47_Template, 5, 4, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CacaoNacionalComponent_Template_button_click_50_listener() { return ctx.addViejoInjertado(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " A\u00F1adir ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "mat-divider", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Area Total Nuevos Clones");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-form-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Area Nuevos Clones 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function CacaoNacionalComponent_Template_input_input_63_listener() { return ctx.calculateAreaNuevosClones(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-form-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Edad Nuevos Clones 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, CacaoNacionalComponent_div_68_Template, 5, 4, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CacaoNacionalComponent_Template_button_click_71_listener() { return ctx.addNuevosClones(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " A\u00F1adir ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "mat-divider", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-form-field", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Produccion A\u00F1o Anterior (en quintales)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "mat-form-field", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Precio Promedio por Cacao");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, CacaoNacionalComponent_mat_error_83_Template, 2, 1, "mat-error", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.cacaoNacional);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inset", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.yesNoAnswer);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.yesNoAnswer);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inset", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.getFormArray("viejosInjertados").controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inset", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.getFormArray("nuevosClones").controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inset", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cacaoNacional.get("precioPromedioXCacao").invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDivider"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatError"]], styles: [".add-button[_ngcontent-%COMP%] {\n    margin-bottom: 1rem;\n    align-self: center;\n}\n\n.delete[_ngcontent-%COMP%] {\n    padding: 0;\n    margin-left: 1rem;\n    margin-top: 0.5rem;\n    align-items: center;\n    min-width: 100%;\n    height: -webkit-min-content;\n    height: min-content;\n    width: -webkit-min-content;\n    width: min-content;\n}\n\n.display-bck[_ngcontent-%COMP%] {\n    display: none;\n}\n\n@media screen and (max-width: 769px) {\n    .display-bck[_ngcontent-%COMP%] {\n        display: block;\n        margin-top: -1rem;\n    }\n\n    .display-fr[_ngcontent-%COMP%] {\n        display: none;\n    }\n\n    .fit[_ngcontent-%COMP%] {\n        width: -webkit-fit-content;\n        width: -moz-fit-content;\n        width: fit-content;\n        margin-left: 1rem;\n        margin-top: -1rem;\n    }\n\n    .add-button[_ngcontent-%COMP%] {\n        margin-top: 0;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZ3JpY3VsdG9yZXMvY29tcG9uZW50cy9zZWN0aW9ucy9jYWNhby1uYWNpb25hbC9jYWNhby1uYWNpb25hbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsMkJBQW1CO0lBQW5CLG1CQUFtQjtJQUNuQiwwQkFBa0I7SUFBbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJO1FBQ0ksY0FBYztRQUNkLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSwwQkFBa0I7UUFBbEIsdUJBQWtCO1FBQWxCLGtCQUFrQjtRQUNsQixpQkFBaUI7UUFDakIsaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hZ3JpY3VsdG9yZXMvY29tcG9uZW50cy9zZWN0aW9ucy9jYWNhby1uYWNpb25hbC9jYWNhby1uYWNpb25hbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZC1idXR0b24ge1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4uZGVsZXRlIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xuICAgIHdpZHRoOiBtaW4tY29udGVudDtcbn1cblxuLmRpc3BsYXktYmNrIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjlweCkge1xuICAgIC5kaXNwbGF5LWJjayB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW4tdG9wOiAtMXJlbTtcbiAgICB9XG5cbiAgICAuZGlzcGxheS1mciB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLmZpdCB7XG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgICAgIG1hcmdpbi10b3A6IC0xcmVtO1xuICAgIH1cblxuICAgIC5hZGQtYnV0dG9uIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CacaoNacionalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cacao-nacional',
                templateUrl: './cacao-nacional.component.html',
                styleUrls: ['./cacao-nacional.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, { parentForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/modules/agricultores/components/sections/croquis/croquis.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/agricultores/components/sections/croquis/croquis.component.ts ***!
  \***************************************************************************************/
/*! exports provided: CroquisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CroquisComponent", function() { return CroquisComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_shared_canvas_canvas_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/canvas/canvas.component */ "./src/app/shared/canvas/canvas.component.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");









class CroquisComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.croquis = this.formBuilder.group({
            coordenadasX: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            coordenadasY: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            productor: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            predio: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
    }
    ngOnInit() {
    }
    onSubmit() {
    }
    setAgricultor(agricultor) {
        this.agricultor = agricultor;
    }
    saveCroquis() {
        const reference = this.agricultor ? this.agricultor.id : Date.now().toString();
        const croquisPath = this.canvasComponent.saveImageInStorage(reference);
        return croquisPath;
    }
    get seccion() {
        return {
            preguntas: {
                coordenadasX: {
                    respuesta: this.croquis.value.coordenadasX
                },
                coordenadasY: {
                    respuesta: this.croquis.value.coordenadasY
                },
                productor: {
                    respuesta: this.croquis.value.productor
                },
                predio: {
                    respuesta: this.croquis.value.predio
                },
                croquisPath: {
                    respuesta: this.saveCroquis()
                }
            }
        };
    }
    setValues(agricultor) {
        this.croquis.get('coordenadasX')
            .setValue(agricultor.secciones.croquis.preguntas.coordenadasX.respuesta);
        this.croquis.get('coordenadasY')
            .setValue(agricultor.secciones.croquis.preguntas.coordenadasY.respuesta);
        this.croquis.get('productor')
            .setValue(agricultor.secciones.croquis.preguntas.productor.respuesta);
        this.croquis.get('predio')
            .setValue(agricultor.secciones.croquis.preguntas.predio.respuesta);
        this.canvasComponent.setImageOnCanvas(agricultor.secciones.croquis.preguntas.croquisPath.respuesta);
    }
}
CroquisComponent.ɵfac = function CroquisComponent_Factory(t) { return new (t || CroquisComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
CroquisComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CroquisComponent, selectors: [["app-croquis"]], viewQuery: function CroquisComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](src_app_shared_canvas_canvas_component__WEBPACK_IMPORTED_MODULE_2__["CanvasComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.canvasComponent = _t.first);
    } }, inputs: { parentForm: "parentForm" }, decls: 22, vars: 1, consts: [[3, "formGroup", "ngSubmit"], [1, "container-fluid"], [1, "row", "justify-content-center"], ["appearance", "outline", 1, "col-md-4"], ["matInput", "", "formControlName", "coordenadasX", "autocomplete", "off"], ["matInput", "", "formControlName", "coordenadasY", "autocomplete", "off"], ["appearance", "outline", 1, "col-md-6"], ["matInput", "", "formControlName", "productor", "autocomplete", "off"], ["matInput", "", "formControlName", "predio", "autocomplete", "off"], [1, "col-md-12", "d-flex", "align-items-center", "justify-content-center"]], template: function CroquisComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CroquisComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Coordenadas X");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Coordenadas Y");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Productor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Predio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "app-canvas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.croquis);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], src_app_shared_canvas_canvas_component__WEBPACK_IMPORTED_MODULE_2__["CanvasComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWdyaWN1bHRvcmVzL2NvbXBvbmVudHMvc2VjdGlvbnMvY3JvcXVpcy9jcm9xdWlzLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CroquisComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-croquis',
                templateUrl: './croquis.component.html',
                styleUrls: ['./croquis.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, { parentForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], canvasComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [src_app_shared_canvas_canvas_component__WEBPACK_IMPORTED_MODULE_2__["CanvasComponent"]]
        }] }); })();


/***/ }),

/***/ "./src/app/modules/agricultores/components/sections/datos-personales/datos-personales.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/agricultores/components/sections/datos-personales/datos-personales.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: DatosPersonalesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatosPersonalesComponent", function() { return DatosPersonalesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_interfaces_tecnico__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/interfaces/tecnico */ "./src/app/interfaces/tecnico.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_modules_core_services_formularios_formulario_linea_base_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modules/core/services/formularios/formulario-linea-base.service */ "./src/app/modules/core/services/formularios/formulario-linea-base.service.ts");
/* harmony import */ var src_app_modules_core_services_formularios_formulario_verificacion_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modules/core/services/formularios/formulario-verificacion.service */ "./src/app/modules/core/services/formularios/formulario-verificacion.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_services_agriculor_agricultor_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../core/services/agriculor/agricultor.service */ "./src/app/modules/core/services/agriculor/agricultor.service.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");





















function DatosPersonalesComponent_mat_error_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.getErrorMessage(ctx_r2.datosPersonales.get("cedula")));
} }
function DatosPersonalesComponent_mat_error_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.getErrorMessage(ctx_r3.datosPersonales.get("nombre")));
} }
function DatosPersonalesComponent_mat_option_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const genero_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", genero_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", genero_r12, " ");
} }
function DatosPersonalesComponent_mat_option_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dis_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", dis_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", dis_r13, " ");
} }
function DatosPersonalesComponent_mat_option_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const estado_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", estado_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", estado_r14, " ");
} }
function DatosPersonalesComponent_mat_option_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const edu_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", edu_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", edu_r15, " ");
} }
function DatosPersonalesComponent_div_70_mat_error_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const celular_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r18.getErrorMessage(celular_r16.get("celular")));
} }
function DatosPersonalesComponent_div_70_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DatosPersonalesComponent_div_70_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23); const i_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r21.deleteCelular(i_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DatosPersonalesComponent_div_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-form-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, DatosPersonalesComponent_div_70_mat_error_6_Template, 2, 1, "mat-error", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, DatosPersonalesComponent_div_70_button_8_Template, 3, 0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const celular_r16 = ctx.$implicit;
    const i_r17 = ctx.index;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", i_r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Celular ", i_r17 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", celular_r16.get("celular").invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.getFormArray("celulares").length > 0);
} }
function DatosPersonalesComponent_mat_error_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r9.getErrorMessage(ctx_r9.datosPersonales.get("telefono")));
} }
function DatosPersonalesComponent_div_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-form-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "V\u00EDa Principal de Comunicacion");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-form-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Comentarios Adicionales sobre Comunicaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DatosPersonalesComponent_div_82_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-form-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "T\u00E9cnico");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-form-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "T\u00E9cnico");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DatosPersonalesComponent_div_82_div_7_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r27.downloadVerificacion(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "svg", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "path", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "path", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const verificacion_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", verificacion_r26.tecnico);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", verificacion_r26.fechaVisita);
} }
function DatosPersonalesComponent_div_82_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-form-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "T\u00E9cnico");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-form-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "T\u00E9cnico");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DatosPersonalesComponent_div_82_div_11_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r30.downloadLineaBase(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "svg", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "path", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "path", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const lineaBase_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", lineaBase_r29.tecnico);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", lineaBase_r29.fechaVisita);
} }
function DatosPersonalesComponent_div_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Hist\u00F3rico");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Monitoreo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, DatosPersonalesComponent_div_82_div_7_Template, 16, 2, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "L\u00EDnea Base");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, DatosPersonalesComponent_div_82_div_11_Template, 16, 2, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r11.formulariosVerificacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r11.formulariosLineaBase);
} }
class DatosPersonalesComponent {
    constructor(lineaBaseService, verificacionService, activatedRoute, agriService) {
        this.lineaBaseService = lineaBaseService;
        this.verificacionService = verificacionService;
        this.activatedRoute = activatedRoute;
        this.agriService = agriService;
        this.minDate = new Date();
        this.id = this.activatedRoute.snapshot.paramMap.get("id");
        this.datosPersonales = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            cedula: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[0-9]*$"), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)]),
            nombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)]),
            estado: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            fechaNacimiento: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            genero: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            estadoCivil: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            nivelEducacion: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            celulares: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([]),
            telefono: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[0-9]*$"), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(7), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(7)]),
            isDiscapacitado: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            tecnico: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            fechaVisita: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            viaPrincipalComunicacion: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            comentariosComunicacion: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
        });
    }
    ngOnInit() {
        const loggedTecnico = JSON.parse(localStorage.getItem("user"));
        this.nombreTecnico = loggedTecnico.nombre;
        this.initData();
    }
    initData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.estados = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].constantes.agricultor.estados;
            this.generos = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].constantes.agricultor.genero;
            this.estadosCiviles = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].constantes.agricultor.estadoCivil;
            this.educacion = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].constantes.agricultor.educacion;
            this.discapacidad = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].constantes.agricultor.discapacidad;
            this.maxDate18Years = this.getMaxDate18YearsFromNow();
        });
    }
    fetchLineaBase(agricultor) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.lineaBaseService.listByAgricultor(agricultor.id).subscribe(data => {
                this.formulariosLineaBase = data;
            });
        });
    }
    fetchVerificacion(agricultor) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.verificacionService.listByAgricultor(agricultor.id).subscribe(data => {
                this.formulariosVerificacion = data;
            });
        });
    }
    isFicticio() {
        const loggedTecnico = JSON.parse(localStorage.getItem("user"));
        return loggedTecnico.permiso === src_app_interfaces_tecnico__WEBPACK_IMPORTED_MODULE_3__["Permiso"].Ficticio;
    }
    getFormItem(key) {
        return this.datosPersonales.get(key);
    }
    getFormArray(key) {
        return this.datosPersonales.get(key);
    }
    downloadVerificacion() {
        // console.log(this.datosPersonales.value.fechaVisita)
        console.log(this.formulariosVerificacion);
        // this.open()
        this.agriService.descargarVerificacion(this.id, this.datosPersonales.get("nombre").value, this.formulariosVerificacion[0].fechaVisita);
        // this.close()
    }
    downloadLineaBase() {
        // console.log(this.id)
        console.log(this.formulariosLineaBase);
        this.agriService.descargarLineaBase(this.id, this.datosPersonales.get("nombre").value, this.formulariosLineaBase[0].fechaVisita);
    }
    createCelularField() {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            celular: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[0-9]*$"),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)
            ])
        });
    }
    addCelular() {
        this.getFormArray("celulares").push(this.createCelularField());
    }
    deleteCelular(index) {
        this.getFormArray("celulares").removeAt(index);
    }
    toStringArray(objectArray) {
        const arr = [];
        objectArray.forEach(obj => {
            arr.push(obj["celular"]);
        });
        return arr;
    }
    onSubmit() {
    }
    setAgricultor(agricultor) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.agricultor = agricultor;
            yield this.fetchLineaBase(this.agricultor);
            yield this.fetchVerificacion(this.agricultor);
        });
    }
    get seccion() {
        const loggedTecnico = JSON.parse(localStorage.getItem("user"));
        return {
            preguntas: {
                cedula: {
                    respuesta: this.datosPersonales.value.cedula
                },
                nombre: {
                    respuesta: this.datosPersonales.value.nombre
                },
                estado: {
                    respuesta: this.datosPersonales.value.estado
                },
                fechaNacimiento: {
                    respuesta: this.datosPersonales.value.fechaNacimiento
                },
                genero: {
                    respuesta: this.datosPersonales.value.genero
                },
                estadoCivil: {
                    respuesta: this.datosPersonales.value.estadoCivil
                },
                nivelEducacion: {
                    respuesta: this.datosPersonales.value.nivelEducacion
                },
                celulares: {
                    respuesta: this.toStringArray(this.datosPersonales.value.celulares)
                },
                telefono: {
                    respuesta: this.datosPersonales.value.telefono
                },
                isDiscapacitado: {
                    respuesta: this.datosPersonales.value.isDiscapacitado
                },
                tecnico: {
                    respuesta: loggedTecnico.nombre
                },
                fechaVisita: {
                    respuesta: this.datosPersonales.value.fechaVisita
                },
                viaPrincipalComunicacion: {
                    respuesta: this.datosPersonales.value.viaPrincipalComunicacion
                },
                comentariosComunicacion: {
                    respuesta: this.datosPersonales.value.comentariosComunicacion
                }
            }
        };
    }
    reset() {
        this.datosPersonales.reset();
    }
    getErrorMessage(formulario) {
        if (formulario.hasError('required')) {
            return 'Debe ingresar un valor';
        }
        else if (formulario.hasError('pattern')) {
            if (formulario.errors.pattern.requiredPattern == '^[a-zA-Z ]*$') {
                return 'Ingrese caracteres';
            }
            if (formulario.errors.pattern.requiredPattern == '^[0-9]*$') {
                return 'Ingrese numeros';
            }
        }
        else if (!formulario.hasError('minLength')) {
            return 'Ingresar un valor de longitud aceptable';
        }
    }
    getMaxDate18YearsFromNow() {
        let today = new Date();
        today.setMonth(today.getMonth() - 216);
        return today;
    }
    setValues(agricultor) {
        this.datosPersonales.get('cedula')
            .setValue(agricultor.secciones.datosPersonales.preguntas.cedula.respuesta);
        this.datosPersonales.get('nombre')
            .setValue(agricultor.secciones.datosPersonales.preguntas.nombre.respuesta);
        this.datosPersonales.get('estado')
            .setValue(agricultor.secciones.datosPersonales.preguntas.estado.respuesta);
        const fechaNacimiento = this.convertDate(agricultor.secciones.datosPersonales.preguntas.fechaNacimiento.respuesta);
        this.datosPersonales.get('fechaNacimiento')
            .setValue(fechaNacimiento);
        this.datosPersonales.get('genero')
            .setValue(agricultor.secciones.datosPersonales.preguntas.genero.respuesta);
        this.datosPersonales.get('estadoCivil')
            .setValue(agricultor.secciones.datosPersonales.preguntas.estadoCivil.respuesta);
        this.datosPersonales.get('nivelEducacion')
            .setValue(agricultor.secciones.datosPersonales.preguntas.nivelEducacion.respuesta);
        agricultor.secciones.datosPersonales.preguntas.celulares.respuesta.forEach((celular, index) => {
            this.addCelular();
            this.getFormArray("celulares").controls[index].get("celular").setValue(celular);
        });
        this.datosPersonales.get('telefono')
            .setValue(agricultor.secciones.datosPersonales.preguntas.telefono.respuesta);
        this.datosPersonales.get('isDiscapacitado')
            .setValue(agricultor.secciones.datosPersonales.preguntas.isDiscapacitado.respuesta);
        this.datosPersonales.get('tecnico')
            .setValue(agricultor.secciones.datosPersonales.preguntas.tecnico.respuesta);
        this.nombreTecnico = agricultor.secciones.datosPersonales.preguntas.tecnico.respuesta;
        const fechaVisita = this.convertDate(agricultor.secciones.datosPersonales.preguntas.fechaVisita.respuesta);
        this.datosPersonales.get('fechaVisita')
            .setValue(fechaVisita);
        this.datosPersonales.get('viaPrincipalComunicacion')
            .setValue(agricultor.secciones.datosPersonales.preguntas.viaPrincipalComunicacion.respuesta);
        this.datosPersonales.get('comentariosComunicacion')
            .setValue(agricultor.secciones.datosPersonales.preguntas.comentariosComunicacion.respuesta);
    }
    convertDate(date) {
        if (date == '') {
            return new Date();
        }
        else if (typeof date === 'string') {
            // console.log(date);
            const arrValues = date.split('/');
            const dateString = arrValues[2] + "-" + arrValues[1] + "-" + arrValues[0] + " 00:00";
            return new Date(dateString);
        }
        else {
            const tVisita = date;
            return new Date(tVisita.seconds * 1000);
        }
    }
    open() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            title: 'Por favor espere',
            allowEscapeKey: false,
            allowOutsideClick: false,
            timer: 5000,
            didOpen: () => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.showLoading();
            }
        });
    }
    close() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.close();
    }
}
DatosPersonalesComponent.ɵfac = function DatosPersonalesComponent_Factory(t) { return new (t || DatosPersonalesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_modules_core_services_formularios_formulario_linea_base_service__WEBPACK_IMPORTED_MODULE_6__["FormularioLineaBaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_modules_core_services_formularios_formulario_verificacion_service__WEBPACK_IMPORTED_MODULE_7__["FormularioVerificacionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_agriculor_agricultor_service__WEBPACK_IMPORTED_MODULE_9__["AgricultorService"])); };
DatosPersonalesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DatosPersonalesComponent, selectors: [["app-datos-personales"]], inputs: { parentForm: "parentForm" }, decls: 83, vars: 17, consts: [[3, "formGroup", "ngSubmit"], [1, "container-fluid"], [1, "row"], [1, "col-md-8"], ["appearance", "outline"], ["readonly", "", "matInput", "", "autocomplete", "off", 3, "value"], [1, "col-md-4"], ["readonly", "", "matInput", "", "formControlName", "fechaVisita", "autocomplete", "off", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker2", ""], [1, "row", "justify-content-start"], ["readonly", "", "matInput", "", "formControlName", "fechaNacimiento", "autocomplete", "off", 3, "matDatepicker", "max"], ["picker", ""], ["matInput", "", "placeholder", "Ex. 0945785861", "formControlName", "cedula", "autocomplete", "off"], [4, "ngIf"], ["matInput", "", "placeholder", "Ex. Jorge Almeida", "formControlName", "nombre", "autocomplete", "off"], [1, "row", "justify-content-center"], ["formControlName", "genero", "autocomplete", "off"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "isDiscapacitado", "autocomplete", "off"], ["formControlName", "estadoCivil", "autocomplete", "off"], ["formControlName", "nivelEducacion", "autocomplete", "off"], [1, "col-md-6"], [1, "row", "justify-content-end"], [1, "col-md-12"], ["formArrayName", "celulares", "class", "row", 4, "ngFor", "ngForOf"], [1, "col-md-4", "add-button"], ["type", "button", "mat-flat-button", "", 3, "click"], ["matInput", "", "placeholder", "Ex. 1555777", "formControlName", "telefono", "autocomplete", "off"], ["class", "row", 4, "ngIf"], [3, "value"], ["formArrayName", "celulares", 1, "row"], [1, "col-md-10", "col-xs-8", 3, "formGroupName"], ["matInput", "", "placeholder", "Ex. 0945316795", "formControlName", "celular", "autocomplete", "off"], [1, "col-md-2", "col-xs-4", "fit"], ["id", "delete", "mat-flat-button", "", 3, "click", 4, "ngIf"], ["id", "delete", "mat-flat-button", "", 3, "click"], ["matInput", "", "formControlName", "viaPrincipalComunicacion", "autocomplete", "off"], ["matInput", "", "formControlName", "comentariosComunicacion", "autocomplete", "off"], [1, "my-2"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "col-md-2"], ["mat-icon-button", "", "color", "primary", 1, "mt-2", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "35", "height", "35", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-file-earmark-arrow-down"], ["d", "M8.5 6.5a.5.5 0 0 0-1 0v3.793L6.354 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 10.293V6.5z"], ["d", "M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"]], template: function DatosPersonalesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function DatosPersonalesComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "T\u00E9cnico");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Fecha de Visita");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "mat-datepicker-toggle", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "mat-datepicker", null, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Fecha de Nacimiento");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "mat-datepicker-toggle", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "mat-datepicker", null, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "C\u00E9dula de Identidad");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, DatosPersonalesComponent_mat_error_31_Template, 2, 1, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Nombre del Agricultor");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, DatosPersonalesComponent_mat_error_37_Template, 2, 1, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "G\u00E9nero");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "mat-select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, DatosPersonalesComponent_mat_option_44_Template, 2, 2, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Presenta Discapacidad");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "mat-select", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, DatosPersonalesComponent_mat_option_50_Template, 2, 2, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Estado Civil");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "mat-select", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](57, DatosPersonalesComponent_mat_option_57_Template, 2, 2, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Nivel de Eduaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "mat-select", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](63, DatosPersonalesComponent_mat_option_63_Template, 2, 2, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Contacto");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](70, DatosPersonalesComponent_div_70_Template, 9, 4, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DatosPersonalesComponent_Template_button_click_72_listener() { return ctx.addCelular(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "add_circle_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Tel\u00E9fono Convencional");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](79, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](80, DatosPersonalesComponent_mat_error_80_Template, 2, 1, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](81, DatosPersonalesComponent_div_81_Template, 11, 0, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](82, DatosPersonalesComponent_div_82_Template, 12, 2, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.datosPersonales);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.nombreTecnico);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", _r1)("max", ctx.maxDate18Years);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.datosPersonales.get("cedula").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.datosPersonales.get("nombre").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.generos);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.discapacidad);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.estadosCiviles);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.educacion);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.getFormArray("celulares").controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.datosPersonales.get("telefono").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isFicticio());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.agricultor !== undefined);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepicker"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatError"], _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["MatOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupName"]], styles: [".opt[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.greendot[_ngcontent-%COMP%] {\n  background: green;\n  align-self: center;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n}\n\n.reddot[_ngcontent-%COMP%] {\n  background: red;\n  align-self: center;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n}\n\n.yellowdot[_ngcontent-%COMP%] {\n  background: yellow;\n  align-self: center;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZ3JpY3VsdG9yZXMvY29tcG9uZW50cy9zZWN0aW9ucy9kYXRvcy1wZXJzb25hbGVzL2RhdG9zLXBlcnNvbmFsZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hZ3JpY3VsdG9yZXMvY29tcG9uZW50cy9zZWN0aW9ucy9kYXRvcy1wZXJzb25hbGVzL2RhdG9zLXBlcnNvbmFsZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3B0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uZ3JlZW5kb3Qge1xuICBiYWNrZ3JvdW5kOiBncmVlbjtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5yZWRkb3Qge1xuICBiYWNrZ3JvdW5kOiByZWQ7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4ueWVsbG93ZG90IHtcbiAgYmFja2dyb3VuZDogeWVsbG93O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DatosPersonalesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-datos-personales',
                templateUrl: './datos-personales.component.html',
                styleUrls: ['./datos-personales.component.scss']
            }]
    }], function () { return [{ type: src_app_modules_core_services_formularios_formulario_linea_base_service__WEBPACK_IMPORTED_MODULE_6__["FormularioLineaBaseService"] }, { type: src_app_modules_core_services_formularios_formulario_verificacion_service__WEBPACK_IMPORTED_MODULE_7__["FormularioVerificacionService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }, { type: _core_services_agriculor_agricultor_service__WEBPACK_IMPORTED_MODULE_9__["AgricultorService"] }]; }, { parentForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/modules/agricultores/components/sections/hectareaje/hectareaje.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/agricultores/components/sections/hectareaje/hectareaje.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: HectareajeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HectareajeComponent", function() { return HectareajeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_interfaces_tecnico__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/interfaces/tecnico */ "./src/app/interfaces/tecnico.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");












function HectareajeComponent_mat_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tipoTerreno_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", tipoTerreno_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tipoTerreno_r7, " ");
} }
function HectareajeComponent_mat_option_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tipoCultivo_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", tipoCultivo_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tipoCultivo_r8, " ");
} }
function HectareajeComponent_mat_option_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", value_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r9, " ");
} }
function HectareajeComponent_mat_form_field_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Especifique:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HectareajeComponent_mat_option_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", value_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r10, " ");
} }
function HectareajeComponent_mat_option_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", value_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r11, " ");
} }
function HectareajeComponent_div_45_mat_form_field_1_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", value_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r15, " ");
} }
function HectareajeComponent_div_45_mat_form_field_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Nombre de Zona Protegida");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HectareajeComponent_div_45_mat_form_field_1_mat_option_4_Template, 2, 2, "mat-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r12.zonasProtegidas);
} }
function HectareajeComponent_div_45_mat_form_field_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Especifique:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HectareajeComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HectareajeComponent_div_45_mat_form_field_1_Template, 5, 1, "mat-form-field", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HectareajeComponent_div_45_mat_form_field_2_Template, 4, 0, "mat-form-field", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.dentroZonaProtegida());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.otraZonaProtegida());
} }
class HectareajeComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.hectareajeTipoTerreno = [];
        this.hectareajeCultivoCacao = [];
        this.hectareajeAsociadoConTiene = [];
        this.hectareajeDistanciaPlantas = [];
        this.hectareajeTipoUbicacionZona = [];
        this.zonasProtegidas = [];
        this.otrosAsociados = [];
        this.hectareaje = this.formBuilder.group({
            dimensionTotalFinca: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            terreno: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            cultivoCacao: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            asociadoConTiene: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            otrosEspecifique: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            areaNetaCacao: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            distanciaPlantas: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            plantasXHectareas: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            tipoUbicacionZona: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            zonaProtegida: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            otraZona: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
    }
    ngOnInit() {
        this.hectareajeTipoTerreno = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].constantes.formularioLineaBase.hectareajeTipoTerreno;
        this.hectareajeCultivoCacao = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].constantes.formularioLineaBase.hectareajeCultivoCacao;
        this.hectareajeAsociadoConTiene = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].constantes.formularioLineaBase.hectareajeAsociadoConTiene;
        this.hectareajeDistanciaPlantas = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].constantes.formularioLineaBase.hectareajeDistanciaPlantas;
        this.hectareajeTipoUbicacionZona = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].constantes.formularioLineaBase.hectareajeTipoUbicacionZona;
        this.zonasProtegidas = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].constantes.formularioLineaBase.zonasProtegidas;
    }
    onSubmit() {
    }
    isFicticio() {
        const loggedTecnico = JSON.parse(localStorage.getItem("user"));
        return loggedTecnico.permiso === src_app_interfaces_tecnico__WEBPACK_IMPORTED_MODULE_2__["Permiso"].Ficticio;
    }
    dentroZonaProtegida() {
        const respuesta = this.hectareaje.get('tipoUbicacionZona').value;
        return respuesta === 'CERCA A ZONA PROTEGIDA' || respuesta === 'DENTRO DE ZONA PROTEGIDA';
    }
    otraZonaProtegida() {
        return this.hectareaje.get('zonaProtegida').value === 'OTRO';
    }
    otroSelected() {
        const otrosSelected = this.hectareaje.get('asociadoConTiene').value;
        return otrosSelected.includes('OTRO');
    }
    get seccion() {
        return {
            preguntas: {
                dimensionTotalFinca: {
                    respuesta: this.hectareaje.value.dimensionTotalFinca
                },
                terreno: {
                    respuesta: this.hectareaje.value.terreno
                },
                cultivoCacao: {
                    respuesta: this.hectareaje.value.cultivoCacao,
                    preguntas: {
                        asociadoConTiene: {
                            respuesta: this.hectareaje.value.asociadoConTiene,
                            preguntas: {
                                otrosEspecifique: {
                                    respuesta: this.hectareaje.value.otrosEspecifique
                                }
                            }
                        }
                    }
                },
                areaNetaCacao: {
                    respuesta: this.hectareaje.value.areaNetaCacao
                },
                distanciaPlantas: {
                    respuesta: this.hectareaje.value.distanciaPlantas
                },
                plantasXHectareas: {
                    respuesta: this.hectareaje.value.plantasXHectareas
                },
                tipoUbicacionZona: {
                    respuesta: this.hectareaje.value.tipoUbicacionZona
                },
                zonaProtegida: {
                    respuesta: this.hectareaje.value.zonaProtegida,
                    preguntas: {
                        otraZona: {
                            respuesta: this.hectareaje.value.otraZona
                        }
                    }
                }
            }
        };
    }
    setValues(agricultor) {
        this.hectareaje.get('dimensionTotalFinca')
            .setValue(agricultor.secciones.hectareaje.preguntas.dimensionTotalFinca.respuesta);
        this.hectareaje.get('terreno')
            .setValue(agricultor.secciones.hectareaje.preguntas.terreno.respuesta);
        this.hectareaje.get('cultivoCacao')
            .setValue(agricultor.secciones.hectareaje.preguntas.cultivoCacao.respuesta);
        this.hectareaje.get('asociadoConTiene')
            .setValue(agricultor.secciones.hectareaje.preguntas.cultivoCacao.preguntas.asociadoConTiene.respuesta);
        this.hectareaje.get('otrosEspecifique')
            .setValue(agricultor.secciones.hectareaje.preguntas.cultivoCacao.preguntas.asociadoConTiene.preguntas.otrosEspecifique.respuesta);
        this.hectareaje.get('areaNetaCacao')
            .setValue(agricultor.secciones.hectareaje.preguntas.areaNetaCacao.respuesta);
        this.hectareaje.get('distanciaPlantas')
            .setValue(agricultor.secciones.hectareaje.preguntas.distanciaPlantas.respuesta);
        this.hectareaje.get('plantasXHectareas')
            .setValue(agricultor.secciones.hectareaje.preguntas.plantasXHectareas.respuesta);
        this.hectareaje.get('tipoUbicacionZona')
            .setValue(agricultor.secciones.hectareaje.preguntas.tipoUbicacionZona.respuesta);
        this.hectareaje.get('zonaProtegida')
            .setValue(agricultor.secciones.hectareaje.preguntas.zonaProtegida.respuesta);
        this.hectareaje.get('otraZona')
            .setValue(agricultor.secciones.hectareaje.preguntas.zonaProtegida.preguntas.otraZona.respuesta);
    }
}
HectareajeComponent.ɵfac = function HectareajeComponent_Factory(t) { return new (t || HectareajeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
HectareajeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HectareajeComponent, selectors: [["app-hectareaje"]], inputs: { parentForm: "parentForm" }, decls: 46, vars: 8, consts: [[3, "formGroup", "ngSubmit"], [1, "container-fluid"], [1, "row"], ["appearance", "outline", 1, "col-md-6"], ["matInput", "", "formControlName", "dimensionTotalFinca"], ["formControlName", "terreno"], [3, "value", 4, "ngFor", "ngForOf"], ["appearance", "outline", 1, "col-md-4"], ["formControlName", "cultivoCacao"], ["formControlName", "asociadoConTiene", "multiple", ""], ["class", "col-md-4", "appearance", "outline", 4, "ngIf"], ["matInput", "", "formControlName", "areaNetaCacao"], ["matInput", "", "formControlName", "plantasXHectareas"], ["formControlName", "distanciaPlantas"], ["formControlName", "tipoUbicacionZona"], ["class", "row", 4, "ngIf"], [3, "value"], ["matInput", "", "formControlName", "otrosEspecifique"], ["class", "col-md-8", "appearance", "outline", 4, "ngIf"], ["formControlName", "zonaProtegida"], ["appearance", "outline", 1, "col-md-8"], ["matInput", "", "formControlName", "otraZona"]], template: function HectareajeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function HectareajeComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Dimension Total de la Finca");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "El Terreno es:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HectareajeComponent_mat_option_12_Template, 2, 2, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "El Cultivo de Cacao es:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, HectareajeComponent_mat_option_18_Template, 2, 2, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Esta Asociado con/tiene:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, HectareajeComponent_mat_option_23_Template, 2, 2, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, HectareajeComponent_mat_form_field_24_Template, 4, 0, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Area Neta de Cacao");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Plantas por Hectareas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Distancia de Plantas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, HectareajeComponent_mat_option_39_Template, 2, 2, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "La Finca se encuentra:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, HectareajeComponent_mat_option_44_Template, 2, 2, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, HectareajeComponent_div_45_Template, 3, 2, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.hectareaje);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.hectareajeTipoTerreno);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.hectareajeCultivoCacao);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.hectareajeAsociadoConTiene);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.otroSelected());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.hectareajeDistanciaPlantas);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.hectareajeTipoUbicacionZona);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isFicticio());
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOption"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWdyaWN1bHRvcmVzL2NvbXBvbmVudHMvc2VjdGlvbnMvaGVjdGFyZWFqZS9oZWN0YXJlYWplLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HectareajeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-hectareaje',
                templateUrl: './hectareaje.component.html',
                styleUrls: ['./hectareaje.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, { parentForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/modules/agricultores/components/sections/informacion-finca/informacion-finca.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/agricultores/components/sections/informacion-finca/informacion-finca.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: InformacionFincaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformacionFincaComponent", function() { return InformacionFincaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_interfaces_tecnico__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/interfaces/tecnico */ "./src/app/interfaces/tecnico.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");











function InformacionFincaComponent_div_31_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const opt_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", opt_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", opt_r3, " ");
} }
function InformacionFincaComponent_div_31_mat_form_field_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Descripcion Para Llegar a Casa");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "textarea", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InformacionFincaComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Casa del Productor Dentro de Finca");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-select", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, InformacionFincaComponent_div_31_mat_option_5_Template, 2, 2, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, InformacionFincaComponent_div_31_mat_form_field_7_Template, 4, 0, "mat-form-field", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.casaProductorFinca());
} }
class InformacionFincaComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.options = ['SI', 'NO'];
        this.informacionFinca = this.formBuilder.group({
            provincia: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            canton: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            parroquia: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            recinto: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            nombreFinca: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            descripcionLlegarFinca: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            casaProductorDentroFinca: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            descripcionLlegarCasa: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
    }
    ngOnInit() {
    }
    onSubmit() {
    }
    isFicticio() {
        const loggedTecnico = JSON.parse(localStorage.getItem("user"));
        return loggedTecnico.permiso === src_app_interfaces_tecnico__WEBPACK_IMPORTED_MODULE_2__["Permiso"].Ficticio;
    }
    casaProductorFinca() {
        return this.informacionFinca.get('casaProductorDentroFinca').value === 'SI';
    }
    get seccion() {
        return {
            preguntas: {
                provincia: {
                    respuesta: this.informacionFinca.value.provincia
                },
                canton: {
                    respuesta: this.informacionFinca.value.canton
                },
                parroquia: {
                    respuesta: this.informacionFinca.value.parroquia
                },
                recinto: {
                    respuesta: this.informacionFinca.value.recinto
                },
                nombreFinca: {
                    respuesta: this.informacionFinca.value.nombreFinca
                },
                descripcionLlegarFinca: {
                    respuesta: this.informacionFinca.value.descripcionLlegarFinca
                },
                casaProductorDentroFinca: {
                    respuesta: this.informacionFinca.value.casaProductorDentroFinca,
                    preguntas: {
                        descripcionLlegarCasa: {
                            respuesta: this.informacionFinca.value.descripcionLlegarCasa
                        }
                    }
                }
            }
        };
    }
    setValues(agricultor) {
        this.informacionFinca.get('provincia')
            .setValue(agricultor.secciones.informacionFinca.preguntas.provincia.respuesta);
        this.informacionFinca.get('canton')
            .setValue(agricultor.secciones.informacionFinca.preguntas.canton.respuesta);
        this.informacionFinca.get('parroquia')
            .setValue(agricultor.secciones.informacionFinca.preguntas.parroquia.respuesta);
        this.informacionFinca.get('recinto')
            .setValue(agricultor.secciones.informacionFinca.preguntas.recinto.respuesta);
        this.informacionFinca.get('nombreFinca')
            .setValue(agricultor.secciones.informacionFinca.preguntas.nombreFinca.respuesta);
        this.informacionFinca.get('descripcionLlegarFinca')
            .setValue(agricultor.secciones.informacionFinca.preguntas.descripcionLlegarFinca.respuesta);
        this.informacionFinca.get('casaProductorDentroFinca')
            .setValue(agricultor.secciones.informacionFinca.preguntas.casaProductorDentroFinca.respuesta);
        this.informacionFinca.get('descripcionLlegarCasa')
            .setValue(agricultor.secciones.informacionFinca.preguntas.casaProductorDentroFinca.preguntas.descripcionLlegarCasa.respuesta);
    }
}
InformacionFincaComponent.ɵfac = function InformacionFincaComponent_Factory(t) { return new (t || InformacionFincaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
InformacionFincaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InformacionFincaComponent, selectors: [["app-informacion-finca"]], inputs: { parentForm: "parentForm" }, decls: 32, vars: 2, consts: [[3, "formGroup", "ngSubmit"], [1, "container-fluid"], [1, "row"], ["appearance", "outline", 1, "col-md-6"], ["matInput", "", "formControlName", "nombreFinca"], ["matInput", "", "formControlName", "provincia"], ["matInput", "", "formControlName", "canton"], ["matInput", "", "formControlName", "parroquia"], ["matInput", "", "formControlName", "recinto"], ["appearance", "outline", 1, "col-md-12"], ["matInput", "", "formControlName", "descripcionLlegarFinca"], ["class", "row", 4, "ngIf"], ["formControlName", "casaProductorDentroFinca", "autocomplete", "off"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-md-6"], ["class", "col-md-12", "appearance", "outline", 4, "ngIf"], [3, "value"], ["matInput", "", "formControlName", "descripcionLlegarCasa"]], template: function InformacionFincaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function InformacionFincaComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Nombre Finca");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Provincia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Canton");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Parroquia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Recinto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Descripcion Para Llegar a Finca");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "textarea", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, InformacionFincaComponent_div_31_Template, 8, 2, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.informacionFinca);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isFicticio());
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWdyaWN1bHRvcmVzL2NvbXBvbmVudHMvc2VjdGlvbnMvaW5mb3JtYWNpb24tZmluY2EvaW5mb3JtYWNpb24tZmluY2EuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InformacionFincaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-informacion-finca',
                templateUrl: './informacion-finca.component.html',
                styleUrls: ['./informacion-finca.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, { parentForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/modules/agricultores/components/sections/origen-plantas/origen-plantas.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/agricultores/components/sections/origen-plantas/origen-plantas.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: OrigenPlantasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrigenPlantasComponent", function() { return OrigenPlantasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");










function OrigenPlantasComponent_mat_option_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const encargado_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", encargado_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](encargado_r3);
} }
function OrigenPlantasComponent_mat_option_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const conocimiento_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", conocimiento_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](conocimiento_r4);
} }
function OrigenPlantasComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Especifique:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class OrigenPlantasComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.encargadosPropagacion = [
            "PRODUCTOR",
            "FAMILIAR",
            "ASESOR EXTERNO",
            "OTRO"
        ];
        this.conocimientos = [
            "TECNICO",
            "EMPIRICO"
        ];
        this.origenPlantas = this.formBuilder.group({
            nombreVivero: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            ubicacionVivero: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            encargadoPropagacion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            otroEncargadoPropagacion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            tipoConocimiento: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            entidadDonacion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            cantidadPlantasRecibidas: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
    }
    ngOnInit() {
    }
    onSubmit() {
    }
    otroEncargado() {
        const otroEncargado = this.origenPlantas.get('encargadoPropagacion').value;
        return otroEncargado === 'OTRO';
    }
    get seccion() {
        return {
            preguntas: {
                nombreVivero: {
                    respuesta: this.origenPlantas.value.nombreVivero
                },
                ubicacionVivero: {
                    respuesta: this.origenPlantas.value.ubicacionVivero
                },
                encargadoPropagacion: {
                    respuesta: this.origenPlantas.value.encargadoPropagacion,
                    preguntas: {
                        otroEncargadoPropagacion: {
                            respuesta: this.origenPlantas.value.otroEncargadoPropagacion,
                        }
                    }
                },
                tipoConocimiento: {
                    respuesta: this.origenPlantas.value.tipoConocimiento
                },
                entidadDonacion: {
                    respuesta: this.origenPlantas.value.entidadDonacion
                },
                cantidadPlantasRecibidas: {
                    respuesta: this.origenPlantas.value.cantidadPlantasRecibidas
                }
            }
        };
    }
    setValues(agriculor) {
        this.origenPlantas.get('nombreVivero')
            .setValue(agriculor.secciones.origenPlantas.preguntas.nombreVivero.respuesta);
        this.origenPlantas.get('ubicacionVivero')
            .setValue(agriculor.secciones.origenPlantas.preguntas.ubicacionVivero.respuesta);
        this.origenPlantas.get('encargadoPropagacion')
            .setValue(agriculor.secciones.origenPlantas.preguntas.encargadoPropagacion.respuesta);
        this.origenPlantas.get('otroEncargadoPropagacion')
            .setValue(agriculor.secciones.origenPlantas.preguntas.encargadoPropagacion.preguntas.otroEncargadoPropagacion.respuesta);
        this.origenPlantas.get('tipoConocimiento')
            .setValue(agriculor.secciones.origenPlantas.preguntas.tipoConocimiento.respuesta);
        this.origenPlantas.get('entidadDonacion')
            .setValue(agriculor.secciones.origenPlantas.preguntas.entidadDonacion.respuesta);
        this.origenPlantas.get('cantidadPlantasRecibidas')
            .setValue(agriculor.secciones.origenPlantas.preguntas.cantidadPlantasRecibidas.respuesta);
    }
}
OrigenPlantasComponent.ɵfac = function OrigenPlantasComponent_Factory(t) { return new (t || OrigenPlantasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
OrigenPlantasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OrigenPlantasComponent, selectors: [["app-origen-plantas"]], inputs: { parentForm: "parentForm" }, decls: 34, vars: 4, consts: [[3, "formGroup", "ngSubmit"], [1, "container-fluid"], [1, "row"], ["appearance", "outline", 1, "col-md-8"], ["matInput", "", "formControlName", "nombreVivero", "autocomplete", "off"], ["matInput", "", "formControlName", "ubicacionVivero", "autocomplete", "off"], ["appearance", "outline", 1, "col-md-6"], ["formControlName", "encargadoPropagacion", "autocomplete", "off"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "tipoConocimiento", "autocomplete", "off"], ["class", "row", 4, "ngIf"], ["matInput", "", "formControlName", "entidadDonacion", "autocomplete", "off"], ["matInput", "", "formControlName", "cantidadPlantasRecibidas", "autocomplete", "off"], [3, "value"], ["matInput", "", "formControlName", "otroEncargadoPropagacion", "autocomplete", "off"]], template: function OrigenPlantasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function OrigenPlantasComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Nombre del Vivero");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Ubicacion del Vivero");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Encargado Propagacion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, OrigenPlantasComponent_mat_option_18_Template, 2, 2, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Tipo de Conocimiento");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, OrigenPlantasComponent_mat_option_23_Template, 2, 2, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, OrigenPlantasComponent_div_24_Template, 5, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Entidad que Don\u00F3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Cantidad de Plantas Recibidas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.origenPlantas);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.encargadosPropagacion);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.conocimientos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.otroEncargado());
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatOption"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWdyaWN1bHRvcmVzL2NvbXBvbmVudHMvc2VjdGlvbnMvb3JpZ2VuLXBsYW50YXMvb3JpZ2VuLXBsYW50YXMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrigenPlantasComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-origen-plantas',
                templateUrl: './origen-plantas.component.html',
                styleUrls: ['./origen-plantas.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, { parentForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/modules/formulario-linea-base/components/sections/priorizacion-participacion-proyectos/priorizacion-participacion-proyectos.component.ts":
/*!**********************************************************************************************************************************************************!*\
  !*** ./src/app/modules/formulario-linea-base/components/sections/priorizacion-participacion-proyectos/priorizacion-participacion-proyectos.component.ts ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: PriorizacionParticipacionProyectosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriorizacionParticipacionProyectosComponent", function() { return PriorizacionParticipacionProyectosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");











function PriorizacionParticipacionProyectosComponent_mat_option_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const op_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", op_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](op_r12);
} }
function PriorizacionParticipacionProyectosComponent_mat_option_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const op_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", op_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](op_r13);
} }
function PriorizacionParticipacionProyectosComponent_mat_form_field_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Cuanto");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PriorizacionParticipacionProyectosComponent_mat_option_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const op_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", op_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](op_r14);
} }
function PriorizacionParticipacionProyectosComponent_mat_form_field_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Cuanto");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PriorizacionParticipacionProyectosComponent_mat_option_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const op_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", op_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](op_r15);
} }
function PriorizacionParticipacionProyectosComponent_mat_option_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const op_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", op_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](op_r16);
} }
function PriorizacionParticipacionProyectosComponent_mat_option_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const op_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", op_r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](op_r17);
} }
function PriorizacionParticipacionProyectosComponent_mat_option_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const op_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", op_r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](op_r18);
} }
function PriorizacionParticipacionProyectosComponent_mat_option_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const op_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", op_r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](op_r19);
} }
function PriorizacionParticipacionProyectosComponent_mat_option_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const op_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", op_r20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](op_r20);
} }
function PriorizacionParticipacionProyectosComponent_mat_form_field_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "A\u00F1os de experiencia");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PriorizacionParticipacionProyectosComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.opciones = ["SI", "NO"];
        this.proyectosIncrementarProductividad = [
            "RECIBIR PLANTAS DE CACAO NACIONAL",
            "APRENDER ELAB. PRODUCTOS NATURALES"
        ];
        this.proyectosMejorarCalidad = [
            "BANDEJAS O CAJONES DE FERMENTACION",
            "TENDALES ELEVADOS DE CAÑA",
            "SECADORAS COMUNITARIAS"
        ];
        this.proyectosparticipacionProyectos = [
            "HUERTOS ORGANICOS",
            "DESARROLLO DE VIVEROS",
            "DESARROLLO Y VENTA DE FERTILIZANTES",
            "REHABILITACIÓN DE FINCA",
            "BRIGADA DE PODADORES"
        ];
        this.participacionProyectos = this.formBuilder.group({
            recibirPlantasCacaoNacional: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            aprenderElabProductosNaturales: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            tieneAreaLibreParaSembrar: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            areaLibre: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            necesitaRehaReinjerto: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            cantidad: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            bandejasCajonesFermentacion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            dispuestoHacerloPropiaCuenta: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            tendalesElevadosCania: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            secadorasComunitarias: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            contarAgrupacionParaProyecto: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            huertosOrganicos: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            desarrolloViveros: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            desarrolloVentaFertilizantes: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            rehabilitacionFinca: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            brigadaPodadores: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            contarExperienciaPoda: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            aniosExperiencia: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
    }
    ngOnInit() {
    }
    onSubmit() {
    }
    hayAreaLibre() {
        const hayAreaLibre = this.participacionProyectos.get('tieneAreaLibreParaSembrar').value;
        return hayAreaLibre === 'SI';
    }
    necesitaRehab() {
        const necesitaRehab = this.participacionProyectos.get('necesitaRehaReinjerto').value;
        return necesitaRehab === 'SI';
    }
    bandejasCartonesFerm() {
        return this.participacionProyectos.get('bandejasCajonesFermentacion').value === 'SI';
    }
    secadorasComunitarias() {
        return this.participacionProyectos.get('secadorasComunitarias').value === 'SI';
    }
    tieneExperiencia() {
        const tieneExperiencia = this.participacionProyectos.get('contarExperienciaPoda').value;
        return tieneExperiencia === 'SI';
    }
    get seccion() {
        return {
            preguntas: {
                incrementarProductividad: {
                    respuesta: "",
                    preguntas: {
                        recibirPlantasCacaoNacional: {
                            respuesta: this.participacionProyectos.value.recibirPlantasCacaoNacional,
                            preguntas: {
                                tieneAreaLibreParaSembrar: {
                                    respuesta: this.participacionProyectos.value.tieneAreaLibreParaSembrar,
                                    preguntas: {
                                        areaLibre: {
                                            respuesta: this.participacionProyectos.value.areaLibre
                                        }
                                    }
                                },
                                necesitaRehaReinjerto: {
                                    respuesta: this.participacionProyectos.value.necesitaRehaReinjerto,
                                    preguntas: {
                                        cantidad: {
                                            respuesta: this.participacionProyectos.value.cantidad
                                        }
                                    }
                                }
                            }
                        },
                        aprenderElabProductosNaturales: {
                            respuesta: this.participacionProyectos.value.aprenderElabProductosNaturales
                        }
                    }
                },
                mejorarCalidadCacao: {
                    respuesta: "",
                    preguntas: {
                        bandejasCajonesFermentacion: {
                            respuesta: this.participacionProyectos.value.bandejasCajonesFermentacion,
                            preguntas: {
                                dispuestoHacerloPropiaCuenta: {
                                    respuesta: this.participacionProyectos.value.dispuestoHacerloPropiaCuenta
                                }
                            }
                        },
                        tendalesElevadosCania: {
                            respuesta: this.participacionProyectos.value.tendalesElevadosCania
                        },
                        secadorasComunitarias: {
                            respuesta: this.participacionProyectos.value.secadorasComunitarias,
                            preguntas: {
                                contarAgrupacionParaProyecto: {
                                    respuesta: this.participacionProyectos.value.contarAgrupacionParaProyecto
                                }
                            }
                        }
                    }
                },
                diversificacionIngresos: {
                    respuesta: "",
                    preguntas: {
                        huertosOrganicos: {
                            respuesta: this.participacionProyectos.value.huertosOrganicos
                        },
                        desarrolloViveros: {
                            respuesta: this.participacionProyectos.value.desarrolloViveros
                        },
                        desarrolloVentaFertilizantes: {
                            respuesta: this.participacionProyectos.value.desarrolloVentaFertilizantes
                        },
                        rehabilitacionFinca: {
                            respuesta: this.participacionProyectos.value.rehabilitacionFinca
                        },
                        brigadaPodadores: {
                            respuesta: this.participacionProyectos.value.brigadaPodadores,
                            preguntas: {
                                contarExperienciaPoda: {
                                    respuesta: this.participacionProyectos.value.contarExperienciaPoda,
                                    preguntas: {
                                        aniosExperiencia: {
                                            respuesta: this.participacionProyectos.value.aniosExperiencia
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        };
    }
    setValues(agricultor) {
        this.participacionProyectos.get('recibirPlantasCacaoNacional')
            .setValue(agricultor.secciones.priorizacionParticipacionProyectos.preguntas.incrementarProductividad.preguntas.recibirPlantasCacaoNacional.respuesta);
        this.participacionProyectos.get('tieneAreaLibreParaSembrar')
            .setValue(agricultor.secciones.priorizacionParticipacionProyectos.preguntas.incrementarProductividad.preguntas.recibirPlantasCacaoNacional.preguntas.tieneAreaLibreParaSembrar.respuesta);
        this.participacionProyectos.get('areaLibre')
            .setValue(agricultor.secciones.priorizacionParticipacionProyectos.preguntas.incrementarProductividad.preguntas.recibirPlantasCacaoNacional.preguntas.tieneAreaLibreParaSembrar.preguntas.areaLibre.respuesta);
        this.participacionProyectos.get('necesitaRehaReinjerto')
            .setValue(agricultor.secciones.priorizacionParticipacionProyectos.preguntas.incrementarProductividad.preguntas.recibirPlantasCacaoNacional.preguntas.necesitaRehaReinjerto.respuesta);
        this.participacionProyectos.get('cantidad')
            .setValue(agricultor.secciones.priorizacionParticipacionProyectos.preguntas.incrementarProductividad.preguntas.recibirPlantasCacaoNacional.preguntas.necesitaRehaReinjerto.preguntas.cantidad.respuesta);
        this.participacionProyectos.get('aprenderElabProductosNaturales')
            .setValue(agricultor.secciones.priorizacionParticipacionProyectos.preguntas.incrementarProductividad.preguntas.aprenderElabProductosNaturales.respuesta);
        this.participacionProyectos.get('bandejasCajonesFermentacion')
            .setValue(agricultor.secciones.priorizacionParticipacionProyectos.preguntas.mejorarCalidadCacao.preguntas.bandejasCajonesFermentacion.respuesta);
        this.participacionProyectos.get('dispuestoHacerloPropiaCuenta')
            .setValue(agricultor.secciones.priorizacionParticipacionProyectos.preguntas.mejorarCalidadCacao.preguntas.bandejasCajonesFermentacion.preguntas.dispuestoHacerloPropiaCuenta.respuesta);
        this.participacionProyectos.get('tendalesElevadosCania')
            .setValue(agricultor.secciones.priorizacionParticipacionProyectos.preguntas.mejorarCalidadCacao.preguntas.tendalesElevadosCania.respuesta);
        this.participacionProyectos.get('secadorasComunitarias')
            .setValue(agricultor.secciones.priorizacionParticipacionProyectos.preguntas.mejorarCalidadCacao.preguntas.secadorasComunitarias.respuesta);
        this.participacionProyectos.get('contarAgrupacionParaProyecto')
            .setValue(agricultor.secciones.priorizacionParticipacionProyectos.preguntas.mejorarCalidadCacao.preguntas.secadorasComunitarias.preguntas.contarAgrupacionParaProyecto.respuesta);
        this.participacionProyectos.get('huertosOrganicos')
            .setValue(agricultor.secciones.priorizacionParticipacionProyectos.preguntas.diversificacionIngresos.preguntas.huertosOrganicos.respuesta);
        this.participacionProyectos.get('desarrolloViveros')
            .setValue(agricultor.secciones.priorizacionParticipacionProyectos.preguntas.diversificacionIngresos.preguntas.desarrolloViveros.respuesta);
        this.participacionProyectos.get('desarrolloVentaFertilizantes')
            .setValue(agricultor.secciones.priorizacionParticipacionProyectos.preguntas.diversificacionIngresos.preguntas.desarrolloVentaFertilizantes.respuesta);
        this.participacionProyectos.get('rehabilitacionFinca')
            .setValue(agricultor.secciones.priorizacionParticipacionProyectos.preguntas.diversificacionIngresos.preguntas.rehabilitacionFinca.respuesta);
        this.participacionProyectos.get('brigadaPodadores')
            .setValue(agricultor.secciones.priorizacionParticipacionProyectos.preguntas.diversificacionIngresos.preguntas.brigadaPodadores.respuesta);
        this.participacionProyectos.get('contarExperienciaPoda')
            .setValue(agricultor.secciones.priorizacionParticipacionProyectos.preguntas.diversificacionIngresos.preguntas.brigadaPodadores.preguntas.contarExperienciaPoda.respuesta);
        this.participacionProyectos.get('aniosExperiencia')
            .setValue(agricultor.secciones.priorizacionParticipacionProyectos.preguntas.diversificacionIngresos.preguntas.brigadaPodadores.preguntas.contarExperienciaPoda.preguntas.aniosExperiencia.respuesta);
    }
}
PriorizacionParticipacionProyectosComponent.ɵfac = function PriorizacionParticipacionProyectosComponent_Factory(t) { return new (t || PriorizacionParticipacionProyectosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
PriorizacionParticipacionProyectosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PriorizacionParticipacionProyectosComponent, selectors: [["app-priorizacion-participacion-proyectos"]], inputs: { parentForm: "parentForm" }, decls: 80, vars: 15, consts: [[3, "formGroup", "ngSubmit"], [1, "container-fluid"], [1, "row"], [1, "col-md-5"], [2, "text-align", "center"], [1, "col-md-7"], ["appearance", "outline", 1, "col-md-5"], ["formControlName", "recibirPlantasCacaoNacional", "name", "someUnusualName", "autocomplete", "off"], [3, "value", 4, "ngFor", "ngForOf"], ["appearance", "outline", 1, "col-md-6"], ["formControlName", "tieneAreaLibreParaSembrar", "autocomplete", "off"], [1, "col-md-6"], ["appearance", "outline", 4, "ngIf"], ["formControlName", "necesitaRehaReinjerto", "autocomplete", "off"], ["formControlName", "aprenderElabProductosNaturales", "name", "someUnusualName", "autocomplete", "off"], [1, "mb-4", 3, "inset"], ["appearance", "outline"], ["formControlName", "dispuestoHacerloPropiaCuenta"], ["formControlName", "contarAgrupacionParaProyecto"], ["formControlName", "rehabilitacionFinca", "name", "someUnusualName", "autocomplete", "off"], ["formControlName", "brigadaPodadores", "name", "someUnusualName", "autocomplete", "off"], ["formControlName", "contarExperienciaPoda", "name", "someUnusualName", "autocomplete", "off"], [3, "value"], ["matInput", "", "formControlName", "areaLibre", "autocomplete", "off"], ["matInput", "", "formControlName", "cantidad", "autocomplete", "off"], ["matInput", "", "formControlName", "aniosExperiencia", "name", "someUnusualName", "autocomplete", "off"]], template: function PriorizacionParticipacionProyectosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function PriorizacionParticipacionProyectosComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Incrementar Productividad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Preguntas Adicionales");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Recibir Plantas de Cacao Nacional");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PriorizacionParticipacionProyectosComponent_mat_option_14_Template, 2, 2, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Tiene area libre para sembrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, PriorizacionParticipacionProyectosComponent_mat_option_21_Template, 2, 2, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, PriorizacionParticipacionProyectosComponent_mat_form_field_23_Template, 4, 0, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Necesita rehab./reinjerto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, PriorizacionParticipacionProyectosComponent_mat_option_28_Template, 2, 2, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, PriorizacionParticipacionProyectosComponent_mat_form_field_30_Template, 4, 0, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Aprender Elab Productos Nacionales");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, PriorizacionParticipacionProyectosComponent_mat_option_35_Template, 2, 2, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "mat-divider", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Preguntas Adicionales");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-form-field", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\u00BFEst\u00E1 dispuesto a hacerlo por su cuenta?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, PriorizacionParticipacionProyectosComponent_mat_option_46_Template, 2, 2, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-form-field", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "\u00BFCuenta con agrupacion de vecinos para trabajar en el proyecto?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, PriorizacionParticipacionProyectosComponent_mat_option_53_Template, 2, 2, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "mat-divider", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Diversificaci\u00F3n de Ingresos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-form-field", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Rehabilitacion de finca");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-select", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, PriorizacionParticipacionProyectosComponent_mat_option_63_Template, 2, 2, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-form-field", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Brigada de podadores");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-select", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, PriorizacionParticipacionProyectosComponent_mat_option_68_Template, 2, 2, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Preguntas Adicionales");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "mat-form-field", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "\u00BFCuenta con experiencia en poda?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-select", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, PriorizacionParticipacionProyectosComponent_mat_option_76_Template, 2, 2, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](77, PriorizacionParticipacionProyectosComponent_mat_form_field_77_Template, 4, 0, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.participacionProyectos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.opciones);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.opciones);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hayAreaLibre());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.opciones);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.necesitaRehab());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.opciones);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inset", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.opciones);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.opciones);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inset", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.opciones);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.opciones);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.opciones);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tieneExperiencia());
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDivider"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatOption"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZm9ybXVsYXJpby1saW5lYS1iYXNlL2NvbXBvbmVudHMvc2VjdGlvbnMvcHJpb3JpemFjaW9uLXBhcnRpY2lwYWNpb24tcHJveWVjdG9zL3ByaW9yaXphY2lvbi1wYXJ0aWNpcGFjaW9uLXByb3llY3Rvcy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PriorizacionParticipacionProyectosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-priorizacion-participacion-proyectos',
                templateUrl: './priorizacion-participacion-proyectos.component.html',
                styleUrls: ['./priorizacion-participacion-proyectos.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, { parentForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/canvas/canvas.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/canvas/canvas.component.ts ***!
  \***************************************************/
/*! exports provided: CanvasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasComponent", function() { return CanvasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");







const _c0 = ["canvas"];
function CanvasComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CanvasComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CanvasComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.switchToPencil(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CanvasComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CanvasComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CanvasComponent_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.switchToEraser(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CanvasComponent {
    constructor(storage) {
        this.storage = storage;
        this.width = 600;
        this.height = 700;
        this.mode = 'pencil';
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        // get the context
        const canvasEl = this.canvas.nativeElement;
        this.cx = canvasEl.getContext('2d');
        // set width and height
        canvasEl.width = this.width;
        canvasEl.height = this.height;
        // set default properties about the line
        this.switchToPencil();
        // capture events
        this.captureEvents(canvasEl);
    }
    captureEvents(canvasEl) {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(canvasEl, 'mousedown')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((e) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(canvasEl, 'mousemove')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(canvasEl, 'mouseup')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(canvasEl, 'mouseleave')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pairwise"])());
        }))
            .subscribe((res) => {
            const rect = canvasEl.getBoundingClientRect();
            const prevPos = {
                x: res[0].clientX - rect.left,
                y: res[0].clientY - rect.top
            };
            const currentPos = {
                x: res[1].clientX - rect.left,
                y: res[1].clientY - rect.top
            };
            this.drawOnCanvas(prevPos, currentPos);
        });
    }
    drawOnCanvas(prevPos, currentPos) {
        // in case the context is not set
        if (!this.cx) {
            return;
        }
        // start our drawing path
        this.cx.beginPath();
        if (prevPos) {
            // sets the start point
            this.cx.moveTo(prevPos.x, prevPos.y); // from
            // draws a line from the start pos until the current position
            this.cx.lineTo(currentPos.x, currentPos.y);
            // strokes the current path with the styles we set earlier
            this.cx.stroke();
        }
    }
    switchToEraser() {
        this.cx.lineWidth = 9;
        this.cx.lineCap = 'round';
        this.cx.strokeStyle = '#fff';
        this.mode = 'eraser';
    }
    switchToPencil() {
        this.cx.lineWidth = 3;
        this.cx.lineCap = 'round';
        this.cx.strokeStyle = '#000';
        this.mode = 'pencil';
    }
    eraseImage() {
        this.cx.clearRect(0, 0, this.width, this.height);
    }
    setImageOnCanvas(imagePath) {
        const canvasEl = this.canvas.nativeElement;
        this.cx = canvasEl.getContext('2d');
        const image = new Image();
        const fileRef = this.storage.ref(imagePath);
        fileRef.getDownloadURL().subscribe(url => {
            image.src = url;
            image.crossOrigin = "anonymous";
            let context = this.cx;
            image.onload = function () {
                context.drawImage(image, 0, 0);
            };
        });
    }
    saveImageInStorage(agricultorId) {
        let storageRef = this.storage;
        const canvasEl = this.canvas.nativeElement;
        const filePath = `croquis/${agricultorId}`;
        canvasEl.toBlob(function (blob) {
            const task = storageRef.upload(filePath, blob);
        });
        return filePath;
    }
}
CanvasComponent.ɵfac = function CanvasComponent_Factory(t) { return new (t || CanvasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"])); };
CanvasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CanvasComponent, selectors: [["app-canvas"]], viewQuery: function CanvasComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
    } }, inputs: { width: "width", height: "height" }, decls: 17, vars: 4, consts: [[1, "container-fluid"], [1, "row", "justify-content-center"], [1, "col-md-1"], [1, "row"], [1, "col-md-12"], ["id", "pencil", "mat-icon-button", "", "color", "primary", "class", "mt-3", 4, "ngIf"], ["id", "pencil", "mat-icon-button", "", "color", "black", "class", "mt-3", 3, "click", 4, "ngIf"], ["id", "eracer", "mat-icon-button", "", "color", "primary", "class", "mt-3", 4, "ngIf"], ["id", "eracer", "mat-icon-button", "", "color", "black", "class", "mt-3", 3, "click", 4, "ngIf"], [1, "col-md-11"], ["canvas", ""], [1, "col-md-12", "d-flex", "align-items-center", "justify-content-center"], ["mat-raised-button", "", "color", "warn", 3, "click"], ["id", "pencil", "mat-icon-button", "", "color", "primary", 1, "mt-3"], ["xmlns", "http://www.w3.org/2000/svg", "width", "30", "height", "30", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-pencil-fill"], ["d", "M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"], ["id", "pencil", "mat-icon-button", "", "color", "black", 1, "mt-3", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "25", "height", "25", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-pencil"], ["d", "M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"], ["id", "eracer", "mat-icon-button", "", "color", "primary", 1, "mt-3"], ["xmlns", "http://www.w3.org/2000/svg", "width", "30", "height", "30", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-eraser-fill"], ["d", "M8.086 2.207a2 2 0 0 1 2.828 0l3.879 3.879a2 2 0 0 1 0 2.828l-5.5 5.5A2 2 0 0 1 7.879 15H5.12a2 2 0 0 1-1.414-.586l-2.5-2.5a2 2 0 0 1 0-2.828l6.879-6.879zm.66 11.34L3.453 8.254 1.914 9.793a1 1 0 0 0 0 1.414l2.5 2.5a1 1 0 0 0 .707.293H7.88a1 1 0 0 0 .707-.293l.16-.16z"], ["id", "eracer", "mat-icon-button", "", "color", "black", 1, "mt-3", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "25", "height", "25", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-eraser"], ["d", "M8.086 2.207a2 2 0 0 1 2.828 0l3.879 3.879a2 2 0 0 1 0 2.828l-5.5 5.5A2 2 0 0 1 7.879 15H5.12a2 2 0 0 1-1.414-.586l-2.5-2.5a2 2 0 0 1 0-2.828l6.879-6.879zm2.121.707a1 1 0 0 0-1.414 0L4.16 7.547l5.293 5.293 4.633-4.633a1 1 0 0 0 0-1.414l-3.879-3.879zM8.746 13.547 3.453 8.254 1.914 9.793a1 1 0 0 0 0 1.414l2.5 2.5a1 1 0 0 0 .707.293H7.88a1 1 0 0 0 .707-.293l.16-.16z"]], template: function CanvasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CanvasComponent_button_5_Template, 3, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CanvasComponent_button_6_Template, 3, 0, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CanvasComponent_button_8_Template, 3, 0, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CanvasComponent_button_9_Template, 3, 0, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "canvas", null, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CanvasComponent_Template_button_click_15_listener() { return ctx.eraseImage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Borrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mode === "pencil");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mode !== "pencil");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mode === "eraser");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mode !== "eraser");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]], styles: ["canvas[_ngcontent-%COMP%] {\n  border: 1px solid #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NhbnZhcy9jYW52YXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NhbnZhcy9jYW52YXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJjYW52YXMge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CanvasComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-canvas',
                templateUrl: './canvas.component.html',
                styleUrls: ['./canvas.component.scss']
            }]
    }], function () { return [{ type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"] }]; }, { canvas: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['canvas']
        }], width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], height: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=modules-agricultores-agricultores-module.js.map