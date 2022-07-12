"use strict";
(self["webpackChunkpatterns"] = self["webpackChunkpatterns"] || []).push([["main"],{

/***/ 5005:
/*!*******************************************!*\
  !*** ./src/patterns/app/app.component.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services */ 5469);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3338);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/menu */ 2796);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _components_core_app_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/core/app-bar.component */ 3270);







class AppComponent {
    constructor(themer) {
        this.themer = themer;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_0__.ThemeService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 1, consts: [[1, "mat-typography", "mat-app-background", "app-frame", 3, "ngClass"], ["mat-menu-item", "", "routerLink", "command"], [1, "app-container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "app-bar")(2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Command");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.themer.isLight ? "app-light" : "app-dark");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__.DefaultClassDirective, _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__.MatMenuItem, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _components_core_app_bar_component__WEBPACK_IMPORTED_MODULE_1__.AppBarComponent], encapsulation: 2 });


/***/ }),

/***/ 4407:
/*!****************************************!*\
  !*** ./src/patterns/app/app.module.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./material.module */ 8518);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5005);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes */ 6018);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _components_core_app_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/core/app-bar.component */ 3270);
/* harmony import */ var _components_core_pattern_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/core/pattern-header.component */ 9137);
/* harmony import */ var _components_core_pattern_link_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/core/pattern-link.component */ 403);
/* harmony import */ var _components_core_theme_toggle_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/core/theme-toggle.component */ 8431);
/* harmony import */ var _dialogs_confirm_confirm_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dialogs/confirm/confirm.dialog */ 2418);
/* harmony import */ var _routes_home_home_route__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routes/home/home.route */ 7027);
/* harmony import */ var _routes_command_command_route__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./routes/command/command.route */ 2282);
















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
        _material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule.forRoot(_routes__WEBPACK_IMPORTED_MODULE_2__.Routes)] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _components_core_app_bar_component__WEBPACK_IMPORTED_MODULE_3__.AppBarComponent, _components_core_pattern_header_component__WEBPACK_IMPORTED_MODULE_4__.PatternHeaderComponent, _components_core_pattern_link_component__WEBPACK_IMPORTED_MODULE_5__.PatternLinkComponent, _components_core_theme_toggle_component__WEBPACK_IMPORTED_MODULE_6__.ThemeToggleComponent, _dialogs_confirm_confirm_dialog__WEBPACK_IMPORTED_MODULE_7__.ConfirmDialog, _routes_home_home_route__WEBPACK_IMPORTED_MODULE_8__.HomeRoute, _routes_command_command_route__WEBPACK_IMPORTED_MODULE_9__.CommandRoute], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
        _material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule] }); })();


/***/ }),

/***/ 3270:
/*!***************************************************************!*\
  !*** ./src/patterns/app/components/core/app-bar.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppBarComponent": () => (/* binding */ AppBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5434);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/menu */ 2796);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ 9946);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _theme_toggle_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme-toggle.component */ 8431);








const _c0 = ["*"];
class AppBarComponent {
    constructor() {
        this.color = 'default';
        this.header = 'Game Programming Patterns';
        this.headerLink = '/';
        this.menuIcon = 'apps';
    }
}
AppBarComponent.ɵfac = function AppBarComponent_Factory(t) { return new (t || AppBarComponent)(); };
AppBarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppBarComponent, selectors: [["app-bar"]], inputs: { color: "color", header: "header", headerLink: "headerLink", menuIcon: "menuIcon" }, ngContentSelectors: _c0, decls: 11, vars: 4, consts: [[1, "app-toolbar", "sticky-top"], [1, "cursor-pointer", 3, "routerLink"], ["fxFlex", ""], ["mat-icon-button", "", 3, "matMenuTriggerFor"], ["routeMenu", "matMenu"]], template: function AppBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-toolbar", 0)(1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "span", 2)(4, "theme-toggle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 3)(6, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-menu", null, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.headerLink);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.header);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.menuIcon);
    } }, dependencies: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultFlexDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__.MatMenuTrigger, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__.MatToolbar, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _theme_toggle_component__WEBPACK_IMPORTED_MODULE_0__.ThemeToggleComponent], encapsulation: 2 });


