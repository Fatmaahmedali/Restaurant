(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Access\restaurants\src\main.ts */"zUnb");


/***/ }),

/***/ "19mU":
/*!*************************************!*\
  !*** ./src/app/menu/menu.module.ts ***!
  \*************************************/
/*! exports provided: MenuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuModule", function() { return MenuModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_all_menu_all_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/all-menu/all-menu.component */ "ZC74");
/* harmony import */ var _components_menu_details_menu_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/menu-details/menu-details.component */ "vBHI");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_menu_Services_menu_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../app/menu/Services/menu.service */ "ygJ1");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _components_menus_menus_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/menus/menus.component */ "56jl");
/* harmony import */ var _carts_carts_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../carts/carts.module */ "TgVI");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../app-routing.module */ "vY5A");






 // Adjust path as needed





// import { AngularFireModule } from '@angular/fire';
// import { AngularFirestoreModule } from '@angular/fire/firestore';
// import { AngularFireStorageModule } from '@angular/fire/storage';
class MenuModule {
}
MenuModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MenuModule });
MenuModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MenuModule_Factory(t) { return new (t || MenuModule)(); }, providers: [
        _app_menu_Services_menu_service__WEBPACK_IMPORTED_MODULE_6__["MenuService"] // Provide your service here if needed
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _carts_carts_module__WEBPACK_IMPORTED_MODULE_9__["CartsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MenuModule, { declarations: [_components_all_menu_all_menu_component__WEBPACK_IMPORTED_MODULE_3__["AllMenuComponent"], _components_menu_details_menu_details_component__WEBPACK_IMPORTED_MODULE_4__["MenuDetailsComponent"], _components_menus_menus_component__WEBPACK_IMPORTED_MODULE_8__["MenusComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
        _carts_carts_module__WEBPACK_IMPORTED_MODULE_9__["CartsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"]], exports: [_components_all_menu_all_menu_component__WEBPACK_IMPORTED_MODULE_3__["AllMenuComponent"], _components_menus_menus_component__WEBPACK_IMPORTED_MODULE_8__["MenusComponent"], _components_menu_details_menu_details_component__WEBPACK_IMPORTED_MODULE_4__["MenuDetailsComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_components_all_menu_all_menu_component__WEBPACK_IMPORTED_MODULE_3__["AllMenuComponent"], _components_menu_details_menu_details_component__WEBPACK_IMPORTED_MODULE_4__["MenuDetailsComponent"], _components_menus_menus_component__WEBPACK_IMPORTED_MODULE_8__["MenusComponent"]],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                    _carts_carts_module__WEBPACK_IMPORTED_MODULE_9__["CartsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                ],
                exports: [_components_all_menu_all_menu_component__WEBPACK_IMPORTED_MODULE_3__["AllMenuComponent"], _components_menus_menus_component__WEBPACK_IMPORTED_MODULE_8__["MenusComponent"], _components_menu_details_menu_details_component__WEBPACK_IMPORTED_MODULE_4__["MenuDetailsComponent"]],
                providers: [
                    _app_menu_Services_menu_service__WEBPACK_IMPORTED_MODULE_6__["MenuService"] // Provide your service here if needed
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "1vax":
/*!*********************************************************!*\
  !*** ./src/app/carts/components/cart/cart.component.ts ***!
  \*********************************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_carts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/carts.service */ "SVx2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function CartComponent_div_4_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_4_div_6_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const i_r6 = ctx.index; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.Mins(i_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CartComponent_div_4_div_6_Template_input_change_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.detecrchange(); })("ngModelChange", function CartComponent_div_4_div_6_Template_input_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const item_r5 = ctx.$implicit; return item_r5.quantity = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_4_div_6_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const i_r6 = ctx.index; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.Addamount(i_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_4_div_6_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const i_r6 = ctx.index; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.removeItem(i_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r5.item.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.item.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", item_r5.item.price, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r5.quantity)("ngModel", item_r5.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", item_r5.item.price * item_r5.quantity, "");
} }
function CartComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_4_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.clearCart(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Clear Shopping Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CartComponent_div_4_div_6_Template, 24, 6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_4_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.addCart(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Order Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Your Cart (", ctx_r0.CartProduct.length, " items) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.CartProduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total Cart Value: $", ctx_r0.total, "");
} }
function CartComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Well done!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Your order has been placed successfully. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CartComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Your Cart Is Empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 29);
} }
class CartComponent {
    constructor(service) {
        this.service = service;
        this.CartProduct = [];
        this.success = false;
        this.total = 0;
    }
    ngOnInit() {
        this.getCartProduct();
    }
    getCartProduct() {
        if ("cart" in localStorage) {
            this.CartProduct = JSON.parse(localStorage.getItem("cart")) || [];
            this.getCartTotal();
        }
    }
    updateQuantity() {
        this.getCartTotal();
    }
    getCartTotal() {
        let total = 0;
        for (let item of this.CartProduct) {
            total += item.item.price * item.quantity;
        }
        this.total = +total.toFixed(2);
        localStorage.setItem("cart", JSON.stringify(this.CartProduct));
    }
    Addamount(index) {
        this.CartProduct[index].quantity++;
        this.getCartTotal();
    }
    Mins(index) {
        if (this.CartProduct[index].quantity > 1) {
            this.CartProduct[index].quantity--;
            this.getCartTotal();
        }
    }
    detecrchange() {
        this.getCartTotal();
    }
    removeItem(index) {
        this.CartProduct.splice(index, 1);
        this.getCartTotal();
    }
    clearCart() {
        this.CartProduct = [];
        this.total = 0;
        localStorage.setItem("cart", JSON.stringify(this.CartProduct));
    }
    addCart() {
        let products = this.CartProduct.map(item => {
            return { productId: item.item.id, quantity: item.quantity };
        });
        let model = {
            userId: 5,
            date: new Date(),
            products: products,
        };
        this.service.createNewCart(model).subscribe(res => {
            this.success = true;
            this.product = res;
            localStorage.setItem("cart", JSON.stringify(this.CartProduct));
        });
    }
}
CartComponent.ɵfac = function CartComponent_Factory(t) { return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_carts_service__WEBPACK_IMPORTED_MODULE_1__["CartsService"])); };
CartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CartComponent, selectors: [["app-cart"]], decls: 8, vars: 3, consts: [["href", "/menu", 1, "navbar-brand"], [1, "text-size"], [1, "container"], [4, "ngIf", "ngIfElse"], ["class", "alert alert-success mt-3", 4, "ngIf"], ["emptyCart", ""], [1, "text-center", 2, "margin-top", "40px"], [1, "clear"], [1, "d-flex", 2, "color", "#FEA116 !important", "border", "#FEA116", 3, "click"], ["class", "cart-item", 4, "ngFor", "ngForOf"], [1, "text-right", "mt-4"], [1, "order-btn", 3, "click"], [1, "cart-item"], [1, "row", "align-items-center"], [1, "col-md-3"], ["alt", "Product Image", 1, "img-fluid", 3, "src"], [1, "col-md-4"], [1, "item-details"], [1, "quantity-input", "d-flex", "justify-content-center", "align-items-center"], [1, "quantity-btn", "btn-border", 2, "margin-right", "10px", 3, "click"], [1, "circle-input-container"], ["type", "number", "min", "1", 1, "form-control", "form-control-sm", 3, "value", "ngModel", "change", "ngModelChange"], [1, "quantity-btn", "btn-border", 2, "margin-left", "10px", 3, "click"], [1, "col-md-2", "items"], [1, "item-actions"], [1, "delete-btn", 3, "click"], [1, "fa-solid", "fa-x"], [1, "alert", "alert-success", "mt-3"], [1, "text-center"], ["src", "https://sankaraanaturals.in/theme/grocery/img/empty-cart.png", "alt", ""]], template: function CartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " < Continue shopping");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CartComponent_div_4_Template, 12, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CartComponent_div_5_Template, 4, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CartComponent_ng_template_6_Template, 3, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.CartProduct.length > 0)("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.success);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".text-center[_ngcontent-%COMP%] {\r\n  margin-top: 50px;\r\n  margin-bottom: 50px;\r\n  text-align: center;\r\n}\r\n.quantity-btn.btn-border[_ngcontent-%COMP%] {\r\n  border: 1px solid #ccc;\r\n  padding: 5px 10px;\r\n  margin: 0;\r\n}\r\n.items[_ngcontent-%COMP%]{\r\n  left: 250px;\r\n}\r\n.quantity-btn.btn-border[_ngcontent-%COMP%]:focus {\r\n  outline: none;\r\n}\r\n.item-actions[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  margin-right: 50px ;\r\n}\r\n.quantity-btn[_ngcontent-%COMP%] {\r\n  background-color: rgb(243, 238, 238);\r\n  color: black;\r\n  border: none;\r\n  cursor: pointer;\r\n  border-radius: 50%;\r\n}\r\n.quantity-btn[_ngcontent-%COMP%]:hover {\r\n  background-color: hsl(0, 11%, 98%);\r\n}\r\nh1[_ngcontent-%COMP%]{\r\n  color: #FEA116 !important\r\n}\r\n.delete-btn[_ngcontent-%COMP%] {\r\n  color: black;\r\n  border: none;\r\n  padding: 6px 12px;\r\n  cursor: pointer;\r\n  border-radius: 50px;\r\n  margin-bottom: 40px;\r\n}\r\n.delete-btn[_ngcontent-%COMP%]:hover {\r\n  background-color: gray;\r\n}\r\n.order-btn[_ngcontent-%COMP%] {\r\n  background-color: #4caf50;\r\n  color: white;\r\n  border: none;\r\n  padding: 10px 20px;\r\n  cursor: pointer;\r\n  border-radius: 4px;\r\n}\r\n.order-btn[_ngcontent-%COMP%]:hover {\r\n  background-color: #45a049;\r\n}\r\n.cart-actions[_ngcontent-%COMP%] {\r\n  margin-top: 20px;\r\n  text-align: right;\r\n}\r\n.clear[_ngcontent-%COMP%]{\r\n  margin-left: 1100px;\r\n  margin-bottom: 30px;\r\n}\r\n.text-size[_ngcontent-%COMP%]{\r\n  margin-top: 25px;\r\n  margin-left: 25px;\r\n  font-size: large;\r\n}\r\n.cart-item[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  margin-bottom: 20px;\r\n  border-bottom: 1px solid #dee2e6;\r\n  padding-bottom: 10px;\r\n}\r\n.cart-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  margin-right: 40px;\r\n  width: 150px;\r\n}\r\n.item-details[_ngcontent-%COMP%] {\r\n  flex: 1;\r\n}\r\n.item-actions[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-end;\r\n}\r\nimg[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n}\r\n@media (max-width: 768px) {\r\n  .clear[_ngcontent-%COMP%]{\r\n    margin-left: 250px;\r\n  }\r\n .items[_ngcontent-%COMP%] {\r\n    left: 0;\r\n  }\r\n .item-actions[_ngcontent-%COMP%] {\r\n    text-align: right;\r\n    margin-top: 10px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FydHMvY29tcG9uZW50cy9jYXJ0L2NhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLFNBQVM7QUFDWDtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLG9DQUFvQztFQUNwQyxZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGtDQUFrQztBQUNwQztBQUNBO0VBQ0U7QUFDRjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0NBQWdDO0VBQ2hDLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDtBQUNBO0VBQ0UsT0FBTztBQUNUO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRTtJQUNFLGtCQUFrQjtFQUNwQjtDQUNEO0lBQ0csT0FBTztFQUNUO0NBQ0Q7SUFDRyxpQkFBaUI7SUFDakIsZ0JBQWdCO0VBQ2xCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jYXJ0cy9jb21wb25lbnRzL2NhcnQvY2FydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQtY2VudGVyIHtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5xdWFudGl0eS1idG4uYnRuLWJvcmRlciB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuLml0ZW1ze1xyXG4gIGxlZnQ6IDI1MHB4O1xyXG59XHJcbi5xdWFudGl0eS1idG4uYnRuLWJvcmRlcjpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG4uaXRlbS1hY3Rpb25ze1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4IDtcclxufVxyXG4ucXVhbnRpdHktYnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQzLCAyMzgsIDIzOCk7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbi5xdWFudGl0eS1idG46aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAxMSUsIDk4JSk7XHJcbn1cclxuaDF7XHJcbiAgY29sb3I6ICNGRUExMTYgIWltcG9ydGFudFxyXG59XHJcbi5kZWxldGUtYnRuIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHBhZGRpbmc6IDZweCAxMnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbn1cclxuLmRlbGV0ZS1idG46aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbn1cclxuLm9yZGVyLWJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjYWY1MDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5vcmRlci1idG46aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NWEwNDk7XHJcbn1cclxuLmNhcnQtYWN0aW9ucyB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4uY2xlYXJ7XHJcbiAgbWFyZ2luLWxlZnQ6IDExMDBweDtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcbi50ZXh0LXNpemV7XHJcbiAgbWFyZ2luLXRvcDogMjVweDtcclxuICBtYXJnaW4tbGVmdDogMjVweDtcclxuICBmb250LXNpemU6IGxhcmdlO1xyXG59XHJcbi5jYXJ0LWl0ZW0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufVxyXG4uY2FydC1pdGVtIGltZyB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xyXG4gIHdpZHRoOiAxNTBweDtcclxufVxyXG4uaXRlbS1kZXRhaWxzIHtcclxuICBmbGV4OiAxO1xyXG59XHJcbi5pdGVtLWFjdGlvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbn1cclxuaW1ne1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5jbGVhcntcclxuICAgIG1hcmdpbi1sZWZ0OiAyNTBweDtcclxuICB9XHJcbiAuaXRlbXMge1xyXG4gICAgbGVmdDogMDtcclxuICB9XHJcbiAuaXRlbS1hY3Rpb25zIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cart',
                templateUrl: './cart.component.html',
                styleUrls: ['./cart.component.css']
            }]
    }], function () { return [{ type: _services_carts_service__WEBPACK_IMPORTED_MODULE_1__["CartsService"] }]; }, null); })();


