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
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"center center\">\n  <mat-card fxFlex.l-sm= \"90%\">\n    <mat-card-content>\n      <form [formGroup]=\"registerForm\" fxLayout=\"column\" (ngSubmit)='submit()' novalidate>\n        <div class=\"form-field-container\" fxLayout.gt-sm=\"row\" fxLayoutGap=\"15px\">\n          <div fxLayout=\"column\">\n            <mat-form-field>\n              <input formControlName=\"name\" matInput type=\"text\" placeholder=\"Nom\">\n            </mat-form-field>\n            <p class=\"error\" *ngIf=\"registerForm.get('name').invalid && isSubmitted\">Champ requis (minimum 3 caractères)</p>\n          </div>\n          <div fxLayout=\"column\">\n            <mat-form-field>\n              <input formControlName=\"firstname\" matInput type=\"text\" placeholder=\"Prénom\">\n            </mat-form-field>\n            <p class=\"error\" *ngIf=\"registerForm.get('firstname').invalid && isSubmitted\">Champ requis (minimum 3 caractères)</p>\n          </div>\n\n        </div>\n\n        <div class=\"form-field-container\" fxLayout.gt-sm=\"row\" fxLayoutGap=\"15px\">\n          <div fxLayout=\"column\">\n            <mat-form-field>\n              <input formControlName=\"pseudo\"matInput type=\"text\" placeholder=\"Pseudo\">\n            </mat-form-field>\n            <p class=\"error\" *ngIf=\"registerForm.get('pseudo').invalid && isSubmitted\">Champ requis (minimum 3 caractères)</p>\n          </div>\n\n          <div fxLayout=\"column\">\n            <mat-form-field>\n              <input formControlName=\"email\" matInput type=\"text\" placeholder=\"Email\">\n            </mat-form-field>\n            <p class=\"error\" *ngIf=\"registerForm.get('email').hasError('required') && isSubmitted\">Veuillez entrer votre email</p>\n            <p class=\"error\" *ngIf=\"registerForm.get('email').hasError('email')\">Veuillez entrer un email sous format mail.</p>\n          </div>\n\n        </div>\n\n        <div class=\"form-field-container\" fxLayout.gt-sm=\"row\" fxLayoutGap=\"15px\">\n\n          <div fxLayout=\"column\">\n            <mat-form-field>\n              <input formControlName=\"password\" matInput type=\"password\" placeholder=\"Mot de passe\">\n            </mat-form-field>\n            <p class=\"error\" *ngIf=\"registerForm.get('password').invalid && isSubmitted\">Champ requis (minimum 8 caractères)</p>\n          </div>\n          <div fxLayout=\"column\">\n            <mat-form-field>\n              <input formControlName=\"confirmPassword\" matInput type=\"password\" placeholder=\"Confirmer mot de passe\">\n            </mat-form-field>\n            <p class=\"error\" *ngIf=\"registerForm.get('confirmPassword').hasError('isNoMatch') && isSubmitted\">le mot de passe ne correspond pas</p>\n          </div>\n        </div>\n\n        <div class=\"form-field-container\" fxLayout.gt-sm=\"row\" fxLayoutGap=\"15px\">\n          <div fxLayout=\"column\">\n            <mat-form-field>\n              <input formControlName=\"birth\" matInput [matDatepicker]=\"picker\" placeholder=\"Date de naissance\">\n              <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n              <mat-datepicker #picker></mat-datepicker>\n            </mat-form-field>\n            <p class=\"error\" *ngIf=\"registerForm.get('birth').invalid && isSubmitted\">Champ requis</p>\n          </div>\n          <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n            <mat-radio-group formControlName=\"sexe\" aria-label=\"Sexe\" fxLayoutGap=\"15px\" fxLayoutAlign=\"center center\">\n              <mat-radio-button value=\"femme \">Femme</mat-radio-button>\n              <mat-radio-button value=\"homme \">Homme</mat-radio-button>\n            </mat-radio-group>\n            <p class=\"error\" *ngIf=\"registerForm.get('sexe').invalid && isSubmitted\">Champ requis</p>\n          </div>\n\n        </div>\n        <div fxLayout=\"column\">\n          <mat-form-field>\n            <mat-label>Niveau scolaire</mat-label>\n            <mat-select formControlName=\"grade\">\n                <mat-option value=\"cm2\">CM2</mat-option>\n                <mat-option value=\"6eme\">6eme</mat-option>\n                <mat-option value=\"5eme\">5eme</mat-option>\n                <mat-option value=\"4eme\">4eme</mat-option>\n                <mat-option value=\"3eme\">3eme</mat-option>\n                <mat-option value=\"seconde\">seconde</mat-option>\n                <mat-option value=\"premiere\">première</mat-option>\n                <mat-option value=\"terminal\">terminal</mat-option>\n                <mat-option value=\"professeur\">professeur</mat-option>\n            </mat-select>\n          </mat-form-field>\n          <p class=\"error\" *ngIf=\"registerForm.get('grade').invalid && isSubmitted\">Champ requis</p>\n        </div>\n        <p class=\"error\" *ngIf=\"message\">{{ message }}</p>\n        <p class=\"error\" *ngIf=\"errorMessage\">{{ errorMessage }}</p>\n        <button mat-raised-button color=\"primary\">S'inscrire</button>\n      </form>\n    </mat-card-content>\n  </mat-card>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/header/header.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/header/header.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=warn>\n  <div class=\"logo-container\" fxLayout=\"row nowrap\">\n    <!-- <div routerLink=\"/accueil/post\" class=\"link\"></div> -->\n    <img src=\"../../../../assets/img/logo.png\" alt=\"logo-teach\" height=\"60px\" fxFlexAlign=\"center\">\n    <div (click)=getPostUser() class=\"link\">\n      <p class=\"logo-title\">Teach</p>\n      <p class=\"logo-pipeline\" fxHide.lt-sm=\"true\">le social network du soutien scolaire</p>\n    </div>\n  </div>\n  <span fxFlex=\"auto\" class=\"link\"></span>\n  <div>\n    <!-- <span *ngIf=\"jwtToken.isLogged === false\" fxLayoutGap=\"15px\">\n      <span routerLink=\"/login\" class=\"link\">Connexion</span>\n      <span routerLink=\"/register\" class=\"link\">Inscription</span>\n    </span> -->\n    <span *ngIf=\"jwtToken.isLogged\" class=\"link\" (click)=logout() fxLayout=\"row\" fxLayoutAlign=\"center center\"\n      fxLayoutGap=\"5px\">\n      <mat-icon class=\"link\" (click)=logout()>power_settings_new</mat-icon>\n      <span fxHide.lt-sm=\"true\">Déconnexion</span>\n    </span>\n  </div>\n</mat-toolbar>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/topbar/topbar.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/topbar/topbar.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar class=\"topbar\" [ngStyle]=\"{\n  backgroundColor: backgroundColor\n}\" color=accent fxLayout=\"row\" fxLayoutGap=\"15px\" fxLayoutAlign=\"start center\">\n  <mat-icon class=\"link burger\" fxLayoutGap=\"5px\" fxFlex= \"33%\" fxFlex.lt-sm= \"5%\" (click)=\"sidenavMenu.toggle()\" aria-hidden=\"false\"\n    aria-label=\"menu icon\">menu</mat-icon>\n  <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxFlex= \"66%\" fxFlex.lt-sm= \"80%\"fxLayoutAlign=\"space-between center\">\n    <div class=\"search\" fxFlexOrder.lt-sm=\"2\">\n      <form [formGroup]=\"searchForm\" fxLayout=\"row\" fxLayoutGap=\"5px\" fxLayoutAlign=\"center center\"novalidate>\n        <mat-icon fxLayoutGap=\"15px\" aria-hidden=\"false\" aria-label=\"search icon\">search</mat-icon>\n        <mat-form-field>\n          <input type=\"text\" matInput formControlName=\"search\" [matAutocomplete]=\"auto\" placeholder=\"Recherche profil\"  (keyup.enter)=getPostUser()>\n        </mat-form-field>\n        <mat-autocomplete #auto=\"matAutocomplete\">\n          <mat-option *ngFor=\"let user of filterAllUsers | async;\" [value]=\"user._id\" (click)=getPostUser() (keyup.enter)=getPostUser()>{{user.pseudo}}</mat-option>\n          <!-- <input type=\"hidden\" formControlName=\"_id\" [value]=\"user._id\"/> -->\n        </mat-autocomplete>\n      </form>\n    </div>\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\" fxLayoutGap=\"5px\" fxFlexOrder.lt-sm=\"1\">\n      <img mat-card-avatar [src]=\"currentUser.avatar\" alt=\"\">\n      <div fxLayout=\"column\" fxLayout.lt-sm=\"row\" fxLayoutAlign=\"center start\" fxLayoutAlign.lt-sm=\"center center\" fxLayoutGap.lt-sm=\"15px\">\n        <h3 class=\"link\" (click)=getPostCurrentUser()> {{currentUser.pseudo}}</h3>\n        <mat-card-subtitle *ngIf=\"currentUser.admin\">Teacher</mat-card-subtitle>\n      </div>\n    </div>\n  </div>\n</mat-toolbar>\n\n<mat-sidenav-container>\n  <mat-sidenav #sidenavMenu>\n    <mat-nav-list>\n      <a mat-list-item class=\"link\" (click)=\"getCurrentProfileUser()\">Mon profil</a>\n      <a mat-list-item class=\"link\" routerLink=\"/accueil/friends\">Gestion des amis</a>\n\n    </mat-nav-list>\n      <mat-list-item>\n        <h2 mat-list-item>Amis en ligne</h2>\n      </mat-list-item>\n      <div *ngFor=\"let user of friendsConnected\" class=\"user-connected\">\n        <mat-list-item *ngIf=\"user !== null && user!== undefined && user._id !== currentUser._id\" (click)=\"openDialog(user)\" class=\"link\" >\n          <div fxLayout=\"row\" fxLayoutAlign=\"start end\" fxLayoutGap=\"5px\">\n              &nbsp;&nbsp;\n            <mat-icon color=\"accent\">person</mat-icon>\n            <span>{{user.pseudo}}</span>\n          </div>\n        </mat-list-item>\n      </div>\n    <mat-nav-list>\n\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <div fxLayout=\"row\" fxLayoutAlign=\"space-around start\">\n\n      <div fxFlex=\"550px\" fxFlex.lt-sm=\"90%\">\n        <router-outlet></router-outlet>\n      </div>\n\n    </div>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-interface/chat/chat.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-interface/chat/chat.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Messagerie privée </h1>\n\n<!-- <button mat-fab (click)=\"onClickUserInfo()\">\n  <mat-icon>person</mat-icon>\n</button> -->\n<div class=\"chat-container\">\n  <mat-card class=\"main-card\">\n    <mat-list class=\"chat-list\">\n      <mat-list-item *ngFor=\"let message of messagesArray\">\n        <!-- <img mat-list-avatar *ngIf=\"message.action === undefined\" [src]=\"message.from.avatar\"> -->\n        <h4 mat-line>\n          <b>{{message.user.pseudo}}</b>\n        </h4>\n        <p mat-line>\n          <span> {{message.message}} </span>\n        </p>\n        <!-- <p mat-line *ngIf=\"message.action === action.JOINED\" class=\"chat-notification\">\n          <span> <b>{{message.from.name}}</b> joined to the conversation. </span>\n        </p> -->\n        <!-- <p mat-line *ngIf=\"message.action === action.RENAME\" class=\"chat-notification\">\n          <span> <b>{{message.content.previousUsername}}</b> is now <b>{{message.content.username}}</b> </span>\n        </p> -->\n      </mat-list-item>\n    </mat-list>\n    <div class=\"chat-footer-container\">\n      <mat-icon>message</mat-icon>\n      <mat-form-field id=\"chat-input\">\n        <input matInput #inputMessage placeholder=\"Ecrivez votre message...\" [(ngModel)]=\"messageText\"\n          (keyup.enter)=\"sendMessage()\">\n        <!-- <mat-hint align=\"end\">{{inputMessage.value.length}}/140</mat-hint> -->\n      </mat-form-field>\n    </div>\n  </mat-card>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-interface/friend/friend.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-interface/friend/friend.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"friendsArray !== null\">\n  <h2>Mes amis</h2>\n  <div fxLayout=\"column\">\n    <div class=\"friendsList\">\n      <mat-card *ngFor=\"let friend of friendsArray\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\" fxLayoutGap=\"10px\">\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"10px\">\n          <img mat-card-avatar [src]=\"friend.avatar\" alt=\"\">\n          <mat-card-title>{{friend.pseudo}}</mat-card-title>\n        </div>\n        <div fxLayout=\"row\" fxLayoutAlign=\"end center\" >\n          <!-- <button mat-raised-button color=\"accent\" (click)=\"deleteFriend(friend._id, currentUser._id)\">Bloquer</button> -->\n          <button mat-raised-button color=\"accent\" (click)=\"deleteFriend(friend._id, currentUser._id)\">\n              <mat-icon class=\"block\">block</mat-icon>\n            </button>\n        </div>\n      </mat-card>\n    </div>\n  </div>\n</div>\n\n<div *ngIf=\"requestsArray !== undefined\">\n  <h2>Invitations envoyées</h2>\n  <div fxLayout=\"column\">\n    <div class=\"requestsList\">\n      <mat-card *ngFor=\"let request of requestsArray\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\" fxLayoutGap=\"10px\">\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"10px\">\n          <img mat-card-avatar [src]=\"request.avatar\" alt=\"\">\n          <mat-card-title>{{request.pseudo}}</mat-card-title>\n        </div>\n        <div fxLayout=\"row\" fxLayoutAlign=\"end center\" >\n          <!-- <button mat-raised-button color=\"primary\">Accepter</button>\n          <button mat-raised-button color=\"accent\">Refuser</button> -->\n        </div>\n      </mat-card>\n    </div>\n  </div>\n</div>\n\n\n<div *ngIf=\"invitationsArray !== undefined\">\n  <h2>Invitations reçues</h2>\n  <div fxLayout=\"column\">\n    <div class=\"invitationsList\">\n      <mat-card *ngFor=\"let invitation of invitationsArray\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\" fxLayoutGap=\"10px\">\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"10px\">\n          <img mat-card-avatar [src]=\"invitation.avatar\" alt=\"\">\n          <mat-card-title>{{invitation.pseudo}}</mat-card-title>\n        </div>\n        <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"5px\">\n          <button mat-raised-button color=\"primary\" (click)=\"acceptInvitation(invitation._id, currentUser._id)\">\n            <mat-icon>check_circle</mat-icon>\n          </button>\n          <button mat-raised-button color=\"accent\" (click)= \"deleteInvitation(invitation._id, currentUser._id)\" >\n            <mat-icon class=\"block\">block</mat-icon>\n          </button>\n        </div>\n      </mat-card>\n    </div>\n  </div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-interface/modal/modal.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-interface/modal/modal.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>Messagerie instantanée</h1>\n<div mat-dialog-content>\n  <p>Démarrer une conversation privée avec <span>{{data.pseudo}}</span><p>\n</div>\n<div mat-dialog-actions>\n  <button mat-button mat-dialog-close cdkFocusInitial (click) = \"onOkClick(data._id)\">Ok</button>\n  <button mat-button (click)=\"onNoClick()\">Non</button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-interface/post/post.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-interface/post/post.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"center center\">\n  <mat-card>\n    <mat-card-header>\n      <img mat-card-avatar [src]=\"displayedUser.avatar\" alt=\"\">\n      <mat-card-title class=\"link\" (click)=\"getProfileUser()\">{{displayedUser.pseudo}}</mat-card-title>\n      <mat-card-subtitle>{{displayedUser.grade}}</mat-card-subtitle>\n      <mat-card-subtitle *ngIf=\"displayedUser.admin\">Teacher</mat-card-subtitle>\n    </mat-card-header>\n  </mat-card>\n\n  <mat-card *ngIf=\"isCurrentUser\" class=\"card-login\">\n    <mat-card-content>\n      <mat-card-header>\n\n        <mat-card-title>\n          <mat-icon aria-hidden=\"false\">edit</mat-icon>&nbsp;Créer une publication\n        </mat-card-title>\n      </mat-card-header>\n      <form [formGroup]=\"postForm\" fxLayout=\"column\" (ngSubmit)=\"createPost()\" novalidate>\n        <div class=\"form-field-container\" fxLayout=\"column\" fxLayoutGap=\"15px\">\n          <mat-form-field>\n            <textarea formControlName=\"message\" placeholder=\"Ecrivez un message...\" matInput cdkTextareaAutosize\n              #autosize=\"cdkTextareaAutosize\" cdkAutosizeMinRows=\"5\" cdkAutosizeMaxRows=\"10\"></textarea>\n          </mat-form-field>\n        </div>\n        <button mat-raised-button color=\"primary\">Publier</button>\n      </form>\n    </mat-card-content>\n  </mat-card>\n</div>\n\n<div fxLayout=\"center center\" *ngFor=\"let post of postArray\">\n  <mat-card class=\"card-login\">\n\n    <mat-card-header fxLayoutAlign=\"space-between start\">\n      <img mat-card-avatar [src]=\"displayedUser.avatar\" alt=\"\">\n      <mat-card-title class=\"link\" (click)=\"getProfileUser()\">{{displayedUser.pseudo}}</mat-card-title>\n      <mat-card-subtitle>{{displayedUser.grade}}</mat-card-subtitle>\n      <mat-card-subtitle>le {{post.date | date:'fullDate'}} à {{post.date | date:'h:mm a'}}</mat-card-subtitle>\n      <div class=\"cancel\">\n        <mat-icon *ngIf=\"isCurrentUser || currentUser.admin\" color=\"primary\" class=\"link\"\n          (click)=\"deletePost(displayedUser._id, post._id)\">cancel</mat-icon>\n      </div>\n    </mat-card-header>\n    <mat-card-content>\n      <mat-card-content>\n        <p>{{post.message}}</p>\n      </mat-card-content>\n\n      <mat-accordion>\n        <mat-expansion-panel>\n          <mat-expansion-panel-header>\n            <mat-panel-title color=\"primary\" class=\"link\">\n              Commentaires\n            </mat-panel-title>\n          </mat-expansion-panel-header>\n          <form *ngIf=\"currentUser.admin || areFriends || isCurrentUser \" [formGroup]=\"commentForm\" (ngSubmit)=\"createComment(post)\" novalidate>\n            <mat-form-field class=\"comment-input\">\n              <input matInput formControlName=\"message\" placeholder=\"Saisissez votre commentaire\">\n            </mat-form-field>\n            <button mat-raised-button color=\"primary\">Publier</button>\n          </form>\n          <mat-card class=\"comment-card\" *ngFor=\"let comment of post.commentsArray \">\n            <mat-card-header fxLayoutAlign=\"space-between start\">\n              <img mat-card-avatar [src]=\"displayedUser.avatar\" alt=\"\">\n              <mat-card-title class=\"link\" (click)=\"getProfileUser()\">{{comment.pseudo}}</mat-card-title>\n              <mat-card-subtitle>le {{comment.date | date:'fullDate'}} à {{comment.date | date:'h:mm a'}}\n              </mat-card-subtitle>\n              <div class=\"cancel\">\n                <!-- <mat-icon *ngIf=\"isCurrentUser || currentUser.admin\" color=\"primary\" class=\"link\">cancel</mat-icon> -->\n              </div>\n            </mat-card-header>\n            <mat-card-content>\n              <p>{{comment.comment}}</p>\n            </mat-card-content>\n\n\n          </mat-card>\n        </mat-expansion-panel>\n      </mat-accordion>\n\n      <!-- <mat-card-actions fxLayoutAlign=\"end center\">\n        <button mat-button color=\"primary\">Commentaires</button>\n      </mat-card-actions> -->\n    </mat-card-content>\n  </mat-card>\n</div>\n\n<!-- <button [routerLink]=\"['/']\" routerLinkActive=\"router-link-active\" ></button> -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-interface/profile/edit-profile.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-interface/profile/edit-profile.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"center center\">\n\n\n  <div class=\"edit-form-container\" fxLayout=\"center center\">\n    <mat-card class=\"edit-profile-card\">\n        <h1>Edition du profil</h1>\n        <mat-card-content>\n          <form [formGroup]=\"editProfileForm\" fxLayout=\"column\" (ngSubmit)='submit()' novalidate>\n            <div class=\"form-field-container\" fxLayout=\"column\" fxLayoutGap=\"15px\">\n              <div fxLayout=\"column\">\n                <mat-form-field>\n                  <input formControlName=\"name\" matInput type=\"text\" placeholder=\"Nom\">\n                </mat-form-field>\n                <p class=\"error\" *ngIf=\"editProfileForm.get('name').invalid && isSubmitted\">Champ requis (minimum 3 caractères)</p>\n              </div>\n              <div fxLayout=\"column\">\n                <mat-form-field>\n                  <input formControlName=\"firstname\" matInput type=\"text\" placeholder=\"Prénom\">\n                </mat-form-field>\n                <p class=\"error\" *ngIf=\"editProfileForm.get('firstname').invalid && isSubmitted\">Champ requis (minimum 3 caractères)</p>\n              </div>\n\n              <div fxLayout=\"column\">\n                <mat-form-field>\n                  <input formControlName=\"pseudo\"matInput type=\"text\" placeholder=\"Pseudo\">\n                </mat-form-field>\n                <p class=\"error\" *ngIf=\"editProfileForm.get('pseudo').invalid && isSubmitted\">Champ requis (minimum 3 caractères)</p>\n              </div>\n\n                <mat-form-field>\n                  <input formControlName=\"email\" matInput type=\"text\" placeholder=\"Email\">\n                </mat-form-field>\n                <p class=\"error\" *ngIf=\"editProfileForm.get('email').hasError('required') && isSubmitted\">Veuillez entrer votre email</p>\n                <p class=\"error\" *ngIf=\"editProfileForm.get('email').hasError('email')\">Veuillez entrer un email sous format mail.</p>\n              </div>\n\n\n            <!-- <div class=\"form-field-container\" fxLayout=\"column\" fxLayoutGap=\"15px\">\n\n              <div fxLayout=\"column\">\n                <mat-form-field>\n                  <input formControlName=\"password\" matInput type=\"password\" placeholder=\"Mot de passe\">\n                </mat-form-field>\n                <p class=\"error\" *ngIf=\"editProfileForm.get('password').invalid && isSubmitted\">Champ requis (minimum 8 caractères)</p>\n              </div>\n              <div fxLayout=\"column\">\n                <mat-form-field>\n                  <input formControlName=\"confirmPassword\" matInput type=\"password\" placeholder=\"Confirmer mot de passe\">\n                </mat-form-field>\n                <p class=\"error\" *ngIf=\"editProfileForm.get('confirmPassword').hasError('isNoMatch') && isSubmitted\">le mot de passe ne correspond pas</p>\n              </div>\n            </div> -->\n\n              <div fxLayout=\"column\">\n                <mat-form-field>\n                  <input formControlName=\"birth\" matInput [matDatepicker]=\"picker\" placeholder=\"Date de naissance\">\n                  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                  <mat-datepicker #picker></mat-datepicker>\n                </mat-form-field>\n                <p class=\"error\" *ngIf=\"editProfileForm.get('birth').invalid && isSubmitted\">Champ requis</p>\n              </div>\n              <div fxLayout=\"column\">\n                <mat-radio-group formControlName=\"sexe\" aria-label=\"Sexe\" fxLayoutGap=\"15px\" fxLayoutAlign=\"center center\">\n                  <mat-radio-button value=\"femme \">Femme</mat-radio-button>\n                  <mat-radio-button value=\"homme \">Homme</mat-radio-button>\n                </mat-radio-group>\n                <p class=\"error\" *ngIf=\"editProfileForm.get('sexe').invalid && isSubmitted\">Champ requis</p>\n              </div>\n\n              <div fxLayout=\"column\">\n              <mat-form-field>\n                <mat-label>Niveau scolaire</mat-label>\n                <mat-select formControlName=\"grade\">\n                    <mat-option value=\"6eme\">6eme</mat-option>\n                    <mat-option value=\"5eme\">5eme</mat-option>\n                    <mat-option value=\"4eme\">4eme</mat-option>\n                    <mat-option value=\"3eme\">3eme</mat-option>\n                    <mat-option value=\"seconde\">seconde</mat-option>\n                    <mat-option value=\"premiere\">première</mat-option>\n                    <mat-option value=\"terminal\">terminal</mat-option>\n                    <mat-option value=\"professeur\">professeur</mat-option>\n                </mat-select>\n              </mat-form-field>\n              <p class=\"error\" *ngIf=\"editProfileForm.get('grade').invalid && isSubmitted\">Champ requis</p>\n            </div>\n            <p class=\"error\" *ngIf=\"errorMessage\">{{ errorMessage }}</p>\n            <button mat-raised-button color=\"primary\">Mettre à jour le profil</button>\n          </form>\n        </mat-card-content>\n      </mat-card>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-interface/profile/profile.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-interface/profile/profile.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <h1>Modifier mon profil</h1> -->\n\n<div fxLayout=\"center center\">\n  <mat-card class=\"card-profile\">\n    <mat-card-content>\n      <mat-card fxLayout=\"row\" fxLayoutAlign=\"center center\" fxLayoutGap=\"10px\">\n        <img mat-card-avatar [src]=\"displayedUser.avatar\" alt=\"\">\n        <mat-card-title>{{displayedUser.pseudo}}</mat-card-title>\n      </mat-card>\n\n      <mat-accordion>\n        <mat-expansion-panel>\n          <mat-expansion-panel-header>\n            <mat-panel-title>Informations personnelles</mat-panel-title>\n          </mat-expansion-panel-header>\n          <mat-nav-list>\n            <h3 mat-subheader>Nom</h3>\n            <mat-list-item> {{displayedUser.name}}\n              <mat-divider></mat-divider>\n            </mat-list-item>\n            <h3 mat-subheader>Prénom</h3>\n            <mat-list-item> {{displayedUser.firstname}}\n              <mat-divider></mat-divider>\n            </mat-list-item>\n            <h3 mat-subheader>Pseudo</h3>\n            <mat-list-item> {{displayedUser.pseudo}}\n              <mat-divider></mat-divider>\n            </mat-list-item>\n            <h3 mat-subheader>Email</h3>\n            <mat-list-item> {{displayedUser.email}}\n              <mat-divider></mat-divider>\n            </mat-list-item>\n            <h3 mat-subheader>Date de naissance</h3>\n            <mat-list-item> le {{displayedUser.birth | date:'fullDate'}}\n              <mat-divider></mat-divider>\n            </mat-list-item>\n            <h3 mat-subheader>Sexe</h3>\n            <mat-list-item> {{displayedUser.sexe}}\n              <mat-divider></mat-divider>\n            </mat-list-item>\n            <h3 mat-subheader>Niveau scolaire</h3>\n            <mat-list-item> {{displayedUser.grade}}\n              <mat-divider></mat-divider>\n            </mat-list-item>\n          </mat-nav-list>\n        </mat-expansion-panel>\n      </mat-accordion>\n      <mat-accordion>\n        <mat-expansion-panel>\n          <mat-expansion-panel-header>\n            <mat-panel-title>Amis</mat-panel-title>\n          </mat-expansion-panel-header>\n        </mat-expansion-panel>\n      </mat-accordion>\n\n      <div fxLayoutAlign=\"space-between center\">\n        <button *ngIf=\"isCurrentUser && !currentUser.admin\" mat-raised-button color=\"primary\"\n          (click)=\"editProfil(displayedUser)\">Editer mon profil</button>\n        <!-- <button *ngIf=\"isCurrentUser\" mat-raised-button color=\"primary\" routerLink=\"/accueil/edit-profile/:\">Editer mon profil</button> -->\n        <button *ngIf=\"currentUser.admin\" mat-raised-button color=\"primary\" (click)=\"editProfil(displayedUser)\">Editer\n          le profil</button>\n        <!-- <button *ngIf=\"currentUser.admin\" mat-raised-button color=\"primary\" routerLink=\"/accueil/edit-profile\">Editer le profil</button> -->\n        <button *ngIf=\"!isCurrentUser\" mat-raised-button color=\"primary\" (click)=sendInvitation()>Envoyer une\n          invitation</button>\n      </div>\n      <p *ngIf=\"message\">{{ message }}</p>\n      <!-- <p *ngIf=\"errorMessage\">{{ errorMessage }}</p> -->\n    </mat-card-content>\n\n  </mat-card>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-interface/user-interface.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-interface/user-interface.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-topbar></app-topbar>\n\n<!-- <div>\n    <mat-form-field>\n      <input matInput [(ngModel)]=\"name\" placeholder=\"What's your favorite color?\">\n    </mat-form-field>\n  </div> -->\n  <!-- <div>\n    <button mat-raised-button (click)=\"openDialog()\">Pick one</button>\n  </div> -->\n  <!-- <h4 *ngIf=\"color\">\n    You selected: <p style=\"font-weight: bold\">{{color}}</p>\n  </h4> -->\n\n\n");

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
    constructor(userService) {
        this.userService = userService;
    }
    unloadHandler(event) {
        this.userService.logout(this.userService.currentUser);
    }
    beforeUnloadHander(event) {
        this.userService.logout(this.userService.currentUser);
    }
};
AppComponent.ctorParameters = () => [
    { type: _shared_service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:unload', ['$event'])
], AppComponent.prototype, "unloadHandler", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:beforeunload', ['$event'])
], AppComponent.prototype, "beforeUnloadHander", null);
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
/* harmony import */ var _shared_service_user_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/service/user.service */ "./src/app/shared/service/user.service.ts");
/* harmony import */ var _shared_service_websocket_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/service/websocket.service */ "./src/app/shared/service/websocket.service.ts");
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
// import { ChatComponent } from './user-interface/chat/chat.component';
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
            // ChatComponent,
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
            _shared_service_user_service__WEBPACK_IMPORTED_MODULE_12__["UserService"],
            _shared_service_websocket_service__WEBPACK_IMPORTED_MODULE_13__["WebsocketService"],
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
/* harmony import */ var _user_interface_friend_friend_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-interface/friend/friend.component */ "./src/app/user-interface/friend/friend.component.ts");
/* harmony import */ var _user_interface_chat_chat_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user-interface/chat/chat.component */ "./src/app/user-interface/chat/chat.component.ts");
/* harmony import */ var _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/guards/auth.guard */ "./src/app/shared/guards/auth.guard.ts");