/***/ }),

/***/ 9137:
/*!**********************************************************************!*\
  !*** ./src/patterns/app/components/core/pattern-header.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PatternHeaderComponent": () => (/* binding */ PatternHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class PatternHeaderComponent {
    constructor() {
        this.link = 'https://gameprogrammingpatterns.com';
        this.header = 'Pattern';
    }
}
PatternHeaderComponent.ɵfac = function PatternHeaderComponent_Factory(t) { return new (t || PatternHeaderComponent)(); };
PatternHeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PatternHeaderComponent, selectors: [["pattern-header"]], inputs: { link: "link", header: "header" }, decls: 2, vars: 2, consts: [["target", "_blank", 1, "mat-title", "m4", 3, "href"]], template: function PatternHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.header);
    } }, encapsulation: 2 });


/***/ }),

/***/ 403:
/*!********************************************************************!*\
  !*** ./src/patterns/app/components/core/pattern-link.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PatternLinkComponent": () => (/* binding */ PatternLinkComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5434);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);



class PatternLinkComponent {
    constructor() {
        this.label = 'Pattern';
        this.link = '/';
        this.width = 320;
        this.height = 72;
        this.style = 'background-card glow-accent m4 rounded card-outline-accent cursor-pointer';
    }
}
PatternLinkComponent.ɵfac = function PatternLinkComponent_Factory(t) { return new (t || PatternLinkComponent)(); };
PatternLinkComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PatternLinkComponent, selectors: [["pattern-link"]], inputs: { label: "label", link: "link", width: "width", height: "height", style: "style" }, decls: 3, vars: 8, consts: [["fxLayout", "column", "fxLayoutAlign", "center center", 3, "routerLink"], [1, "mat-subheading-2", "m4"]], template: function PatternLinkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.style);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.width, "px")("min-height", ctx.height, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx.link);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.label);
    } }, dependencies: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultLayoutAlignDirective, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink], encapsulation: 2 });


/***/ }),

/***/ 8431:
/*!********************************************************************!*\
  !*** ./src/patterns/app/components/core/theme-toggle.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemeToggleComponent": () => (/* binding */ ThemeToggleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services */ 5469);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3338);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 5590);






class ThemeToggleComponent {
    constructor(themer) {
        this.themer = themer;
        this.lightColor = 'color-amber';
        this.lightIcon = 'brightness_5';
        this.darkColor = 'color-text';
        this.darkIcon = 'brightness_3';
    }
}
ThemeToggleComponent.ɵfac = function ThemeToggleComponent_Factory(t) { return new (t || ThemeToggleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_0__.ThemeService)); };
ThemeToggleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ThemeToggleComponent, selectors: [["theme-toggle"]], inputs: { lightColor: "lightColor", lightIcon: "lightIcon", darkColor: "darkColor", darkIcon: "darkIcon" }, decls: 3, vars: 2, consts: [["mat-icon-button", "", 3, "ngClass", "click"]], template: function ThemeToggleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ThemeToggleComponent_Template_button_click_0_listener() { return ctx.themer.toggleTheme(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.themer.isLight ? ctx.lightColor : ctx.darkColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.themer.isLight ? ctx.lightIcon : ctx.darkIcon);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__.DefaultClassDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon], encapsulation: 2 });


/***/ }),

/***/ 2418:
/*!************************************************************!*\
  !*** ./src/patterns/app/dialogs/confirm/confirm.dialog.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmDialog": () => (/* binding */ ConfirmDialog)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 7317);




