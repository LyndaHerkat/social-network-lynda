(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<div id=\"background-container\">\n  <router-outlet></router-outlet>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/authentification/homepage/homepage.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentification/homepage/homepage.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"homepage-container\" fxLayout=\"column nowrap\" fxLayoutAlign=\"center center\">\n\n  <div class=\"form-container\">\n      <mat-tab-group dynamic-height>\n        <mat-tab label=\"Connexion\">\n            <app-login></app-login>\n        </mat-tab>\n        <mat-tab label=\"Inscription\">\n          <app-register></app-register>\n        </mat-tab>\n      </mat-tab-group>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/authentification/login/login.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentification/login/login.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"center center\">\n    <mat-card class=\"card-login\">\n      <mat-card-content>\n        <form [formGroup]=\"loginForm\" fxLayout=\"column\" (ngSubmit)=\"submit()\" novalidate>\n          <div class=\"form-field-container\" fxLayout=\"column\" fxLayoutGap=\"15px\">\n            <mat-form-field>\n              <input formControlName=\"email\" matInput type=\"text\" placeholder=\"Email\">\n            </mat-form-field>\n            <p class=\"error\" *ngIf=\"loginForm.get('email').invalid && isSubmitted\">Champ requis</p>\n            <mat-form-field>\n              <input formControlName=\"password\" matInput type=\"password\" placeholder=\"Mot de passe\">\n            </mat-form-field>\n            <p class=\"error\" *ngIf=\"loginForm.get('password').invalid && isSubmitted\">Champ requis</p>\n          </div>\n          <p class=\"error\" *ngIf=\"errorMessage\">{{ errorMessage }}</p>\n          <button mat-raised-button color=\"primary\" >Se connecter</button>\n        </form>\n      </mat-card-content>\n    </mat-card>\n  </div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/authentification/register/register.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentification/register/register.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"center center\">\n  <mat-card>\n    <mat-card-content>\n      <form [formGroup]=\"registerForm\" fxLayout=\"column\" (ngSubmit)='submit()' novalidate>\n        <div class=\"form-field-container\" fxLayout=\"row\" fxLayoutGap=\"15px\">\n          <div fxLayout=\"column\">\n            <mat-form-field>\n              <input formControlName=\"name\" matInput type=\"text\" placeholder=\"Nom\">\n            </mat-form-field>\n            <p class=\"error\" *ngIf=\"registerForm.get('name').invalid && isSubmitted\">Champ requis (minimum 3 caractères)</p>\n          </div>\n          <div fxLayout=\"column\">\n            <mat-form-field>\n              <input formControlName=\"firstname\" matInput type=\"text\" placeholder=\"Prénom\">\n            </mat-form-field>\n            <p class=\"error\" *ngIf=\"registerForm.get('firstname').invalid && isSubmitted\">Champ requis (minimum 3 caractères)</p>\n          </div>\n\n        </div>\n\n        <div class=\"form-field-container\" fxLayout=\"row\" fxLayoutGap=\"15px\">\n          <div fxLayout=\"column\">\n            <mat-form-field>\n              <input formControlName=\"pseudo\"matInput type=\"text\" placeholder=\"Pseudo\">\n            </mat-form-field>\n            <p class=\"error\" *ngIf=\"registerForm.get('pseudo').invalid && isSubmitted\">Champ requis (minimum 3 caractères)</p>\n          </div>\n\n          <div fxLayout=\"column\">\n            <mat-form-field>\n              <input formControlName=\"email\" matInput type=\"text\" placeholder=\"Email\">\n            </mat-form-field>\n            <p class=\"error\" *ngIf=\"registerForm.get('email').hasError('required') && isSubmitted\">Veuillez entrer votre email</p>\n            <p class=\"error\" *ngIf=\"registerForm.get('email').hasError('email')\">Veuillez entrer un email sous format mail.</p>\n          </div>\n\n        </div>\n\n        <div class=\"form-field-container\" fxLayout=\"row\" fxLayoutGap=\"15px\">\n\n          <div fxLayout=\"column\">\n            <mat-form-field>\n              <input formControlName=\"password\" matInput type=\"password\" placeholder=\"Mot de passe\">\n            </mat-form-field>\n            <p class=\"error\" *ngIf=\"registerForm.get('password').invalid && isSubmitted\">Champ requis (minimum 8 caractères)</p>\n          </div>\n          <div fxLayout=\"column\">\n            <mat-form-field>\n              <input formControlName=\"confirmPassword\" matInput type=\"password\" placeholder=\"Confirmer mot de passe\">\n            </mat-form-field>\n            <p class=\"error\" *ngIf=\"registerForm.get('confirmPassword').hasError('isNoMatch') && isSubmitted\">le mot de passe ne correspond pas</p>\n          </div>\n        </div>\n        <div class=\"form-field-container\" fxLayout=\"row\" fxLayoutGap=\"15px\">\n          <div fxLayout=\"column\">\n            <mat-form-field>\n              <input formControlName=\"birth\" matInput [matDatepicker]=\"picker\" placeholder=\"Date de naissance\">\n              <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n              <mat-datepicker #picker></mat-datepicker>\n            </mat-form-field>\n            <p class=\"error\" *ngIf=\"registerForm.get('birth').invalid && isSubmitted\">Champ requis</p>\n          </div>\n          <div fxLayout=\"column\">\n            <mat-radio-group formControlName=\"sexe\" aria-label=\"Sexe\" fxLayoutGap=\"15px\" fxLayoutAlign=\"center center\">\n              <mat-radio-button value=\"femme \">Femme</mat-radio-button>\n              <mat-radio-button value=\"homme \">Homme</mat-radio-button>\n            </mat-radio-group>\n            <p class=\"error\" *ngIf=\"registerForm.get('sexe').invalid && isSubmitted\">Champ requis</p>\n          </div>\n\n        </div>\n        <div fxLayout=\"column\">\n          <mat-form-field>\n            <mat-label>Niveau scolaire</mat-label>\n            <mat-select formControlName=\"grade\">\n                <mat-option value=\"cm2\">CM2</mat-option>\n                <mat-option value=\"6eme\">6eme</mat-option>\n                <mat-option value=\"5eme\">5eme</mat-option>\n                <mat-option value=\"4eme\">4eme</mat-option>\n                <mat-option value=\"3eme\">3eme</mat-option>\n                <mat-option value=\"seconde\">seconde</mat-option>\n                <mat-option value=\"premiere\">première</mat-option>\n                <mat-option value=\"terminal\">terminal</mat-option>\n                <mat-option value=\"professeur\">professeur</mat-option>\n            </mat-select>\n          </mat-form-field>\n          <p class=\"error\" *ngIf=\"registerForm.get('grade').invalid && isSubmitted\">Champ requis</p>\n        </div>\n        <p class=\"error\" *ngIf=\"message\">{{ message }}</p>\n        <p class=\"error\" *ngIf=\"errorMessage\">{{ errorMessage }}</p>\n        <button mat-raised-button color=\"primary\">S'inscrire</button>\n      </form>\n    </mat-card-content>\n  </mat-card>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/chat/chat.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/chat/chat.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>chat works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/header/header.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/header/header.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=warn>\n  <div class=\"logo-container\" fxLayout=\"row nowrap\">\n    <!-- <div routerLink=\"/accueil/post\" class=\"link\"></div> -->\n    <img src=\"../../../../assets/img/logo.png\" alt=\"logo-teach\" height=\"60px\" fxFlexAlign=\"center\">\n    <div (click)=getPostUser() class=\"link\">\n      <p class=\"logo-title\">Teach</p>\n      <p class=\"logo-pipeline\">le social network du soutien scolaire</p>\n    </div>\n  </div>\n  <span fxFlex=\"auto\" class=\"link\"></span>\n  <div>\n    <!-- <span *ngIf=\"jwtToken.isLogged === false\" fxLayoutGap=\"15px\">\n      <span routerLink=\"/login\" class=\"link\">Connexion</span>\n      <span routerLink=\"/register\" class=\"link\">Inscription</span>\n    </span> -->\n    <span *ngIf=\"jwtToken.isLogged\" class=\"link\" (click)=logout() fxLayout=\"row\" fxLayoutAlign=\"center center\"\n      fxLayoutGap=\"5px\">\n      <mat-icon class=\"link\" (click)=logout()>power_settings_new</mat-icon>\n      <span>Déconnexion</span>\n    </span>\n  </div>\n</mat-toolbar>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/topbar/topbar.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/topbar/topbar.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar class=\"topbar\" color=accent fxLayout=\"row\" fxLayoutGap=\"15px\" fxLayoutAlign=\"space-between center\">\n  <mat-icon class=\"link burger\" fxLayoutGap=\"5px\" (click)=\"sidenavMenu.toggle()\" aria-hidden=\"false\"\n    aria-label=\"menu icon\">menu</mat-icon>\n  <div class=\"search\">\n    <form [formGroup]=\"searchForm\" fxLayout=\"column\" novalidate>\n      <mat-form-field>\n        <input type=\"text\" matInput formControlName=\"search\" [matAutocomplete]=\"auto\" placeholder=\"Rechercher un profil\">\n      </mat-form-field>\n      <mat-autocomplete #auto=\"matAutocomplete\">\n        <mat-option *ngFor=\"let user of filterAllUsers | async;\" [value]=\"user._id\" (click)=getPostUser() (keyup.enter)=getPostUser()>{{user.pseudo}}</mat-option>\n        <!-- <input type=\"hidden\" formControlName=\"_id\" [value]=\"user._id\"/> -->\n\n      </mat-autocomplete>\n\n    </form>\n  </div>\n  <div fxLayout=\"row\" fxLayoutAlign=\"center center\" fxLayoutGap=\"5px\">\n    <img mat-card-avatar [src]=\"currentUser.avatar\" alt=\"\">\n    <h3 class=\"link\" (click)=getPostCurrentUser()> {{currentUser.pseudo}}</h3>\n  </div>\n</mat-toolbar>\n\n<mat-sidenav-container>\n  <mat-sidenav #sidenavMenu>\n    <mat-nav-list>\n      <a mat-list-item class=\"link\" (click)=\"getCurrentProfileUser()\">Mon profil</a>\n      <!-- <a mat-list-item class=\"link\" routerLink=\"/accueil/profile/\">Mon profil</a> -->\n      <!-- <a mat-list-item class=\"link\" routerLink=\"/accueil/edit-profile\">Editer mon profil</a> -->\n      <a mat-list-item class=\"link\" routerLink=\"\">Invitation en attente</a>\n      <a mat-list-item class=\"link\" routerLink=\"\">Demande en attente</a>\n    </mat-nav-list>\n    <span>Mes amis</span>\n    <mat-nav-list>\n      <li></li>\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <div fxLayout=\"row\" fxLayoutAlign=\"space-around start\">\n      <div fxFlex=\"25\">\n\n      </div>\n      <div fxFlex=\"45\">\n        <router-outlet></router-outlet>\n      </div>\n      <div fxFlex=\"25\"></div>\n    </div>\n\n    <div class=\"chat-container\">\n\n      <button class=\"chat-button\" color=accent mat-raised-button mat-accent (click)=\"openChat()\">Chat</button>\n    </div>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-interface/post/post.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-interface/post/post.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"center center\">\n  <mat-card *ngIf=\"isCurrentUser\" class=\"card-login\">\n    <mat-card-content >\n      <mat-card-header>\n        <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\">edit</mat-icon>\n        <mat-card-title>Créer une publication</mat-card-title>\n      </mat-card-header>\n      <form [formGroup]=\"postForm\" fxLayout=\"column\" (ngSubmit)=\"createPost()\" novalidate>\n        <div class=\"form-field-container\" fxLayout=\"column\" fxLayoutGap=\"15px\">\n          <mat-form-field>\n            <textarea formControlName=\"message\" placeholder=\"Ecrivez un message...\" matInput cdkTextareaAutosize\n              #autosize=\"cdkTextareaAutosize\" cdkAutosizeMinRows=\"5\" cdkAutosizeMaxRows=\"10\"></textarea>\n          </mat-form-field>\n        </div>\n        <button mat-raised-button color=\"primary\">Publier</button>\n      </form>\n    </mat-card-content>\n  </mat-card>\n</div>\n\n<div fxLayout=\"center center\" *ngFor=\"let post of postArray\">\n  <mat-card class=\"card-login\">\n\n    <mat-card-header>\n      <img mat-card-avatar [src]=\"displayedUser.avatar\" alt=\"\">\n      <mat-card-title class=\"link\" (click)=\"getProfileUser()\">{{displayedUser.pseudo}}</mat-card-title>\n      <mat-card-subtitle>{{displayedUser.grade}}</mat-card-subtitle>\n    </mat-card-header>\n    <mat-card-content>\n      <mat-card-content>\n        <p>{{post.message}}</p>\n      </mat-card-content>\n      <mat-card-actions fxLayoutAlign=\"end center\">\n        <button mat-button color=\"primary\">Commentaires</button>\n      </mat-card-actions>\n    </mat-card-content>\n  </mat-card>\n</div>\n\n<!-- <button [routerLink]=\"['/']\" routerLinkActive=\"router-link-active\" ></button> -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-interface/profile/edit-profile.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-interface/profile/edit-profile.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"center center\">\n\n\n  <div class=\"edit-form-container\" fxLayout=\"center center\">\n    <mat-card>\n        <h1>Modifier mon profil</h1>\n        <mat-card-content>\n          <form [formGroup]=\"editProfileForm\" fxLayout=\"column\" (ngSubmit)='submit()' novalidate>\n            <div class=\"form-field-container\" fxLayout=\"column\" fxLayoutGap=\"15px\">\n              <div fxLayout=\"column\">\n                <mat-form-field>\n                  <input formControlName=\"name\" matInput type=\"text\" placeholder=\"Nom\">\n                </mat-form-field>\n                <p class=\"error\" *ngIf=\"editProfileForm.get('name').invalid && isSubmitted\">Champ requis (minimum 3 caractères)</p>\n              </div>\n              <div fxLayout=\"column\">\n                <mat-form-field>\n                  <input formControlName=\"firstname\" matInput type=\"text\" placeholder=\"Prénom\">\n                </mat-form-field>\n                <p class=\"error\" *ngIf=\"editProfileForm.get('firstname').invalid && isSubmitted\">Champ requis (minimum 3 caractères)</p>\n              </div>\n\n              <div fxLayout=\"column\">\n                <mat-form-field>\n                  <input formControlName=\"pseudo\"matInput type=\"text\" placeholder=\"Pseudo\">\n                </mat-form-field>\n                <p class=\"error\" *ngIf=\"editProfileForm.get('pseudo').invalid && isSubmitted\">Champ requis (minimum 3 caractères)</p>\n              </div>\n\n                <mat-form-field>\n                  <input formControlName=\"email\" matInput type=\"text\" placeholder=\"Email\">\n                </mat-form-field>\n                <p class=\"error\" *ngIf=\"editProfileForm.get('email').hasError('required') && isSubmitted\">Veuillez entrer votre email</p>\n                <p class=\"error\" *ngIf=\"editProfileForm.get('email').hasError('email')\">Veuillez entrer un email sous format mail.</p>\n              </div>\n\n\n            <!-- <div class=\"form-field-container\" fxLayout=\"column\" fxLayoutGap=\"15px\">\n\n              <div fxLayout=\"column\">\n                <mat-form-field>\n                  <input formControlName=\"password\" matInput type=\"password\" placeholder=\"Mot de passe\">\n                </mat-form-field>\n                <p class=\"error\" *ngIf=\"editProfileForm.get('password').invalid && isSubmitted\">Champ requis (minimum 8 caractères)</p>\n              </div>\n              <div fxLayout=\"column\">\n                <mat-form-field>\n                  <input formControlName=\"confirmPassword\" matInput type=\"password\" placeholder=\"Confirmer mot de passe\">\n                </mat-form-field>\n                <p class=\"error\" *ngIf=\"editProfileForm.get('confirmPassword').hasError('isNoMatch') && isSubmitted\">le mot de passe ne correspond pas</p>\n              </div>\n            </div> -->\n\n              <div fxLayout=\"column\">\n                <mat-form-field>\n                  <input formControlName=\"birth\" matInput [matDatepicker]=\"picker\" placeholder=\"Date de naissance\">\n                  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                  <mat-datepicker #picker></mat-datepicker>\n                </mat-form-field>\n                <p class=\"error\" *ngIf=\"editProfileForm.get('birth').invalid && isSubmitted\">Champ requis</p>\n              </div>\n              <div fxLayout=\"column\">\n                <mat-radio-group formControlName=\"sexe\" aria-label=\"Sexe\" fxLayoutGap=\"15px\" fxLayoutAlign=\"center center\">\n                  <mat-radio-button value=\"femme \">Femme</mat-radio-button>\n                  <mat-radio-button value=\"homme \">Homme</mat-radio-button>\n                </mat-radio-group>\n                <p class=\"error\" *ngIf=\"editProfileForm.get('sexe').invalid && isSubmitted\">Champ requis</p>\n              </div>\n\n              <div fxLayout=\"column\">\n              <mat-form-field>\n                <mat-label>Niveau scolaire</mat-label>\n                <mat-select formControlName=\"grade\">\n                    <mat-option >6eme</mat-option>\n                    <mat-option value=\"5eme\">5eme</mat-option>\n                    <mat-option value=\"4eme\">4eme</mat-option>\n                    <mat-option value=\"3eme\">3eme</mat-option>\n                    <mat-option value=\"seconde\">seconde</mat-option>\n                    <mat-option value=\"premiere\">première</mat-option>\n                    <mat-option value=\"terminal\">terminal</mat-option>\n                    <mat-option value=\"professeur\">professeur</mat-option>\n                </mat-select>\n              </mat-form-field>\n              <p class=\"error\" *ngIf=\"editProfileForm.get('grade').invalid && isSubmitted\">Champ requis</p>\n            </div>\n            <p class=\"error\" *ngIf=\"errorMessage\">{{ errorMessage }}</p>\n            <button mat-raised-button color=\"primary\">Mettre à jour mon profil</button>\n          </form>\n        </mat-card-content>\n      </mat-card>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-interface/profile/profile.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-interface/profile/profile.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <h1>Modifier mon profil</h1> -->\n\n<div fxLayout=\"center center\">\n  <mat-card>\n    <mat-card-content>\n      <mat-card fxLayout=\"row\" fxLayoutAlign=\"center center\" fxLayoutGap=\"10px\">\n        <img mat-card-avatar [src]=\"displayedUser.avatar\" alt=\"\">\n        <mat-card-title>{{displayedUser.pseudo}}</mat-card-title>\n      </mat-card>\n\n      <mat-accordion>\n        <mat-expansion-panel>\n          <mat-expansion-panel-header>\n            <mat-panel-title>Informations personnelles</mat-panel-title>\n          </mat-expansion-panel-header>\n          <mat-nav-list>\n            <h3 mat-subheader>Nom</h3>\n            <mat-list-item> {{displayedUser.name}} </mat-list-item>\n            <h3 mat-subheader>Prénom</h3>\n            <mat-list-item> {{displayedUser.firstname}} </mat-list-item>\n            <h3 mat-subheader>Pseudo</h3>\n            <mat-list-item> {{displayedUser.pseudo}} </mat-list-item>\n            <h3 mat-subheader>Email</h3>\n            <mat-list-item> {{displayedUser.email}} </mat-list-item>\n            <h3 mat-subheader>Date de naissance</h3>\n            <mat-list-item> {{displayedUser.birth}} </mat-list-item>\n            <h3 mat-subheader>Sexe</h3>\n            <mat-list-item> {{displayedUser.sexe}} </mat-list-item>\n            <h3 mat-subheader>Niveau scolaire</h3>\n            <mat-list-item> {{displayedUser.grade}} </mat-list-item>\n          </mat-nav-list>\n        </mat-expansion-panel>\n      </mat-accordion>\n      <mat-accordion>\n        <mat-expansion-panel>\n          <mat-expansion-panel-header>\n            <mat-panel-title>Amis</mat-panel-title>\n          </mat-expansion-panel-header>\n        </mat-expansion-panel>\n      </mat-accordion>\n\n      <button *ngIf=\"isCurrentUser\" mat-raised-button color=\"primary\" routerLink=\"/accueil/edit-profile\">Editer mon\n        profil</button>\n    </mat-card-content>\n\n  </mat-card>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-interface/user-interface.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-interface/user-interface.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-topbar></app-topbar>\n\n\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
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
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
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
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
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


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/service/user.service */ "./src/app/shared/service/user.service.ts");



