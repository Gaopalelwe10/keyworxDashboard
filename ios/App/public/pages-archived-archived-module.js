(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-archived-archived-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/archived/archived.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/archived/archived.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>Archived</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n    <ion-grid style=\"height: 100%\" *ngIf=\"data == true && !(propertyList?.length >0) \">\n        <ion-row justify-content-center align-items-center style=\"height: 100%; flex-direction: column; text-align: center;\">\n\n            <p class=\"centerT\">\n                Your archived properties will move here\n            </p>\n        </ion-row>\n    </ion-grid>\n    <div class=\"row\" *ngIf=\"data ==true\">\n        <div class=\"column\" *ngFor=\"let details of propertyList\">\n            <ion-card class=\"card\">\n                <div class=\"IMGcontainers\">\n                    <img src=\"{{details.mainImage}}\" style=\"width:100%\">\n                    <div class=\"bottom-right\">\n                        <ion-icon name=\"trash\" (click)=\"deleteproperty(details)\" color=\"danger\"></ion-icon>\n                        <ion-icon name=\"create\" (click)=\"upadate(details)\"></ion-icon>\n                        <ion-icon name=\"move\" (click)=\"sendToProperty(details)\" color=\"danger\"></ion-icon>\n                    </div>\n                </div>\n\n                <ion-card-content>\n                    <div class=\"action\">\n\n                    </div>\n                    <p>{{details.price | currency:'R'}}</p>\n                    <p>{{details.location}}</p>\n                    <div>\n                        <i class=\"fa fa-bed\" aria-hidden=\"true\" *ngIf='details.bedrooms!=0'>\n                                            <span class=\"pad-value\">{{details.bedrooms}}</span>\n                                        </i>\n                        <i class=\"fa fa-bath\" aria-hidden=\"true\" *ngIf='details.bathrooms!=0'>\n                                            <span class=\"pad-value\"> {{details.bathrooms}}</span>\n                                        </i>\n                        <i class=\"fa fa-car\" aria-hidden=\"true\" *ngIf='details.garage!=0'>\n                                            <span class=\"pad-value\">  {{details.garage}}</span>\n                                        </i>\n                    </div>\n                </ion-card-content>\n            </ion-card>\n        </div>\n    </div>\n\n    <div class=\"row\" *ngIf=\"data == false\">\n        <div class=\"column\" *ngFor=\"let i of [1,2,3,4,5,6,7,8,9,10,11,12]\">\n            <ion-card class=\"card\">\n                <div class=\"IMGcontainers\">\n                    <ion-skeleton-text animated style=\"width: 100%; height: 170px;\"></ion-skeleton-text>\n                    <div class=\"bottom-right\">\n\n                        <ion-grid class=\"ion-no-padding\">\n                            <ion-row>\n                                <ion-col>\n                                    <ion-skeleton-text animated style=\"width: 250%\"></ion-skeleton-text>\n                                </ion-col>\n                                <ion-col>\n                                    <ion-skeleton-text animated style=\"width: 250%\"></ion-skeleton-text>\n                                </ion-col>\n                            </ion-row>\n                        </ion-grid>\n\n                    </div>\n                </div>\n\n                <ion-card-content>\n                    <div class=\"action\">\n\n                    </div>\n                    <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n                    <ion-skeleton-text animated style=\"width: 40%\"></ion-skeleton-text>\n                    <div>\n                        <ion-grid class=\"ion-no-padding\">\n                            <ion-row>\n                                <ion-col>\n                                    <ion-skeleton-text animated style=\"width: 20%\"></ion-skeleton-text>\n                                </ion-col>\n                                <ion-col>\n                                    <ion-skeleton-text animated style=\"width: 20%\"></ion-skeleton-text>\n                                </ion-col>\n                                <ion-col>\n                                    <ion-skeleton-text animated style=\"width: 20%\"></ion-skeleton-text>\n                                </ion-col>\n\n                            </ion-row>\n                        </ion-grid>\n                    </div>\n                </ion-card-content>\n            </ion-card>\n        </div>\n    </div>\n</ion-content>");

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
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  box-sizing: border-box;\n}\n\n.column {\n  float: left;\n  width: 25%;\n}\n\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n@media screen and (max-width: 1650px) {\n  .column {\n    float: left;\n    width: 33.33%;\n  }\n}\n\n@media screen and (max-width: 1150px) {\n  .column {\n    float: left;\n    width: 50%;\n  }\n}\n\n@media screen and (max-width: 600px) {\n  .column {\n    float: left;\n    width: 100%;\n  }\n}\n\ni {\n  padding-right: 10px;\n}\n\ni .pad-value {\n  padding-left: 5px;\n}\n\n.action {\n  float: right;\n  top: 50%;\n  -webkit-transform: translate(-5%, -80%);\n          transform: translate(-5%, -80%);\n  -ms-transform: translate(-5%, -80%);\n}\n\n.action ion-icon {\n  padding-left: 15px;\n  font-size: 15px;\n  cursor: pointer;\n}\n\n.IMGcontainers {\n  position: relative;\n}\n\n.IMGcontainers .bottom-right {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  background-color: #fff;\n  padding: 10px 20px;\n  border: none;\n  border-top-left-radius: 10px;\n}\n\n.IMGcontainers .bottom-right ion-icon {\n  padding-left: 10px;\n  font-size: 24px;\n  cursor: pointer;\n}\n\nion-card {\n  border-radius: 10px;\n  color: black;\n}\n\nion-card img {\n  background-size: auto 100%;\n  background-repeat: no-repeat;\n  background-position: center;\n  height: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXJjaGl2ZWQvQzpcXFVzZXJzXFxDb2RlVHJpYmVcXERlc2t0b3BcXENvZGVUcmliZVxcaW9uaWNcXGtleXdvcnhEYXNoYm9hcmQvc3JjXFxhcHBcXHBhZ2VzXFxhcmNoaXZlZFxcYXJjaGl2ZWQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9hcmNoaXZlZC9hcmNoaXZlZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFVBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0k7SUFDSSxXQUFBO0lBQ0EsYUFBQTtFQ0NOO0FBQ0Y7O0FERUE7RUFDSTtJQUNJLFdBQUE7SUFDQSxVQUFBO0VDQU47QUFDRjs7QURHQTtFQUNJO0lBQ0ksV0FBQTtJQUNBLFdBQUE7RUNETjtBQUNGOztBRElBO0VBQ0ksbUJBQUE7QUNGSjs7QURHSTtFQUNJLGlCQUFBO0FDRFI7O0FES0E7RUFDSSxZQUFBO0VBQ0EsUUFBQTtFQUNBLHVDQUFBO1VBQUEsK0JBQUE7RUFDQSxtQ0FBQTtBQ0ZKOztBREdJO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ0RSOztBREtBO0VBQ0ksa0JBQUE7QUNGSjs7QURHSTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUVBLDRCQUFBO0FDRlI7O0FER1E7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDRFo7O0FETUE7RUFDSSxtQkFBQTtFQUNBLFlBQUE7QUNISjs7QURNQTtFQUNJLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FyY2hpdmVkL2FyY2hpdmVkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLmNvbHVtbiB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAyNSU7XHJcbn1cclxuXHJcbi5yb3c6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2NTBweCkge1xyXG4gICAgLmNvbHVtbiB7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgd2lkdGg6IDMzLjMzJTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE1MHB4KSB7XHJcbiAgICAuY29sdW1uIHtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLmNvbHVtbiB7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmkge1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIC5wYWQtdmFsdWUge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uYWN0aW9uIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUlLCAtODAlKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNSUsIC04MCUpO1xyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG4uSU1HY29udGFpbmVycyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAuYm90dG9tLXJpZ2h0IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAvLyBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuaW9uLWNhcmQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuaW9uLWNhcmQgaW1nIHtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogYXV0byAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbn0iLCIqIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmNvbHVtbiB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMjUlO1xufVxuXG4ucm93OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogdGFibGU7XG4gIGNsZWFyOiBib3RoO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjUwcHgpIHtcbiAgLmNvbHVtbiB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDMzLjMzJTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE1MHB4KSB7XG4gIC5jb2x1bW4ge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jb2x1bW4ge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5pIHtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cbmkgLnBhZC12YWx1ZSB7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufVxuXG4uYWN0aW9uIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUlLCAtODAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01JSwgLTgwJSk7XG59XG4uYWN0aW9uIGlvbi1pY29uIHtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLklNR2NvbnRhaW5lcnMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uSU1HY29udGFpbmVycyAuYm90dG9tLXJpZ2h0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbn1cbi5JTUdjb250YWluZXJzIC5ib3R0b20tcmlnaHQgaW9uLWljb24ge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5pb24tY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuaW9uLWNhcmQgaW1nIHtcbiAgYmFja2dyb3VuZC1zaXplOiBhdXRvIDEwMCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgaGVpZ2h0OiAyMDBweDtcbn0iXX0= */");

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