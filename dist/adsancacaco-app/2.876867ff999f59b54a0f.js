(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./src/app/modules/formulario-linea-base/components/edit-linea-base/edit-linea-base.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/formulario-linea-base/components/edit-linea-base/edit-linea-base.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: EditLineaBaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditLineaBaseComponent", function() { return EditLineaBaseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _sections_informacion_familia_informacion_familia_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../sections/informacion-familia/informacion-familia.component */ "./src/app/modules/formulario-linea-base/components/sections/informacion-familia/informacion-familia.component.ts");
/* harmony import */ var _sections_practicas_agricolas_practicas_agricolas_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../sections/practicas-agricolas/practicas-agricolas.component */ "./src/app/modules/formulario-linea-base/components/sections/practicas-agricolas/practicas-agricolas.component.ts");
/* harmony import */ var _sections_salud_seguridad_ocupacional_salud_seguridad_ocupacional_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../sections/salud-seguridad-ocupacional/salud-seguridad-ocupacional.component */ "./src/app/modules/formulario-linea-base/components/sections/salud-seguridad-ocupacional/salud-seguridad-ocupacional.component.ts");
/* harmony import */ var _sections_cosecha_cosecha_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../sections/cosecha/cosecha.component */ "./src/app/modules/formulario-linea-base/components/sections/cosecha/cosecha.component.ts");
/* harmony import */ var _sections_venta_venta_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../sections/venta/venta.component */ "./src/app/modules/formulario-linea-base/components/sections/venta/venta.component.ts");
/* harmony import */ var _sections_nivel_asociatividad_nivel_asociatividad_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../sections/nivel-asociatividad/nivel-asociatividad.component */ "./src/app/modules/formulario-linea-base/components/sections/nivel-asociatividad/nivel-asociatividad.component.ts");
/* harmony import */ var _sections_condiciones_laborales_condiciones_laborales_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../sections/condiciones-laborales/condiciones-laborales.component */ "./src/app/modules/formulario-linea-base/components/sections/condiciones-laborales/condiciones-laborales.component.ts");
/* harmony import */ var _sections_servicios_basicos_servicios_basicos_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../sections/servicios-basicos/servicios-basicos.component */ "./src/app/modules/formulario-linea-base/components/sections/servicios-basicos/servicios-basicos.component.ts");
/* harmony import */ var _sections_conservacion_recursos_manejo_desechos_conservacion_recursos_manejo_desechos_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../sections/conservacion-recursos-manejo-desechos/conservacion-recursos-manejo-desechos.component */ "./src/app/modules/formulario-linea-base/components/sections/conservacion-recursos-manejo-desechos/conservacion-recursos-manejo-desechos.component.ts");
/* harmony import */ var src_app_shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/loading/loading.component */ "./src/app/shared/loading/loading.component.ts");
/* harmony import */ var _sections_firma_agricultor_firma_agricultor_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../sections/firma-agricultor/firma-agricultor.component */ "./src/app/modules/formulario-linea-base/components/sections/firma-agricultor/firma-agricultor.component.ts");
/* harmony import */ var src_app_interfaces_tecnico__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/interfaces/tecnico */ "./src/app/interfaces/tecnico.ts");
/* harmony import */ var src_app_modules_core_services_formularios_formulario_linea_base_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/modules/core/services/formularios/formulario-linea-base.service */ "./src/app/modules/core/services/formularios/formulario-linea-base.service.ts");
/* harmony import */ var src_app_modules_core_services_agriculor_agricultor_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/modules/core/services/agriculor/agricultor.service */ "./src/app/modules/core/services/agriculor/agricultor.service.ts");
/* harmony import */ var src_app_modules_core_services_tecnico_tecnico_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/modules/core/services/tecnico/tecnico.service */ "./src/app/modules/core/services/tecnico/tecnico.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");










































function EditLineaBaseComponent_mat_option_19_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
}
function EditLineaBaseComponent_mat_option_20_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const value_r3 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", value_r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", value_r3.secciones.datosPersonales.preguntas.nombre.respuesta, " ");
    }
}
let EditLineaBaseComponent = /*@__PURE__*/ (() => {
    class EditLineaBaseComponent {
        constructor(formBuilder, formularioService, agricultorService, tecnicoService, snackBar, activatedRoute, changeDetector, router) {
            this.formBuilder = formBuilder;
            this.formularioService = formularioService;
            this.agricultorService = agricultorService;
            this.tecnicoService = tecnicoService;
            this.snackBar = snackBar;
            this.activatedRoute = activatedRoute;
            this.changeDetector = changeDetector;
            this.router = router;
            this.filteredListAgricultores = [];
            this.disabledFecha = true;
            this.disabledTecnico = true;
            this.lineaBaseForm = this.formBuilder.group({
                agricultor: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                fechaVisita: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                tecnico: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            });
        }
        ngOnInit() {
            this.initAgricultores();
        }
        ngAfterViewInit() {
            this.loading.open();
            this.setFormulario();
        }
        initAgricultores() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (!this.agricultorService.localData) {
                    this.agricultorService.initData();
                }
                this.agricultorService.localData.subscribe(data => {
                    this.listaAgricultores = data;
                });
            });
        }
        setFormulario() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield this.fetchFormulario();
                yield this.fetchAgricultor();
                this.updateView();
                this.setFormValues();
                this.loading.close();
            });
        }
        updateView() {
            const loggedTecnico = JSON.parse(localStorage.getItem("user"));
            if (loggedTecnico.nombre === "Manuel Matute") {
                this.disabledFecha = false;
                this.disabledTecnico = false;
            }
            this.changeDetector.detectChanges();
        }
        filterList(val) {
            if (val === "") {
                this.filteredListAgricultores = [];
            }
            else {
                this.filteredListAgricultores = this.listaAgricultores.filter((agricultor) => agricultor.secciones.datosPersonales.preguntas.nombre.respuesta.toLocaleLowerCase().includes(val.toLocaleLowerCase()));
            }
        }
        fetchFormulario() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const id = this.activatedRoute.snapshot.paramMap.get("id");
                if (id !== null) {
                    const formulario = yield this.formularioService.get(id);
                    this.formularioLineaBase = formulario;
                    this.firmaAgricultorComponent.setLineaBase(this.formularioLineaBase);
                }
            });
        }
        fetchAgricultor() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (!this.isFormEmpty()) {
                    this.agricultor = yield this.agricultorService.get(this.formularioLineaBase.agricultor.id);
                    for (let agricultor of this.listaAgricultores) {
                        if (agricultor.id === this.agricultor.id) {
                            this.filteredListAgricultores = [agricultor];
                            this.lineaBaseForm.get('agricultor').setValue(agricultor);
                            break;
                        }
                    }
                }
            });
        }
        isFormEmpty() {
            return this.formularioLineaBase === undefined || this.formularioLineaBase === null;
        }
        reset() {
            this.lineaBaseForm.reset();
        }
        onSubmit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.loading.open();
                const loggedTecnico = yield this.tecnicoService.getLocalUser();
                this.agricultor = this.lineaBaseForm.value.agricultor;
                delete this.lineaBaseForm.value.agricultor;
                let formularioLineaBaseParam = {
                    id: "",
                    agricultor: this.agricultor,
                    tecnico: this.setTecnico(this.lineaBaseForm.value.tecnico, loggedTecnico),
                    fechaVisita: this.setFechaVisita(this.lineaBaseForm.value.fechaVisita, this.formattedTodayDate()),
                    secciones: {
                        informacionFamilia: this.informacionFamiliaComponent.seccion,
                        practicasAgricolas: this.practicasAgricolasComponent.seccion,
                        saludSeguridadOcupacional: this.saludSeguridadOcupacionalComponent.seccion,
                        cosecha: this.cosechaComponent.seccion,
                        venta: this.ventaComponent.seccion,
                        nivelAsociatividad: this.nivelAsociatividadComponent.seccion,
                        condicionesLaborales: this.condicionesLaboralesComponent.seccion,
                        serviciosBasicos: this.serviciosBasicosComponent.seccion,
                        conservacionRecursosManejoDesechos: this.conservacionRecursosManejoDesechosComponent.seccion,
                        firmaAgricultor: this.firmaAgricultorComponent.seccion
                    }
                };
                if (this.agricultor) {
                    if (this.formularioLineaBase) {
                        formularioLineaBaseParam.id = this.formularioLineaBase.id;
                    }
                    this.formularioService.set(formularioLineaBaseParam).then(() => {
                        this.loading.success('Listo', 'Formulario guardado correctamente');
                        setTimeout(() => {
                            this.router.navigate(['formularios', 'formulariosLineaBase']);
                        }, 1000);
                    }).catch((e) => {
                        console.log(e);
                        this.loading.error('Error', 'No se ha podido guardar el formulario');
                    });
                }
                else {
                    this.loading.error('Error', 'Debe seleccionar a un agricultor');
                }
            });
        }
        setFormValues() {
            if (!this.isFormEmpty()) {
                this.informacionFamiliaComponent.setValues(this.formularioLineaBase);
                this.practicasAgricolasComponent.setValues(this.formularioLineaBase);
                this.saludSeguridadOcupacionalComponent.setValues(this.formularioLineaBase);
                this.cosechaComponent.setValues(this.formularioLineaBase);
                this.ventaComponent.setValues(this.formularioLineaBase);
                this.nivelAsociatividadComponent.setValues(this.formularioLineaBase);
                this.condicionesLaboralesComponent.setValues(this.formularioLineaBase);
                this.serviciosBasicosComponent.setValues(this.formularioLineaBase);
                this.conservacionRecursosManejoDesechosComponent.setValues(this.formularioLineaBase);
                this.lineaBaseForm.get('fechaVisita').setValue(this.convertDate(this.formularioLineaBase.fechaVisita));
                this.lineaBaseForm.get('tecnico').setValue(this.formularioLineaBase.tecnico.nombre);
                if (!(this.formularioLineaBase.secciones.firmaAgricultor === undefined)) {
                    this.firmaAgricultorComponent.setValues(this.formularioLineaBase);
                }
            }
        }
        formattedTodayDate() {
            const today = new Date().toLocaleDateString("en-US");
            let parts = today.split("/");
            const todayFormatted = parts[1] + "/" + parts[0] + "/" + parts[2];
            return todayFormatted;
        }
        setFechaVisita(fechaVisita, todayDate) {
            if (fechaVisita == undefined || fechaVisita == '') {
                return todayDate;
            }
            const dateArray = fechaVisita.toLocaleDateString().split("/");
            const newFecha = dateArray[1] + "/" + dateArray[0] + "/" + dateArray[2];
            return newFecha;
        }
        setTecnico(tecnico, loggedTecnico) {
            const editedTecnico = {
                id: "",
                nombre: tecnico,
                correo: "",
                permiso: src_app_interfaces_tecnico__WEBPACK_IMPORTED_MODULE_14__["Permiso"].Real
            };
            if (tecnico === undefined || tecnico === '') {
                return loggedTecnico;
            }
            return editedTecnico;
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
    }
    EditLineaBaseComponent.ɵfac = function EditLineaBaseComponent_Factory(t) { return new (t || EditLineaBaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_modules_core_services_formularios_formulario_linea_base_service__WEBPACK_IMPORTED_MODULE_15__["FormularioLineaBaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_modules_core_services_agriculor_agricultor_service__WEBPACK_IMPORTED_MODULE_16__["AgricultorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_modules_core_services_tecnico_tecnico_service__WEBPACK_IMPORTED_MODULE_17__["TecnicoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_19__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_19__["Router"])); };
    EditLineaBaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EditLineaBaseComponent, selectors: [["app-edit-linea-base"]], viewQuery: function EditLineaBaseComponent_Query(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](src_app_shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_12__["LoadingComponent"], true);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_sections_informacion_familia_informacion_familia_component__WEBPACK_IMPORTED_MODULE_3__["InformacionFamiliaComponent"], true);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_sections_practicas_agricolas_practicas_agricolas_component__WEBPACK_IMPORTED_MODULE_4__["PracticasAgricolasComponent"], true);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_sections_salud_seguridad_ocupacional_salud_seguridad_ocupacional_component__WEBPACK_IMPORTED_MODULE_5__["SaludSeguridadOcupacionalComponent"], true);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_sections_cosecha_cosecha_component__WEBPACK_IMPORTED_MODULE_6__["CosechaComponent"], true);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_sections_venta_venta_component__WEBPACK_IMPORTED_MODULE_7__["VentaComponent"], true);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_sections_nivel_asociatividad_nivel_asociatividad_component__WEBPACK_IMPORTED_MODULE_8__["NivelAsociatividadComponent"], true);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_sections_condiciones_laborales_condiciones_laborales_component__WEBPACK_IMPORTED_MODULE_9__["CondicionesLaboralesComponent"], true);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_sections_servicios_basicos_servicios_basicos_component__WEBPACK_IMPORTED_MODULE_10__["ServiciosBasicosComponent"], true);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_sections_conservacion_recursos_manejo_desechos_conservacion_recursos_manejo_desechos_component__WEBPACK_IMPORTED_MODULE_11__["ConservacionRecursosManejoDesechosComponent"], true);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_sections_firma_agricultor_firma_agricultor_component__WEBPACK_IMPORTED_MODULE_13__["FirmaAgricultorComponent"], true);
            }
            if (rf & 2) {
                var _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.loading = _t.first);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.informacionFamiliaComponent = _t.first);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.practicasAgricolasComponent = _t.first);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.saludSeguridadOcupacionalComponent = _t.first);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.cosechaComponent = _t.first);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.ventaComponent = _t.first);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.nivelAsociatividadComponent = _t.first);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.condicionesLaboralesComponent = _t.first);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.serviciosBasicosComponent = _t.first);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.conservacionRecursosManejoDesechosComponent = _t.first);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.firmaAgricultorComponent = _t.first);
            }
        }, decls: 100, vars: 18, consts: [[1, "example-card"], [3, "formGroup", "ngSubmit"], [1, "container-fluid"], [1, "row"], [1, "col-md-4"], ["appearance", "outline"], ["formControlName", "agricultor", "id", "agricultorSelect"], ["appearance", "outline", 1, "p-2", 2, "margin-bottom", "-10px"], ["matInput", "", "type", "text", 3, "input", "keydown"], [4, "ngIf"], [3, "value", 4, "ngFor", "ngForOf"], ["appearance", "outline", 1, "item"], ["matInput", "", "formControlName", "fechaVisita", "name", "someUnusualName", "autocomplete", "off", 3, "disabled", "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker2", ""], [1, "col-md-8"], ["matInput", "", "formControlName", "tecnico", "name", "someUnusualName", "autocomplete", "off", 3, "readonly"], ["hideToggle", "", "appHighlight", ""], [3, "parentForm"], ["hideToggle", ""], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled"], ["mat-button", "", "type", "reset"], [3, "value"]], template: function EditLineaBaseComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-loading");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-header");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card-title");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "FORMULARIO LINEA BASE");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-card-subtitle");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "AGRICULTOR");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function EditLineaBaseComponent_Template_form_ngSubmit_7_listener() { return ctx.onSubmit(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-form-field", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Agricultor");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-select", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-form-field", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Filter");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "input", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function EditLineaBaseComponent_Template_input_input_18_listener($event) { return ctx.filterList($event.target.value); })("keydown", function EditLineaBaseComponent_Template_input_keydown_18_listener($event) { return $event.stopPropagation(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, EditLineaBaseComponent_mat_option_19_Template, 2, 0, "mat-option", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, EditLineaBaseComponent_mat_option_20_Template, 2, 2, "mat-option", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-form-field", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Fecha de Visita");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "input", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "mat-datepicker-toggle", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "mat-datepicker", null, 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "mat-form-field", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "T\u00E9cnico");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "input", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "mat-accordion");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "mat-expansion-panel", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "mat-expansion-panel-header");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "mat-panel-title");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, " IMFORMACI\u00D3N DE LA FAMILIA ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "app-informacion-familia", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "mat-accordion");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "mat-expansion-panel", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "mat-expansion-panel-header");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "mat-panel-title");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, " PR\u00C1CTICAS AGR\u00CDCOLAS ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "app-practicas-agricolas", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "mat-accordion");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "mat-expansion-panel", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "mat-expansion-panel-header");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "mat-panel-title");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, " SALUD Y SEGURIDAD OCUPACIONAL ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "app-salud-seguridad-ocupacional", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "mat-accordion");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "mat-expansion-panel", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "mat-expansion-panel-header");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "mat-panel-title");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, " COSECHA ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "app-cosecha", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "mat-accordion");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "mat-expansion-panel", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "mat-expansion-panel-header");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "mat-panel-title");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, " VENTA ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "app-venta", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "mat-accordion");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "mat-expansion-panel", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "mat-expansion-panel-header");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "mat-panel-title");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, " NIVEL DE ASOCIATIVIDAD ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "app-nivel-asociatividad", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "mat-accordion");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "mat-expansion-panel", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "mat-expansion-panel-header");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "mat-panel-title");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, " CONDICIONES LABORALES ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](76, "app-condiciones-laborales", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "mat-accordion");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "mat-expansion-panel", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "mat-expansion-panel-header");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "mat-panel-title");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, " SERVICIOS B\u00C1SICOS ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](82, "app-servicios-basicos", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "mat-accordion");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "mat-expansion-panel", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "mat-expansion-panel-header");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "mat-panel-title");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, " CONSERVACI\u00D3N DE RECURSOS Y MANEJO DE DESECHOS ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](88, "app-conservacion-recursos-manejo-desechos", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "mat-accordion");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "mat-expansion-panel", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "mat-expansion-panel-header");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "mat-panel-title");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, " FIRMA AGRICULTOR ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](94, "app-firma-agricultor", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "mat-card-actions");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "button", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "Guardar");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "button", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "Resetear");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](29);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.lineaBaseForm);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.filteredListAgricultores.length === 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.filteredListAgricultores);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.disabledFecha)("matDatepicker", _r2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readonly", ctx.disabledTecnico);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("parentForm", ctx.lineaBaseForm);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("parentForm", ctx.lineaBaseForm);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("parentForm", ctx.lineaBaseForm);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("parentForm", ctx.lineaBaseForm);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("parentForm", ctx.lineaBaseForm);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("parentForm", ctx.lineaBaseForm);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("parentForm", ctx.lineaBaseForm);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("parentForm", ctx.lineaBaseForm);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("parentForm", ctx.lineaBaseForm);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("parentForm", ctx.lineaBaseForm);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.lineaBaseForm.valid);
            }
        }, directives: [src_app_shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_12__["LoadingComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardSubtitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_input__WEBPACK_IMPORTED_MODULE_23__["MatInput"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__["MatDatepicker"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_26__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_26__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_26__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_26__["MatExpansionPanelTitle"], _sections_informacion_familia_informacion_familia_component__WEBPACK_IMPORTED_MODULE_3__["InformacionFamiliaComponent"], _sections_practicas_agricolas_practicas_agricolas_component__WEBPACK_IMPORTED_MODULE_4__["PracticasAgricolasComponent"], _sections_salud_seguridad_ocupacional_salud_seguridad_ocupacional_component__WEBPACK_IMPORTED_MODULE_5__["SaludSeguridadOcupacionalComponent"], _sections_cosecha_cosecha_component__WEBPACK_IMPORTED_MODULE_6__["CosechaComponent"], _sections_venta_venta_component__WEBPACK_IMPORTED_MODULE_7__["VentaComponent"], _sections_nivel_asociatividad_nivel_asociatividad_component__WEBPACK_IMPORTED_MODULE_8__["NivelAsociatividadComponent"], _sections_condiciones_laborales_condiciones_laborales_component__WEBPACK_IMPORTED_MODULE_9__["CondicionesLaboralesComponent"], _sections_servicios_basicos_servicios_basicos_component__WEBPACK_IMPORTED_MODULE_10__["ServiciosBasicosComponent"], _sections_conservacion_recursos_manejo_desechos_conservacion_recursos_manejo_desechos_component__WEBPACK_IMPORTED_MODULE_11__["ConservacionRecursosManejoDesechosComponent"], _sections_firma_agricultor_firma_agricultor_component__WEBPACK_IMPORTED_MODULE_13__["FirmaAgricultorComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_27__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatOption"]], styles: [""] });
    return EditLineaBaseComponent;
})();