let AppComponent = class AppComponent {
    // title = 'client';
    constructor(userService) {
        this.userService = userService;
    }
};
AppComponent.ctorParameters = () => [
    { type: _shared_service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm2015/bottom-sheet.js");
/* harmony import */ var _shared_layout_layout_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/layout/layout.module */ "./src/app/shared/layout/layout.module.ts");
/* harmony import */ var _user_interface_user_interface_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-interface/user-interface.module */ "./src/app/user-interface/user-interface.module.ts");
/* harmony import */ var _authentification_authentification_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./authentification/authentification.module */ "./src/app/authentification/authentification.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/components/header/header.component */ "./src/app/shared/components/header/header.component.ts");
/* harmony import */ var _shared_components_chat_chat_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/components/chat/chat.component */ "./src/app/shared/components/chat/chat.component.ts");
/* harmony import */ var _shared_service_user_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/service/user.service */ "./src/app/shared/service/user.service.ts");
/* harmony import */ var _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/guards/auth.guard */ "./src/app/shared/guards/auth.guard.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.js");
/* harmony import */ var _shared_interceptors_authentification_interceptor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/interceptors/authentification.interceptor */ "./src/app/shared/interceptors/authentification.interceptor.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/locales/fr */ "./node_modules/@angular/common/locales/fr.js");
/* harmony import */ var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _shared_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/pipes/filter.pipe */ "./src/app/shared/pipes/filter.pipe.ts");

