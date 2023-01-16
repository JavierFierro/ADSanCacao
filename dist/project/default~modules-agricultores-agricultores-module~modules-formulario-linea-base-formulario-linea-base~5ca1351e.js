(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~modules-agricultores-agricultores-module~modules-formulario-linea-base-formulario-linea-base~5ca1351e"],{

/***/ "./node_modules/ngx-csv-parser/__ivy_ngcc__/fesm2015/ngx-csv-parser.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/ngx-csv-parser/__ivy_ngcc__/fesm2015/ngx-csv-parser.js ***!
  \*****************************************************************************/
/*! exports provided: NgxCSVParserError, NgxCsvParser, NgxCsvParserComponent, NgxCsvParserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxCSVParserError", function() { return NgxCSVParserError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxCsvParser", function() { return NgxCsvParser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxCsvParserComponent", function() { return NgxCsvParserComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxCsvParserModule", function() { return NgxCsvParserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/ngx-csv-parser/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





class NgxCSVParserError {
}

let NgxCsvParser = class NgxCsvParser {
    constructor() {
        this.defaultCSVParserConfig = {
            header: true,
            delimiter: ','
        };
    }
    parse(csvFile, config) {
        config = Object.assign(Object.assign({}, this.defaultCSVParserConfig), config);
        const ngxCSVParserObserver = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
            try {
                let csvRecords = null;
                if (this.isCSVFile(csvFile)) {
                    const reader = new FileReader();
                    reader.readAsText(csvFile);
                    reader.onload = () => {
                        const csvData = reader.result;
                        const csvRecordsArray = this.csvStringToArray(csvData.trim(), config.delimiter);
                        const headersRow = this.getHeaderArray(csvRecordsArray);
                        csvRecords = this.getDataRecordsArrayFromCSVFile(csvRecordsArray, headersRow.length, config);
                        observer.next(csvRecords);
                        observer.complete();
                    };
                    reader.onerror = () => {
                        this.badCSVDataFormatErrorHandler(observer);
                    };
                }
                else {
                    this.notCSVFileErrorHandler(observer);
                }
            }
            catch (error) {
                this.unknownCSVParserErrorHandler(observer);
            }
        });
        return ngxCSVParserObserver;
    }
    csvStringToArray(csvDataString, delimiter) {
        const regexPattern = new RegExp((`(\\${delimiter}|\\r?\\n|\\r|^)(?:\"((?:\\\\.|\"\"|[^\\\\\"])*)\"|([^\\${delimiter}\"\\r\\n]*))`), "gi");
        let matchedPatternArray = regexPattern.exec(csvDataString);
        const resultCSV = [[]];
        while (matchedPatternArray) {
            if (matchedPatternArray[1].length && matchedPatternArray[1] !== delimiter) {
                resultCSV.push([]);
            }
            const cleanValue = matchedPatternArray[2] ?
                matchedPatternArray[2].replace(new RegExp("[\\\\\"](.)", "g"), '$1') : matchedPatternArray[3];
            resultCSV[resultCSV.length - 1].push(cleanValue);
            matchedPatternArray = regexPattern.exec(csvDataString);
        }
        return resultCSV;
    }
    getDataRecordsArrayFromCSVFile(csvRecordsArray, headerLength, config) {
        const dataArr = [];
        const headersArray = csvRecordsArray[0];
        const startingRowToParseData = config.header ? 1 : 0;
        for (let i = startingRowToParseData; i < csvRecordsArray.length; i++) {
            const data = csvRecordsArray[i];
            if (data.length === headerLength && config.header) {
                const csvRecord = {};
                for (let j = 0; j < data.length; j++) {
                    if ((data[j] === undefined) || (data[j] === null)) {
                        csvRecord[headersArray[j]] = "";
                    }
                    else {
                        csvRecord[headersArray[j]] = data[j].trim();
                    }
                }
                dataArr.push(csvRecord);
            }
            else {
                dataArr.push(data);
            }
        }
        return dataArr;
    }
    isCSVFile(file) {
        return file.name.toLowerCase().endsWith('.csv');
    }
    getHeaderArray(csvRecordsArr) {
        const headers = csvRecordsArr[0];
        const headerArray = [];
        for (const header of headers) {
            headerArray.push(header);
        }
        return headerArray;
    }
    notCSVFileErrorHandler(observer) {
        const ngcCSVParserError = this.errorBuilder('NOT_A_CSV_FILE', 'Selected file is not a csv File Type.', 2);
        observer.error(ngcCSVParserError);
    }
    unknownCSVParserErrorHandler(observer) {
        const ngcCSVParserError = this.errorBuilder('UNKNOWN_ERROR', 'Unknown error. Please refer to official documentation for library usage.', 404);
        observer.error(ngcCSVParserError);
    }
    badCSVDataFormatErrorHandler(observer) {
        const ngcCSVParserError = this.errorBuilder('BAD_CSV_DATA_FORMAT', 'Unable to parse CSV File.', 1);
        observer.error(ngcCSVParserError);
    }
    errorBuilder(type, message, code) {
        const ngcCSVParserError = new NgxCSVParserError();
        ngcCSVParserError.type = type;
        ngcCSVParserError.message = message;
        ngcCSVParserError.code = code;
        return ngcCSVParserError;
    }
};
NgxCsvParser.ɵfac = function NgxCsvParser_Factory(t) { return new (t || NgxCsvParser)(); };
NgxCsvParser.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function NgxCsvParser_Factory() { return new NgxCsvParser(); }, token: NgxCsvParser, providedIn: "root" });
class CSVParserConfig {
    constructor() { }
}

let NgxCsvParserComponent = class NgxCsvParserComponent {
    constructor() { }
    ngOnInit() {
    }
};
NgxCsvParserComponent.ɵfac = function NgxCsvParserComponent_Factory(t) { return new (t || NgxCsvParserComponent)(); };
NgxCsvParserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NgxCsvParserComponent, selectors: [["lib-ngx-csv-parser"]], decls: 2, vars: 0, template: function NgxCsvParserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " ngx-csv-parser works! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });

let NgxCsvParserModule = class NgxCsvParserModule {
};
NgxCsvParserModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NgxCsvParserModule });
NgxCsvParserModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function NgxCsvParserModule_Factory(t) { return new (t || NgxCsvParserModule)(); }, providers: [NgxCsvParser], imports: [[]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxCsvParser, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxCsvParserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'lib-ngx-csv-parser',
                template: `
    <p>
      ngx-csv-parser works!
    </p>
  `
            }]
    }], function () { return []; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgxCsvParserModule, { declarations: [NgxCsvParserComponent], exports: [NgxCsvParserComponent] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxCsvParserModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [NgxCsvParserComponent],
                imports: [],
                providers: [NgxCsvParser],
                exports: [NgxCsvParserComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of ngx-csv-parser
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ngx-csv-parser.js.map

/***/ }),

/***/ "./node_modules/ngx-csv-parser/node_modules/tslib/tslib.es6.js":
/*!*********************************************************************!*\
  !*** ./node_modules/ngx-csv-parser/node_modules/tslib/tslib.es6.js ***!
  \*********************************************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/modules/core/services/importaciones/importacion-agricultor.service.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/core/services/importaciones/importacion-agricultor.service.ts ***!
  \***************************************************************************************/
/*! exports provided: ImportacionAgricultorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportacionAgricultorService", function() { return ImportacionAgricultorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_interfaces_tecnico__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/interfaces/tecnico */ "./src/app/interfaces/tecnico.ts");
/* harmony import */ var src_environments_mappers_agricultor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/mappers/agricultor */ "./src/environments/mappers/agricultor.ts");
/* harmony import */ var ngx_csv_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-csv-parser */ "./node_modules/ngx-csv-parser/__ivy_ngcc__/fesm2015/ngx-csv-parser.js");
/* harmony import */ var _agriculor_agricultor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../agriculor/agricultor.service */ "./src/app/modules/core/services/agriculor/agricultor.service.ts");
/* harmony import */ var _tecnico_tecnico_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tecnico/tecnico.service */ "./src/app/modules/core/services/tecnico/tecnico.service.ts");