/***/ }),

/***/ "./src/app/modules/formulario-linea-base/components/formularios-linea-base/formularios-linea-base.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/modules/formulario-linea-base/components/formularios-linea-base/formularios-linea-base.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: FormulariosLineaBaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormulariosLineaBaseComponent", function() { return FormulariosLineaBaseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/data-table/data-table.component */ "./src/app/shared/data-table/data-table.component.ts");
/* harmony import */ var src_app_interfaces_formulario__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/interfaces/formulario */ "./src/app/interfaces/formulario.ts");
/* harmony import */ var src_app_modules_core_services_tecnico_tecnico_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/core/services/tecnico/tecnico.service */ "./src/app/modules/core/services/tecnico/tecnico.service.ts");
/* harmony import */ var _core_services_formularios_formulario_linea_base_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/services/formularios/formulario-linea-base.service */ "./src/app/modules/core/services/formularios/formulario-linea-base.service.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _core_services_importaciones_importaciones_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../core/services/importaciones/importaciones.service */ "./src/app/modules/core/services/importaciones/importaciones.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/confirm-dialog/confirm-dialog.component */ "./src/app/shared/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/loading/loading.component */ "./src/app/shared/loading/loading.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");





















function FormulariosLineaBaseComponent_mat_header_cell_19_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " ID ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
}
function FormulariosLineaBaseComponent_mat_cell_20_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const row_r11 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", row_r11.id, " ");
    }
}
function FormulariosLineaBaseComponent_mat_header_cell_22_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Agricultor ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
}
function FormulariosLineaBaseComponent_mat_cell_23_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const row_r12 = ctx.$implicit;
        const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r4.decodeHtmlCharCodes(row_r12.agricultor), " ");
    }
}
function FormulariosLineaBaseComponent_mat_header_cell_25_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Fecha de Visita ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
}
function FormulariosLineaBaseComponent_mat_cell_26_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const row_r13 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", row_r13.fechaVisita, " ");
    }
}
function FormulariosLineaBaseComponent_mat_header_cell_28_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Acciones ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
}
function FormulariosLineaBaseComponent_mat_cell_29_Template(rf, ctx) {
    if (rf & 1) {
        const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormulariosLineaBaseComponent_mat_cell_29_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const row_r14 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.onItemSelected(row_r14); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "svg", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "path", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "path", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormulariosLineaBaseComponent_mat_cell_29_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const row_r14 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.onExportClicked(row_r14); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "svg", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "path", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "path", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormulariosLineaBaseComponent_mat_cell_29_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const row_r14 = ctx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r18.onTrashCanClicked(row_r14); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "svg", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "path", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
}
function FormulariosLineaBaseComponent_mat_header_row_30_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-header-row");
    }
}
function FormulariosLineaBaseComponent_mat_row_31_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-row");
    }
}
const _c0 = function () { return [5, 10, 25, 100]; };
let FormulariosLineaBaseComponent = /*@__PURE__*/ (() => {
    class FormulariosLineaBaseComponent extends src_app_shared_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_2__["DataTableComponent"] {
        constructor(tecnicoService, formularioService, breakpointObserver, changeDetector, snackBar, importacionService, router) {
            super(tecnicoService, breakpointObserver, changeDetector, snackBar);
            this.tecnicoService = tecnicoService;
            this.formularioService = formularioService;
            this.breakpointObserver = breakpointObserver;
            this.changeDetector = changeDetector;
            this.snackBar = snackBar;
            this.importacionService = importacionService;
            this.router = router;
            this.displayedColumns = ['id', 'agricultor', 'fechaVisita', 'acciones'];
            super.dataService = this.formularioService;
            super.displayedColumns = this.displayedColumns;
        }
        onItemSelected(row) {
            this.router.navigate(['formularios', 'formulariosLineaBase', 'edit-linea-base', row["id"]]);
        }
        onAddClicked() {
            this.router.navigate(['formularios', 'formulariosLineaBase', 'crear-linea-base']);
        }
        exportAll() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                try {
                    this.loading.open();
                    yield this.formularioService.exportAll();
                    this.loading.success('Listo', 'Formularios de linea base exportados correctamente');
                }
                catch (error) {
                    this.loading.error('Error', 'No se han podido exportar los formularios');
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
                    yield this.importacionService.importFormulario(files, header, ';', src_app_interfaces_formulario__WEBPACK_IMPORTED_MODULE_3__["FormularioType"].formularioLineaBase);
                    this.loading.success('Listo', 'Formularios de linea base importados correctamente');
                }
                catch (e) {
                    this.loading.error('Error', 'No se han podido importar los formularios');
                }
            });
        }
        decodeHtmlCharCodes(str) {
            return str.replace("�", "Ñ");
        }
    }
    FormulariosLineaBaseComponent.ɵfac = function FormulariosLineaBaseComponent_Factory(t) { return new (t || FormulariosLineaBaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_modules_core_services_tecnico_tecnico_service__WEBPACK_IMPORTED_MODULE_4__["TecnicoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_formularios_formulario_linea_base_service__WEBPACK_IMPORTED_MODULE_5__["FormularioLineaBaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_importaciones_importaciones_service__WEBPACK_IMPORTED_MODULE_8__["ImportacionesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"])); };
    FormulariosLineaBaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FormulariosLineaBaseComponent, selectors: [["app-formularios-linea-base"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 37, vars: 5, consts: [[1, "container-fluid"], [1, "row", "justify-content-center"], ["mat-button", "", "color", "primary", 1, "col-md-4", "col-6", 3, "click"], ["type", "file", "name", "File Upload", "id", "csvFileUpload", "accept", ".csv", 3, "change"], ["fileImportInput", ""], ["fxLayout", "row wrap"], ["fxFlex.gt-sm", "100", "fxFlex.gt-xs", "100", "fxFlex", "100"], [1, "bg-light", "p-10", "p-r-20", "p-l-20"], ["matInput", "", "placeholder", "Filter", 3, "keyup"], [1, "responsive-table"], ["matSort", "", 3, "dataSource"], ["matColumnDef", "id"], ["mat-sort-header", "", 4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "agricultor"], ["matColumnDef", "fechaVisita"], ["matColumnDef", "acciones"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], [3, "pageSizeOptions"], [1, "button-container"], ["mat-fab", "", "color", "primary", "aria-label", "A\u00F1adir", 3, "click"], ["mat-sort-header", ""], ["mat-icon-button", "", "color", "primary", 1, "m-r-5", "m-l-5", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-pencil-square"], ["d", "M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"], ["fill-rule", "evenodd", "d", "M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"], ["mat-icon-button", "", "color", "accent", 1, "m-r-5", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-download"], ["d", "M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"], ["d", "M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"], ["mat-icon-button", "", "color", "warn", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-eraser"], ["d", "M8.086 2.207a2 2 0 0 1 2.828 0l3.879 3.879a2 2 0 0 1 0 2.828l-5.5 5.5A2 2 0 0 1 7.879 15H5.12a2 2 0 0 1-1.414-.586l-2.5-2.5a2 2 0 0 1 0-2.828l6.879-6.879zm2.121.707a1 1 0 0 0-1.414 0L4.16 7.547l5.293 5.293 4.633-4.633a1 1 0 0 0 0-1.414l-3.879-3.879zM8.746 13.547 3.453 8.254 1.914 9.793a1 1 0 0 0 0 1.414l2.5 2.5a1 1 0 0 0 .707.293H7.88a1 1 0 0 0 .707-.293l.16-.16z"]], template: function FormulariosLineaBaseComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-confirm-dialog");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-loading");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormulariosLineaBaseComponent_Template_button_click_4_listener() { return ctx.exportAll(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Exportar Todos");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormulariosLineaBaseComponent_Template_button_click_6_listener($event) { return ctx.onImportClicked($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 3, 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function FormulariosLineaBaseComponent_Template_input_change_7_listener($event) { return ctx.import($event); });
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
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function FormulariosLineaBaseComponent_Template_input_keyup_15_listener($event) { return ctx.applyFilter($event.target.value); });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-table", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](18, 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, FormulariosLineaBaseComponent_mat_header_cell_19_Template, 2, 0, "mat-header-cell", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, FormulariosLineaBaseComponent_mat_cell_20_Template, 2, 1, "mat-cell", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](21, 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, FormulariosLineaBaseComponent_mat_header_cell_22_Template, 2, 0, "mat-header-cell", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, FormulariosLineaBaseComponent_mat_cell_23_Template, 2, 1, "mat-cell", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](24, 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, FormulariosLineaBaseComponent_mat_header_cell_25_Template, 2, 0, "mat-header-cell", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, FormulariosLineaBaseComponent_mat_cell_26_Template, 2, 1, "mat-cell", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](27, 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, FormulariosLineaBaseComponent_mat_header_cell_28_Template, 2, 0, "mat-header-cell", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, FormulariosLineaBaseComponent_mat_cell_29_Template, 12, 0, "mat-cell", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, FormulariosLineaBaseComponent_mat_header_row_30_Template, 1, 0, "mat-header-row", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, FormulariosLineaBaseComponent_mat_row_31_Template, 1, 0, "mat-row", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "mat-paginator", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "button", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormulariosLineaBaseComponent_Template_button_click_34_listener() { return ctx.onAddClicked(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "mat-icon");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "add");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.dataSource);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c0));
            }
        }, directives: [_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmDialogComponent"], _shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_11__["LoadingComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInput"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginator"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatRow"]], styles: ["#csvFileUpload[_ngcontent-%COMP%] {\n  display: block;\n  visibility: hidden;\n  width: 0;\n  height: 0;\n}\n\n.button-container[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 2%;\n  right: 1%;\n}"] });
    return FormulariosLineaBaseComponent;
})();


/***/ }),

/***/ "./src/app/modules/formulario-linea-base/components/sections/condiciones-laborales/condiciones-laborales.component.ts":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/modules/formulario-linea-base/components/sections/condiciones-laborales/condiciones-laborales.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: CondicionesLaboralesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CondicionesLaboralesComponent", function() { return CondicionesLaboralesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");