// ANGULAR NATIVES MODULES






// import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// CUSTOM MODULES
 // module custom d'import de material, flex-layout, hammerjs, cdk


// COMPONENTS


// import { SidebarComponent } from './shared/components/sidebar/sidebar.component';

// SERVICES

// GUARDS

// ROUTES

// INTERCEPTORS

// DATE


// FILTRE

Object(_angular_common__WEBPACK_IMPORTED_MODULE_17__["registerLocaleData"])(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_18___default.a);
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
            _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
            _shared_components_chat_chat_component__WEBPACK_IMPORTED_MODULE_12__["ChatComponent"],
            _shared_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_19__["FilterPipe"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_15__["ROUTING"]),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _shared_layout_layout_module__WEBPACK_IMPORTED_MODULE_7__["LayoutModule"],
            // ReactiveFormsModule,
            // FormsModule,
            _user_interface_user_interface_module__WEBPACK_IMPORTED_MODULE_8__["UserInterfaceModule"],
            _authentification_authentification_module__WEBPACK_IMPORTED_MODULE_9__["AuthentificationModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_6__["MatBottomSheetModule"]
        ],
        providers: [
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                useClass: _shared_interceptors_authentification_interceptor__WEBPACK_IMPORTED_MODULE_16__["AuthentificationInterceptor"],
                multi: true
            },
            _shared_service_user_service__WEBPACK_IMPORTED_MODULE_13__["UserService"],
            _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"],
            { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"],
                useValue: 'fr-FR' }
        ],
        // entryComponents: [ChatComponent],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.routing.js":
