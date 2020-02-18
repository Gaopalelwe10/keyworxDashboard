(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-updateproperty-updateproperty-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/updateproperty/updateproperty.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/updateproperty/updateproperty.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title>Update Property</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content class=\"ion-padding\">\n\n    <!-- <ion-item color=\"transparent\">\n            <ion-label position=\"floating\">Price</ion-label>\n            <ion-input type=\"number\" formControlName=\"price\"></ion-input>\n        </ion-item>\n    \n        <ion-item color=\"transparent\" class=\"group\">\n            <ion-label position=\"floating\">Location</ion-label>\n            <ion-input type=\"text\" formControlName=\"email\"></ion-input>\n        </ion-item> -->\n    <ion-segment [(ngModel)]=\"Segment\">\n        <ion-segment-button value=\"Property\">\n            <ion-label>Porperty Details</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"Images\">\n            <ion-label>Property Images</ion-label>\n        </ion-segment-button>\n    </ion-segment>\n    <div [ngSwitch]=\"Segment\">\n        <div *ngSwitchCase=\"'Property'\">\n\n\n            <form [formGroup]=\"UpdatepropertyForm\">\n                <br>\n                <br>\n                <div class=\"profile-image\">\n                    <p style=\"text-align: center; font-weight: bold;\">Main image</p>\n                    <div *ngIf=\"mainImage =='' \">\n                        <img src=\"/assets/img/1.jpg\">\n\n                    </div>\n                    <div *ngIf=\"mainImage !='' \">\n                        <img data-src=\"{{mainImage}}\">\n                    </div>\n\n\n                    <div class=\"image-upload\">\n                        <label for=\"file-input3\">\n                                <ion-icon name=\"camera\" class=\"input\" color=\"primary\"> </ion-icon>\n                            </label>\n\n                        <input id=\"file-input3\" class=\"input\" type=\"file\" (change)=\"uploadFile($event)\" accept=\"image/x-png,image/gif,image/jpeg\" />\n                    </div>\n                </div>\n\n\n                <ion-item>\n                    <ion-label position=\"floating\">Description</ion-label>\n                    <ion-textarea formControlName=\"description\"></ion-textarea>\n                </ion-item>\n\n                <ion-item>\n                    <ion-label position=\"floating\">Price</ion-label>\n                    <ion-input type=\"number\" formControlName=\"price\"></ion-input>\n                </ion-item>\n\n                <ion-item>\n                    <ion-label position=\"floating\">Location</ion-label>\n                    <!-- <ion-input type=\"text\" formControlName=\"location\"></ion-input> -->\n                    <ion-input type=\"text\" formControlName=\"location\" (ionInput)=\"search($event)\" [value]=\"selectedAddress\" clearInput></ion-input>\n                </ion-item>\n\n                <ion-list position=\"floating\" style=\"position: absolute; max-width: 100%; min-width: 100%; z-index: 999; \">\n                    <!-- <ion-item *ngFor=\"let album of albums | filtro: textBuscar: 'title'\"> -->\n\n                    <ion-item *ngFor=\"let address of addresses ; let i=index\" (click)=\"onSelect(address, i)\">\n                        <ion-label>{{ address}}</ion-label>\n                    </ion-item>\n                </ion-list>\n\n                <div class=\"row\">\n                    <div class=\"columnSelect\">\n                        <ion-item>\n                            <ion-label>Type of Property</ion-label>\n                            <ion-select interface=\"popover\" formControlName=\"typeofproperty\">\n                                <ion-select-option value=\"House\">House</ion-select-option>\n                                <ion-select-option value=\"Townhouse\">Townhouse</ion-select-option>\n                                <ion-select-option value=\"2\">2</ion-select-option>\n                                <ion-select-option value=\"3\">3+</ion-select-option>\n                            </ion-select>\n                        </ion-item>\n                    </div>\n                    <div class=\"columnSelect\">\n                        <ion-item>\n                            <ion-label>Bedrooms</ion-label>\n                            <ion-select interface=\"popover\" formControlName=\"bedrooms\">\n                                <ion-select-option value=\"0\">0</ion-select-option>\n                                <ion-select-option value=\"1\">1</ion-select-option>\n                                <ion-select-option value=\"2\">2</ion-select-option>\n                                <ion-select-option value=\"3\">3</ion-select-option>\n                                <ion-select-option value=\"4\">4</ion-select-option>\n                                <ion-select-option value=\"5\">5+</ion-select-option>\n                            </ion-select>\n                        </ion-item>\n                    </div>\n                </div>\n\n                <div class=\"row\">\n                    <div class=\"columnSelect\">\n                        <ion-item>\n                            <ion-label>Bathrooms</ion-label>\n                            <ion-select interface=\"popover\" formControlName=\"bathrooms\">\n                                <ion-select-option value=\"0\">0</ion-select-option>\n                                <ion-select-option value=\"1\">1</ion-select-option>\n                                <ion-select-option value=\"2\">2</ion-select-option>\n                                <ion-select-option value=\"3\">3</ion-select-option>\n                                <ion-select-option value=\"4\">4</ion-select-option>\n                                <ion-select-option value=\"5\">5+</ion-select-option>\n\n                            </ion-select>\n                        </ion-item>\n                    </div>\n                    <div class=\"columnSelect\">\n                        <ion-item>\n                            <ion-label>Kitchens</ion-label>\n                            <ion-select interface=\"popover\" formControlName=\"kitchens\">\n                                <ion-select-option value=\"0\">0</ion-select-option>\n                                <ion-select-option value=\"1\">1</ion-select-option>\n                                <ion-select-option value=\"2\">2</ion-select-option>\n                                <ion-select-option value=\"3\">3+</ion-select-option>\n                            </ion-select>\n                        </ion-item>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"columnSelect\">\n                        <ion-item>\n                            <ion-label>Dining Room </ion-label>\n                            <ion-select interface=\"popover\" formControlName=\"diningroom\">\n                                <ion-select-option value=\"0\">0</ion-select-option>\n                                <ion-select-option value=\"1\">1</ion-select-option>\n                                <ion-select-option value=\"2\">2</ion-select-option>\n                                <ion-select-option value=\"3\">3+</ion-select-option>\n                            </ion-select>\n                        </ion-item>\n                    </div>\n                    <div class=\"columnSelect\">\n                        <ion-item>\n                            <ion-label>Garage</ion-label>\n                            <ion-select interface=\"popover\" formControlName=\"garage\">\n                                <ion-select-option value=\"0\">0</ion-select-option>\n                                <ion-select-option value=\"1\">1</ion-select-option>\n                                <ion-select-option value=\"2\">2</ion-select-option>\n                                <ion-select-option value=\"3\">3+</ion-select-option>\n                            </ion-select>\n                        </ion-item>\n                    </div>\n                </div>\n\n                <div class=\"row\">\n                    <div class=\"columnSelect\">\n                        <ion-item>\n                            <ion-label>Garden</ion-label>\n                            <ion-select interface=\"popover\" formControlName=\"garden\">\n                                <ion-select-option value=\"0\">0</ion-select-option>\n                                <ion-select-option value=\"1\">1</ion-select-option>\n                                <ion-select-option value=\"2\">2</ion-select-option>\n                                <ion-select-option value=\"3\">3+</ion-select-option>\n                            </ion-select>\n                        </ion-item>\n                    </div>\n                    <div class=\"columnSelect\">\n                        <ion-item>\n                            <ion-label>Lounges</ion-label>\n                            <ion-select interface=\"popover\" formControlName=\"lounges\">\n                                <ion-select-option value=\"0\">0</ion-select-option>\n                                <ion-select-option value=\"1\">1</ion-select-option>\n                                <ion-select-option value=\"2\">2</ion-select-option>\n                                <ion-select-option value=\"3\">3+</ion-select-option>\n                            </ion-select>\n                        </ion-item>\n                    </div>\n                </div>\n\n\n                <div class=\"row\">\n                    <div class=\"columnSelect\">\n                        <ion-item>\n                            <ion-label>Pool</ion-label>\n                            <ion-select interface=\"popover\" formControlName=\"pool\">\n                                <ion-select-option value=\"0\">0</ion-select-option>\n                                <ion-select-option value=\"1\">1</ion-select-option>\n                                <ion-select-option value=\"2\">2</ion-select-option>\n                                <ion-select-option value=\"3\">3+</ion-select-option>\n                            </ion-select>\n                        </ion-item>\n                    </div>\n                    <div class=\"columnSelect\">\n                        <ion-item>\n                            <ion-label>Pets Allowed</ion-label>\n                            <ion-select interface=\"popover\" formControlName=\"pets\">\n                                <ion-select-option value=\"Yes\">yes</ion-select-option>\n                                <ion-select-option value=\"No\">No</ion-select-option>\n                            </ion-select>\n                        </ion-item>\n                    </div>\n                </div>\n\n                <ion-item>\n                    <ion-label>Category</ion-label>\n                    <ion-select interface=\"popover\" formControlName=\"category\">\n                        <ion-select-option value=\"any\">N/A</ion-select-option>\n                        <ion-select-option value=\"sale\">Sale</ion-select-option>\n                        <ion-select-option value=\"show\">On Show</ion-select-option>\n                    </ion-select>\n                </ion-item>\n\n            </form>\n            <ion-button expand=\"full\" (click)=\"update()\" [disabled]=\"!UpdatepropertyForm.valid\">Update</ion-button>\n        </div>\n\n\n\n\n        <div *ngSwitchCase=\"'Images'\" class=\"uploadMulti\">\n            <div class=\"dropzone\">\n\n\n                <div class=\"image-upload\">\n                    <label for=\"file-multip3\">\n                    <ion-icon name=\"photos\" color=\"primary\"></ion-icon>\n                        <p>\n                            Select Images\n                        </p>\n                    </label>\n                    <input id=\"file-multip3\" type=\"file\" (change)=\"detectFiles($event)\" multiple accept=\"image/x-png,image/gif,image/jpeg\">\n                </div>\n\n                <ion-button (click)=\"uploadMulti()\">\n                    Upload\n                </ion-button>\n\n                <div *ngIf=\"currentUpload\">\n                    <div class=\"progress\">\n                        <div class=\"progress-bar progress-bar-animated\" [ngStyle]=\"{ 'width': currentUpload?.progress + '%' }\"></div>\n                    </div>\n                    Progress: {{currentUpload?.progress}}% Complete\n                </div>\n\n            </div>\n            <div class=\"row\">\n                <div class=\"column\" *ngFor=\"let image of imageList\">\n                    <div>\n                        <img src=\"{{image.downloadURL}}\" style=\"width:100%\">\n\n                        <div class=\"action\">\n                            <ion-icon name=\"trash\" color=\"danger\" (click)=\"delete(image)\"></ion-icon>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n\n\n    </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/updateproperty/updateproperty-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/updateproperty/updateproperty-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: UpdatepropertyPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatepropertyPageRoutingModule", function() { return UpdatepropertyPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _updateproperty_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./updateproperty.page */ "./src/app/pages/updateproperty/updateproperty.page.ts");




var routes = [
    {
        path: '',
        component: _updateproperty_page__WEBPACK_IMPORTED_MODULE_3__["UpdatepropertyPage"]
    }
];
var UpdatepropertyPageRoutingModule = /** @class */ (function () {
    function UpdatepropertyPageRoutingModule() {
    }
    UpdatepropertyPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], UpdatepropertyPageRoutingModule);
    return UpdatepropertyPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/updateproperty/updateproperty.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/updateproperty/updateproperty.module.ts ***!
  \***************************************************************/
/*! exports provided: UpdatepropertyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatepropertyPageModule", function() { return UpdatepropertyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _updateproperty_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./updateproperty-routing.module */ "./src/app/pages/updateproperty/updateproperty-routing.module.ts");
/* harmony import */ var _updateproperty_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./updateproperty.page */ "./src/app/pages/updateproperty/updateproperty.page.ts");