/***/ }),

/***/ "4Kj8":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/spinner/spinner.component.ts ***!
  \****************************************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SpinnerComponent {
    constructor() { }
    ngOnInit() {
    }
}
SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) { return new (t || SpinnerComponent)(); };
SpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpinnerComponent, selectors: [["app-spinner"]], decls: 2, vars: 0, consts: [[1, "loader"]], template: function SpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".loader[_ngcontent-%COMP%] {\r\n  width: 48px;\r\n  height: 48px;\r\n  border-radius: 50%;\r\n  position: relative;\r\n  transform:rotate(45deg);\r\n  background: #fff;\r\n}\r\n.loader[_ngcontent-%COMP%]::before {\r\n  content: \"\";\r\n  box-sizing: border-box;\r\n  position: absolute;\r\n  inset: 0px;\r\n  border-radius: 50%;\r\n  border:24px solid #302bd1;\r\n  animation: prixClipFix 2s infinite linear;\r\n}\r\n@keyframes prixClipFix {\r\n    0%   {clip-path:polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)}\r\n    25%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)}\r\n    50%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)}\r\n    75%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 100%)}\r\n    100% {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 0)}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIseUNBQXlDO0FBQzNDO0FBRUE7SUFDSSxNQUFNLDhDQUE4QztJQUNwRCxNQUFNLDBEQUEwRDtJQUNoRSxNQUFNLG1FQUFtRTtJQUN6RSxNQUFNLDZEQUE2RDtJQUNuRSxNQUFNLDBEQUEwRDtBQUNwRSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvYWRlciB7XHJcbiAgd2lkdGg6IDQ4cHg7XHJcbiAgaGVpZ2h0OiA0OHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG4ubG9hZGVyOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaW5zZXQ6IDBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm9yZGVyOjI0cHggc29saWQgIzMwMmJkMTtcclxuICBhbmltYXRpb246IHByaXhDbGlwRml4IDJzIGluZmluaXRlIGxpbmVhcjtcclxufVxyXG5cclxuQGtleWZyYW1lcyBwcml4Q2xpcEZpeCB7XHJcbiAgICAwJSAgIHtjbGlwLXBhdGg6cG9seWdvbig1MCUgNTAlLDAgMCwwIDAsMCAwLDAgMCwwIDApfVxyXG4gICAgMjUlICB7Y2xpcC1wYXRoOnBvbHlnb24oNTAlIDUwJSwwIDAsMTAwJSAwLDEwMCUgMCwxMDAlIDAsMTAwJSAwKX1cclxuICAgIDUwJSAge2NsaXAtcGF0aDpwb2x5Z29uKDUwJSA1MCUsMCAwLDEwMCUgMCwxMDAlIDEwMCUsMTAwJSAxMDAlLDEwMCUgMTAwJSl9XHJcbiAgICA3NSUgIHtjbGlwLXBhdGg6cG9seWdvbig1MCUgNTAlLDAgMCwxMDAlIDAsMTAwJSAxMDAlLDAgMTAwJSwwIDEwMCUpfVxyXG4gICAgMTAwJSB7Y2xpcC1wYXRoOnBvbHlnb24oNTAlIDUwJSwwIDAsMTAwJSAwLDEwMCUgMTAwJSwwIDEwMCUsMCAwKX1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpinnerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-spinner',
                templateUrl: './spinner.component.html',
                styleUrls: ['./spinner.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "56jl":
/*!**********************************************************!*\
  !*** ./src/app/menu/components/menus/menus.component.ts ***!
  \**********************************************************/
/*! exports provided: MenusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenusComponent", function() { return MenusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





function MenusComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenusComponent_div_12_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.addButton = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add To Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MenusComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MenusComponent_div_13_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.amount = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenusComponent_div_13_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r6.Add(); return ctx_r6.addButton = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.amount);
} }
class MenusComponent {
    constructor() {
        this.value = {};
        this.item = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.addButton = false;
        this.amount = 0;
        this.loading = false;
    }
    ngOnInit() {
    }
    Add() {
        this.item.emit({ item: this.value, quantity: this.amount });
    }
}
MenusComponent.ɵfac = function MenusComponent_Factory(t) { return new (t || MenusComponent)(); };
MenusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenusComponent, selectors: [["app-menus"]], inputs: { value: "value" }, outputs: { item: "item" }, decls: 14, vars: 7, consts: [[1, "col", "mb-4"], [1, "card", "h-50", "w-100", "shadow", "product-card"], ["type", "button", 1, "navbar-toggler"], [3, "routerLink"], ["alt", "Product Image", 1, "card-img-top", "product-image", 3, "src"], [1, "card-body"], [1, "card-title", "text-center", "mb-3", 2, "padding-top", "25px"], [1, "card-text", "mb-3", 2, "height", "100px", "text-align", "center"], [1, "mb-0", 2, "text-align", "center", "color", "brown"], ["class", "w-100 text-center", 4, "ngIf"], ["class", "d-flex w-10", "style", "text-align: center; color: brown;", 4, "ngIf"], [1, "w-100", "text-center"], [1, "btn", "btn-primary", "custom-button", 3, "click"], [1, "d-flex", "w-10", 2, "text-align", "center", "color", "brown"], ["type", "number", "min", "1", 1, "form-control", "mr-2", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-danger", 3, "click"]], template: function MenusComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MenusComponent_div_12_Template, 3, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MenusComponent_div_13_Template, 4, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/details/" + ctx.value.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.value.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.value.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.value.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx.value.price, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.addButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addButton);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: ["*[_ngcontent-%COMP%]{\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\nbody[_ngcontent-%COMP%]{\r\n  background-color: #f9f6f2}\r\n.card[_ngcontent-%COMP%]{\r\n  border-radius: 30px;\r\n  margin-top: 25px;\r\n  margin-bottom: 30px;\r\n  height: 100%;\r\n}\r\n.col[_ngcontent-%COMP%]{\r\n  margin-right: 25px;\r\n}\r\n.h-50[_ngcontent-%COMP%]{\r\n  height: 30% !important;\r\n\r\n}\r\n.product-card[_ngcontent-%COMP%] {\r\n  margin-bottom: 20px;\r\n  transition: transform 0.2s ease;\r\n}\r\n.product-card[_ngcontent-%COMP%]:hover {\r\n  transform: translateY(-5px);\r\n}\r\n.custom-button[_ngcontent-%COMP%] {\r\n  color: white;\r\n  background-color: brown;\r\n  border: 1px solid brown;\r\n  padding: 8px 16px;\r\n  cursor: pointer;\r\n  transition: background-color 0.3s, color 0.3s, border-color 0.3s;\r\n}\r\n.custom-button[_ngcontent-%COMP%]:hover {\r\n  background-color: white;\r\n  color: brown;\r\n  border-color: brown;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9jb21wb25lbnRzL21lbnVzL21lbnVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLHNCQUFzQjs7QUFFeEI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQiwrQkFBK0I7QUFDakM7QUFFQTtFQUNFLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UsWUFBWTtFQUNaLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixnRUFBZ0U7QUFDbEU7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvbWVudS9jb21wb25lbnRzL21lbnVzL21lbnVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuYm9keXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmNmYyfVxyXG4uY2FyZHtcclxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5jb2x7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xyXG59XHJcbi5oLTUwe1xyXG4gIGhlaWdodDogMzAlICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcbi5wcm9kdWN0LWNhcmQge1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZTtcclxufVxyXG5cclxuLnByb2R1Y3QtY2FyZDpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xyXG59XHJcbi5jdXN0b20tYnV0dG9uIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYnJvd247XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYnJvd247XHJcbiAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcywgY29sb3IgMC4zcywgYm9yZGVyLWNvbG9yIDAuM3M7XHJcbn1cclxuLmN1c3RvbS1idXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGNvbG9yOiBicm93bjtcclxuICBib3JkZXItY29sb3I6IGJyb3duO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenusComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menus',
                templateUrl: './menus.component.html',
                styleUrls: ['./menus.component.css']
            }]
    }], function () { return []; }, { value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyD7YL6HakHtVNREx4nUDXW8Nq1CovUzH0M",
        authDomain: "restaurant-82bf3.firebaseapp.com",
        databaseURL: "https://restaurant-82bf3-default-rtdb.firebaseio.com",
        projectId: "restaurant-82bf3",
        storageBucket: "restaurant-82bf3.appspot.com",
        messagingSenderId: "892414288606",
        appId: "1:892414288606:web:4a24cffc21df8b8ae7984f",
        measurementId: "G-LMYF12ZLNM"
    }
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

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header/header.component */ "aZ8m");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app-routing.module */ "vY5A");
/* harmony import */ var _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/spinner/spinner.component */ "4Kj8");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _components_select_select_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/select/select.component */ "wnGv");