/*!********************************!*\
  !*** ./src/app/app.routing.js ***!
  \********************************/
/*! exports provided: ROUTING */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTING", function() { return ROUTING; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _authentification_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentification/homepage/homepage.component */ "./src/app/authentification/homepage/homepage.component.ts");
/* harmony import */ var _authentification_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentification/login/login.component */ "./src/app/authentification/login/login.component.ts");
/* harmony import */ var _authentification_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentification/register/register.component */ "./src/app/authentification/register/register.component.ts");
/* harmony import */ var _user_interface_user_interface_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-interface/user-interface.component */ "./src/app/user-interface/user-interface.component.ts");
/* harmony import */ var _user_interface_post_post_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-interface/post/post.component */ "./src/app/user-interface/post/post.component.ts");
/* harmony import */ var _user_interface_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-interface/profile/profile.component */ "./src/app/user-interface/profile/profile.component.ts");
/* harmony import */ var _user_interface_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-interface/profile/edit-profile.component */ "./src/app/user-interface/profile/edit-profile.component.ts");
/* harmony import */ var _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/guards/auth.guard */ "./src/app/shared/guards/auth.guard.ts");

// INTERFACE













const ROUTING = [ //on utilise l'interface Route native d'Angular (https://angular.io/api/router/Route#description). Route[] veux dire un tableau de d'objet respectant l'interface Route
  { path : '', component: _authentification_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_1__["HomepageComponent"] },
  { path: 'login', component: _authentification_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]},
  { path: 'register', component: _authentification_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"]},
  { path: 'accueil', canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]], component: _user_interface_user_interface_component__WEBPACK_IMPORTED_MODULE_4__["UserInterfaceComponent"], children: [
    { path: 'post/:id', canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]], component: _user_interface_post_post_component__WEBPACK_IMPORTED_MODULE_5__["PostComponent"]},
    { path: 'profile/:id', canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]], component: _user_interface_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"]},
    { path: 'edit-profile', canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]], component: _user_interface_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_7__["EditProfileComponent"]}
  ]}
  // { path: '**', component: PageNotFoundComponent }

];


/***/ }),

/***/ "./src/app/authentification/authentification.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/authentification/authentification.module.ts ***!
  \*************************************************************/
/*! exports provided: AuthentificationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthentificationModule", function() { return AuthentificationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_layout_layout_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/layout/layout.module */ "./src/app/shared/layout/layout.module.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/authentification/homepage/homepage.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/authentification/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register/register.component */ "./src/app/authentification/register/register.component.ts");





// CUSTOM MODULES
 // module custom d'import de material, flex-layout, hammerjs, cdk
// CUSTOM COMPONENTS



let AuthentificationModule = class AuthentificationModule {
};
AuthentificationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_6__["HomepageComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
            _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_layout_layout_module__WEBPACK_IMPORTED_MODULE_5__["LayoutModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
        ]
    })
], AuthentificationModule);



/***/ }),

/***/ "./src/app/authentification/homepage/homepage.component.css":
/*!******************************************************************!*\
  !*** ./src/app/authentification/homepage/homepage.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".homepage-container {\r\n  padding-top : 8%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGlmaWNhdGlvbi9ob21lcGFnZS9ob21lcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvYXV0aGVudGlmaWNhdGlvbi9ob21lcGFnZS9ob21lcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvbWVwYWdlLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZy10b3AgOiA4JTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/authentification/homepage/homepage.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/authentification/homepage/homepage.component.ts ***!
  \*****************************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomepageComponent = class HomepageComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-homepage',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./homepage.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/authentification/homepage/homepage.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./homepage.component.css */ "./src/app/authentification/homepage/homepage.component.css")).default]
    })
], HomepageComponent);



/***/ }),

/***/ "./src/app/authentification/login/login.component.css":
/*!************************************************************!*\
  !*** ./src/app/authentification/login/login.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpZmljYXRpb24vbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/authentification/login/login.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/authentification/login/login.component.ts ***!
  \***********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_service_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/service/user.service */ "./src/app/shared/service/user.service.ts");




// SERVICE