var UpdatepropertyPageModule = /** @class */ (function () {
    function UpdatepropertyPageModule() {
    }
    UpdatepropertyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _updateproperty_routing_module__WEBPACK_IMPORTED_MODULE_5__["UpdatepropertyPageRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            declarations: [_updateproperty_page__WEBPACK_IMPORTED_MODULE_6__["UpdatepropertyPage"]]
        })
    ], UpdatepropertyPageModule);
    return UpdatepropertyPageModule;
}());



/***/ }),

/***/ "./src/app/pages/updateproperty/updateproperty.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/updateproperty/updateproperty.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".profile-image img {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.input,\n.uploadMulti {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.profile-image img {\n  height: 212px;\n  width: 318px;\n  border: 4px solid rgba(255, 255, 255, 0.4);\n}\n\n.image-upload {\n  margin-top: -20px;\n  text-align: center;\n}\n\n.image-upload > input {\n  display: none;\n}\n\n.input {\n  font-size: 40px;\n}\n\n* {\n  box-sizing: border-box;\n}\n\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.column {\n  float: left;\n  width: 25%;\n  padding: 10px;\n}\n\n.columnSelect {\n  float: left;\n  width: 50%;\n  padding: 10px;\n}\n\n@media screen and (max-width: 600px) {\n  .column {\n    float: left;\n    width: 50%;\n    padding: 10px;\n  }\n\n  .columnSelect {\n    float: left;\n    width: 100%;\n    padding: 10px;\n  }\n}\n\n.dropzone {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  min-width: 80vw;\n  font-weight: 200;\n  height: 250px;\n  border: 2px dashed #f16624;\n  border-radius: 5px;\n  background: white;\n  margin: 10px 0;\n}\n\n.action {\n  float: right;\n  top: 50%;\n  -webkit-transform: translate(-5%, -80%);\n          transform: translate(-5%, -80%);\n  -ms-transform: translate(-5%, -80%);\n  background-color: #f1f1f1;\n  padding: 12px 12px;\n  border: none;\n  border-radius: 5px;\n}\n\n.action ion-icon {\n  font-size: 15px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXBkYXRlcHJvcGVydHkvQzpcXFVzZXJzXFxDb2RlVHJpYmVcXERlc2t0b3BcXENvZGVUcmliZVxcaW9uaWNcXGtleXdvcnhEYXNoYm9hcmQvc3JjXFxhcHBcXHBhZ2VzXFx1cGRhdGVwcm9wZXJ0eVxcdXBkYXRlcHJvcGVydHkucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy91cGRhdGVwcm9wZXJ0eS91cGRhdGVwcm9wZXJ0eS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBOztFQUVJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FER0k7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUVBLDBDQUFBO0FDRFI7O0FEUUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FDTEo7O0FEUUE7RUFDSSxhQUFBO0FDTEo7O0FEUUE7RUFDSSxlQUFBO0FDTEo7O0FEUUE7RUFDSSxzQkFBQTtBQ0xKOztBRFFBO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDTEo7O0FEUUE7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUNMSjs7QURRQTtFQUNJLFdBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBQ0xKOztBRFFBO0VBQ0k7SUFDSSxXQUFBO0lBQ0EsVUFBQTtJQUNBLGFBQUE7RUNMTjs7RURPRTtJQUNJLFdBQUE7SUFDQSxXQUFBO0lBQ0EsYUFBQTtFQ0pOO0FBQ0Y7O0FET0E7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDTEo7O0FEUUE7RUFDSSxZQUFBO0VBQ0EsUUFBQTtFQUNBLHVDQUFBO1VBQUEsK0JBQUE7RUFDQSxtQ0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNMSjs7QURNSTtFQUNJLGVBQUE7RUFDQSxlQUFBO0FDSlIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy91cGRhdGVwcm9wZXJ0eS91cGRhdGVwcm9wZXJ0eS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZS1pbWFnZSBpbWcge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLmlucHV0LFxyXG4udXBsb2FkTXVsdGkge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLnByb2ZpbGUtaW1hZ2Uge1xyXG4gICAgaW1nIHtcclxuICAgICAgICBoZWlnaHQ6IDIxMnB4O1xyXG4gICAgICAgIHdpZHRoOiAzMThweDtcclxuICAgICAgICAvLyBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgYm9yZGVyOiA0cHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xyXG4gICAgICAgIC8vIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxNDJweCAtMzdweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gICAgICAgIC8vIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAxNDJweCAtMzdweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gICAgICAgIC8vIGJveC1zaGFkb3c6IDBweCAwcHggMTQycHggLTM3cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICAgIH1cclxufVxyXG5cclxuLmltYWdlLXVwbG9hZCB7XHJcbiAgICBtYXJnaW4tdG9wOiAtMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmltYWdlLXVwbG9hZD5pbnB1dCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uaW5wdXQge1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG59XHJcblxyXG4qIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5yb3c6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbi5jb2x1bW4ge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmNvbHVtblNlbGVjdCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLmNvbHVtbiB7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmNvbHVtblNlbGVjdCB7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgIH1cclxufVxyXG5cclxuLmRyb3B6b25lIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWluLXdpZHRoOiA4MHZ3O1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICBib3JkZXI6IDJweCBkYXNoZWQgI2YxNjYyNDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbn1cclxuXHJcbi5hY3Rpb24ge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNSUsIC04MCUpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01JSwgLTgwJSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG4gICAgcGFkZGluZzogMTJweCAxMnB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbn0iLCIucHJvZmlsZS1pbWFnZSBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLmlucHV0LFxuLnVwbG9hZE11bHRpIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5wcm9maWxlLWltYWdlIGltZyB7XG4gIGhlaWdodDogMjEycHg7XG4gIHdpZHRoOiAzMThweDtcbiAgYm9yZGVyOiA0cHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xufVxuXG4uaW1hZ2UtdXBsb2FkIHtcbiAgbWFyZ2luLXRvcDogLTIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmltYWdlLXVwbG9hZCA+IGlucHV0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmlucHV0IHtcbiAgZm9udC1zaXplOiA0MHB4O1xufVxuXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLnJvdzphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBjbGVhcjogYm90aDtcbn1cblxuLmNvbHVtbiB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMjUlO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uY29sdW1uU2VsZWN0IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA1MCU7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jb2x1bW4ge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiA1MCU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuXG4gIC5jb2x1bW5TZWxlY3Qge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cbn1cbi5kcm9wem9uZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtaW4td2lkdGg6IDgwdnc7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIGhlaWdodDogMjUwcHg7XG4gIGJvcmRlcjogMnB4IGRhc2hlZCAjZjE2NjI0O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBtYXJnaW46IDEwcHggMDtcbn1cblxuLmFjdGlvbiB7XG4gIGZsb2F0OiByaWdodDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01JSwgLTgwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNSUsIC04MCUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICBwYWRkaW5nOiAxMnB4IDEycHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmFjdGlvbiBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/updateproperty/updateproperty.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/updateproperty/updateproperty.page.ts ***!
  \*************************************************************/
/*! exports provided: UpdatepropertyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatepropertyPage", function() { return UpdatepropertyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/profile.service */ "./src/app/services/profile.service.ts");
/* harmony import */ var src_app_services_property_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/property.service */ "./src/app/services/property.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_services_mapbox_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/mapbox.service */ "./src/app/services/mapbox.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_uploads_shared_upload__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/uploads/shared/upload */ "./src/app/uploads/shared/upload.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_12__);













var UpdatepropertyPage = /** @class */ (function () {
    function UpdatepropertyPage(fb, storage, afs, profileService, propertyService, routeA, mapboxService, alertCtrl, router) {
        var _this = this;
        this.fb = fb;
        this.storage = storage;
        this.afs = afs;
        this.profileService = profileService;
        this.propertyService = propertyService;
        this.routeA = routeA;
        this.mapboxService = mapboxService;
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.Segment = "Property";
        this.mainImage = "";
        this.isporpetyDetails = true;
        this.property = {
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
            category: '',
            lng: '',
            lat: '',
        };
        this.addresses = [];
        this.coodinateses = [];
        this.selectedAddress = null;
        this.selectedcoodinates = null;
        this.routeA.queryParams
            .subscribe(function (params) {
            _this.key = params.key;
            console.log(_this.key);
        });
        this.UpdatepropertyForm = fb.group({
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
    UpdatepropertyPage.prototype.ngOnInit = function () {
        var _this = this;
        this.propertyService.update2property(this.key).subscribe(function (data) {
            _this.mainImage = data.mainImage;
            _this.lng = data.lng;
            _this.lat = data.lat;
            _this.selectedAddress = data.location;
            _this.UpdatepropertyForm = _this.fb.group({
                description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](data.description, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                price: [data.price, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                location: [data.location, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                typeofproperty: [data.typeofproperty, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                bedrooms: [data.bedrooms, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                bathrooms: [data.bathrooms, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                kitchens: [data.kitchens, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                garage: [data.garage, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                lounges: [data.lounges, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                garden: [data.garden, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                pets: [data.pets, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                pool: [data.pool, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                diningroom: [data.diningroom, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                category: [data.category, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            });
        });
        this.propertyService.imageList(this.key).subscribe(function (data) {
            _this.imageList = data.map(function (e) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ key: e.payload.doc.id }, e.payload.doc.data());
            });
            console.log(_this.imageList);
        });
    };
    UpdatepropertyPage.prototype.search = function (event) {
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
    UpdatepropertyPage.prototype.onSelect = function (address, i) {
        this.selectedAddress = address;
        //  selectedcoodinates=
        console.log("lng:" + JSON.stringify(this.listMabox[i].geometry.coordinates[0]));
        console.log("lat:" + JSON.stringify(this.listMabox[i].geometry.coordinates[1]));
        this.lng = JSON.stringify(this.listMabox[i].geometry.coordinates[0]);
        this.lat = JSON.stringify(this.listMabox[i].geometry.coordinates[1]);
        console.log("index =" + i);
        console.log(this.selectedAddress);
        this.property.location = this.selectedAddress;
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
    UpdatepropertyPage.prototype.uploadFile = function (event) {
        var _this = this;
        var file = event.target.files[0];
        var filePath = 'PIC' + Math.random().toString(36).substring(2);
        var fileRef = this.storage.ref(filePath);
        var task = this.storage.upload(filePath, file);
        // observe percentage changes
        this.uploadPercent = task.percentageChanges();
        task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
            _this.downloadU = fileRef.getDownloadURL().subscribe(function (url) {
                console.log(url);
                _this.mainImage = url;
                _this.uploadPercent = null;
            });
        })).subscribe();
    };
    UpdatepropertyPage.prototype.update = function () {
        var _this = this;
        this.isporpetyDetails = false;
        this.property.description = this.UpdatepropertyForm.value.description;
        this.property.price = this.UpdatepropertyForm.value.price;
        this.property.location = this.UpdatepropertyForm.value.location;
        this.property.typeofproperty = this.UpdatepropertyForm.value.typeofproperty;
        this.property.bedrooms = this.UpdatepropertyForm.value.bedrooms;
        this.property.bathrooms = this.UpdatepropertyForm.value.bathrooms;
        this.property.kitchens = this.UpdatepropertyForm.value.kitchens;
        this.property.garage = this.UpdatepropertyForm.value.garage;
        this.property.lounges = this.UpdatepropertyForm.value.lounges;
        this.property.garden = this.UpdatepropertyForm.value.garden;
        this.property.pets = this.UpdatepropertyForm.value.pets;
        this.property.pool = this.UpdatepropertyForm.value.pool;
        this.property.diningroom = this.UpdatepropertyForm.value.diningroom;
        this.property.category = this.UpdatepropertyForm.value.category;
        this.property.mainImage = this.mainImage;
        this.property.lat = this.lat;
        this.property.lng = this.lng;
        console.log(this.property);
        this.propertyService.updateproperty(this.key, this.property).then(function () {
            _this.alertCtrl.create({
                // message: 'Upload doc, xlsx, pdf, accdb, docx',
                subHeader: "Information is updated successfully",
                buttons: [
                    {
                        text: 'ok',
                        handler: function () {
                            _this.router.navigateByUrl('propertylistings');
                        }
                    }
                ]
            }).then(function (alert) { return alert.present(); });
        });
    };
    UpdatepropertyPage.prototype.detectFiles = function (event) {
        this.selectedFiles = event.target.files;
    };
    UpdatepropertyPage.prototype.uploadMulti = function () {
        var _this = this;
        var files = this.selectedFiles;
        if (this.selectedFiles != null) {
            var filesIndex = lodash__WEBPACK_IMPORTED_MODULE_12__["range"](files.length);
            lodash__WEBPACK_IMPORTED_MODULE_12__["each"](filesIndex, function (idx) {
                _this.currentUpload = new src_app_uploads_shared_upload__WEBPACK_IMPORTED_MODULE_11__["Upload"](files[idx]);
                _this.propertyService.pushUpload(_this.currentUpload, _this.key);
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
        this.selectedFiles = null;
    };
    UpdatepropertyPage.prototype.delete = function (image) {
        var _this = this;
        this.alertCtrl.create({
            subHeader: 'Are you sure you to delete this image',
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
                        var storageRef = _this.storage.storage.ref().child('/uploads/' + image.name);
                        console.log("delete " + storageRef);
                        _this.propertyService.delete(_this.key, image.key).then(function () {
                            storageRef.delete().then(function () {
                                console.log(" File deleted successfully");
                            }).catch(function (error) {
                                // Uh-oh, an error occurred!
                                console.log("Uh-oh, an error occurred!");
                            });
                        });
                    }
                }
            ]
        }).then(function (alert) { return alert.present(); });
    };
    UpdatepropertyPage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"] },
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] },
        { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"] },
        { type: src_app_services_property_service__WEBPACK_IMPORTED_MODULE_6__["PropertyService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
        { type: src_app_services_mapbox_service__WEBPACK_IMPORTED_MODULE_9__["MapboxService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["AlertController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
    ]; };
    UpdatepropertyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-updateproperty',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./updateproperty.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/updateproperty/updateproperty.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./updateproperty.page.scss */ "./src/app/pages/updateproperty/updateproperty.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"],
            src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"],
            src_app_services_property_service__WEBPACK_IMPORTED_MODULE_6__["PropertyService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            src_app_services_mapbox_service__WEBPACK_IMPORTED_MODULE_9__["MapboxService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], UpdatepropertyPage);
    return UpdatepropertyPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-updateproperty-updateproperty-module.js.map