(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-propertylistings-propertylistings-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/propertylistings/propertylistings.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/propertylistings/propertylistings.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar color=\"primary\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n        <ion-title>Property listing</ion-title>\r\n        <ion-buttons class=\"add-property\" *ngIf=\"isBrowser ==true\" slot=\"end\" (click)=\"addproperty()\">\r\n            <ion-icon name=\"add\"></ion-icon>Add &nbsp;\r\n        </ion-buttons>\r\n\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n    <ion-grid style=\"height: 100%\" *ngIf=\"data == true && !(propertyList?.length >0) \">\r\n        <ion-row justify-content-center align-items-center style=\"height: 100%; flex-direction: column; text-align: center;\">\r\n\r\n            <p class=\"centerT\">\r\n                You currently don't have properties listed , Please add properties using the add button.\r\n            </p>\r\n        </ion-row>\r\n    </ion-grid>\r\n\r\n    <div class=\"row\" *ngIf=\"data ==true\">\r\n        <div class=\"column\" *ngFor=\"let details of propertyList\">\r\n            <ion-card class=\"card\">\r\n                <div class=\"IMGcontainers\">\r\n                    <img src=\"{{details.mainImage}}\" style=\"width:100%\">\r\n                    <div class=\"bottom-right\">\r\n                        <ion-icon name=\"archive\" (click)=\"sendToArchived(details)\" color=\"danger\"></ion-icon>\r\n                        <ion-icon name=\"create\" (click)=\"upadate(details)\"></ion-icon>\r\n                    </div>\r\n                </div>\r\n\r\n                <ion-card-content>\r\n                    <div class=\"action\">\r\n\r\n                    </div>\r\n                    <p>{{details.price | currency:'R'}}</p>\r\n                    <p>{{details.location}}</p>\r\n                    <div>\r\n                        <i class=\"fa fa-bed\" aria-hidden=\"true\" *ngIf='details.bedrooms!=0'>\r\n                                            <span class=\"pad-value\">{{details.bedrooms}}</span>\r\n                                        </i>\r\n                        <i class=\"fa fa-bath\" aria-hidden=\"true\" *ngIf='details.bathrooms!=0'>\r\n                                            <span class=\"pad-value\"> {{details.bathrooms}}</span>\r\n                                        </i>\r\n                        <i class=\"fa fa-car\" aria-hidden=\"true\" *ngIf='details.garage!=0'>\r\n                                            <span class=\"pad-value\">  {{details.garage}}</span>\r\n                                        </i>\r\n                    </div>\r\n                </ion-card-content>\r\n            </ion-card>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\" *ngIf=\"data == false\">\r\n        <div class=\"column\" *ngFor=\"let i of [1,2,3,4,5,6,7,8,9,10,11,12]\">\r\n            <ion-card class=\"card\">\r\n                <div class=\"IMGcontainers\">\r\n                    <ion-skeleton-text animated style=\"width: 100%; height: 170px;\"></ion-skeleton-text>\r\n                    <div class=\"bottom-right\">\r\n\r\n                        <ion-grid class=\"ion-no-padding\">\r\n                            <ion-row>\r\n                                <ion-col>\r\n                                    <ion-skeleton-text animated style=\"width: 250%\"></ion-skeleton-text>\r\n                                </ion-col>\r\n                                <ion-col>\r\n                                    <ion-skeleton-text animated style=\"width: 250%\"></ion-skeleton-text>\r\n                                </ion-col>\r\n                            </ion-row>\r\n                        </ion-grid>\r\n\r\n                    </div>\r\n                </div>\r\n\r\n                <ion-card-content>\r\n                    <div class=\"action\">\r\n\r\n                    </div>\r\n                    <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\r\n                    <ion-skeleton-text animated style=\"width: 40%\"></ion-skeleton-text>\r\n                    <div>\r\n                        <ion-grid class=\"ion-no-padding\">\r\n                            <ion-row>\r\n                                <ion-col>\r\n                                    <ion-skeleton-text animated style=\"width: 20%\"></ion-skeleton-text>\r\n                                </ion-col>\r\n                                <ion-col>\r\n                                    <ion-skeleton-text animated style=\"width: 20%\"></ion-skeleton-text>\r\n                                </ion-col>\r\n                                <ion-col>\r\n                                    <ion-skeleton-text animated style=\"width: 20%\"></ion-skeleton-text>\r\n                                </ion-col>\r\n\r\n                            </ion-row>\r\n                        </ion-grid>\r\n                    </div>\r\n                </ion-card-content>\r\n            </ion-card>\r\n        </div>\r\n    </div>\r\n\r\n    <ion-fab *ngIf=\"isBrowser ==false\" horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\">\r\n        <ion-fab-button color=\"primary\" (click)=\"addproperty()\" size=\"small\">\r\n            <ion-icon name=\"add\"></ion-icon>\r\n        </ion-fab-button>\r\n    </ion-fab>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/propertylistings/propertylistings-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/propertylistings/propertylistings-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: PropertylistingsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertylistingsPageRoutingModule", function() { return PropertylistingsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _propertylistings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./propertylistings.page */ "./src/app/pages/propertylistings/propertylistings.page.ts");




var routes = [
    {
        path: '',
        component: _propertylistings_page__WEBPACK_IMPORTED_MODULE_3__["PropertylistingsPage"]
    }
];
var PropertylistingsPageRoutingModule = /** @class */ (function () {
    function PropertylistingsPageRoutingModule() {
    }
    PropertylistingsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], PropertylistingsPageRoutingModule);
    return PropertylistingsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/propertylistings/propertylistings.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/propertylistings/propertylistings.module.ts ***!
  \*******************************************************************/
/*! exports provided: PropertylistingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertylistingsPageModule", function() { return PropertylistingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _propertylistings_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./propertylistings-routing.module */ "./src/app/pages/propertylistings/propertylistings-routing.module.ts");
/* harmony import */ var _propertylistings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./propertylistings.page */ "./src/app/pages/propertylistings/propertylistings.page.ts");