class ConfirmDialog {
    constructor(data) {
        this.data = data;
    }
    ngOnInit() {
        if (this.data) {
            this.data.title = this.data.title
                ? this.data.title
                : 'Confirm Action?';
            this.data.content = this.data.content
                ? this.data.content
                : 'Are you sure you would like to perform this action?';
        }
        else {
            this.data = {
                title: 'Confirm Action?',
                content: 'Are you sure you would like to perform this action?'
            };
        }
    }
}
ConfirmDialog.ɵfac = function ConfirmDialog_Factory(t) { return new (t || ConfirmDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA)); };
ConfirmDialog.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfirmDialog, selectors: [["confirm-dialog"]], decls: 11, vars: 4, consts: [[1, "mat-typography"], ["mat-dialog-title", ""], ["mat-button", "", 3, "mat-dialog-close"], ["mat-button", "", "color", "warn", 3, "mat-dialog-close"]], template: function ConfirmDialog_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-dialog-content")(4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-dialog-actions")(7, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Confirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.content);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
    } }, dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions], encapsulation: 2 });


/***/ }),

/***/ 8518:
/*!*********************************************!*\
  !*** ./src/patterns/app/material.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialModule": () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/core */ 8133);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ 7114);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ 8616);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 4941);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/badge */ 178);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button-toggle */ 1959);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/checkbox */ 1534);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/divider */ 9975);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/menu */ 2796);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-bar */ 9782);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/radio */ 8390);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ 1434);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/slider */ 1859);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/slide-toggle */ 6623);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/snack-bar */ 2528);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/tabs */ 2379);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/toolbar */ 9946);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/tooltip */ 89);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);























class MaterialModule {
}
MaterialModule.ɵfac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
MaterialModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatLineModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatNativeDateModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatOptionModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatPseudoCheckboxModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatRippleModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__.FlexLayoutModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__.GridModule,
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__.DragDropModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__.MatBadgeModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__.MatButtonToggleModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__.MatCheckboxModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__.MatDividerModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormFieldModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInputModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenuModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__.MatProgressBarModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__.MatRadioModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelectModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_18__.MatSliderModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__.MatSlideToggleModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_20__.MatSnackBarModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__.MatTabsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__.MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_23__.MatTooltipModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { exports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatLineModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatNativeDateModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatOptionModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatPseudoCheckboxModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatRippleModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__.FlexLayoutModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__.GridModule,
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__.DragDropModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__.MatBadgeModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__.MatButtonToggleModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__.MatCheckboxModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__.MatDividerModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormFieldModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInputModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenuModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__.MatProgressBarModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__.MatRadioModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelectModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_18__.MatSliderModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__.MatSlideToggleModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_20__.MatSnackBarModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__.MatTabsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__.MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_23__.MatTooltipModule] }); })();


/***/ }),

/***/ 6916:
/*!**********************************************************!*\
  !*** ./src/patterns/app/models/command/alert-command.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertCommand": () => (/* binding */ AlertCommand)
/* harmony export */ });
class AlertCommand {
    constructor() {
        this.name = 'Alert Command';
        this.description = 'Trigger a window alert';
        this.execute = (val) => window.alert(val ? val : this.description);
    }
}


/***/ }),

/***/ 4479:
/*!*****************************************************!*\
  !*** ./src/patterns/app/models/command/icommand.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 9590:
/*!**************************************************!*\
  !*** ./src/patterns/app/models/command/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertCommand": () => (/* reexport safe */ _alert_command__WEBPACK_IMPORTED_MODULE_0__.AlertCommand),
/* harmony export */   "LogCommand": () => (/* reexport safe */ _log_command__WEBPACK_IMPORTED_MODULE_2__.LogCommand),
/* harmony export */   "SnackerCommand": () => (/* reexport safe */ _snacker_command__WEBPACK_IMPORTED_MODULE_3__.SnackerCommand)
/* harmony export */ });
/* harmony import */ var _alert_command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert-command */ 6916);
/* harmony import */ var _icommand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icommand */ 4479);
/* harmony import */ var _log_command__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./log-command */ 242);
/* harmony import */ var _snacker_command__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./snacker.command */ 654);