// INTERFACE














const ROUTING = [ //on utilise l'interface Route native d'Angular (https://angular.io/api/router/Route#description). Route[] veux dire un tableau de d'objet respectant l'interface Route
  { path : '', component: _authentification_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_1__["HomepageComponent"] },
  { path: 'login', component: _authentification_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]},
  { path: 'register', component: _authentification_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"]},
  { path: 'accueil', canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]], component: _user_interface_user_interface_component__WEBPACK_IMPORTED_MODULE_4__["UserInterfaceComponent"], children: [
    { path: 'post/:id', canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]], component: _user_interface_post_post_component__WEBPACK_IMPORTED_MODULE_5__["PostComponent"]},
    { path: 'profile/:id', canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]], component: _user_interface_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"]},
    { path: 'edit-profile/:id', canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]], component: _user_interface_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_7__["EditProfileComponent"]},
    { path: 'friends', canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]], component: _user_interface_friend_friend_component__WEBPACK_IMPORTED_MODULE_8__["FriendComponent"]},
    { path: 'chat/:id', canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]], component: _user_interface_chat_chat_component__WEBPACK_IMPORTED_MODULE_9__["ChatComponent"]}
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



// SERVICE
// import { WebsocketService } from '../shared/service/websocket.service';
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
        ],
        providers: [
        // WebsocketService
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
/* harmony import */ var src_app_shared_service_websocket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/service/websocket.service */ "./src/app/shared/service/websocket.service.ts");