function CondicionesLaboralesComponent_mat_option_8_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const op_r2 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", op_r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](op_r2);
    }
}
function CondicionesLaboralesComponent_div_9_mat_option_15_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const tipo_r7 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", tipo_r7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tipo_r7);
    }
}
function CondicionesLaboralesComponent_div_9_mat_option_20_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const op_r8 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", op_r8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](op_r8);
    }
}
function CondicionesLaboralesComponent_div_9_div_22_mat_option_5_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const op_r10 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", op_r10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](op_r10);
    }
}
function CondicionesLaboralesComponent_div_9_div_22_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00BFCuenta con un permiso de trabajo para menor de edad?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CondicionesLaboralesComponent_div_9_div_22_mat_option_5_Template, 2, 2, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.opciones);
    }
}
function CondicionesLaboralesComponent_div_9_mat_option_28_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const op_r11 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", op_r11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](op_r11);
    }
}
function CondicionesLaboralesComponent_div_9_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Cantidad de trabajadores");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u00BFA partir de que cantidad de area contrata?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Los trabajadores que contrata son");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CondicionesLaboralesComponent_div_9_mat_option_15_Template, 2, 2, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u00BFContrata menores de edad?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, CondicionesLaboralesComponent_div_9_mat_option_20_Template, 2, 2, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, CondicionesLaboralesComponent_div_9_div_22_Template, 7, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-form-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Cumple con la base del contrato agricola por un d\u00EDa para el contrato de su personal de temporada?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, CondicionesLaboralesComponent_div_9_mat_option_28_Template, 2, 2, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.tiposTrabajador);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.opciones);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.contrataMenores());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.opciones);
    }
}
let CondicionesLaboralesComponent = /*@__PURE__*/ (() => {
    class CondicionesLaboralesComponent {
        constructor(formBuilder) {
            this.formBuilder = formBuilder;
            this.tiposTrabajador = ["PERMANENTE", "OCASIONAL"];
            this.opciones = ["SI", "NO"];
            this.condicionesLaborales = this.formBuilder.group({
                contrataTrabajadores: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                cantidadTrabajadores: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                areaInicialContrato: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                tipoContratoTrabajo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                contrataMenoresEdad: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                poseePermiso: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                baseContratoAgricola: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
            });
        }
        ngOnInit() {
        }
        onSubmit() {
        }
        hayContratados() {
            const hayContratados = this.condicionesLaborales.get('contrataTrabajadores').value;
            return hayContratados === 'SI';
        }
        contrataMenores() {
            const contrataMenores = this.condicionesLaborales.get('contrataMenoresEdad').value;
            return contrataMenores === 'SI';
        }
        get seccion() {
            return {
                preguntas: {
                    contrataTrabajadores: {
                        respuesta: this.condicionesLaborales.value.contrataTrabajadores,
                        preguntas: {
                            cantidadTrabajadores: {
                                respuesta: this.condicionesLaborales.value.cantidadTrabajadores
                            }
                        }
                    },
                    areaInicialContrato: {
                        respuesta: this.condicionesLaborales.value.areaInicialContrato
                    },
                    tipoContratoTrabajo: {
                        respuesta: this.condicionesLaborales.value.tipoContratoTrabajo
                    },
                    contrataMenoresEdad: {
                        respuesta: this.condicionesLaborales.value.contrataMenoresEdad,
                        preguntas: {
                            poseePermiso: {
                                respuesta: this.condicionesLaborales.value.poseePermiso
                            }
                        }
                    },
                    baseContratoAgricola: {
                        respuesta: this.condicionesLaborales.value.baseContratoAgricola
                    }
                }
            };
        }
        setValues(formularioLineaBase) {
            this.condicionesLaborales.get('contrataTrabajadores')
                .setValue(formularioLineaBase.secciones.condicionesLaborales.preguntas.contrataTrabajadores.respuesta);
            this.condicionesLaborales.get('cantidadTrabajadores')
                .setValue(formularioLineaBase.secciones.condicionesLaborales.preguntas.contrataTrabajadores.preguntas.cantidadTrabajadores.respuesta);
            this.condicionesLaborales.get('areaInicialContrato')
                .setValue(formularioLineaBase.secciones.condicionesLaborales.preguntas.areaInicialContrato.respuesta);
            this.condicionesLaborales.get('tipoContratoTrabajo')
                .setValue(formularioLineaBase.secciones.condicionesLaborales.preguntas.tipoContratoTrabajo.respuesta);
            this.condicionesLaborales.get('contrataMenoresEdad')
                .setValue(formularioLineaBase.secciones.condicionesLaborales.preguntas.contrataMenoresEdad.respuesta);
            this.condicionesLaborales.get('poseePermiso')
                .setValue(formularioLineaBase.secciones.condicionesLaborales.preguntas.contrataMenoresEdad.preguntas.poseePermiso.respuesta);
            this.condicionesLaborales.get('baseContratoAgricola')
                .setValue(formularioLineaBase.secciones.condicionesLaborales.preguntas.baseContratoAgricola.respuesta);
        }
    }
    CondicionesLaboralesComponent.ɵfac = function CondicionesLaboralesComponent_Factory(t) { return new (t || CondicionesLaboralesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
    CondicionesLaboralesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CondicionesLaboralesComponent, selectors: [["app-condiciones-laborales"]], inputs: { parentForm: "parentForm" }, decls: 10, vars: 3, consts: [[3, "formGroup", "ngSubmit"], [1, "container-fluid"], [1, "row"], ["appearance", "outline", 1, "col-md-4"], ["formControlName", "contrataTrabajadores", "name", "someUnusualName", "autocomplete", "off"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "value"], ["appearance", "outline", 1, "col-md-6"], ["matInput", "", "formControlName", "cantidadTrabajadores", "name", "someUnusualName", "autocomplete", "off"], ["matInput", "", "formControlName", "areaInicialContrato", "name", "someUnusualName", "autocomplete", "off"], ["formControlName", "tipoContratoTrabajo", "name", "someUnusualName", "autocomplete", "off"], ["formControlName", "contrataMenoresEdad", "name", "someUnusualName", "autocomplete", "off"], ["class", "row", 4, "ngIf"], ["appearance", "outline", 1, "col-md-12"], ["formControlName", "baseContratoAgricola", "name", "someUnusualName", "autocomplete", "off"], ["formControlName", "poseePermiso", "name", "someUnusualName", "autocomplete", "off"], [1, "col-md-6"]], template: function CondicionesLaboralesComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CondicionesLaboralesComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00BFContrata trabajadores?");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-select", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CondicionesLaboralesComponent_mat_option_8_Template, 2, 2, "mat-option", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CondicionesLaboralesComponent_div_9_Template, 29, 4, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.condicionesLaborales);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.opciones);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hayContratados());
            }
        }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatOption"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"]], styles: [""] });
    return CondicionesLaboralesComponent;
})();


/***/ }),

/***/ "./src/app/modules/formulario-linea-base/components/sections/conservacion-recursos-manejo-desechos/conservacion-recursos-manejo-desechos.component.ts":
/*!************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/formulario-linea-base/components/sections/conservacion-recursos-manejo-desechos/conservacion-recursos-manejo-desechos.component.ts ***!
  \************************************************************************************************************************************************************/
/*! exports provided: ConservacionRecursosManejoDesechosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConservacionRecursosManejoDesechosComponent", function() { return ConservacionRecursosManejoDesechosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");










function ConservacionRecursosManejoDesechosComponent_mat_option_8_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const op_r6 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", op_r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](op_r6);
    }
}
function ConservacionRecursosManejoDesechosComponent_mat_option_13_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const op_r7 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", op_r7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](op_r7);
    }
}
function ConservacionRecursosManejoDesechosComponent_mat_option_19_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const lugar_r8 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", lugar_r8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](lugar_r8);
    }
}
function ConservacionRecursosManejoDesechosComponent_mat_option_25_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const op_r9 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", op_r9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](op_r9);
    }
}
function ConservacionRecursosManejoDesechosComponent_mat_option_31_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const op_r10 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", op_r10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](op_r10);
    }
}
function ConservacionRecursosManejoDesechosComponent_mat_option_38_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const op_r11 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", op_r11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](op_r11);
    }
}
let ConservacionRecursosManejoDesechosComponent = /*@__PURE__*/ (() => {
    class ConservacionRecursosManejoDesechosComponent {
        constructor(formBuilder) {
            this.formBuilder = formBuilder;
            this.opciones = ["SI", "NO"];
            this.lugaresDesecho = ["SERVICIO HIGIENICO", "POZO SEPTICO", "LETRINA", "NINGUNO"];
            this.conservacionRecursosManejoDesechos = this.formBuilder.group({
                conocimientoManejoDesechos: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                productoContaminaEcosistema: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                ubicacionDesechosAguasNegras: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                tieneArbolesSombrio: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                cultivaVegetalesHortalizasFrutas: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                compraProductosMercadoLocales: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                valorPromedioGastado: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
            });
        }
        ngOnInit() {
        }
        onSubmit() {
        }
        hayEspacio() {
            const hayEspacio = this.conservacionRecursosManejoDesechos.get('cultivaVegetalesHortalizasFrutas').value;
            return hayEspacio === 'SI';
        }
        get seccion() {
            return {
                preguntas: {
                    conocimientoManejoDesechos: {
                        respuesta: this.conservacionRecursosManejoDesechos.value.conocimientoManejoDesechos
                    },
                    productoContaminaEcosistema: {
                        respuesta: this.conservacionRecursosManejoDesechos.value.productoContaminaEcosistema,
                        preguntas: {
                            ubicacionDesechosAguasNegras: {
                                respuesta: this.conservacionRecursosManejoDesechos.value.ubicacionDesechosAguasNegras
                            }
                        }
                    },
                    tieneArbolesSombrio: {
                        respuesta: this.conservacionRecursosManejoDesechos.value.tieneArbolesSombrio
                    },
                    cultivaVegetalesHortalizasFrutas: {
                        respuesta: this.conservacionRecursosManejoDesechos.value.cultivaVegetalesHortalizasFrutas
                    },
                    compraProductosMercadoLocales: {
                        respuesta: this.conservacionRecursosManejoDesechos.value.compraProductosMercadoLocales,
                        preguntas: {
                            valorPromedioGastado: {
                                respuesta: this.conservacionRecursosManejoDesechos.value.valorPromedioGastado
                            }
                        }
                    }
                }
            };
        }
        setValues(formularioLineaBase) {
            this.conservacionRecursosManejoDesechos.get('conocimientoManejoDesechos')
                .setValue(formularioLineaBase.secciones.conservacionRecursosManejoDesechos.preguntas.conocimientoManejoDesechos.respuesta);
            this.conservacionRecursosManejoDesechos.get('productoContaminaEcosistema')
                .setValue(formularioLineaBase.secciones.conservacionRecursosManejoDesechos.preguntas.productoContaminaEcosistema.respuesta);
            this.conservacionRecursosManejoDesechos.get('ubicacionDesechosAguasNegras')
                .setValue(formularioLineaBase.secciones.conservacionRecursosManejoDesechos.preguntas.productoContaminaEcosistema.preguntas.ubicacionDesechosAguasNegras.respuesta);
            this.conservacionRecursosManejoDesechos.get('tieneArbolesSombrio')
                .setValue(formularioLineaBase.secciones.conservacionRecursosManejoDesechos.preguntas.tieneArbolesSombrio.respuesta);
            this.conservacionRecursosManejoDesechos.get('cultivaVegetalesHortalizasFrutas')
                .setValue(formularioLineaBase.secciones.conservacionRecursosManejoDesechos.preguntas.cultivaVegetalesHortalizasFrutas.respuesta);
            this.conservacionRecursosManejoDesechos.get('compraProductosMercadoLocales')
                .setValue(formularioLineaBase.secciones.conservacionRecursosManejoDesechos.preguntas.compraProductosMercadoLocales.respuesta);
            this.conservacionRecursosManejoDesechos.get('valorPromedioGastado')
                .setValue(formularioLineaBase.secciones.conservacionRecursosManejoDesechos.preguntas.compraProductosMercadoLocales.preguntas.valorPromedioGastado.respuesta);
        }
    }
    ConservacionRecursosManejoDesechosComponent.ɵfac = function ConservacionRecursosManejoDesechosComponent_Factory(t) { return new (t || ConservacionRecursosManejoDesechosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
    ConservacionRecursosManejoDesechosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConservacionRecursosManejoDesechosComponent, selectors: [["app-conservacion-recursos-manejo-desechos"]], inputs: { parentForm: "parentForm" }, decls: 43, vars: 7, consts: [[3, "formGroup", "ngSubmit"], [1, "container-fluid"], [1, "row"], ["appearance", "outline", 1, "col-md-6"], ["formControlName", "conocimientoManejoDesechos", "autocomplete", "off"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "productoContaminaEcosistema", "autocomplete", "off"], ["appearance", "outline", 1, "col-md-12"], ["formControlName", "ubicacionDesechosAguasNegras", "multiple", ""], ["formControlName", "tieneArbolesSombrio", "autocomplete", "off"], ["formControlName", "cultivaVegetalesHortalizasFrutas", "autocomplete", "off"], ["formControlName", "compraProductosMercadoLocales", "autocomplete", "off"], ["matInput", "", "formControlName", "valorPromedioGastado", "autocomplete", "off"], [3, "value"]], template: function ConservacionRecursosManejoDesechosComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ConservacionRecursosManejoDesechosComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00BFTiene Conocimientos sobre el manejo de desechos?");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-select", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ConservacionRecursosManejoDesechosComponent_mat_option_8_Template, 2, 2, "mat-option", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u00BFEl Productor contamina ecosistemas acuaticos o terrestres?");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-select", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ConservacionRecursosManejoDesechosComponent_mat_option_13_Template, 2, 2, "mat-option", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u00BFD\u00F3nde se vierten las aguas negras y los desechos l\u00EDquidos?");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-select", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ConservacionRecursosManejoDesechosComponent_mat_option_19_Template, 2, 2, "mat-option", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u00BFEl Productor tiene arboles de sombrio?");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-select", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ConservacionRecursosManejoDesechosComponent_mat_option_25_Template, 2, 2, "mat-option", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-form-field", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Adicional al Cacao \u00BFDestina espacio para cultivar vegetales, hortalizas y frutas de consumo?");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-select", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ConservacionRecursosManejoDesechosComponent_mat_option_31_Template, 2, 2, "mat-option", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-form-field", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u00BFCompra estos productos en mercados locales?");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-select", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, ConservacionRecursosManejoDesechosComponent_mat_option_38_Template, 2, 2, "mat-option", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-form-field", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\u00BFCu\u00E1nto gasta semanalmente en compra de estos productos?");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.conservacionRecursosManejoDesechos);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.opciones);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.opciones);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.lugaresDesecho);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.opciones);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.opciones);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.opciones);
            }
        }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatOption"]], styles: [""] });
    return ConservacionRecursosManejoDesechosComponent;
})();


/***/ }),

/***/ "./src/app/modules/formulario-linea-base/components/sections/cosecha/cosecha.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/formulario-linea-base/components/sections/cosecha/cosecha.component.ts ***!
  \************************************************************************************************/
/*! exports provided: CosechaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CosechaComponent", function() { return CosechaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");










function CosechaComponent_mat_option_8_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const periodo_r2 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", periodo_r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](periodo_r2);
    }
}
function CosechaComponent_mat_option_18_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const op_r3 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", op_r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](op_r3);
    }
}
let CosechaComponent = /*@__PURE__*/ (() => {
    class CosechaComponent {
        constructor(formBuilder) {
            this.formBuilder = formBuilder;
            this.periodosTumba = ["CADA 8 DIAS", "CADA 15 DIAS", "CADA MES"];
            this.opciones = ["SI", "NO"];
            this.cosecha = this.formBuilder.group({
                periodoCadaTumba: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                latasCacaoXTumba: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                realizaEscurridoSecadoCCN51: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                diasFermentadoCacao: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
            });
        }
        ngOnInit() {
        }
        onSubmit() {
        }
        get seccion() {
            return {
                preguntas: {
                    periodoCadaTumba: {
                        respuesta: this.cosecha.value.periodoCadaTumba
                    },
                    latasCacaoXTumba: {
                        respuesta: this.cosecha.value.latasCacaoXTumba
                    },
                    realizaEscurridoSecadoCCN51: {
                        respuesta: this.cosecha.value.realizaEscurridoSecadoCCN51
                    },
                    diasFermentadoCacao: {
                        respuesta: this.cosecha.value.diasFermentadoCacao
                    }
                }
            };
        }
        setValues(formularioLineaBase) {
            this.cosecha.get('periodoCadaTumba')
                .setValue(formularioLineaBase.secciones.cosecha.preguntas.periodoCadaTumba.respuesta);
            this.cosecha.get('latasCacaoXTumba')
                .setValue(formularioLineaBase.secciones.cosecha.preguntas.latasCacaoXTumba.respuesta);
            this.cosecha.get('realizaEscurridoSecadoCCN51')
                .setValue(formularioLineaBase.secciones.cosecha.preguntas.realizaEscurridoSecadoCCN51.respuesta);
            this.cosecha.get('diasFermentadoCacao')
                .setValue(formularioLineaBase.secciones.cosecha.preguntas.diasFermentadoCacao.respuesta);
        }
    }
    CosechaComponent.ɵfac = function CosechaComponent_Factory(t) { return new (t || CosechaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
    CosechaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CosechaComponent, selectors: [["app-cosecha"]], inputs: { parentForm: "parentForm" }, decls: 23, vars: 3, consts: [[3, "formGroup", "ngSubmit"], [1, "container-fluid"], [1, "row"], ["appearance", "outline", 1, "col-md-6"], ["formControlName", "periodoCadaTumba", "autocomplete", "off"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "formControlName", "latasCacaoXTumba", "autocomplete", "off"], ["formControlName", "realizaEscurridoSecadoCCN51", "autocomplete", "off"], ["matInput", "", "formControlName", "diasFermentadoCacao", "autocomplete", "off"], [3, "value"]], template: function CosechaComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CosechaComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Sus tumbas las realiza:");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-select", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CosechaComponent_mat_option_8_Template, 2, 2, "mat-option", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Latas de cacao fresco cosechadas por tumba");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u00BFRealiza Escurrido y Presecado para el CCN51?");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-select", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, CosechaComponent_mat_option_18_Template, 2, 2, "mat-option", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u00BFCu\u00E1ntos dias fermenta el cacao?");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.cosecha);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.periodosTumba);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.opciones);
            }
        }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatOption"]], styles: [""] });
    return CosechaComponent;
})();


