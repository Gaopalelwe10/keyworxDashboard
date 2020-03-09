(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-message-message-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/message/message.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/message/message.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <!-- <ion-toolbar color=\"primary\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n        <ion-title align=\"center\">Message</ion-title>\r\n    </ion-toolbar>\r\n    <ion-toolbar color=\"primary\">\r\n        <ion-searchbar showcancelbutton=\"\" (ionInput)=\"search($event)\"></ion-searchbar>\r\n    </ion-toolbar> -->\r\n\r\n    <ion-toolbar color=\"primary\">\r\n        <ion-buttons slot=\"start\" *ngIf=\"!isSearchbar\">\r\n            <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title *ngIf=\"!isSearchbar\" align=\"center\">Message</ion-title>\r\n\r\n        <ion-searchbar showCancelButton=\"always\" (ionCancel)=\"isSearchbar=false\" *ngIf=\"isSearchbar\" (ionInput)=\"search($event)\" placeholder=\"Search\"></ion-searchbar>\r\n\r\n        <ion-buttons slot=\"end\" (click)=\"isSearchbar= true\" *ngIf=\"!isSearchbar\">\r\n            <ion-icon name=\"search\" slot=\"end\" class=\"searchIon\"></ion-icon>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n    <ion-toolbar *ngIf=\"isSegment\">\r\n        <ion-segment [(ngModel)]=\"Segment\" color=\"primary\">\r\n            <ion-segment-button value=\"unread\">\r\n                <ion-label>New</ion-label>\r\n\r\n            </ion-segment-button>\r\n\r\n            <ion-segment-button value=\"opened\" color=\"primary\">\r\n                <ion-label>Opened</ion-label>\r\n            </ion-segment-button>\r\n\r\n        </ion-segment>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content [scrollEvents]=\"true\" (ionScroll)=\"onScroll($event)\">\r\n    <div [ngSwitch]=\"Segment\">\r\n        <div *ngSwitchCase=\"'unread'\">\r\n            <ion-list lines='full'>\r\n                <div *ngFor=\"let msg of messageUnReadList \">\r\n                    <!-- <div *ngIf=\"msg.isRead; else elseBlock\"> -->\r\n\r\n                    <ion-item tappable (click)=\"OpenPreview(msg)\" class=\"big\">\r\n\r\n                        <!-- <table style=\"width:100%\">\r\n\r\n                            <tr>\r\n                                <th style=\"width:30%\">\r\n\r\n                                    <h6>\r\n                                        <ion-icon style=\"zoom:1.1;\" color=\"primary\" name=\"mail\"></ion-icon>&nbsp;{{msg.name | slice:0:12}}</h6>\r\n                                </th>\r\n                                <th style=\"width:50%\">\r\n                                    <h6>{{msg.message | slice:0:15}}..</h6>\r\n                                </th>\r\n                                <th style=\"width:100%\">\r\n                                    <h6 class=\"ion-float-right\">{{this.timeFrame(msg.date) }}</h6>\r\n                                </th>\r\n                            </tr>\r\n                        </table> -->\r\n\r\n                        <!-- <div class=\"table-responsive\"> -->\r\n                        <!-- <table class=\"table\" style=\"width: 100%; \">\r\n                            <tbody>\r\n                                <ion-label>\r\n                                    <tr>\r\n                                        <td class=\"action\"><input type=\"checkbox\" /></td>\r\n                                        <td class=\"action\"><i class=\"fa fa-envelope\"></i></td>\r\n                                        <td class=\"name\"> {{msg.name | slice:0:12}}</td>\r\n                                        <td class=\"subject\" style=\"white-space: nowrap; text-overflow:ellipsis; overflow: hidden; \">{{msg.subject}}</td>\r\n                                        <td class=\"message\" style=\"white-space: nowrap; text-overflow:ellipsis; overflow: hidden; \">{{msg.message }}</td>\r\n                                        <td class=\"time\">{{this.timeFrame(msg.date) }}</td>\r\n                                    </tr>\r\n                                </ion-label>\r\n                            </tbody>\r\n                        </table> -->\r\n                        <!-- </div> -->\r\n\r\n                        <ion-avatar slot=\"start\" class=\"Randomcolor\" [ngStyle]=\"{'background-color': getColor(msg.name)}\">\r\n                            {{msg.name | slice:0:1}}\r\n                        </ion-avatar>\r\n\r\n                        <ion-label>\r\n                            <span class=\"font\">\r\n                            <span class=\"name\"> {{this.shorten_text(msg.name)}} </span>\r\n                            <span class=\"ion-float-right dateBig\">{{this.timeFrame(msg.date) }}</span>\r\n                            </span>\r\n                            <span class=\"font\">{{msg.subject}}</span>\r\n                            <span class=\"hide \"> &nbsp; - &nbsp; </span>\r\n                            <span class=\"p\">{{msg.message}}</span>\r\n                        </ion-label>\r\n                    </ion-item>\r\n\r\n\r\n\r\n                    <ion-item tappable (click)=\"OpenPreview(msg)\" class=\"small\">\r\n                        <ion-avatar slot=\"start\" class=\"Randomcolor\" [ngStyle]=\"{'background-color': getColor(msg.name)}\">\r\n                            {{msg.name | slice:0:1}}\r\n                        </ion-avatar>\r\n\r\n                        <ion-label>\r\n                            <h2 class=\"font\">{{msg.name}} <span class=\"ion-float-right dateSmall\">{{this.timeFrame(msg.date) }}</span></h2>\r\n                            <h3 class=\"font\">{{msg.subject}}</h3>\r\n                            <p>{{msg.message}}</p>\r\n                        </ion-label>\r\n\r\n                    </ion-item>\r\n\r\n                </div>\r\n            </ion-list>\r\n        </div>\r\n\r\n        <div *ngSwitchCase=\"'opened'\" class=\"Bg-opend\">\r\n            <ion-list lines='full'>\r\n                <div *ngFor=\"let msg of messageReadList\">\r\n                    <!-- <ng-template *ngif=\"msg.isRead\"> -->\r\n                    <ion-item tappable (click)=\"OpenPreview(msg)\" class=\"big\">\r\n\r\n                        <ion-avatar slot=\"start\" class=\"Randomcolor\" [ngStyle]=\"{'background-color': getColor(msg.name)}\">\r\n                            {{msg.name | slice:0:1}}\r\n                        </ion-avatar>\r\n\r\n                        <ion-label>\r\n                            <span class=\"font\">\r\n                            <span class=\"name\"> {{this.shorten_text(msg.name)}} </span>\r\n                            <span class=\"ion-float-right dateBig\">{{this.timeFrame(msg.date) }}</span>\r\n                            </span>\r\n                            <span class=\"font\">{{msg.subject}}</span>\r\n                            <span class=\"hide \"> &nbsp; - &nbsp; </span>\r\n                            <span class=\"p\">{{msg.message}}</span>\r\n                        </ion-label>\r\n                    </ion-item>\r\n\r\n\r\n\r\n                    <ion-item tappable (click)=\"OpenPreview(msg)\" class=\"small\">\r\n                        <ion-avatar slot=\"start\" class=\"Randomcolor\" [ngStyle]=\"{'background-color': getColor(msg.name)}\">\r\n                            {{msg.name | slice:0:1}}\r\n                        </ion-avatar>\r\n\r\n                        <ion-label>\r\n                            <h2 class=\"font\">{{msg.name}} <span class=\"ion-float-right dateSmall\">{{this.timeFrame(msg.date) }}</span></h2>\r\n                            <h3 class=\"font\">{{msg.subject}}</h3>\r\n                            <p>{{msg.message}}</p>\r\n                        </ion-label>\r\n\r\n                    </ion-item>\r\n                </div>\r\n            </ion-list>\r\n        </div>\r\n    </div>\r\n\r\n\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/message/message-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/message/message-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: MessagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagePageRoutingModule", function() { return MessagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _message_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./message.page */ "./src/app/pages/message/message.page.ts");




var routes = [
    {
        path: '',
        component: _message_page__WEBPACK_IMPORTED_MODULE_3__["MessagePage"]
    }
];
var MessagePageRoutingModule = /** @class */ (function () {
    function MessagePageRoutingModule() {
    }
    MessagePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], MessagePageRoutingModule);
    return MessagePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/message/message.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/message/message.module.ts ***!
  \*************************************************/
/*! exports provided: MessagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagePageModule", function() { return MessagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _message_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./message-routing.module */ "./src/app/pages/message/message-routing.module.ts");
/* harmony import */ var _message_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./message.page */ "./src/app/pages/message/message.page.ts");







