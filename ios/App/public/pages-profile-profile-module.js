(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar color=\"primary\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n        <ion-title>{{agentList?.name}}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <br>\r\n    <div class=\"profile\">\r\n        <div>\r\n            <img src=\"{{agentList?.photoURL}}\">\r\n\r\n        </div>\r\n\r\n        <div class=\"profile-upload\">\r\n            <label for=\"file-input\">\r\n                <ion-icon name=\"image\" class=\"input\" color=\"primary\"> </ion-icon>\r\n            </label>\r\n\r\n            <input id=\"file-input\" class=\"input\" type=\"file\" (change)=\"uploadProfilePic($event)\" accept=\"image/x-png,image/gif,image/jpeg\" />\r\n        </div>\r\n    </div>\r\n    <div class=\"center\">\r\n        <ion-item>\r\n            <ion-label>{{agentList?.email}}</ion-label>\r\n            <ion-icon name=\"mail\" color=\"primary\" slot=\"start\"></ion-icon>\r\n\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n            <ion-label>{{agentList?.name}}</ion-label>\r\n            <ion-icon name=\"person\" color=\"primary\" slot=\"start\"></ion-icon>\r\n            <ion-icon name=\"create\" color=\"primary\" slot=\"end\" (click)=\"nameChange(agentList)\"></ion-icon>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n            <ion-label>{{agentList?.surname}}</ion-label>\r\n            <ion-icon name=\"person\" color=\"primary\" slot=\"start\"></ion-icon>\r\n            <ion-icon name=\"create\" color=\"primary\" slot=\"end\" (click)=\"surnameChange(agentList)\"></ion-icon>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n            <ion-label>{{agentList?.companyName}}</ion-label>\r\n            <ion-icon name=\"briefcase\" color=\"primary\" slot=\"start\"></ion-icon>\r\n            <ion-icon name=\"create\" color=\"primary\" slot=\"end\" (click)=\"companyChange(agentList)\"></ion-icon>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n            <ion-label>{{agentList?.number}}</ion-label>\r\n            <ion-icon name=\"call\" color=\"primary\" slot=\"start\"></ion-icon>\r\n            <ion-icon name=\"create\" color=\"primary\" slot=\"end\" (click)=\"numberChange(agentList)\"></ion-icon>\r\n        </ion-item>\r\n    </div>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/profile/profile-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/profile/profile-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function() { return ProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page */ "./src/app/pages/profile/profile.page.ts");




var routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }
];
var ProfilePageRoutingModule = /** @class */ (function () {
    function ProfilePageRoutingModule() {
    }
    ProfilePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ProfilePageRoutingModule);
    return ProfilePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/profile.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.module.ts ***!
  \*************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/pages/profile/profile-routing.module.ts");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/pages/profile/profile.page.ts");







var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]
            ],
            declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/profile.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".profile img {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.profile-upload {\n  padding-top: -20px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  font-size: 40px;\n  text-align: center;\n}\n\n.profile img {\n  height: 200px;\n  width: 200px;\n  border-radius: 50%;\n}\n\n.profile-upload > input {\n  display: none;\n}\n\n.center {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 75%;\n}\n\n@media screen and (max-width: 991px) {\n  .center {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9DOlxcVXNlcnNcXENvZGVUcmliZVxcRGVza3RvcFxcQ29kZVRyaWJlXFxpb25pY1xca2V5d29yeERhc2hib2FyZC9zcmNcXGFwcFxccGFnZXNcXHByb2ZpbGVcXHByb2ZpbGUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURHSTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNBUjs7QURJQTtFQUNJLGFBQUE7QUNESjs7QURJQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ0RKOztBRElBO0VBQ0k7SUFDSSxXQUFBO0VDRE47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZSBpbWcge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLnByb2ZpbGUtdXBsb2FkIHtcclxuICAgIHBhZGRpbmctdG9wOiAtMjBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wcm9maWxlIHtcclxuICAgIGltZyB7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgfVxyXG59XHJcblxyXG4ucHJvZmlsZS11cGxvYWQ+aW5wdXQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmNlbnRlciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IDc1JTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgIC5jZW50ZXIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59IiwiLnByb2ZpbGUgaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5wcm9maWxlLXVwbG9hZCB7XG4gIHBhZGRpbmctdG9wOiAtMjBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucHJvZmlsZSBpbWcge1xuICBoZWlnaHQ6IDIwMHB4O1xuICB3aWR0aDogMjAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLnByb2ZpbGUtdXBsb2FkID4gaW5wdXQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uY2VudGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHdpZHRoOiA3NSU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5jZW50ZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/profile/profile.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/profile/profile.page.ts ***!
  \***********************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/profile.service */ "./src/app/services/profile.service.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");