/***/ }),

/***/ 242:
/*!********************************************************!*\
  !*** ./src/patterns/app/models/command/log-command.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogCommand": () => (/* binding */ LogCommand)
/* harmony export */ });
class LogCommand {
    constructor() {
        this.name = 'Log Command';
        this.description = 'Log a command to the console';
        this.execute = (val) => console.log(val ? val : this.description);
    }
}


/***/ }),

/***/ 654:
/*!************************************************************!*\
  !*** ./src/patterns/app/models/command/snacker.command.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SnackerCommand": () => (/* binding */ SnackerCommand)
/* harmony export */ });
class SnackerCommand {
    constructor(snacker) {
        this.snacker = snacker;
        this.name = 'Snacker Command';
        this.description = 'Push a message via the Snacker service';
        this.execute = (val) => this.snacker.sendColorMessage(val ? val : this.description, ['snacker-indigo']);
    }
}


/***/ }),

/***/ 5531:
/*!******************************************!*\
  !*** ./src/patterns/app/models/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertCommand": () => (/* reexport safe */ _command__WEBPACK_IMPORTED_MODULE_0__.AlertCommand),
/* harmony export */   "LogCommand": () => (/* reexport safe */ _command__WEBPACK_IMPORTED_MODULE_0__.LogCommand),
/* harmony export */   "SnackerCommand": () => (/* reexport safe */ _command__WEBPACK_IMPORTED_MODULE_0__.SnackerCommand)
/* harmony export */ });
/* harmony import */ var _command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./command */ 9590);



/***/ }),

/***/ 2282:
/*!**********************************************************!*\
  !*** ./src/patterns/app/routes/command/command.route.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommandRoute": () => (/* binding */ CommandRoute)
/* harmony export */ });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models */ 5531);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services */ 5469);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ 8133);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5434);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ 1434);
/* harmony import */ var _components_core_pattern_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/core/pattern-header.component */ 9137);











function CommandRoute_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", c_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](c_r2.name);
} }
class CommandRoute {
    constructor(snacker) {
        this.snacker = snacker;
        this.commands = new Array(new _models__WEBPACK_IMPORTED_MODULE_0__.AlertCommand(), new _models__WEBPACK_IMPORTED_MODULE_0__.LogCommand(), new _models__WEBPACK_IMPORTED_MODULE_0__.SnackerCommand(this.snacker));
        this.command = this.commands[0];
        this.setCommand = (command) => this.command = command;
        this.compare = (c1, c2) => (c1 === null || c1 === void 0 ? void 0 : c1.name) === (c2 === null || c2 === void 0 ? void 0 : c2.name);
    }
}
CommandRoute.ɵfac = function CommandRoute_Factory(t) { return new (t || CommandRoute)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_1__.SnackerService)); };
CommandRoute.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CommandRoute, selectors: [["command-route"]], decls: 21, vars: 4, consts: [["fxLayout", "column", "fxLayoutAlign", "start stretch", 1, "p8"], ["link", "https://gameprogrammingpatterns.com/command.html", "header", "Command Pattern"], ["fxFlexAlign", "start", 1, "m8"], [3, "value", "compareWith", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "m8"], ["matInput", "", 3, "keydown.enter"], ["val", ""], ["mat-stroked-button", "", "color", "primary", "fxFlexAlign", "start", 1, "m8", 3, "click"], [3, "value"]], template: function CommandRoute_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "pattern-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-form-field", 2)(3, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Command");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectionChange", function CommandRoute_Template_mat_select_selectionChange_5_listener($event) { return ctx.setCommand($event.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, CommandRoute_mat_option_6_Template, 2, 2, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "mat-form-field", 5)(10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keydown.enter", function CommandRoute_Template_input_keydown_enter_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](13); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.command.execute(_r1.value)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Press Enter or click ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Execute");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, " below");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CommandRoute_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](13); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.command.execute(_r1.value)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Execute");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.command)("compareWith", ctx.compare);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.commands);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.command.description);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatOption, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultFlexAlignDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelect, _components_core_pattern_header_component__WEBPACK_IMPORTED_MODULE_2__.PatternHeaderComponent], encapsulation: 2 });