let LoginComponent = class LoginComponent {
    constructor(fb, router, userService) {
        this.fb = fb;
        this.router = router;
        this.userService = userService;
        this.isSubmitted = false;
    }
    ngOnInit() {
        this.loginForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    }
    submit() {
        this.isSubmitted = true;
        console.log(this.loginForm.value);
        this.userService.login(this.loginForm.value).subscribe(() => {
            this.userService.getCurrentUser().subscribe(currentUser => {
                this.currentUser = currentUser;
                this.router.navigate(['accueil', 'post', this.currentUser._id]);
            });
        }, err => {
            console.log(err);
            if (err.status === 401) {
                this.errorMessage = 'Ce compte n\'existe pas. Veuillez créer un nouveau compte';
            }
            else {
                this.errorMessage = 'Une erreur c\'est produite. impossible d\'accéder à votre compte';
            }
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_shared_service_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/authentification/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/authentification/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/authentification/register/register.component.css":
/*!******************************************************************!*\
  !*** ./src/app/authentification/register/register.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpZmljYXRpb24vcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/authentification/register/register.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/authentification/register/register.component.ts ***!
  \*****************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/service/user.service */ "./src/app/shared/service/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let RegisterComponent = class RegisterComponent {
    constructor(fb, userService, router) {
        this.fb = fb;
        this.userService = userService;
        this.router = router;
        this.isSubmitted = false;
    }
    ngOnInit() {
        this.registerForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            firstname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            pseudo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]],
            confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]],
            birth: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            sexe: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            grade: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
        this.registerForm.setValidators(this.comparisonValidator());
    }
    comparisonValidator() {
        return (group) => {
            const control1 = group.controls.password;
            const control2 = group.controls.confirmPassword;
            if (control1.value !== control2.value) {
                control2.setErrors({ isNoMatch: true });
            }
            else {
                control2.setErrors(null);
            }
            return;
        };
    }
    submit() {
        this.isSubmitted = true;
        console.log(this.registerForm);
        if (this.registerForm.valid) {
            this.userService.register(this.registerForm.value).subscribe((user) => {
                this.message = 'Votre compte vient d\'être crée. Vous pouvez maintenant vous connecter.';
                this.router.navigate(['/']);
            }, err => {
                console.log('Erreur inscription', err);
                if (err.status === 401) {
                    this.errorMessage = 'Un compte avec cette adresse mail existe déjà.';
                }
                else {
                    this.errorMessage = 'Une erreur c\'est produite. impossible de créer un compte.';
                }
            });
        }
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _shared_service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/authentification/register/register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.css */ "./src/app/authentification/register/register.component.css")).default]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/shared/components/chat/chat.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/components/chat/chat.component.ts ***!
  \**********************************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ChatComponent = class ChatComponent {
    constructor() { }
};
ChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chat-component',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chat.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/chat/chat.component.html")).default,
    })
], ChatComponent);



/***/ }),

/***/ "./src/app/shared/components/header/header.component.css":
/*!***************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.mat-toolbar-row, .mat-toolbar-single-row {\r\n  height : 70px !important;\r\n}\r\n  .logo-container p{\r\n    margin :0;\r\n    color : #00ff9b;\r\n    font-weight : 200;\r\n  }\r\n  .logo-title{\r\n    font-size : 35px;\r\n  }\r\n  .logo-pipeline{\r\n    font-size : 15px;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQjtFQUNFO0lBQ0UsU0FBUztJQUNULGVBQWU7SUFDZixpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5tYXQtdG9vbGJhci1yb3csIC5tYXQtdG9vbGJhci1zaW5nbGUtcm93IHtcclxuICBoZWlnaHQgOiA3MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuICAubG9nby1jb250YWluZXIgcHtcclxuICAgIG1hcmdpbiA6MDtcclxuICAgIGNvbG9yIDogIzAwZmY5YjtcclxuICAgIGZvbnQtd2VpZ2h0IDogMjAwO1xyXG4gIH1cclxuICAubG9nby10aXRsZXtcclxuICAgIGZvbnQtc2l6ZSA6IDM1cHg7XHJcbiAgfVxyXG4gIC5sb2dvLXBpcGVsaW5le1xyXG4gICAgZm9udC1zaXplIDogMTVweDtcclxuICB9XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/shared/components/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/user.service */ "./src/app/shared/service/user.service.ts");
/* harmony import */ var _service_post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/post.service */ "./src/app/shared/service/post.service.ts");