// SERVICE


let LoginComponent = class LoginComponent {
    constructor(fb, router, userService, websocketService) {
        this.fb = fb;
        this.router = router;
        this.userService = userService;
        this.websocketService = websocketService;
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
        this.userService.login(this.loginForm.value).subscribe(() => {
            this.userService.getCurrentUser().subscribe(currentUser => {
                // Récupération current user
                this.currentUser = currentUser;
                // Ouverture Websocket
                this.websocketService.startWS();
                // Enregistrement du user connecté (WS)
                this.websocketService.emitNewUserWS(this.currentUser);
                // Redirection page d'accueil
                this.router.navigate(['accueil', 'post', this.currentUser._id]);
            });
        }, err => {
            if (err.status === 401) {
                this.errorMessage = 'Ce compte n\'existe pas. Veuillez créer un nouveau compte';
            }
            else {
                this.errorMessage = 'Une erreur c\'est produite. impossible d\'accéder à votre compte';
            }
        });
        this.userService.getAllUsers().subscribe(allUsersArray => {
            this.allUsersArray = allUsersArray;
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_shared_service_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: src_app_shared_service_websocket_service__WEBPACK_IMPORTED_MODULE_5__["WebsocketService"] }
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
    // public errorMessage: string;
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
        if (this.registerForm.valid) {
            this.userService.register(this.registerForm.value).subscribe((user) => {
                this.message = 'Votre compte vient d\'être crée. Vous pouvez maintenant vous connecter.';
                this.router.navigate(['/']);
            }, err => {
                console.log('Erreur inscription', err);
                if (err.status === 401) {
                    // this.errorMessage = 'Un compte avec cette adresse mail existe déjà.';
                    this.message = 'Un compte avec cette adresse mail existe déjà.';
                }
                else {
                    // this.errorMessage = 'Une erreur c\'est produite. impossible de créer un compte.';
                    this.message = 'Une erreur c\'est produite. impossible de créer un compte.';
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
/* harmony import */ var _service_websocket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/websocket.service */ "./src/app/shared/service/websocket.service.ts");






let HeaderComponent = class HeaderComponent {
    constructor(router, userService, postService, websocketService) {
        this.router = router;
        this.userService = userService;
        this.postService = postService;
        this.websocketService = websocketService;
    }
    ngOnInit() {
        // On subscribe au behaviour subject jwtToken cree dans le service UserService de facon à le mettre a jour dans la variable jwtToken du component à chaque modification
        this.sub1 = this.userService.jwtToken.subscribe((jwtToken) => {
            this.jwtToken = jwtToken;
            this.sub2 = this.userService.currentUser.subscribe(currentUser => {
                this.currentUser = currentUser;
            });
        });
    }
    getPostUser() {
        if (this.currentUser === null) {
            this.router.navigate(['/']);
        }
        else {
            this.postService.postRoute(this.currentUser._id);
        }
    }
    logout() {
        // deconnection du reseau
        this.userService.logout(this.currentUser);
    }
    ngOnDestroy() {
        // on coupe la subscription lors de la destruction du component
        if (this.sub1) {
            this.sub1.unsubscribe();
        }
        if (this.sub2) {
            this.sub2.unsubscribe();
        }
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _service_post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"] },
    { type: _service_websocket_service__WEBPACK_IMPORTED_MODULE_5__["WebsocketService"] }
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
/* harmony default export */ __webpack_exports__["default"] = ("mat-sidenav-container {\r\n  background: transparent;\r\n  height: 100vh;\r\n}\r\n\r\n.topbar {\r\n  height: 55px;\r\n}\r\n\r\n.burger:hover,\r\nh3:hover {\r\n  color: #fff;\r\n}\r\n\r\ndiv.chat-container {\r\n  position: relative;\r\n}\r\n\r\nbutton.chat-button {\r\n  bottom: 0;\r\n  position: fixed;\r\n  right:0 ;\r\n}\r\n\r\nh2 {\r\n  padding: 0 16px !important;\r\n}\r\n\r\n.mat-card-subtitle {\r\n  margin-bottom: 0;\r\n}\r\n\r\n@media screen and (max-width: 599px) {\r\n\r\n.topbar {\r\n  padding-top: 2%;\r\n  height: auto;\r\n}\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdG9wYmFyL3RvcGJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsZUFBZTtFQUNmLFFBQVE7QUFDVjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0FBQ2Q7QUFDQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3RvcGJhci90b3BiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLnRvcGJhciB7XHJcbiAgaGVpZ2h0OiA1NXB4O1xyXG59XHJcblxyXG4uYnVyZ2VyOmhvdmVyLFxyXG5oMzpob3ZlciB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbmRpdi5jaGF0LWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5idXR0b24uY2hhdC1idXR0b24ge1xyXG4gIGJvdHRvbTogMDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgcmlnaHQ6MCA7XHJcbn1cclxuXHJcbmgyIHtcclxuICBwYWRkaW5nOiAwIDE2cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1hdC1jYXJkLXN1YnRpdGxlIHtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTlweCkge1xyXG5cclxuLnRvcGJhciB7XHJcbiAgcGFkZGluZy10b3A6IDIlO1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG59XHJcbiJdfQ== */");

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
/* harmony import */ var _service_websocket_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../service/websocket.service */ "./src/app/shared/service/websocket.service.ts");
/* harmony import */ var _user_interface_modal_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../user-interface/modal/modal.component */ "./src/app/user-interface/modal/modal.component.ts");
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../pipes/filter.pipe */ "./src/app/shared/pipes/filter.pipe.ts");











let TopbarComponent = class TopbarComponent {
    constructor(router, userService, postService, fb, websocketService, dialog) {
        this.router = router;
        this.userService = userService;
        this.postService = postService;
        this.fb = fb;
        this.websocketService = websocketService;
        this.dialog = dialog;
        this.allUsersArrayNames = [];
        this.friendsConnected = [];
        this.backgroundColor = '#00ff9b';
    }
    ngOnInit() {
        this.sub1 = this.userService.getAllUsers().subscribe(allUsersArray => {
            this.allUsersArray = allUsersArray;
            this.sub2 = this.userService.getCurrentUser().subscribe(currentUser => {
                this.currentUser = currentUser;
                if (this.currentUser && this.currentUser.admin) {
                    this.backgroundColor = '#D91C5C';
                }
                this.sub3 = this.websocketService.onUsersConnectedArray().subscribe(data => {
                    this.usersConnectedArrayWS = data;
                    this.friendsConnected = [];
                    if (this.usersConnectedArrayWS && this.currentUser) {
                        this.usersConnectedArrayWS.forEach(user => {
                            if (user && user.friends.includes(this.currentUser._id)) {
                                this.friendsConnected.push(user);
                            }
                        });
                    }
                });
            });
            if (this.allUsersArray) {
                this.allUsersArray.forEach(elmt => {
                    if (this.allUsersArrayNames.indexOf(elmt) === -1) {
                        this.allUsersArrayNames.push({
                            pseudo: elmt.pseudo.toLowerCase(),
                            _id: elmt._id
                        });
                    }
                });
            }
        });
        // Moteur de recherche Users
        this.searchForm = this.fb.group({
            search: [''],
        });
        this.filterAllUsers = this.searchForm.get('search').valueChanges.pipe(
        // startWith(null),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(data => {
            if (!data) {
                return;
            }
            else {
                return this.allUsersArrayNames.filter(user => {
                    return user.pseudo.startsWith(data.toLowerCase());
                });
            }
        }));
    }
    getPostUser() {
        this.userId = this.searchForm.value.search;
        this.searchForm.reset();
        this.postService.postRoute(this.userId);
    }
    getPostCurrentUser() {
        this.postService.postRoute(this.currentUser._id);
    }
    getCurrentProfileUser() {
        this.userService.getProfile(this.currentUser._id);
    }
    // Messagerie instantanée
    openDialog(user) {
        console.log('TCL: TopbarComponent -> user', user);
        const dialogRef = this.dialog.open(_user_interface_modal_modal_component__WEBPACK_IMPORTED_MODULE_9__["ModalComponent"], {
            width: '80%',
            data: user
        });
        dialogRef.afterClosed().subscribe(res => {
        });
    }
    ngOnDestroy() {
        if (this.sub1) {
            this.sub1.unsubscribe();
        }
        if (this.sub2) {
            this.sub2.unsubscribe();
        }
        if (this.sub3) {
            this.sub3.unsubscribe();
        }
    }
};
TopbarComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _service_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: _service_post_service__WEBPACK_IMPORTED_MODULE_7__["PostService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _service_websocket_service__WEBPACK_IMPORTED_MODULE_8__["WebsocketService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
];
TopbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-topbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./topbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/topbar/topbar.component.html")).default,
        providers: [_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_10__["FilterPipe"]],
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
    _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"]
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

/***/ "./src/app/shared/service/friend.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/service/friend.service.ts ***!
  \**************************************************/
/*! exports provided: FriendService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendService", function() { return FriendService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_shared_service_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/service/user.service */ "./src/app/shared/service/user.service.ts");






let FriendService = class FriendService {
    constructor(http, router, userService) {
        this.http = http;
        this.router = router;
        this.userService = userService;
    }
    sendInvitation(friendUserId, currentUserId) {
        return this.http.post('request/friend/request', {
            ['friendUserId']: friendUserId,
            ['currentUserId']: currentUserId
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((data) => {
            if (data !== 1 && data !== 2) {
                this.userService.currentUser.next(data.currentUserUpdated);
                return data.currentUserUpdated;
            }
        }));
    }
    acceptInvitation(friendUserId, currentUserId) {
        return this.http.put('request/friend/accept-invitation', {
            ['friendUserId']: friendUserId,
            ['currentUserId']: currentUserId
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((data) => {
            this.userService.currentUser.next(data.currentUserUpdated);
            return data.currentUserUpdated;
        }));
    }
    deleteFriend(friendId, currentUserId) {
        return this.http.put('/request/friend/delete', { friendId, currentUserId }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((data) => {
            this.userService.currentUser.next(data.currentUserUpdated);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => {
            return this.userService.currentUser;
        }));
    }
    deleteInvitation(invitationId, currentUserId) {
        return this.http.put('/request/friend/delete-invitation', { invitationId, currentUserId }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((data) => {
            this.userService.currentUser.next(data.currentUserUpdated);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => {
            return this.userService.currentUser;
        }));
    }
};
FriendService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_shared_service_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }
];
FriendService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FriendService);



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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let PostService = class PostService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        // CREATION BEHAVIOUR SUBJECT pour la liste de article
        this.postList = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
    }
    createPost(newPost) {
        return this.http.post('/request/post/create', newPost).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((postListUpdated) => {
            this.postList.next(postListUpdated);
        }));
    }
    createComment(newComment) {
        return this.http.post('/request/post/comment/create', newComment).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((postListUpdated) => {
            this.postList.next(postListUpdated);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(() => {
            return this.postList;
        }));
    }
    postRoute(userId) {
        this.router.navigate(['accueil', 'post', userId]);
    }
    getPost(userId) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('userId', userId);
        return this.http.get('/request/post/get', { params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((postListUpdated) => {
            this.postList.next(postListUpdated);
        }, Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(() => {
            return this.postList;
        })));
    }
    deletePost(userId, postId) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('userId', userId)
            .set('postId', postId);
        return this.http.delete('/request/post/delete', { params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((postListUpdated) => {
            this.postList.next(postListUpdated);
        }));
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
/* harmony import */ var _websocket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./websocket.service */ "./src/app/shared/service/websocket.service.ts");






// SERVICES

let UserService = class UserService {
    // CONSTRUCTOR
    constructor(http, router, websocketService) {
        this.http = http;
        this.router = router;
        this.websocketService = websocketService;
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
        this.getAllUsers();
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
        }));
    }
    // GET CURRENT USER
    getCurrentUser() {
        if (this.currentUser.value) {
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
        if (this.allUsersArray.value) {
            return this.allUsersArray;
        }
        else {
            return this.http.get('/request/user/all').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((allUsersArray) => {
                this.allUsersArray.next(allUsersArray);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(() => {
                return this.allUsersArray;
            }));
        }
    }
    // GET Profil d'un user (on va sur la page de profil avec l'ID du user)
    getProfile(userID) {
        console.log('TCL: getProfil -> userID', userID);
        this.router.navigate(['accueil', 'profile', userID]);
    }
    // EDITION Profil
    editProfile(user) {
        return this.http.post('/request/editprofile', user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((response) => {
            if (response.updatedUser.value._id === this.currentUser.value._id) {
                this.currentUser.next(response.updatedUser.value);
                this.allUsersArray.next(response.updatedAllUserArray);
            }
            else {
                this.allUsersArray.next(response.updatedAllUserArray);
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(() => {
            return this.currentUser;
        }));
    }
    // DECONNEXION (suppression du token)
    resetToken() {
        // reset du behaviour subject JwtToken dans userService avec next()
        this.jwtToken.next({
            isLogged: false,
            token: null
        });
        // suppression du token du localStorage
        localStorage.removeItem('jwt');
    }
    logout(user) {
        // reset du token
        this.resetToken();
        // deconnection websocket
        this.websocketService.emitUserDeconnection(user);
        // remise a zero du current user
        this.currentUser.next(null);
        // remise a zero du AllUser
        this.allUsersArray.next(null);
        // redirection vers la page de connexion
        this.router.navigate(['/']);
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _websocket_service__WEBPACK_IMPORTED_MODULE_6__["WebsocketService"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ "./src/app/shared/service/websocket.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/service/websocket.service.ts ***!
  \*****************************************************/
/*! exports provided: WebsocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsocketService", function() { return WebsocketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let WebsocketService = class WebsocketService {
    constructor() { }
    startWS() {
        this.socketClient = socket_io_client__WEBPACK_IMPORTED_MODULE_2__();
        // this.socketClient = io('http://localhost:3000');
    }
    // Connection du current user
    emitNewUserWS(user) {
        this.socketClient.emit('new User', user);
    }
    // Deconnection du current user
    emitUserDeconnection(user) {
        this.socketClient.emit('user deconnection', user);
    }
    // Mise à jour du tableau des users connectes
    onUsersConnectedArray() {
        this.usersConnectedArray = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
            this.socketClient.on('all users connected', (data) => {
                observer.next(data);
            });
        });
        return this.usersConnectedArray;
    }
    // Rejoindre une conversation
    joinRoom(data) {
        this.socketClient.emit('join', data);
    }
    newUserJoined() {
        const observable = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
            this.socketClient.on('new user joined', (data) => {
                observer.next(data);
            });
            return () => {
            };
        });
        return observable;
    }
    // Quitter une conversation
    leaveRoom(data) {
        this.socketClient.emit('leave', data);
    }
    userLeftRoom() {
        const observable = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
            this.socketClient.on('user left room', (data) => {
                observer.next(data);
            });
            return () => {
            };
        });
        return observable;
    }
    sendMessage(data) {
        this.socketClient.emit('message', data);
    }
    newMessageReceived() {
        const observable = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
            this.socketClient.on('new message', (data) => {
                observer.next(data);
            });
            return () => {
            };
        });
        return observable;
    }
};
WebsocketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], WebsocketService);



/***/ }),

/***/ "./src/app/user-interface/chat/chat.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/user-interface/chat/chat.component.ts ***!
  \*******************************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_service_websocket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/service/websocket.service */ "./src/app/shared/service/websocket.service.ts");
/* harmony import */ var _shared_service_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/service/user.service */ "./src/app/shared/service/user.service.ts");





let ChatComponent = class ChatComponent {
    constructor(activatedRoute, userService, websocketService) {
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.websocketService = websocketService;
        this.messagesArray = [];
        this.sub3 = this.websocketService.newUserJoined().subscribe(data => {
            this.messagesArray.push(data);
        });
        this.sub4 = this.websocketService.userLeftRoom().subscribe(data => {
            this.messagesArray.push(data);
        });
        this.sub5 = this.websocketService.newMessageReceived().subscribe(data => {
            this.messagesArray.push(data);
        });
    }
    ngOnInit() {
        this.sub1 = this.userService.currentUser.subscribe(currentUser => {
            this.currentUser = currentUser;
        });
        // Récupération du friendUserId dans l'url
        this.sub2 = this.activatedRoute.paramMap.subscribe((paramMap) => {
            this.friendUserId = paramMap.get('id');
        });
        // Rejoindre la room des la ngOnInit
        this.joinRoom();
    }
    joinRoom() {
        this.websocketService.joinRoom({
            user: {
                _id: this.currentUser._id,
                pseudo: this.currentUser.pseudo
            },
            room: 'titi'
        });
    }
    leaveRoom() {
        this.websocketService.leaveRoom({
            user: {
                _id: this.currentUser._id,
                pseudo: this.currentUser.pseudo
            },
            room: 'titi'
        });
    }
    sendMessage() {
        this.websocketService.sendMessage({
            user: {
                _id: this.currentUser._id,
                pseudo: this.currentUser.pseudo
            },
            room: 'titi',
            message: this.messageText
        });
        this.messageText = '';
    }
    ngOnDestroy() {
        this.leaveRoom();
        if (this.sub1) {
            this.sub1.unsubscribe();
        }
        if (this.sub2) {
            this.sub2.unsubscribe();
        }
        if (this.sub3) {
            this.sub3.unsubscribe();
        }
        if (this.sub4) {
            this.sub4.unsubscribe();
        }
        if (this.sub5) {
            this.sub5.unsubscribe();
        }
    }
};
ChatComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _shared_service_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _shared_service_websocket_service__WEBPACK_IMPORTED_MODULE_3__["WebsocketService"] }
];
ChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chat-component',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chat.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-interface/chat/chat.component.html")).default,
    })
], ChatComponent);