/***/ }),

/***/ "./src/app/modules/formulario-linea-base/components/sections/diversificacion-ingresos/diversificacion-ingresos.component.ts":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/modules/formulario-linea-base/components/sections/diversificacion-ingresos/diversificacion-ingresos.component.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: DiversificacionIngresosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiversificacionIngresosComponent", function() { return DiversificacionIngresosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");











function DiversificacionIngresosComponent_mat_option_8_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const op_r7 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", op_r7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](op_r7);
    }
}
function DiversificacionIngresosComponent_mat_option_13_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const op_r8 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", op_r8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](op_r8);
    }
}
function DiversificacionIngresosComponent_mat_option_19_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const op_r9 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", op_r9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](op_r9);
    }
}
function DiversificacionIngresosComponent_mat_option_24_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const op_r10 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", op_r10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](op_r10);
    }
}
function DiversificacionIngresosComponent_mat_option_30_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const op_r11 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", op_r11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](op_r11);
    }
}
function DiversificacionIngresosComponent_mat_option_37_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const op_r12 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", op_r12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](op_r12);
    }
}
function DiversificacionIngresosComponent_mat_form_field_38_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "A\u00F1os de experiencia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
let DiversificacionIngresosComponent = /*@__PURE__*/ (() => {
    class DiversificacionIngresosComponent {
        constructor(formBuilder) {
            this.formBuilder = formBuilder;
            this.proyectos = [
                "HUERTOS ORGANICOS",
                "DESARROLLO DE VIVEROS",
                "DESARROLLO Y VENTA DE FERTILIZANTES",
                "REHABILITACIÓN DE FINCA",
                "BRIGADA DE PODADORES"
            ];
            this.opciones = [
                "SI", "NO"
            ];
            this.diversificacionIngresos = this.formBuilder.group({
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
        tieneExperiencia() {
            const tieneExperiencia = this.diversificacionIngresos.get('contarExperienciaPoda').value;
            return tieneExperiencia === 'SI';
        }
        get seccion() {
            return {
                preguntas: {
                    huertosOrganicos: {
                        respuesta: this.diversificacionIngresos.value.huertosOrganicos
                    },
                    desarrolloViveros: {
                        respuesta: this.diversificacionIngresos.value.desarrolloViveros
                    },
                    desarrolloVentaFertilizantes: {
                        respuesta: this.diversificacionIngresos.value.desarrolloVentaFertilizantes
                    },
                    rehabilitacionFinca: {
                        respuesta: this.diversificacionIngresos.value.rehabilitacionFinca
                    },
                    brigadaPodadores: {
                        respuesta: this.diversificacionIngresos.value.brigadaPodadores,
                        preguntas: {
                            contarExperienciaPoda: {
                                respuesta: this.diversificacionIngresos.value.contarExperienciaPoda,
                                preguntas: {
                                    aniosExperiencia: {
                                        respuesta: this.diversificacionIngresos.value.aniosExperiencia
                                    }
                                }
                            }
                        }
                    }
                }
            };
        }
    }
    DiversificacionIngresosComponent.ɵfac = function DiversificacionIngresosComponent_Factory(t) { return new (t || DiversificacionIngresosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
    DiversificacionIngresosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DiversificacionIngresosComponent, selectors: [["app-diversificacion-ingresos"]], inputs: { parentForm: "parentForm" }, decls: 39, vars: 9, consts: [[3, "formGroup", "ngSubmit"], [1, "container-fluid"], [1, "row"], ["appearance", "outline", 1, "col-md-6"], ["formControlName", "huertosOrganicos", "name", "someUnusualName", "autocomplete", "off"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "desarrolloViveros", "name", "someUnusualName", "autocomplete", "off"], ["formControlName", "desarrolloVentaFertilizantes", "name", "someUnusualName", "autocomplete", "off"], ["formControlName", "rehabilitacionFinca", "name", "someUnusualName", "autocomplete", "off"], ["formControlName", "brigadaPodadores", "name", "someUnusualName", "autocomplete", "off"], [1, "space-down", "mb-3", 3, "inset"], ["formControlName", "contarExperienciaPoda", "name", "someUnusualName", "autocomplete", "off"], ["class", "col-md-6", "appearance", "outline", 4, "ngIf"], [3, "value"], ["matInput", "", "formControlName", "aniosExperiencia", "name", "someUnusualName", "autocomplete", "off"]], template: function DiversificacionIngresosComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function DiversificacionIngresosComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Huertos organicos");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-select", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DiversificacionIngresosComponent_mat_option_8_Template, 2, 2, "mat-option", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Desarrollo de viveros");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-select", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, DiversificacionIngresosComponent_mat_option_13_Template, 2, 2, "mat-option", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Desarrollo y venta de fertilizantes");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-select", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, DiversificacionIngresosComponent_mat_option_19_Template, 2, 2, "mat-option", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Rehabilitacion de finca");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-select", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, DiversificacionIngresosComponent_mat_option_24_Template, 2, 2, "mat-option", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Brigada de podadores");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-select", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, DiversificacionIngresosComponent_mat_option_30_Template, 2, 2, "mat-option", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "mat-divider", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-form-field", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\u00BFCuenta con experiencia en poda?");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-select", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, DiversificacionIngresosComponent_mat_option_37_Template, 2, 2, "mat-option", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, DiversificacionIngresosComponent_mat_form_field_38_Template, 4, 0, "mat-form-field", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.diversificacionIngresos);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.opciones);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.opciones);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.opciones);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.opciones);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.opciones);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inset", true);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.opciones);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tieneExperiencia());
            }
        }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDivider"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatOption"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"]], styles: [""] });
    return DiversificacionIngresosComponent;
})();


/***/ }),

/***/ "./src/app/modules/formulario-linea-base/components/sections/firma-agricultor/firma-agricultor.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/formulario-linea-base/components/sections/firma-agricultor/firma-agricultor.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: FirmaAgricultorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirmaAgricultorComponent", function() { return FirmaAgricultorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_canvas_canvas_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/canvas/canvas.component */ "./src/app/shared/canvas/canvas.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");






let FirmaAgricultorComponent = /*@__PURE__*/ (() => {
    class FirmaAgricultorComponent {
        constructor() { }
        ngOnInit() {
        }
        onSubmit() {
        }
        setLineaBase(lineaBase) {
            this.lineaBase = lineaBase;
        }
        get seccion() {
            return {
                preguntas: {
                    firmaPath: {
                        respuesta: this.saveFirma()
                    }
                }
            };
        }
        saveFirma() {
            const reference = this.lineaBase ? this.lineaBase.id : Date.now().toString();
            const firmaPath = this.canvasComponent.saveLineaBaseImageInStorage(reference);
            return firmaPath;
        }
        setValues(lineaBase) {
            this.canvasComponent.setImageOnCanvas(lineaBase.secciones.firmaAgricultor.preguntas.firmaPath.respuesta);
        }
    }
    FirmaAgricultorComponent.ɵfac = function FirmaAgricultorComponent_Factory(t) { return new (t || FirmaAgricultorComponent)(); };
    FirmaAgricultorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FirmaAgricultorComponent, selectors: [["app-firma-agricultor"]], viewQuery: function FirmaAgricultorComponent_Query(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](src_app_shared_canvas_canvas_component__WEBPACK_IMPORTED_MODULE_1__["CanvasComponent"], true);
            }
            if (rf & 2) {
                var _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.canvasComponent = _t.first);
            }
        }, inputs: { parentForm: "parentForm" }, decls: 6, vars: 1, consts: [[3, "formGroup", "ngSubmit"], [1, "container-fluid"], [1, "row", "justify-content-center"], [1, "col-md-12", "d-flex", "align-items-center", "justify-content-center"]], template: function FirmaAgricultorComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FirmaAgricultorComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-canvas");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.firma);
            }
        }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], src_app_shared_canvas_canvas_component__WEBPACK_IMPORTED_MODULE_1__["CanvasComponent"]], styles: [""] });
    return FirmaAgricultorComponent;
})();


/***/ }),

/***/ "./src/app/modules/formulario-linea-base/components/sections/incrementar-productividad/incrementar-productividad.component.ts":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/modules/formulario-linea-base/components/sections/incrementar-productividad/incrementar-productividad.component.ts ***!
  \************************************************************************************************************************************/
/*! exports provided: IncrementarProductividadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncrementarProductividadComponent", function() { return IncrementarProductividadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");









function IncrementarProductividadComponent_mat_option_8_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const op_r2 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", op_r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](op_r2);
    }
}
function IncrementarProductividadComponent_mat_option_13_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const op_r3 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", op_r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](op_r3);
    }
}
let IncrementarProductividadComponent = /*@__PURE__*/ (() => {
    class IncrementarProductividadComponent {
        constructor(formBuilder) {
            this.formBuilder = formBuilder;
            this.proyectos = [
                "RECIBIR PLANTAS DE CACAO NACIONAL",
                "APRENDER ELAB. PRODUCTOS NATURALES"
            ];
            this.opciones = ["SI", "NO"];
            this.incrementarProductividad = this.formBuilder.group({
                recibirPlantasCacaoNacional: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                aprenderElabProductosNaturales: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
                // proyectos: new FormControl('')
            });
        }
        ngOnInit() {
        }
        onSubmit() {
        }
        get seccion() {
            return {
                preguntas: {
                    recibirPlantasCacaoNacional: {
                        respuesta: this.incrementarProductividad.value.recibirPlantasCacaoNacional
                    },
                    aprenderElabProductosNaturales: {
                        respuesta: this.incrementarProductividad.value.aprenderElabProductosNaturales
                    }
                }
            };
        }
    }
    IncrementarProductividadComponent.ɵfac = function IncrementarProductividadComponent_Factory(t) { return new (t || IncrementarProductividadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
    IncrementarProductividadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IncrementarProductividadComponent, selectors: [["app-incrementar-productividad"]], inputs: { parentForm: "parentForm" }, decls: 14, vars: 3, consts: [[3, "formGroup", "ngSubmit"], [1, "container-fluid"], [1, "row"], ["appearance", "outline", 1, "col-md-6"], ["formControlName", "recibirPlantasCacaoNacional", "name", "someUnusualName", "autocomplete", "off"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "aprenderElabProductosNaturales", "name", "someUnusualName", "autocomplete", "off"], [3, "value"]], template: function IncrementarProductividadComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function IncrementarProductividadComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Recibir Plantas de Cacao Nacional");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-select", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, IncrementarProductividadComponent_mat_option_8_Template, 2, 2, "mat-option", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Aprender Elab Productos Nacionales");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-select", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, IncrementarProductividadComponent_mat_option_13_Template, 2, 2, "mat-option", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.incrementarProductividad);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.opciones);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.opciones);
            }
        }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatOption"]], styles: [""] });
    return IncrementarProductividadComponent;
})();


/***/ }),

/***/ "./src/app/modules/formulario-linea-base/components/sections/informacion-familia/informacion-familia.component.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/modules/formulario-linea-base/components/sections/informacion-familia/informacion-familia.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: InformacionFamiliaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformacionFamiliaComponent", function() { return InformacionFamiliaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_interfaces_tecnico__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/interfaces/tecnico */ "./src/app/interfaces/tecnico.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");