var ProfilePage = /** @class */ (function () {
    function ProfilePage(profileServ, afAuth, router, afs, alertCtrl) {
        var _this = this;
        this.profileServ = profileServ;
        this.afAuth = afAuth;
        this.router = router;
        this.afs = afs;
        this.alertCtrl = alertCtrl;
        var uid = this.afAuth.auth.currentUser.uid;
        this.profileServ.getAgent(uid).subscribe(function (data) {
            _this.agentList = data;
            console.log(data);
        });
        this.agents = this.afs.collection('agent').valueChanges();
        this.currentuser = this.profileServ.getUID();
        console.log(this.currentuser);
        this.Profiles = afs.doc("agent/" + profileServ.getUID());
        this.sub = this.Profiles.valueChanges().subscribe(function (event) {
            _this.name = event.name;
        });
    }
    ProfilePage.prototype.ngOnInit = function () {
    };
    ProfilePage.prototype.uploadProfilePic = function (event) {
        var _this = this;
        this.profileServ.uploadPhoto(event).subscribe(function (data) {
            _this.uploadPercent = data;
            console.log(_this.uploadPercent);
        });
    };
    ProfilePage.prototype.nameChange = function (agentList) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert, result;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            subHeader: 'Edit Name',
                            inputs: [
                                {
                                    name: 'name',
                                    type: 'text',
                                    value: agentList.name,
                                    placeholder: 'Name'
                                },
                            ],
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                    }
                                }, {
                                    text: 'Ok',
                                    handler: function (a) {
                                        console.log(a.name1);
                                        _this.Profiles.update({
                                            name: a.name,
                                        });
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, alert.onDidDismiss()];
                    case 3:
                        result = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfilePage.prototype.surnameChange = function (agentList) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert, result;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            subHeader: 'Edit Surname',
                            inputs: [
                                {
                                    name: 'surname',
                                    type: 'text',
                                    value: agentList.surname,
                                    placeholder: 'Surname'
                                },
                            ],
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                    }
                                }, {
                                    text: 'Ok',
                                    handler: function (a) {
                                        console.log(a.surname1);
                                        _this.Profiles.update({
                                            surname: a.surname,
                                        });
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, alert.onDidDismiss()];
                    case 3:
                        result = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfilePage.prototype.companyChange = function (agentList) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert, result;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            subHeader: 'Edit Company Name',
                            inputs: [
                                {
                                    name: 'companyName',
                                    type: 'text',
                                    value: agentList.companyName,
                                    placeholder: 'Company Name'
                                },
                            ],
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                    }
                                }, {
                                    text: 'Ok',
                                    handler: function (a) {
                                        console.log(a.companyName1);
                                        _this.Profiles.update({
                                            companyName: a.companyName,
                                        });
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, alert.onDidDismiss()];
                    case 3:
                        result = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfilePage.prototype.numberChange = function (agentList) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert, result;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            subHeader: 'Edit Number',
                            inputs: [
                                {
                                    name: 'number',
                                    type: 'text',
                                    value: agentList.number,
                                    placeholder: 'Number'
                                },
                            ],
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                    }
                                }, {
                                    text: 'Ok',
                                    handler: function (a) {
                                        console.log(a.number1);
                                        _this.Profiles.update({
                                            number: a.number,
                                        });
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, alert.onDidDismiss()];
                    case 3:
                        result = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfilePage.ctorParameters = function () { return [
        { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"] },
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
    ]; };
    ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.page.scss */ "./src/app/pages/profile/profile.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]])
    ], ProfilePage);
    return ProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-profile-profile-module.js.map