/***/ }),

/***/ "./src/app/user-interface/friend/friend.component.css":
/*!************************************************************!*\
  !*** ./src/app/user-interface/friend/friend.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-card {\r\n  margin-top: 3%;\r\n  padding : 5px;\r\n}\r\n\r\n.mat-raised-button.mat-accent .block {\r\n  color :white;\r\n}\r\n\r\nh2 {\r\n  background-color: rgba(255, 255, 255, 0.6);\r\n  border: solid 2px #432C85;\r\n  border-radius: 5px;\r\n  -webkit-border-radius: 5px;\r\n  -moz-border-radius: 5px;\r\n  -ms-border-radius: 5px;\r\n  -o-border-radius: 5px;\r\n  /* color: #fff; */\r\n  font-weight: bold;\r\n  padding: 10px;\r\n  /* text-align: center; */\r\n  text-transform: uppercase;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1pbnRlcmZhY2UvZnJpZW5kL2ZyaWVuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDBDQUEwQztFQUMxQyx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYix3QkFBd0I7RUFDeEIseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvdXNlci1pbnRlcmZhY2UvZnJpZW5kL2ZyaWVuZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmQge1xyXG4gIG1hcmdpbi10b3A6IDMlO1xyXG4gIHBhZGRpbmcgOiA1cHg7XHJcbn1cclxuXHJcbi5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtYWNjZW50IC5ibG9jayB7XHJcbiAgY29sb3IgOndoaXRlO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xyXG4gIGJvcmRlcjogc29saWQgMnB4ICM0MzJDODU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIC1tcy1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgLW8tYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIC8qIGNvbG9yOiAjZmZmOyAqL1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/user-interface/friend/friend.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/user-interface/friend/friend.component.ts ***!
  \***********************************************************/
