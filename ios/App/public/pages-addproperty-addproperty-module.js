(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-addproperty-addproperty-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/addproperty/addproperty.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/addproperty/addproperty.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar color=\"primary\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>Add Property</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n\r\n    <div *ngIf=\"isporpetyDetails\">\r\n\r\n\r\n        <form [formGroup]=\"AddpropertyForm\">\r\n            <div class=\"profile-image\">\r\n                <p style=\"text-align: center; font-weight: bold;\">Main image</p>\r\n                <div *ngIf=\"mainImage =='' \">\r\n                    <img src=\"/assets/img/1.jpg\">\r\n\r\n                </div>\r\n                <div *ngIf=\"mainImage !='' \">\r\n                    <img data-src=\"{{mainImage}}\">\r\n                </div>\r\n\r\n\r\n                <div class=\"image-upload\">\r\n                    <label for=\"file-input\">\r\n                            <ion-icon name=\"camera\" class=\"input\" color=\"primary\"> </ion-icon>\r\n                        </label>\r\n\r\n                    <input id=\"file-input\" class=\"input\" type=\"file\" (change)=\"uploadFile($event)\" accept=\"image/x-png,image/gif,image/jpeg\" />\r\n                </div>\r\n            </div>\r\n\r\n\r\n            <ion-item>\r\n                <ion-label position=\"floating\">Description</ion-label>\r\n                <ion-textarea formControlName=\"description\"></ion-textarea>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n                <ion-label position=\"floating\">Price</ion-label>\r\n                <ion-input type=\"number\" formControlName=\"price\"></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n                <ion-label position=\"floating\">Location</ion-label>\r\n                <!-- <ion-input type=\"text\" formControlName=\"location\"></ion-input> -->\r\n                <ion-input type=\"text\" formControlName=\"location\" (ionInput)=\"search($event)\" [value]=\"selectedAddress\" clearInput></ion-input>\r\n\r\n            </ion-item>\r\n\r\n\r\n            <ion-list position=\"floating\" style=\"position: absolute; max-width: 100%; min-width: 100%; z-index: 999; \">\r\n                <!-- <ion-item *ngFor=\"let album of albums | filtro: textBuscar: 'title'\"> -->\r\n\r\n                <ion-item *ngFor=\"let address of addresses ; let i=index\" (click)=\"onSelect(address, i)\">\r\n                    <ion-label>{{ address}}</ion-label>\r\n                </ion-item>\r\n            </ion-list>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"columnSelect\">\r\n                    <ion-item>\r\n                        <ion-label>Type of Property</ion-label>\r\n                        <ion-select interface=\"popover\" formControlName=\"typeofproperty\">\r\n                            <ion-select-option value=\"House\">House</ion-select-option>\r\n                            <ion-select-option value=\"Townhouse\">Townhouse</ion-select-option>\r\n                            <!-- <ion-select-option value=\"2\">2</ion-select-option>\r\n                                <ion-select-option value=\"3\">3+</ion-select-option> -->\r\n                        </ion-select>\r\n                    </ion-item>\r\n                </div>\r\n                <div class=\"columnSelect\">\r\n                    <ion-item>\r\n                        <ion-label>Bedrooms</ion-label>\r\n                        <ion-select interface=\"popover\" formControlName=\"bedrooms\">\r\n                            <ion-select-option value=\"1\">1</ion-select-option>\r\n                            <ion-select-option value=\"2\">2</ion-select-option>\r\n                            <ion-select-option value=\"3\">3</ion-select-option>\r\n                            <ion-select-option value=\"4\">4</ion-select-option>\r\n                            <ion-select-option value=\"5\">5+</ion-select-option>\r\n                        </ion-select>\r\n                    </ion-item>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"columnSelect\">\r\n                    <ion-item>\r\n                        <ion-label>Bathrooms</ion-label>\r\n                        <ion-select interface=\"popover\" formControlName=\"bathrooms\">\r\n                            <ion-select-option value=\"0\">0</ion-select-option>\r\n                            <ion-select-option value=\"1\">1</ion-select-option>\r\n                            <ion-select-option value=\"2\">2</ion-select-option>\r\n                            <ion-select-option value=\"3\">3</ion-select-option>\r\n                            <ion-select-option value=\"4\">4</ion-select-option>\r\n                            <ion-select-option value=\"5\">5+</ion-select-option>\r\n\r\n                        </ion-select>\r\n                    </ion-item>\r\n                </div>\r\n                <div class=\"columnSelect\">\r\n                    <ion-item>\r\n                        <ion-label>Kitchens</ion-label>\r\n                        <ion-select interface=\"popover\" formControlName=\"kitchens\">\r\n                            <ion-select-option value=\"0\">0</ion-select-option>\r\n                            <ion-select-option value=\"1\">1</ion-select-option>\r\n                            <ion-select-option value=\"2\">2</ion-select-option>\r\n                            <ion-select-option value=\"3\">3+</ion-select-option>\r\n                        </ion-select>\r\n                    </ion-item>\r\n                </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"row\">\r\n                <div class=\"columnSelect\">\r\n                    <ion-item>\r\n                        <ion-label>Dining Room </ion-label>\r\n                        <ion-select interface=\"popover\" formControlName=\"diningroom\">\r\n                            <ion-select-option value=\"0\">0</ion-select-option>\r\n                            <ion-select-option value=\"1\">1</ion-select-option>\r\n                            <ion-select-option value=\"2\">2</ion-select-option>\r\n                            <ion-select-option value=\"3\">3+</ion-select-option>\r\n                        </ion-select>\r\n                    </ion-item>\r\n                </div>\r\n                <div class=\"columnSelect\">\r\n\r\n                    <ion-item>\r\n                        <ion-label>Garage</ion-label>\r\n                        <ion-select interface=\"popover\" formControlName=\"garage\">\r\n                            <ion-select-option value=\"0\">0</ion-select-option>\r\n                            <ion-select-option value=\"1\">1</ion-select-option>\r\n                            <ion-select-option value=\"2\">2</ion-select-option>\r\n                            <ion-select-option value=\"3\">3+</ion-select-option>\r\n                        </ion-select>\r\n                    </ion-item>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"columnSelect\">\r\n                    <ion-item>\r\n                        <ion-label>Garden</ion-label>\r\n                        <ion-select interface=\"popover\" formControlName=\"garden\">\r\n                            <ion-select-option value=\"0\">0</ion-select-option>\r\n                            <ion-select-option value=\"1\">1</ion-select-option>\r\n                            <ion-select-option value=\"2\">2</ion-select-option>\r\n                            <ion-select-option value=\"3\">3+</ion-select-option>\r\n                        </ion-select>\r\n                    </ion-item>\r\n                </div>\r\n                <div class=\"columnSelect\">\r\n                    <ion-item>\r\n                        <ion-label>Lounges</ion-label>\r\n                        <ion-select interface=\"popover\" formControlName=\"lounges\">\r\n                            <ion-select-option value=\"0\">0</ion-select-option>\r\n                            <ion-select-option value=\"1\">1</ion-select-option>\r\n                            <ion-select-option value=\"2\">2</ion-select-option>\r\n                            <ion-select-option value=\"3\">3+</ion-select-option>\r\n                        </ion-select>\r\n                    </ion-item>\r\n                </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"row\">\r\n                <div class=\"columnSelect\">\r\n                    <ion-item>\r\n                        <ion-label>Pool</ion-label>\r\n                        <ion-select interface=\"popover\" formControlName=\"pool\">\r\n                            <ion-select-option value=\"0\">0</ion-select-option>\r\n                            <ion-select-option value=\"1\">1</ion-select-option>\r\n                            <ion-select-option value=\"2\">2</ion-select-option>\r\n                            <ion-select-option value=\"3\">3+</ion-select-option>\r\n                        </ion-select>\r\n                    </ion-item>\r\n                </div>\r\n                <div class=\"columnSelect\">\r\n                    <ion-item>\r\n                        <ion-label>Pets Allowed</ion-label>\r\n                        <ion-select interface=\"popover\" formControlName=\"pets\">\r\n                            <ion-select-option value=\"Yes\">yes</ion-select-option>\r\n                            <ion-select-option value=\"No\">No</ion-select-option>\r\n                        </ion-select>\r\n                    </ion-item>\r\n                </div>\r\n            </div>\r\n\r\n            <!-- <div class=\"row\">\r\n                <div class=\"columnSelect\">\r\n\r\n                </div>\r\n                <div class=\"columnSelect\">\r\n\r\n                </div>\r\n            </div> -->\r\n            <ion-item>\r\n                <ion-label>Category</ion-label>\r\n                <ion-select interface=\"popover\" formControlName=\"category\">\r\n                    <ion-select-option value=\"any\">N/A</ion-select-option>\r\n                    <ion-select-option value=\"sale\">Sale</ion-select-option>\r\n                    <ion-select-option value=\"show\">On Show</ion-select-option>\r\n                </ion-select>\r\n            </ion-item>\r\n\r\n        </form>\r\n        <ion-button expand=\"full\" (click)=\"Addproperty()\" [disabled]=\"!AddpropertyForm.valid\">Next</ion-button>\r\n\r\n\r\n\r\n    </div>\r\n\r\n\r\n\r\n    <div *ngIf=\"!isporpetyDetails\" class=\"uploadMulti\">\r\n        <div class=\"dropzone\">\r\n\r\n\r\n            <div class=\"image-upload\">\r\n                <label for=\"file-multiple\">\r\n                    <ion-icon name=\"photos\" color=\"primary\"></ion-icon>\r\n                    <p>\r\n                        Select Images\r\n                    </p>\r\n                </label>\r\n                <input id=\"file-multiple\" type=\"file\" (change)=\"detectFiles($event)\" multiple accept=\"image/x-png,image/gif,image/jpeg\">\r\n            </div>\r\n\r\n            <ion-button (click)=\"uploadMulti()\">\r\n                Upload\r\n            </ion-button>\r\n\r\n            <div *ngIf=\"currentUpload\">\r\n                <div class=\"progress\">\r\n                    <div class=\"progress-bar progress-bar-animated\" [ngStyle]=\"{ 'width': currentUpload?.progress + '%' }\"></div>\r\n                </div>\r\n                Progress: {{currentUpload?.name}} | {{currentUpload?.progress}}% Complete\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"column\" *ngFor=\"let image of imageList\">\r\n                <img src=\"{{image.downloadURL}}\" style=\"width:100%\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/addproperty/addproperty-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/addproperty/addproperty-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: AddpropertyPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddpropertyPageRoutingModule", function() { return AddpropertyPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _addproperty_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addproperty.page */ "./src/app/pages/addproperty/addproperty.page.ts");




var routes = [
    {
        path: '',
        component: _addproperty_page__WEBPACK_IMPORTED_MODULE_3__["AddpropertyPage"]
    }
];
var AddpropertyPageRoutingModule = /** @class */ (function () {
    function AddpropertyPageRoutingModule() {
    }
    AddpropertyPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AddpropertyPageRoutingModule);
    return AddpropertyPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/addproperty/addproperty.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/addproperty/addproperty.module.ts ***!
  \*********************************************************/
/*! exports provided: AddpropertyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddpropertyPageModule", function() { return AddpropertyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _addproperty_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addproperty-routing.module */ "./src/app/pages/addproperty/addproperty-routing.module.ts");
/* harmony import */ var _addproperty_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addproperty.page */ "./src/app/pages/addproperty/addproperty.page.ts");