class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_4__["SpinnerComponent"], _components_select_select_component__WEBPACK_IMPORTED_MODULE_6__["SelectComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]], exports: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
        _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_4__["SpinnerComponent"],
        _components_select_select_component__WEBPACK_IMPORTED_MODULE_6__["SelectComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_4__["SpinnerComponent"], _components_select_select_component__WEBPACK_IMPORTED_MODULE_6__["SelectComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
                ],
                exports: [
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
                    _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_4__["SpinnerComponent"],
                    _components_select_select_component__WEBPACK_IMPORTED_MODULE_6__["SelectComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "SVx2":
/*!*************************************************!*\
  !*** ./src/app/carts/services/carts.service.ts ***!
  \*************************************************/
/*! exports provided: CartsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartsService", function() { return CartsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class CartsService {
    constructor(http) {
        this.http = http;
    }
    createNewCart(model) {
        return this.http.post('https://restaurant-82bf3-default-rtdb.firebaseio.com/carts/posts.json', model);
    }
}
CartsService.ɵfac = function CartsService_Factory(t) { return new (t || CartsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CartsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CartsService, factory: CartsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



// import { getDatabase, ref, get, onValue } from 'firebase/database'
class AppComponent {
    constructor() {
        this.title = 'point';
    }
    // ngOnInit() {
    //   // Firebase configuration
    //   const firebaseConfig = {
    //     apiKey: "YOUR_API_KEY",
    //     authDomain: "restaurant-82bf3.firebaseapp.com",
    //     databaseURL: "https://restaurant-82bf3-default-rtdb.firebaseio.com",
    //     projectId: "restaurant-82bf3",
    //     storageBucket: "restaurant-82bf3.appspot.com",
    //     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    //     appId: "YOUR_APP_ID"
    //   };
    //   // Initialize Firebase
    //   firebase.initializeApp(firebaseConfig);
    //   // Reference to the database
    //   const database = firebase.database();
    //   // Example: Fetching all products under 'electronics'
    //   const electronicsRef = database.ref('products/electronics');
    //   electronicsRef.once('value', (snapshot) => {
    //     snapshot.forEach((childSnapshot) => {
    //       const product = childSnapshot.val();
    //       console.log(product); // Do something with each product
    //     });
    //   });
    // }
    ngOnInit() {
        const firebaseConfig = {
            apiKey: "YOUR_API_KEY",
            authDomain: "restaurant-82bf3.firebaseapp.com",
            databaseURL: "https://restaurant-82bf3-default-rtdb.firebaseio.com",
            projectId: "restaurant-82bf3",
            storageBucket: "restaurant-82bf3.appspot.com",
            messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
            appId: "YOUR_APP_ID"
        };
        // Initialize Firebase
        //   // Reference to the database
        //   const database = getDatabase(app);
        //   // Example: Fetching all products under 'electronics'
        //   const electronicsRef = ref(database, 'products/electronics');
        //   get(electronicsRef).then((snapshot) => {
        //     snapshot.forEach((childSnapshot) => {
        //       const product = childSnapshot.val();
        //       console.log(product); // Do something with each product
        //     });
        //   }).catch((error) => {
        //     console.error('Error fetching products:', error);
        //   });
        // }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "TgVI":
/*!***************************************!*\
  !*** ./src/app/carts/carts.module.ts ***!
  \***************************************/
/*! exports provided: CartsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartsModule", function() { return CartsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/cart/cart.component */ "1vax");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");





class CartsModule {
}
CartsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CartsModule });
CartsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CartsModule_Factory(t) { return new (t || CartsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CartsModule, { declarations: [_components_cart_cart_component__WEBPACK_IMPORTED_MODULE_2__["CartComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_components_cart_cart_component__WEBPACK_IMPORTED_MODULE_2__["CartComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _menu_Services_menu_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./menu/Services/menu.service */ "ygJ1");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _menu_menu_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./menu/menu.module */ "19mU");
// // import { NgModule } from '@angular/core';
// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';
// import { AppRoutingModule } from './app-routing.module';
// import { AngularFireModule } from '@angular/fire';
// import { AngularFirestoreModule } from '@angular/fire/firestore';
// import { AngularFireStorageModule } from '@angular/fire/storage';
// import { AngularFireModule } from '@angular/fire';
// import { environment } from '../environments/environment';
// import { AppComponent } from './app.component';
// import { MenuService } from './menu/Services/menu.service';
// import { SharedModule } from './shared/shared.module';
// import { MenuModule } from './menu/menu.module';
// @NgModule({
//   declarations: [
//     AppComponent,
//   ],
//   imports: [
//     BrowserModule,
//     CommonModule,
//     FormsModule,
//     HttpClientModule,
//     AppRoutingModule,
//     SharedModule,
//     MenuModule,
//     AngularFireModule.initializeApp(environment.firebaseConfig),
//     AngularFirestoreModule,
//     AngularFireStorageModule,
//   ],
//   providers: [
//     MenuService, // Provide your services here if they are meant to be application-wide singletons
//   ],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _menu_Services_menu_service__WEBPACK_IMPORTED_MODULE_7__["MenuService"],
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            _menu_menu_module__WEBPACK_IMPORTED_MODULE_9__["MenuModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
        _menu_menu_module__WEBPACK_IMPORTED_MODULE_9__["MenuModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                    _menu_menu_module__WEBPACK_IMPORTED_MODULE_9__["MenuModule"],
                ],
                providers: [
                    _menu_Services_menu_service__WEBPACK_IMPORTED_MODULE_7__["MenuService"],
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZC74":
/*!****************************************************************!*\
  !*** ./src/app/menu/components/all-menu/all-menu.component.ts ***!
  \****************************************************************/
/*! exports provided: AllMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllMenuComponent", function() { return AllMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Services_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Services/menu.service */ "ygJ1");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/header/header.component */ "aZ8m");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_select_select_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/select/select.component */ "wnGv");
/* harmony import */ var _menus_menus_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../menus/menus.component */ "56jl");
/* harmony import */ var _shared_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/spinner/spinner.component */ "4Kj8");