function InformacionFamiliaComponent_div_3_button_5_Template(rf, ctx) {
    if (rf & 1) {
        const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InformacionFamiliaComponent_div_3_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.deleteMiembro(i_r9); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function InformacionFamiliaComponent_div_3_mat_option_20_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const gen_r20 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", gen_r20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](gen_r20);
    }
}
function InformacionFamiliaComponent_div_3_mat_option_25_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const seg_r21 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", seg_r21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](seg_r21);
    }
}
function InformacionFamiliaComponent_div_3_mat_option_31_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const lab_r22 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", lab_r22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](lab_r22);
    }
}
function InformacionFamiliaComponent_div_3_mat_option_36_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const edu_r23 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", edu_r23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](edu_r23);
    }
}
function InformacionFamiliaComponent_div_3_div_37_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Labor que Realiza");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u00BFCuantas Horas al Dia Labora?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r9);
    }
}
function InformacionFamiliaComponent_div_3_mat_option_43_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ing_r25 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ing_r25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ing_r25);
    }
}
function InformacionFamiliaComponent_div_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, InformacionFamiliaComponent_div_3_button_5_Template, 3, 0, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Clasificacion del Miembro Familiar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Edad del Miembro Familiar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Genero del Miembro Familiar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-select", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, InformacionFamiliaComponent_div_3_mat_option_20_Template, 2, 2, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Seguridad Social del Miembro Familiar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-select", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, InformacionFamiliaComponent_div_3_mat_option_25_Template, 2, 2, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-form-field", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Labora en la Finca");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-select", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, InformacionFamiliaComponent_div_3_mat_option_31_Template, 2, 2, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-form-field", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Nivel de Educacion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-select", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, InformacionFamiliaComponent_div_3_mat_option_36_Template, 2, 2, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, InformacionFamiliaComponent_div_3_div_37_Template, 9, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-form-field", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\u00BFTiene otra fuente de Ingresos?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-select", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, InformacionFamiliaComponent_div_3_mat_option_43_Template, 2, 2, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-form-field", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Sueldo o Ingreso Mensual");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "mat-divider", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const i_r9 = ctx.index;
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Miembro ", i_r9 + 1, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.getFormArray("miembros").length > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.generos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.seguridadSocial);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.laboraFinca);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.educacion);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.labora(i_r9));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.otrosIngresos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inset", true);
    }
}
function InformacionFamiliaComponent_mat_option_15_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const op_r26 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", op_r26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](op_r26);
    }
}
function InformacionFamiliaComponent_mat_option_20_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const op_r27 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", op_r27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](op_r27);
    }
}
function InformacionFamiliaComponent_mat_option_26_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const op_r28 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", op_r28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](op_r28);
    }
}
function InformacionFamiliaComponent_mat_option_31_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const op_r29 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", op_r29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](op_r29);
    }
}
function InformacionFamiliaComponent_div_32_mat_option_5_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const op_r31 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", op_r31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](op_r31);
    }
}
function InformacionFamiliaComponent_div_32_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Gustaria Trabajo de 1/2 tiempo en Proyectos Futuros del Programa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-select", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, InformacionFamiliaComponent_div_32_mat_option_5_Template, 2, 2, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.opciones);
    }
}
function InformacionFamiliaComponent_div_33_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00BFComo cual?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function InformacionFamiliaComponent_div_34_mat_option_5_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const op_r33 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", op_r33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](op_r33);
    }
}
function InformacionFamiliaComponent_div_34_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Su Hijo estar\u00EDa interesado en participar en Proyectos de Rehabilitaci\u00F3n de Finca");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-select", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, InformacionFamiliaComponent_div_34_mat_option_5_Template, 2, 2, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.opciones);
    }
}
let InformacionFamiliaComponent = /*@__PURE__*/ (() => {
    class InformacionFamiliaComponent {
        constructor(formBuilder) {
            this.formBuilder = formBuilder;
            this.generos = [
                "MASCULINO",
                "FEMENINO"
            ];
            this.educacion = ['Analfabeto', 'Primaria', 'Secundaria', 'Superior'];
            this.seguridadSocial = ["SI", "NO"];
            this.laboraFinca = ["SI", "NO"];
            this.otrosIngresos = ["SI", "NO"];
            this.opciones = ["SI", "NO"];
            this.informacionFamilia = this.formBuilder.group({
                miembros: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]([
                    new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                        clasificacionMiembroFamiliar: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                        edad: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                        genero: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                        seguridadSocial: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                        nivelEduacion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                        laboraEnFinca: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                        laborRealizado: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                        horasAlDiaTrabaja: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                        tieneOtraFuenteIngreso: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                        sueldoIngresoMensual: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
                    })
                ]),
                familiarDiscapacitado: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                esposaInvolucradaEntrevista: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                esposoIncluyeEsposaEntrevista: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                deseoIngresoAdicionalConyuge: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                deseoTrabajoMedioTiempoProyectosFuturos: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                comoCual: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                hijoInteresadoEnProyectosRehabilitacionFinca: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
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
        labora(index) {
            const labora = this.getFormArray('miembros').controls[index].value.laboraEnFinca;
            return labora === 'SI';
        }
        deseaTrabajo() {
            const deseaTrabajo = this.informacionFamilia.get('deseoTrabajoMedioTiempoProyectosFuturos').value;
            return deseaTrabajo === 'SI';
        }
        getFormArray(key) {
            return this.informacionFamilia.get(key);
        }
        createMiembroField() {
            return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                clasificacionMiembroFamiliar: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                edad: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                genero: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                seguridadSocial: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                nivelEduacion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                laboraEnFinca: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                laborRealizado: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                horasAlDiaTrabaja: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                tieneOtraFuenteIngreso: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                sueldoIngresoMensual: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
            });
        }
        addMiembro() {
            this.getFormArray("miembros").push(this.createMiembroField());
        }
        deleteMiembro(index) {
            this.getFormArray("miembros").removeAt(index);
        }
        miembrosToObject() {
            const questions = [];
            for (let value of this.getFormArray("miembros").controls) {
                const miembro = {
                    clasificacionMiembroFamiliar: {
                        respuesta: value.get("clasificacionMiembroFamiliar").value
                    },
                    edad: {
                        respuesta: value.get("edad").value
                    },
                    genero: {
                        respuesta: value.get("genero").value
                    },
                    seguridadSocial: {
                        respuesta: value.get("seguridadSocial").value
                    },
                    nivelEduacion: {
                        respuesta: value.get("nivelEduacion").value
                    },
                    laboraEnFinca: {
                        respuesta: value.get("laboraEnFinca").value
                    },
                    laborRealizado: {
                        respuesta: value.get("laborRealizado").value
                    },
                    horasAlDiaTrabaja: {
                        respuesta: value.get("horasAlDiaTrabaja").value
                    },
                    tieneOtraFuenteIngreso: {
                        respuesta: value.get("tieneOtraFuenteIngreso").value
                    },
                    sueldoIngresoMensual: {
                        respuesta: value.get("sueldoIngresoMensual").value
                    }
                };
                questions.push(miembro);
            }
            return questions;
        }
        get seccion() {
            return {
                preguntas: {
                    miembros: {
                        arreglo: this.miembrosToObject()
                    },
                    familiarDiscapacitado: {
                        respuesta: this.informacionFamilia.value.familiarDiscapacitado
                    },
                    esposaInvolucradaEntrevista: {
                        respuesta: this.informacionFamilia.value.esposaInvolucradaEntrevista
                    },
                    esposoIncluyeEsposaEntrevista: {
                        respuesta: this.informacionFamilia.value.esposoIncluyeEsposaEntrevista
                    },
                    deseoIngresoAdicionalConyuge: {
                        respuesta: this.informacionFamilia.value.deseoIngresoAdicionalConyuge
                    },
                    deseoTrabajoMedioTiempoProyectosFuturos: {
                        respuesta: this.informacionFamilia.value.deseoTrabajoMedioTiempoProyectosFuturos,
                        preguntas: {
                            comoCual: {
                                respuesta: this.informacionFamilia.value.comoCual
                            }
                        }
                    },
                    hijoInteresadoEnProyectosRehabilitacionFinca: {
                        respuesta: this.informacionFamilia.value.hijoInteresadoEnProyectosRehabilitacionFinca
                    }
                }
            };
        }
        setMiembros(formularioLineaBase) {
            formularioLineaBase.secciones.informacionFamilia.preguntas.miembros.arreglo.forEach((value, index) => {
                this.addMiembro();
                this.getFormArray("miembros").controls[index].get("clasificacionMiembroFamiliar").setValue(value["clasificacionMiembroFamiliar"]["respuesta"]);
                this.getFormArray("miembros").controls[index].get("edad").setValue(value["edad"]["respuesta"]);
                this.getFormArray("miembros").controls[index].get("genero").setValue(value["genero"]["respuesta"]);
                this.getFormArray("miembros").controls[index].get("seguridadSocial").setValue(value["seguridadSocial"]["respuesta"]);
                this.getFormArray("miembros").controls[index].get("nivelEduacion").setValue(value["nivelEduacion"]["respuesta"]);
                this.getFormArray("miembros").controls[index].get("laboraEnFinca").setValue(value["laboraEnFinca"]["respuesta"]);
                this.getFormArray("miembros").controls[index].get("laborRealizado").setValue(value["laborRealizado"]["respuesta"]);
                this.getFormArray("miembros").controls[index].get("horasAlDiaTrabaja").setValue(value["horasAlDiaTrabaja"]["respuesta"]);
                this.getFormArray("miembros").controls[index].get("tieneOtraFuenteIngreso").setValue(value["tieneOtraFuenteIngreso"]["respuesta"]);
                this.getFormArray("miembros").controls[index].get("sueldoIngresoMensual").setValue(value["sueldoIngresoMensual"]["respuesta"]);
            });
        }
        setValues(formularioLineaBase) {
            this.setMiembros(formularioLineaBase);
            this.informacionFamilia.get('familiarDiscapacitado')
                .setValue(formularioLineaBase.secciones.informacionFamilia.preguntas.familiarDiscapacitado.respuesta);
            this.informacionFamilia.get('esposaInvolucradaEntrevista')
                .setValue(formularioLineaBase.secciones.informacionFamilia.preguntas.esposaInvolucradaEntrevista.respuesta);
            this.informacionFamilia.get('esposoIncluyeEsposaEntrevista')
                .setValue(formularioLineaBase.secciones.informacionFamilia.preguntas.esposoIncluyeEsposaEntrevista.respuesta);
            this.informacionFamilia.get('deseoIngresoAdicionalConyuge')
                .setValue(formularioLineaBase.secciones.informacionFamilia.preguntas.deseoIngresoAdicionalConyuge.respuesta);
            this.informacionFamilia.get('deseoTrabajoMedioTiempoProyectosFuturos')
                .setValue(formularioLineaBase.secciones.informacionFamilia.preguntas.deseoTrabajoMedioTiempoProyectosFuturos.respuesta);
            this.informacionFamilia.get('comoCual')
                .setValue(formularioLineaBase.secciones.informacionFamilia.preguntas.deseoTrabajoMedioTiempoProyectosFuturos.preguntas.comoCual.respuesta);
            this.informacionFamilia.get('hijoInteresadoEnProyectosRehabilitacionFinca')
                .setValue(formularioLineaBase.secciones.informacionFamilia.preguntas.hijoInteresadoEnProyectosRehabilitacionFinca.respuesta);
        }
    }
    InformacionFamiliaComponent.ɵfac = function InformacionFamiliaComponent_Factory(t) { return new (t || InformacionFamiliaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
    InformacionFamiliaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InformacionFamiliaComponent, selectors: [["app-informacion-familia"]], inputs: { parentForm: "parentForm" }, decls: 35, vars: 9, consts: [[3, "formGroup", "ngSubmit"], [1, "container-fluid"], ["class", "miembro", "formArrayName", "miembros", 4, "ngFor", "ngForOf"], [1, "row", "justify-content-center"], [1, "col-md-4"], ["mat-button", "", "color", "primary", "mat-flat-button", "", 3, "click"], [1, "row"], ["appearance", "outline", 1, "col-md-6"], ["formControlName", "familiarDiscapacitado"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "esposaInvolucradaEntrevista"], ["formControlName", "esposoIncluyeEsposaEntrevista"], ["formControlName", "deseoIngresoAdicionalConyuge"], ["class", "row", 4, "ngIf"], ["formArrayName", "miembros", 1, "miembro"], [1, "row", "justify-content-between"], [1, "col-md-2"], [1, "col-md-1", "col-xs-1"], ["class", "delete", "mat-flat-button", "", 3, "click", 4, "ngIf"], ["appearance", "outline", 1, "col-md-8", 3, "formGroupName"], ["matInput", "", "formControlName", "clasificacionMiembroFamiliar"], ["appearance", "outline", 1, "col-md-4", 3, "formGroupName"], ["matInput", "", "formControlName", "edad"], ["appearance", "outline", 1, "col-md-6", 3, "formGroupName"], ["formControlName", "genero"], ["formControlName", "seguridadSocial"], ["formControlName", "laboraEnFinca"], ["formControlName", "nivelEduacion"], ["formControlName", "tieneOtraFuenteIngreso"], ["matInput", "", "formControlName", "sueldoIngresoMensual"], [1, "space-down", "mb-3", 3, "inset"], ["mat-flat-button", "", 1, "delete", 3, "click"], [3, "value"], ["matInput", "", "formControlName", "laborRealizado"], ["matInput", "", "formControlName", "horasAlDiaTrabaja"], ["appearance", "outline", 1, "column-item-full"], ["formControlName", "deseoTrabajoMedioTiempoProyectosFuturos"], ["matInput", "", "formControlName", "comoCual"], ["formControlName", "hijoInteresadoEnProyectosRehabilitacionFinca"]], template: function InformacionFamiliaComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function InformacionFamiliaComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, InformacionFamiliaComponent_div_3_Template, 49, 17, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InformacionFamiliaComponent_Template_button_click_6_listener() { return ctx.addMiembro(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " A\u00F1adir ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Especificaciones:");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Algun Familar presenta Discapacidad");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-select", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, InformacionFamiliaComponent_mat_option_15_Template, 2, 2, "mat-option", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "La Esposa se involucra en la Entrevista");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-select", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, InformacionFamiliaComponent_mat_option_20_Template, 2, 2, "mat-option", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-form-field", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Esposo incluye Esposa en Entrevista");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-select", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, InformacionFamiliaComponent_mat_option_26_Template, 2, 2, "mat-option", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-form-field", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Gustaria que su Conyuge tuviera Ingreso Adicional");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-select", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, InformacionFamiliaComponent_mat_option_31_Template, 2, 2, "mat-option", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, InformacionFamiliaComponent_div_32_Template, 6, 1, "div", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, InformacionFamiliaComponent_div_33_Template, 5, 0, "div", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, InformacionFamiliaComponent_div_34_Template, 6, 1, "div", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.informacionFamilia);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.getFormArray("miembros").controls);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.opciones);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.opciones);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.opciones);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.opciones);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isFicticio());
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deseaTrabajo() && !ctx.isFicticio());
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isFicticio());
            }
        }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDivider"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"]], styles: [".mat-button[_ngcontent-%COMP%] {\n    width: 100%;\n}"] });
    return InformacionFamiliaComponent;
})();


/***/ }),

/***/ "./src/app/modules/formulario-linea-base/components/sections/mejorar-calidad-cacao/mejorar-calidad-cacao.component.ts":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/modules/formulario-linea-base/components/sections/mejorar-calidad-cacao/mejorar-calidad-cacao.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: MejorarCalidadCacaoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MejorarCalidadCacaoComponent", function() { return MejorarCalidadCacaoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");










function MejorarCalidadCacaoComponent_mat_option_8_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const op_r5 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", op_r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](op_r5);
    }
}
function MejorarCalidadCacaoComponent_mat_option_13_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const op_r6 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", op_r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](op_r6);
    }
}
function MejorarCalidadCacaoComponent_mat_option_19_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const op_r7 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", op_r7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](op_r7);
    }
}
function MejorarCalidadCacaoComponent_mat_option_27_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const op_r8 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", op_r8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](op_r8);
    }
}
function MejorarCalidadCacaoComponent_mat_option_32_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const op_r9 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", op_r9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](op_r9);
    }
}
let MejorarCalidadCacaoComponent = /*@__PURE__*/ (() => {
    class MejorarCalidadCacaoComponent {
        constructor(formBuilder) {
            this.formBuilder = formBuilder;
            this.proyectos = [
                "BANDEJAS O CAJONES DE FERMENTACION",
                "TENDALES ELEVADOS DE CAÑA",
                "SECADORAS COMUNITARIAS"
            ];
            this.opciones = [
                "SI", "NO"
            ];
            this.mejorarCalidadCacao = this.formBuilder.group({
                bandejasCajonesFermentacion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                dispuestoHacerloPropiaCuenta: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                tendalesElevadosCania: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                secadorasComunitarias: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                contarAgrupacionParaProyecto: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
            });
        }
        ngOnInit() {
        }
        onSubmit() {
        }
        get seccion() {
            return {
                preguntas: {
                    bandejasCajonesFermentacion: {
                        respuesta: this.mejorarCalidadCacao.value.bandejasCajonesFermentacion,
                        preguntas: {
                            dispuestoHacerloPropiaCuenta: {
                                respuesta: this.mejorarCalidadCacao.value.dispuestoHacerloPropiaCuenta
                            }
                        }
                    },
                    tendalesElevadosCania: {
                        respuesta: this.mejorarCalidadCacao.value.tendalesElevadosCania
                    },
                    secadorasComunitarias: {
                        respuesta: this.mejorarCalidadCacao.value.secadorasComunitarias,
                        preguntas: {
                            contarAgrupacionParaProyecto: {
                                respuesta: this.mejorarCalidadCacao.value.contarAgrupacionParaProyecto
                            }
                        }
                    }
                }
            };
        }
    }
    MejorarCalidadCacaoComponent.ɵfac = function MejorarCalidadCacaoComponent_Factory(t) { return new (t || MejorarCalidadCacaoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
    MejorarCalidadCacaoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MejorarCalidadCacaoComponent, selectors: [["app-mejorar-calidad-cacao"]], inputs: { parentForm: "parentForm" }, decls: 33, vars: 7, consts: [[3, "formGroup", "ngSubmit"], [1, "container-fluid"], [1, "row"], ["appearance", "outline", 1, "col-md-6"], ["formControlName", "bandejasCajonesFermentacion"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "tendalesElevadosCania"], ["formControlName", "secadorasComunitarias"], [1, "col-md-6"], [1, "space-down", "mb-3", 3, "inset"], ["formControlName", "dispuestoHacerloPropiaCuenta"], ["formControlName", "contarAgrupacionParaProyecto"], [3, "value"]], template: function MejorarCalidadCacaoComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function MejorarCalidadCacaoComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Bandejas o cajones de Fermentacion");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-select", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MejorarCalidadCacaoComponent_mat_option_8_Template, 2, 2, "mat-option", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Tendales elevados por ca\u00F1a");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-select", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MejorarCalidadCacaoComponent_mat_option_13_Template, 2, 2, "mat-option", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Secadoras comunitarias");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-select", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, MejorarCalidadCacaoComponent_mat_option_19_Template, 2, 2, "mat-option", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "mat-divider", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-form-field", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u00BFEst\u00E1 dispuesto a hacerlo por su cuenta?");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-select", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, MejorarCalidadCacaoComponent_mat_option_27_Template, 2, 2, "mat-option", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-form-field", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u00BFCuenta con agrupacion de vecinos para trabajar en el proyecto?");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-select", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, MejorarCalidadCacaoComponent_mat_option_32_Template, 2, 2, "mat-option", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.mejorarCalidadCacao);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.opciones);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.opciones);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.opciones);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inset", true);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.opciones);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.opciones);
            }
        }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDivider"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatOption"]], styles: [""] });
    return MejorarCalidadCacaoComponent;
})();


/***/ }),

/***/ "./src/app/modules/formulario-linea-base/components/sections/nivel-asociatividad/nivel-asociatividad.component.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/modules/formulario-linea-base/components/sections/nivel-asociatividad/nivel-asociatividad.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: NivelAsociatividadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NivelAsociatividadComponent", function() { return NivelAsociatividadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_interfaces_tecnico__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/interfaces/tecnico */ "./src/app/interfaces/tecnico.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");











