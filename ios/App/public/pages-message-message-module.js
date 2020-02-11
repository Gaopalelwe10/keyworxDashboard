(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-message-message-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/message/message.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/message/message.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar color=\"primary\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n        <ion-title align=\"center\">Message</ion-title>\r\n    </ion-toolbar>\r\n    <ion-toolbar color=\"primary\">\r\n        <ion-searchbar showcancelbutton=\"\" (ionInput)=\"search($event)\"></ion-searchbar>\r\n    </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n    <br>\r\n    <ion-segment [(ngModel)]=\"Segment\">\r\n        <ion-segment-button value=\"unread\">\r\n            <ion-label>New</ion-label>\r\n\r\n        </ion-segment-button>\r\n\r\n        <ion-segment-button value=\"opened\">\r\n            <ion-label>Opened</ion-label>\r\n        </ion-segment-button>\r\n\r\n    </ion-segment>\r\n\r\n    <div [ngSwitch]=\"Segment\">\r\n        <div *ngSwitchCase=\"'unread'\">\r\n            <div *ngFor=\"let msg of messageUnReadList \">\r\n                <!-- <div *ngIf=\"msg.isRead; else elseBlock\"> -->\r\n\r\n                <ion-item tappable (click)=\"OpenPreview(msg)\">\r\n                    <!-- <mat-paginator [length]=\"100\" [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 25, 100]\"> -->\r\n                    <table style=\"width:100%\">\r\n                        <tr>\r\n                            <th>\r\n\r\n                                <h6><i class=\"i1\" color=\"primary\" style=\"zoom:0.7;\" class=\"material-icons\">mail</i>&nbsp;&nbsp;{{msg.name | slice:0:12}}</h6>\r\n                            </th>\r\n                            <th class=\"ion-float-left\">\r\n                                <h6 class=\"ion-float-left\">{{msg.message | slice:0:20}}</h6>\r\n                            </th>\r\n                            <th>\r\n                                <h6 class=\"ion-float-right\">{{msg.date | date:\"MMM dd H:mm\" }}</h6>\r\n                            </th>\r\n                        </tr>\r\n                    </table>\r\n                    <!-- </mat-paginator> -->\r\n\r\n                </ion-item>\r\n                <!-- </div> -->\r\n\r\n            </div>\r\n        </div>\r\n\r\n        <div *ngSwitchCase=\"'opened'\">\r\n\r\n            <div *ngFor=\"let msg of messageReadList\">\r\n                <!-- <ng-template *ngif=\"msg.isRead\"> -->\r\n                <ion-item tappable (click)=\"OpenPreview(msg)\">\r\n\r\n                    <!-- <mat-paginator [length]=\"100\" [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 25, 100]\"> -->\r\n                    <table style=\"width:100%\">\r\n                        <tr>\r\n                            <th>\r\n\r\n                                <h6><i class=\"i2\" color=\"secondary\" style=\"zoom:0.7;\" class=\"material-icons\">mail</i>&nbsp;&nbsp;{{msg.name | slice:0:12}}</h6>\r\n                            </th>\r\n                            <th align=\"center\" class=\"ii\">\r\n                                <h6>{{msg.message | slice:0:5}}...</h6>\r\n                            </th>\r\n                            <th>\r\n                                <h6 class=\"ion-float-right\">{{msg.date | date:\"MMM dd H:mm\" }}</h6>\r\n                            </th>\r\n                        </tr>\r\n                    </table>\r\n                    <!-- </mat-paginator> -->\r\n                </ion-item>\r\n\r\n                <!-- </ng-template> -->\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ion-content>");

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
/* harmony default export */ __webpack_exports__["default"] = (".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n.card1 {\n  width: 95%;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.card {\n  border: 0;\n  margin-bottom: 30px;\n  margin-top: 30px;\n  border-radius: 6px;\n  color: #333;\n  background: #ffff;\n  color: #333;\n  width: 100%;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);\n}\n\n.card {\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n  color: #333;\n}\n\n.card [class*=card-header-] .card-icon,\n.card [class*=card-header-] .card-text {\n  border-radius: 3px;\n  background-color: #999;\n  padding: 20px;\n  margin-top: -30px;\n  margin-right: 15px;\n  float: left;\n}\n\n.card .card-header-warning .card-icon,\n.card .card-header-warning .card-text,\n.card .card-header-warning:not(.card-header-icon):not(.card-header-text),\n.card.bg-warning,\n.card.card-rotate.card.bg-warning .back,\n.card.card-rotate.bg-warning .front {\n  background: linear-gradient(60deg, #a02b2d, #a02b2d);\n}\n\n*,\n::after,\n::before {\n  box-sizing: border-box;\n}\n\n.card-stats .card-header.card-header-icon,\n.card-stats .card-header.card-header-text {\n  text-align: right;\n}\n\n.card [class*=card-header-],\n.card [class*=card-header-] .card-title,\n.card [class*=card-header-] .card-title a,\n.card [class*=card-header-] .icon i,\n.card[class*=bg-],\n.card[class*=bg-] .card-title,\n.card[class*=bg-] .card-title a,\n.card[class*=bg-] .icon i {\n  color: #fff;\n}\n\n.card-stats .card-header .card-category:not([class*=text-]) {\n  color: #999;\n  font-size: 14px;\n}\n\n.card-stats .card-header.card-header-icon .card-category,\n.card-stats .card-header.card-header-icon .card-title,\n.card-stats .card-header.card-header-text .card-category,\n.card-stats .card-header.card-header-text .card-title {\n  margin: 0;\n}\n\n.card-stats .card-header .card-icon + .card-category,\n.card-stats .card-header .card-icon + .card-title {\n  padding-top: 10px;\n}\n\n.card .card-header.card-header-icon .card-title,\n.card .card-header.card-header-text .card-title {\n  margin-top: 15px;\n  color: #3C4858;\n}\n\n.h3,\nh3 {\n  font-size: 1.5625rem;\n  line-height: 1.4em;\n  margin: 20px 0 10px;\n}\n\n.card .card-header-success .card-icon,\n.card .card-header-success .card-text,\n.card .card-header-success:not(.card-header-icon):not(.card-header-text) {\n  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(76, 175, 80, 0.4);\n}\n\n.card .card-header-success .card-icon,\n.card .card-header-success .card-text,\n.card .card-header-success:not(.card-header-icon):not(.card-header-text),\n.card.bg-success,\n.card.card-rotate.bg-success .back,\n.card.card-rotate.bg-success .front {\n  background: linear-gradient(60deg, #66BB6A, #43A047);\n}\n\n.card .card-header-danger .card-icon,\n.card .card-header-danger .card-text,\n.card .card-header-danger:not(.card-header-icon):not(.card-header-text) {\n  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(244, 67, 54, 0.4);\n}\n\n.card .card-header-danger .card-icon,\n.card .card-header-danger .card-text,\n.card .card-header-danger:not(.card-header-icon):not(.card-header-text),\n.card.bg-danger,\n.card.card-rotate.bg-danger .back,\n.card.card-rotate.bg-danger .front {\n  background: linear-gradient(60deg, #26C6DA, #00ACC1);\n}\n\n.card .card-header-info .card-icon,\n.card .card-header-info .card-text,\n.card .card-header-info:not(.card-header-icon):not(.card-header-text) {\n  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(0, 188, 212, 0.4);\n}\n\n.card .card-header-info .card-icon,\n.card .card-header-info .card-text,\n.card .card-header-info:not(.card-header-icon):not(.card-header-text),\n.card.bg-info,\n.card.card-rotate.bg-info .back,\n.card.card-rotate.bg-info .front {\n  background: linear-gradient(60deg, #E4A9A8, #E4A9A8);\n}\n\nion-content {\n  --background: url(\"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ2XeDhKV_ILzmXjhoZoSX4Po5cssIbK2OixEo6h6Bc4WU0EVD3\") no-repeat fixed center;\n}\n\nion-item {\n  --background: transparent;\n}\n\n.ii {\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  width: 35%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWVzc2FnZS9DOlxcVXNlcnNcXENvZGVUcmliZVxcRGVza3RvcFxcQ29kZVRyaWJlXFxpb25pY1xca2V5d29yeERhc2hib2FyZC9zcmNcXGFwcFxccGFnZXNcXG1lc3NhZ2VcXG1lc3NhZ2UucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9tZXNzYWdlL21lc3NhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSwrR0FBQTtFQUNBLDJDQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTs7RUFFSSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7Ozs7OztFQU1JLG9EQUFBO0FDQ0o7O0FERUE7OztFQUdJLHNCQUFBO0FDQ0o7O0FERUE7O0VBRUksaUJBQUE7QUNDSjs7QURFQTs7Ozs7Ozs7RUFRSSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBOzs7O0VBSUksU0FBQTtBQ0NKOztBREVBOztFQUVJLGlCQUFBO0FDQ0o7O0FERUE7O0VBRUksZ0JBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7O0VBRUksb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7OztFQUdJLG9GQUFBO0FDQ0o7O0FERUE7Ozs7OztFQU1JLG9EQUFBO0FDQ0o7O0FERUE7OztFQUdJLG9GQUFBO0FDQ0o7O0FERUE7Ozs7OztFQU1JLG9EQUFBO0FDQ0o7O0FERUE7OztFQUdJLG9GQUFBO0FDQ0o7O0FERUE7Ozs7OztFQU1JLG9EQUFBO0FDQ0o7O0FERUE7RUFDSSxzSkFBQTtBQ0NKOztBRE9BO0VBQ0kseUJBQUE7QUNKSjs7QURPQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNKSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21lc3NhZ2UvbWVzc2FnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jYXJkIGltZyB7XHJcbiAgICBtYXgtaGVpZ2h0OiAzNXZoO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmNhcmQxIHtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmY7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIC4yKSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAuMTIpO1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggNHB4IDAgcmdiYSggMCwgMCwgMCwgLjE0KTtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtaW4td2lkdGg6IDA7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICBjb2xvcjogIzMzMztcclxufVxyXG5cclxuLmNhcmQgW2NsYXNzKj1jYXJkLWhlYWRlci1dIC5jYXJkLWljb24sXHJcbi5jYXJkIFtjbGFzcyo9Y2FyZC1oZWFkZXItXSAuY2FyZC10ZXh0IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5OTk7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTMwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLmNhcmQgLmNhcmQtaGVhZGVyLXdhcm5pbmcgLmNhcmQtaWNvbixcclxuLmNhcmQgLmNhcmQtaGVhZGVyLXdhcm5pbmcgLmNhcmQtdGV4dCxcclxuLmNhcmQgLmNhcmQtaGVhZGVyLXdhcm5pbmc6bm90KC5jYXJkLWhlYWRlci1pY29uKTpub3QoLmNhcmQtaGVhZGVyLXRleHQpLFxyXG4uY2FyZC5iZy13YXJuaW5nLFxyXG4uY2FyZC5jYXJkLXJvdGF0ZS5jYXJkLmJnLXdhcm5pbmcgLmJhY2ssXHJcbi5jYXJkLmNhcmQtcm90YXRlLmJnLXdhcm5pbmcgLmZyb250IHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2MGRlZywgI2EwMmIyZCwgI2EwMmIyZCk7XHJcbn1cclxuXHJcbiosXHJcbiA6OmFmdGVyLFxyXG4gOjpiZWZvcmUge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLmNhcmQtc3RhdHMgLmNhcmQtaGVhZGVyLmNhcmQtaGVhZGVyLWljb24sXHJcbi5jYXJkLXN0YXRzIC5jYXJkLWhlYWRlci5jYXJkLWhlYWRlci10ZXh0IHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4uY2FyZCBbY2xhc3MqPWNhcmQtaGVhZGVyLV0sXHJcbi5jYXJkIFtjbGFzcyo9Y2FyZC1oZWFkZXItXSAuY2FyZC10aXRsZSxcclxuLmNhcmQgW2NsYXNzKj1jYXJkLWhlYWRlci1dIC5jYXJkLXRpdGxlIGEsXHJcbi5jYXJkIFtjbGFzcyo9Y2FyZC1oZWFkZXItXSAuaWNvbiBpLFxyXG4uY2FyZFtjbGFzcyo9YmctXSxcclxuLmNhcmRbY2xhc3MqPWJnLV0gLmNhcmQtdGl0bGUsXHJcbi5jYXJkW2NsYXNzKj1iZy1dIC5jYXJkLXRpdGxlIGEsXHJcbi5jYXJkW2NsYXNzKj1iZy1dIC5pY29uIGkge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5jYXJkLXN0YXRzIC5jYXJkLWhlYWRlciAuY2FyZC1jYXRlZ29yeTpub3QoW2NsYXNzKj10ZXh0LV0pIHtcclxuICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uY2FyZC1zdGF0cyAuY2FyZC1oZWFkZXIuY2FyZC1oZWFkZXItaWNvbiAuY2FyZC1jYXRlZ29yeSxcclxuLmNhcmQtc3RhdHMgLmNhcmQtaGVhZGVyLmNhcmQtaGVhZGVyLWljb24gLmNhcmQtdGl0bGUsXHJcbi5jYXJkLXN0YXRzIC5jYXJkLWhlYWRlci5jYXJkLWhlYWRlci10ZXh0IC5jYXJkLWNhdGVnb3J5LFxyXG4uY2FyZC1zdGF0cyAuY2FyZC1oZWFkZXIuY2FyZC1oZWFkZXItdGV4dCAuY2FyZC10aXRsZSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5jYXJkLXN0YXRzIC5jYXJkLWhlYWRlciAuY2FyZC1pY29uKy5jYXJkLWNhdGVnb3J5LFxyXG4uY2FyZC1zdGF0cyAuY2FyZC1oZWFkZXIgLmNhcmQtaWNvbisuY2FyZC10aXRsZSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5cclxuLmNhcmQgLmNhcmQtaGVhZGVyLmNhcmQtaGVhZGVyLWljb24gLmNhcmQtdGl0bGUsXHJcbi5jYXJkIC5jYXJkLWhlYWRlci5jYXJkLWhlYWRlci10ZXh0IC5jYXJkLXRpdGxlIHtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBjb2xvcjogIzNDNDg1ODtcclxufVxyXG5cclxuLmgzLFxyXG5oMyB7XHJcbiAgICBmb250LXNpemU6IDEuNTYyNXJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjRlbTtcclxuICAgIG1hcmdpbjogMjBweCAwIDEwcHg7XHJcbn1cclxuXHJcbi5jYXJkIC5jYXJkLWhlYWRlci1zdWNjZXNzIC5jYXJkLWljb24sXHJcbi5jYXJkIC5jYXJkLWhlYWRlci1zdWNjZXNzIC5jYXJkLXRleHQsXHJcbi5jYXJkIC5jYXJkLWhlYWRlci1zdWNjZXNzOm5vdCguY2FyZC1oZWFkZXItaWNvbik6bm90KC5jYXJkLWhlYWRlci10ZXh0KSB7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAuMTQpLCAwIDdweCAxMHB4IC01cHggcmdiYSg3NiwgMTc1LCA4MCwgLjQpO1xyXG59XHJcblxyXG4uY2FyZCAuY2FyZC1oZWFkZXItc3VjY2VzcyAuY2FyZC1pY29uLFxyXG4uY2FyZCAuY2FyZC1oZWFkZXItc3VjY2VzcyAuY2FyZC10ZXh0LFxyXG4uY2FyZCAuY2FyZC1oZWFkZXItc3VjY2Vzczpub3QoLmNhcmQtaGVhZGVyLWljb24pOm5vdCguY2FyZC1oZWFkZXItdGV4dCksXHJcbi5jYXJkLmJnLXN1Y2Nlc3MsXHJcbi5jYXJkLmNhcmQtcm90YXRlLmJnLXN1Y2Nlc3MgLmJhY2ssXHJcbi5jYXJkLmNhcmQtcm90YXRlLmJnLXN1Y2Nlc3MgLmZyb250IHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2MGRlZywgIzY2QkI2QSwgIzQzQTA0Nyk7XHJcbn1cclxuXHJcbi5jYXJkIC5jYXJkLWhlYWRlci1kYW5nZXIgLmNhcmQtaWNvbixcclxuLmNhcmQgLmNhcmQtaGVhZGVyLWRhbmdlciAuY2FyZC10ZXh0LFxyXG4uY2FyZCAuY2FyZC1oZWFkZXItZGFuZ2VyOm5vdCguY2FyZC1oZWFkZXItaWNvbik6bm90KC5jYXJkLWhlYWRlci10ZXh0KSB7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAuMTQpLCAwIDdweCAxMHB4IC01cHggcmdiYSgyNDQsIDY3LCA1NCwgLjQpO1xyXG59XHJcblxyXG4uY2FyZCAuY2FyZC1oZWFkZXItZGFuZ2VyIC5jYXJkLWljb24sXHJcbi5jYXJkIC5jYXJkLWhlYWRlci1kYW5nZXIgLmNhcmQtdGV4dCxcclxuLmNhcmQgLmNhcmQtaGVhZGVyLWRhbmdlcjpub3QoLmNhcmQtaGVhZGVyLWljb24pOm5vdCguY2FyZC1oZWFkZXItdGV4dCksXHJcbi5jYXJkLmJnLWRhbmdlcixcclxuLmNhcmQuY2FyZC1yb3RhdGUuYmctZGFuZ2VyIC5iYWNrLFxyXG4uY2FyZC5jYXJkLXJvdGF0ZS5iZy1kYW5nZXIgLmZyb250IHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2MGRlZywgIzI2QzZEQSwgIzAwQUNDMSk7XHJcbn1cclxuXHJcbi5jYXJkIC5jYXJkLWhlYWRlci1pbmZvIC5jYXJkLWljb24sXHJcbi5jYXJkIC5jYXJkLWhlYWRlci1pbmZvIC5jYXJkLXRleHQsXHJcbi5jYXJkIC5jYXJkLWhlYWRlci1pbmZvOm5vdCguY2FyZC1oZWFkZXItaWNvbik6bm90KC5jYXJkLWhlYWRlci10ZXh0KSB7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAuMTQpLCAwIDdweCAxMHB4IC01cHggcmdiYSgwLCAxODgsIDIxMiwgLjQpO1xyXG59XHJcblxyXG4uY2FyZCAuY2FyZC1oZWFkZXItaW5mbyAuY2FyZC1pY29uLFxyXG4uY2FyZCAuY2FyZC1oZWFkZXItaW5mbyAuY2FyZC10ZXh0LFxyXG4uY2FyZCAuY2FyZC1oZWFkZXItaW5mbzpub3QoLmNhcmQtaGVhZGVyLWljb24pOm5vdCguY2FyZC1oZWFkZXItdGV4dCksXHJcbi5jYXJkLmJnLWluZm8sXHJcbi5jYXJkLmNhcmQtcm90YXRlLmJnLWluZm8gLmJhY2ssXHJcbi5jYXJkLmNhcmQtcm90YXRlLmJnLWluZm8gLmZyb250IHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2MGRlZywgI0U0QTlBOCwgI0U0QTlBOCk7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogdXJsKCdodHRwczovL2VuY3J5cHRlZC10Ym4wLmdzdGF0aWMuY29tL2ltYWdlcz9xPXRibiUzQUFOZDlHY1EyWGVEaEtWX0lMem1YamhvWm9TWDRQbzVjc3NJYksyT2l4RW82aDZCYzRXVTBFVkQzJykgbm8tcmVwZWF0IGZpeGVkIGNlbnRlcjtcclxuICAgIC8vIC0tYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIC8vIC0tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIC8vIC8vIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLXNpemU6IDE1MHB4O1xyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uaWkge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogMzUlO1xyXG59XHJcblxyXG4vLyBpb24tc2VnbWVudCB7XHJcbi8vICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbi8vIH0iLCIud2VsY29tZS1jYXJkIGltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jYXJkMSB7XG4gIHdpZHRoOiA5NSU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4uY2FyZCB7XG4gIGJvcmRlcjogMDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBjb2xvcjogIzMzMztcbiAgYmFja2dyb3VuZDogI2ZmZmY7XG4gIGNvbG9yOiAjMzMzO1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNoYWRvdzogMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBib3gtc2hhZG93OiAwIDFweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpO1xufVxuXG4uY2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLXdpZHRoOiAwO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIGNvbG9yOiAjMzMzO1xufVxuXG4uY2FyZCBbY2xhc3MqPWNhcmQtaGVhZGVyLV0gLmNhcmQtaWNvbixcbi5jYXJkIFtjbGFzcyo9Y2FyZC1oZWFkZXItXSAuY2FyZC10ZXh0IHtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5O1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAtMzBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBmbG9hdDogbGVmdDtcbn1cblxuLmNhcmQgLmNhcmQtaGVhZGVyLXdhcm5pbmcgLmNhcmQtaWNvbixcbi5jYXJkIC5jYXJkLWhlYWRlci13YXJuaW5nIC5jYXJkLXRleHQsXG4uY2FyZCAuY2FyZC1oZWFkZXItd2FybmluZzpub3QoLmNhcmQtaGVhZGVyLWljb24pOm5vdCguY2FyZC1oZWFkZXItdGV4dCksXG4uY2FyZC5iZy13YXJuaW5nLFxuLmNhcmQuY2FyZC1yb3RhdGUuY2FyZC5iZy13YXJuaW5nIC5iYWNrLFxuLmNhcmQuY2FyZC1yb3RhdGUuYmctd2FybmluZyAuZnJvbnQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNjBkZWcsICNhMDJiMmQsICNhMDJiMmQpO1xufVxuXG4qLFxuOjphZnRlcixcbjo6YmVmb3JlIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmNhcmQtc3RhdHMgLmNhcmQtaGVhZGVyLmNhcmQtaGVhZGVyLWljb24sXG4uY2FyZC1zdGF0cyAuY2FyZC1oZWFkZXIuY2FyZC1oZWFkZXItdGV4dCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uY2FyZCBbY2xhc3MqPWNhcmQtaGVhZGVyLV0sXG4uY2FyZCBbY2xhc3MqPWNhcmQtaGVhZGVyLV0gLmNhcmQtdGl0bGUsXG4uY2FyZCBbY2xhc3MqPWNhcmQtaGVhZGVyLV0gLmNhcmQtdGl0bGUgYSxcbi5jYXJkIFtjbGFzcyo9Y2FyZC1oZWFkZXItXSAuaWNvbiBpLFxuLmNhcmRbY2xhc3MqPWJnLV0sXG4uY2FyZFtjbGFzcyo9YmctXSAuY2FyZC10aXRsZSxcbi5jYXJkW2NsYXNzKj1iZy1dIC5jYXJkLXRpdGxlIGEsXG4uY2FyZFtjbGFzcyo9YmctXSAuaWNvbiBpIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5jYXJkLXN0YXRzIC5jYXJkLWhlYWRlciAuY2FyZC1jYXRlZ29yeTpub3QoW2NsYXNzKj10ZXh0LV0pIHtcbiAgY29sb3I6ICM5OTk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmNhcmQtc3RhdHMgLmNhcmQtaGVhZGVyLmNhcmQtaGVhZGVyLWljb24gLmNhcmQtY2F0ZWdvcnksXG4uY2FyZC1zdGF0cyAuY2FyZC1oZWFkZXIuY2FyZC1oZWFkZXItaWNvbiAuY2FyZC10aXRsZSxcbi5jYXJkLXN0YXRzIC5jYXJkLWhlYWRlci5jYXJkLWhlYWRlci10ZXh0IC5jYXJkLWNhdGVnb3J5LFxuLmNhcmQtc3RhdHMgLmNhcmQtaGVhZGVyLmNhcmQtaGVhZGVyLXRleHQgLmNhcmQtdGl0bGUge1xuICBtYXJnaW46IDA7XG59XG5cbi5jYXJkLXN0YXRzIC5jYXJkLWhlYWRlciAuY2FyZC1pY29uICsgLmNhcmQtY2F0ZWdvcnksXG4uY2FyZC1zdGF0cyAuY2FyZC1oZWFkZXIgLmNhcmQtaWNvbiArIC5jYXJkLXRpdGxlIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbi5jYXJkIC5jYXJkLWhlYWRlci5jYXJkLWhlYWRlci1pY29uIC5jYXJkLXRpdGxlLFxuLmNhcmQgLmNhcmQtaGVhZGVyLmNhcmQtaGVhZGVyLXRleHQgLmNhcmQtdGl0bGUge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBjb2xvcjogIzNDNDg1ODtcbn1cblxuLmgzLFxuaDMge1xuICBmb250LXNpemU6IDEuNTYyNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNGVtO1xuICBtYXJnaW46IDIwcHggMCAxMHB4O1xufVxuXG4uY2FyZCAuY2FyZC1oZWFkZXItc3VjY2VzcyAuY2FyZC1pY29uLFxuLmNhcmQgLmNhcmQtaGVhZGVyLXN1Y2Nlc3MgLmNhcmQtdGV4dCxcbi5jYXJkIC5jYXJkLWhlYWRlci1zdWNjZXNzOm5vdCguY2FyZC1oZWFkZXItaWNvbik6bm90KC5jYXJkLWhlYWRlci10ZXh0KSB7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDdweCAxMHB4IC01cHggcmdiYSg3NiwgMTc1LCA4MCwgMC40KTtcbn1cblxuLmNhcmQgLmNhcmQtaGVhZGVyLXN1Y2Nlc3MgLmNhcmQtaWNvbixcbi5jYXJkIC5jYXJkLWhlYWRlci1zdWNjZXNzIC5jYXJkLXRleHQsXG4uY2FyZCAuY2FyZC1oZWFkZXItc3VjY2Vzczpub3QoLmNhcmQtaGVhZGVyLWljb24pOm5vdCguY2FyZC1oZWFkZXItdGV4dCksXG4uY2FyZC5iZy1zdWNjZXNzLFxuLmNhcmQuY2FyZC1yb3RhdGUuYmctc3VjY2VzcyAuYmFjayxcbi5jYXJkLmNhcmQtcm90YXRlLmJnLXN1Y2Nlc3MgLmZyb250IHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDYwZGVnLCAjNjZCQjZBLCAjNDNBMDQ3KTtcbn1cblxuLmNhcmQgLmNhcmQtaGVhZGVyLWRhbmdlciAuY2FyZC1pY29uLFxuLmNhcmQgLmNhcmQtaGVhZGVyLWRhbmdlciAuY2FyZC10ZXh0LFxuLmNhcmQgLmNhcmQtaGVhZGVyLWRhbmdlcjpub3QoLmNhcmQtaGVhZGVyLWljb24pOm5vdCguY2FyZC1oZWFkZXItdGV4dCkge1xuICBib3gtc2hhZG93OiAwIDRweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCA3cHggMTBweCAtNXB4IHJnYmEoMjQ0LCA2NywgNTQsIDAuNCk7XG59XG5cbi5jYXJkIC5jYXJkLWhlYWRlci1kYW5nZXIgLmNhcmQtaWNvbixcbi5jYXJkIC5jYXJkLWhlYWRlci1kYW5nZXIgLmNhcmQtdGV4dCxcbi5jYXJkIC5jYXJkLWhlYWRlci1kYW5nZXI6bm90KC5jYXJkLWhlYWRlci1pY29uKTpub3QoLmNhcmQtaGVhZGVyLXRleHQpLFxuLmNhcmQuYmctZGFuZ2VyLFxuLmNhcmQuY2FyZC1yb3RhdGUuYmctZGFuZ2VyIC5iYWNrLFxuLmNhcmQuY2FyZC1yb3RhdGUuYmctZGFuZ2VyIC5mcm9udCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2MGRlZywgIzI2QzZEQSwgIzAwQUNDMSk7XG59XG5cbi5jYXJkIC5jYXJkLWhlYWRlci1pbmZvIC5jYXJkLWljb24sXG4uY2FyZCAuY2FyZC1oZWFkZXItaW5mbyAuY2FyZC10ZXh0LFxuLmNhcmQgLmNhcmQtaGVhZGVyLWluZm86bm90KC5jYXJkLWhlYWRlci1pY29uKTpub3QoLmNhcmQtaGVhZGVyLXRleHQpIHtcbiAgYm94LXNoYWRvdzogMCA0cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgN3B4IDEwcHggLTVweCByZ2JhKDAsIDE4OCwgMjEyLCAwLjQpO1xufVxuXG4uY2FyZCAuY2FyZC1oZWFkZXItaW5mbyAuY2FyZC1pY29uLFxuLmNhcmQgLmNhcmQtaGVhZGVyLWluZm8gLmNhcmQtdGV4dCxcbi5jYXJkIC5jYXJkLWhlYWRlci1pbmZvOm5vdCguY2FyZC1oZWFkZXItaWNvbik6bm90KC5jYXJkLWhlYWRlci10ZXh0KSxcbi5jYXJkLmJnLWluZm8sXG4uY2FyZC5jYXJkLXJvdGF0ZS5iZy1pbmZvIC5iYWNrLFxuLmNhcmQuY2FyZC1yb3RhdGUuYmctaW5mbyAuZnJvbnQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNjBkZWcsICNFNEE5QTgsICNFNEE5QTgpO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdXJsKFwiaHR0cHM6Ly9lbmNyeXB0ZWQtdGJuMC5nc3RhdGljLmNvbS9pbWFnZXM/cT10Ym4lM0FBTmQ5R2NRMlhlRGhLVl9JTHptWGpob1pvU1g0UG81Y3NzSWJLMk9peEVvNmg2QmM0V1UwRVZEM1wiKSBuby1yZXBlYXQgZml4ZWQgY2VudGVyO1xufVxuXG5pb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5paSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IDM1JTtcbn0iXX0= */");

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
/* harmony import */ var _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/contacts/ngx */ "./node_modules/@ionic-native/contacts/ngx/index.js");
/* harmony import */ var src_app_services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/message.service */ "./src/app/services/message.service.ts");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/profile.service */ "./src/app/services/profile.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _viewmessage_viewmessage_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../viewmessage/viewmessage.page */ "./src/app/pages/viewmessage/viewmessage.page.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");