/*! exports provided: FriendComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendComponent", function() { return FriendComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/service/user.service */ "./src/app/shared/service/user.service.ts");
/* harmony import */ var src_app_shared_service_friend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/service/friend.service */ "./src/app/shared/service/friend.service.ts");




let FriendComponent = class FriendComponent {
    constructor(userService, friendService) {
        this.userService = userService;
        this.friendService = friendService;
        this.requestsArray = [];
        this.invitationsArray = [];
        this.friendsArray = [];
    }
    ngOnInit() {
        this.sub1 = this.userService.currentUser.subscribe(currentUser => {
            this.currentUser = currentUser;
            this.sub2 = this.userService.getAllUsers().subscribe(allUsersArray => {
                this.allUsersArray = allUsersArray;
                this.getFriends();
                this.getRequests();
                this.getInvitations();
            });
        });
    }
    getFriends() {
        this.sub3 = this.userService.currentUser.subscribe(currentUser => {
            this.currentUser = currentUser;
            if (this.currentUser && this.currentUser.friends) {
                this.currentUser.friends.forEach(elmt1 => {
                    this.allUsersArray.forEach(elmt2 => {
                        if (elmt1 === elmt2._id && this.friendsArray.indexOf(elmt2) === -1) {
                            this.friendsArray.push(elmt2);
                        }
                    });
                });
            }
        });
    }
    getRequests() {
        this.sub4 = this.userService.currentUser.subscribe(currentUser => {
            this.currentUser = currentUser;
            if (this.currentUser && this.currentUser.requests) {
                this.currentUser.requests.forEach(elmt1 => {
                    this.allUsersArray.forEach(elmt2 => {
                        if (elmt1 === elmt2._id && this.requestsArray.indexOf(elmt2) === -1) {
                            this.requestsArray.push(elmt2);
                        }
                    });
                });
            }
        });
    }
    getInvitations() {
        this.sub5 = this.userService.currentUser.subscribe(currentUser => {
            this.currentUser = currentUser;
            if (this.currentUser && this.currentUser.invitations) {
                this.currentUser.invitations.forEach(elmt1 => {
                    this.allUsersArray.forEach(elmt2 => {
                        if (elmt1 === elmt2._id && this.invitationsArray.indexOf(elmt2) === -1) {
                            this.invitationsArray.push(elmt2);
                        }
                    });
                });
            }
        });
    }
    acceptInvitation(friendUserId, currentUserId) {
        this.sub6 = this.friendService.acceptInvitation(friendUserId, currentUserId).subscribe(() => {
            this.invitationsArray.forEach(elmt => {
                if (elmt._id === friendUserId) {
                    const index1 = this.invitationsArray.indexOf(elmt);
                    this.invitationsArray.splice(index1, 1);
                    const index2 = this.invitationsArray.indexOf(elmt);
                    this.requestsArray.splice(index2, 1);
                    this.friendsArray.push(elmt);
                }
            });
        });
    }
    deleteFriend(friendId, currentUserId) {
        this.sub7 = this.friendService.deleteFriend(friendId, currentUserId).subscribe(() => {
            this.friendsArray.forEach(elmt => {
                if (elmt._id === friendId) {
                    const index = this.friendsArray.indexOf(elmt);
                    this.friendsArray.splice(index, 1);
                }
            });
        });
    }
    deleteInvitation(invitationId, currentUserId) {
        this.sub8 = this.friendService.deleteInvitation(invitationId, currentUserId).subscribe(() => {
            this.invitationsArray.forEach(elmt => {
                if (elmt._id === invitationId) {
                    const index = this.invitationsArray.indexOf(elmt);
                    this.invitationsArray.splice(index, 1);
                }
            });
        });
    }
    ngOnDestroy() {
        if (this.sub1) {
            this.sub1.unsubscribe();
        }
        if (this.sub2) {
            this.sub2.unsubscribe();
        }
        if (this.sub3) {
            this.sub3.unsubscribe();
        }
        if (this.sub4) {
            this.sub4.unsubscribe();
        }
        if (this.sub5) {
            this.sub5.unsubscribe();
        }
        if (this.sub6) {
            this.sub6.unsubscribe();
        }
        if (this.sub7) {
            this.sub7.unsubscribe();
        }
        if (this.sub8) {
            this.sub8.unsubscribe();
        }
    }
};
FriendComponent.ctorParameters = () => [
    { type: src_app_shared_service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: src_app_shared_service_friend_service__WEBPACK_IMPORTED_MODULE_3__["FriendService"] }
];
FriendComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-friend',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./friend.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-interface/friend/friend.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./friend.component.css */ "./src/app/user-interface/friend/friend.component.css")).default]
    })
], FriendComponent);