let HeaderComponent = class HeaderComponent {
    constructor(router, userService, postService) {
        this.router = router;
        this.userService = userService;
        this.postService = postService;
    }
    ngOnInit() {
        // tslint:disable-next-line: max-line-length
        // On subscribe au behaviour subject jwtToken cree dans le service UserService de facon à le mettre a jour dans la variable jwtToken du component à chaque modification
        this.subscription = this.userService.jwtToken.subscribe((jwtToken) => {
            this.jwtToken = jwtToken;
            this.userService.currentUser.subscribe(currentUser => {
                console.log('TCL1: HeaderComponent -> ngOnInit -> this.userService.currentUser', this.userService.currentUser);
                this.currentUser = currentUser;
                console.log('TCL2: HeaderComponent -> ngOnInit -> this.currentUser', this.currentUser);
            });
        });
    }
    getPostUser() {
        if (this.currentUser === null) {
            this.router.navigate(['/']);
        }
        else {
            console.log('TCL: HeaderComponent -> getPostUser -> this.currentUser._id', this.currentUser._id);
            this.postService.postRoute(this.currentUser._id);
        }
    }
    logout() {
        this.userService.logout();
    }
    ngOnDestroy() {
        // on coupe la subscription lors de la destruction du component
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _service_post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/shared/components/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/shared/components/topbar/topbar.component.css":
/*!***************************************************************!*\
  !*** ./src/app/shared/components/topbar/topbar.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-sidenav-container {\r\n  background: transparent;\r\n  height: 100vh;\r\n}\r\n\r\nmat-sidenav-content {\r\n  margin-top: 5%;\r\n}\r\n\r\n/* input::placeholder {\r\n  font-size: 15px !important;\r\n} */\r\n\r\n.topbar {\r\n  height: 50px !important;\r\n}\r\n\r\n.burger:hover,\r\nh3:hover {\r\n  color: #fff;\r\n}\r\n\r\ndiv.chat-container {\r\n  position: relative;\r\n  /* z-index: 100, */\r\n}\r\n\r\nbutton.chat-button {\r\n  bottom: 0;\r\n  position: fixed;\r\n  right:0 ;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdG9wYmFyL3RvcGJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBQ0E7O0dBRUc7O0FBRUg7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7O0VBRUUsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxlQUFlO0VBQ2YsUUFBUTtBQUNWIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdG9wYmFyL3RvcGJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXNpZGVuYXYtY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG5tYXQtc2lkZW5hdi1jb250ZW50IHtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxufVxyXG4vKiBpbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xyXG59ICovXHJcblxyXG4udG9wYmFyIHtcclxuICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJ1cmdlcjpob3ZlcixcclxuaDM6aG92ZXIge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5kaXYuY2hhdC1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAvKiB6LWluZGV4OiAxMDAsICovXHJcbn1cclxuXHJcbmJ1dHRvbi5jaGF0LWJ1dHRvbiB7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICByaWdodDowIDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/shared/components/topbar/topbar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/topbar/topbar.component.ts ***!
  \**************************************************************/
/*! exports provided: TopbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopbarComponent", function() { return TopbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/user.service */ "./src/app/shared/service/user.service.ts");
/* harmony import */ var _service_post_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/post.service */ "./src/app/shared/service/post.service.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../chat/chat.component */ "./src/app/shared/components/chat/chat.component.ts");
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../pipes/filter.pipe */ "./src/app/shared/pipes/filter.pipe.ts");










let TopbarComponent = class TopbarComponent {
    constructor(router, userService, postService, fb, bottomSheet) {
        this.router = router;
        this.userService = userService;
        this.postService = postService;
        this.fb = fb;
        this.bottomSheet = bottomSheet;
        this.allUsersArrayNames = [];
    }
    ngOnInit() {
        this.userService.getCurrentUser().subscribe(currentUser => {
            this.currentUser = currentUser;
            console.log('TCL: TopbarComponent -> ngOnInit -> currentUser', currentUser);
        });
        this.userService.getAllUsers().subscribe(allUsersArray => {
            this.allUsersArray = allUsersArray;
            // this.allUsersArrayNames = allUsersArray.map(x => x.pseudo);
            // this.allUsersArrayNames = allUsersArray.map.forEach(x => {
            //   pseudo: x.pseudo;
            //   _id: x._id;
            // });
            this.allUsersArray.forEach(elmt => {
                this.allUsersArrayNames.push({
                    pseudo: elmt.pseudo.toLowerCase(),
                    _id: elmt._id
                });
            });
            // this.allUsersArray.forEach(elmt => {
            //   this.allUsersMapId = this.allUsersArrayNames.map( x => x._id);
            //   this.allUsersArrayNames.forEach( elmt => {
            //     if (!this.allUsersMapId.includes(elmt._id)) {
            //       this.allUsersArrayNames.push({
            //         pseudo: elmt.pseudo.toLowerCase(),
            //         _id: elmt._id
            //       });
            //     }
            //   });
            // });
            // console.log('TCL: TopbarComponent -> ngOnInit -> this.allUsersArrayNames', this.allUsersArrayNames);
            // console.log('TCL: TopbarComponent -> ngOnInit -> this.allUsersArrayNames', this.allUsersArrayNames);
            // console.log('TCL: TopbarComponent -> ngOnInit -> this.allUsersArray', this.allUsersArray);
        });
        this.searchForm = this.fb.group({
            search: [''],
        });
        this.filterAllUsers = this.searchForm.get('search').valueChanges.pipe(
        // startWith(null),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(data => {
            if (!data) {
                console.log('TCL: TopbarComponent -> ngOnInit -> this.allUsersArrayNames coucou', this.allUsersArrayNames);
                return;
            }
            else {
                console.log('TCL: TopbarComponent -> ngOnInit -> this.allUsersArrayNames coucou 2', this.allUsersArrayNames);
                return this.allUsersArrayNames.filter(user => {
                    return user.pseudo.startsWith(data.toLowerCase());
                });
            }
        }));
        // this.filterAllUsers = this.searchForm.get('search').valueChanges.pipe(
        //   startWith(''),
        //   map(data => this._filter);
        // );
    }
    // public _filter(data: string) {
    //   const filterValue = data.toLowerCase();
    //   return this.allUsersArrayNames.filter( option => option.toLowerCase().includes(filterValue));
    // }
    getPostUser() {
        this.userId = this.searchForm.value.search;
        this.searchForm.reset();
        // this.postRoute(this.userId);
        this.postService.postRoute(this.userId);
    }
    getPostCurrentUser() {
        // this.postRoute(this.currentUser._id);
        this.postService.postRoute(this.currentUser._id);
    }
    // public postRoute(userId) {
    //   this.postService.postRoute(userId);
    // }
    getCurrentProfileUser() {
        this.userService.getProfile(this.currentUser._id);
    }
    openChat() {
        this.bottomSheet.open(_chat_chat_component__WEBPACK_IMPORTED_MODULE_8__["ChatComponent"]);
    }
};
TopbarComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _service_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: _service_post_service__WEBPACK_IMPORTED_MODULE_7__["PostService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBottomSheet"] }
];
TopbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-topbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./topbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/topbar/topbar.component.html")).default,
        providers: [_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_9__["FilterPipe"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./topbar.component.css */ "./src/app/shared/components/topbar/topbar.component.css")).default]
    })
], TopbarComponent);



/***/ }),

/***/ "./src/app/shared/guards/auth.guard.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/guards/auth.guard.ts ***!
  \*********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/user.service */ "./src/app/shared/service/user.service.ts");





let AuthGuard = class AuthGuard {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    canActivate(next, state) {
        return this.userService.jwtToken.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((jwtToken) => {
            if (jwtToken.isLogged) {
                return true;
            }
            else {
                this.router.navigate(['']);
                return false;
            }
        }));
    }
};
AuthGuard.ctorParameters = () => [
    { type: _service_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/shared/interceptors/authentification.interceptor.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/interceptors/authentification.interceptor.ts ***!
  \*********************************************************************/
/*! exports provided: AuthentificationInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthentificationInterceptor", function() { return AuthentificationInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class AuthentificationInterceptor {
    intercept(req, next) {
        const token = localStorage.getItem('jwt');
        if (token) {
            const authentificationReq = req.clone({
                headers: req.headers.set('jwttoken', token)
            });
            return next.handle(authentificationReq);
        }
        else {
            return next.handle(req);
        }
    }
}


/***/ }),

/***/ "./src/app/shared/layout/layout.module.ts":
/*!************************************************!*\
  !*** ./src/app/shared/layout/layout.module.ts ***!
  \************************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");





const MODULES = [
    _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"]
];
let LayoutModule = class LayoutModule {
};
LayoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            ...MODULES
        ],
        exports: MODULES
    })
], LayoutModule);



/***/ }),

/***/ "./src/app/shared/pipes/filter.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/pipes/filter.pipe.ts ***!
  \*********************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FilterPipe = class FilterPipe {
    transform(value, ...args) {
        return null;
    }
};
FilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filter'
    })
], FilterPipe);



/***/ }),

/***/ "./src/app/shared/service/post.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/service/post.service.ts ***!
  \************************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





let PostService = class PostService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.postList = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
    }
    createPost(sendDatas) {
        return this.http.post('/request/post/create', sendDatas);
    }
    postRoute(userId) {
        this.router.navigate(['accueil', 'post', userId]);
    }
    getPost(userId) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('userId', userId);
        return this.http.get('/request/post/get', { params });
    }
};
PostService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
PostService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PostService);



/***/ }),