var MessagePage = /** @class */ (function () {
    function MessagePage(contacts, messageServ, profileServ, route, router, modalController, alertCtrl, firestore) {
        var _this = this;
        this.contacts = contacts;
        this.messageServ = messageServ;
        this.profileServ = profileServ;
        this.route = route;
        this.router = router;
        this.modalController = modalController;
        this.alertCtrl = alertCtrl;
        this.firestore = firestore;
        this.Segment = "unread";
        this.selectedMessage = null;
        // segmentChanged(ev: any) {
        //   console.log('Segment changed', ev);
        // }
        //  searchbar = document.querySelector('ion-searchbar');
        //  items = Array.from(document.querySelector('div').children);
        this.message = [];
        this.messageServ.getMessages().subscribe(function (data) {
            _this.messageList = data.map(function (e) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ key: e.payload.doc.id }, e.payload.doc.data());
            });
            _this.messageListLoad = _this.messageList;
            console.log(_this.messageList);
        });
        this.messageServ.getMessagesRead().subscribe(function (data) {
            _this.messageReadList = data.map(function (e) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ key: e.payload.doc.id }, e.payload.doc.data());
            });
            _this.messageReadListLoad = _this.messageReadList;
            console.log(_this.messageReadList);
        });
        this.messageServ.getMessagesUnRead().subscribe(function (data) {
            _this.messageUnReadList = data.map(function (e) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ key: e.payload.doc.id }, e.payload.doc.data());
            });
            _this.messageUnReadListLoad = _this.messageUnReadList;
            console.log(_this.messageUnReadList);
        });
        // let contact: Contact = this.contacts.create();
        // contact.name = new ContactName (null, '', '');
        // contact.phoneNumbers = [new ContactField('mobile', '')];
        // contact.save().then(
        //   () => console.log('Contact saved!', contact),
        //   (error: any) => console.error('Error saving contact.', error)
        // );
    }
    MessagePage.prototype.initializeItems = function () {
        this.messageReadList = this.messageListLoad;
        this.messageList = this.messageListLoad;
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
    MessagePage.prototype.ngOnInit = function () {
    };
    MessagePage.prototype.OpenPreview = function (msg) {
        this.messageServ.updateMessage(msg.key);
        this.modalController.create({
            component: _viewmessage_viewmessage_page__WEBPACK_IMPORTED_MODULE_7__["ViewmessagePage"],
            componentProps: {
                msg: msg
            }
        }).then(function (modal) { return modal.present(); });
    };
    MessagePage.ctorParameters = function () { return [
        { type: _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_2__["Contacts"] },
        { type: src_app_services_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"] },
        { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestore"] }
    ]; };
    MessagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-message',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./message.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/message/message.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./message.page.scss */ "./src/app/pages/message/message.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_2__["Contacts"],
            src_app_services_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"],
            src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestore"]])
    ], MessagePage);
    return MessagePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-message-message-module.js.map