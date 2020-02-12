(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-archived-archived-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/archived/archived.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/archived/archived.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar color=\"primary\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n        <ion-title>Archived</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n    <ion-grid style=\"height: 100%\" *ngIf=\"data == true && !(propertyList?.length >0) \">\r\n        <ion-row justify-content-center align-items-center style=\"height: 100%; flex-direction: column; text-align: center;\">\r\n\r\n            <p class=\"centerT\">\r\n                Your archived properties will move here\r\n            </p>\r\n        </ion-row>\r\n    </ion-grid>\r\n    <div class=\"row\" *ngIf=\"data ==true\">\r\n        <div class=\"column\" *ngFor=\"let details of propertyList\">\r\n            <ion-card class=\"card\">\r\n                <div class=\"IMGcontainers\">\r\n                    <img src=\"{{details.mainImage}}\" style=\"width:100%\">\r\n                    <div class=\"bottom-right\">\r\n                        <ion-icon name=\"trash\" (click)=\"deleteproperty(details)\" color=\"danger\"></ion-icon>\r\n                        <ion-icon name=\"create\" (click)=\"upadate(details)\"></ion-icon>\r\n                        <ion-icon name=\"move\" (click)=\"sendToProperty(details)\" color=\"danger\"></ion-icon>\r\n                    </div>\r\n                </div>\r\n\r\n                <ion-card-content>\r\n                    <div class=\"action\">\r\n\r\n                    </div>\r\n                    <p>{{details.price | currency:'R'}}</p>\r\n                    <p>{{details.location}}</p>\r\n                    <div>\r\n                        <i class=\"fa fa-bed\" aria-hidden=\"true\" *ngIf='details.bedrooms!=0'>\r\n                                            <span class=\"pad-value\">{{details.bedrooms}}</span>\r\n                                        </i>\r\n                        <i class=\"fa fa-bath\" aria-hidden=\"true\" *ngIf='details.bathrooms!=0'>\r\n                                            <span class=\"pad-value\"> {{details.bathrooms}}</span>\r\n                                        </i>\r\n                        <i class=\"fa fa-car\" aria-hidden=\"true\" *ngIf='details.garage!=0'>\r\n                                            <span class=\"pad-value\">  {{details.garage}}</span>\r\n                                        </i>\r\n                    </div>\r\n                </ion-card-content>\r\n            </ion-card>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\" *ngIf=\"data == false\">\r\n        <div class=\"column\" *ngFor=\"let i of [1,2,3,4,5,6,7,8,9,10,11,12]\">\r\n            <ion-card class=\"card\">\r\n                <div class=\"IMGcontainers\">\r\n                    <ion-skeleton-text animated style=\"width: 100%; height: 170px;\"></ion-skeleton-text>\r\n                    <div class=\"bottom-right\">\r\n\r\n                        <ion-grid class=\"ion-no-padding\">\r\n                            <ion-row>\r\n                                <ion-col>\r\n                                    <ion-skeleton-text animated style=\"width: 250%\"></ion-skeleton-text>\r\n                                </ion-col>\r\n                                <ion-col>\r\n                                    <ion-skeleton-text animated style=\"width: 250%\"></ion-skeleton-text>\r\n                                </ion-col>\r\n                            </ion-row>\r\n                        </ion-grid>\r\n\r\n                    </div>\r\n                </div>\r\n\r\n                <ion-card-content>\r\n                    <div class=\"action\">\r\n\r\n                    </div>\r\n                    <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\r\n                    <ion-skeleton-text animated style=\"width: 40%\"></ion-skeleton-text>\r\n                    <div>\r\n                        <ion-grid class=\"ion-no-padding\">\r\n                            <ion-row>\r\n                                <ion-col>\r\n                                    <ion-skeleton-text animated style=\"width: 20%\"></ion-skeleton-text>\r\n                                </ion-col>\r\n                                <ion-col>\r\n                                    <ion-skeleton-text animated style=\"width: 20%\"></ion-skeleton-text>\r\n                                </ion-col>\r\n                                <ion-col>\r\n                                    <ion-skeleton-text animated style=\"width: 20%\"></ion-skeleton-text>\r\n                                </ion-col>\r\n\r\n                            </ion-row>\r\n                        </ion-grid>\r\n                    </div>\r\n                </ion-card-content>\r\n            </ion-card>\r\n        </div>\r\n    </div>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/archived/archived-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/archived/archived-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ArchivedPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchivedPageRoutingModule", function() { return ArchivedPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _archived_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./archived.page */ "./src/app/pages/archived/archived.page.ts");




var routes = [
    {
        path: '',
        component: _archived_page__WEBPACK_IMPORTED_MODULE_3__["ArchivedPage"]
    }
];
var ArchivedPageRoutingModule = /** @class */ (function () {
    function ArchivedPageRoutingModule() {
    }
    ArchivedPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ArchivedPageRoutingModule);
    return ArchivedPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/archived/archived.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/archived/archived.module.ts ***!
  \***************************************************/
/*! exports provided: ArchivedPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchivedPageModule", function() { return ArchivedPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _archived_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./archived-routing.module */ "./src/app/pages/archived/archived-routing.module.ts");
/* harmony import */ var _archived_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./archived.page */ "./src/app/pages/archived/archived.page.ts");