function NivelAsociatividadComponent_mat_option_8_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const op_r4 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", op_r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](op_r4);
    }
}
function NivelAsociatividadComponent_div_9_mat_option_15_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const op_r8 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", op_r8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](op_r8);
    }
}
function NivelAsociatividadComponent_div_9_mat_form_field_17_mat_option_4_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ben_r10 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ben_r10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ben_r10);
    }
}
function NivelAsociatividadComponent_div_9_mat_form_field_17_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00BFQue tipo de beneficios?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NivelAsociatividadComponent_div_9_mat_form_field_17_mat_option_4_Template, 2, 2, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.tiposBeneficio);
    }
}
function NivelAsociatividadComponent_div_9_mat_form_field_18_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Especifique:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function NivelAsociatividadComponent_div_9_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Nombre de Organizaci\u00F3n/Programa/Certificaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Cantidad de Miembros");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u00BFRecibe beneficios?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, NivelAsociatividadComponent_div_9_mat_option_15_Template, 2, 2, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, NivelAsociatividadComponent_div_9_mat_form_field_17_Template, 5, 1, "mat-form-field", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, NivelAsociatividadComponent_div_9_mat_form_field_18_Template, 4, 0, "mat-form-field", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.opciones);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.recibeBeneficio());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.otroBeneficio());
    }
}
function NivelAsociatividadComponent_div_10_mat_option_5_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const op_r12 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", op_r12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](op_r12);
    }
}
function NivelAsociatividadComponent_div_10_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00BFRecibe ayuda de otra institucion?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NivelAsociatividadComponent_div_10_mat_option_5_Template, 2, 2, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.opciones);
    }
}
function NivelAsociatividadComponent_div_11_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Nombre Institucion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Tipo de ayuda");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
let NivelAsociatividadComponent = /*@__PURE__*/ (() => {
    class NivelAsociatividadComponent {
        constructor(formBuilder) {
            this.formBuilder = formBuilder;
            this.opciones = ["SI", "NO"];
            this.beneficio = [];
            this.tiposBeneficio = ["ASISTENCIA TÉCNICA", "TRANSPORTE", "CAPACITACIÓN", "PRECIO MEJORADO", "PRECIO", "INSUMO", "OTRO"];
            this.nivelAsociatividad = this.formBuilder.group({
                perteneceAsocProgrCertif: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                nombreAsociacion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                cantidadMiembros: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                recibeBeneficios: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                tiposBeneficios: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                otroTiposBeneficios: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                ayudaOtraInstitucion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                nombreOtraInstitucion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                tipoAyuda: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
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
        recibeBeneficio() {
            const recibeBeneficio = this.nivelAsociatividad.get('recibeBeneficios').value;
            return recibeBeneficio === 'SI';
        }
        hayAsociacion() {
            const hayAsociacion = this.nivelAsociatividad.get('perteneceAsocProgrCertif').value;
            return hayAsociacion === 'SI';
        }
        otroBeneficio() {
            const beneficios = this.nivelAsociatividad.get('tiposBeneficios').value;
            return beneficios.includes('OTRO');
        }
        recibeAyuda() {
            const recibeAyuda = this.nivelAsociatividad.get('ayudaOtraInstitucion').value;
            return recibeAyuda === 'SI';
        }
        get seccion() {
            return {
                preguntas: {
                    perteneceAsocProgrCertif: {
                        respuesta: this.nivelAsociatividad.value.perteneceAsocProgrCertif,
                        preguntas: {
                            nombreAsociacion: {
                                respuesta: this.nivelAsociatividad.value.nombreAsociacion
                            },
                            cantidadMiembros: {
                                respuesta: this.nivelAsociatividad.value.cantidadMiembros
                            },
                            recibeBeneficios: {
                                respuesta: this.nivelAsociatividad.value.recibeBeneficios
                            },
                            tiposBeneficios: {
                                respuesta: this.nivelAsociatividad.value.tiposBeneficios,
                                preguntas: {
                                    otroTiposBeneficios: {
                                        respuesta: this.nivelAsociatividad.value.otroTiposBeneficios,
                                    }
                                }
                            }
                        }
                    },
                    ayudaOtraInstitucion: {
                        respuesta: this.nivelAsociatividad.value.ayudaOtraInstitucion,
                        preguntas: {
                            nombreOtraInstitucion: {
                                respuesta: this.nivelAsociatividad.value.nombreOtraInstitucion
                            },
                            tipoAyuda: {
                                respuesta: this.nivelAsociatividad.value.tipoAyuda
                            }
                        }
                    }
                }
            };
        }
        setValues(formularioLineaBase) {
            this.nivelAsociatividad.get('perteneceAsocProgrCertif')
                .setValue(formularioLineaBase.secciones.nivelAsociatividad.preguntas.perteneceAsocProgrCertif.respuesta);
            this.nivelAsociatividad.get('nombreAsociacion')
                .setValue(formularioLineaBase.secciones.nivelAsociatividad.preguntas.perteneceAsocProgrCertif.preguntas.nombreAsociacion.respuesta);
            this.nivelAsociatividad.get('cantidadMiembros')
                .setValue(formularioLineaBase.secciones.nivelAsociatividad.preguntas.perteneceAsocProgrCertif.preguntas.cantidadMiembros.respuesta);
            this.nivelAsociatividad.get('recibeBeneficios')
                .setValue(formularioLineaBase.secciones.nivelAsociatividad.preguntas.perteneceAsocProgrCertif.preguntas.recibeBeneficios.respuesta);
            this.nivelAsociatividad.get('tiposBeneficios')
                .setValue(formularioLineaBase.secciones.nivelAsociatividad.preguntas.perteneceAsocProgrCertif.preguntas.tiposBeneficios.respuesta);
            this.nivelAsociatividad.get('otroTiposBeneficios')
                .setValue(formularioLineaBase.secciones.nivelAsociatividad.preguntas.perteneceAsocProgrCertif.preguntas.tiposBeneficios.preguntas.otroTiposBeneficios.respuesta);
            this.nivelAsociatividad.get('ayudaOtraInstitucion')
                .setValue(formularioLineaBase.secciones.nivelAsociatividad.preguntas.ayudaOtraInstitucion.respuesta);
            this.nivelAsociatividad.get('nombreOtraInstitucion')
                .setValue(formularioLineaBase.secciones.nivelAsociatividad.preguntas.ayudaOtraInstitucion.preguntas.nombreOtraInstitucion.respuesta);
            this.nivelAsociatividad.get('tipoAyuda')
                .setValue(formularioLineaBase.secciones.nivelAsociatividad.preguntas.ayudaOtraInstitucion.preguntas.tipoAyuda.respuesta);
        }
    }
    NivelAsociatividadComponent.ɵfac = function NivelAsociatividadComponent_Factory(t) { return new (t || NivelAsociatividadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
    NivelAsociatividadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NivelAsociatividadComponent, selectors: [["app-nivel-asociatividad"]], inputs: { parentForm: "parentForm" }, decls: 12, vars: 5, consts: [[3, "formGroup", "ngSubmit"], [1, "container-fluid"], [1, "row"], ["appearance", "outline", 1, "col-md-12"], ["formControlName", "perteneceAsocProgrCertif", "autocomplete", "off"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "row", 4, "ngIf"], [3, "value"], ["appearance", "outline", 1, "col-md-8"], ["matInput", "", "formControlName", "nombreAsociacion", "autocomplete", "off"], ["appearance", "outline", 1, "col-md-4"], ["matInput", "", "formControlName", "cantidadMiembros", "autocomplete", "off"], ["appearance", "outline", 1, "col-md-6"], ["formControlName", "recibeBeneficios"], ["class", "col-md-6", "appearance", "outline", 4, "ngIf"], ["formControlName", "tiposBeneficios", "multiple", ""], ["matInput", "", "formControlName", "otroTiposBeneficios", "autocomplete", "off"], ["formControlName", "ayudaOtraInstitucion", "autocomplete", "off"], ["matInput", "", "formControlName", "nombreOtraInstitucion", "autocomplete", "off"], ["matInput", "", "formControlName", "tipoAyuda", "autocomplete", "off"]], template: function NivelAsociatividadComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NivelAsociatividadComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Pertenece a una Organizaci\u00F3n/Programa/Certificaci\u00F3n de Cacao");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-select", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NivelAsociatividadComponent_mat_option_8_Template, 2, 2, "mat-option", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NivelAsociatividadComponent_div_9_Template, 19, 3, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NivelAsociatividadComponent_div_10_Template, 6, 1, "div", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, NivelAsociatividadComponent_div_11_Template, 9, 0, "div", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.nivelAsociatividad);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.opciones);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hayAsociacion());
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isFicticio());
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.recibeAyuda() && !ctx.isFicticio());
            }
        }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatOption"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"]], styles: [""] });
    return NivelAsociatividadComponent;
})();


/***/ }),

/***/ "./src/app/modules/formulario-linea-base/components/sections/practicas-agricolas/practicas-agricolas.component.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/modules/formulario-linea-base/components/sections/practicas-agricolas/practicas-agricolas.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: PracticasAgricolasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PracticasAgricolasComponent", function() { return PracticasAgricolasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");











function PracticasAgricolasComponent_mat_option_8_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const op_r10 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", op_r10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](op_r10);
    }
}
function PracticasAgricolasComponent_mat_option_14_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const plaga_r11 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", plaga_r11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](plaga_r11);
    }
}
function PracticasAgricolasComponent_mat_option_19_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const enfermedad_r12 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", enfermedad_r12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](enfermedad_r12);
    }
}
function PracticasAgricolasComponent_mat_option_35_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const op_r13 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", op_r13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](op_r13);
    }
}
function PracticasAgricolasComponent_div_36_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00BFCuantas?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function PracticasAgricolasComponent_mat_option_45_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const mes_r14 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", mes_r14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](mes_r14);
    }
}
function PracticasAgricolasComponent_mat_option_50_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const mes_r15 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", mes_r15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](mes_r15);
    }
}
function PracticasAgricolasComponent_mat_option_56_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const mes_r16 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", mes_r16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](mes_r16);
    }
}
function PracticasAgricolasComponent_mat_option_61_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const mes_r17 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", mes_r17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](mes_r17);
    }
}
function PracticasAgricolasComponent_mat_option_67_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const mes_r18 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", mes_r18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](mes_r18);
    }
}
let PracticasAgricolasComponent = /*@__PURE__*/ (() => {
    class PracticasAgricolasComponent {
        constructor(formBuilder) {
            this.formBuilder = formBuilder;
            this.opciones = ["SI", "NO"];
            this.plagas = ["COCHINILLA", "XILEBORUS", "TRIPS", "CHINCHORRO", "HORMIGA", "OROZCO", "OTROS"];
            this.enfermedades = ["PHYTOPHTORA", "ESCOBA BRUJA", "MONILLA", "MAL DE MACHETE", "OTROS"];
            this.meses = ["ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO", "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"];
            this.practicasAgricolas = this.formBuilder.group({
                interesElaborarFertilizanteNaturalOrganico: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                plagasAfectanCultivo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                enfermedadesAfectanCultivo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                productoParaPlagas: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                productoParaEnfermedades: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                llevaRegistroPerdidasMazorcasXMonilla: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                cantidadPerdidaMazorcas: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                periodoFertilizacion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                periodoPoda: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                periodoControlMaleza: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                periodoMIPE: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                periodoCosecha: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
            });
        }
        ngOnInit() {
        }
        onSubmit() {
        }
        llevaRegistroPerdidas() {
            const llevaRegistroPerdidas = this.practicasAgricolas.get('llevaRegistroPerdidasMazorcasXMonilla').value;
            return llevaRegistroPerdidas === 'SI';
        }
        get seccion() {
            return {
                preguntas: {
                    interesElaborarFertilizanteNaturalOrganico: {
                        respuesta: this.practicasAgricolas.value.interesElaborarFertilizanteNaturalOrganico
                    },
                    plagasAfectanCultivo: {
                        respuesta: this.practicasAgricolas.value.plagasAfectanCultivo
                    },
                    enfermedadesAfectanCultivo: {
                        respuesta: this.practicasAgricolas.value.enfermedadesAfectanCultivo
                    },
                    productoParaPlagas: {
                        respuesta: this.practicasAgricolas.value.productoParaPlagas
                    },
                    productoParaEnfermedades: {
                        respuesta: this.practicasAgricolas.value.productoParaEnfermedades
                    },
                    llevaRegistroPerdidasMazorcasXMonilla: {
                        respuesta: this.practicasAgricolas.value.llevaRegistroPerdidasMazorcasXMonilla,
                        preguntas: {
                            cantidadPerdidaMazorcas: {
                                respuesta: this.practicasAgricolas.value.cantidadPerdidaMazorcas
                            }
                        }
                    },
                    periodoFertilizacion: {
                        respuesta: this.practicasAgricolas.value.periodoFertilizacion
                    },
                    periodoPoda: {
                        respuesta: this.practicasAgricolas.value.periodoPoda
                    },
                    periodoControlMaleza: {
                        respuesta: this.practicasAgricolas.value.periodoControlMaleza
                    },
                    periodoMIPE: {
                        respuesta: this.practicasAgricolas.value.periodoMIPE
                    },
                    periodoCosecha: {
                        respuesta: this.practicasAgricolas.value.periodoCosecha
                    }
                }
            };
        }
        setValues(formularioLineaBase) {
            this.practicasAgricolas.get('interesElaborarFertilizanteNaturalOrganico')
                .setValue(formularioLineaBase.secciones.practicasAgricolas.preguntas.interesElaborarFertilizanteNaturalOrganico.respuesta);
            this.practicasAgricolas.get('plagasAfectanCultivo')
                .setValue(formularioLineaBase.secciones.practicasAgricolas.preguntas.plagasAfectanCultivo.respuesta);
            this.practicasAgricolas.get('enfermedadesAfectanCultivo')
                .setValue(formularioLineaBase.secciones.practicasAgricolas.preguntas.enfermedadesAfectanCultivo.respuesta);
            this.practicasAgricolas.get('productoParaPlagas')
                .setValue(formularioLineaBase.secciones.practicasAgricolas.preguntas.productoParaPlagas.respuesta);
            this.practicasAgricolas.get('productoParaEnfermedades')
                .setValue(formularioLineaBase.secciones.practicasAgricolas.preguntas.productoParaEnfermedades.respuesta);
            this.practicasAgricolas.get('llevaRegistroPerdidasMazorcasXMonilla')
                .setValue(formularioLineaBase.secciones.practicasAgricolas.preguntas.llevaRegistroPerdidasMazorcasXMonilla.respuesta);
            this.practicasAgricolas.get('cantidadPerdidaMazorcas')
                .setValue(formularioLineaBase.secciones.practicasAgricolas.preguntas.llevaRegistroPerdidasMazorcasXMonilla.preguntas.cantidadPerdidaMazorcas.respuesta);
            this.practicasAgricolas.get('periodoFertilizacion')
                .setValue(formularioLineaBase.secciones.practicasAgricolas.preguntas.periodoFertilizacion.respuesta);
            this.practicasAgricolas.get('periodoPoda')
                .setValue(formularioLineaBase.secciones.practicasAgricolas.preguntas.periodoPoda.respuesta);
            this.practicasAgricolas.get('periodoControlMaleza')
                .setValue(formularioLineaBase.secciones.practicasAgricolas.preguntas.periodoControlMaleza.respuesta);
            this.practicasAgricolas.get('periodoMIPE')
                .setValue(formularioLineaBase.secciones.practicasAgricolas.preguntas.periodoMIPE.respuesta);
            this.practicasAgricolas.get('periodoCosecha')
                .setValue(formularioLineaBase.secciones.practicasAgricolas.preguntas.periodoCosecha.respuesta);
        }
    }
    PracticasAgricolasComponent.ɵfac = function PracticasAgricolasComponent_Factory(t) { return new (t || PracticasAgricolasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
    PracticasAgricolasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PracticasAgricolasComponent, selectors: [["app-practicas-agricolas"]], inputs: { parentForm: "parentForm" }, decls: 69, vars: 12, consts: [[3, "formGroup", "ngSubmit"], [1, "container-fluid"], [1, "row"], ["appearance", "outline", 1, "col-md-12"], ["formControlName", "interesElaborarFertilizanteNaturalOrganico", "autocomplete", "off"], [3, "value", 4, "ngFor", "ngForOf"], ["appearance", "outline", 1, "col-md-6"], ["formControlName", "plagasAfectanCultivo", "multiple", ""], ["formControlName", "enfermedadesAfectanCultivo", "multiple", ""], ["matInput", "", "formControlName", "productoParaPlagas", "autocomplete", "off"], ["matInput", "", "formControlName", "productoParaEnfermedades", "autocomplete", "off"], ["formControlName", "llevaRegistroPerdidasMazorcasXMonilla", "autocomplete", "off"], ["class", "row", 4, "ngIf"], [1, "space-down", "mb-3", 3, "inset"], ["formControlName", "periodoFertilizacion", "multiple", ""], ["formControlName", "periodoPoda", "multiple", ""], ["formControlName", "periodoControlMaleza", "multiple", ""], ["formControlName", "periodoMIPE", "multiple", ""], ["formControlName", "periodoCosecha", "multiple", ""], [1, "col-md-6"], [3, "value"], ["matInput", "", "formControlName", "cantidadPerdidaMazorcas", "autocomplete", "off"]], template: function PracticasAgricolasComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function PracticasAgricolasComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00BFLe interesar\u00EDa elaborar fertilizantes Organicos/Naturales?");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-select", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PracticasAgricolasComponent_mat_option_8_Template, 2, 2, "mat-option", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Plagas que Afectan el Cultivo");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-select", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PracticasAgricolasComponent_mat_option_14_Template, 2, 2, "mat-option", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Enfermedades que Afectan al Cultivo");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-select", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, PracticasAgricolasComponent_mat_option_19_Template, 2, 2, "mat-option", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Producto Natural O Qu\u00EDmico que aplic\u00F3 para Plagas");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Producto Natural o Qu\u00EDmico que aplic\u00F3 para Enfermedades");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-form-field", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Lleva registro del n\u00FAmero/porcentaje de Mazorca que Pierde anualmente por Monilla");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-select", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, PracticasAgricolasComponent_mat_option_35_Template, 2, 2, "mat-option", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, PracticasAgricolasComponent_div_36_Template, 5, 0, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "mat-divider", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h3");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\u00BFBajo qu\u00E9 criterio realiza las labores agr\u00EDcoles en su finca anualmente?");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-form-field", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Periodo Fertilizacion");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-select", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, PracticasAgricolasComponent_mat_option_45_Template, 2, 2, "mat-option", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-form-field", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Periodo Poda");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-select", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, PracticasAgricolasComponent_mat_option_50_Template, 2, 2, "mat-option", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-form-field", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Periodo Control Maleza");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-select", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, PracticasAgricolasComponent_mat_option_56_Template, 2, 2, "mat-option", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-form-field", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Periodo MIPE");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-select", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, PracticasAgricolasComponent_mat_option_61_Template, 2, 2, "mat-option", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-form-field", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Periodo Cosecha");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "mat-select", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, PracticasAgricolasComponent_mat_option_67_Template, 2, 2, "mat-option", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "div", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.practicasAgricolas);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.opciones);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.plagas);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.enfermedades);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.opciones);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.llevaRegistroPerdidas());
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inset", true);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.meses);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.meses);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.meses);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.meses);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.meses);
            }
        }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDivider"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"]], styles: [""] });
    return PracticasAgricolasComponent;
})();