class ImportacionAgricultorService {
    constructor(ngxCsvParser, agricultorService, tecnicoService) {
        this.ngxCsvParser = ngxCsvParser;
        this.agricultorService = agricultorService;
        this.tecnicoService = tecnicoService;
    }
    importAllFormularios(file, header, delimeter) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.ngxCsvParser.parse(file[0], { header: header, delimiter: delimeter })
                    .subscribe((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    try {
                        const docLines = result;
                        for (let index = 2; index < docLines.length; index++) {
                            yield this.importFormulario(docLines[1], docLines[index]);
                        }
                        resolve();
                    }
                    catch (error) {
                        console.log(error);
                        reject(error);
                    }
                }), (error) => {
                    console.log('Error', error);
                    reject(error);
                });
            });
        });
    }
    importFormulario(headers, values) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const agricultor = yield this.getAgricultor(headers, values);
                this.fillSections(headers, values, agricultor);
                this.fillMultipleOptions(headers, values, agricultor);
                yield this.agricultorService.set(agricultor);
            }
            catch (e) {
                console.log(e);
                throw (e);
            }
        });
    }
    getAgricultor(headers, values) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const id = this.getValueByHeaderName(headers, values, "id");
            const agricultor = yield this.initAgricultor(id);
            return agricultor;
        });
    }
    getValueByHeaderName(headers, values, headerName) {
        for (let i = 0; i < headers.length; i++) {
            if (headers[i].toUpperCase() === headerName.toUpperCase()) {
                return values[i];
            }
        }
        return "";
    }
    fillSections(headers, values, agricultor) {
        const mockAgricultor = agricultor;
        for (let section of Object.keys(agricultor.secciones)) {
            if (mockAgricultor["secciones"][section]["preguntas"] != undefined) {
                for (let question of Object.keys(mockAgricultor["secciones"][section]["preguntas"])) {
                    this.fillQuestions(headers, values, question, mockAgricultor["secciones"][section]["preguntas"]);
                }
            }
            if (mockAgricultor["secciones"][section]["secciones"] != undefined) {
                const lastObject = mockAgricultor["secciones"][section];
                this.fillSections(headers, values, lastObject);
            }
        }
    }
    fillQuestions(headers, values, question, lastObject) {
        for (let response of Object.keys(lastObject[question])) {
            if (response === "respuesta") {
                const mockMapper = src_environments_mappers_agricultor__WEBPACK_IMPORTED_MODULE_3__["agricultorMapper"];
                const code = mockMapper[question]["codigo"];
                let value = this.getValueByHeaderName(headers, values, code);
                if (Array.isArray(lastObject[question][response]) && value != undefined) {
                    const arrayValue = value.split(',');
                    lastObject[question][response] = arrayValue;
                }
                else {
                    lastObject[question][response] = value;
                }
            }
            else if (response === "preguntas") {
                const newLastObject = lastObject[question][response];
                for (let question in newLastObject) {
                    this.fillQuestions(headers, values, question, newLastObject);
                }
            }
            else if (response === "arreglo") {
                this.pickQuestionWithDynamicArray(headers, values, lastObject[question][response], question);
            }
        }
    }
    pickQuestionWithDynamicArray(headers, values, dynamicArray, question) {
        let codes = [];
        switch (question) {
            case "viejosInjertados":
                codes = ['CAC42_AVI1', 'CAC13_ECVIN', 'CAC43_AVI2', 'CAC44_EVI2'];
                const questionsVI = ["areaViejoInjertado", "edadViejoInjertado"];
                this.fillDynamicArrayWithExcel(headers, values, dynamicArray, questionsVI, codes, questionsVI.length);
                break;
            case "nuevosClones":
                codes = ['CAC45_ANC1', 'CAC15_NCED', 'CAC46_ANC2', 'CAC47_ENC2', 'CAC48_ANC3', 'CAC49_ENC3'];
                const questionsNV = ["areaNuevosClones", "edadNuevosClones"];
                this.fillDynamicArrayWithExcel(headers, values, dynamicArray, questionsNV, codes, questionsNV.length);
                break;
        }
    }
    fillDynamicArray(headers, values, dynamicArray, arrayOfQuestions, codes, numberOfFields) {
        let hayCampos = true;
        let countOfFields = 1;
        while (hayCampos) {
            let viejoInjertado = {};
            for (let question of arrayOfQuestions) {
                const mockMapper = src_environments_mappers_agricultor__WEBPACK_IMPORTED_MODULE_3__["agricultorMapper"];
                const codeInDocument = mockMapper[question]["codigo"] + countOfFields.toString();
                const value = this.getValueByHeaderName(headers, values, codeInDocument);
                if (value === "" || countOfFields === 10) {
                    hayCampos = false;
                    break;
                }
                else {
                    viejoInjertado[question] = {};
                    viejoInjertado[question]["respuesta"] = value;
                }
            }
            if (hayCampos) {
                dynamicArray.push(viejoInjertado);
            }
            countOfFields++;
        }
    }
    fillDynamicArrayWithExcel(headers, values, dynamicArray, arrayOfQuestions, codes, numberOfFields) {
        let position = 0;
        while (position < codes.length) {
            let object = {};
            for (let question of arrayOfQuestions) {
                const value = this.getValueByHeaderName(headers, values, codes[position]);
                object[question] = {};
                object[question]["respuesta"] = value;
                position++;
            }
            dynamicArray.push(object);
        }
    }
    fillMultipleOptions(headers, values, agricultor) {
        const celulares = ['SE06_CEL1', 'SE07_CEL2'];
        const asociadoPolicultivo = ['FIN10_MAIZ', 'FIN11_NAR', 'FIN12_PLAT', 'FIN14_MANI', 'FIN13_OTRO'];
        const variedades = ['CAC17_NC103', 'CAC18_NC96', 'CAC19_NC95', 'CAC50_NC800', 'CAC51_NC801', 'CAC20_NCOTR', 'CAC52_ESP', 'CAC21_NCNS'];
        for (let index = 0; index < headers.length; index++) {
            this.fillArray(headers[index], values[index], celulares, agricultor.secciones.datosPersonales.preguntas.celulares.respuesta);
            this.fillArray(headers[index], values[index], asociadoPolicultivo, agricultor.secciones.hectareaje.preguntas.cultivoCacao.preguntas.asociadoConTiene.respuesta);
            this.fillArray(headers[index], values[index], variedades, agricultor.secciones.cacaoNacionalNuevosClones.preguntas.tipoVariedad.respuesta);
        }
    }
    fillArray(header, value, codigos, arreglo) {
        for (let codigo of codigos) {
            if (codigo === header) {
                arreglo.push(value);
                return true;
            }
        }
        return false;
    }
    initAgricultor(agricultorId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let agricultor = yield this.agricultorService.get(agricultorId);
            if (agricultor === undefined) {
                const newAgricultor = {
                    id: agricultorId,
                    secciones: {
                        datosPersonales: {
                            preguntas: {
                                cedula: {
                                    respuesta: ""
                                },
                                nombre: {
                                    respuesta: ""
                                },
                                estado: {
                                    respuesta: ""
                                },
                                fechaNacimiento: {
                                    respuesta: new Date()
                                },
                                genero: {
                                    respuesta: ""
                                },
                                estadoCivil: {
                                    respuesta: ""
                                },
                                nivelEducacion: {
                                    respuesta: ""
                                },
                                celulares: {
                                    respuesta: []
                                },
                                telefono: {
                                    respuesta: ""
                                },
                                isDiscapacitado: {
                                    respuesta: ""
                                },
                                tecnico: {
                                    respuesta: ""
                                },
                                fechaVisita: {
                                    respuesta: new Date()
                                },
                                viaPrincipalComunicacion: {
                                    respuesta: ""
                                },
                                comentariosComunicacion: {
                                    respuesta: ""
                                }
                            }
                        },
                        informacionFinca: {
                            preguntas: {
                                provincia: {
                                    respuesta: ""
                                },
                                canton: {
                                    respuesta: ""
                                },
                                parroquia: {
                                    respuesta: ""
                                },
                                recinto: {
                                    respuesta: ""
                                },
                                nombreFinca: {
                                    respuesta: ""
                                },
                                descripcionLlegarFinca: {
                                    respuesta: ""
                                },
                                casaProductorDentroFinca: {
                                    respuesta: "",
                                    preguntas: {
                                        descripcionLlegarCasa: {
                                            respuesta: ""
                                        }
                                    }
                                }
                            }
                        },
                        hectareaje: {
                            preguntas: {
                                dimensionTotalFinca: {
                                    respuesta: ""
                                },
                                terreno: {
                                    respuesta: ""
                                },
                                cultivoCacao: {
                                    respuesta: "",
                                    preguntas: {
                                        asociadoConTiene: {
                                            respuesta: [],
                                            preguntas: {
                                                otrosEspecifique: {
                                                    respuesta: ""
                                                }
                                            }
                                        }
                                    }
                                },
                                areaNetaCacao: {
                                    respuesta: ""
                                },
                                distanciaPlantas: {
                                    respuesta: ""
                                },
                                plantasXHectareas: {
                                    respuesta: ""
                                },
                                tipoUbicacionZona: {
                                    respuesta: ""
                                },
                                zonaProtegida: {
                                    respuesta: "",
                                    preguntas: {
                                        otraZona: {
                                            respuesta: ""
                                        }
                                    }
                                }
                            }
                        },
                        cacaoCNN: {
                            preguntas: {
                                areaTotalCNN: {
                                    respuesta: ""
                                },
                                areaProduccion: {
                                    respuesta: ""
                                },
                                edadCacaoProductivo: {
                                    respuesta: ""
                                },
                                areaRecienSembrada: {
                                    respuesta: ""
                                },
                                edadCacaoReciente: {
                                    respuesta: ""
                                },
                                produccionAnioAnteriorCacaoCNN: {
                                    respuesta: ""
                                },
                                precioPromedio: {
                                    respuesta: ""
                                },
                                tieneCacaoImproductivo: {
                                    respuesta: "",
                                    preguntas: {
                                        cuantasHectareasImproductivo: {
                                            respuesta: ""
                                        }
                                    }
                                }
                            }
                        },
                        cacaoNacional: {
                            preguntas: {
                                areaTotalNacional: {
                                    respuesta: ""
                                },
                                areaTotalNacionalViejo: {
                                    respuesta: ""
                                },
                                edadCacaoViejo: {
                                    respuesta: ""
                                },
                                brotesBasales: {
                                    respuesta: ""
                                },
                                arbolesElite: {
                                    respuesta: ""
                                },
                                areaTotalViejoInjertado: {
                                    respuesta: ""
                                },
                                viejosInjertados: {
                                    arreglo: []
                                },
                                areaTotalNuevosClones: {
                                    respuesta: ""
                                },
                                nuevosClones: {
                                    arreglo: []
                                },
                                produccionAnioAnteriorCacaoNacional: {
                                    respuesta: ""
                                },
                                precioPromedioXCacao: {
                                    respuesta: ""
                                }
                            }
                        },
                        cacaoNacionalNuevosClones: {
                            preguntas: {
                                usoAnteriorAreaNueva: {
                                    respuesta: "",
                                    preguntas: {
                                        otroUsoAnteriorAreaNueva: {
                                            respuesta: ""
                                        }
                                    }
                                },
                                tipoVariedad: {
                                    respuesta: [],
                                    preguntas: {
                                        especifiqueOtros: {
                                            respuesta: ""
                                        }
                                    }
                                },
                                variedadesSembradasCalificacion: {
                                    respuesta: ""
                                },
                                plantulasCondicionesEdafoclimaticas: {
                                    respuesta: ""
                                },
                                plantulasRendimiento: {
                                    respuesta: ""
                                },
                                plantulasVigorPlanta: {
                                    respuesta: ""
                                },
                                plantulasResistenciaEnfermedades: {
                                    respuesta: ""
                                }
                            }
                        },
                        origenPlantas: {
                            preguntas: {
                                nombreVivero: {
                                    respuesta: ""
                                },
                                ubicacionVivero: {
                                    respuesta: ""
                                },
                                encargadoPropagacion: {
                                    respuesta: "",
                                    preguntas: {
                                        otroEncargadoPropagacion: {
                                            respuesta: ""
                                        }
                                    }
                                },
                                tipoConocimiento: {
                                    respuesta: ""
                                },
                                entidadDonacion: {
                                    respuesta: ""
                                },
                                cantidadPlantasRecibidas: {
                                    respuesta: ""
                                },
                                queCultivoPoda: {
                                    respuesta: ""
                                }
                            }
                        },
                        priorizacionParticipacionProyectos: {
                            preguntas: {
                                incrementarProductividad: {
                                    respuesta: "",
                                    preguntas: {
                                        recibirPlantasCacaoNacional: {
                                            respuesta: "",
                                            preguntas: {
                                                tieneAreaLibreParaSembrar: {
                                                    respuesta: "",
                                                    preguntas: {
                                                        areaLibre: {
                                                            respuesta: ""
                                                        }
                                                    }
                                                },
                                                necesitaRehaReinjerto: {
                                                    respuesta: "",
                                                    preguntas: {
                                                        cantidad: {
                                                            respuesta: ""
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        aprenderElabProductosNaturales: {
                                            respuesta: ""
                                        }
                                    }
                                },
                                mejorarCalidadCacao: {
                                    respuesta: "",
                                    preguntas: {
                                        bandejasCajonesFermentacion: {
                                            respuesta: "",
                                            preguntas: {
                                                dispuestoHacerloPropiaCuenta: {
                                                    respuesta: ""
                                                }
                                            }
                                        },
                                        tendalesElevadosCania: {
                                            respuesta: ""
                                        },
                                        secadorasComunitarias: {
                                            respuesta: "",
                                            preguntas: {
                                                contarAgrupacionParaProyecto: {
                                                    respuesta: ""
                                                }
                                            }
                                        }
                                    }
                                },
                                diversificacionIngresos: {
                                    respuesta: "",
                                    preguntas: {
                                        huertosOrganicos: {
                                            respuesta: ""
                                        },
                                        desarrolloViveros: {
                                            respuesta: ""
                                        },
                                        desarrolloVentaFertilizantes: {
                                            respuesta: ""
                                        },
                                        rehabilitacionFinca: {
                                            respuesta: ""
                                        },
                                        brigadaPodadores: {
                                            respuesta: "",
                                            preguntas: {
                                                contarExperienciaPoda: {
                                                    respuesta: "",
                                                    preguntas: {
                                                        aniosExperiencia: {
                                                            respuesta: ""
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                },
                            }
                        },
                        croquis: {
                            preguntas: {
                                coordenadasX: {
                                    respuesta: ""
                                },
                                coordenadasY: {
                                    respuesta: ""
                                },
                                productor: {
                                    respuesta: ""
                                },
                                predio: {
                                    respuesta: ""
                                },
                                altura: {
                                    respuesta: ""
                                },
                                croquisPath: {
                                    respuesta: ""
                                }
                            }
                        }
                    }
                };
                agricultor = newAgricultor;
                yield this.agricultorService.set(agricultor);
            }
            return agricultor;
        });
    }
    initTecnico(tecnicoId, tecnicoName) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let tecnico;
            if (tecnicoId === undefined) {
                tecnico = yield this.tecnicoService.get(tecnicoId);
            }
            else {
                const newTecnico = {
                    id: "",
                    nombre: tecnicoName,
                    correo: "",
                    permiso: src_app_interfaces_tecnico__WEBPACK_IMPORTED_MODULE_2__["Permiso"].Ficticio
                };
                tecnico = newTecnico;
            }
            return tecnico;
        });
    }
}
ImportacionAgricultorService.ɵfac = function ImportacionAgricultorService_Factory(t) { return new (t || ImportacionAgricultorService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ngx_csv_parser__WEBPACK_IMPORTED_MODULE_4__["NgxCsvParser"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_agriculor_agricultor_service__WEBPACK_IMPORTED_MODULE_5__["AgricultorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_tecnico_tecnico_service__WEBPACK_IMPORTED_MODULE_6__["TecnicoService"])); };
ImportacionAgricultorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ImportacionAgricultorService, factory: ImportacionAgricultorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ImportacionAgricultorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ngx_csv_parser__WEBPACK_IMPORTED_MODULE_4__["NgxCsvParser"] }, { type: _agriculor_agricultor_service__WEBPACK_IMPORTED_MODULE_5__["AgricultorService"] }, { type: _tecnico_tecnico_service__WEBPACK_IMPORTED_MODULE_6__["TecnicoService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/core/services/importaciones/importacion-linea-base.service.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/core/services/importaciones/importacion-linea-base.service.ts ***!
  \***************************************************************************************/
/*! exports provided: ImportacionLineaBaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportacionLineaBaseService", function() { return ImportacionLineaBaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_mappers_formularioLineaBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/mappers/formularioLineaBase */ "./src/environments/mappers/formularioLineaBase.ts");
/* harmony import */ var ngx_csv_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-csv-parser */ "./node_modules/ngx-csv-parser/__ivy_ngcc__/fesm2015/ngx-csv-parser.js");
/* harmony import */ var _importacion_agricultor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./importacion-agricultor.service */ "./src/app/modules/core/services/importaciones/importacion-agricultor.service.ts");
/* harmony import */ var _formularios_formulario_linea_base_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../formularios/formulario-linea-base.service */ "./src/app/modules/core/services/formularios/formulario-linea-base.service.ts");







class ImportacionLineaBaseService {
    constructor(ngxCsvParser, importacionAgricultor, formularioLineaBaseService) {
        this.ngxCsvParser = ngxCsvParser;
        this.importacionAgricultor = importacionAgricultor;
        this.formularioLineaBaseService = formularioLineaBaseService;
        this.csvRecords = [];
    }
    importAllFormularios(file, header, delimeter) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.ngxCsvParser.parse(file[0], { header: header, delimiter: delimeter })
                    .pipe().subscribe((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    try {
                        const docLines = result;
                        for (let index = 2; index < docLines.length; index++) {
                            yield this.importFormulario(docLines[1], docLines[index]);
                        }
                    }
                    catch (e) {
                        console.log(e);
                        throw (e);
                    }
                }), (error) => {
                    console.log('Error', error);
                });
            }
            catch (e) {
                console.log(e);
                throw (e);
            }
        });
    }
    importFormulario(headers, values) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const formularioLineaBase = yield this.getFormularioLineaBase(headers, values);
                this.fillSections(headers, values, formularioLineaBase);
                this.fillMultipleOptions(headers, values, formularioLineaBase);
                yield this.formularioLineaBaseService.set(formularioLineaBase);
            }
            catch (e) {
                console.log(e);
                throw (e);
            }
        });
    }
    getFormularioLineaBase(headers, values) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const id = this.getValueByHeaderName(headers, values, "ID-LB");
            const agricultorId = this.getValueByHeaderName(headers, values, "id");
            const agricultor = this.getValueByHeaderName(headers, values, "nombre");
            const tecnicoId = this.getValueByHeaderName(headers, values, "tecnicoId");
            const tecnico = this.getValueByHeaderName(headers, values, "tecnico");
            const fechaVisita = this.getValueByHeaderName(headers, values, "F_VISITALB");
            const formularioLineaBase = yield this.initFormularioLineaBase(id, agricultorId, agricultor, tecnicoId, tecnico, fechaVisita);
            return formularioLineaBase;
        });
    }
    getValueByHeaderName(headers, values, headerName) {
        for (let i = 0; i < headers.length; i++) {
            if (headers[i].toUpperCase() === headerName.toUpperCase()) {
                return values[i];
            }
        }
        return "";
    }
    fillSections(headers, values, formulario) {
        const mockFormulario = formulario;
        for (let section of Object.keys(formulario.secciones)) {
            if (mockFormulario["secciones"][section]["preguntas"] != undefined) {
                for (let question of Object.keys(mockFormulario["secciones"][section]["preguntas"])) {
                    this.fillQuestions(headers, values, question, mockFormulario["secciones"][section]["preguntas"]);
                }
            }
            if (mockFormulario["secciones"][section]["secciones"] != undefined) {
                const lastObject = mockFormulario["secciones"][section];
                this.fillSections(headers, values, lastObject);
            }
        }
    }
    fillQuestions(headers, values, question, lastObject) {
        for (let response of Object.keys(lastObject[question])) {
            if (response === "respuesta") {
                const mockMapper = src_environments_mappers_formularioLineaBase__WEBPACK_IMPORTED_MODULE_2__["formularioLineaBaseMapper"];
                const code = mockMapper[question]["codigo"];
                let value = this.getValueByHeaderName(headers, values, code);
                if (Array.isArray(lastObject[question][response]) && value != undefined) {
                    const arrayValue = value.split(',');
                    lastObject[question][response] = arrayValue;
                }
                else {
                    lastObject[question][response] = value;
                }
            }
            else if (response === "preguntas") {
                const newLastObject = lastObject[question][response];
                for (let question in newLastObject) {
                    this.fillQuestions(headers, values, question, newLastObject);
                }
            }
            else if (response === "arreglo") {
                this.pickQuestionWithDynamicArray(headers, values, lastObject[question][response], question);
            }
        }
    }
    pickQuestionWithDynamicArray(headers, values, dynamicArray, question) {
        let codes = [];
        switch (question) {
            case "miembros":
                codes = ['FA01_MF1', 'FA02_ED1', 'FA03_GEN1', 'FA04_SS1', 'FA05_EDU1', 'FA06_LAB1', 'FA07_LABR1', 'FA08_HOR1', 'FA09_RD1', 'FA10_ING1',
                    'FA11_MF2', 'FA12_ED2', 'FA13_GEN2', 'FA14_SS2', 'FA15_EDU2', 'FA16_LAB2', 'FA17_LABR2', 'FA18_HOR2', 'FA19_RD2', 'FA20_ING2',
                    'FA21_MF3', 'FA22_ED3', 'FA23_GEN3', 'FA24_SS3', 'FA25_EDU3', 'FA26_LAB3', 'FA27_LABR3', 'FA28_HOR3', 'FA29_RD3', 'FA30_ING3',
                    'FA31_MF4', 'FA32_ED4', 'FA33_GEN4', 'FA34_SS4', 'FA35_EDU4', 'FA36_LAB4', 'FA37_LABR4', 'FA38_HOR4', 'FA39_RD4', 'FA40_ING4'];
                const questionsM = ["clasificacionMiembroFamiliar", "edad", "genero", "seguridadSocial",
                    "nivelEduacion", "laboraEnFinca", "laborRealizado", "horasAlDiaTrabaja",
                    "tieneOtraFuenteIngreso", "sueldoIngresoMensual"];
                this.fillDynamicArrayWithExcel(headers, values, dynamicArray, questionsM, codes, questionsM.length);
                break;
        }
    }
    fillDynamicArray(headers, values, dynamicArray, arrayOfQuestions) {
        let hayCampos = true;
        let countOfFields = 1;
        while (hayCampos) {
            let viejoInjertado = {};
            for (let question of arrayOfQuestions) {
                const mockMapper = src_environments_mappers_formularioLineaBase__WEBPACK_IMPORTED_MODULE_2__["formularioLineaBaseMapper"];
                const codeInDocument = mockMapper[question]["codigo"] + countOfFields.toString();
                const value = this.getValueByHeaderName(headers, values, codeInDocument);
                if (value === "" || countOfFields === 10) {
                    hayCampos = false;
                    break;
                }
                else {
                    viejoInjertado[question] = {};
                    viejoInjertado[question]["respuesta"] = value;
                }
            }
            if (hayCampos) {
                dynamicArray.push(viejoInjertado);
            }
            countOfFields++;
        }
    }
    fillDynamicArrayWithExcel(headers, values, dynamicArray, arrayOfQuestions, codes, numberOfFields) {
        let position = 0;
        while (position < codes.length) {
            let object = {};
            for (let question of arrayOfQuestions) {
                const value = this.getValueByHeaderName(headers, values, codes[position]);
                object[question] = {};
                object[question]["respuesta"] = value;
                position++;
            }
            dynamicArray.push(object);
        }
    }
    fillMultipleOptions(headers, values, formulario) {
        const plagas = ['MIPE09_PCO', 'MIPE10_PXI', 'MIPE11_PTR', 'MIPE12_PCH', 'MIPE13_PHO', 'MIPE24_ORO', 'MIPE14_POTR'];
        const enfermedades = ['MIPE15_EPH', 'MIPE16_ESC', 'MIPE17_EMO', 'MIPE18_EMM', 'MIPE19_EOTR'];
        const periodoFertilizacion = ['LAB01_F(E)', 'LAB06_F(F)', 'LAB11_F(MZ)', 'LAB16_F(A)', 'LAB21_F(MY)', 'LAB26_F(JN)', 'LAB31_F(JL)', 'LAB36_F(AG)', 'LAB41_F(S)', 'LAB46_F(O)', 'LAB51_F(N)', 'LAB56_F(D)'];
        const periodoPoda = ['LAB02_P(E)', 'LAB07_P(F)', 'LAB12_P(MZ)', 'LAB17_P(A)', 'LAB22_P(MY)', 'LAB27_P(JN)', 'LAB32_P(JL)', 'LAB37_P(AG)', 'LAB42_P(S)', 'LAB47_P(O)', 'LAB52_P(N)', 'LAB57_P(D)'];
        const periodoControlMaleza = ['LAB03_C(E)', 'LAB08_C(F)', 'LAB13_C(MZ)', 'LAB18_C(A)', 'LAB23_C(MY)', 'LAB28_C(JN)', 'LAB33_C(JL)', 'LAB38_C(AG)', 'LAB43_C(S)', 'LAB48_C(O)', 'LAB53_C(N)', 'LAB58_C(D)'];
        const periodoMIPE = ['LAB04_M(E)', 'LAB09_M(F)', 'LAB14_M(MZ)', 'LAB19_M(A)', 'LAB24_M(MY)', 'LAB29_M(JN)', 'LAB34_M(JL)', 'LAB39_M(AG)', 'LAB44_M(S)', 'LAB49_M(O)', 'LAB54_M(N)', 'LAB59_M(D)'];
        const periodoCosecha = ['LAB05_C(E)', 'LAB10_C(F)', 'LAB15_C(MZ)', 'LAB20_C(A)', 'LAB25_C(MY)', 'LAB30_C(JN)', 'LAB35_C(JL)', 'LAB40_C(AG)', 'LAB45_C(S)', 'LAB50_C(O)', 'LAB55_C(N)', 'LAB60_C(D)'];
        const tipoBeneficios = ['ASO05_ASIS', 'ASO06_TRANS', 'ASO07_CAPC', 'ASO08_PMEJ', 'ASO09_PRE', 'ASO10_INS', 'ASO11_OTR'];
        const verterAgua = ['HDE12_SHIG', 'HDE13_LETR', 'HDE14_PZSEP', 'HDE15_NING'];
        for (let index = 0; index < headers.length; index++) {
            this.fillArray(headers[index], values[index], plagas, formulario.secciones.practicasAgricolas.preguntas.plagasAfectanCultivo.respuesta);
            this.fillArray(headers[index], values[index], enfermedades, formulario.secciones.practicasAgricolas.preguntas.enfermedadesAfectanCultivo.respuesta);
            this.fillMatrixMonths(headers[index], values[index], periodoFertilizacion, formulario.secciones.practicasAgricolas.preguntas.periodoFertilizacion.respuesta);
            this.fillMatrixMonths(headers[index], values[index], periodoPoda, formulario.secciones.practicasAgricolas.preguntas.periodoPoda.respuesta);
            this.fillMatrixMonths(headers[index], values[index], periodoControlMaleza, formulario.secciones.practicasAgricolas.preguntas.periodoControlMaleza.respuesta);
            this.fillMatrixMonths(headers[index], values[index], periodoMIPE, formulario.secciones.practicasAgricolas.preguntas.periodoMIPE.respuesta);
            this.fillMatrixMonths(headers[index], values[index], periodoCosecha, formulario.secciones.practicasAgricolas.preguntas.periodoCosecha.respuesta);
            this.fillArray(headers[index], values[index], tipoBeneficios, formulario.secciones.nivelAsociatividad.preguntas.perteneceAsocProgrCertif.preguntas.tiposBeneficios.respuesta);
            this.fillArray(headers[index], values[index], verterAgua, formulario.secciones.conservacionRecursosManejoDesechos.preguntas.productoContaminaEcosistema.preguntas.ubicacionDesechosAguasNegras.respuesta);
        }
    }
    fillArray(header, value, codigos, arreglo) {
        for (let codigo of codigos) {
            if (codigo === header) {
                arreglo.push(value);
                return true;
            }
        }
        return false;
    }
    fillMatrixMonths(header, value, codigos, arreglo) {
        const meses = ["ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO", "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"];
        for (let index = 0; index < codigos.length; index++) {
            const codigo = codigos[index];
            if (codigo === header && value === 'AFIRMATIVO') {
                arreglo.push(meses[index]);
                return true;
            }
        }
        return false;
    }
    initFormularioLineaBase(id, agricultorId, agricultorName, tecnicoId, tecnicoName, fechaVisita) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const agricultor = yield this.importacionAgricultor.initAgricultor(agricultorId);
            const tecnico = yield this.importacionAgricultor.initTecnico(tecnicoId, tecnicoName);
            return {
                id: id,
                agricultor: agricultor,
                tecnico: tecnico,
                fechaVisita: fechaVisita,
                secciones: {
                    informacionFamilia: {
                        preguntas: {
                            miembros: {
                                arreglo: []
                            },
                            familiarDiscapacitado: {
                                respuesta: ""
                            },
                            esposaInvolucradaEntrevista: {
                                respuesta: ""
                            },
                            esposoIncluyeEsposaEntrevista: {
                                respuesta: ""
                            },
                            deseoIngresoAdicionalConyuge: {
                                respuesta: ""
                            },
                            deseoTrabajoMedioTiempoProyectosFuturos: {
                                respuesta: "",
                                preguntas: {
                                    comoCual: {
                                        respuesta: ""
                                    }
                                }
                            },
                            hijoInteresadoEnProyectosRehabilitacionFinca: {
                                respuesta: ""
                            }
                        }
                    },
                    practicasAgricolas: {
                        preguntas: {
                            interesElaborarFertilizanteNaturalOrganico: {
                                respuesta: ""
                            },
                            plagasAfectanCultivo: {
                                respuesta: []
                            },
                            enfermedadesAfectanCultivo: {
                                respuesta: []
                            },
                            productoParaPlagas: {
                                respuesta: ""
                            },
                            productoParaEnfermedades: {
                                respuesta: ""
                            },
                            llevaRegistroPerdidasMazorcasXMonilla: {
                                respuesta: "",
                                preguntas: {
                                    cantidadPerdidaMazorcas: {
                                        respuesta: ""
                                    }
                                }
                            },
                            periodoFertilizacion: {
                                respuesta: []
                            },
                            periodoPoda: {
                                respuesta: []
                            },
                            periodoControlMaleza: {
                                respuesta: []
                            },
                            periodoMIPE: {
                                respuesta: []
                            },
                            periodoCosecha: {
                                respuesta: []
                            }
                        }
                    },
                    saludSeguridadOcupacional: {
                        preguntas: {
                            accidentesLaboralesUltimoAnio: {
                                respuesta: "",
                                preguntas: {
                                    tipoAccidente: {
                                        respuesta: ""
                                    }
                                }
                            },
                            periodoIntoxicacionPresente: {
                                respuesta: "",
                                preguntas: {
                                    producto: {
                                        respuesta: ""
                                    }
                                }
                            },
                            centroSaludCercano: {
                                respuesta: ""
                            }
                        }
                    },
                    cosecha: {
                        preguntas: {
                            periodoCadaTumba: {
                                respuesta: ""
                            },
                            latasCacaoXTumba: {
                                respuesta: ""
                            },
                            realizaEscurridoSecadoCCN51: {
                                respuesta: ""
                            },
                            diasFermentadoCacao: {
                                respuesta: ""
                            }
                        }
                    },
                    venta: {
                        preguntas: {
                            almacenaCacaoDespSecado: {
                                respuesta: "",
                                preguntas: {
                                    tiempoAlmacenadoCacao: {
                                        respuesta: ""
                                    }
                                }
                            },
                            propiedadTransporte: {
                                respuesta: ""
                            },
                            tipoTransporte: {
                                respuesta: ""
                            },
                            registroFinancieroFinca: {
                                respuesta: ""
                            },
                            tipoRegistrosFinancierosFinca: {
                                respuesta: ""
                            }
                        }
                    },
                    nivelAsociatividad: {
                        preguntas: {
                            perteneceAsocProgrCertif: {
                                respuesta: "",
                                preguntas: {
                                    nombreAsociacion: {
                                        respuesta: ""
                                    },
                                    cantidadMiembros: {
                                        respuesta: ""
                                    },
                                    recibeBeneficios: {
                                        respuesta: ""
                                    },
                                    tiposBeneficios: {
                                        respuesta: [],
                                        preguntas: {
                                            otroTiposBeneficios: {
                                                respuesta: ""
                                            }
                                        }
                                    }
                                }
                            },
                            ayudaOtraInstitucion: {
                                respuesta: "",
                                preguntas: {
                                    nombreOtraInstitucion: {
                                        respuesta: ""
                                    },
                                    tipoAyuda: {
                                        respuesta: ""
                                    }
                                }
                            }
                        }
                    },
                    condicionesLaborales: {
                        preguntas: {
                            contrataTrabajadores: {
                                respuesta: "",
                                preguntas: {
                                    cantidadTrabajadores: {
                                        respuesta: ""
                                    }
                                }
                            },
                            areaInicialContrato: {
                                respuesta: ""
                            },
                            tipoContratoTrabajo: {
                                respuesta: ""
                            },
                            contrataMenoresEdad: {
                                respuesta: "",
                                preguntas: {
                                    poseePermiso: {
                                        respuesta: ""
                                    }
                                }
                            },
                            baseContratoAgricola: {
                                respuesta: ""
                            }
                        }
                    },
                    serviciosBasicos: {
                        preguntas: {
                            energiaElectrica: {
                                respuesta: ""
                            },
                            tipoAguaConsumoFamiliar: {
                                respuesta: ""
                            }
                        }
                    },
                    conservacionRecursosManejoDesechos: {
                        preguntas: {
                            conocimientoManejoDesechos: {
                                respuesta: ""
                            },
                            productoContaminaEcosistema: {
                                respuesta: "",
                                preguntas: {
                                    ubicacionDesechosAguasNegras: {
                                        respuesta: []
                                    }
                                }
                            },
                            tieneArbolesSombrio: {
                                respuesta: ""
                            },
                            cultivaVegetalesHortalizasFrutas: {
                                respuesta: ""
                            },
                            compraProductosMercadoLocales: {
                                respuesta: "",
                                preguntas: {
                                    valorPromedioGastado: {
                                        respuesta: ""
                                    }
                                }
                            }
                        }
                    }
                }
            };
        });
    }
}
ImportacionLineaBaseService.ɵfac = function ImportacionLineaBaseService_Factory(t) { return new (t || ImportacionLineaBaseService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ngx_csv_parser__WEBPACK_IMPORTED_MODULE_3__["NgxCsvParser"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_importacion_agricultor_service__WEBPACK_IMPORTED_MODULE_4__["ImportacionAgricultorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_formularios_formulario_linea_base_service__WEBPACK_IMPORTED_MODULE_5__["FormularioLineaBaseService"])); };
ImportacionLineaBaseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ImportacionLineaBaseService, factory: ImportacionLineaBaseService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ImportacionLineaBaseService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ngx_csv_parser__WEBPACK_IMPORTED_MODULE_3__["NgxCsvParser"] }, { type: _importacion_agricultor_service__WEBPACK_IMPORTED_MODULE_4__["ImportacionAgricultorService"] }, { type: _formularios_formulario_linea_base_service__WEBPACK_IMPORTED_MODULE_5__["FormularioLineaBaseService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/core/services/importaciones/importacion-verificacion.service.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/core/services/importaciones/importacion-verificacion.service.ts ***!
  \*****************************************************************************************/
/*! exports provided: ImportacionVerificacionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportacionVerificacionService", function() { return ImportacionVerificacionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_mappers_formularioVerificacion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/mappers/formularioVerificacion */ "./src/environments/mappers/formularioVerificacion.ts");
/* harmony import */ var ngx_csv_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-csv-parser */ "./node_modules/ngx-csv-parser/__ivy_ngcc__/fesm2015/ngx-csv-parser.js");
/* harmony import */ var _importacion_agricultor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./importacion-agricultor.service */ "./src/app/modules/core/services/importaciones/importacion-agricultor.service.ts");
/* harmony import */ var _services_formularios_formulario_verificacion_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/formularios/formulario-verificacion.service */ "./src/app/modules/core/services/formularios/formulario-verificacion.service.ts");







class ImportacionVerificacionService {
    constructor(ngxCsvParser, importacionAgricultor, formularioVerificacionService) {
        this.ngxCsvParser = ngxCsvParser;
        this.importacionAgricultor = importacionAgricultor;
        this.formularioVerificacionService = formularioVerificacionService;
        this.csvRecords = [];
    }
    importAllFormularios(file, header, delimeter) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.ngxCsvParser.parse(file[0], { header: header, delimiter: delimeter })
                    .pipe().subscribe((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    try {
                        for (let index = 1; index < result.length; index++) {
                            yield this.importFormulario(result[0], result[index]);
                        }
                    }
                    catch (e) {
                        console.log(e);
                        throw (e);
                    }
                }), (error) => {
                    console.log('Error', error);
                });
            }
            catch (e) {
                console.log(e);
                throw (e);
            }
        });
    }
    importFormulario(headers, values) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const formularioVerificacion = yield this.getFormularioVerificacion(headers, values);
                if (formularioVerificacion != undefined) {
                    this.fillSections(headers, values, formularioVerificacion);
                    this.fillMultipleOptions(headers, values, formularioVerificacion);
                    yield this.formularioVerificacionService.set(formularioVerificacion);
                }
            }
            catch (e) {
                console.log(e);
                throw (e);
            }
        });
    }
    getFormularioVerificacion(headers, values) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const id = this.getValueByHeaderName(headers, values, "ID-FORMULARIO");
            const agricultorId = this.getValueByHeaderName(headers, values, "id");
            const agricultor = this.getValueByHeaderName(headers, values, "nombre");
            const tecnicoId = this.getValueByHeaderName(headers, values, "tecnicoId");
            const tecnico = this.getValueByHeaderName(headers, values, "tecnico");
            const fechaVisita = this.getValueByHeaderName(headers, values, "F_VISITA21");
            const formularioVerificacion = yield this.initFormularioVerificacion(id, agricultorId, agricultor, tecnicoId, tecnico, fechaVisita);
            return formularioVerificacion;
        });
    }
    getValueByHeaderName(headers, values, headerName) {
        for (let i = 0; i < headers.length; i++) {
            if (headers[i].toUpperCase() === headerName.toUpperCase()) {
                return values[i];
            }
        }
        return "";
    }
    fillSections(headers, values, formulario) {
        for (let section of Object.keys(formulario["secciones"])) {
            if (formulario["secciones"][section]["preguntas"] != undefined) {
                for (let question of Object.keys(formulario["secciones"][section]["preguntas"])) {
                    this.fillQuestions(headers, values, question, formulario["secciones"][section]["preguntas"]);
                }
            }
            if (formulario["secciones"][section]["secciones"] != undefined) {
                const lastObject = formulario["secciones"][section];
                this.fillSections(headers, values, lastObject);
            }
        }
    }
    fillQuestions(headers, values, question, lastObject) {
        for (let response of Object.keys(lastObject[question])) {
            if (response === "respuesta") {
                const mockMapper = src_environments_mappers_formularioVerificacion__WEBPACK_IMPORTED_MODULE_2__["formularioVerificacionMapper"];
                const code = mockMapper[question]["codigo"];
                let value = this.getValueByHeaderName(headers, values, code);
                if (Array.isArray(lastObject[question][response]) && value != undefined) {
                    if (question === 'tipoProductoQuimico' || question === 'tipoProductoNatural') {
                        lastObject[question][response] = [value];
                    }
                    else {
                        const arrayValue = value.replace(' ', '').split(',');
                        lastObject[question][response] = arrayValue;
                    }
                }
                else {
                    lastObject[question][response] = value;
                }
            }
            else if (response === "preguntas") {
                const newLastObject = lastObject[question][response];
                for (let question in newLastObject) {
                    this.fillQuestions(headers, values, question, newLastObject);
                }
            }
            else if (response === "arreglo") {
                // FORMULARIOS VERIFICACION NO TIENE ARREGLO DINAMICO
            }
        }
    }
    fillMultipleOptions(headers, values, formulario) {
        const comoControlaMaleza = ['MAL03_QUIM', 'MAL04_MEC', 'MAL05_NAT'];
        const tipoControlMipe = ['MIPE02_QUI', 'MIPE03_MEC', 'MIPE04_BIO'];
        const comoRealizaSecado = ['SEC02_SASF', 'SEC03_SCAÑ', 'SEC04_SCEM', 'SEC05_MARQ', 'SEC06_SEC', 'SEC07_SPLNE', 'SEC08_SPLBL', 'SEC09_SOTR'];
        const criterioClasificaBasura = ['HDE17_PEL', 'HDE18_ORGN', 'HDE19_BPV'];
        const especiesArboles = ['BIO07_LAUR', 'BIO08_FERN', 'BIO09_TECA', 'BIO10_GUAY', 'BIO11_OTR'];
        const fuentesHidricas = ['RIB02_VERT', 'RIB03_EST', 'RIB04_RIO', 'RIB05_POZ', 'RIB06_OTR'];
        const tipoFuenteHidrica = ['RIB08_SUPF', 'RIB09_SUBT', 'RIB10_TEMP', 'RIB11_PERM', 'RIB12_ARTF', 'RIB13_NATU'];
        const areasAltoValor = ['RIB32_AVC1', 'RIB33_AVC2', 'RIB34_AVC3', 'RIB35_AVC4', 'RIB36_AVC5', 'RIB37_AVC6'];
        for (let index = 0; index < headers.length; index++) {
            this.fillArray(headers[index], values[index], comoControlaMaleza, formulario.secciones.controlMalezas.preguntas.controlaMalezas.preguntas.comoControlaMaleza.respuesta);
            this.fillArray(headers[index], values[index], tipoControlMipe, formulario.secciones.MIPE.preguntas.realizaPracticasMPE.preguntas.tipoControlMPE.respuesta);
            this.fillArray(headers[index], values[index], comoRealizaSecado, formulario.secciones.secado.preguntas.maneraRealzarSecado.respuesta);
            this.fillArray(headers[index], values[index], criterioClasificaBasura, formulario.secciones.secado.preguntas.maneraRealzarSecado.respuesta);
            this.fillArray(headers[index], values[index], especiesArboles, formulario.secciones.conservacionSuelosBiodiversidad.preguntas.especiesArbolesEnCultivo.respuesta);
            this.fillArray(headers[index], values[index], fuentesHidricas, formulario.secciones.proteccionAreasRiberenias.preguntas.poseeFuenteHidrica.preguntas.nombreFuenteHidrica.respuesta);
            this.fillArray(headers[index], values[index], tipoFuenteHidrica, formulario.secciones.proteccionAreasRiberenias.preguntas.poseeFuenteHidrica.preguntas.tipoFuenteHidrica.respuesta);
            this.fillArray(headers[index], values[index], areasAltoValor, formulario.secciones.proteccionAreasAltoValorConservacion.preguntas.fincaConsideradaAltoValor.preguntas.tipoAltoValor.respuesta);
        }
    }
    fillArray(header, value, codigos, arreglo) {
        for (let codigo of codigos) {
            if (codigo === header) {
                arreglo.push(value);
                return true;
            }
        }
        return false;
    }
    fillMatrixMonths(header, value, codigos, arreglo) {
        const meses = ["ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO", "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"];
        for (let index = 0; index < codigos.length; index++) {
            const codigo = codigos[index];
            if (codigo === header && value === 'AFIRMATIVO') {
                arreglo.push(meses[index]);
                return true;
            }
        }
        return false;
    }
    initFormularioVerificacion(id, agricultorId, agricultorName, tecnicoId, tecnicoName, fechaVisita) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (agricultorId != "") {
                const agricultor = yield this.importacionAgricultor.initAgricultor(agricultorId);
                const tecnico = yield this.importacionAgricultor.initTecnico(tecnicoId, tecnicoName);
                return {
                    id: id,
                    agricultor: agricultor,
                    tecnico: tecnico,
                    fechaVisita: fechaVisita,
                    secciones: {
                        datosFinca: {
                            preguntas: {
                                incrementoHectareajeFinca: {
                                    respuesta: "",
                                    preguntas: {
                                        cantidadAumento: {
                                            respuesta: ""
                                        },
                                        mesIncrementoHectareaje: {
                                            respuesta: ""
                                        },
                                        motivoAreaNueva: {
                                            respuesta: ""
                                        },
                                        usoAreaNueva: {
                                            respuesta: ""
                                        },
                                        incrementoFueraTamanioFinca: {
                                            respuesta: ""
                                        }
                                    }
                                }
                            }
                        },
                        injertacion: {
                            preguntas: {
                                realizoInjertosUltimos12Meses: {
                                    respuesta: "",
                                    preguntas: {
                                        mesRealizoInjertos: {
                                            respuesta: ""
                                        }
                                    }
                                }
                            }
                        },
                        manejoSuelo: {
                            preguntas: {
                                tipoSuelo: {
                                    respuesta: []
                                },
                                capacitacionTomaMuestrasSuelo: {
                                    respuesta: ""
                                },
                                analisisSuelo: {
                                    respuesta: "",
                                    preguntas: {
                                        sueloPH: {
                                            respuesta: ""
                                        }
                                    }
                                },
                                suelosNivelesAltosAcidez: {
                                    respuesta: "",
                                    preguntas: {
                                        corregidoPHSueloFinca: {
                                            respuesta: ""
                                        }
                                    }
                                },
                                maneraCorregidoPHSuelo: {
                                    respuesta: [],
                                    preguntas: {
                                        tipoProductoQuimico: {
                                            respuesta: []
                                        },
                                        tipoProductoNatural: {
                                            respuesta: []
                                        }
                                    }
                                }
                            }
                        },
                        fertilizacion: {
                            preguntas: {
                                fertilizaCacaotales: {
                                    respuesta: "",
                                    preguntas: {
                                        tipoProductoUsado: {
                                            respuesta: ""
                                        }
                                    }
                                },
                                usaFertilizanteEdafico: {
                                    respuesta: "",
                                    preguntas: {
                                        vecesUsadoAlAnioFertilizanteEdafico: {
                                            respuesta: ""
                                        }
                                    }
                                },
                                usaFertilizanteFoliar: {
                                    respuesta: "",
                                    preguntas: {
                                        vecesUsadoAlAnioFertilizanteFoliar: {
                                            respuesta: ""
                                        }
                                    }
                                },
                                recibidoFertilizanteKits: {
                                    respuesta: "",
                                    preguntas: {
                                        tipoFertilizanteRecibido: {
                                            respuesta: []
                                        }
                                    }
                                },
                                opinionEfectividadFertilizante: {
                                    respuesta: ""
                                },
                                repetirCompraConDescuento: {
                                    respuesta: ""
                                },
                                disminuidoProductosQuimicosPorOrganicos: {
                                    respuesta: ""
                                }
                            }
                        },
                        bodega: {
                            preguntas: {
                                poseeBodega: {
                                    respuesta: ""
                                },
                                bodegaSegura: {
                                    respuesta: ""
                                },
                                bodegaOrdenada: {
                                    respuesta: ""
                                },
                                clasificadaXProducto: {
                                    respuesta: ""
                                },
                                tieneRegistroAlmacena: {
                                    respuesta: ""
                                },
                                cuentaDuchaEmergencia: {
                                    respuesta: ""
                                },
                                conocimientoProdcutosPermitidosLINDT: {
                                    respuesta: ""
                                }
                            }
                        },
                        controlMalezas: {
                            preguntas: {
                                controlaMalezas: {
                                    respuesta: "",
                                    preguntas: {
                                        tiposMalezaEncontrada: {
                                            respuesta: ""
                                        },
                                        comoControlaMaleza: {
                                            respuesta: [],
                                            preguntas: {
                                                productoQuimicoUsado: {
                                                    respuesta: ""
                                                },
                                                regularidadProductoQuimicoUsado: {
                                                    respuesta: ""
                                                },
                                                recomendacionSeguidaAplicandoProductoQuimico: {
                                                    respuesta: ""
                                                }
                                            }
                                        }
                                    }
                                },
                                conocimientoDisposicionMaquinariaAgricola: {
                                    respuesta: "",
                                    preguntas: {
                                        haceUsoMisma: {
                                            respuesta: ""
                                        },
                                        tiempoPromedioUso: {
                                            respuesta: ""
                                        }
                                    }
                                }
                            }
                        },
                        poda: {
                            preguntas: {
                                realizaPoda: {
                                    respuesta: "",
                                    preguntas: {
                                        tipoPoda: {
                                            respuesta: []
                                        },
                                        realizaPodaFormacion: {
                                            respuesta: "",
                                            preguntas: {
                                                podaFormacionEsCorrecta: {
                                                    respuesta: ""
                                                }
                                            }
                                        },
                                        realizaPodaMantenimiento: {
                                            respuesta: "",
                                            preguntas: {
                                                podaMantenimientoEsCorrecta: {
                                                    respuesta: ""
                                                }
                                            }
                                        },
                                        realizaPodaFitosanitaria: {
                                            respuesta: "",
                                            preguntas: {
                                                podaFitosanitariaEsCorrecta: {
                                                    respuesta: ""
                                                }
                                            }
                                        },
                                        realizaPodaRehabilitacion: {
                                            respuesta: "",
                                            preguntas: {
                                                podaRehabilitacionEsCorrecta: {
                                                    respuesta: ""
                                                }
                                            }
                                        }
                                    }
                                },
                                cortesLaceracionesPlantaMalaPoda: {
                                    respuesta: ""
                                },
                                mazorcasEstadoPudricion: {
                                    respuesta: ""
                                },
                                malaPodaAlbergaPlagasEnfermedades: {
                                    respuesta: "",
                                    preguntas: {
                                        plagasMalaPoda: {
                                            respuesta: []
                                        },
                                        enfermedadesMalaPoda: {
                                            respuesta: []
                                        }
                                    }
                                }
                            }
                        },
                        MIPE: {
                            preguntas: {
                                realizaPracticasMPE: {
                                    respuesta: "",
                                    preguntas: {
                                        tipoControlMPE: {
                                            respuesta: []
                                        }
                                    }
                                },
                                corrigioProblemasMPE: {
                                    respuesta: ""
                                },
                                fincaLibreAplicacionQuimica: {
                                    respuesta: ""
                                },
                                controlaEnfermedades: {
                                    respuesta: ""
                                },
                                reduccionIncidenciaPlagasEnfermedades: {
                                    respuesta: ""
                                }
                            }
                        },
                        saludSeguridadOcupacional: {
                            preguntas: {
                                trabajadoresLlevadosCapacitacionesSSO: {
                                    respuesta: ""
                                },
                                usoPictograma: {
                                    respuesta: ""
                                },
                                buenasPracticasFincaTrabajadores: {
                                    respuesta: ""
                                },
                                botiquin: {
                                    respuesta: ""
                                },
                                eppAntesPlaguicida: {
                                    respuesta: ""
                                },
                                instruccionesPrimerosAuxilios: {
                                    respuesta: ""
                                }
                            }
                        },
                        registrosProductor: {
                            preguntas: {
                                ventaAnualCacaoQuintales: {
                                    respuesta: ""
                                },
                                ventaAnualCacaoUSD: {
                                    respuesta: ""
                                },
                                egresoCompraMateriales: {
                                    respuesta: ""
                                },
                                egresoManoObra: {
                                    respuesta: ""
                                },
                                manejoCuadernilloRegistros: {
                                    respuesta: ""
                                },
                                manejoCostosPlanificacionFinanciera: {
                                    respuesta: ""
                                },
                                disponibilidadAhorrarEnCuenta: {
                                    respuesta: "",
                                    preguntas: {
                                        tipoInstitucionAhorroCuenta: {
                                            respuesta: ""
                                        }
                                    }
                                }
                            }
                        },
                        cosecha: {
                            preguntas: {
                                cosechaSeparadoCacaoNacionalCCN51: {
                                    respuesta: ""
                                },
                                plantasLaceracionesCicatricesMalaPractica: {
                                    respuesta: ""
                                }
                            }
                        },
                        fermentacion: {
                            preguntas: {
                                fermentaCacao: {
                                    respuesta: "",
                                    preguntas: {
                                        razonNoFermenta: {
                                            respuesta: ""
                                        },
                                        modoFermentacion: {
                                            respuesta: ""
                                        },
                                        medidasHigieneFermentacion: {
                                            respuesta: ""
                                        },
                                        aumentoIngresoPorFermentacion: {
                                            respuesta: ""
                                        }
                                    }
                                }
                            }
                        },
                        secado: {
                            preguntas: {
                                nivelHumedadCacaoVendido: {
                                    respuesta: ""
                                },
                                maneraRealzarSecado: {
                                    respuesta: []
                                },
                                mejoraIngresoMejorTratamientoSecadoCacao: {
                                    respuesta: ""
                                }
                            }
                        },
                        venta: {
                            preguntas: {
                                personaVenderCacao: {
                                    respuesta: "",
                                    preguntas: {
                                        razon1: {
                                            respuesta: ""
                                        },
                                        razon2: {
                                            respuesta: ""
                                        }
                                    }
                                },
                                recibeBonosEmpresaProgramaLINDT: {
                                    respuesta: "",
                                    preguntas: {
                                        frecuenciaRecibeBono: {
                                            respuesta: ""
                                        }
                                    }
                                }
                            }
                        },
                        condicionesLaborales: {
                            preguntas: {
                                discriminacion: {
                                    respuesta: ""
                                },
                                explotacion: {
                                    respuesta: ""
                                },
                                trabajoInfantil: {
                                    respuesta: ""
                                },
                                documentosSoporte: {
                                    respuesta: ""
                                },
                                montoAcuerdoContratoAgricola: {
                                    respuesta: ""
                                }
                            }
                        },
                        conservacionAguaManejoDesechos: {
                            preguntas: {
                                fincaConRiego: {
                                    respuesta: ""
                                },
                                disenioRiego: {
                                    respuesta: [],
                                },
                                tieneDisenoFijo: {
                                    respuesta: "",
                                    preguntas: {
                                        hectareasDisenioRiegoFijo: {
                                            respuesta: ""
                                        }
                                    }
                                },
                                tieneDisenoMovible: {
                                    respuesta: "",
                                    preguntas: {
                                        hectareasDisenioRiegoMovible: {
                                            respuesta: ""
                                        }
                                    }
                                },
                                permisoExtraerAguaRiego: {
                                    respuesta: ""
                                },
                                analisisAguaRiego: {
                                    respuesta: ""
                                },
                                presentaAnexos: {
                                    respuesta: ""
                                },
                                utilizaFiltroEcologico: {
                                    respuesta: "",
                                    preguntas: {
                                        razonUsoFiltroEcologico: {
                                            respuesta: ""
                                        }
                                    }
                                },
                                areaDeschPlasticos: {
                                    respuesta: ""
                                },
                                fincaLibrePlasticos: {
                                    respuesta: ""
                                },
                                clasificaBasuraDomestica: {
                                    respuesta: ""
                                },
                                criterioClasificaBasuraDomestica: {
                                    respuesta: []
                                },
                                practicaReciclajeCompostaje: {
                                    respuesta: ""
                                },
                                tratamientoBasura: {
                                    respuesta: ""
                                },
                                conocimientoAreaRecepcioEnvasesProductosQuimicos: {
                                    respuesta: "",
                                    preguntas: {
                                        usoServicioAreaRecepcioEnvasesProductosQuimicos: {
                                            respuesta: ""
                                        },
                                        frecuenciaUsoServicioAreaRecepcioEnvasesProductosQuimicos: {
                                            respuesta: ""
                                        },
                                        almacenaSeguridadEnvasesPrevioTraslado: {
                                            respuesta: "",
                                            preguntas: {
                                                lugarAlmacena: {
                                                    respuesta: ""
                                                }
                                            }
                                        }
                                    }
                                },
                                tratamientoAguasNegras: {
                                    respuesta: ""
                                },
                                tipoExtraccion: {
                                    respuesta: ""
                                },
                                infraestructuraRiego: {
                                    respuesta: ""
                                },
                                impactoRiego: {
                                    respuesta: ""
                                }
                            }
                        },
                        conservacionSuelosBiodiversidad: {
                            preguntas: {
                                practicasConservacionSuelos: {
                                    respuesta: ""
                                },
                                practicaDeforestacion: {
                                    respuesta: ""
                                },
                                plantadoArbolesSombrioRecient: {
                                    respuesta: "",
                                    preguntas: {
                                        cuantosArbolesSombrio: {
                                            respuesta: ""
                                        },
                                        promedioArbolesXHectarea: {
                                            respuesta: ""
                                        },
                                        reforestadoOrillas: {
                                            respuesta: ""
                                        }
                                    }
                                },
                                promedioArbolXHectarea12MAltura: {
                                    respuesta: ""
                                },
                                especiesDiferentesArbolesXHectarea: {
                                    respuesta: ""
                                },
                                especiesArbolesEnCultivo: {
                                    respuesta: [],
                                    preguntas: {
                                        especifiqueOtrosEspeciesArboles: {
                                            respuesta: ""
                                        }
                                    }
                                }
                            }
                        },
                        proteccionAreasRiberenias: {
                            preguntas: {
                                poseeFuenteHidrica: {
                                    respuesta: "",
                                    preguntas: {
                                        nombreFuenteHidrica: {
                                            respuesta: [],
                                            preguntas: {
                                                especifiqueOtros: {
                                                    respuesta: ""
                                                }
                                            }
                                        },
                                        consideradaFuenteHidrica: {
                                            respuesta: ""
                                        },
                                        tipoFuenteHidrica: {
                                            respuesta: []
                                        },
                                        poseeNacientes: {
                                            respuesta: "",
                                            preguntas: {
                                                cuantasNacientes: {
                                                    respuesta: ""
                                                }
                                            }
                                        },
                                        brindaProteccionFuenteHidrica: {
                                            respuesta: "",
                                            preguntas: {
                                                comoBrindaProtFuentHidr: {
                                                    respuesta: ""
                                                }
                                            }
                                        },
                                        distanciaRequerida: {
                                            respuesta: ""
                                        }
                                    }
                                }
                            }
                        },
                        proteccionAreasAltoValorConservacion: {
                            preguntas: {
                                sueloPresentaProblemaErosion: {
                                    respuesta: "",
                                    preguntas: {
                                        tipoProblemaErosion: {
                                            respuesta: ""
                                        }
                                    }
                                },
                                necesitaImplementarPracticasMejoraSuelo: {
                                    respuesta: "",
                                    preguntas: {
                                        comoQuePracticas: {
                                            respuesta: ""
                                        }
                                    }
                                },
                                gradoPresentanPendientes: {
                                    respuesta: ""
                                },
                                cuentaConAreaForestales: {
                                    respuesta: "",
                                    preguntas: {
                                        tipoAreaForestal: {
                                            respuesta: ""
                                        }
                                    }
                                },
                                realizaPlanesCorteExtraccionMadera: {
                                    respuesta: ""
                                },
                                presentaAnexosAreasAltoValor: {
                                    respuesta: ""
                                },
                                realizaPlanesReforestacion: {
                                    respuesta: ""
                                },
                                conoceEspeciePeligroExtincionEnFinca: {
                                    respuesta: "",
                                    preguntas: {
                                        cualesEspeciesPeligroExtincion: {
                                            respuesta: ""
                                        },
                                        especifiqueCualesEspeciesPeligroExtincion: {
                                            respuesta: ""
                                        }
                                    }
                                },
                                fincaConsideradaAltoValor: {
                                    respuesta: "",
                                    preguntas: {
                                        tipoAltoValor: {
                                            respuesta: []
                                        }
                                    }
                                }
                            }
                        },
                        diversificacionIngresos: {
                            preguntas: {
                                usoCultivoDiferenteCacao: {
                                    respuesta: ""
                                },
                                otraActividadDentroFincaConIngreso: {
                                    respuesta: "",
                                },
                                huertosOrganicosEnFinca: {
                                    respuesta: ""
                                },
                                otraActividadFueraFincaConIngreso: {
                                    respuesta: "",
                                    preguntas: {
                                        actividadFueraFincaConIngreso: {
                                            respuesta: ""
                                        },
                                        realizaActividadFueraFincaConIngreso: {
                                            respuesta: ""
                                        }
                                    }
                                }
                                //   ganaVentaCultivo:{
                                //     respuesta: ""
                                //   },
                                //   ganaActividadesDentroDeFinca:{
                                //     respuesta: ""
                                //   },
                                //   ganaActividadesFueraDeFinca:{
                                //     respuesta: ""
                                //   }
                            }
                        },
                        capacitacionesBeneficioPrograma: {
                            secciones: {
                                capacitacion: {
                                    preguntas: {
                                        utilidadCacaoFinoAromaSostenibilidadTrazabilidad: {
                                            respuesta: ""
                                        },
                                        aplicaCacaoFinoAromaSostenibilidadTrazabilidad: {
                                            respuesta: ""
                                        },
                                        utilidadBuenasPracticasAgricolas: {
                                            respuesta: ""
                                        },
                                        aplicaBuenasPracticasAgricolas: {
                                            respuesta: ""
                                        },
                                        utilidadParametrosCalidad: {
                                            respuesta: ""
                                        },
                                        aplicaParametrosCalidad: {
                                            respuesta: ""
                                        },
                                        utilidadBuenasPracticasSociales: {
                                            respuesta: ""
                                        },
                                        aplicaBuenasPracticasSociales: {
                                            respuesta: ""
                                        },
                                        utilidadBuenasPracticasAmbientales: {
                                            respuesta: ""
                                        },
                                        aplicaBuenasPracticasAmbientales: {
                                            respuesta: ""
                                        },
                                        utilidadElaboracionProductosOrganicos: {
                                            respuesta: ""
                                        },
                                        aplicaElaboracionProductosOrganicos: {
                                            respuesta: ""
                                        },
                                        utilidadReproduccionVegetativa: {
                                            respuesta: ""
                                        },
                                        aplicaReproduccionVegetativa: {
                                            respuesta: ""
                                        },
                                        utilidadPoda: {
                                            respuesta: ""
                                        },
                                        aplicaPoda: {
                                            respuesta: ""
                                        },
                                        utilidadApicultura: {
                                            respuesta: ""
                                        },
                                        aplicaApicultura: {
                                            respuesta: ""
                                        },
                                        utilidadPorcicultura: {
                                            respuesta: ""
                                        },
                                        aplicaPorcicultura: {
                                            respuesta: ""
                                        },
                                        utilidadPiscicultura: {
                                            respuesta: ""
                                        },
                                        aplicaPiscicultura: {
                                            respuesta: ""
                                        },
                                        utilidadRiego: {
                                            respuesta: ""
                                        },
                                        aplicaRiego: {
                                            respuesta: ""
                                        },
                                        utilidadAgroforesteriaDinamica: {
                                            respuesta: ""
                                        },
                                        aplicaAgroforesteriaDinamica: {
                                            respuesta: ""
                                        },
                                        temasAdicionalesGustariaAprender: {
                                            respuesta: ""
                                        }
                                    }
                                },
                                incentivos: {
                                    preguntas: {
                                        necesidadesDetectadasFinca: {
                                            respuesta: ""
                                        }
                                    },
                                    secciones: {
                                        ambiental: {
                                            preguntas: {
                                                estadoPlantasFrutales: {
                                                    respuesta: ""
                                                },
                                                estadoPlantasForestales: {
                                                    respuesta: ""
                                                },
                                                estadoOtrosAmbiental: {
                                                    respuesta: ""
                                                },
                                                necesitaPlantasFrutales: {
                                                    respuesta: ""
                                                },
                                                necesitaPlantasForestales: {
                                                    respuesta: ""
                                                },
                                                necesitaOtrosAmbiental: {
                                                    respuesta: ""
                                                }
                                            }
                                        },
                                        insumos: {
                                            preguntas: {
                                                estadoFertilizanteEdafico: {
                                                    respuesta: ""
                                                },
                                                estadoFertilizanteFoliar: {
                                                    respuesta: ""
                                                },
                                                necesitaFertilizanteEdafico: {
                                                    respuesta: ""
                                                },
                                                necesitaFertilizanteFoliar: {
                                                    respuesta: ""
                                                }
                                            }
                                        },
                                        maquinariaAgricola: {
                                            preguntas: {
                                                estadoMotoguadania: {
                                                    respuesta: ""
                                                },
                                                estadoMotosierra: {
                                                    respuesta: ""
                                                },
                                                estadoPodadoraDeAltura: {
                                                    respuesta: ""
                                                },
                                                estadoBombaRiego: {
                                                    respuesta: ""
                                                },
                                                estadoBombaAMotor: {
                                                    respuesta: ""
                                                },
                                                estadoOtrosMaquinariaAgricola: {
                                                    respuesta: ""
                                                },
                                                necesitaMotoguadania: {
                                                    respuesta: ""
                                                },
                                                necesitaMotosierra: {
                                                    respuesta: ""
                                                },
                                                necesitaPodadoraDeAltura: {
                                                    respuesta: ""
                                                },
                                                necesitaBombaRiego: {
                                                    respuesta: ""
                                                },
                                                necesitaBombaAMotor: {
                                                    respuesta: ""
                                                },
                                                necesitaOtrosMaquinariaAgricola: {
                                                    respuesta: ""
                                                }
                                            }
                                        },
                                        herramientas: {
                                            preguntas: {
                                                estadoTijeras: {
                                                    respuesta: ""
                                                },
                                                estadoSerruchos: {
                                                    respuesta: ""
                                                },
                                                estadoMachetes: {
                                                    respuesta: ""
                                                },
                                                estadoBaldes: {
                                                    respuesta: ""
                                                },
                                                estadoTanques: {
                                                    respuesta: ""
                                                },
                                                estadoPalas: {
                                                    respuesta: ""
                                                },
                                                estadoEPP: {
                                                    respuesta: ""
                                                },
                                                estadoKitPoda: {
                                                    respuesta: ""
                                                },
                                                estadoKitVivero: {
                                                    respuesta: ""
                                                },
                                                estadoOtrosHerramientas: {
                                                    respuesta: ""
                                                },
                                                necesitaTijeras: {
                                                    respuesta: ""
                                                },
                                                necesitaSerruchos: {
                                                    respuesta: ""
                                                },
                                                necesitaMachetes: {
                                                    respuesta: ""
                                                },
                                                necesitaBaldes: {
                                                    respuesta: ""
                                                },
                                                necesitaTanques: {
                                                    respuesta: ""
                                                },
                                                necesitaPalas: {
                                                    respuesta: ""
                                                },
                                                necesitaEPP: {
                                                    respuesta: ""
                                                },
                                                necesitaKitPoda: {
                                                    respuesta: ""
                                                },
                                                necesitaKitVivero: {
                                                    respuesta: ""
                                                },
                                                necesitaOtrosHerramientas: {
                                                    respuesta: ""
                                                }
                                            }
                                        },
                                        proyectosInversion: {
                                            preguntas: {
                                                necesitaPlantasCacao800801: {
                                                    respuesta: ""
                                                },
                                                necesitaComboApicola: {
                                                    respuesta: ""
                                                },
                                                necesitaPiesCriasInsumos: {
                                                    respuesta: ""
                                                },
                                                necesitaPecesInsumos: {
                                                    respuesta: ""
                                                },
                                                necesitaRiego: {
                                                    respuesta: ""
                                                },
                                                necesitaOtrosProyectosInversion: {
                                                    respuesta: ""
                                                },
                                                disponibilidadInvertirPlantasCacao800801: {
                                                    respuesta: ""
                                                },
                                                disponibilidadInvertirComboApicola: {
                                                    respuesta: ""
                                                },
                                                disponibilidadInvertirPiesCriasInsumos: {
                                                    respuesta: ""
                                                },
                                                disponibilidadInvertirPecesInsumos: {
                                                    respuesta: ""
                                                },
                                                disponibilidadInvertirRiego: {
                                                    respuesta: ""
                                                },
                                                disponibilidadInvertirOtros: {
                                                    respuesta: ""
                                                },
                                                condAdecuadasPlantasCacao800801: {
                                                    respuesta: ""
                                                },
                                                condAdecuadasComboApicola: {
                                                    respuesta: ""
                                                },
                                                condAdecuadasPiesCriasInsumos: {
                                                    respuesta: ""
                                                },
                                                condAdecuadasPecesInsumos: {
                                                    respuesta: ""
                                                },
                                                condAdecuadasRiego: {
                                                    respuesta: ""
                                                },
                                                condAdecuadasOtros: {
                                                    respuesta: ""
                                                },
                                                condEconomicasPlantasCacao800801: {
                                                    respuesta: ""
                                                },
                                                condEconomicasComboApicola: {
                                                    respuesta: ""
                                                },
                                                condEconomicasPiesCriasInsumos: {
                                                    respuesta: ""
                                                },
                                                condEconomicasPecesInsumos: {
                                                    respuesta: ""
                                                },
                                                condEconomicasRiego: {
                                                    respuesta: ""
                                                },
                                                condEconomicasOtros: {
                                                    respuesta: ""
                                                }
                                            }
                                        },
                                        calidadPostCosecha: {
                                            preguntas: {
                                                necesitaCajonFermentacion: {
                                                    respuesta: ""
                                                },
                                                necesitaMarquesinas: {
                                                    respuesta: ""
                                                },
                                                necesitaTendales: {
                                                    respuesta: ""
                                                },
                                                necesitaSecadoras: {
                                                    respuesta: ""
                                                },
                                                necesitaOtrosCalidadPostCosecha: {
                                                    respuesta: ""
                                                },
                                                disponibilidadInvertirCajonFermentacion: {
                                                    respuesta: ""
                                                },
                                                disponibilidadInvertirMarquesinas: {
                                                    respuesta: ""
                                                },
                                                disponibilidadInvertirTendales: {
                                                    respuesta: ""
                                                },
                                                disponibilidadInvertirSecadoras: {
                                                    respuesta: ""
                                                },
                                                disponibilidadInvertirOtrosCalidadPostCosecha: {
                                                    respuesta: ""
                                                },
                                                condAdecuadasFermentacion: {
                                                    respuesta: ""
                                                },
                                                condAdecuadasMarquesinas: {
                                                    respuesta: ""
                                                },
                                                condAdecuadasTendales: {
                                                    respuesta: ""
                                                },
                                                condAdecuadasSecadoras: {
                                                    respuesta: ""
                                                },
                                                condAdecuadasOtrosCalidadPostCosecha: {
                                                    respuesta: ""
                                                },
                                                condEconomicasFermentacion: {
                                                    respuesta: ""
                                                },
                                                condEconomicasMarquesinas: {
                                                    respuesta: ""
                                                },
                                                condEconomicasTendales: {
                                                    respuesta: ""
                                                },
                                                condEconomicasSecadoras: {
                                                    respuesta: ""
                                                },
                                                condEconomicasOtrosCalidadPostCosecha: {
                                                    respuesta: ""
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                    }
                };
            }
        });
    }
}
ImportacionVerificacionService.ɵfac = function ImportacionVerificacionService_Factory(t) { return new (t || ImportacionVerificacionService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ngx_csv_parser__WEBPACK_IMPORTED_MODULE_3__["NgxCsvParser"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_importacion_agricultor_service__WEBPACK_IMPORTED_MODULE_4__["ImportacionAgricultorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_formularios_formulario_verificacion_service__WEBPACK_IMPORTED_MODULE_5__["FormularioVerificacionService"])); };
ImportacionVerificacionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ImportacionVerificacionService, factory: ImportacionVerificacionService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ImportacionVerificacionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ngx_csv_parser__WEBPACK_IMPORTED_MODULE_3__["NgxCsvParser"] }, { type: _importacion_agricultor_service__WEBPACK_IMPORTED_MODULE_4__["ImportacionAgricultorService"] }, { type: _services_formularios_formulario_verificacion_service__WEBPACK_IMPORTED_MODULE_5__["FormularioVerificacionService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/core/services/importaciones/importaciones.service.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/core/services/importaciones/importaciones.service.ts ***!
  \******************************************************************************/
/*! exports provided: ImportacionesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportacionesService", function() { return ImportacionesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_interfaces_formulario__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/interfaces/formulario */ "./src/app/interfaces/formulario.ts");
/* harmony import */ var _importacion_linea_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./importacion-linea-base.service */ "./src/app/modules/core/services/importaciones/importacion-linea-base.service.ts");
/* harmony import */ var _importacion_verificacion_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./importacion-verificacion.service */ "./src/app/modules/core/services/importaciones/importacion-verificacion.service.ts");
/* harmony import */ var _importacion_agricultor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./importacion-agricultor.service */ "./src/app/modules/core/services/importaciones/importacion-agricultor.service.ts");







class ImportacionesService {
    constructor(importacionLineaBaseService, importacionVerificacionService, importacionAgricultorService) {
        this.importacionLineaBaseService = importacionLineaBaseService;
        this.importacionVerificacionService = importacionVerificacionService;
        this.importacionAgricultorService = importacionAgricultorService;
    }
    importFormulario(file, header, delimeter, formularioType) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            switch (formularioType) {
                case src_app_interfaces_formulario__WEBPACK_IMPORTED_MODULE_2__["FormularioType"].formularioLineaBase:
                    yield this.importacionLineaBaseService.importAllFormularios(file, header, delimeter);
                    break;
                case src_app_interfaces_formulario__WEBPACK_IMPORTED_MODULE_2__["FormularioType"].formularioVerificacion:
                    yield this.importacionVerificacionService.importAllFormularios(file, header, delimeter);
                    break;
                default:
                    console.log("NO EXISTE TIPO");
                    break;
            }
        });
    }
    importAgricultores(file, header, delimeter) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.importacionAgricultorService.importAllFormularios(file, header, delimeter);
            }
            catch (error) {
                console.log(error);
                throw (error);
            }
        });
    }
}
ImportacionesService.ɵfac = function ImportacionesService_Factory(t) { return new (t || ImportacionesService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_importacion_linea_base_service__WEBPACK_IMPORTED_MODULE_3__["ImportacionLineaBaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_importacion_verificacion_service__WEBPACK_IMPORTED_MODULE_4__["ImportacionVerificacionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_importacion_agricultor_service__WEBPACK_IMPORTED_MODULE_5__["ImportacionAgricultorService"])); };
ImportacionesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ImportacionesService, factory: ImportacionesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ImportacionesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _importacion_linea_base_service__WEBPACK_IMPORTED_MODULE_3__["ImportacionLineaBaseService"] }, { type: _importacion_verificacion_service__WEBPACK_IMPORTED_MODULE_4__["ImportacionVerificacionService"] }, { type: _importacion_agricultor_service__WEBPACK_IMPORTED_MODULE_5__["ImportacionAgricultorService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=default~modules-agricultores-agricultores-module~modules-formulario-linea-base-formulario-linea-base~5ca1351e.js.map