function AllMenuComponent_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-menus", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("item", function AllMenuComponent_div_4_div_1_Template_app_menus_item_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.AddToCart($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", product_r3);
} }
function AllMenuComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AllMenuComponent_div_4_div_1_Template, 2, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.products);
} }
function AllMenuComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AllMenuComponent {
    constructor(service) {
        this.service = service;
        this.products = [];
        this.categories = [];
        this.loading = false;
    }
    ngOnInit() {
        this.getProducts();
        this.getCategory();
    }
    getCategory() {
        this.loading = true;
        this.service.getAllCategiores().subscribe((data) => {
            this.categories = data;
            this.categories.push('ALL');
            this.loading = false;
        }, (error) => {
            this.loading = false;
            console.error('Error fetching categories:', error);
        });
    }
    getProducts() {
        this.loading = true;
        const productId = 0;
        this.service.getAllProducts().subscribe((data) => {
            this.loading = false;
            this.products = data;
        }, (error) => {
            this.loading = false;
            console.error('Error fetching products:', error);
        });
    }
    getAllCategories() {
        this.loading = true;
        this.service.getAllCategiores().subscribe((data) => {
            this.loading = false;
            this.categories = data;
        }, (error) => {
            this.loading = false;
            console.error('Error fetching categories:', error);
        });
    }
    filter(event) {
        let value = event.target.value;
        if (value === 'ALL') {
            this.getProducts();
        }
        else {
            this.getProductCategories(value);
        }
    }
    getProductCategories(keyword) {
        this.loading = true;
        this.service.getProductCategory(keyword).subscribe((data) => {
            this.loading = false;
            this.products = data;
            console.log(this.products);
        }, (error) => {
            this.loading = false;
            console.error('Error fetching products:', error);
        });
    }
    AddToCart(event) {
        // JSON.stringify    => send data
        // JSON.parse()      => receive data
        if ("cart" in localStorage) {
            // Retrieve cart items from localStorage and parse as JSON
            this.CartProduct = JSON.parse(localStorage.getItem("cart"));
            // Check if an item with the same id already exists in CartProduct
            let exist = this.CartProduct.find(item => item.item.id === event.item.id);
            console.log(exist);
            if (exist) {
                // If item with the same id exists, alert the user or handle it as needed
                alert("Item already exists in the cart.");
                // Optionally, you can update the quantity of the existing item
                exist.quantity += event.quantity;
            }
            else {
                // If item with the same id does not exist, add the new item (event) to the CartProduct array
                const find = this.CartProduct.push({ item: event.item, quantity: event.quantity });
                console.log(find);
            }
        }
        else {
            // If "cart" key does not exist in localStorage
            // Initialize CartProduct array with the new item (event)
            this.CartProduct = [{ item: event.item, quantity: event.quantity }];
            console.log(this.CartProduct);
        }
        // Update localStorage with the updated CartProduct array
        localStorage.setItem("cart", JSON.stringify(this.CartProduct));
    }
}
AllMenuComponent.ɵfac = function AllMenuComponent_Factory(t) { return new (t || AllMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_menu_service__WEBPACK_IMPORTED_MODULE_1__["MenuService"])); };
AllMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AllMenuComponent, selectors: [["app-all-menu"]], decls: 7, vars: 4, consts: [[3, "data", "title", "selectedCategory"], [1, "container"], [2, "text-align", "center", "margin-top", "25px"], ["class", "row row-cols-1 row-cols-md-4 py-4", 4, "ngIf"], ["class", "text-center w-100%", 4, "ngIf"], [1, "row", "row-cols-1", "row-cols-md-4", "py-4"], [4, "ngFor", "ngForOf"], [3, "value", "item"], [1, "text-center", "w-100%"]], template: function AllMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedCategory", function AllMenuComponent_Template_app_header_selectedCategory_0_listener($event) { return ctx.filter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "MENUS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AllMenuComponent_div_4_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AllMenuComponent_div_5_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-select");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.categories)("title", "Selected");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _shared_components_select_select_component__WEBPACK_IMPORTED_MODULE_4__["SelectComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _menus_menus_component__WEBPACK_IMPORTED_MODULE_5__["MenusComponent"], _shared_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_6__["SpinnerComponent"]], styles: ["body[_ngcontent-%COMP%]{\r\n  margin: 0px;\r\n  padding: 0px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9jb21wb25lbnRzL2FsbC1tZW51L2FsbC1tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvbWVudS9jb21wb25lbnRzL2FsbC1tZW51L2FsbC1tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AllMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-all-menu',
                templateUrl: './all-menu.component.html',
                styleUrls: ['./all-menu.component.css'],
            }]
    }], function () { return [{ type: _Services_menu_service__WEBPACK_IMPORTED_MODULE_1__["MenuService"] }]; }, null); })();