/***/ }),

/***/ "./src/app/user-interface/modal/modal.component.css":
/*!**********************************************************!*\
  !*** ./src/app/user-interface/modal/modal.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItaW50ZXJmYWNlL21vZGFsL21vZGFsLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/user-interface/modal/modal.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/user-interface/modal/modal.component.ts ***!
  \*********************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");




let ModalComponent = class ModalComponent {
    constructor(dialogRef, router, data) {
        this.dialogRef = dialogRef;
        this.router = router;
        this.data = data;
    }
    ngOnInit() { }
    onNoClick() {
        this.dialogRef.close();
    }
    onOkClick(userId) {
        this.router.navigate(['accueil', 'chat', userId]);
    }
};
ModalComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] }
];
ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-interface/modal/modal.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./modal.component.css */ "./src/app/user-interface/modal/modal.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
], ModalComponent);



/***/ }),

/***/ "./src/app/user-interface/modal/modal.module.ts":
/*!******************************************************!*\
  !*** ./src/app/user-interface/modal/modal.module.ts ***!
  \******************************************************/
/*! exports provided: ModalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalModule", function() { return ModalModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_layout_layout_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/layout/layout.module */ "./src/app/shared/layout/layout.module.ts");



// import { ModalComponent } from './modal.component';
// import {
//     MatDialogModule, MatFormFieldModule, MatButtonModule, MatInputModule
// } from '@angular/material';
let ModalModule = class ModalModule {
};
ModalModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_shared_layout_layout_module__WEBPACK_IMPORTED_MODULE_2__["LayoutModule"]],
        exports: [_shared_layout_layout_module__WEBPACK_IMPORTED_MODULE_2__["LayoutModule"]],
    })
], ModalModule);