var ArchivedPageModule = /** @class */ (function () {
    function ArchivedPageModule() {
    }
    ArchivedPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _archived_routing_module__WEBPACK_IMPORTED_MODULE_5__["ArchivedPageRoutingModule"]
            ],
            declarations: [_archived_page__WEBPACK_IMPORTED_MODULE_6__["ArchivedPage"]]
        })
    ], ArchivedPageModule);
    return ArchivedPageModule;
}());



/***/ }),

/***/ "./src/app/pages/archived/archived.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/archived/archived.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  box-sizing: border-box;\n}\n\n.column {\n  float: left;\n  width: 25%;\n  padding: 10px;\n}\n\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n@media screen and (max-width: 1650px) {\n  .column {\n    float: left;\n    width: 33.33%;\n    padding: 10px;\n  }\n}\n\n@media screen and (max-width: 1150px) {\n  .column {\n    float: left;\n    width: 50%;\n    padding: 10px;\n  }\n}\n\n@media screen and (max-width: 600px) {\n  .column {\n    float: left;\n    width: 100%;\n    padding: 10px;\n  }\n}\n\ni {\n  padding-right: 10px;\n}\n\ni .pad-value {\n  padding-left: 5px;\n}\n\n.action {\n  float: right;\n  top: 50%;\n  -webkit-transform: translate(-5%, -80%);\n          transform: translate(-5%, -80%);\n  -ms-transform: translate(-5%, -80%);\n}\n\n.action ion-icon {\n  padding-left: 15px;\n  font-size: 15px;\n  cursor: pointer;\n}\n\n.IMGcontainers {\n  position: relative;\n}\n\n.IMGcontainers .bottom-right {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  background-color: #fff;\n  padding: 10px 20px;\n  border: none;\n  border-top-left-radius: 10px;\n}\n\n.IMGcontainers .bottom-right ion-icon {\n  padding-left: 10px;\n  font-size: 24px;\n  cursor: pointer;\n}\n\nion-card {\n  border-radius: 10px;\n  color: black;\n}\n\nion-card img {\n  background-size: auto 100%;\n  background-repeat: no-repeat;\n  background-position: center;\n  height: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXJjaGl2ZWQvQzpcXFVzZXJzXFxDb2RldHJpYmVcXERlc2t0b3BcXGtleXdvcnhEYXNoYm9hcmQvc3JjXFxhcHBcXHBhZ2VzXFxhcmNoaXZlZFxcYXJjaGl2ZWQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9hcmNoaXZlZC9hcmNoaXZlZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJO0lBQ0ksV0FBQTtJQUNBLGFBQUE7SUFDQSxhQUFBO0VDQ047QUFDRjs7QURFQTtFQUNJO0lBQ0ksV0FBQTtJQUNBLFVBQUE7SUFDQSxhQUFBO0VDQU47QUFDRjs7QURHQTtFQUNJO0lBQ0ksV0FBQTtJQUNBLFdBQUE7SUFDQSxhQUFBO0VDRE47QUFDRjs7QURJQTtFQUNJLG1CQUFBO0FDRko7O0FER0k7RUFDSSxpQkFBQTtBQ0RSOztBREtBO0VBQ0ksWUFBQTtFQUNBLFFBQUE7RUFDQSx1Q0FBQTtVQUFBLCtCQUFBO0VBQ0EsbUNBQUE7QUNGSjs7QURHSTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNEUjs7QURLQTtFQUNJLGtCQUFBO0FDRko7O0FER0k7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFFQSw0QkFBQTtBQ0ZSOztBREdRO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ0RaOztBRE1BO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0FDSEo7O0FETUE7RUFDSSwwQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0FDSEoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hcmNoaXZlZC9hcmNoaXZlZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5jb2x1bW4ge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLnJvdzphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBjbGVhcjogYm90aDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTY1MHB4KSB7XHJcbiAgICAuY29sdW1uIHtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICB3aWR0aDogMzMuMzMlO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExNTBweCkge1xyXG4gICAgLmNvbHVtbiB7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLmNvbHVtbiB7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgIH1cclxufVxyXG5cclxuaSB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgLnBhZC12YWx1ZSB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hY3Rpb24ge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNSUsIC04MCUpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01JSwgLTgwJSk7XHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5JTUdjb250YWluZXJzIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC5ib3R0b20tcmlnaHQge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIC8vIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5pb24tY2FyZCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG5pb24tY2FyZCBpbWcge1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBhdXRvIDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxufSIsIioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uY29sdW1uIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAyNSU7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5yb3c6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2NTBweCkge1xuICAuY29sdW1uIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogMzMuMzMlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExNTBweCkge1xuICAuY29sdW1uIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogNTAlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jb2x1bW4ge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cbn1cbmkge1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuaSAucGFkLXZhbHVlIHtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG5cbi5hY3Rpb24ge1xuICBmbG9hdDogcmlnaHQ7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNSUsIC04MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUlLCAtODAlKTtcbn1cbi5hY3Rpb24gaW9uLWljb24ge1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uSU1HY29udGFpbmVycyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5JTUdjb250YWluZXJzIC5ib3R0b20tcmlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xufVxuLklNR2NvbnRhaW5lcnMgLmJvdHRvbS1yaWdodCBpb24taWNvbiB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmlvbi1jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5pb24tY2FyZCBpbWcge1xuICBiYWNrZ3JvdW5kLXNpemU6IGF1dG8gMTAwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBoZWlnaHQ6IDIwMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/archived/archived.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/archived/archived.page.ts ***!
  \*************************************************/