/***/ }),

/***/ 9630:
/*!**************************************************!*\
  !*** ./src/patterns/app/routes/command/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommandComponents": () => (/* binding */ CommandComponents),
/* harmony export */   "CommandRoutes": () => (/* binding */ CommandRoutes)
/* harmony export */ });
/* harmony import */ var _command_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./command.route */ 2282);

const CommandComponents = [
    _command_route__WEBPACK_IMPORTED_MODULE_0__.CommandRoute
];
const CommandRoutes = [
    { path: 'command', component: _command_route__WEBPACK_IMPORTED_MODULE_0__.CommandRoute }
];


/***/ }),

/***/ 7027:
/*!****************************************************!*\
  !*** ./src/patterns/app/routes/home/home.route.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeRoute": () => (/* binding */ HomeRoute)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5434);
/* harmony import */ var _components_core_pattern_link_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/core/pattern-link.component */ 403);



class HomeRoute {
    constructor() { }
    ngOnInit() {
    }
}
HomeRoute.ɵfac = function HomeRoute_Factory(t) { return new (t || HomeRoute)(); };
HomeRoute.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeRoute, selectors: [["home-route"]], decls: 2, vars: 0, consts: [["fxLayout", "row | wrap", "fxLayoutAlign", "start start", 1, "p8"], ["label", "Command", "link", "command"]], template: function HomeRoute_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "pattern-link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, dependencies: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutAlignDirective, _components_core_pattern_link_component__WEBPACK_IMPORTED_MODULE_0__.PatternLinkComponent], encapsulation: 2 });


/***/ }),

/***/ 9366:
/*!***********************************************!*\
  !*** ./src/patterns/app/routes/home/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeRoute": () => (/* reexport safe */ _home_route__WEBPACK_IMPORTED_MODULE_0__.HomeRoute)
/* harmony export */ });
/* harmony import */ var _home_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.route */ 7027);



/***/ }),

/***/ 6018:
/*!******************************************!*\
  !*** ./src/patterns/app/routes/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RouteComponents": () => (/* binding */ RouteComponents),
/* harmony export */   "Routes": () => (/* binding */ Routes)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ 9366);
/* harmony import */ var _command__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./command */ 9630);


const RouteComponents = [
    _home__WEBPACK_IMPORTED_MODULE_0__.HomeRoute,
    ..._command__WEBPACK_IMPORTED_MODULE_1__.CommandComponents
];
const Routes = [
    ..._command__WEBPACK_IMPORTED_MODULE_1__.CommandRoutes,
    { path: '', component: _home__WEBPACK_IMPORTED_MODULE_0__.HomeRoute },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];


/***/ }),

/***/ 3375:
/*!***************************************************!*\
  !*** ./src/patterns/app/services/core.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreService": () => (/* binding */ CoreService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 3280);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 1989);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8977);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);