var MessagePageModule = /** @class */ (function () {
    function MessagePageModule() {
    }
    MessagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _message_routing_module__WEBPACK_IMPORTED_MODULE_5__["MessagePageRoutingModule"]
            ],
            declarations: [_message_page__WEBPACK_IMPORTED_MODULE_6__["MessagePage"]]
        })
    ], MessagePageModule);
    return MessagePageModule;
}());



/***/ }),

/***/ "./src/app/pages/message/message.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/message/message.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-buttons {\n  padding-right: 5px;\n}\n\n.Bg-opend ion-item {\n  --background: #f5f7f7;\n}\n\n.Randomcolor {\n  color: white;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.dateBig {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-top: 2px;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: normal;\n  z-index: -999;\n}\n\n.dateSmall {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-top: -16px;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: normal;\n  z-index: -999;\n}\n\n.font {\n  font-weight: 500;\n}\n\n.p {\n  color: #666;\n}\n\n.bold {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 2px;\n  margin-bottom: 2px;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: normal;\n}\n\n.time {\n  text-align: end !important;\n  float: right;\n}\n\n.small {\n  display: none;\n}\n\n.big {\n  display: block;\n}\n\n.name {\n  font-weight: 500;\n  width: 130px;\n  display: inline-block;\n}\n\n@media screen and (max-width: 750px) {\n  .small {\n    display: block;\n  }\n\n  .big {\n    display: none;\n  }\n\n  span::before {\n    content: \"\\a\";\n    white-space: pre;\n  }\n\n  .hide {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWVzc2FnZS9DOlxcVXNlcnNcXENvZGVUcmliZVxcRGVza3RvcFxcQ29kZVRyaWJlXFxpb25pY1xca2V5d29yeERhc2hib2FyZC9zcmNcXGFwcFxccGFnZXNcXG1lc3NhZ2VcXG1lc3NhZ2UucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9tZXNzYWdlL21lc3NhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSjs7QURHSTtFQUNJLHFCQUFBO0FDQVI7O0FESUE7RUFFSSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNGSjs7QURLQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUNGSjs7QURLQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FDRko7O0FES0E7RUFDSSxnQkFBQTtBQ0ZKOztBREtBO0VBQ0ksV0FBQTtBQ0ZKOztBREtBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0ZKOztBREtBO0VBQ0ksMEJBQUE7RUFDQSxZQUFBO0FDRko7O0FES0E7RUFDSSxhQUFBO0FDRko7O0FES0E7RUFDSSxjQUFBO0FDRko7O0FES0E7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQ0ZKOztBRFNBO0VBQ0k7SUFDSSxjQUFBO0VDTk47O0VEUUU7SUFDSSxhQUFBO0VDTE47O0VET0U7SUFDSSxhQUFBO0lBQ0EsZ0JBQUE7RUNKTjs7RURNRTtJQUNJLGFBQUE7RUNITjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWVzc2FnZS9tZXNzYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1idXR0b25zIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxufVxyXG5cclxuLkJnLW9wZW5kIHtcclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgICAtLWJhY2tncm91bmQ6ICNmNWY3Zjc7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5SYW5kb21jb2xvciB7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXJcclxufVxyXG5cclxuLmRhdGVCaWcge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICB6LWluZGV4OiAtOTk5O1xyXG59XHJcblxyXG4uZGF0ZVNtYWxsIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi10b3A6IC0xNnB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICB6LWluZGV4OiAtOTk5O1xyXG59XHJcblxyXG4uZm9udCB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4ucCB7XHJcbiAgICBjb2xvcjogIzY2NjtcclxufVxyXG5cclxuLmJvbGQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuLnRpbWUge1xyXG4gICAgdGV4dC1hbGlnbjogZW5kICFpbXBvcnRhbnQ7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5zbWFsbCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uYmlnIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4ubmFtZSB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgd2lkdGg6IDEzMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgLy8gd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIC8vIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAvLyAvKiA8LSB0aGlzIGRvZXMgc2VlbSB0byBiZSByZXF1aXJlZCAqL1xyXG4gICAgLy8gdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7XHJcbiAgICAuc21hbGwge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgLmJpZyB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIHNwYW46OmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogJ1xcQSc7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IHByZTtcclxuICAgIH1cclxuICAgIC5oaWRlIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG59IiwiaW9uLWJ1dHRvbnMge1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG5cbi5CZy1vcGVuZCBpb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogI2Y1ZjdmNztcbn1cblxuLlJhbmRvbWNvbG9yIHtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmRhdGVCaWcge1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tdG9wOiAycHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgei1pbmRleDogLTk5OTtcbn1cblxuLmRhdGVTbWFsbCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi10b3A6IC0xNnB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIHotaW5kZXg6IC05OTk7XG59XG5cbi5mb250IHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnAge1xuICBjb2xvcjogIzY2Njtcbn1cblxuLmJvbGQge1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICBtYXJnaW4tdG9wOiAycHg7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xufVxuXG4udGltZSB7XG4gIHRleHQtYWxpZ246IGVuZCAhaW1wb3J0YW50O1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5zbWFsbCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5iaWcge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLm5hbWUge1xuICBmb250LXdlaWdodDogNTAwO1xuICB3aWR0aDogMTMwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpIHtcbiAgLnNtYWxsIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5iaWcge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICBzcGFuOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXFxhXCI7XG4gICAgd2hpdGUtc3BhY2U6IHByZTtcbiAgfVxuXG4gIC5oaWRlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/message/message.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/message/message.page.ts ***!
  \***********************************************/