/***/ }),

/***/ "aZ8m":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




function HeaderComponent_option_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", category_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r1);
} }
const _c0 = function (a0) { return { "scrolled": a0 }; };
class HeaderComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.Cart = [];
        this.title = "";
        this.data = [];
        this.selectedCategory = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isImageVisible = true;
    }
    ngOnInit() {
        this.getCartProduct();
    }
    detectedChanges(event) {
        this.selectedCategory.emit(event);
    }
    getCartProduct() {
        if ("cart" in localStorage) {
            this.Cart = JSON.parse(localStorage.getItem("cart"));
            console.log(this.Cart);
        }
    }
    onWindowScroll() {
        const imageElement = this.elementRef.nativeElement.querySelector('.banner');
        const rect = imageElement.getBoundingClientRect();
        const imageBottom = rect.bottom;
        this.isImageVisible = imageBottom > 0;
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], hostBindings: function HeaderComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function HeaderComponent_scroll_HostBindingHandler() { return ctx.onWindowScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, inputs: { title: "title", data: "data" }, outputs: { selectedCategory: "selectedCategory" }, decls: 36, vars: 6, consts: [["id", "navbar", 1, "navbar", "navbar-expand-lg", "navbar-dark", "fixed-top", 3, "ngClass"], [1, "container-fluid"], ["href", "#", 1, "navbar-brand"], [2, "display", "inline-block", "margin-right", "10px"], [1, "fa-solid", "fa-utensils"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse", "justify-content-end"], [1, "navbar-nav"], ["routerLinkActive", "active", 1, "nav-item", "active", "mr-4"], ["routerLink", "/menu", 1, "nav-link"], [2, "font-style", "italic", "font-size", "24px"], [1, "nav-item", "mr-4"], ["routerLink", "/carts", 1, "nav-link", 2, "color", "aliceblue"], [1, "fa-solid", "fa-cart-shopping", "fa-2x"], [1, "banner"], [1, "container"], [1, "row", "align-items-center"], [1, "col-md-6"], [1, "text-overlay", "d-flex", "flex-column", "justify-content-center", "align-items-center", "text-center", 2, "height", "100%"], [1, "mb-4"], [2, "text-align", "center", "font-size", "20px"], [1, "form-group", "mt-4"], ["for", "categorySelect", 1, "text-white", "mb-0"], ["id", "categorySelect", 1, "form-control", "fa-2x", 3, "change"], [3, "value", 4, "ngFor", "ngForOf"], [1, "image", 2, "padding-top", "20%"], ["src", "https://themewagon.github.io/restoran/img/hero.png", "alt", "Restaurant Image", 1, "photo", "img-fluid"], [3, "value"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Restoran");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "strong", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Menus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h1", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Enjoy Our Delicious Meals");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h4", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Restoran offers a delightful culinary experience throughout the day, from breakfast to dinner. Discover a place where every mealtime becomes an opportunity to indulge in delicious cuisine and enjoy moments of shared enjoyment with friends and family. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "select", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function HeaderComponent_Template_select_change_31_listener($event) { return ctx.detectedChanges($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, HeaderComponent_option_32_Template, 2, 2, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, !ctx.isImageVisible));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.Cart.length, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".navbar-dark[_ngcontent-%COMP%] {\r\n  background-color: transparent; \r\n  transition: background-color 0.3s ease; \r\n}\r\n.navbar-dark.scrolled[_ngcontent-%COMP%] {\r\n  background-color: black; \r\n}\r\n.banner[_ngcontent-%COMP%] {\r\n  background: linear-gradient(rgba(15, 23, 43, .9), rgba(15, 23, 43, .9)),url('https://themewagon.github.io/restoran/img/bg-hero.jpg');\r\n  background-size: cover;\r\n  background-position: center;\r\n  height: 100vh; \r\n  width: 100%; \r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.photo[_ngcontent-%COMP%]{\r\n  width:400px;\r\n  margin-left: 150px;\r\n}\r\nh4[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{\r\n  color: aliceblue;\r\n}\r\n\r\n.fa-solid[_ngcontent-%COMP%]{\r\n  padding-right: 15px;\r\n  padding-left: 15px;\r\n}\r\nh1[_ngcontent-%COMP%], i[_ngcontent-%COMP%], label[_ngcontent-%COMP%] {\r\n  color: #FEA116 !important\r\n}\r\n@keyframes imgRotate {\r\n  from {\r\n    transform: rotate(0deg);\r\n  }\r\n  to {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n@media (max-width: 768px) {\r\n  .photo[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n}\r\n.text-overlay[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  font-size: 48px;\r\n}\r\n.text-overlay[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n}\r\n.image[_ngcontent-%COMP%] {\r\n  text-align: center; \r\n}\r\n.image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  max-width: 100%; \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkJBQTZCLEVBQUUsbUNBQW1DO0VBQ2xFLHNDQUFzQyxFQUFFLDJDQUEyQztBQUNyRjtBQUNBO0VBQ0UsdUJBQXVCLEVBQUUsbUNBQW1DO0FBQzlEO0FBQ0E7RUFDRSxvSUFBb0k7RUFDcEksc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQixhQUFhLEVBQUUseUJBQXlCO0VBQ3hDLFdBQVcsRUFBRSx3QkFBd0I7RUFDckMsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBLEtBQUs7QUFDTDtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjtBQUNBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7QUFDRjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsZUFBZTtBQUNqQjtBQUVBO0VBQ0Usa0JBQWtCLEVBQUUsOEJBQThCO0FBQ3BEO0FBRUE7RUFDRSxlQUFlLEVBQUUsK0JBQStCO0FBQ2xEIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhci1kYXJrIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgLyogSW5pdGlhbCB0cmFuc3BhcmVudCBiYWNrZ3JvdW5kICovXHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7IC8qIFNtb290aCB0cmFuc2l0aW9uIGZvciBiYWNrZ3JvdW5kIGNvbG9yICovXHJcbn1cclxuLm5hdmJhci1kYXJrLnNjcm9sbGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgLyogQmFja2dyb3VuZCBjb2xvciB3aGVuIHNjcm9sbGVkICovXHJcbn1cclxuLmJhbm5lciB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMTUsIDIzLCA0MywgLjkpLCByZ2JhKDE1LCAyMywgNDMsIC45KSksdXJsKCdodHRwczovL3RoZW1ld2Fnb24uZ2l0aHViLmlvL3Jlc3RvcmFuL2ltZy9iZy1oZXJvLmpwZycpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGhlaWdodDogMTAwdmg7IC8qIEZ1bGwgdmlld3BvcnQgaGVpZ2h0ICovXHJcbiAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgdmlld3BvcnQgd2lkdGggKi9cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLnBob3Rve1xyXG4gIHdpZHRoOjQwMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxNTBweDtcclxufVxyXG5oNCxwe1xyXG4gIGNvbG9yOiBhbGljZWJsdWU7XHJcbn1cclxuLyogICovXHJcbi5mYS1zb2xpZHtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTVweDtcclxufVxyXG5oMSAsIGkgICwgbGFiZWwge1xyXG4gIGNvbG9yOiAjRkVBMTE2ICFpbXBvcnRhbnRcclxufVxyXG5Aa2V5ZnJhbWVzIGltZ1JvdGF0ZSB7XHJcbiAgZnJvbSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLnBob3RvIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcbi50ZXh0LW92ZXJsYXkgaDEge1xyXG4gIGZvbnQtc2l6ZTogNDhweDtcclxufVxyXG5cclxuLnRleHQtb3ZlcmxheSBoNCB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4uaW1hZ2Uge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgLyogQ2VudGVyIGltYWdlIGhvcml6b250YWxseSAqL1xyXG59XHJcblxyXG4uaW1hZ2UgaW1nIHtcclxuICBtYXgtd2lkdGg6IDEwMCU7IC8qIEVuc3VyZSBpbWFnZSBpcyByZXNwb25zaXZlICovXHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectedCategory: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onWindowScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll', []]
        }] }); })();