/***/ }),

/***/ "./src/app/modules/formulario-linea-base/components/sections/preguntas-adicionales/preguntas-adicionales.component.ts":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/modules/formulario-linea-base/components/sections/preguntas-adicionales/preguntas-adicionales.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: PreguntasAdicionalesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreguntasAdicionalesComponent", function() { return PreguntasAdicionalesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");










function PreguntasAdicionalesComponent_mat_option_8_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const op_r4 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", op_r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](op_r4);
    }
}
function PreguntasAdicionalesComponent_mat_form_field_9_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Cuanto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function PreguntasAdicionalesComponent_mat_option_15_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const op_r5 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", op_r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](op_r5);
    }
}
function PreguntasAdicionalesComponent_mat_form_field_16_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Cuanto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
let PreguntasAdicionalesComponent = /*@__PURE__*/ (() => {
    class PreguntasAdicionalesComponent {
        constructor(formBuilder) {
            this.formBuilder = formBuilder;
            this.opciones = ["SI", "NO"];
            this.preguntasAdicionales = this.formBuilder.group({
                tieneAreaLibreParaSembrar: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                areaLibre: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                necesitaRehaReinjerto: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                cantidad: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
            });
        }
        ngOnInit() {
        }
        onSubmit() {
        }
        hayAreaLibre() {
            const hayAreaLibre = this.preguntasAdicionales.get('tieneAreaLibreParaSembrar').value;
            return hayAreaLibre === 'SI';
        }
        necesitaRehab() {
            const necesitaRehab = this.preguntasAdicionales.get('necesitaRehaReinjerto').value;
            return necesitaRehab === 'SI';
        }
        get seccion() {
            return {
                preguntas: {
                    tieneAreaLibreParaSembrar: {
                        respuesta: this.preguntasAdicionales.value.tieneAreaLibreParaSembrar,
                        preguntas: {
                            areaLibre: {
                                respuesta: this.preguntasAdicionales.value.areaLibre
                            }
                        }
                    },
                    necesitaRehaReinjerto: {
                        respuesta: this.preguntasAdicionales.value.necesitaRehaReinjerto,
                        preguntas: {
                            cantidad: {
                                respuesta: this.preguntasAdicionales.value.cantidad
                            }
                        }
                    }
                }
            };
        }
    }
    PreguntasAdicionalesComponent.ɵfac = function PreguntasAdicionalesComponent_Factory(t) { return new (t || PreguntasAdicionalesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
    PreguntasAdicionalesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PreguntasAdicionalesComponent, selectors: [["app-preguntas-adicionales"]], inputs: { parentForm: "parentForm" }, decls: 17, vars: 5, consts: [[3, "formGroup", "ngSubmit"], [1, "container-fluid"], [1, "row"], ["appearance", "outline", 1, "col-md-6"], ["formControlName", "tieneAreaLibreParaSembrar", "autocomplete", "off"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "col-md-6", "appearance", "outline", 4, "ngIf"], ["formControlName", "necesitaRehaReinjerto", "autocomplete", "off"], [3, "value"], ["matInput", "", "formControlName", "areaLibre", "autocomplete", "off"], ["matInput", "", "formControlName", "cantidad", "autocomplete", "off"]], template: function PreguntasAdicionalesComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function PreguntasAdicionalesComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Tiene area libre para sembrar");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-select", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PreguntasAdicionalesComponent_mat_option_8_Template, 2, 2, "mat-option", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PreguntasAdicionalesComponent_mat_form_field_9_Template, 4, 0, "mat-form-field", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Necesita rehab./reinjerto");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-select", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, PreguntasAdicionalesComponent_mat_option_15_Template, 2, 2, "mat-option", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, PreguntasAdicionalesComponent_mat_form_field_16_Template, 4, 0, "mat-form-field", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.preguntasAdicionales);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.opciones);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hayAreaLibre());
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.opciones);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.necesitaRehab());
            }
        }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatOption"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"]], styles: [""] });
    return PreguntasAdicionalesComponent;
})();


/***/ }),

/***/ "./src/app/modules/formulario-linea-base/components/sections/salud-seguridad-ocupacional/salud-seguridad-ocupacional.component.ts":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/modules/formulario-linea-base/components/sections/salud-seguridad-ocupacional/salud-seguridad-ocupacional.component.ts ***!
  \****************************************************************************************************************************************/
/*! exports provided: SaludSeguridadOcupacionalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaludSeguridadOcupacionalComponent", function() { return SaludSeguridadOcupacionalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");










function SaludSeguridadOcupacionalComponent_mat_option_8_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const op_r5 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", op_r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](op_r5);
    }
}
function SaludSeguridadOcupacionalComponent_mat_form_field_9_mat_option_4_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const acc_r7 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", acc_r7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](acc_r7);
    }
}
function SaludSeguridadOcupacionalComponent_mat_form_field_9_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Tipo Accidente");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SaludSeguridadOcupacionalComponent_mat_form_field_9_mat_option_4_Template, 2, 2, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.tiposAccidente);
    }
}
function SaludSeguridadOcupacionalComponent_mat_option_15_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const op_r8 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", op_r8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](op_r8);
    }
}
function SaludSeguridadOcupacionalComponent_div_16_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00BFCon que Producto?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function SaludSeguridadOcupacionalComponent_mat_option_22_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const op_r9 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", op_r9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](op_r9);
    }
}
let SaludSeguridadOcupacionalComponent = /*@__PURE__*/ (() => {
    class SaludSeguridadOcupacionalComponent {
        constructor(formBuilder) {
            this.formBuilder = formBuilder;
            this.opciones = ["SI", "NO"];
            this.tiposAccidente = ["LEVES", "GRAVES", "MUY GRAVES"];
            this.saludSeguridadOcupacional = this.formBuilder.group({
                accidentesLaboralesUltimoAnio: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                tipoAccidente: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                periodoIntoxicacionPresente: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                producto: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                centroSaludCercano: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
            });
        }
        ngOnInit() {
        }
        onSubmit() {
        }
        hayAccidente() {
            const hayAccidente = this.saludSeguridadOcupacional.get('accidentesLaboralesUltimoAnio').value;
            return hayAccidente === 'SI';
        }
        hayIntoxicado() {
            const hayIntoxicado = this.saludSeguridadOcupacional.get('periodoIntoxicacionPresente').value;
            return hayIntoxicado === 'SI';
        }
        get seccion() {
            return {
                preguntas: {
                    accidentesLaboralesUltimoAnio: {
                        respuesta: this.saludSeguridadOcupacional.value.accidentesLaboralesUltimoAnio,
                        preguntas: {
                            tipoAccidente: {
                                respuesta: this.saludSeguridadOcupacional.value.tipoAccidente
                            }
                        }
                    },
                    periodoIntoxicacionPresente: {
                        respuesta: this.saludSeguridadOcupacional.value.periodoIntoxicacionPresente,
                        preguntas: {
                            producto: {
                                respuesta: this.saludSeguridadOcupacional.value.producto
                            }
                        }
                    },
                    centroSaludCercano: {
                        respuesta: this.saludSeguridadOcupacional.value.centroSaludCercano
                    }
                }
            };
        }
        setValues(formularioLineaBase) {
            this.saludSeguridadOcupacional.get('accidentesLaboralesUltimoAnio')
                .setValue(formularioLineaBase.secciones.saludSeguridadOcupacional.preguntas.accidentesLaboralesUltimoAnio.respuesta);
            this.saludSeguridadOcupacional.get('tipoAccidente')
                .setValue(formularioLineaBase.secciones.saludSeguridadOcupacional.preguntas.accidentesLaboralesUltimoAnio.preguntas.tipoAccidente.respuesta);
            this.saludSeguridadOcupacional.get('periodoIntoxicacionPresente')
                .setValue(formularioLineaBase.secciones.saludSeguridadOcupacional.preguntas.periodoIntoxicacionPresente.respuesta);
            this.saludSeguridadOcupacional.get('producto')
                .setValue(formularioLineaBase.secciones.saludSeguridadOcupacional.preguntas.periodoIntoxicacionPresente.preguntas.producto.respuesta);
            this.saludSeguridadOcupacional.get('centroSaludCercano')
                .setValue(formularioLineaBase.secciones.saludSeguridadOcupacional.preguntas.centroSaludCercano.respuesta);
        }
    }
    SaludSeguridadOcupacionalComponent.ɵfac = function SaludSeguridadOcupacionalComponent_Factory(t) { return new (t || SaludSeguridadOcupacionalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
    SaludSeguridadOcupacionalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SaludSeguridadOcupacionalComponent, selectors: [["app-salud-seguridad-ocupacional"]], inputs: { parentForm: "parentForm" }, decls: 23, vars: 6, consts: [[3, "formGroup", "ngSubmit"], [1, "container-fluid"], [1, "row"], ["appearance", "outline", 1, "col-md-8"], ["formControlName", "accidentesLaboralesUltimoAnio"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "col-md-4", "appearance", "outline", 4, "ngIf"], ["appearance", "outline", 1, "col-md-12"], ["formControlName", "periodoIntoxicacionPresente"], ["class", "row", 4, "ngIf"], ["appearance", "outline", 1, "col-md-6"], ["formControlName", "centroSaludCercano"], [3, "value"], ["appearance", "outline", 1, "col-md-4"], ["formControlName", "tipoAccidente"], ["matInput", "", "formControlName", "producto"]], template: function SaludSeguridadOcupacionalComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SaludSeguridadOcupacionalComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Accidentes Laborales del Ultimo A\u00F1o en Finca");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-select", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SaludSeguridadOcupacionalComponent_mat_option_8_Template, 2, 2, "mat-option", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SaludSeguridadOcupacionalComponent_mat_form_field_9_Template, 5, 1, "mat-form-field", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Ha sufrido Usted, un Familiar o Trabajador alg\u00FAn Episodio de Intexicaci\u00F3n?");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-select", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, SaludSeguridadOcupacionalComponent_mat_option_15_Template, 2, 2, "mat-option", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, SaludSeguridadOcupacionalComponent_div_16_Template, 5, 0, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u00BFHay un centro de salud cercano?");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-select", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, SaludSeguridadOcupacionalComponent_mat_option_22_Template, 2, 2, "mat-option", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.saludSeguridadOcupacional);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.opciones);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hayAccidente());
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.opciones);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hayIntoxicado());
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.opciones);
            }
        }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatOption"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"]], styles: [""] });
    return SaludSeguridadOcupacionalComponent;
})();


/***/ }),

/***/ "./src/app/modules/formulario-linea-base/components/sections/servicios-basicos/servicios-basicos.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/modules/formulario-linea-base/components/sections/servicios-basicos/servicios-basicos.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: ServiciosBasicosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiciosBasicosComponent", function() { return ServiciosBasicosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");









function ServiciosBasicosComponent_mat_option_8_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const op_r2 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", op_r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](op_r2);
    }
}
function ServiciosBasicosComponent_mat_option_13_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const agu_r3 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", agu_r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](agu_r3);
    }
}
let ServiciosBasicosComponent = /*@__PURE__*/ (() => {
    class ServiciosBasicosComponent {
        constructor(formBuilder) {
            this.formBuilder = formBuilder;
            this.tiposAgua = ["POTABLE", "ENTUBADA", "POZO", "VERTIENTE NAT", "LLUVIA", "ESTERO", "RIO", "OTRO"];
            this.opciones = ["SI", "NO"];
            this.serviciosBasicos = this.formBuilder.group({
                energiaElectrica: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                tipoAguaConsumoFamiliar: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
            });
        }
        ngOnInit() {
        }
        onSubmit() {
        }
        get seccion() {
            return {
                preguntas: {
                    energiaElectrica: {
                        respuesta: this.serviciosBasicos.value.energiaElectrica
                    },
                    tipoAguaConsumoFamiliar: {
                        respuesta: this.serviciosBasicos.value.tipoAguaConsumoFamiliar
                    }
                }
            };
        }
        setValues(formularioLineaBase) {
            this.serviciosBasicos.get('energiaElectrica')
                .setValue(formularioLineaBase.secciones.serviciosBasicos.preguntas.energiaElectrica.respuesta);
            this.serviciosBasicos.get('tipoAguaConsumoFamiliar')
                .setValue(formularioLineaBase.secciones.serviciosBasicos.preguntas.tipoAguaConsumoFamiliar.respuesta);
        }
    }
    ServiciosBasicosComponent.ɵfac = function ServiciosBasicosComponent_Factory(t) { return new (t || ServiciosBasicosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
    ServiciosBasicosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServiciosBasicosComponent, selectors: [["app-servicios-basicos"]], inputs: { parentForm: "parentForm" }, decls: 14, vars: 3, consts: [[3, "formGroup", "ngSubmit"], [1, "container-fluid"], [1, "row"], ["appearance", "outline", 1, "col-md-6"], ["formControlName", "energiaElectrica", "autocomplete", "off"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "tipoAguaConsumoFamiliar", "autocomplete", "off"], [3, "value"]], template: function ServiciosBasicosComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ServiciosBasicosComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Cuenta con energia electrica");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-select", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ServiciosBasicosComponent_mat_option_8_Template, 2, 2, "mat-option", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "El agua para el consumo familiar es:");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-select", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ServiciosBasicosComponent_mat_option_13_Template, 2, 2, "mat-option", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.serviciosBasicos);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.opciones);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tiposAgua);
            }
        }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatOption"]], styles: [""] });
    return ServiciosBasicosComponent;
})();