/***/ }),

/***/ "./src/app/user-interface/post/post.component.css":
/*!********************************************************!*\
  !*** ./src/app/user-interface/post/post.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-login,\r\nmat-card {\r\n  margin-top: 5%;\r\n  margin-bottom: 5%;\r\n}\r\n\r\nmat-card.comment-card {\r\n  width: 93% !important;\r\n}\r\n\r\n.comment-card mat-expansion-panel-header {\r\n  background: rgb(0, 255, 127) !important;\r\n  color: white !important;\r\n}\r\n\r\ndiv.cancel {\r\n  /* width: 100%; */\r\n  text-align: right !important;\r\n}\r\n\r\n.comment-card .mat-card-title {\r\n  font-size: 16px !important;\r\n}\r\n\r\n.comment-input {\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1pbnRlcmZhY2UvcG9zdC9wb3N0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHVDQUF1QztFQUN2Qyx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvdXNlci1pbnRlcmZhY2UvcG9zdC9wb3N0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1sb2dpbixcclxubWF0LWNhcmQge1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG4gIG1hcmdpbi1ib3R0b206IDUlO1xyXG59XHJcblxyXG5tYXQtY2FyZC5jb21tZW50LWNhcmQge1xyXG4gIHdpZHRoOiA5MyUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNvbW1lbnQtY2FyZCBtYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciB7XHJcbiAgYmFja2dyb3VuZDogcmdiKDAsIDI1NSwgMTI3KSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5kaXYuY2FuY2VsIHtcclxuICAvKiB3aWR0aDogMTAwJTsgKi9cclxuICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY29tbWVudC1jYXJkIC5tYXQtY2FyZC10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jb21tZW50LWlucHV0IHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */");

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
        this.commentForm = this.fb.group({
            message: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
        // RECUPERATION ID
        this.sub1 = this.userService.currentUser.subscribe(currentUser => {
            this.currentUser = currentUser;
            this.sub2 = this.activatedRoute.paramMap.subscribe((paramMap) => {
                this.userId = paramMap.get('id');
                // Le current User est-il le rédacteur des posts?
                this.sub3 = this.userService.getAllUsers().subscribe(allUsersArray => {
                    this.allUsersArray = allUsersArray;
                    if (this.allUsersArray) {
                        this.allUsersArray.forEach(elmt => {
                            if (elmt._id === this.userId) {
                                if (this.currentUser && elmt._id === this.currentUser._id) {
                                    this.isCurrentUser = true;
                                    this.displayedUser = elmt;
                                    this.areFriends = this.displayedUser.friends.includes(this.currentUser._id);
                                }
                                else {
                                    if (this.currentUser) {
                                        this.isCurrentUser = false;
                                        this.displayedUser = elmt;
                                        this.areFriends = this.displayedUser.friends.includes(this.currentUser._id);
                                    }
                                }
                                // Récupération des posts en bdd
                                this.sub4 = this.postService.getPost(this.userId).subscribe((postArray) => {
                                    this.postArray = postArray;
                                });
                            }
                        });
                    }
                });
            });
        });
        // Mise a jour du behaviour subject postList
        this.sub5 = this.postService.postList.subscribe(postListUpdated => {
            this.postArray = postListUpdated;
        });
    }
    createPost() {
        this.date = new Date();
        this.newPost = {
            // tslint:disable-next-line: no-string-literal
            user_id: this.currentUser['_id'],
            message: this.postForm.value.message,
            date: this.date
        };
        this.sub6 = this.postService.createPost(this.newPost).subscribe((postListUpdated) => {
            this.postForm.reset();
        }, err => {
            console.log('impossible de crée un post', err);
        });
    }
    createComment(post) {
        this.date = new Date();
        this.newComment = {
            postId: post._id,
            userId: this.currentUser._id,
            pseudo: this.currentUser.pseudo,
            date: this.date,
            comment: this.commentForm.value.message
        };
        this.sub7 = this.postService.createComment(this.newComment).subscribe((postListUpdated) => {
            this.postArray = postListUpdated;
            this.commentForm.reset();
        }, err => {
            console.log('impossible de crée un commentaire', err);
        });
    }
    getProfileUser() {
        this.userService.getProfile(this.displayedUser._id);
    }
    deletePost(userId, postId) {
        this.sub8 = this.postService.deletePost(userId, postId).subscribe((postListUpdated) => {
            this.postArray = postListUpdated;
        });
    }
    ngOnDestroy() {
        if (this.sub1) {
            this.sub1.unsubscribe();
        }
        if (this.sub2) {
            this.sub2.unsubscribe();
        }
        if (this.sub3) {
            this.sub3.unsubscribe();
        }
        if (this.sub4) {
            this.sub4.unsubscribe();
        }
        if (this.sub5) {
            this.sub5.unsubscribe();
        }
        if (this.sub6) {
            this.sub6.unsubscribe();
        }
        if (this.sub7) {
            this.sub7.unsubscribe();
        }
        if (this.sub8) {
            this.sub8.unsubscribe();
        }
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
/* harmony default export */ __webpack_exports__["default"] = (".edit-form-container,\r\n.mat-card {\r\n  width: 100% !important;\r\n}\r\n\r\n.edit-profile-card {\r\n  margin-top: 5%;\r\n}\r\n\r\nh1 {\r\n  /* color: #fff; */\r\n  text-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1pbnRlcmZhY2UvcHJvZmlsZS9lZGl0LXByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3VzZXItaW50ZXJmYWNlL3Byb2ZpbGUvZWRpdC1wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZWRpdC1mb3JtLWNvbnRhaW5lcixcclxuLm1hdC1jYXJkIHtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZWRpdC1wcm9maWxlLWNhcmQge1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgLyogY29sb3I6ICNmZmY7ICovXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiJdfQ== */");

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
    constructor(userService, fb, router, activatedRoute) {
        this.userService = userService;
        this.fb = fb;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.isSubmitted = false;
    }
    ngOnInit() {
        this.sub1 = this.userService.currentUser.subscribe(currentUser => {
            this.currentUser = currentUser;
        });
        this.sub2 = this.activatedRoute.paramMap.subscribe((paramMap) => {
            this.displayedUserId = paramMap.get('id');
            this.sub3 = this.userService.getAllUsers().subscribe((allUsersArray) => {
                this.allUsersArray = allUsersArray;
                if (this.allUsersArray) {
                    this.allUsersArray.forEach((elmt) => {
                        if (elmt._id === this.displayedUserId) {
                            this.displayedUser = elmt;
                            this.editProfileForm = this.fb.group({
                                name: [this.displayedUser.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]],
                                firstname: [this.displayedUser.firstname, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]],
                                pseudo: [this.displayedUser.pseudo, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]],
                                email: [this.displayedUser.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
                                birth: [this.displayedUser.birth, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
                                sexe: [this.displayedUser.sexe, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
                                grade: [this.displayedUser.grade, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
                            });
                        }
                    });
                }
            });
        });
    }
    submit() {
        this.isSubmitted = true;
        if (this.editProfileForm.valid) {
            this.editProfileForm.value._id = this.displayedUser._id;
            this.sub4 = this.userService.editProfile(this.editProfileForm.value).subscribe((user) => {
                this.router.navigate(['accueil', 'post', this.currentUser._id]);
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
    ngOnDestroy() {
        if (this.sub1) {
            this.sub1.unsubscribe();
        }
        if (this.sub2) {
            this.sub2.unsubscribe();
        }
        if (this.sub3) {
            this.sub3.unsubscribe();
        }
        if (this.sub4) {
            this.sub4.unsubscribe();
        }
    }
};
EditProfileComponent.ctorParameters = () => [
    { type: src_app_shared_service_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
EditProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-interface/profile/edit-profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-profile.component.css */ "./src/app/user-interface/profile/edit-profile.component.css")).default]
    })
], EditProfileComponent);

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


/***/ }),