/*! exports provided: MessagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagePage", function() { return MessagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/message.service */ "./src/app/services/message.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _viewmessage_viewmessage_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../viewmessage/viewmessage.page */ "./src/app/pages/viewmessage/viewmessage.page.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);






var MessagePage = /** @class */ (function () {
    function MessagePage(messageServ, modalController, platform) {
        var _this = this;
        this.messageServ = messageServ;
        this.modalController = modalController;
        this.platform = platform;
        this.Segment = "unread";
        this.selectedMessage = null;
        // segmentChanged(ev: any) {
        //   console.log('Segment changed', ev);
        // }
        //  searchbar = document.querySelector('ion-searchbar');
        //  items = Array.from(document.querySelector('div').children);
        this.message = [];
        this.isBrowser = false;
        this.isSearchbar = false;
        this.isSegment = true;
        if (this.platform.is("desktop")) {
            this.isBrowser = true;
        }
        this.messageServ.getMessages().subscribe(function (data) {
            _this.messageList = data.map(function (e) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ key: e.payload.doc.id }, e.payload.doc.data());
            }).reverse();
            _this.messageListLoad = _this.messageList;
            console.log(_this.messageList);
        });
        this.messageServ.getMessagesRead().subscribe(function (data) {
            _this.messageReadList = data.map(function (e) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ key: e.payload.doc.id }, e.payload.doc.data());
            }).reverse();
            _this.messageReadListLoad = data.map(function (e) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ key: e.payload.doc.id }, e.payload.doc.data());
            }).reverse();
        });
        this.messageServ.getMessagesUnRead().subscribe(function (data) {
            _this.messageUnReadList = data.map(function (e) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ key: e.payload.doc.id }, e.payload.doc.data());
            }).reverse();
            _this.messageUnReadListLoad = data.map(function (e) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ key: e.payload.doc.id }, e.payload.doc.data());
            }).reverse();
        });
    }
    MessagePage.prototype.ngOnInit = function () {
    };
    MessagePage.prototype.initializeItems = function () {
        this.messageList = this.messageListLoad;
        this.messageReadList = this.messageReadListLoad;
        this.messageUnReadList = this.messageUnReadListLoad;
    };
    MessagePage.prototype.search = function (event) {
        this.initializeItems();
        var searchTerm = event.srcElement.value;
        if (!searchTerm) {
            return;
        }
        this.messageList = this.messageList.filter(function (currentlist) {
            if (currentlist.name && searchTerm) {
                if (currentlist.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
                    return true;
                }
                return false;
            }
        });
        this.messageReadList = this.messageReadList.filter(function (currentRead) {
            if (currentRead.name && searchTerm) {
                if (currentRead.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
                    return true;
                }
                return false;
            }
        });
        this.messageUnReadList = this.messageUnReadList.filter(function (currentUnRead) {
            if (currentUnRead.name && searchTerm) {
                if (currentUnRead.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
                    return true;
                }
                return false;
            }
        });
    };
    MessagePage.prototype.onScroll = function (event) {
        if (event.detail.deltaY > 0) {
            console.log("scrolling down, ");
            // this.foundation.hiddenTabs = true;
            this.isSegment = false;
        }
        else if (event.detail.deltaY < 0) {
            console.log("scrolling up, ");
            this.isSegment = true;
            // this.foundation.hiddenTabs = false;
        }
        ;
    };
    MessagePage.prototype.OpenPreview = function (msg) {
        this.messageServ.updateMessage(msg.key);
        this.modalController.create({
            component: _viewmessage_viewmessage_page__WEBPACK_IMPORTED_MODULE_4__["ViewmessagePage"],
            componentProps: {
                msg: msg
            }
        }).then(function (modal) { return modal.present(); });
    };
    MessagePage.prototype.shorten_text = function (text) {
        var maxLength = 18;
        var ret = text;
        if (ret.length > maxLength) {
            ret = ret.substr(0, maxLength - 3) + ".";
        }
        return ret;
    };
    MessagePage.prototype.timeFrame = function (time) {
        // return moment(time).calendar("HH:mm");
        var otherDates = moment__WEBPACK_IMPORTED_MODULE_5__(time).fromNow();
        var calback = function () {
            return '[' + otherDates + ']';
        };
        return moment__WEBPACK_IMPORTED_MODULE_5__(time).calendar(null, {
            sameDay: 'HH:mm',
            nextDay: calback,
            nextWeek: calback,
            lastDay: "DD MMM",
            lastWeek: "DD MMM",
            sameElse: 'DD/MM/YYYY'
        });
    };
    MessagePage.prototype.getColor = function (str) {
        var letter = str.substring(0, 1).toLowerCase();
        switch (letter) {
            case "a":
                return "#7CB9E8";
            case "b":
                return "blue";
            case "c":
                return "#81613C";
            case "d":
                return "#CD9575";
            case "e":
                return "#614051";
            case "f":
                return "Firebrick";
            case "g":
                return "#B8860B";
            case "h":
                return "#915C83";
            case "i":
                return "	#568203";
            case "j":
                return "#FF91AF	";
            case "k":
                return "#C19A6B";
            case "l":
                return "#1DACD6";
            case "m":
                return "#7F1734";
            case "n":
                return "#1974D2";
            case "o":
                return "Orange";
            case "p":
                return "pink";
            case "q":
                return "#436B95";
            case "r":
                return "red";
            case "s":
                return "#FF3800";
            case "t":
                return "#E68FAC";
            case "u":
                return "#C95A49";
            case "v":
                return "#8806CE";
            case "w":
                return "#536878";
            case "x":
                return "#856D4D";
            case "y":
                return "Yellow";
            case "z":
                return "#9932CC";
        }
    };
    MessagePage.ctorParameters = function () { return [
        { type: src_app_services_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] }
    ]; };
    MessagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-message',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./message.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/message/message.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./message.page.scss */ "./src/app/pages/message/message.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]])
    ], MessagePage);
    return MessagePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-message-message-module.js.map