/***/ }),

/***/ "./src/app/modules/formulario-linea-base/components/sections/venta/venta.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/formulario-linea-base/components/sections/venta/venta.component.ts ***!
  \********************************************************************************************/
/*! exports provided: VentaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VentaComponent", function() { return VentaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");










function VentaComponent_mat_option_8_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const op_r6 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", op_r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](op_r6);
    }
}
function VentaComponent_mat_form_field_9_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Por cuanto tiempo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function VentaComponent_mat_option_15_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const prop_r7 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", prop_r7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](prop_r7);
    }
}
function VentaComponent_mat_option_20_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const tipo_r8 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", tipo_r8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tipo_r8);
    }
}
function VentaComponent_mat_option_27_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const op_r9 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", op_r9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](op_r9);
    }
}
function VentaComponent_div_28_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Tipo de Registros Financieros");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "*Facturas, notas de venta, documentos varios, etc...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
let VentaComponent = /*@__PURE__*/ (() => {
    class VentaComponent {
        constructor(formBuilder) {
            this.formBuilder = formBuilder;
            this.propiedadesTransporte = ["PROPIO", "FLETADO"];
            this.tiposTransporte = ["CHIVA", "CAMIONETA", "MOTO", "CAMION", "OTRO"];
            this.opciones = ["SI", "NO"];
            this.venta = this.formBuilder.group({
                almacenaCacaoDespSecado: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                tiempoAlmacenadoCacao: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                propiedadTransporte: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                tipoTransporte: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                registroFinancieroFinca: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                tipoRegistrosFinancierosFinca: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
            });
        }
        ngOnInit() {
        }
        onSubmit() {
        }
        hayRegistro() {
            const hayRegistro = this.venta.get('registroFinancieroFinca').value;
            return hayRegistro === 'SI';
        }
        almacenaCacao() {
            const almacenaCacao = this.venta.get('almacenaCacaoDespSecado').value;
            return almacenaCacao === 'SI';
        }
        get seccion() {
            return {
                preguntas: {
                    almacenaCacaoDespSecado: {
                        respuesta: this.venta.value.almacenaCacaoDespSecado,
                        preguntas: {
                            tiempoAlmacenadoCacao: {
                                respuesta: this.venta.value.tiempoAlmacenadoCacao
                            }
                        }
                    },
                    propiedadTransporte: {
                        respuesta: this.venta.value.propiedadTransporte
                    },
                    tipoTransporte: {
                        respuesta: this.venta.value.tipoTransporte
                    },
                    registroFinancieroFinca: {
                        respuesta: this.venta.value.registroFinancieroFinca
                    },
                    tipoRegistrosFinancierosFinca: {
                        respuesta: this.venta.value.tipoRegistrosFinancierosFinca
                    }
                }
            };
        }
        setValues(formularioLineaBase) {
            this.venta.get('almacenaCacaoDespSecado')
                .setValue(formularioLineaBase.secciones.venta.preguntas.almacenaCacaoDespSecado.respuesta);
            this.venta.get('tiempoAlmacenadoCacao')
                .setValue(formularioLineaBase.secciones.venta.preguntas.almacenaCacaoDespSecado.preguntas.tiempoAlmacenadoCacao.respuesta);
            this.venta.get('propiedadTransporte')
                .setValue(formularioLineaBase.secciones.venta.preguntas.propiedadTransporte.respuesta);
            this.venta.get('tipoTransporte')
                .setValue(formularioLineaBase.secciones.venta.preguntas.tipoTransporte.respuesta);
            this.venta.get('registroFinancieroFinca')
                .setValue(formularioLineaBase.secciones.venta.preguntas.registroFinancieroFinca.respuesta);
            this.venta.get('tipoRegistrosFinancierosFinca')
                .setValue(formularioLineaBase.secciones.venta.preguntas.tipoRegistrosFinancierosFinca.respuesta);
        }
    }
    VentaComponent.ɵfac = function VentaComponent_Factory(t) { return new (t || VentaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
    VentaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VentaComponent, selectors: [["app-venta"]], inputs: { parentForm: "parentForm" }, decls: 29, vars: 7, consts: [[3, "formGroup", "ngSubmit"], [1, "container-fluid"], [1, "row"], ["appearance", "outline", 1, "col-md-6"], ["formControlName", "almacenaCacaoDespSecado", "autocomplete", "off"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "col-md-6", "appearance", "outline", 4, "ngIf"], ["formControlName", "propiedadTransporte", "autocomplete", "off"], ["formControlName", "tipoTransporte", "autocomplete", "off"], [1, "col-md-12"], ["appearance", "outline"], ["formControlName", "registroFinancieroFinca", "autocomplete", "off"], ["class", "row", 4, "ngIf"], [3, "value"], ["matInput", "", "formControlName", "tiempoAlmacenadoCacao", "autocomplete", "off"], ["matInput", "", "formControlName", "tipoRegistrosFinancierosFinca", "autocomplete", "off"], [1, "textbellow"]], template: function VentaComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function VentaComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00BFAlmacena el cacao despues del secado?");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-select", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, VentaComponent_mat_option_8_Template, 2, 2, "mat-option", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, VentaComponent_mat_form_field_9_Template, 4, 0, "mat-form-field", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Propiedad del transporte");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-select", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, VentaComponent_mat_option_15_Template, 2, 2, "mat-option", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Tipo de transporte");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-select", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, VentaComponent_mat_option_20_Template, 2, 2, "mat-option", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-form-field", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u00BFCuenta con un Registro de costos, gastos y actividades de la finca?");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-select", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, VentaComponent_mat_option_27_Template, 2, 2, "mat-option", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, VentaComponent_div_28_Template, 8, 0, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.venta);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.opciones);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.almacenaCacao());
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.propiedadesTransporte);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tiposTransporte);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.opciones);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hayRegistro());
            }
        }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatOption"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"]], styles: [".textbellow[_ngcontent-%COMP%] {\n  margin-top: -20px;\n  margin-left: 5px;\n  color: gray;\n  font-size: small;\n}"] });
    return VentaComponent;
})();


/***/ }),

/***/ "./src/app/modules/formulario-linea-base/formulario-linea-base.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/formulario-linea-base/formulario-linea-base.module.ts ***!
  \*******************************************************************************/
/*! exports provided: FormularioLineaBaseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormularioLineaBaseModule", function() { return FormularioLineaBaseModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _components_formularios_linea_base_formularios_linea_base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/formularios-linea-base/formularios-linea-base.component */ "./src/app/modules/formulario-linea-base/components/formularios-linea-base/formularios-linea-base.component.ts");
/* harmony import */ var _formulario_linea_base_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./formulario-linea-base.routing */ "./src/app/modules/formulario-linea-base/formulario-linea-base.routing.ts");
/* harmony import */ var src_app_demo_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/demo-material-module */ "./src/app/demo-material-module.ts");
/* harmony import */ var _components_edit_linea_base_edit_linea_base_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/edit-linea-base/edit-linea-base.component */ "./src/app/modules/formulario-linea-base/components/edit-linea-base/edit-linea-base.component.ts");
/* harmony import */ var _components_sections_informacion_familia_informacion_familia_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/sections/informacion-familia/informacion-familia.component */ "./src/app/modules/formulario-linea-base/components/sections/informacion-familia/informacion-familia.component.ts");
/* harmony import */ var _components_sections_practicas_agricolas_practicas_agricolas_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/sections/practicas-agricolas/practicas-agricolas.component */ "./src/app/modules/formulario-linea-base/components/sections/practicas-agricolas/practicas-agricolas.component.ts");
/* harmony import */ var _components_sections_salud_seguridad_ocupacional_salud_seguridad_ocupacional_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/sections/salud-seguridad-ocupacional/salud-seguridad-ocupacional.component */ "./src/app/modules/formulario-linea-base/components/sections/salud-seguridad-ocupacional/salud-seguridad-ocupacional.component.ts");
/* harmony import */ var _components_sections_cosecha_cosecha_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/sections/cosecha/cosecha.component */ "./src/app/modules/formulario-linea-base/components/sections/cosecha/cosecha.component.ts");
/* harmony import */ var _components_sections_venta_venta_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/sections/venta/venta.component */ "./src/app/modules/formulario-linea-base/components/sections/venta/venta.component.ts");
/* harmony import */ var _components_sections_nivel_asociatividad_nivel_asociatividad_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/sections/nivel-asociatividad/nivel-asociatividad.component */ "./src/app/modules/formulario-linea-base/components/sections/nivel-asociatividad/nivel-asociatividad.component.ts");
/* harmony import */ var _components_sections_condiciones_laborales_condiciones_laborales_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/sections/condiciones-laborales/condiciones-laborales.component */ "./src/app/modules/formulario-linea-base/components/sections/condiciones-laborales/condiciones-laborales.component.ts");
/* harmony import */ var _components_sections_servicios_basicos_servicios_basicos_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/sections/servicios-basicos/servicios-basicos.component */ "./src/app/modules/formulario-linea-base/components/sections/servicios-basicos/servicios-basicos.component.ts");
/* harmony import */ var _components_sections_conservacion_recursos_manejo_desechos_conservacion_recursos_manejo_desechos_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/sections/conservacion-recursos-manejo-desechos/conservacion-recursos-manejo-desechos.component */ "./src/app/modules/formulario-linea-base/components/sections/conservacion-recursos-manejo-desechos/conservacion-recursos-manejo-desechos.component.ts");
/* harmony import */ var _components_sections_incrementar_productividad_incrementar_productividad_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/sections/incrementar-productividad/incrementar-productividad.component */ "./src/app/modules/formulario-linea-base/components/sections/incrementar-productividad/incrementar-productividad.component.ts");
/* harmony import */ var _components_sections_mejorar_calidad_cacao_mejorar_calidad_cacao_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/sections/mejorar-calidad-cacao/mejorar-calidad-cacao.component */ "./src/app/modules/formulario-linea-base/components/sections/mejorar-calidad-cacao/mejorar-calidad-cacao.component.ts");
/* harmony import */ var _components_sections_diversificacion_ingresos_diversificacion_ingresos_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/sections/diversificacion-ingresos/diversificacion-ingresos.component */ "./src/app/modules/formulario-linea-base/components/sections/diversificacion-ingresos/diversificacion-ingresos.component.ts");
/* harmony import */ var _components_sections_preguntas_adicionales_preguntas_adicionales_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/sections/preguntas-adicionales/preguntas-adicionales.component */ "./src/app/modules/formulario-linea-base/components/sections/preguntas-adicionales/preguntas-adicionales.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _components_sections_firma_agricultor_firma_agricultor_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/sections/firma-agricultor/firma-agricultor.component */ "./src/app/modules/formulario-linea-base/components/sections/firma-agricultor/firma-agricultor.component.ts");





















// import { PriorizacionParticipacionProyectosComponent } from './components/sections/priorizacion-participacion-proyectos/priorizacion-participacion-proyectos.component';




// import { CanvasComponent } from 'src/app/shared/canvas/canvas.component';
let FormularioLineaBaseModule = /*@__PURE__*/ (() => {
    class FormularioLineaBaseModule {
    }
    FormularioLineaBaseModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FormularioLineaBaseModule });
    FormularioLineaBaseModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FormularioLineaBaseModule_Factory(t) { return new (t || FormularioLineaBaseModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                src_app_demo_material_module__WEBPACK_IMPORTED_MODULE_6__["DemoMaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_21__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_formulario_linea_base_routing__WEBPACK_IMPORTED_MODULE_5__["FormulariosLineaBaseRoutes"])
            ]] });
    return FormularioLineaBaseModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FormularioLineaBaseModule, { declarations: [_components_formularios_linea_base_formularios_linea_base_component__WEBPACK_IMPORTED_MODULE_4__["FormulariosLineaBaseComponent"],
            _components_edit_linea_base_edit_linea_base_component__WEBPACK_IMPORTED_MODULE_7__["EditLineaBaseComponent"],
            _components_sections_informacion_familia_informacion_familia_component__WEBPACK_IMPORTED_MODULE_8__["InformacionFamiliaComponent"],
            _components_sections_practicas_agricolas_practicas_agricolas_component__WEBPACK_IMPORTED_MODULE_9__["PracticasAgricolasComponent"],
            _components_sections_salud_seguridad_ocupacional_salud_seguridad_ocupacional_component__WEBPACK_IMPORTED_MODULE_10__["SaludSeguridadOcupacionalComponent"],
            _components_sections_cosecha_cosecha_component__WEBPACK_IMPORTED_MODULE_11__["CosechaComponent"],
            _components_sections_venta_venta_component__WEBPACK_IMPORTED_MODULE_12__["VentaComponent"],
            _components_sections_nivel_asociatividad_nivel_asociatividad_component__WEBPACK_IMPORTED_MODULE_13__["NivelAsociatividadComponent"],
            _components_sections_condiciones_laborales_condiciones_laborales_component__WEBPACK_IMPORTED_MODULE_14__["CondicionesLaboralesComponent"],
            _components_sections_servicios_basicos_servicios_basicos_component__WEBPACK_IMPORTED_MODULE_15__["ServiciosBasicosComponent"],
            _components_sections_conservacion_recursos_manejo_desechos_conservacion_recursos_manejo_desechos_component__WEBPACK_IMPORTED_MODULE_16__["ConservacionRecursosManejoDesechosComponent"],
            _components_sections_incrementar_productividad_incrementar_productividad_component__WEBPACK_IMPORTED_MODULE_17__["IncrementarProductividadComponent"],
            _components_sections_mejorar_calidad_cacao_mejorar_calidad_cacao_component__WEBPACK_IMPORTED_MODULE_18__["MejorarCalidadCacaoComponent"],
            _components_sections_diversificacion_ingresos_diversificacion_ingresos_component__WEBPACK_IMPORTED_MODULE_19__["DiversificacionIngresosComponent"],
            _components_sections_preguntas_adicionales_preguntas_adicionales_component__WEBPACK_IMPORTED_MODULE_20__["PreguntasAdicionalesComponent"],
            _components_sections_firma_agricultor_firma_agricultor_component__WEBPACK_IMPORTED_MODULE_22__["FirmaAgricultorComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_demo_material_module__WEBPACK_IMPORTED_MODULE_6__["DemoMaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_21__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
})();


/***/ }),

/***/ "./src/app/modules/formulario-linea-base/formulario-linea-base.routing.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/formulario-linea-base/formulario-linea-base.routing.ts ***!
  \********************************************************************************/
/*! exports provided: FormulariosLineaBaseRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormulariosLineaBaseRoutes", function() { return FormulariosLineaBaseRoutes; });
/* harmony import */ var _components_edit_linea_base_edit_linea_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/edit-linea-base/edit-linea-base.component */ "./src/app/modules/formulario-linea-base/components/edit-linea-base/edit-linea-base.component.ts");
/* harmony import */ var _components_formularios_linea_base_formularios_linea_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/formularios-linea-base/formularios-linea-base.component */ "./src/app/modules/formulario-linea-base/components/formularios-linea-base/formularios-linea-base.component.ts");


const FormulariosLineaBaseRoutes = [
    {
        path: '',
        component: _components_formularios_linea_base_formularios_linea_base_component__WEBPACK_IMPORTED_MODULE_1__["FormulariosLineaBaseComponent"],
        data: {
            title: 'Formularios Línea Base',
        }
    },
    {
        path: 'crear-linea-base',
        component: _components_edit_linea_base_edit_linea_base_component__WEBPACK_IMPORTED_MODULE_0__["EditLineaBaseComponent"],
        data: {
            title: 'Nuevo Formulario de Línea Base'
        }
    },
    {
        path: 'edit-linea-base/:id',
        component: _components_edit_linea_base_edit_linea_base_component__WEBPACK_IMPORTED_MODULE_0__["EditLineaBaseComponent"],
        data: {
            title: 'Editar Formulario de Línea Base'
        }
    }
];


/***/ })

}]);