var AddpropertyPageModule = /** @class */ (function () {
    function AddpropertyPageModule() {
    }
    AddpropertyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _addproperty_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddpropertyPageRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            declarations: [_addproperty_page__WEBPACK_IMPORTED_MODULE_6__["AddpropertyPage"]]
        })
    ], AddpropertyPageModule);
    return AddpropertyPageModule;
}());



/***/ }),

/***/ "./src/app/pages/addproperty/addproperty.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/addproperty/addproperty.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".profile-image img {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.input,\n.uploadMulti {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.profile-image img {\n  height: 212px;\n  width: 318px;\n  border: 4px solid rgba(255, 255, 255, 0.4);\n}\n\n.image-upload {\n  margin-top: -20px;\n  text-align: center;\n}\n\n.image-upload > input {\n  display: none;\n}\n\n.input {\n  font-size: 40px;\n}\n\n* {\n  box-sizing: border-box;\n}\n\n.column {\n  float: left;\n  width: 25%;\n  padding: 10px;\n}\n\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.columnSelect {\n  float: left;\n  width: 50%;\n  padding: 10px;\n}\n\n@media screen and (max-width: 600px) {\n  .column {\n    float: left;\n    width: 50%;\n    padding: 10px;\n  }\n\n  .columnSelect {\n    float: left;\n    width: 100%;\n    padding: 10px;\n  }\n}\n\n.dropzone {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  min-width: 80vw;\n  font-weight: 200;\n  height: 250px;\n  border: 2px dashed #f16624;\n  border-radius: 5px;\n  background: white;\n  margin: 10px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRkcHJvcGVydHkvQzpcXFVzZXJzXFxDb2RlVHJpYmVcXERlc2t0b3BcXENvZGVUcmliZVxcaW9uaWNcXGtleXdvcnhEYXNoYm9hcmQvc3JjXFxhcHBcXHBhZ2VzXFxhZGRwcm9wZXJ0eVxcYWRkcHJvcGVydHkucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9hZGRwcm9wZXJ0eS9hZGRwcm9wZXJ0eS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBOztFQUVJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FER0k7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUVBLDBDQUFBO0FDRFI7O0FEUUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FDTEo7O0FEUUE7RUFDSSxhQUFBO0FDTEo7O0FEUUE7RUFDSSxlQUFBO0FDTEo7O0FEUUE7RUFDSSxzQkFBQTtBQ0xKOztBRFFBO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0FDTEo7O0FEUUE7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUNMSjs7QURRQTtFQUNJLFdBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBQ0xKOztBRFFBO0VBQ0k7SUFDSSxXQUFBO0lBQ0EsVUFBQTtJQUNBLGFBQUE7RUNMTjs7RURPRTtJQUNJLFdBQUE7SUFDQSxXQUFBO0lBQ0EsYUFBQTtFQ0pOO0FBQ0Y7O0FET0E7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDTEoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hZGRwcm9wZXJ0eS9hZGRwcm9wZXJ0eS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZS1pbWFnZSBpbWcge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLmlucHV0LFxyXG4udXBsb2FkTXVsdGkge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLnByb2ZpbGUtaW1hZ2Uge1xyXG4gICAgaW1nIHtcclxuICAgICAgICBoZWlnaHQ6IDIxMnB4O1xyXG4gICAgICAgIHdpZHRoOiAzMThweDtcclxuICAgICAgICAvLyBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgYm9yZGVyOiA0cHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xyXG4gICAgICAgIC8vIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxNDJweCAtMzdweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gICAgICAgIC8vIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAxNDJweCAtMzdweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gICAgICAgIC8vIGJveC1zaGFkb3c6IDBweCAwcHggMTQycHggLTM3cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICAgIH1cclxufVxyXG5cclxuLmltYWdlLXVwbG9hZCB7XHJcbiAgICBtYXJnaW4tdG9wOiAtMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmltYWdlLXVwbG9hZD5pbnB1dCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uaW5wdXQge1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG59XHJcblxyXG4qIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5jb2x1bW4ge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLnJvdzphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBjbGVhcjogYm90aDtcclxufVxyXG5cclxuLmNvbHVtblNlbGVjdCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLmNvbHVtbiB7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmNvbHVtblNlbGVjdCB7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgIH1cclxufVxyXG5cclxuLmRyb3B6b25lIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWluLXdpZHRoOiA4MHZ3O1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICBib3JkZXI6IDJweCBkYXNoZWQgI2YxNjYyNDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbn0iLCIucHJvZmlsZS1pbWFnZSBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLmlucHV0LFxuLnVwbG9hZE11bHRpIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5wcm9maWxlLWltYWdlIGltZyB7XG4gIGhlaWdodDogMjEycHg7XG4gIHdpZHRoOiAzMThweDtcbiAgYm9yZGVyOiA0cHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xufVxuXG4uaW1hZ2UtdXBsb2FkIHtcbiAgbWFyZ2luLXRvcDogLTIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmltYWdlLXVwbG9hZCA+IGlucHV0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmlucHV0IHtcbiAgZm9udC1zaXplOiA0MHB4O1xufVxuXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmNvbHVtbiB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMjUlO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ucm93OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogdGFibGU7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4uY29sdW1uU2VsZWN0IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA1MCU7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jb2x1bW4ge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiA1MCU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuXG4gIC5jb2x1bW5TZWxlY3Qge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cbn1cbi5kcm9wem9uZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtaW4td2lkdGg6IDgwdnc7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIGhlaWdodDogMjUwcHg7XG4gIGJvcmRlcjogMnB4IGRhc2hlZCAjZjE2NjI0O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBtYXJnaW46IDEwcHggMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/addproperty/addproperty.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/addproperty/addproperty.page.ts ***!
  \*******************************************************/
/*! exports provided: AddpropertyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddpropertyPage", function() { return AddpropertyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/profile.service */ "./src/app/services/profile.service.ts");
/* harmony import */ var src_app_services_property_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/property.service */ "./src/app/services/property.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var src_app_uploads_shared_upload__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/uploads/shared/upload */ "./src/app/uploads/shared/upload.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var src_app_services_mapbox_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/mapbox.service */ "./src/app/services/mapbox.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");












var AddpropertyPage = /** @class */ (function () {
    function AddpropertyPage(fb, storage, afs, profileService, propertyService, mapboxService, alertCtrl) {
        this.fb = fb;
        this.storage = storage;
        this.afs = afs;
        this.profileService = profileService;
        this.propertyService = propertyService;
        this.mapboxService = mapboxService;
        this.alertCtrl = alertCtrl;
        this.mainImage = "";
        this.isporpetyDetails = true;
        this.property = {
            uid: '',
            description: '',
            price: '',
            location: '',
            typeofproperty: '',
            bedrooms: '',
            bathrooms: '',
            kitchens: '',
            garage: '',
            lounges: '',
            garden: '',
            pets: '',
            pool: '',
            diningroom: '',
            mainImage: '',
            propertyid: "",
            category: '',
            reactionCount: 0,
            created: '',
            lng: '',
            lat: '',
            archived: false,
        };
        this.addresses = [];
        this.coodinateses = [];
        this.selectedAddress = null;
        this.selectedcoodinates = null;
        this.AddpropertyForm = fb.group({
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            location: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            typeofproperty: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            bedrooms: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            bathrooms: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            kitchens: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            garage: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lounges: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            garden: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            pets: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            pool: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            diningroom: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    AddpropertyPage.prototype.ngOnInit = function () {
        var _this = this;
        this.propertyid = this.afs.createId();
        console.log("key" + this.propertyid);
        this.propertyService.imageList(this.propertyid).subscribe(function (data) {
            _this.imageList = data.map(function (e) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ key: e.payload.doc.id }, e.payload.doc.data());
            });
            console.log(_this.imageList);
        });
    };
    AddpropertyPage.prototype.search = function (event) {
        var _this = this;
        var searchTerm = event.target.value.toLowerCase();
        if (searchTerm && searchTerm.length > 0) {
            this.mapboxService.search_word(searchTerm)
                .subscribe(function (features) {
                _this.coodinateses = features.map(function (feat) { return feat.geometry; });
                _this.addresses = features.map(function (feat) { return feat.place_name; });
                _this.listMabox = features;
                console.log(_this.listMabox);
            });
        }
        else {
            this.addresses = [];
        }
    };
    AddpropertyPage.prototype.onSelect = function (address, i) {
        this.selectedAddress = address;
        //  selectedcoodinates=
        console.log("lng:" + JSON.stringify(this.listMabox[i].geometry.coordinates[0]));
        console.log("lat:" + JSON.stringify(this.listMabox[i].geometry.coordinates[1]));
        this.lng = JSON.stringify(this.listMabox[i].geometry.coordinates[0]);
        this.lat = JSON.stringify(this.listMabox[i].geometry.coordinates[1]);
        console.log("index =" + i);
        console.log(this.selectedAddress);
        //add to FireBase
        // this.dog.collection('coordinate').add({
        //   lat: this.temp.coordinates[1],
        //   lng: this.temp.coordinates[0],
        //   address: address,
        // }).then(function (ref) {
        //   console.log("document was written with ID : " + ref);
        //   alert("physical address : " + address + " , saved successful..")
        // }).catch(function (ee) {
        //   console.log(ee)
        //   console.log("error while processing ..")
        // });
        this.addresses = [];
    };
    AddpropertyPage.prototype.uploadFile = function (event) {
        var _this = this;
        var file = event.target.files[0];
        var filePath = 'PIC' + Math.random().toString(36).substring(2);
        var fileRef = this.storage.ref(filePath);
        var task = this.storage.upload(filePath, file);
        // observe percentage changes
        this.uploadPercent = task.percentageChanges();
        task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
            _this.downloadU = fileRef.getDownloadURL().subscribe(function (url) {
                console.log(url);
                _this.mainImage = url;
                _this.uploadPercent = null;
            });
        })).subscribe();
    };
    AddpropertyPage.prototype.Addproperty = function () {
        if (this.mainImage != "") {
            this.isporpetyDetails = false;
            this.property.uid = this.profileService.getUID();
            this.property.description = this.AddpropertyForm.value.description;
            this.property.price = this.AddpropertyForm.value.price;
            this.property.location = this.selectedAddress;
            this.property.typeofproperty = this.AddpropertyForm.value.typeofproperty;
            this.property.bedrooms = this.AddpropertyForm.value.bedrooms;
            this.property.bathrooms = this.AddpropertyForm.value.bathrooms;
            this.property.kitchens = this.AddpropertyForm.value.kitchens;
            this.property.garage = this.AddpropertyForm.value.garage;
            this.property.lounges = this.AddpropertyForm.value.lounges;
            this.property.garden = this.AddpropertyForm.value.garden;
            this.property.pets = this.AddpropertyForm.value.pets;
            this.property.pool = this.AddpropertyForm.value.pool;
            this.property.diningroom = this.AddpropertyForm.value.diningroom;
            this.property.category = this.AddpropertyForm.value.category;
            this.property.mainImage = this.mainImage;
            this.property.propertyid = this.propertyid;
            this.property.lat = this.lat;
            this.property.lng = this.lng;
            console.log(this.property);
            this.propertyService.addproperty(this.propertyid, this.property);
        }
        else {
            this.alertCtrl.create({
                subHeader: "Pleace select upload main image",
                buttons: [
                    {
                        text: 'ok',
                        handler: function () {
                        }
                    }
                ]
            }).then(function (alert) { return alert.present(); });
        }
    };
    AddpropertyPage.prototype.detectFiles = function (event) {
        this.selectedFiles = event.target.files;
    };
    AddpropertyPage.prototype.uploadMulti = function () {
        var _this = this;
        var files = this.selectedFiles;
        if (this.selectedFiles != null) {
            var filesIndex = lodash__WEBPACK_IMPORTED_MODULE_9__["range"](files.length);
            lodash__WEBPACK_IMPORTED_MODULE_9__["each"](filesIndex, function (idx) {
                _this.currentUpload = new src_app_uploads_shared_upload__WEBPACK_IMPORTED_MODULE_8__["Upload"](files[idx]);
                _this.propertyService.pushUpload(_this.currentUpload, _this.propertyid);
            });
        }
        else {
            this.alertCtrl.create({
                subHeader: "Pleace select images",
                buttons: [
                    {
                        text: 'ok',
                        handler: function () {
                        }
                    }
                ]
            }).then(function (alert) { return alert.present(); });
        }
        this.selectedFiles == null;
    };
    AddpropertyPage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"] },
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"] },
        { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"] },
        { type: src_app_services_property_service__WEBPACK_IMPORTED_MODULE_6__["PropertyService"] },
        { type: src_app_services_mapbox_service__WEBPACK_IMPORTED_MODULE_10__["MapboxService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["AlertController"] }
    ]; };
    AddpropertyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addproperty',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./addproperty.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/addproperty/addproperty.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./addproperty.page.scss */ "./src/app/pages/addproperty/addproperty.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"],
            src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"],
            src_app_services_property_service__WEBPACK_IMPORTED_MODULE_6__["PropertyService"],
            src_app_services_mapbox_service__WEBPACK_IMPORTED_MODULE_10__["MapboxService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["AlertController"]])
    ], AddpropertyPage);
    return AddpropertyPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-addproperty-addproperty-module.js.map