var PropertylistingsPageModule = /** @class */ (function () {
    function PropertylistingsPageModule() {
    }
    PropertylistingsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _propertylistings_routing_module__WEBPACK_IMPORTED_MODULE_5__["PropertylistingsPageRoutingModule"]
            ],
            declarations: [_propertylistings_page__WEBPACK_IMPORTED_MODULE_6__["PropertylistingsPage"]]
        })
    ], PropertylistingsPageModule);
    return PropertylistingsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/propertylistings/propertylistings.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/propertylistings/propertylistings.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  box-sizing: border-box;\n}\n\n.column {\n  float: left;\n  width: 25%;\n}\n\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n@media screen and (max-width: 1650px) {\n  .column {\n    float: left;\n    width: 33.33%;\n  }\n}\n\n@media screen and (max-width: 1150px) {\n  .column {\n    float: left;\n    width: 50%;\n  }\n}\n\n@media screen and (max-width: 600px) {\n  .column {\n    float: left;\n    width: 100%;\n  }\n}\n\ni {\n  padding-right: 10px;\n}\n\ni .pad-value {\n  padding-left: 5px;\n}\n\n.action {\n  float: right;\n  top: 50%;\n  -webkit-transform: translate(-5%, -80%);\n          transform: translate(-5%, -80%);\n  -ms-transform: translate(-5%, -80%);\n}\n\n.action ion-icon {\n  padding-left: 15px;\n  font-size: 15px;\n  cursor: pointer;\n}\n\n.IMGcontainers {\n  position: relative;\n}\n\n.IMGcontainers .bottom-right {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  background-color: #fff;\n  padding: 12px 24px;\n  border: none;\n  border-top-left-radius: 10px;\n}\n\n.IMGcontainers .bottom-right ion-icon {\n  padding-left: 10px;\n  font-size: 24px;\n  cursor: pointer;\n}\n\nion-card {\n  border-radius: 10px;\n  color: black;\n}\n\nion-card img {\n  background-size: auto 100%;\n  background-repeat: no-repeat;\n  background-position: center;\n  height: 200px;\n}\n\nion-title {\n  text-align: center;\n}\n\nion-buttons {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvcGVydHlsaXN0aW5ncy9DOlxcVXNlcnNcXENvZGVUcmliZVxcRGVza3RvcFxcQ29kZVRyaWJlXFxpb25pY1xca2V5d29yeERhc2hib2FyZC9zcmNcXGFwcFxccGFnZXNcXHByb3BlcnR5bGlzdGluZ3NcXHByb3BlcnR5bGlzdGluZ3MucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wcm9wZXJ0eWxpc3RpbmdzL3Byb3BlcnR5bGlzdGluZ3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxVQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJO0lBQ0ksV0FBQTtJQUNBLGFBQUE7RUNDTjtBQUNGOztBREVBO0VBQ0k7SUFDSSxXQUFBO0lBQ0EsVUFBQTtFQ0FOO0FBQ0Y7O0FER0E7RUFDSTtJQUNJLFdBQUE7SUFDQSxXQUFBO0VDRE47QUFDRjs7QURJQTtFQUNJLG1CQUFBO0FDRko7O0FER0k7RUFDSSxpQkFBQTtBQ0RSOztBREtBO0VBQ0ksWUFBQTtFQUNBLFFBQUE7RUFDQSx1Q0FBQTtVQUFBLCtCQUFBO0VBQ0EsbUNBQUE7QUNGSjs7QURHSTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNEUjs7QURLQTtFQUNJLGtCQUFBO0FDRko7O0FER0k7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFFQSw0QkFBQTtBQ0ZSOztBREdRO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ0RaOztBRE1BO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0FDSEo7O0FETUE7RUFDSSwwQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0FDSEo7O0FETUE7RUFDSSxrQkFBQTtBQ0hKOztBRE1BO0VBQ0ksZUFBQTtBQ0hKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvcGVydHlsaXN0aW5ncy9wcm9wZXJ0eWxpc3RpbmdzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLmNvbHVtbiB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAyNSU7XHJcbn1cclxuXHJcbi5yb3c6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2NTBweCkge1xyXG4gICAgLmNvbHVtbiB7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgd2lkdGg6IDMzLjMzJTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE1MHB4KSB7XHJcbiAgICAuY29sdW1uIHtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLmNvbHVtbiB7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmkge1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIC5wYWQtdmFsdWUge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uYWN0aW9uIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUlLCAtODAlKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNSUsIC04MCUpO1xyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG4uSU1HY29udGFpbmVycyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAuYm90dG9tLXJpZ2h0IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgcGFkZGluZzogMTJweCAyNHB4O1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAvLyBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuaW9uLWNhcmQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuaW9uLWNhcmQgaW1nIHtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogYXV0byAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbmlvbi10aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmlvbi1idXR0b25zIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufSIsIioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uY29sdW1uIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAyNSU7XG59XG5cbi5yb3c6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2NTBweCkge1xuICAuY29sdW1uIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogMzMuMzMlO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTUwcHgpIHtcbiAgLmNvbHVtbiB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmNvbHVtbiB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbmkge1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuaSAucGFkLXZhbHVlIHtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG5cbi5hY3Rpb24ge1xuICBmbG9hdDogcmlnaHQ7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNSUsIC04MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUlLCAtODAlKTtcbn1cbi5hY3Rpb24gaW9uLWljb24ge1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uSU1HY29udGFpbmVycyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5JTUdjb250YWluZXJzIC5ib3R0b20tcmlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDEycHggMjRweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xufVxuLklNR2NvbnRhaW5lcnMgLmJvdHRvbS1yaWdodCBpb24taWNvbiB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmlvbi1jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5pb24tY2FyZCBpbWcge1xuICBiYWNrZ3JvdW5kLXNpemU6IGF1dG8gMTAwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuXG5pb24tdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1idXR0b25zIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/propertylistings/propertylistings.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/propertylistings/propertylistings.page.ts ***!
  \*****************************************************************/
/*! exports provided: PropertylistingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertylistingsPage", function() { return PropertylistingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_property_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/property.service */ "./src/app/services/property.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var PropertylistingsPage = /** @class */ (function () {
    function PropertylistingsPage(route, propertyService, navCtrl, alertCtrl, platform) {
        var _this = this;
        this.route = route;
        this.propertyService = propertyService;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.data = false;
        this.isBrowser = false;
        if (this.platform.is("desktop")) {
            this.isBrowser = true;
        }
        this.propertyService.propertyList().subscribe(function (data) {
            _this.propertyList = data.map(function (e) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ key: e.payload.doc.id }, e.payload.doc.data());
            });
            console.log(_this.propertyList);
            _this.data = true;
        });
    }
    PropertylistingsPage.prototype.ngOnInit = function () {
    };
    PropertylistingsPage.prototype.addproperty = function () {
        this.route.navigateByUrl("addproperty");
    };
    PropertylistingsPage.prototype.sendToArchived = function (details) {
        var _this = this;
        this.alertCtrl.create({
            // message: 'Total R ' + this.price*this.increment,
            subHeader: 'Are you sure you want to Archive this property',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Confirm',
                    handler: function () {
                        _this.propertyService.sendToArchive(details.key);
                    }
                }
            ]
        }).then(function (alert) { return alert.present(); });
    };
    PropertylistingsPage.prototype.upadate = function (data) {
        // this.route.navigate(['/updateproperty'], { queryParams: { data: data } });
        this.navCtrl.navigateForward('/updateproperty', { queryParams: { key: data.key } });
    };
    PropertylistingsPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_services_property_service__WEBPACK_IMPORTED_MODULE_3__["PropertyService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
    ]; };
    PropertylistingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-propertylistings',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./propertylistings.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/propertylistings/propertylistings.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./propertylistings.page.scss */ "./src/app/pages/propertylistings/propertylistings.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_property_service__WEBPACK_IMPORTED_MODULE_3__["PropertyService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]])
    ], PropertylistingsPage);
    return PropertylistingsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-propertylistings-propertylistings-module.js.map