/*! exports provided: ArchivedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchivedPage", function() { return ArchivedPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_property_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/property.service */ "./src/app/services/property.service.ts");





var ArchivedPage = /** @class */ (function () {
    function ArchivedPage(route, propertyService, navCtrl, alertCtrl) {
        var _this = this;
        this.route = route;
        this.propertyService = propertyService;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.data = false;
        this.propertyService.propertyListArchived().subscribe(function (data) {
            _this.propertyList = data.map(function (e) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ key: e.payload.doc.id }, e.payload.doc.data());
            });
            console.log(_this.propertyList);
            _this.data = true;
        });
    }
    ArchivedPage.prototype.ngOnInit = function () {
    };
    ArchivedPage.prototype.deleteproperty = function (details) {
        var _this = this;
        this.alertCtrl.create({
            // message: 'Total R ' + this.price*this.increment,
            subHeader: 'Are you sure you want to delete this property permanently',
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
                        _this.propertyService.deletePermanently(details.key);
                    }
                }
            ]
        }).then(function (alert) { return alert.present(); });
    };
    ArchivedPage.prototype.sendToProperty = function (details) {
        var _this = this;
        this.alertCtrl.create({
            // message: 'Total R ' + this.price*this.increment,
            subHeader: 'Are you sure you want to Restore this property',
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
                        _this.propertyService.sendToPropertyList(details.key);
                    }
                }
            ]
        }).then(function (alert) { return alert.present(); });
    };
    ArchivedPage.prototype.upadate = function (details) {
        // this.route.navigate(['/updateproperty'], { queryParams: { data: data } });
        this.navCtrl.navigateForward('/updateproperty', { queryParams: { key: details.key } });
    };
    ArchivedPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_services_property_service__WEBPACK_IMPORTED_MODULE_4__["PropertyService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
    ]; };
    ArchivedPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-archived',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./archived.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/archived/archived.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./archived.page.scss */ "./src/app/pages/archived/archived.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_property_service__WEBPACK_IMPORTED_MODULE_4__["PropertyService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
    ], ArchivedPage);
    return ArchivedPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-archived-archived-module.js.map