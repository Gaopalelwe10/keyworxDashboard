(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-addagent-addagent-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/addagent/addagent.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/addagent/addagent.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>addagent</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/addagent/addagent-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/addagent/addagent-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: AddagentPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddagentPageRoutingModule", function() { return AddagentPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _addagent_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addagent.page */ "./src/app/pages/addagent/addagent.page.ts");




var routes = [
    {
        path: '',
        component: _addagent_page__WEBPACK_IMPORTED_MODULE_3__["AddagentPage"]
    }
];
var AddagentPageRoutingModule = /** @class */ (function () {
    function AddagentPageRoutingModule() {
    }
    AddagentPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AddagentPageRoutingModule);
    return AddagentPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/addagent/addagent.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/addagent/addagent.module.ts ***!
  \***************************************************/
/*! exports provided: AddagentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddagentPageModule", function() { return AddagentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _addagent_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addagent-routing.module */ "./src/app/pages/addagent/addagent-routing.module.ts");
/* harmony import */ var _addagent_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addagent.page */ "./src/app/pages/addagent/addagent.page.ts");







var AddagentPageModule = /** @class */ (function () {
    function AddagentPageModule() {
    }
    AddagentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _addagent_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddagentPageRoutingModule"]
            ],
            declarations: [_addagent_page__WEBPACK_IMPORTED_MODULE_6__["AddagentPage"]]
        })
    ], AddagentPageModule);
    return AddagentPageModule;
}());



/***/ }),

/***/ "./src/app/pages/addagent/addagent.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/addagent/addagent.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkZGFnZW50L2FkZGFnZW50LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/addagent/addagent.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/addagent/addagent.page.ts ***!
  \*************************************************/
/*! exports provided: AddagentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddagentPage", function() { return AddagentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AddagentPage = /** @class */ (function () {
    function AddagentPage() {
    }
    AddagentPage.prototype.ngOnInit = function () {
    };
    AddagentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addagent',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./addagent.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/addagent/addagent.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./addagent.page.scss */ "./src/app/pages/addagent/addagent.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AddagentPage);
    return AddagentPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-addagent-addagent-module.js.map