class CoreService {
    constructor() {
        this.ssnPattern = /^(?!(000|666|9))\d{3}-(?!(00))\d{2}-(?!(0000))\d{4}$/g;
        this.getUploadOptions = () => {
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders();
            headers.set('Accept', 'application/json');
            headers.delete('Content-Type');
            return headers;
        };
        this.getTextOptions = () => {
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders();
            headers.set('Content-Type', 'text/plain');
            headers.delete('Pragma');
            return headers;
        };
        this.urlEncode = (value) => {
            const regex = /[^a-zA-Z0-9-.]/gi;
            let newValue = value.replace(/\s/g, '-').toLowerCase();
            newValue = newValue.replace(regex, '');
            return newValue;
        };
        this.generateInputObservable = (input) => (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.fromEvent)(input.nativeElement, 'keyup')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.debounceTime)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((event) => event.target.value), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.distinctUntilChanged)());
    }
}
CoreService.ɵfac = function CoreService_Factory(t) { return new (t || CoreService)(); };
CoreService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: CoreService, factory: CoreService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5469:
/*!********************************************!*\
  !*** ./src/patterns/app/services/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreService": () => (/* reexport safe */ _core_service__WEBPACK_IMPORTED_MODULE_0__.CoreService),
/* harmony export */   "SnackerService": () => (/* reexport safe */ _snacker_service__WEBPACK_IMPORTED_MODULE_1__.SnackerService),
/* harmony export */   "ThemeService": () => (/* reexport safe */ _theme_service__WEBPACK_IMPORTED_MODULE_2__.ThemeService)
/* harmony export */ });
/* harmony import */ var _core_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.service */ 3375);
/* harmony import */ var _snacker_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./snacker.service */ 2147);
/* harmony import */ var _theme_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme.service */ 2168);





/***/ }),

/***/ 2147:
/*!******************************************************!*\
  !*** ./src/patterns/app/services/snacker.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SnackerService": () => (/* binding */ SnackerService)
/* harmony export */ });
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/snack-bar */ 2528);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class SnackerService {
    constructor(snackbar) {
        this.snackbar = snackbar;
        this.config = new _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__.MatSnackBarConfig();
        this.sendMessage = (message) => this.snackbar.open(message, 'Close', this.config);
        this.setClasses = (classes) => {
            classes.push('snacker');
            this.config.panelClass = classes;
        };
        this.sendColorMessage = (message, colors) => {
            this.setClasses(colors);
            this.sendMessage(message);
        };
        this.sendErrorMessage = (message) => {
            this.setClasses(['snacker-red']);
            this.sendMessage(message);
        };
        this.sendWarningMessage = (message) => {
            this.setClasses(['snacker-orange']);
            this.sendMessage(message);
        };
        this.sendSuccessMessage = (message) => {
            this.setClasses(['snacker-green']);
            this.sendMessage(message);
        };
        this.config.duration = 5000;
        this.config.panelClass = [];
    }
    setDuration(duration) {
        this.config.duration = duration;
    }
}
SnackerService.ɵfac = function SnackerService_Factory(t) { return new (t || SnackerService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__.MatSnackBar)); };
SnackerService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SnackerService, factory: SnackerService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2168:
/*!****************************************************!*\
  !*** ./src/patterns/app/services/theme.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemeService": () => (/* binding */ ThemeService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/overlay */ 4244);


class ThemeService {
    constructor(overlay) {
        this.overlay = overlay;
        this.isLight = true;
        this.setOverlayContainerTheme = () => {
            if (this.isLight) {
                this.overlay.getContainerElement().classList.remove('app-dark');
                this.overlay.getContainerElement().classList.add('app-light');
            }
            else {
                this.overlay.getContainerElement().classList.remove('app-light');
                this.overlay.getContainerElement().classList.add('app-dark');
            }
        };
        this.toggleTheme = () => {
            this.isLight = !this.isLight;
            this.setOverlayContainerTheme();
        };
        this.isLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
        window.matchMedia('(prefers-color-scheme: light)')
            .addEventListener('change', (e) => this.isLight = e.matches);
        this.setOverlayContainerTheme();
    }
}
ThemeService.ɵfac = function ThemeService_Factory(t) { return new (t || ThemeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__.OverlayContainer)); };
ThemeService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ThemeService, factory: ThemeService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7807:
/*!**************************************************!*\
  !*** ./src/patterns/environments/environment.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
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
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 5949:
/*!******************************!*\
  !*** ./src/patterns/main.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 4407);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 7807);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(5949)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map