/***/ }),

/***/ "vBHI":
/*!************************************************************************!*\
  !*** ./src/app/menu/components/menu-details/menu-details.component.ts ***!
  \************************************************************************/
/*! exports provided: MenuDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuDetailsComponent", function() { return MenuDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _Services_menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Services/menu.service */ "ygJ1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/spinner/spinner.component */ "4Kj8");








function MenuDetailsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Title:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Category:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Description: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Rate: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Count: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Price: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "More Details of Menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.data.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.data.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.data.category, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.data.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.data.rate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.data.count);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.data.price);
} }
function MenuDetailsComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
;
class MenuDetailsComponent {
    constructor(service, route) {
        this.service = service;
        this.route = route;
        this.loading = false;
        this.data = [];
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id'); // Get id from route parameters
        console.log(this.id);
        this.getProductDetails();
    }
    getProductDetails() {
        this.loading = true;
        this.service.getProductAll(this.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(error => {
            console.error('Error fetching product details:', error);
            this.loading = false;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
        })).subscribe(res => {
            this.data = res || {};
            this.loading = false;
            console.log(this.data);
        });
    }
}
MenuDetailsComponent.ɵfac = function MenuDetailsComponent_Factory(t) { return new (t || MenuDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_menu_service__WEBPACK_IMPORTED_MODULE_3__["MenuService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
MenuDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuDetailsComponent, selectors: [["app-menu-details"]], decls: 5, vars: 2, consts: [[1, "box"], [1, "text-center", 2, "margin-bottom", "25px"], ["class", "row", 4, "ngIf"], ["class", "text-center", 4, "ngIf"], [1, "row"], [1, "col-md-5", "col-sm-12"], ["alt", "", 3, "src"], [1, "col-md-7", "col-sm-12"], [1, "info"], [1, "list-unstyled"], ["routerLink", "/menu", 1, "btn-outline"], [1, "text-center"]], template: function MenuDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "More Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MenuDetailsComponent_div_3_Template, 38, 7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MenuDetailsComponent_div_4_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _shared_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_6__["SpinnerComponent"]], styles: [".box[_ngcontent-%COMP%]{\r\n  width: 90%;\r\n  height: 500px;\r\n  margin: 100px auto;\r\n}\r\nul[_ngcontent-%COMP%]{\r\n  li{\r\n    font-size: 22px;\r\n    margin: 20px 0;\r\n  }\r\n  img{\r\n    width: 100%;\r\n    max-height: 500px;\r\n    min-height:500px ;\r\n  }\r\n}\r\nimg[_ngcontent-%COMP%]{\r\n  width: 50%;\r\n}\r\nspan[_ngcontent-%COMP%]{\r\n  color: black;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n\r\n  background-color: brown;\r\n  color: white;\r\n  border-color: brown;\r\n  padding: 8px 16px;\r\n  text-decoration: none;\r\n  transition: background-color 0.3s, color 0.3s, border-color 0.3s;\r\n    border: 1px solid brown;\r\n}\r\nbutton[_ngcontent-%COMP%]:hover {\r\n  color: brown;\r\n  background-color: transparent;\r\n\r\n}\r\nh1[_ngcontent-%COMP%], strong[_ngcontent-%COMP%]{\r\n  color:brown;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9jb21wb25lbnRzL21lbnUtZGV0YWlscy9tZW51LWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRTtJQUNFLGVBQWU7SUFDZixjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGlCQUFpQjtFQUNuQjtBQUNGO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBLGtCQUFrQjtBQUNsQjs7RUFFRSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLGdFQUFnRTtJQUM5RCx1QkFBdUI7QUFDM0I7QUFDQTtFQUNFLFlBQVk7RUFDWiw2QkFBNkI7O0FBRS9CO0FBQ0E7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9tZW51L2NvbXBvbmVudHMvbWVudS1kZXRhaWxzL21lbnUtZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJveHtcclxuICB3aWR0aDogOTAlO1xyXG4gIGhlaWdodDogNTAwcHg7XHJcbiAgbWFyZ2luOiAxMDBweCBhdXRvO1xyXG59XHJcbnVse1xyXG4gIGxpe1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgfVxyXG4gIGltZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LWhlaWdodDogNTAwcHg7XHJcbiAgICBtaW4taGVpZ2h0OjUwMHB4IDtcclxuICB9XHJcbn1cclxuaW1ne1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuc3BhbntcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLyogQnV0dG9uIFN0eWxlcyAqL1xyXG5idXR0b24ge1xyXG5cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBicm93bjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLWNvbG9yOiBicm93bjtcclxuICBwYWRkaW5nOiA4cHggMTZweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzLCBjb2xvciAwLjNzLCBib3JkZXItY29sb3IgMC4zcztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJyb3duO1xyXG59XHJcbmJ1dHRvbjpob3ZlciB7XHJcbiAgY29sb3I6IGJyb3duO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cclxufVxyXG5oMSAsIHN0cm9uZ3tcclxuICBjb2xvcjpicm93bjtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu-details',
                templateUrl: '/src/app/menu/components/menu-details/menu-details.component.html',
                styleUrls: ['./menu-details.component.css']
            }]
    }], function () { return [{ type: _Services_menu_service__WEBPACK_IMPORTED_MODULE_3__["MenuService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _menu_components_all_menu_all_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu/components/all-menu/all-menu.component */ "ZC74");
/* harmony import */ var _menu_components_menu_details_menu_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu/components/menu-details/menu-details.component */ "vBHI");
/* harmony import */ var _carts_components_cart_cart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./carts/components/cart/cart.component */ "1vax");







const routes = [
    { path: "menu", component: _menu_components_all_menu_all_menu_component__WEBPACK_IMPORTED_MODULE_2__["AllMenuComponent"] },
    { path: "details/:id", component: _menu_components_menu_details_menu_details_component__WEBPACK_IMPORTED_MODULE_3__["MenuDetailsComponent"] },
    { path: "carts", component: _carts_components_cart_cart_component__WEBPACK_IMPORTED_MODULE_4__["CartComponent"] },
    { path: "**", redirectTo: "menu", pathMatch: "full" }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "wnGv":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/select/select.component.ts ***!
  \**************************************************************/
/*! exports provided: SelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectComponent", function() { return SelectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SelectComponent {
    constructor() {
        this.title = "";
        this.data = [];
        this.selectedValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    detectedchanges(event) {
        this.selectedValue.emit(event);
    }
}
SelectComponent.ɵfac = function SelectComponent_Factory(t) { return new (t || SelectComponent)(); };
SelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SelectComponent, selectors: [["app-select"]], inputs: { title: "title", data: "data" }, outputs: { selectedValue: "selectedValue" }, decls: 23, vars: 0, consts: [[1, "footer", "mt-5"], [1, "container", 2, "color", "aliceblue"], [1, "row", 2, "padding-top", "25px"], [1, "col-md-4"], [2, "font-style", "italic"], [1, "text-center"]], template: function SelectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Restoran");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Email: infoexample.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Phone: +123 456 789");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Follow Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Instagram");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u00A9 2024 Your Company. All rights reserved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["footer[_ngcontent-%COMP%]{\r\n  background-color: #0F172B !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2VsZWN0L3NlbGVjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQW9DO0FBQ3RDIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2VsZWN0L3NlbGVjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwRjE3MkIgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-select',
                templateUrl: './select.component.html',
                styleUrls: ['./select.component.css']
            }]
    }], function () { return []; }, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectedValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "ygJ1":
/*!***********************************************!*\
  !*** ./src/app/menu/Services/menu.service.ts ***!
  \***********************************************/
/*! exports provided: MenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuService", function() { return MenuService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class MenuService {
    constructor(http) {
        this.http = http;
        this.baseUrl = 'https://restaurant-82bf3-default-rtdb.firebaseio.com/products.json';
    }
    getAllProducts() {
        return this.http.get(this.baseUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(error => {
            console.error('Error fetching all products:', error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('Something went wrong while fetching all products.');
        }));
    }
    getAllCategiores() {
        return this.http.get('https://restaurant-82bf3-default-rtdb.firebaseio.com/category.json');
    }
    getProductCategory(keyword) {
        const url = `${this.baseUrl}`;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(data => {
            // Assuming data is an object where each key is a product category
            const products = Object.values(data); // Convert object values to array of products
            const filteredProducts = products.filter((product) => product.category === keyword);
            return filteredProducts;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(error => {
            console.error('Error fetching products:', error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('Something went wrong while fetching products.');
        }));
    }
    getProductAll(id) {
        const url = `https://restaurant-82bf3-default-rtdb.firebaseio.com/products/${id}.json`;
        return this.http.get(url);
    }
}
MenuService.ɵfac = function MenuService_Factory(t) { return new (t || MenuService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
MenuService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MenuService, factory: MenuService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map