/***/ "./src/app/shared/service/user.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/service/user.service.ts ***!
  \************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let UserService = class UserService {
    // CONSTRUCTOR
    constructor(http, router) {
        this.http = http;
        this.router = router;
        // CREATION BEHAVIOUR SUBJECT qui surveille les valeurs du token de connexion
        this.jwtToken = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]({
            isLogged: null,
            token: null
        });
        // CREATION BEHAVIOUR SUBJECT qui recupere et surveille les infos du user connecte
        this.currentUser = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
        // CREATION BEHAVIOUR SUBJECT qui recupere et surveille tous les users existants
        this.allUsersArray = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
        this.checkToken(); // on verifie la presence d'un token dans le local storage lors de l'instanciation du service
        this.getCurrentUser();
    }
    // VERIFICATION TOKEN dans le localstorage (API native JS)
    checkToken() {
        const token = localStorage.getItem('jwt');
        if (token) {
            this.jwtToken.next({
                isLogged: true,
                token: token
            });
        }
        else {
            this.jwtToken.next({
                isLogged: false,
                token: null
            });
        }
    }
    // CREATION d'un new user
    register(user) {
        return this.http.post('/request/register', user);
    }
    // LOGIN d'un user avec recuperation du token cree cote serveur
    login(credentials) {
        return this.http.post('/request/login', credentials).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((token) => {
            this.jwtToken.next({
                isLogged: true,
                token: token
            });
            // Stockage du token recupere depuis le serveur dans le localstorage du client
            localStorage.setItem('jwt', token);
            // Récupération du current user
            // this.getCurrentUser();
        }));
    }
    // GET CURRENT USER
    getCurrentUser() {
        if (this.currentUser.value) {
            console.log('TCL: this.currentUser from user service !!!!', this.currentUser);
            return this.currentUser;
        }
        else {
            return this.http.get('/request/user/current').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((user) => {
                this.currentUser.next(user);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(() => {
                return this.currentUser;
            }));
        }
    }
    // GET ALL USERS
    getAllUsers() {
        return this.http.get('/request/user/all').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((allUsersArray) => {
            this.allUsersArray.next(allUsersArray);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(() => {
            console.log('TCL: this.allUsersArray', this.allUsersArray);
            return this.allUsersArray;
        }));
    }
    // GET Profil d'un user (on va sur la page de profil avec l'ID du user)
    getProfile(userID) {
        console.log('TCL: getProfil -> userID', userID);
        this.router.navigate(['accueil', 'profile', userID]);
    }
    // // DISPLAY Profil d'un user (en fonction de son ID)
    // public displayProfile(userID: string) {
    //   this.allUsersArray.subscribe( (allUsersArray) => {
    //     allUsersArray.forEach(elmt => {
    //       if (elmt._id === userID) {
    //         console.log('TCL: displayProfile -> elmt', elmt);
    //         return elmt;
    //       }
    //     });
    //   });
    // }
    // EDITION Profil
    editProfile(user) {
        return this.http.post('/request/editprofile', user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((updatedUser) => {
            this.currentUser.next(updatedUser);
        }));
    }
    // DECONNEXION (suppression du token)
    logout() {
        // reset du behaviour subject JwtToken dans userService avec next()
        this.jwtToken.next({
            isLogged: false,
            token: null
        });
        // suppression du token du localStorage
        localStorage.removeItem('jwt');
        // remise a zero du current user
        this.currentUser.next(null);
        // redirection vers la page de connexion
        this.router.navigate(['/']);
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ "./src/app/user-interface/post/post.component.css":
/*!********************************************************!*\
  !*** ./src/app/user-interface/post/post.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-login {\r\n  margin-top: 5%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1pbnRlcmZhY2UvcG9zdC9wb3N0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvdXNlci1pbnRlcmZhY2UvcG9zdC9wb3N0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1sb2dpbiB7XHJcbiAgbWFyZ2luLXRvcDogNSU7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/user-interface/post/post.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/user-interface/post/post.component.ts ***!
  \*******************************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_service_post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/service/post.service */ "./src/app/shared/service/post.service.ts");
/* harmony import */ var src_app_shared_service_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/service/user.service */ "./src/app/shared/service/user.service.ts");




// import { Observable } from 'rxjs/internal/Observable';
// import { Subscription } from 'rxjs/internal/Subscription';
// SERVICES


let PostComponent = class PostComponent {
    constructor(userService, postService, fb, activatedRoute) {
        this.userService = userService;
        this.postService = postService;
        this.fb = fb;
        this.activatedRoute = activatedRoute;
        this.isCurrentUser = false;
    }
    ngOnInit() {
        this.postForm = this.fb.group({
            message: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
        // RECUPEARTION ID
        this.userService.getCurrentUser().subscribe(currentUser => {
            console.log(currentUser);
            // tslint:disable-next-line: no-string-literal
            this.currentUser = currentUser;
            // PUIS RECUPERATION MESSAGES
            // tslint:disable-next-line: no-string-literal
            // this.postService.getPost(this.currentUser['_id']).subscribe(
            //   (postArray) => {
            //     this.postArray = postArray;
            //     console.log('postArray ', postArray);
            //   }
            // );
        });
        this.activatedRoute.paramMap.subscribe((paramMap) => {
            this.userId = paramMap.get('id');
            this.postService.getPost(this.userId).subscribe((postArray) => {
                this.postArray = postArray;
                console.log('postArray ', postArray);
            });
            this.userService.getAllUsers().subscribe(allUsersArray => {
                this.allUsersArray = allUsersArray;
                this.allUsersArray.forEach(elmt => {
                    if (elmt._id === this.userId) {
                        if (elmt._id === this.currentUser._id) {
                            this.isCurrentUser = true;
                        }
                        else {
                            this.isCurrentUser = false;
                        }
                        console.log('TCL: ProfileComponent -> ngOnInit -> this.isCurrentUser', this.isCurrentUser);
                        this.displayedUser = elmt;
                        console.log('TCL: ProfileComponent -> ngOnInit -> this.displayedUser', this.displayedUser);
                    }
                });
            });
        });
    }
    createPost() {
        this.date = new Date();
        this.sendDatas = {
            // tslint:disable-next-line: no-string-literal
            user_id: this.currentUser['_id'],
            message: this.postForm.value.message,
            date: this.date
            // date: formatDate(this.date, 'dd/MM/yyyy', 'fr-FR')
        };
        this.postService.createPost(this.sendDatas).subscribe(() => {
            this.postForm.reset();
            this.postArray.push(this.sendDatas);
        }, err => {
            console.log('ohh noooo');
        });
    }
    getProfileUser() {
        this.userService.getProfile(this.displayedUser._id);
    }
};
PostComponent.ctorParameters = () => [
    { type: src_app_shared_service_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: src_app_shared_service_post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
PostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-post',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./post.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-interface/post/post.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./post.component.css */ "./src/app/user-interface/post/post.component.css")).default]
    })
], PostComponent);



/***/ }),

/***/ "./src/app/user-interface/profile/edit-profile.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/user-interface/profile/edit-profile.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".edit-form-container,\r\n.mat-card {\r\n  width: 100% !important;\r\n}\r\n\r\nh1 {\r\n  /* color: #fff; */\r\n  text-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1pbnRlcmZhY2UvcHJvZmlsZS9lZGl0LXByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvdXNlci1pbnRlcmZhY2UvcHJvZmlsZS9lZGl0LXByb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lZGl0LWZvcm0tY29udGFpbmVyLFxyXG4ubWF0LWNhcmQge1xyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmgxIHtcclxuICAvKiBjb2xvcjogI2ZmZjsgKi9cclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/user-interface/profile/edit-profile.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/user-interface/profile/edit-profile.component.ts ***!
  \******************************************************************/
/*! exports provided: EditProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfileComponent", function() { return EditProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_service_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/service/user.service */ "./src/app/shared/service/user.service.ts");




// SERVICE