/***/ "./src/app/user-interface/profile/profile.component.css":
/*!**************************************************************!*\
  !*** ./src/app/user-interface/profile/profile.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-expansion-panel,\r\nbutton {\r\n  margin-top: 10%;\r\n}\r\n\r\n.card-profile {\r\n  margin-top: 5% !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1pbnRlcmZhY2UvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL3VzZXItaW50ZXJmYWNlL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWV4cGFuc2lvbi1wYW5lbCxcclxuYnV0dG9uIHtcclxuICBtYXJnaW4tdG9wOiAxMCU7XHJcbn1cclxuXHJcbi5jYXJkLXByb2ZpbGUge1xyXG4gIG1hcmdpbi10b3A6IDUlICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */");

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
/* harmony import */ var src_app_shared_service_friend_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/service/friend.service */ "./src/app/shared/service/friend.service.ts");





// SERVICE


let ProfileComponent = class ProfileComponent {
    constructor(userService, friendService, fb, activatedRoute, router) {
        this.userService = userService;
        this.friendService = friendService;
        this.fb = fb;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.isCurrentUser = false;
        this.isSubmitted = false;
    }
    ngOnInit() {
        this.sub1 = this.userService.currentUser.subscribe(currentUser => {
            this.currentUser = currentUser;
        });
        this.sub2 = this.activatedRoute.paramMap.subscribe((paramMap) => {
            this.userId = paramMap.get('id');
            this.sub3 = this.userService.getAllUsers().subscribe(allUsersArray => {
                this.allUsersArray = allUsersArray;
                if (this.allUsersArray && this.currentUser) {
                    this.allUsersArray.forEach(elmt => {
                        if (elmt._id === this.userId) {
                            if (elmt._id === this.currentUser._id) {
                                this.isCurrentUser = true;
                            }
                            else {
                                this.isCurrentUser = false;
                            }
                            this.displayedUser = elmt;
                        }
                    });
                }
            });
        });
    }
    editProfil(displayedUser) {
        this.router.navigate(['accueil', 'edit-profile', displayedUser._id]);
    }
    sendInvitation() {
        this.sub4 = this.friendService.sendInvitation(this.displayedUser._id, this.currentUser._id).subscribe((data) => {
            if (data === 1) {
                this.message = `Vous êtes déjà ami avec ${this.displayedUser.pseudo}.`;
            }
            else {
                if (data === 2) {
                    this.message = `Vous avez déjà envoyé une invitation à ${this.displayedUser.pseudo}.`;
                }
                else {
                    this.message = `Votre invitation a été envoyé à ${this.displayedUser.pseudo}.`;
                }
            }
        }, err => {
            this.message = 'Impossible d\'envoyer votre invitation.';
            console.log('TCL: ProfileComponent -> sendInvitation -> err', err);
        });
    }
    ngOnDestroy() {
        if (this.sub1) {
            this.sub1.unsubscribe();
        }
        if (this.sub2) {
            this.sub2.unsubscribe();
        }
        if (this.sub3) {
            this.sub3.unsubscribe();
        }
        if (this.sub4) {
            this.sub4.unsubscribe();
        }
    }
};
ProfileComponent.ctorParameters = () => [
    { type: src_app_shared_service_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: src_app_shared_service_friend_service__WEBPACK_IMPORTED_MODULE_5__["FriendService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
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
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _shared_service_websocket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/service/websocket.service */ "./src/app/shared/service/websocket.service.ts");




let UserInterfaceComponent = class UserInterfaceComponent {
    constructor(websocketService, dialog) {
        this.websocketService = websocketService;
        this.dialog = dialog;
        this.sub1 = this.websocketService.onUsersConnectedArray().subscribe(data => {
            this.usersConnectedArrayWS = data;
            console.log('TCL: UserInterfaceComponent -> this.usersConnectedArrayWS', this.usersConnectedArrayWS);
            console.log('coucou UserInterfaceComponent');
        });
    }
    ngOnInit() { }
    ngOnDestroy() {
        if (this.sub1) {
            this.sub1.unsubscribe();
        }
    }
};
UserInterfaceComponent.ctorParameters = () => [
    { type: _shared_service_websocket_service__WEBPACK_IMPORTED_MODULE_3__["WebsocketService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
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
/* harmony import */ var _modal_modal_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal/modal.module */ "./src/app/user-interface/modal/modal.module.ts");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./post/post.component */ "./src/app/user-interface/post/post.component.ts");
/* harmony import */ var _user_interface_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-interface.component */ "./src/app/user-interface/user-interface.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/user-interface/profile/profile.component.ts");
/* harmony import */ var _profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./profile/edit-profile.component */ "./src/app/user-interface/profile/edit-profile.component.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/user-interface/chat/chat.component.ts");
/* harmony import */ var _shared_components_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/components/topbar/topbar.component */ "./src/app/shared/components/topbar/topbar.component.ts");
/* harmony import */ var _friend_friend_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./friend/friend.component */ "./src/app/user-interface/friend/friend.component.ts");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modal/modal.component */ "./src/app/user-interface/modal/modal.component.ts");
/* harmony import */ var _shared_service_post_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../shared/service/post.service */ "./src/app/shared/service/post.service.ts");
/* harmony import */ var _shared_service_friend_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../shared/service/friend.service */ "./src/app/shared/service/friend.service.ts");





// CUSTOM MODULES
 // module custom d'import de material, flex-layout, hammerjs, cdk

// CUSTOM COMPONENTS








// CUSTOM SERVICE


let UserInterfaceModule = class UserInterfaceModule {
};
UserInterfaceModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _post_post_component__WEBPACK_IMPORTED_MODULE_7__["PostComponent"],
            _user_interface_component__WEBPACK_IMPORTED_MODULE_8__["UserInterfaceComponent"],
            _profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_10__["EditProfileComponent"],
            _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"],
            _shared_components_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_12__["TopbarComponent"],
            _friend_friend_component__WEBPACK_IMPORTED_MODULE_13__["FriendComponent"],
            _chat_chat_component__WEBPACK_IMPORTED_MODULE_11__["ChatComponent"],
            _modal_modal_component__WEBPACK_IMPORTED_MODULE_14__["ModalComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _shared_layout_layout_module__WEBPACK_IMPORTED_MODULE_5__["LayoutModule"],
            _modal_modal_module__WEBPACK_IMPORTED_MODULE_6__["ModalModule"]
        ],
        providers: [
            _shared_service_post_service__WEBPACK_IMPORTED_MODULE_15__["PostService"],
            _shared_service_friend_service__WEBPACK_IMPORTED_MODULE_16__["FriendService"]
        ],
        entryComponents: [_modal_modal_component__WEBPACK_IMPORTED_MODULE_14__["ModalComponent"]] // Rend le composant modal disponible partout dasn le module UI
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


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map