let EditProfileComponent = class EditProfileComponent {
    constructor(userService, fb, router) {
        this.userService = userService;
        this.fb = fb;
        this.router = router;
        this.isSubmitted = false;
    }
    ngOnInit() {
        this.userService.currentUser.subscribe(currentUser => {
            this.currentUser = currentUser;
            this.editProfileForm = this.fb.group({
                name: [this.currentUser.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]],
                firstname: [this.currentUser.firstname, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]],
                pseudo: [this.currentUser.pseudo, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]],
                email: [this.currentUser.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
                // password: [this.currentUser.password, [Validators.required, Validators.minLength(8)]],
                // confirmPassword: [this.currentUser.confirmPassword, [Validators.minLength(8)]],
                birth: [this.currentUser.birth, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
                sexe: [this.currentUser.sexe, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
                grade: [this.currentUser.grade, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
            });
            // this.editProfileForm.setValidators(this.comparisonValidator());
        });
    }
    // public comparisonValidator(): any {
    //   return (group: FormGroup): any => {
    //     const control1 = group.controls.password;
    //     const control2 = group.controls.confirmPassword;
    //     if (control1.value !== control2.value) {
    //       control2.setErrors({isNoMatch: true});
    //     } else {
    //       control2.setErrors(null);
    //     }
    //     return;
    //   };
    // }
    submit() {
        this.isSubmitted = true;
        if (this.editProfileForm.valid) {
            this.editProfileForm.value['_id'] = this.currentUser['_id'];
            this.userService.editProfile(this.editProfileForm.value).subscribe((user) => {
                console.log('TCL: EditProfileComponent -> user', user);
                this.router.navigate(['/accueil/post']);
            }, err => {
                console.log('Erreur inscription', err);
                if (err.status === 401) {
                    this.errorMessage = 'Vous n\'êtes pas autorisé à consulter ces informations';
                }
                else {
                    this.errorMessage = 'Une erreur c\'est produite. impossible de modifier votre profil.';
                }
            });
        }
    }
};
EditProfileComponent.ctorParameters = () => [
    { type: src_app_shared_service_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
EditProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-interface/profile/edit-profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-profile.component.css */ "./src/app/user-interface/profile/edit-profile.component.css")).default]
    })
], EditProfileComponent);



/***/ }),

/***/ "./src/app/user-interface/profile/profile.component.css":
/*!**************************************************************!*\
  !*** ./src/app/user-interface/profile/profile.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-expansion-panel,\r\nbutton {\r\n  margin-top: 10%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1pbnRlcmZhY2UvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3VzZXItaW50ZXJmYWNlL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWV4cGFuc2lvbi1wYW5lbCxcclxuYnV0dG9uIHtcclxuICBtYXJnaW4tdG9wOiAxMCU7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/user-interface/profile/profile.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/user-interface/profile/profile.component.ts ***!
  \*************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_service_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/service/user.service */ "./src/app/shared/service/user.service.ts");




// SERVICE

let ProfileComponent = class ProfileComponent {
    constructor(userService, fb, activatedRoute) {
        this.userService = userService;
        this.fb = fb;
        this.activatedRoute = activatedRoute;
        this.isCurrentUser = false;
        this.isSubmitted = false;
    }
    ngOnInit() {
        this.activatedRoute.paramMap.subscribe((paramMap) => {
            this.userId = paramMap.get('id');
            console.log('TCL: ProfileComponent -> ngOnInit -> this.userId', this.userId);
            this.userService.getAllUsers().subscribe(allUsersArray => {
                this.allUsersArray = allUsersArray;
                this.allUsersArray.forEach(elmt => {
                    if (elmt._id === this.userId) {
                        if (elmt._id === this.currentUser._id) {
                            this.isCurrentUser = true;
                        }
                        else {
                            this.isCurrentUser = false;
                        }
                        console.log('TCL: ProfileComponent -> ngOnInit -> this.isCurrentUser', this.isCurrentUser);
                        this.displayedUser = elmt;
                        console.log('TCL: ProfileComponent -> ngOnInit -> this.displayedUser', this.displayedUser);
                    }
                });
            });
        });
        this.userService.getCurrentUser().subscribe(currentUser => {
            this.currentUser = currentUser;
            console.log('TCL: ProfileComponent -> ngOnInit -> this.currentUser', this.currentUser);
            // if (this.userId === this.currentUser._id) {
            //   this.isCurrentUser = true;
            // } else {
            //   this.isCurrentUser = false;
            // }
        });
    }
};
ProfileComponent.ctorParameters = () => [
    { type: src_app_shared_service_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-interface/profile/profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.css */ "./src/app/user-interface/profile/profile.component.css")).default]
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/user-interface/user-interface.component.css":
/*!*************************************************************!*\
  !*** ./src/app/user-interface/user-interface.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItaW50ZXJmYWNlL3VzZXItaW50ZXJmYWNlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/user-interface/user-interface.component.ts":
/*!************************************************************!*\
  !*** ./src/app/user-interface/user-interface.component.ts ***!
  \************************************************************/
/*! exports provided: UserInterfaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInterfaceComponent", function() { return UserInterfaceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UserInterfaceComponent = class UserInterfaceComponent {
    constructor() { }
    ngOnInit() { }
};
UserInterfaceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-interface',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-interface.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-interface/user-interface.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-interface.component.css */ "./src/app/user-interface/user-interface.component.css")).default]
    })
], UserInterfaceComponent);



/***/ }),

/***/ "./src/app/user-interface/user-interface.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/user-interface/user-interface.module.ts ***!
  \*********************************************************/
/*! exports provided: UserInterfaceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInterfaceModule", function() { return UserInterfaceModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_layout_layout_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/layout/layout.module */ "./src/app/shared/layout/layout.module.ts");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post/post.component */ "./src/app/user-interface/post/post.component.ts");
/* harmony import */ var _user_interface_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-interface.component */ "./src/app/user-interface/user-interface.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/user-interface/profile/profile.component.ts");
/* harmony import */ var _profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./profile/edit-profile.component */ "./src/app/user-interface/profile/edit-profile.component.ts");
/* harmony import */ var _shared_components_chat_chat_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/components/chat/chat.component */ "./src/app/shared/components/chat/chat.component.ts");
/* harmony import */ var _shared_components_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/components/topbar/topbar.component */ "./src/app/shared/components/topbar/topbar.component.ts");
/* harmony import */ var _shared_service_post_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/service/post.service */ "./src/app/shared/service/post.service.ts");





// CUSTOM MODULES
 // module custom d'import de material, flex-layout, hammerjs, cdk
// CUSTOM COMPONENTS






// CUSTOM SERVICE

let UserInterfaceModule = class UserInterfaceModule {
};
UserInterfaceModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _post_post_component__WEBPACK_IMPORTED_MODULE_6__["PostComponent"],
            _user_interface_component__WEBPACK_IMPORTED_MODULE_7__["UserInterfaceComponent"],
            _profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_9__["EditProfileComponent"],
            _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"],
            _shared_components_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_11__["TopbarComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _shared_layout_layout_module__WEBPACK_IMPORTED_MODULE_5__["LayoutModule"]
        ],
        providers: [_shared_service_post_service__WEBPACK_IMPORTED_MODULE_12__["PostService"]],
        // bootstrap: [UserInterfaceComponent],
        entryComponents: [_shared_components_chat_chat_component__WEBPACK_IMPORTED_MODULE_10__["ChatComponent"]] // Rend le composant chat disponible partout dasn le module UI
    })
], UserInterfaceModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\herka\Documents\social-network\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map