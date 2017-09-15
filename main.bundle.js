webpackJsonp([1,5],{

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollapseComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var uuid = 1;
var CollapseComponent = (function () {
    function CollapseComponent() {
        this.title = '';
        this.selected = false;
        this.selectedChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    CollapseComponent.prototype.ngOnInit = function () {
        this._id = ++uuid;
    };
    Object.defineProperty(CollapseComponent.prototype, "collapseId", {
        get: function () {
            return 'tp-collapse-' + this._id;
        },
        enumerable: true,
        configurable: true
    });
    CollapseComponent.prototype.toggleSelected = function () {
        this.selected = !this.selected;
        this.selectedChange.emit({
            collapseId: this.collapseId,
            selected: this.selected
        });
    };
    return CollapseComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], CollapseComponent.prototype, "title", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], CollapseComponent.prototype, "selected", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], CollapseComponent.prototype, "selectedChange", void 0);
CollapseComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'tp-collapse',
        template: __webpack_require__(582),
        styles: [__webpack_require__(500)],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [])
], CollapseComponent);

var _a;
//# sourceMappingURL=collapse.component.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormatNumVNPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FormatNumVNPipe = (function () {
    function FormatNumVNPipe() {
    }
    FormatNumVNPipe.prototype.transform = function (value) {
        if (!value)
            return value;
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    };
    return FormatNumVNPipe;
}());
FormatNumVNPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'formatNumVN'
    })
], FormatNumVNPipe);

//# sourceMappingURL=format-num-vn.pipe.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReplacePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ReplacePipe = (function () {
    function ReplacePipe() {
    }
    ReplacePipe.prototype.transform = function (value, expr, arg2) {
        if (!value)
            return value;
        return value.replace(new RegExp(expr, 'gi'), arg2);
    };
    return ReplacePipe;
}());
ReplacePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'replace'
    })
], ReplacePipe);

//# sourceMappingURL=replace.pipe.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenManagerService; });
var TokenManagerService = (function () {
    function TokenManagerService() {
        this.tokenKey = 'token';
    }
    TokenManagerService.prototype.store = function (content) {
        localStorage.setItem(this.tokenKey, JSON.stringify(content));
    };
    TokenManagerService.prototype.retrieve = function () {
        var storedToken = localStorage.getItem(this.tokenKey);
        if (!storedToken)
            throw 'no token found';
        return storedToken;
    };
    TokenManagerService.prototype.generateNewToken = function (token) {
        var currentTime = (new Date()).getTime();
        this.store({ ttl: currentTime, token: token });
    };
    TokenManagerService.prototype.retrieveToken = function () {
        var currentTime = (new Date()).getTime(), token = null;
        try {
            var storedToken = JSON.parse(this.retrieve());
            if (storedToken.ttl < (currentTime - (120 * 1000)))
                throw 'invalid token found';
            token = storedToken.token;
        }
        catch (err) {
            console.error(err);
        }
        return token;
    };
    return TokenManagerService;
}());

//# sourceMappingURL=token-manager.service.js.map

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__token_manager_service__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return XyzUserListService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var XyzUserListService = (function () {
    function XyzUserListService(http, afAuth, tokenManagerService) {
        this.http = http;
        this.afAuth = afAuth;
        this.tokenManagerService = tokenManagerService;
        this.showDialog = false;
        this.temp_pro = [];
        this.giohang = [];
        this.giohangsum = [];
        this.link_img = 'http://hunglx-ng-lar.esy.es/resources/upload/';
        this.domain = 'http://hunglx-ng-lar.esy.es/';
        this.API = 'https://cors-anywhere.herokuapp.com/http://hunglx-ng-lar.esy.es/';
        // Observable string sources
        this.emitChangeSource = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        // Observable string streams
        this.changeEmitted$ = this.emitChangeSource.asObservable();
        // Observable string sources
        this.emitChangeSource_1 = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        // Observable string streams
        this.changeEmitted_1 = this.emitChangeSource_1.asObservable();
        // Observable string sources
        this.emitChangeSource2 = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        // Observable string streams
        this.changeEmitted2 = this.emitChangeSource2.asObservable();
        // Observable string sources
        this.emitChangeSource3 = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        // Observable string streams
        this.changeEmitted3 = this.emitChangeSource3.asObservable();
        // Observable string sources
        this.emitChangeSource4 = new __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__["BehaviorSubject"](true);
        // Observable string streams
        this.changeEmitted4 = this.emitChangeSource4.asObservable();
        // Observable string sources
        this.emitChangeSource5 = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        // Observable string streams
        this.changeEmitted5 = this.emitChangeSource5.asObservable();
    }
    // Service message commands
    XyzUserListService.prototype.emitChange = function (change) {
        this.emitChangeSource.next(change);
    };
    // Service message commands
    XyzUserListService.prototype.emitChange_1 = function (change) {
        this.emitChangeSource_1.next(change);
    };
    // Service message commands
    XyzUserListService.prototype.emitChange2 = function (change) {
        this.emitChangeSource2.next(change);
    };
    // Service message commands
    XyzUserListService.prototype.emitChange3 = function (change) {
        this.emitChangeSource3.next(change);
    };
    // Service message commands
    XyzUserListService.prototype.emitChange4 = function (change) {
        this.emitChangeSource4.next(change);
    };
    // Service message commands
    XyzUserListService.prototype.emitChange5 = function (change) {
        this.emitChangeSource5.next(change);
    };
    XyzUserListService.prototype.logoutSocial = function () {
        this.afAuth.auth.signOut();
    };
    XyzUserListService.prototype.addcart = function (id) {
        var _this = this;
        this.http.get(this.API + 'api/mua-hang/' + id).map(function (res) { return res.json(); }).subscribe(function (response) {
            _this.temp_pro = response.content;
            if (sessionStorage.cart == null || JSON.parse(sessionStorage.cart).length <= 0) {
                _this.giohang = [];
                _this.giohang.push(_this.temp_pro);
                _this.abc = _this.giohang;
                // localStorage.setItem("cart", JSON.stringify(this.abc));
                if (typeof (Storage) !== "undefined") {
                    // Gán dữ liệu
                    sessionStorage.cart = JSON.stringify(_this.abc);
                }
                else {
                    document.write('Trình duyệt của bạn không hỗ trợ sessionStorage');
                }
                _this.count_cart = 1;
                _this.showDialog = true;
                console.log(_this.showDialog);
            }
            else {
                for (var _i = 0; _i < _this.giohang.length; _i++) {
                    var num = _this.giohang[_i];
                    if (num[0].id == id) {
                        _this.flag_cart = false;
                        _this.giohang[_i][0].qty++;
                        _this.giohang[_i][0].subtotal = _this.giohang[_i][0].qty * _this.giohang[_i][0].price;
                        // console.log(this.count_cart);
                        _this.count_cart++;
                        _this.abc = _this.giohang;
                        if (typeof (Storage) !== "undefined") {
                            // Gán dữ liệu
                            sessionStorage.cart = JSON.stringify(_this.abc);
                        }
                        else {
                            document.write('Trình duyệt của bạn không hỗ trợ sessionStorage');
                        }
                        //localStorage.setItem("cart", JSON.stringify(this.abc));
                        break;
                    }
                    else {
                        _this.flag_cart = true;
                    }
                }
                if (_this.flag_cart) {
                    _this.giohang.push(_this.temp_pro);
                    _this.abc = _this.giohang;
                    //localStorage.setItem("cart", JSON.stringify(this.abc));
                    if (typeof (Storage) !== "undefined") {
                        // Gán dữ liệu
                        sessionStorage.cart = JSON.stringify(_this.abc);
                    }
                    else {
                        document.write('Trình duyệt của bạn không hỗ trợ sessionStorage');
                    }
                    _this.count_cart++;
                    _this.showDialog = true;
                    console.log(_this.showDialog);
                }
            }
            //console.log(this.count_cart);
            _this.emitChange(_this.count_cart);
            _this.emitChange_1(_this.showDialog);
            sessionStorage.count_cart = _this.count_cart;
        });
    };
    XyzUserListService.prototype.get = function () {
        console.log(this.http.get(this.API + 'api/home'));
        return this.http.get(this.API + 'api/home').map(function (res) { return res.json(); });
    };
    XyzUserListService.prototype.get_menu = function () {
        return this.http.get(this.API + 'api/menu').map(function (res) { return res.json(); });
    };
    XyzUserListService.prototype.get_menu_cap2 = function (id) {
        return this.http.get(this.API + 'api/menu/' + id).map(function (res) { return res.json(); });
    };
    XyzUserListService.prototype.search = function (filter, selectedCate, price) {
        var endpoint = (price) ? '/' + price : '';
        var cate = (selectedCate) ? '/' + selectedCate : '';
        return this.http.get(this.API + 'api/home/' + filter + cate + endpoint).map(function (res) { return res.json(); });
    };
    XyzUserListService.prototype.catechild = function (selectedCate) {
        var endpoint = (selectedCate) ? selectedCate : 0;
        return this.http.get(this.API + 'api/catechild/' + endpoint).map(function (res) { return res.json(); });
    };
    XyzUserListService.prototype.getproduct_cate = function (id) {
        return this.http.get(this.API + 'api/loai-san-pham/' + id).map(function (res) { return res.json(); });
    };
    XyzUserListService.prototype.getdetail_product = function (id) {
        return this.http.get(this.API + 'api/chi-tiet-san-pham/' + id).map(function (res) { return res.json(); });
    };
    XyzUserListService.prototype.getMoreTodos = function (id, page) {
        return this.http.get(this.API + 'api/loai-san-pham/' + id + '?page=' + page).map(function (res) { return res.json(); });
    };
    XyzUserListService.prototype.checkout = function (products) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-type', 'application/json');
        console.log(JSON.stringify(products));
        return this.http.post(this.API + 'api/check-out', JSON.stringify(products), { headers: headers }).map(function (res) { return res.json(); }); // Reach here if fails;
    };
    XyzUserListService.prototype.signup = function (acc) {
        console.log(JSON.stringify(acc));
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-type', 'application/json');
        return this.http.post(this.API + 'api/user/signup', JSON.stringify(acc), { headers: headers }).map(function (res) { return res.json(); });
    };
    XyzUserListService.prototype.signin = function (acc, autologin) {
        var _this = this;
        return this.http.post(this.API + 'api/user/signin', acc, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'X-Requested-With': 'XMLHttpRequest' }) })
            .map(function (response) {
            var token = response.json().token;
            var email = response.json().email;
            var name = response.json().name;
            var id = response.json().id;
            var base64Url = token.split('.')[1];
            var base64 = base64Url.replace('-', '+').replace('_', '/');
            return { id: id, email: email, name: name, token: token, decoded: JSON.parse(window.atob(base64)) };
        })
            .do(function (tokenData) {
            if (autologin) {
                _this.tokenManagerService.generateNewToken(tokenData.token);
                //localStorage.setItem('token', tokenData.token);
                localStorage.setItem('id', tokenData.id);
                localStorage.setItem('email', tokenData.email);
                localStorage.setItem('name', tokenData.name);
                localStorage.setItem('login', '1');
                _this.flag_logout = true;
                _this.emitChange3(_this.flag_logout);
            }
            else {
                if (typeof (Storage) !== "undefined") {
                    // Gán dữ liệu
                    sessionStorage.token = tokenData.token;
                    sessionStorage.id = tokenData.id;
                    sessionStorage.email = tokenData.email;
                    sessionStorage.name = tokenData.name;
                    sessionStorage.login = '1';
                    _this.flag_logout = true;
                    _this.emitChange3(_this.flag_logout);
                }
                else {
                    document.write('Trình duyệt của bạn không hỗ trợ local storage');
                }
            }
        });
    };
    XyzUserListService.prototype.getToken = function () {
        if ((sessionStorage.token !== null)) {
            return sessionStorage.token;
        }
        if ((localStorage.getItem("token") !== null)) {
            return localStorage.getItem('token');
        }
    };
    XyzUserListService.prototype.logOut = function () {
        localStorage.clear();
        sessionStorage.clear();
        delete sessionStorage.cart;
        delete sessionStorage.count_cart;
        delete sessionStorage.total;
        this.emitChange('');
    };
    XyzUserListService.prototype.updateInfo = function (user, id) {
        //const token = this.getToken();
        if ((sessionStorage.token !== null)) {
            var token = this.getToken();
        }
        else {
            var token = this.tokenManagerService.retrieveToken();
        }
        // console.log(token);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-type', 'application/json');
        return this.http.post(this.API + 'api/user/update/' + id + '?token=' + token, user, { headers: headers })
            .map(function (response) {
            var email = response.json().email;
            var name = response.json().name;
            var status = response.json().success;
            return { email: email, name: name, status: status };
        })
            .do(function (tokenData) {
            if ((sessionStorage.token !== null)) {
                sessionStorage.email = tokenData.email;
                sessionStorage.name = tokenData.name;
            }
            if ((localStorage.getItem("token") !== null)) {
                localStorage.setItem('email', tokenData.email);
                localStorage.setItem('name', tokenData.name);
            }
        });
    };
    XyzUserListService.prototype.getOrderUser = function (id) {
        return this.http.get(this.API + 'api/user/order/' + id).map(function (res) { return res.json(); });
    };
    XyzUserListService.prototype.getOrderUserDetail = function (id) {
        return this.http.get(this.API + 'api/user/order/detail/' + id).map(function (res) { return res.json(); });
    };
    XyzUserListService.prototype.validate_email_user = function (em, id) {
        if (id === void 0) { id = '0'; }
        return this.http.post(this.API + 'api/user/validate_email/' + id, { email: em }, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'X-Requested-With': 'XMLHttpRequest' }) }).map(function (res) { return res.json(); });
    };
    XyzUserListService.prototype.contact = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-type', 'application/json');
        return this.http.post(this.API + 'api/user/lien-he', JSON.stringify(data), { headers: headers }).map(function (res) { return res.json(); });
    };
    XyzUserListService.prototype.weather = function () {
        return this.http.get('https://query.yahooapis.com/v1/public/yql?q=select%20item.condition%20from%20weather.forecast%20where%20woeid%20%3D%2028349033&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys').map(function (res) { return res.json(); });
    };
    return XyzUserListService;
}());
XyzUserListService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__token_manager_service__["a" /* TokenManagerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__token_manager_service__["a" /* TokenManagerService */]) === "function" && _c || Object])
], XyzUserListService);

var _a, _b, _c;
//# sourceMappingURL=home.service.js.map

/***/ }),

/***/ 290:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 290;


/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(335);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(91);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(router, xyzUserListService, currentActivatedRoute) {
        this.router = router;
        this.xyzUserListService = xyzUserListService;
        this.currentActivatedRoute = currentActivatedRoute;
        this.isRequesting1 = true;
        this.isRequesting2 = true;
    }
    AppComponent.prototype.ngOnInit = function () {
        // if (window.location.pathname !== '/') {
        //   this.home = false;
        // }
        if (__WEBPACK_IMPORTED_MODULE_3__angular_common__["l" /* isPlatformBrowser */]) {
            this.routerSubscription = this.router.events
                .filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* NavigationEnd */]; })
                .subscribe(function (event) {
                window.scrollTo(0, 0);
            });
        }
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.routerSubscription.unsubscribe();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(577),
        styles: [__webpack_require__(495)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__home_service__["a" /* XyzUserListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__home_service__["a" /* XyzUserListService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__category_category_component__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__detail_detail_component__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__contact_contact_component__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__footer_footer_component__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__header_header_component__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__cart_cart_component__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__checkout_checkout_component__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__signin_signin_component__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__signup_signup_component__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__info_info_component__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__equal_validator_directive__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__guard_auth_guard__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__saveinfo_guard__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_platform_browser_animations__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__collapse_collapse_component__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__collapse_group_collapse_group_component__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__faq_faq_component__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pipes_temp_converter_pipe__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__dialog_dialog_component__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_angularfire2__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_angularfire2_database__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_angularfire2_auth__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__spinner_spinner_component__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__replace_pipe__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__format_num_vn_pipe__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__token_manager_service__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__email_available_validator_directive__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35_ng_lazyload_image__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35_ng_lazyload_image___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_35_ng_lazyload_image__);
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























// New imports to update based on AngularFire2 version 4








// Must export the config
var firebaseConfig = {
    apiKey: "AIzaSyCEPpvtiiK5D4r7HqD74yXA9OIyZf_lzmE",
    authDomain: "jovial-archive-135623.firebaseapp.com",
    databaseURL: "https://jovial-archive-135623.firebaseio.com",
    projectId: "jovial-archive-135623",
    storageBucket: "jovial-archive-135623.appspot.com",
    messagingSenderId: "833649048596"
};
var routes = [
    { path: 'loai-san-pham/:id/:cate', component: __WEBPACK_IMPORTED_MODULE_6__category_category_component__["a" /* CategoryComponent */] },
    { path: 'chi-tiet-san-pham/:id/:tensp', component: __WEBPACK_IMPORTED_MODULE_9__detail_detail_component__["a" /* DetailComponent */] },
    { path: 'lien-he', component: __WEBPACK_IMPORTED_MODULE_10__contact_contact_component__["a" /* ContactComponent */] },
    { path: 'gio-hang', component: __WEBPACK_IMPORTED_MODULE_13__cart_cart_component__["a" /* CartComponent */] },
    { path: 'thanh-toan', component: __WEBPACK_IMPORTED_MODULE_14__checkout_checkout_component__["a" /* CheckoutComponent */] },
    { path: 'dang-nhap', component: __WEBPACK_IMPORTED_MODULE_15__signin_signin_component__["a" /* SigninComponent */] },
    { path: 'dang-ky', component: __WEBPACK_IMPORTED_MODULE_16__signup_signup_component__["a" /* SignupComponent */] },
    { path: 'faq', component: __WEBPACK_IMPORTED_MODULE_24__faq_faq_component__["a" /* FaqComponent */] },
    { path: 'thong-tin', component: __WEBPACK_IMPORTED_MODULE_17__info_info_component__["a" /* InfoComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__guard_auth_guard__["a" /* AuthGuard */]], canDeactivate: [__WEBPACK_IMPORTED_MODULE_20__saveinfo_guard__["a" /* CanDeactivateGuard */]] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */] },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__category_category_component__["a" /* CategoryComponent */],
            __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_9__detail_detail_component__["a" /* DetailComponent */],
            __WEBPACK_IMPORTED_MODULE_10__contact_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_11__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_12__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_13__cart_cart_component__["a" /* CartComponent */],
            __WEBPACK_IMPORTED_MODULE_14__checkout_checkout_component__["a" /* CheckoutComponent */],
            __WEBPACK_IMPORTED_MODULE_15__signin_signin_component__["a" /* SigninComponent */],
            __WEBPACK_IMPORTED_MODULE_16__signup_signup_component__["a" /* SignupComponent */],
            __WEBPACK_IMPORTED_MODULE_17__info_info_component__["a" /* InfoComponent */],
            __WEBPACK_IMPORTED_MODULE_18__equal_validator_directive__["a" /* EqualValidatorDirective */],
            __WEBPACK_IMPORTED_MODULE_22__collapse_collapse_component__["a" /* CollapseComponent */],
            __WEBPACK_IMPORTED_MODULE_23__collapse_group_collapse_group_component__["a" /* CollapseGroupComponent */],
            __WEBPACK_IMPORTED_MODULE_24__faq_faq_component__["a" /* FaqComponent */],
            __WEBPACK_IMPORTED_MODULE_25__pipes_temp_converter_pipe__["a" /* TempConverterPipe */],
            __WEBPACK_IMPORTED_MODULE_26__dialog_dialog_component__["a" /* DialogComponent */],
            __WEBPACK_IMPORTED_MODULE_30__spinner_spinner_component__["a" /* SpinnerComponent */],
            __WEBPACK_IMPORTED_MODULE_31__replace_pipe__["a" /* ReplacePipe */],
            __WEBPACK_IMPORTED_MODULE_32__format_num_vn_pipe__["a" /* FormatNumVNPipe */],
            __WEBPACK_IMPORTED_MODULE_34__email_available_validator_directive__["a" /* EmailAvailableValidatorDirective */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_21__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* RouterModule */].forRoot(routes),
            __WEBPACK_IMPORTED_MODULE_27_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
            __WEBPACK_IMPORTED_MODULE_28_angularfire2_database__["a" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_29_angularfire2_auth__["a" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_35_ng_lazyload_image__["LazyLoadImageModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5__home_service__["a" /* XyzUserListService */], __WEBPACK_IMPORTED_MODULE_19__guard_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_20__saveinfo_guard__["a" /* CanDeactivateGuard */], __WEBPACK_IMPORTED_MODULE_31__replace_pipe__["a" /* ReplacePipe */], __WEBPACK_IMPORTED_MODULE_32__format_num_vn_pipe__["a" /* FormatNumVNPipe */], __WEBPACK_IMPORTED_MODULE_33__token_manager_service__["a" /* TokenManagerService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CartComponent = (function () {
    function CartComponent(xyzUserListService, router) {
        var _this = this;
        this.xyzUserListService = xyzUserListService;
        this.router = router;
        this.total = 0;
        this.count_c = 0;
        this.showDialog = false;
        this.cfdelete = false;
        this.showDialogvc = false;
        xyzUserListService.changeEmitted2.subscribe(function (text) {
            _this.flag_search1 = text;
            console.log(_this.flag_search1);
        });
    }
    CartComponent.prototype.ngOnInit = function () {
        // if (localStorage.getItem("cart") === null) {
        if (sessionStorage.cart == null || JSON.parse(sessionStorage.cart).length <= 0) {
            this.no_product = true;
        }
        else {
            this.no_product = false;
            // this.product_giohang = JSON.parse(localStorage.getItem('cart'));
            this.product_giohang = JSON.parse(sessionStorage.cart);
            console.log(this.product_giohang);
            // for (var _i = 0; _i < this.product_giohang.length; _i++) {
            //   this.total = this.total + this.product_giohang[_i][0].subtotal;
            // }
            this.total = this.product_giohang.reduce(function (total1, currentValue) {
                console.log(currentValue[0].subtotal);
                return total1 + currentValue[0].subtotal;
            }, 0);
            // console.log(totalYears);
            if (typeof (Storage) !== "undefined") {
                // Gán dữ liệu
                sessionStorage.total = JSON.stringify(this.total);
            }
            else {
                document.write('Trình duyệt của bạn không hỗ trợ sessionStorage');
            }
            //localStorage.setItem("total", JSON.stringify(this.total));
        }
        this.link_img = this.xyzUserListService.link_img;
        this.domain = this.xyzUserListService.domain;
    };
    CartComponent.prototype.delete = function (id) {
        console.clear();
        var item = this.product_giohang.find(function (value) {
            return value[0].id == id;
        });
        var index = this.product_giohang.indexOf(item);
        console.log(index);
        if (index > -1) {
            this.product_giohang.splice(index, 1);
            this.flag_cart = true;
            if (this.product_giohang <= 0) {
                this.no_product = true;
            }
        }
        else {
            this.flag_cart = false;
        }
        this.flagCart(this.flag_cart, this.product_giohang);
        console.log(this.product_giohang);
        this.showDialog = false;
    };
    CartComponent.prototype.cancel = function () {
        this.showDialog = false;
        return false;
    };
    CartComponent.prototype.flagCart = function (flag, cart) {
        if (flag) {
            console.log();
            if (typeof (Storage) !== "undefined") {
                sessionStorage.cart = JSON.stringify(cart);
            }
            else {
                document.write('Trình duyệt của bạn không hỗ trợ sessionStorage');
            }
            this.xyzUserListService.giohang = JSON.parse(sessionStorage.cart);
            this.total = 0;
            this.count_c = 0;
            for (var _i = 0; _i < cart.length; _i++) {
                this.total = this.total + cart[_i][0].subtotal;
                this.count_c = this.count_c + Number(cart[_i][0].qty);
            }
            sessionStorage.total = JSON.stringify(this.total);
            this.xyzUserListService.emitChange(this.count_c);
            sessionStorage.count_cart = this.count_c;
            this.xyzUserListService.count_cart = this.count_c;
        }
    };
    CartComponent.prototype.ngAfterViewInit = function () {
        jQuery(window).on('load', function () {
            jQuery(document).on("click", ".js-home", function () {
                jQuery('#mainslider').removeData("flexslider");
                jQuery('#mainslider').flexslider({
                    animation: "slide",
                    start: function (slider) {
                        jQuery('body').removeClass('loading');
                    }
                });
            });
        });
    };
    CartComponent.prototype.fcshowDialog = function (id) {
        this.showDialog = true;
        this.deleteId = id;
    };
    CartComponent.prototype.validateNumber = function (n) {
        if (n == '') {
            this.showDialogvc = true;
        }
    };
    CartComponent.prototype.update = function (value, id, e) {
        if (value == '0') {
            this.fcshowDialog(id);
        }
        console.log(typeof value);
        for (var _i = 0; _i < this.product_giohang.length; _i++) {
            var num = this.product_giohang[_i];
            if (num[0].id == id) {
                num[0].qty = value;
                num[0].subtotal = value * num[0].price;
                this.flag_cart = true;
                break;
            }
            else {
                this.flag_cart = false;
            }
        }
        this.flagCart(this.flag_cart, this.product_giohang);
    };
    return CartComponent;
}());
CartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-cart',
        template: __webpack_require__(578),
        styles: [__webpack_require__(496)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__home_service__["a" /* XyzUserListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__home_service__["a" /* XyzUserListService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */]) === "function" && _b || Object])
], CartComponent);

var _a, _b;
//# sourceMappingURL=cart.component.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoryComponent = (function () {
    function CategoryComponent(xyzUserListService, activatedRoute) {
        var _this = this;
        this.xyzUserListService = xyzUserListService;
        this.activatedRoute = activatedRoute;
        xyzUserListService.changeEmitted2.subscribe(function (text) {
            _this.flag_search1 = text;
            console.log(_this.flag_search1);
        });
    }
    CategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.activatedRoute.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.xyzUserListService.getproduct_cate(_this.id).subscribe(function (response) {
                _this.products_cate = response.product_cate.data;
                _this.menu_cate = response.menu_cate;
                // pagination
                _this.current_page = response.product_cate.current_page;
                _this.total = response.product_cate.total;
                _this.last_page = Array(response.product_cate.last_page);
                _this._last_page = response.product_cate.last_page;
                _this.per_page = response.product_cate.per_page;
                _this.disableNext = true;
                _this.disablePrev = false;
            });
        });
        this.xyzUserListService.get().subscribe(function (response) {
            _this.products_order = response.products_buy;
            _this.lasted_product = response.products;
        });
        this.link_img = this.xyzUserListService.link_img;
        this.domain = this.xyzUserListService.domain;
    };
    CategoryComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    CategoryComponent.prototype.addcart = function (id) {
        this.xyzUserListService.addcart(id);
    };
    CategoryComponent.prototype.pageNumber = function (_number) {
        var _this = this;
        this.current_page = _number;
        if (this.current_page == 1) {
            this.disablePrev = false;
            this.disableNext = true;
        }
        else if (this.current_page == this._last_page) {
            this.disableNext = false;
            this.disablePrev = true;
        }
        else {
            this.disablePrev = true;
            this.disableNext = true;
        }
        var result = this.xyzUserListService.getMoreTodos(this.id, this.current_page);
        result.subscribe(function (response) {
            _this.products_cate = response.product_cate.data;
            console.log(_this.products_cate);
        });
        return false;
    };
    return CategoryComponent;
}());
CategoryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-category',
        template: __webpack_require__(579),
        styles: [__webpack_require__(497)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__home_service__["a" /* XyzUserListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__home_service__["a" /* XyzUserListService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object])
], CategoryComponent);

var _a, _b;
//# sourceMappingURL=category.component.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CheckoutComponent = (function () {
    function CheckoutComponent(xyzUserListService, router) {
        var _this = this;
        this.xyzUserListService = xyzUserListService;
        this.router = router;
        this.showDialog = false;
        this.obj = {};
        this.cartx = [];
        xyzUserListService.changeEmitted2.subscribe(function (text) {
            _this.flag_search1 = text;
            console.log(_this.flag_search1);
        });
    }
    CheckoutComponent.prototype.ngOnInit = function () {
        if ((localStorage.getItem("id") == null) && (sessionStorage.id == null)) {
            this.id_user = 0;
            this.is_member = 0;
        }
        else {
            this.is_member = 1;
            if (localStorage.getItem("id") !== null) {
                this.id_user = localStorage.getItem("id");
                this.name1 = localStorage.getItem("name");
                this.email1 = localStorage.getItem("email");
            }
            if (sessionStorage.id !== null) {
                this.id_user = sessionStorage.id;
                this.name1 = sessionStorage.name;
                this.email1 = sessionStorage.email;
            }
        }
        //if (localStorage.getItem("cart") === null) {
        if (sessionStorage.cart == null || JSON.parse(sessionStorage.cart).length <= 0) {
            this.no_product = true;
        }
        else {
            this.no_product = false;
            //this.product_giohang = JSON.parse(localStorage.getItem('cart'));
            this.product_giohang = JSON.parse(sessionStorage.cart);
            //this.total = JSON.parse(localStorage.getItem('total'));
            this.total = JSON.parse(sessionStorage.total);
            for (var _i = 0; _i < this.product_giohang.length; _i++) {
                var element = {};
                this.id1 = this.product_giohang[_i][0].id;
                var qty1 = this.product_giohang[_i][0].qty;
                element[this.id1] = qty1;
                this.cartx.push(element);
            }
        }
        console.log(this.id_user);
        this.link_img = this.xyzUserListService.link_img;
        this.domain = this.xyzUserListService.domain;
    };
    CheckoutComponent.prototype.checkout = function (form) {
        var _this = this;
        var order = {
            email: form.value.email,
            name: form.value.name,
            phone: form.value.phone,
            address: form.value.address,
            products: this.cartx,
            is_member: this.is_member,
            user_id: this.id_user
        };
        console.log(order);
        this.xyzUserListService.checkout(order)
            .subscribe(function (response) {
            //localStorage.removeItem("cart");
            delete sessionStorage.cart;
            delete sessionStorage.count_cart;
            delete sessionStorage.total;
            _this.xyzUserListService.emitChange('');
            setTimeout(function () {
                _this.showDialog = true;
            }, 300);
        }, function (err) {
            _this.error = err;
            alert(_this.error);
        });
    };
    CheckoutComponent.prototype.ngAfterViewInit = function () {
        // jQuery(window).on('load', function () {
        //   jQuery(document).on("click", ".js-home", function () {
        //     jQuery('#mainslider').removeData("flexslider");
        //     (<any>jQuery('#mainslider')).flexslider({
        //       animation: "slide",
        //       start: function (slider) {
        //         jQuery('body').removeClass('loading');
        //       }
        //     });
        //   });
        // });
    };
    CheckoutComponent.prototype.hidepop = function () {
        this.showDialog = false;
    };
    return CheckoutComponent;
}());
CheckoutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-checkout',
        template: __webpack_require__(580),
        styles: [__webpack_require__(498)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__home_service__["a" /* XyzUserListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__home_service__["a" /* XyzUserListService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */]) === "function" && _b || Object])
], CheckoutComponent);

var _a, _b;
//# sourceMappingURL=checkout.component.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__collapse_collapse_component__ = __webpack_require__(159);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollapseGroupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CollapseGroupComponent = (function () {
    function CollapseGroupComponent() {
        this.multiple = true;
        this._subscriptions = [];
    }
    CollapseGroupComponent.prototype.ngOnInit = function () {
    };
    CollapseGroupComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.initListener();
        this._changeSubs = this.collapses.changes.subscribe(function () {
            _this.clearListener();
            _this.initListener();
        });
    };
    CollapseGroupComponent.prototype.initListener = function () {
        var _this = this;
        this.collapses.forEach(function (collapse) {
            var subscription = collapse.selectedChange.subscribe(function (coll) {
                if (!_this.multiple && coll.selected) {
                    _this.toggleCollapse(coll);
                }
            });
            _this._subscriptions.push(subscription);
        });
    };
    CollapseGroupComponent.prototype.toggleCollapse = function (collapse) {
        this.collapses.forEach(function (c) {
            if (c.collapseId != collapse.collapseId) {
                c.selected = false;
            }
        });
    };
    CollapseGroupComponent.prototype.clearListener = function () {
        if (this._subscriptions && this._subscriptions.length) {
            this._subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
        }
        this._subscriptions = [];
    };
    CollapseGroupComponent.prototype.ngOnDestroy = function () {
        this.clearListener();
        if (this._changeSubs) {
            this._changeSubs.unsubscribe();
        }
    };
    return CollapseGroupComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChildren"])(__WEBPACK_IMPORTED_MODULE_1__collapse_collapse_component__["a" /* CollapseComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"]) === "function" && _a || Object)
], CollapseGroupComponent.prototype, "collapses", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], CollapseGroupComponent.prototype, "multiple", void 0);
CollapseGroupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'tp-collapse-group',
        template: __webpack_require__(581),
        styles: [__webpack_require__(499)]
    }),
    __metadata("design:paramtypes", [])
], CollapseGroupComponent);

var _a;
//# sourceMappingURL=collapse-group.component.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__account__ = __webpack_require__(92);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactComponent = (function () {
    function ContactComponent(router, xyzUserListService) {
        var _this = this;
        this.router = router;
        this.xyzUserListService = xyzUserListService;
        this.visibility = 'shown';
        this.isVisible = true;
        this.account = new __WEBPACK_IMPORTED_MODULE_3__account__["a" /* Account */]('', '', '');
        xyzUserListService.changeEmitted2.subscribe(function (text) {
            _this.flag_search1 = text;
            console.log(_this.flag_search1);
        });
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.contact = function (form) {
        var _this = this;
        var data = {
            name: form.value.name,
            email: form.value.email,
            url: form.value.url,
            messagee: form.value.messagee
        };
        var result = this.xyzUserListService.contact(data);
        result.subscribe(function (data) {
            if (data.success == 'yes') {
                _this.flag_success = true;
                _this.isVisible = !_this.isVisible;
                _this.visibility = _this.isVisible ? 'shown' : 'hidden';
                form.reset();
            }
        }, function (errorData) {
        });
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-contact',
        template: __webpack_require__(583),
        styles: [__webpack_require__(501)],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["trigger"])('visibilityChanged', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["state"])('shown', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["style"])({ opacity: 1 })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["state"])('hidden', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["style"])({ opacity: 0 })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["transition"])('* => *', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["animate"])('5s'))
            ])
        ],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__home_service__["a" /* XyzUserListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__home_service__["a" /* XyzUserListService */]) === "function" && _b || Object])
], ContactComponent);

var _a, _b;
//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailComponent = (function () {
    function DetailComponent(xyzUserListService, activatedRoute) {
        var _this = this;
        this.xyzUserListService = xyzUserListService;
        this.activatedRoute = activatedRoute;
        xyzUserListService.changeEmitted2.subscribe(function (text) {
            _this.flag_search1 = text;
            console.log(_this.flag_search1);
        });
    }
    DetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.activatedRoute.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.xyzUserListService.getdetail_product(_this.id).subscribe(function (response) {
                _this.products_detail = response.product_cate;
                console.log(_this.products_detail);
                _this.name_product_detail = _this.products_detail.name;
                _this.price_product_detail = _this.products_detail.price;
                _this.image_product_detail = _this.products_detail.image;
                _this.des_product_detail = _this.products_detail.description;
                _this.id_product_detail = _this.products_detail.id;
                //related product
                _this.related_product = response.product_related;
                if (_this.related_product.length <= 0) {
                    _this.no_product_related = true;
                }
                else {
                    _this.no_product_related = false;
                }
                _this.images = response.image;
            });
        });
        this.link_img = this.xyzUserListService.link_img;
        this.domain = this.xyzUserListService.domain;
    };
    DetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    DetailComponent.prototype.addcart = function (id) {
        this.xyzUserListService.addcart(id);
    };
    DetailComponent.prototype.ngAfterViewInit = function () {
        //  jQuery(window).on('load', function () {
        //     jQuery(document).on("click", "#js-click .thumbnail img", function () {
        //       jQuery('#largeImage').attr('src', $(this).attr('src'));
        //     });
        //   });
        (function ($) {
            jQuery(document).on("click", "#js-click .thumbnail img", function () {
                jQuery('#largeImage').attr('src', $(this).attr('src'));
            });
        })(jQuery);
    };
    return DetailComponent;
}());
DetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-detail',
        template: __webpack_require__(584),
        styles: [__webpack_require__(502)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__home_service__["a" /* XyzUserListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__home_service__["a" /* XyzUserListService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object])
], DetailComponent);

var _a, _b;
//# sourceMappingURL=detail.component.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__(120);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DialogComponent = (function () {
    function DialogComponent() {
        this.closable = true;
        this.visibleChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    DialogComponent.prototype.ngOnInit = function () { };
    DialogComponent.prototype.close = function () {
        this.visible = false;
        this.visibleChange.emit(this.visible);
    };
    return DialogComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], DialogComponent.prototype, "closable", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], DialogComponent.prototype, "visible", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], DialogComponent.prototype, "visibleChange", void 0);
DialogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dialog',
        template: __webpack_require__(585),
        styles: [__webpack_require__(503)],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* trigger */])('dialog', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* transition */])('void => *', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ transform: 'scale3d(.3, .3, .3)' }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* animate */])(100)
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* transition */])('* => void', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* animate */])(100, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ transform: 'scale3d(.0, .0, .0)' }))
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [])
], DialogComponent);

var _a;
//# sourceMappingURL=dialog.component.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_service__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailAvailableValidatorDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmailAvailableValidatorDirective = EmailAvailableValidatorDirective_1 = (function () {
    function EmailAvailableValidatorDirective(usersService) {
        this.usersService = usersService;
        if ((localStorage.getItem("id") == null)) {
            this.id = '0';
        }
        else {
            this.id = localStorage.getItem("id");
        }
        if ((sessionStorage.id == null)) {
            this.id = '0';
        }
        else {
            this.id = sessionStorage.id;
        }
        console.log(this.id);
    }
    EmailAvailableValidatorDirective.prototype.validate = function (c) {
        return this.validateEmailAvailableFactory(c.value);
    };
    EmailAvailableValidatorDirective.prototype.validateEmailAvailableFactory = function (email) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.usersService.validate_email_user(email, _this.id)
                .subscribe(function (data) {
                if (data.success === 'yes') {
                    resolve({
                        emailAvailable: true
                    });
                }
                else {
                    resolve(null);
                }
            }, function (error) {
                resolve(null);
            });
        });
    };
    return EmailAvailableValidatorDirective;
}());
EmailAvailableValidatorDirective = EmailAvailableValidatorDirective_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[emailAvailable][formControlName],[emailAvailable][formControl],[emailAvailable][ngModel]',
        providers: [
            {
                provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NG_ASYNC_VALIDATORS */],
                useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return EmailAvailableValidatorDirective_1; }), multi: true
            }
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__home_service__["a" /* XyzUserListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__home_service__["a" /* XyzUserListService */]) === "function" && _a || Object])
], EmailAvailableValidatorDirective);

var EmailAvailableValidatorDirective_1, _a;
//# sourceMappingURL=email-available-validator.directive.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(121);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EqualValidatorDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var EqualValidatorDirective = EqualValidatorDirective_1 = (function () {
    function EqualValidatorDirective(validateEqual, reverse) {
        this.validateEqual = validateEqual;
        this.reverse = reverse;
    }
    Object.defineProperty(EqualValidatorDirective.prototype, "isReverse", {
        get: function () {
            if (!this.reverse)
                return false;
            return this.reverse === 'true' ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    EqualValidatorDirective.prototype.validate = function (c) {
        // self value
        var v = c.value;
        // control vlaue
        var e = c.root.get(this.validateEqual);
        // value not equal
        if (e && v !== e.value && !this.isReverse) {
            return {
                validateEqual: false
            };
        }
        // value equal and reverse
        if (e && v === e.value && this.isReverse) {
            delete e.errors['validateEqual'];
            if (!Object.keys(e.errors).length)
                e.setErrors(null);
        }
        // value not equal and reverse
        if (e && v !== e.value && this.isReverse) {
            e.setErrors({
                validateEqual: false
            });
        }
        return null;
    };
    return EqualValidatorDirective;
}());
EqualValidatorDirective = EqualValidatorDirective_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NG_VALIDATORS */], useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return EqualValidatorDirective_1; }), multi: true }
        ]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Attribute"])('validateEqual')),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Attribute"])('reverse')),
    __metadata("design:paramtypes", [String, String])
], EqualValidatorDirective);

var EqualValidatorDirective_1;
//# sourceMappingURL=equal-validator.directive.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__faq__ = __webpack_require__(324);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var FaqComponent = (function () {
    function FaqComponent() {
        this.posts = [];
    }
    FaqComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.posts = __WEBPACK_IMPORTED_MODULE_1__faq__["a" /* POSTS */].slice();
        }, 500);
    };
    return FaqComponent;
}());
FaqComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-faq',
        template: __webpack_require__(586),
        styles: [__webpack_require__(504)]
    })
], FaqComponent);

//# sourceMappingURL=faq.component.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return POSTS; });
var POSTS = [{
        id: 8,
        title: "dolorem dolore est ipsam",
        body: "dignissimos aperiam dolorem qui eum facilis quibusdam animi sint suscipit qui sint possimus cum quaerat magni maiores excepturi ipsam ut commodi dolor voluptatum modi aut vitae"
    },
    {
        id: 9,
        title: "nesciunt iure omnis dolorem tempora et accusantium",
        body: "consectetur animi nesciunt iure dolore enim quia ad veniam autem ut quam aut nobis et est aut quod aut provident voluptas autem voluptas"
    },
    {
        id: 10,
        title: "optio molestias id quia eum",
        body: "quo et expedita modi cum officia vel magni doloribus qui repudiandae vero nisi sit quos veniam quod sed accusamus veritatis error"
    },
    {
        id: 11,
        title: "et ea vero quia laudantium autem",
        body: "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus accusamus in eum beatae sit vel qui neque voluptates ut commodi qui incidunt ut animi commodi"
    },
    {
        id: 12,
        title: "in quibusdam tempore odit est dolorem",
        body: "itaque id aut magnam praesentium quia et ea odit et ea voluptas et sapiente quia nihil amet occaecati quia id voluptatem incidunt ea est distinctio odio"
    },
    {
        id: 13,
        title: "dolorum ut in voluptas mollitia et saepe quo animi",
        body: "aut dicta possimus sint mollitia voluptas commodi quo doloremque iste corrupti reiciendis voluptatem eius rerum sit cumque quod eligendi laborum minima perferendis recusandae assumenda consectetur porro architecto ipsum ipsam"
    },
    {
        id: 14,
        title: "voluptatem eligendi optio",
        body: "fuga et accusamus dolorum perferendis illo voluptas non doloremque neque facere ad qui dolorum molestiae beatae sed aut voluptas totam sit illum"
    },
    {
        id: 15,
        title: "eveniet quod temporibus",
        body: "reprehenderit quos placeat velit minima officia dolores impedit repudiandae molestiae nam voluptas recusandae quis delectus officiis harum fugiat vitae"
    }];
//# sourceMappingURL=faq.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(587),
        styles: [__webpack_require__(505)]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('id') || (sessionStorage.id)) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/dang-nhap']);
        return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], AuthGuard);

var _a;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__replace_pipe__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__format_num_vn_pipe__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HeaderComponent = (function () {
    function HeaderComponent(xyzUserListService, activatedRoute, router, replacePipe, formatNumVNPipe, sanitizer) {
        var _this = this;
        this.xyzUserListService = xyzUserListService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.replacePipe = replacePipe;
        this.formatNumVNPipe = formatNumVNPipe;
        this.sanitizer = sanitizer;
        this.showDialog = false;
        this.selectedCate = '';
        this.selectedCateChild = '';
        this.selectedPrice = '';
        this.del = false;
        this.onVote = new __WEBPACK_IMPORTED_MODULE_5__angular_core__["EventEmitter"]();
        xyzUserListService.changeEmitted$.subscribe(function (text) {
            _this.count_c = text;
        });
        xyzUserListService.changeEmitted_1.subscribe(function (text1) {
            _this.showDialog = text1;
        });
        xyzUserListService.changeEmitted3.subscribe(function (text) {
            _this.check_login = text;
            console.log(_this.check_login);
        });
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.xyzUserListService.weather().subscribe(function (response) {
            console.log(response.query.results.channel.item.condition.temp);
            _this.nhietdo = response.query.results.channel.item.condition.temp;
            _this.date = response.query.created;
            _this.day = response.query.results.channel.item.condition.text;
        }, function (errorData) {
        });
        this.xyzUserListService.get().subscribe(function (response) {
            _this.cates = response.cates;
        });
        this.link_img = this.xyzUserListService.link_img;
        this.domain = this.xyzUserListService.domain;
        this.xyzUserListService.get_menu().subscribe(function (response) {
            _this.menu = response;
            _this.isRequesting1 = false;
            _this.xyzUserListService.emitChange4(_this.isRequesting1);
        });
        if ((localStorage.getItem("login") !== null)) {
            this.flag_login = localStorage.getItem("login");
        }
        else if ((sessionStorage.login !== null)) {
            this.flag_login = sessionStorage.login;
        }
        if ((sessionStorage.count_cart !== null)) {
            this.count_c = sessionStorage.count_cart;
        }
        //console.log(this.flag_login);
    };
    HeaderComponent.prototype.contactTractByFn = function (index, item) {
        return item.id;
    };
    HeaderComponent.prototype.onFilter = function (filter, select_cate_search, selectedPrice) {
        var _this = this;
        this.selectedPrice = '';
        if (this.selectedCateChild == '') {
            this.select_cate_search = this.selectedCate;
            this.flag_price = false;
        }
        else {
            this.select_cate_search = this.selectedCateChild;
            this.flag_price = true;
        }
        if (this.selectedCateChild !== '') {
            this.wselect = '40%';
        }
        else {
            this.wselect = '20%';
        }
        //this.filter = filter;
        //console.log(this.selectedCateChild);
        if (this.filter == '') {
            setTimeout(function () {
                jQuery('#mainslider').removeData("flexslider");
                jQuery('#mainslider').flexslider({
                    animation: "slide",
                    start: function (slider) {
                        jQuery('body').removeClass('loading');
                    }
                });
            }, 10000);
            this.del = false;
            this.xyzUserListService.get().subscribe(function (response) {
                //console.log(response.products_buy);
                _this.products = response.products;
                _this.products_order = response.products_buy;
                _this.flag_search = false;
                _this.xyzUserListService.flag_search1 = false;
                _this.xyzUserListService.emitChange2(_this.xyzUserListService.flag_search1);
                _this.products_search = null;
                _this.selectedCate = '';
                _this.selectedCateChild = '';
                _this.selectedPrice = '';
                _this.noresult = '';
                _this.flag_price = false;
            });
            // const suggestions = document.querySelector('.html-search');
            // suggestions.innerHTML = '';
        }
        else {
            this.del = true;
            this.loadSearch = true;
            this.products_search = null;
            this.xyzUserListService.search(filter, select_cate_search, selectedPrice).subscribe(function (response) {
                _this.products_search = response;
                console.log(response);
                if (response == '') {
                    _this.noresult = 'Không có sản phẩm nào phù hợp với kết quả tìm kiếm của bạn. Vui lòng chọn lại !';
                }
                else {
                    _this.noresult = '';
                }
                _this.products = null;
                _this.products_order = null;
                _this.flag_search = true;
                _this.loadSearch = false;
                _this.xyzUserListService.flag_search1 = true;
                _this.xyzUserListService.emitChange2(_this.xyzUserListService.flag_search1);
            });
        }
    };
    HeaderComponent.prototype.CateChild = function (selectedCate) {
        var _this = this;
        this.selectedCate = selectedCate;
        this.xyzUserListService.catechild(selectedCate).subscribe(function (response) {
            _this.catechild = response;
            //console.log(response);
        });
        this.selectedCateChild = '';
    };
    HeaderComponent.prototype.thoat = function () {
        this.xyzUserListService.logOut();
        this.xyzUserListService.logoutSocial();
        this.router.navigate(['']);
        this.check_login = null;
        this.flag_login = null;
        delete sessionStorage.cart;
        delete sessionStorage.count_cart;
        delete sessionStorage.total;
        this.xyzUserListService.emitChange('');
    };
    HeaderComponent.prototype.onClear = function () {
        var _this = this;
        this.xyzUserListService.get().subscribe(function (response) {
            console.log(response.products_buy);
            _this.products = response.products;
            _this.products_order = response.products_buy;
        });
        this.filter = '';
        // const suggestions = document.querySelector('.html-search');
        // suggestions.innerHTML = '';
        this.flag_search = false;
        this.xyzUserListService.flag_search1 = false;
        this.xyzUserListService.emitChange2(this.xyzUserListService.flag_search1);
        this.products_search = null;
        this.selectedCate = '';
        this.selectedCateChild = '';
        this.noresult = '';
        this.flag_price = false;
        this.del = false;
    };
    HeaderComponent.prototype.ngAfterViewInit = function () {
        jQuery(window).on('load', function () {
            jQuery(document).on("click", ".js-home", function () {
                jQuery('#mainslider').removeData("flexslider");
                jQuery('#mainslider').flexslider({
                    animation: "slide",
                    start: function (slider) {
                        jQuery('body').removeClass('loading');
                    }
                });
            });
            // jQuery(document).on("keyup", "#search", function (e) {
            //   if (e.keyCode == 8 && jQuery(this).val() == '') {
            //     //  alert(1);
            //     setTimeout(function () {
            //       jQuery('#mainslider').removeData("flexslider");
            //       (<any>jQuery('#mainslider')).flexslider({
            //         animation: "slide",
            //         start: function (slider) {
            //           jQuery('body').removeClass('loading');
            //         }
            //       });
            //     }, 500);
            //   }
            // });
        });
        this.search11.nativeElement.focus();
    };
    HeaderComponent.prototype.menu_cap_2 = function (id) {
        var _this = this;
        this.id_menu_current = id;
        this.menu_2 = [];
        this.isRequesting = true;
        this.xyzUserListService.get_menu_cap2(id).subscribe(function (response) {
            _this.isRequesting = false;
            _this.menu_2 = response;
        });
    };
    HeaderComponent.prototype.clickmenu_c2 = function (id) {
        var _this = this;
        this.xyzUserListService.getproduct_cate(id).subscribe(function (response) {
            _this.product_ca = response.product_cate.data;
        });
        this.onVote.emit(this.product_ca);
    };
    HeaderComponent.prototype.addcart = function (id) {
        this.xyzUserListService.addcart(id);
    };
    HeaderComponent.prototype.hidepop = function () {
        this.showDialog = false;
        window.scrollTo(0, 0);
    };
    return HeaderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Output"])(),
    __metadata("design:type", Object)
], HeaderComponent.prototype, "onVote", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["ViewChild"])('search'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_core__["ElementRef"]) === "function" && _a || Object)
], HeaderComponent.prototype, "search11", void 0);
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(588),
        styles: [__webpack_require__(506)],
        providers: [__WEBPACK_IMPORTED_MODULE_0__replace_pipe__["a" /* ReplacePipe */]],
        encapsulation: __WEBPACK_IMPORTED_MODULE_5__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__home_service__["a" /* XyzUserListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__home_service__["a" /* XyzUserListService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__replace_pipe__["a" /* ReplacePipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__replace_pipe__["a" /* ReplacePipe */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__format_num_vn_pipe__["a" /* FormatNumVNPipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__format_num_vn_pipe__["a" /* FormatNumVNPipe */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["d" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["d" /* DomSanitizer */]) === "function" && _g || Object])
], HeaderComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(xyzUserListService, elementRef) {
        var _this = this;
        this.xyzUserListService = xyzUserListService;
        this.elementRef = elementRef;
        this.selectedCate = '';
        this.selectedCateChild = '';
        this.selectedPrice = '';
        this.temp_pro = [];
        this.load = false;
        xyzUserListService.changeEmitted2.subscribe(function (text) {
            _this.flag_search1 = text;
            // console.log(this.flag_search1);
        });
        xyzUserListService.changeEmitted4.subscribe(function (text) {
            _this.isRequesting2 = text;
            console.log(_this.isRequesting2);
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.scrollTo(0, 0);
        this.isRequesting1 = true;
        this.xyzUserListService.get().subscribe(function (response) {
            _this.isRequesting1 = false;
            console.log(_this.isRequesting1);
            //console.log(response.products_buy);
            _this.products = response.products;
            _this.products_order = response.products_buy;
            _this.cates = response.cates;
        });
        this.link_img = this.xyzUserListService.link_img;
        this.domain = this.xyzUserListService.domain;
    };
    HomeComponent.prototype.addcart = function (id) {
        this.xyzUserListService.addcart(id);
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
        jQuery(this.slider.nativeElement).flexslider({
            animation: "slide",
            start: function (slider) {
                __WEBPACK_IMPORTED_MODULE_2_jquery__('body').removeClass('loading');
            }
        });
        this.load = true;
    };
    return HomeComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('slider'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"]) === "function" && _a || Object)
], HomeComponent.prototype, "slider", void 0);
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(589),
        styles: [__webpack_require__(507)],
        encapsulation: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__home_service__["a" /* XyzUserListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__home_service__["a" /* XyzUserListService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"]) === "function" && _c || Object])
], HomeComponent);

var _a, _b, _c;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__account__ = __webpack_require__(92);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var InfoComponent = (function () {
    function InfoComponent(xyzUserListService, router) {
        var _this = this;
        this.xyzUserListService = xyzUserListService;
        this.router = router;
        this.visibility = 'shown';
        this.isVisible = true;
        this.editPassword = '';
        this.account = new __WEBPACK_IMPORTED_MODULE_5__account__["a" /* Account */]('', '', '');
        this.isDirty = false;
        this.showDialog = false;
        this.active = false;
        this.flagshow = false;
        this.tab = false;
        this.flagEmailOld = false;
        this.obs = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
        this.obs$ = this.obs.asObservable();
        this.obs1 = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
        this.obs11 = this.obs1.asObservable();
        xyzUserListService.changeEmitted2.subscribe(function (text) {
            _this.flag_search1 = text;
            console.log(_this.flag_search1);
        });
    }
    InfoComponent.prototype.handleDialogButton = function () {
        var _this = this;
        var prom = new Promise(function (resolve, reject) {
            _this.obs$.subscribe(function (result) {
                //handle when response susscess
                if (result) {
                    resolve(true);
                }
                else {
                    _this.showDialog = false;
                    reject(false);
                }
            });
            _this.obs11.subscribe(function (result) {
                // console.log(result);
                //handle when response susscess
                if (result) {
                    _this.showDialog = false;
                    reject(false);
                }
                else {
                    resolve(true);
                }
            });
        });
        return prom;
    };
    // @ViewChild('name') nameChange: ElementRef;
    InfoComponent.prototype.canDeactivate = function () {
        //isDirty check su thay doi cua form
        if (this.isDirty) {
            this.showDialog = true;
            return this.handleDialogButton()
                .catch(function () {
                return false;
            });
        }
        else {
            return Promise.resolve(true)
                .catch(function () {
                return false;
            });
        }
        //return window.confirm('WARNING: You have unsaved changes. Press Cancel to go back and save these changes, or OK to lose these changes.');
        // }
        // return Promise.resolve(true);
    };
    InfoComponent.prototype.loading = function () {
        this.products_order$ = this.xyzUserListService.getOrderUser(this.id);
        this.tab = true;
        // this.isRequesting = true;
        // this.sub = this.xyzUserListService.getOrderUser(this.id).subscribe((response) => {
        //   this.products_order = response;
        //   this.isRequesting = false;
        //   console.log(this.products_order);
        //   if (this.products_order.length <= 0 || this.products_order == []) {
        //     this.no_product = true;
        //   }
        //   else {
        //     this.no_product = false;
        //   }
        // });
    };
    InfoComponent.prototype.ngOnInit = function () {
        if ((localStorage.getItem("id") == null)) {
            this.check_token = true;
        }
        else {
            this.check_token = false;
            this.account.name = localStorage.getItem("name");
            this.account.email = localStorage.getItem("email");
            this.emailOld = localStorage.getItem("email");
            this.id = localStorage.getItem("id");
        }
        if ((sessionStorage.id == null)) {
            this.check_token = true;
        }
        else {
            this.check_token = false;
            this.account.name = sessionStorage.name;
            this.account.email = sessionStorage.email;
            this.id = sessionStorage.id;
            this.flag_info = sessionStorage.login;
        }
        this.link_img = this.xyzUserListService.link_img;
        this.domain = this.xyzUserListService.domain;
    };
    InfoComponent.prototype.detail_order = function (id) {
        var _this = this;
        this.xyzUserListService.getOrderUserDetail(id).subscribe(function (response) {
            _this.detail_order_product = response;
            var total = 0;
            for (var _i = 0; _i < response.length; _i++) {
                var product = response[_i];
                console.log(product.price);
                total += (product.price * product.qty);
            }
            _this.sTotal = total;
        });
    };
    InfoComponent.prototype.updateInfo = function (form) {
        var _this = this;
        this.account.email = form.value.email;
        this.account.name = form.value.name;
        this.account.password = form.value.password;
        var result = this.xyzUserListService.updateInfo(this.account, this.id);
        result.subscribe(function (data) {
            console.log(data);
            if (data.status == 'yes') {
                _this.flag_success = true;
                _this.isVisible = !_this.isVisible;
                console.log(_this.isVisible);
                _this.visibility = _this.isVisible ? 'shown' : 'hidden';
                form.controls.password.reset();
                form.controls.confirmPassword.reset();
                _this.router.navigate(['/thong-tin']);
            }
        }, function (errorData) {
            console.log(errorData);
        });
    };
    InfoComponent.prototype.checkemail_same = function (em, id) {
        var _this = this;
        this.flag_validate_email = false;
        var result = this.xyzUserListService.validate_email_user(em, this.id);
        result.subscribe(function (data) {
            if (data.success === 'yes') {
                _this.flag_validate_email = true;
            }
            else if (data.success === 'old') {
                _this.flag_validate_email_old = true;
            }
        }, function (errorData) {
        });
    };
    InfoComponent.prototype.doSomething = function (newValue) {
        this.account.email = newValue;
        console.clear();
        console.log(newValue);
        this.emailNew = newValue;
        if (this.emailNew == this.emailOld) {
            this.flagEmailOld = true;
        }
    };
    InfoComponent.prototype.ngAfterViewInit = function () {
        __WEBPACK_IMPORTED_MODULE_4_jquery__(document).ready(function () {
            __WEBPACK_IMPORTED_MODULE_4_jquery__('ul.tabs li').click(function () {
                var tab = __WEBPACK_IMPORTED_MODULE_4_jquery__(this).data('tab');
                __WEBPACK_IMPORTED_MODULE_4_jquery__('ul.tabs li').removeClass('current');
                __WEBPACK_IMPORTED_MODULE_4_jquery__('.tab-container').removeClass('current');
                __WEBPACK_IMPORTED_MODULE_4_jquery__(this).addClass('current');
                __WEBPACK_IMPORTED_MODULE_4_jquery__("#" + tab).addClass('current');
            });
            var appendthis = ("<div class='modal-overlay js-modal-close'></div>");
            __WEBPACK_IMPORTED_MODULE_4_jquery__(document).on("click", "a[data-modal-id]", function (e) {
                e.preventDefault();
                __WEBPACK_IMPORTED_MODULE_4_jquery__("body").append(appendthis);
                __WEBPACK_IMPORTED_MODULE_4_jquery__(".modal-overlay").fadeTo(500, 0.7);
                //$(".js-modalbox").fadeIn(500);
                var modalBox = __WEBPACK_IMPORTED_MODULE_4_jquery__(this).attr('data-modal-id');
                __WEBPACK_IMPORTED_MODULE_4_jquery__('#' + modalBox).fadeIn(__WEBPACK_IMPORTED_MODULE_4_jquery__(this).data());
            });
            __WEBPACK_IMPORTED_MODULE_4_jquery__(document).on("click", ".js-modal-close, .modal-overlay", function () {
                __WEBPACK_IMPORTED_MODULE_4_jquery__(".modal-box, .modal-overlay").fadeOut(500, function () {
                    __WEBPACK_IMPORTED_MODULE_4_jquery__(".modal-overlay").remove();
                });
            });
        });
    };
    return InfoComponent;
}());
InfoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'app-info',
        template: __webpack_require__(590),
        styles: [__webpack_require__(508)],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["trigger"])('visibilityChanged', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["state"])('shown', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["style"])({ opacity: 1 })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["state"])('hidden', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["style"])({ opacity: 0 })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["transition"])('* => *', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["animate"])('5s'))
            ])
        ],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__home_service__["a" /* XyzUserListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__home_service__["a" /* XyzUserListService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object])
], InfoComponent);

var _a, _b;
//# sourceMappingURL=info.component.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TempConverterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TempConverterPipe = (function () {
    function TempConverterPipe() {
    }
    TempConverterPipe.prototype.convertTemp = function (value, type, useSymbol) {
        var temp = 0;
        var symbol = 'C';
        if (type === 'C') {
            temp = (value - 32) * 5 / 9;
        }
        else {
            temp = value * 9 / 5 + 32;
            symbol = 'F';
        }
        if (useSymbol) {
            return temp.toFixed(1) + symbol;
        }
        return temp.toFixed(1);
    };
    TempConverterPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var type = 'C';
        var useSymbol = false;
        if (args && args.length > 0) {
            useSymbol = !!args[0];
        }
        if (args && args.length > 1) {
            type = args[1].toUpperCase();
        }
        if (value !== undefined && value !== null && !isNaN(value)) {
            return this.convertTemp(value, type, useSymbol);
        }
        return null;
    };
    return TempConverterPipe;
}());
TempConverterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'tempConverter'
    })
], TempConverterPipe);

//# sourceMappingURL=temp-converter.pipe.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanDeactivateGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CanDeactivateGuard = (function () {
    function CanDeactivateGuard() {
    }
    CanDeactivateGuard.prototype.canDeactivate = function (component) {
        return component.canDeactivate ? component.canDeactivate() : true;
    };
    return CanDeactivateGuard;
}());
CanDeactivateGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], CanDeactivateGuard);

//# sourceMappingURL=saveinfo.guard.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__account__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase_app__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase_app__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SigninComponent = (function () {
    function SigninComponent(router, xyzUserListService, afAuth, db) {
        var _this = this;
        this.router = router;
        this.xyzUserListService = xyzUserListService;
        this.afAuth = afAuth;
        this.db = db;
        this.account = new __WEBPACK_IMPORTED_MODULE_3__account__["a" /* Account */]('', '', '');
        this.submitted = false;
        this.isChecked = false;
        xyzUserListService.changeEmitted2.subscribe(function (text) {
            _this.flag_search1 = text;
            console.log(_this.flag_search1);
        });
        this.user = afAuth.authState;
    }
    SigninComponent.prototype.loginGoogle = function () {
        var _this = this;
        this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_6_firebase_app__["auth"].GoogleAuthProvider()).then(function (val) {
            sessionStorage.id = val.user.uid;
            sessionStorage.name = val.user.displayName;
            sessionStorage.login = '2';
            _this.flag_logout = true;
            _this.xyzUserListService.emitChange3(_this.flag_logout);
            _this.router.navigate(['/thong-tin']);
        }).catch(function (err) {
            _this.flag_social = true;
            _this.error_mg = err.message;
        });
    };
    SigninComponent.prototype.loginFacebook = function () {
        var _this = this;
        this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_6_firebase_app__["auth"].FacebookAuthProvider()).then(function (val) {
            sessionStorage.id = val.user.uid;
            sessionStorage.name = val.user.displayName;
            sessionStorage.login = '2';
            _this.flag_logout = true;
            _this.xyzUserListService.emitChange3(_this.flag_logout);
            _this.router.navigate(['/thong-tin']);
        }).catch(function (err) {
            _this.flag_social = true;
            _this.error_mg = err.message;
        });
    };
    SigninComponent.prototype.loginGithub = function () {
        var _this = this;
        this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_6_firebase_app__["auth"].GithubAuthProvider()).then(function (val) {
            sessionStorage.id = val.user.uid;
            sessionStorage.name = val.user.displayName;
            sessionStorage.login = '2';
            _this.flag_logout = true;
            _this.xyzUserListService.emitChange3(_this.flag_logout);
            _this.router.navigate(['/thong-tin']);
        }).catch(function (err) {
            _this.flag_social = true;
            _this.error_mg = err.message;
        });
    };
    SigninComponent.prototype.loginTwitter = function () {
        var _this = this;
        this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_6_firebase_app__["auth"].TwitterAuthProvider()).then(function (val) {
            sessionStorage.id = val.user.uid;
            sessionStorage.name = val.user.displayName;
            sessionStorage.login = '2';
            _this.flag_logout = true;
            _this.xyzUserListService.emitChange3(_this.flag_logout);
            _this.router.navigate(['/thong-tin']);
        }).catch(function (err) {
            _this.flag_social = true;
            _this.error_mg = err.message;
        });
    };
    SigninComponent.prototype.ngOnInit = function () {
        //if (localStorage.getItem("token") === null) {
        if ((sessionStorage.id == null) && (localStorage.getItem("id") == null)) {
            //this.authService.logOut();
        }
        else {
            this.router.navigate(['/thong-tin']);
        }
    };
    SigninComponent.prototype.checkemail_same = function (em) {
        var _this = this;
        this.flag_validate_email = false;
        if (/(.+)@(.+){2,}\.(.+){2,}/.test(em)) {
            var result = this.xyzUserListService.validate_email_user(em, '0');
            result.subscribe(function (data) {
                console.log(data);
                if (data.success === 'no') {
                    _this.flag_validate_email = true;
                }
            }, function (errorData) {
            });
        }
    };
    SigninComponent.prototype.doCheck = function ($event) {
        this.isChecked = !this.isChecked;
        console.log(this.isChecked);
    };
    SigninComponent.prototype.onSignin = function (form) {
        var _this = this;
        this.account.email = form.value.email;
        this.account.password = form.value.password;
        this.xyzUserListService.signin(this.account, this.isChecked)
            .subscribe(function (tokenData) {
            _this.flag_validate_pass = false;
            console.log(tokenData);
            _this.router.navigate(['/thong-tin']);
        }, function (error) {
            console.log(error);
            if (error.status == 401) {
                _this.flag_validate_pass = true;
            }
            _this.flag_error = true;
            _this.error1 = error.json();
        });
    };
    return SigninComponent;
}());
SigninComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-signin',
        template: __webpack_require__(591),
        styles: [__webpack_require__(509)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__home_service__["a" /* XyzUserListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__home_service__["a" /* XyzUserListService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _d || Object])
], SigninComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=signin.component.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__account__ = __webpack_require__(92);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = (function () {
    function SignupComponent(router, xyzUserListService) {
        var _this = this;
        this.router = router;
        this.xyzUserListService = xyzUserListService;
        this.visibility = 'shown';
        this.isVisible = true;
        this.account = new __WEBPACK_IMPORTED_MODULE_3__account__["a" /* Account */]('', '', '');
        xyzUserListService.changeEmitted2.subscribe(function (text) {
            _this.flag_search1 = text;
            console.log(_this.flag_search1);
        });
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.onSignup = function (form) {
        var _this = this;
        this.account.email = form.value.email;
        this.account.name = form.value.name;
        this.account.password = form.value.password;
        console.log(this.account);
        this.xyzUserListService.signup(this.account)
            .subscribe(function (response) {
            console.log(response.message);
            if (response.status == 'yes') {
                _this.flag_success = true;
                _this.isVisible = !_this.isVisible;
                _this.flag_validate_email = false;
                console.log(_this.isVisible);
                _this.visibility = _this.isVisible ? 'shown' : 'hidden';
                setTimeout(function () {
                    _this.router.navigate(['/dang-nhap']);
                }, 2000);
                // this.router.navigate(['/dang-nhap']);
            }
        }, function (error) { return console.log(error); });
    };
    SignupComponent.prototype.checkemail_same = function (em) {
        //this.flag_validate_email = false;
        this.result = this.xyzUserListService.validate_email_user(em, '0');
        // result.subscribe((data) => {
        //   if (data.success === 'yes') {
        //     this.flag_validate_email = true;
        //   }
        // },
        //   (errorData) => {
        //   });
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-signup',
        template: __webpack_require__(592),
        styles: [__webpack_require__(510)],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["trigger"])('visibilityChanged', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["state"])('shown', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["style"])({ opacity: 1 })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["state"])('hidden', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["style"])({ opacity: 0 })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["transition"])('* => *', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["animate"])('5s'))
            ])
        ],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__home_service__["a" /* XyzUserListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__home_service__["a" /* XyzUserListService */]) === "function" && _b || Object])
], SignupComponent);

var _a, _b;
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SpinnerComponent = (function () {
    function SpinnerComponent() {
        this.isDelayedRunning = false;
        this.delay = 300;
    }
    Object.defineProperty(SpinnerComponent.prototype, "isRunning", {
        set: function (value) {
            var _this = this;
            if (!value) {
                this.cancelTimeout();
                this.isDelayedRunning = false;
                return;
            }
            if (this.currentTimeout) {
                return;
            }
            this.currentTimeout = window.setTimeout(function () {
                _this.isDelayedRunning = value;
                _this.cancelTimeout();
            }, this.delay);
        },
        enumerable: true,
        configurable: true
    });
    SpinnerComponent.prototype.cancelTimeout = function () {
        clearTimeout(this.currentTimeout);
        this.currentTimeout = undefined;
    };
    SpinnerComponent.prototype.ngOnDestroy = function () {
        this.cancelTimeout();
    };
    return SpinnerComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], SpinnerComponent.prototype, "delay", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], SpinnerComponent.prototype, "isRunning", null);
SpinnerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-spinner',
        template: __webpack_require__(593),
        styles: [__webpack_require__(511)],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    })
], SpinnerComponent);

//# sourceMappingURL=spinner.component.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 495:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, "/*:host /deep/ .sk-circle{\r\n    margin-top: 50%;\r\n}*/\r\n\r\n\r\n/*:host /deep/ .sk-circle .sk-child:before{\r\nbackground-color: #f25c27;\r\n}*/\r\n\r\n\r\n/*:host /deep/ app-spinner{\r\n    display: block;\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 100vh;\r\n    background-color: rgba(0, 0, 0, 0.7);\r\n    z-index: 99999;\r\n}\r\n:host /deep/ .sk-circle-wrap {\r\n    top: 150px;\r\n}\r\n:host /deep/ .sk-circle .sk-child:before{\r\n    background-color: red;\r\n\r\n}*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 496:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, ":host /deep/ .btn-wrap{\r\n    text-align: right;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 497:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, "ul.bestseller li{\r\n    float: left;\r\n    width: 100%;\r\n}\r\n #categorygrid .thumbnail img{\r\n    height: 300px;\r\n    width: 100% !important;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 498:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, ".checkoutstep{\r\n    display: block;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 499:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, ".collapsible {\r\n  border-top: 1px solid #f25c27;\r\n  border-right: 1px solid #f25c27;\r\n  border-left: 1px solid #f25c27;\r\n  margin: .5rem 0 1rem 0;\r\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);\r\n  padding: 0;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 500:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, "tp-collapse {\r\n  display: block;\r\n}\r\ntp-collapse:last-child .collapsible-body {\r\n  border-bottom: 2px solid #fff;\r\n}\r\n\r\n.collapsible-header {\r\n  display: block;\r\n  cursor: pointer;\r\n  min-height: 3rem;\r\n  line-height: 3rem;\r\n  padding: 0 1rem;\r\n  background-color: #f25c27;\r\n  color: #fff;\r\n  border-bottom: 1px solid #fff;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n}\r\n\r\n.collapsible-body {\r\n  display: none;\r\n  border-bottom: 1px solid #ddd;\r\n  padding: 2rem;\r\n}\r\n.collapsible-body.active {\r\n  display: block;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 501:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 502:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, " #related .thumbnail img{\r\n    height: 300px;\r\n    width: 100% !important;\r\n  }\r\n  .thumbnail .price {\r\n      margin-top: 10px;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 503:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, ".overlay {\r\n  position: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  z-index: 999;\r\n}\r\n\r\n.dialog {\r\n  z-index: 1000;\r\n  position: fixed;\r\n  right: 0;\r\n  left: 0;\r\n  top: 20px;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n  width: 90%;\r\n  max-width: 520px;\r\n  background-color: #fff;\r\n  padding: 12px;\r\n  box-shadow: 0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 13px 19px 2px rgba(0, 0, 0, 0.14), 0 5px 24px 4px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .dialog {\r\n    top: 40px;\r\n  }\r\n}\r\n\r\n.dialog__close-btn {\r\n  border: 0;\r\n  background: none;\r\n  color: #2d2d2d;\r\n  position: absolute;\r\n  padding: 0;\r\n    top: -3px;\r\n    right: 2px;\r\n  font-size: 1.2em;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 504:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 505:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 506:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, ".pdl15 {\r\n    padding-left: 20px;\r\n    box-sizing: border-box;\r\n}\r\n\r\n#featured .thumbnail img {\r\n    height: 300px;\r\n    width: 100% !important;\r\n}\r\n\r\n.thumbnail .price {\r\n    margin-top: 10px;\r\n}\r\n\r\n#categorymenu .sk-circle {\r\n    margin: 0;\r\n    width: 20px;\r\n    height: 20px;\r\n}\r\n\r\n.hl {\r\n    background-color: #f25c27;\r\n}\r\n\r\n\r\n\r\n#searchFlag .sk-circle-wrap {\r\n    margin-top: 240px;\r\n    position: fixed;\r\n    z-index: 9999;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 507:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, " #featured .thumbnail img,#latest .thumbnail img{\r\n    height: 300px;\r\n    width: 100% !important;\r\n  }\r\n  .thumbnail .price {\r\n      margin-top: 10px;\r\n  }\r\n  #home .sk-circle-wrap {\r\n    margin-top: 0;\r\n    position: fixed;\r\n    z-index: 9999;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 508:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, "ul.tabs {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n.table th, .table td{\r\n  text-align: center;\r\n}\r\nul.tabs > li.tab-link {\r\n  list-style-type: none;\r\n  display: inline-block;\r\n  padding: 10px 15px;\r\n  cursor: pointer;\r\n}\r\n\r\nul.tabs > li.tab-link.current {\r\n  background: #ededed;\r\n}\r\n\r\n.tab-container {\r\n  padding: 20px;\r\n  display: none;\r\n  background: #ededed;\r\n}\r\n\r\n.tab-container.current {\r\n  display: block;\r\n}\r\n\r\n.modal-box {\r\n  display: none;\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n  z-index: 1000;\r\n  width: 98%;\r\n  background: white;\r\n  border-bottom: 1px solid #aaa;\r\n  border-radius: 4px;\r\n  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);\r\n  border: 1px solid rgba(0, 0, 0, 0.1);\r\n  background-clip: padding-box;\r\n}\r\n\r\n.modal-box header,\r\n.modal-box .modal-header {\r\n  padding: 1.25em 1.5em;\r\n  border-bottom: 1px solid #ddd;\r\n}\r\n\r\n.modal-box header h3,\r\n.modal-box header h4,\r\n.modal-box .modal-header h3,\r\n.modal-box .modal-header h4 {\r\n  margin: 0;\r\n}\r\n\r\n.modal-box .modal-body {\r\n  padding: 2em 1.5em;\r\n}\r\n\r\n.modal-box footer,\r\n.modal-box .modal-footer {\r\n  padding: 1em;\r\n  border-top: 1px solid #ddd;\r\n  background: rgba(0, 0, 0, 0.02);\r\n  text-align: right;\r\n}\r\n\r\n.modal-overlay {\r\n  opacity: 0;\r\n  filter: alpha(opacity=0);\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 900;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: rgba(0, 0, 0, 0.3) !important;\r\n}\r\n\r\na.close {\r\n  line-height: 1;\r\n  font-size: 1.5em;\r\n  position: absolute;\r\n  top: 5%;\r\n  right: 2%;\r\n  text-decoration: none;\r\n  color: #bbb;\r\n}\r\n\r\na.close:hover {\r\n  color: #222;\r\n  transition: color 1s ease;\r\n}\r\n\r\n@media (min-width: 32em) {\r\n  .modal-box {\r\n    width: 70%;\r\n  }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 509:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports
exports.push([module.i, "@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css);", ""]);

// module
exports.push([module.i, ".ng-valid[required], .ng-valid.required  {\r\n  border-left: 5px solid #42A948; /* green */\r\n}\r\n\r\n.ng-invalid:not(form)  {\r\n  border-left: 5px solid #a94442; /* red */\r\n}\r\n\r\n/*----- Social Links -----*/\r\n.social-nav {\r\n    padding: 0;\r\n    list-style: none;\r\n    margin: -10px 0 0 -10px;\r\n}\r\n.social-nav li {\r\n    float: left;\r\n    margin: 10px 0 10px 10px;\r\n    list-style: none;\r\n}\r\n.social-nav a {\r\n    display: inline-block;\r\n    float: left;\r\n    width: 48px;\r\n    height: 48px;\r\n    font-size: 20px;\r\n    color: #fff;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n    text-align: center;\r\n    line-height: 48px;\r\n    background: #000;\r\n    position: relative;\r\n    transition: all 0.5s;\r\n    -ms-transition: all 0.5s;\r\n    -webkit-transition: all 0.5s;\r\n    -moz-transition: all 0.5s;\r\n}\r\n.social-nav a {\r\n    overflow: hidden;\r\n    font-size: 26px;\r\n    border-radius: 4px;\r\n}\r\n\r\n.social-nav .twitter {\r\n    background: #00ACED;\r\n}\r\n.social-nav .twitter:hover {\r\ntext-shadow: 0px 0px #0087ba, 1px 1px #0087ba, 2px 2px #0087ba, 3px 3px #0087ba, 4px 4px #0087ba, 5px 5px #0087ba, 6px 6px #0087ba, 7px 7px #0087ba, 8px 8px #0087ba, 9px 9px #0087ba, 10px 10px #0087ba, 11px 11px #0087ba, 12px 12px #0087ba, 13px 13px #0087ba, 14px 14px #0087ba, 15px 15px #0087ba, 16px 16px #0087ba, 17px 17px #0087ba, 18px 18px #0087ba, 19px 19px #0087ba, 20px 20px #0087ba, 21px 21px #0087ba, 22px 22px #0087ba, 23px 23px #0087ba, 24px 24px #0087ba, 25px 25px #0087ba, 26px 26px #0087ba, 27px 27px #0087ba, 28px 28px #0087ba, 29px 29px #0087ba, 30px 30px #0087ba;\r\n}\r\n.social-nav .facebook {\r\n    background: #3B579D;\r\n}  \r\n.social-nav .facebook:hover {\r\ntext-shadow: 0px 0px #2d4278, 1px 1px #2d4278, 2px 2px #2d4278, 3px 3px #2d4278, 4px 4px #2d4278, 5px 5px #2d4278, 6px 6px #2d4278, 7px 7px #2d4278, 8px 8px #2d4278, 9px 9px #2d4278, 10px 10px #2d4278, 11px 11px #2d4278, 12px 12px #2d4278, 13px 13px #2d4278, 14px 14px #2d4278, 15px 15px #2d4278, 16px 16px #2d4278, 17px 17px #2d4278, 18px 18px #2d4278, 19px 19px #2d4278, 20px 20px #2d4278, 21px 21px #2d4278, 22px 22px #2d4278, 23px 23px #2d4278, 24px 24px #2d4278, 25px 25px #2d4278, 26px 26px #2d4278, 27px 27px #2d4278, 28px 28px #2d4278, 29px 29px #2d4278, 30px 30px #2d4278;\r\n}\r\n.social-nav .google {\r\n    background: #DD4A3A;\r\n}\r\n.social-nav .google:hover {\r\n text-shadow: 0px 0px #c23122, 1px 1px #c23122, 2px 2px #c23122, 3px 3px #c23122, 4px 4px #c23122, 5px 5px #c23122, 6px 6px #c23122, 7px 7px #c23122, 8px 8px #c23122, 9px 9px #c23122, 10px 10px #c23122, 11px 11px #c23122, 12px 12px #c23122, 13px 13px #c23122, 14px 14px #c23122, 15px 15px #c23122, 16px 16px #c23122, 17px 17px #c23122, 18px 18px #c23122, 19px 19px #c23122, 20px 20px #c23122, 21px 21px #c23122, 22px 22px #c23122, 23px 23px #c23122, 24px 24px #c23122, 25px 25px #c23122, 26px 26px #c23122, 27px 27px #c23122, 28px 28px #c23122, 29px 29px #c23122, 30px 30px #c23122;\r\n}\r\n\r\n.social-nav .github {\r\n    background: #444;\r\n}\r\n.social-nav .github:hover {\r\n text-shadow: 0px 0px #000, 1px 1px #000, 2px 2px #000, 3px 3px #000, 4px 4px #000, 5px 5px #000, 6px 6px #000, 7px 7px #000, 8px 8px #000, 9px 9px #000, 10px 10px #000, 11px 11px #000, 12px 12px #000, 13px 13px #000, 14px 14px #000, 15px 15px #000, 16px 16px #000, 17px 17px #000, 18px 18px #000, 19px 19px #000, 20px 20px #000, 21px 21px #000, 22px 22px #000, 23px 23px #000, 24px 24px #000, 25px 25px #000, 26px 26px #000, 27px 27px #000, 28px 28px #000, 29px 29px #000, 30px 30px #000;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 510:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 511:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, ".sk-circle {\r\n  margin: 100px auto;\r\n  width: 40px;\r\n  height: 40px;\r\n  position: relative;\r\n}\r\napp-spinner{\r\n  display: block;\r\n  position: relative;\r\n}\r\n.sk-circle .sk-child {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n}\r\n.sk-circle .sk-child:before {\r\n  content: '';\r\n  display: block;\r\n  margin: 0 auto;\r\n  width: 15%;\r\n  height: 15%;\r\n  background-color: #333;\r\n  border-radius: 100%;\r\n  -webkit-animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;\r\n          animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;\r\n}\r\n.sk-circle .sk-circle2 {\r\n  -webkit-transform: rotate(30deg);\r\n          transform: rotate(30deg); }\r\n.sk-circle .sk-circle3 {\r\n  -webkit-transform: rotate(60deg);\r\n          transform: rotate(60deg); }\r\n.sk-circle .sk-circle4 {\r\n  -webkit-transform: rotate(90deg);\r\n          transform: rotate(90deg); }\r\n.sk-circle .sk-circle5 {\r\n  -webkit-transform: rotate(120deg);\r\n          transform: rotate(120deg); }\r\n.sk-circle .sk-circle6 {\r\n  -webkit-transform: rotate(150deg);\r\n          transform: rotate(150deg); }\r\n.sk-circle .sk-circle7 {\r\n  -webkit-transform: rotate(180deg);\r\n          transform: rotate(180deg); }\r\n.sk-circle .sk-circle8 {\r\n  -webkit-transform: rotate(210deg);\r\n          transform: rotate(210deg); }\r\n.sk-circle .sk-circle9 {\r\n  -webkit-transform: rotate(240deg);\r\n          transform: rotate(240deg); }\r\n.sk-circle .sk-circle10 {\r\n  -webkit-transform: rotate(270deg);\r\n          transform: rotate(270deg); }\r\n.sk-circle .sk-circle11 {\r\n  -webkit-transform: rotate(300deg);\r\n          transform: rotate(300deg); }\r\n.sk-circle .sk-circle12 {\r\n  -webkit-transform: rotate(330deg);\r\n          transform: rotate(330deg); }\r\n.sk-circle .sk-circle2:before {\r\n  -webkit-animation-delay: -1.1s;\r\n          animation-delay: -1.1s; }\r\n.sk-circle .sk-circle3:before {\r\n  -webkit-animation-delay: -1s;\r\n          animation-delay: -1s; }\r\n.sk-circle .sk-circle4:before {\r\n  -webkit-animation-delay: -0.9s;\r\n          animation-delay: -0.9s; }\r\n.sk-circle .sk-circle5:before {\r\n  -webkit-animation-delay: -0.8s;\r\n          animation-delay: -0.8s; }\r\n.sk-circle .sk-circle6:before {\r\n  -webkit-animation-delay: -0.7s;\r\n          animation-delay: -0.7s; }\r\n.sk-circle .sk-circle7:before {\r\n  -webkit-animation-delay: -0.6s;\r\n          animation-delay: -0.6s; }\r\n.sk-circle .sk-circle8:before {\r\n  -webkit-animation-delay: -0.5s;\r\n          animation-delay: -0.5s; }\r\n.sk-circle .sk-circle9:before {\r\n  -webkit-animation-delay: -0.4s;\r\n          animation-delay: -0.4s; }\r\n.sk-circle .sk-circle10:before {\r\n  -webkit-animation-delay: -0.3s;\r\n          animation-delay: -0.3s; }\r\n.sk-circle .sk-circle11:before {\r\n  -webkit-animation-delay: -0.2s;\r\n          animation-delay: -0.2s; }\r\n.sk-circle .sk-circle12:before {\r\n  -webkit-animation-delay: -0.1s;\r\n          animation-delay: -0.1s; }\r\n\r\n@-webkit-keyframes sk-circleBounceDelay {\r\n  0%, 80%, 100% {\r\n    -webkit-transform: scale(0);\r\n            transform: scale(0);\r\n  } 40% {\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1);\r\n  }\r\n}\r\n\r\n@keyframes sk-circleBounceDelay {\r\n  0%, 80%, 100% {\r\n    -webkit-transform: scale(0);\r\n            transform: scale(0);\r\n  } 40% {\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1);\r\n  }\r\n}\r\n.sk-circle-wrap{\r\n  position: absolute;\r\n  width: 100%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 577:
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>"

/***/ }),

/***/ 578:
/***/ (function(module, exports) {

module.exports = "<div id=\"maincontainer\" *ngIf=\"!flag_search1\">\r\n    <section id=\"product\">\r\n        <div class=\"container\">\r\n            <!--  breadcrumb -->\r\n            <ul class=\"breadcrumb\">\r\n                <li>\r\n                    <a routerLink=\"\" class=\"js-home\">Trang chủ</a>\r\n                    <span class=\"divider\">/</span>\r\n                </li>\r\n                <li class=\"active\"> Giỏ hàng</li>\r\n            </ul>\r\n            <h1 class=\"heading1\"><span class=\"maintext\"> Giỏ hàng</span><span class=\"subtext\"> Tất cả sản phẩm trong giỏ hàng</span></h1>\r\n            <!-- Cart-->\r\n            <div class=\"cart-info\" *ngIf=\"!no_product\">\r\n                <table class=\"table table-striped table-bordered\">\r\n                    <tr>\r\n                        <th class=\"image\">Hình ảnh</th>\r\n                        <th class=\"name\">Tên sản phẩm</th>\r\n                        <th class=\"quantity\">Số lượng</th>\r\n                        <th class=\"total\">Xóa</th>\r\n                        <th class=\"price\">Giá</th>\r\n                        <th class=\"total\">Tổng tiền</th>\r\n                    </tr>\r\n                    <tr *ngFor=\"let item of product_giohang\">\r\n                        <td class=\"image\">\r\n                            <a><img title=\"product\" alt=\"product\" src=\"{{link_img}}{{item[0].options.img}}\" height=\"50\" width=\"50\"></a>\r\n                        </td>\r\n                        <td class=\"name\"><a>{{item[0].name}}</a></td>\r\n\r\n                        <td class=\"quantity\"><input type=\"number\" size=\"1\" [value]=\"item[0].qty\" name=\"quantity\" class=\"span1\" (change)=\"update(textName.value,textName.id,$event)\" #textName [attr.id]=\"item[0].id\" min=\"0\" (keyup)=\"validateNumber(textName.value)\">\r\n                        </td>\r\n\r\n                        <td class=\"total\">\r\n                            <a (click)=\"fcshowDialog(item[0].id)\"><img class=\"tooltip-test\" data-original-title=\"Remove\" src=\"{{domain}}public/user/img/remove.png\" alt=\"\"></a>\r\n                        </td>\r\n\r\n\r\n                        <td class=\"price\">{{item[0].price | formatNumVN }} D</td>\r\n                        <td class=\"total\">{{item[0].subtotal | formatNumVN }} D</td>\r\n\r\n                    </tr>\r\n                </table>\r\n            </div>\r\n            <app-dialog [(visible)]=\"showDialog\">\r\n                <p>Bạn có chắc muốn xóa sản phẩm?</p>\r\n                <hr>\r\n                <div class=\"btn-wrap\">\r\n                    <button (click)=delete(deleteId) type=\"button\" class=\"btn btn-success\">OK</button>\r\n                    <button (click)=cancel() type=\"button\" class=\"btn btn-danger\">Cancel</button>\r\n                </div>\r\n            </app-dialog>\r\n            <div class=\"container\" *ngIf=\"!no_product\">\r\n                <div class=\"pull-right\">\r\n                    <div class=\"span4 pull-right\">\r\n                        <table class=\"table table-striped table-bordered \">\r\n                            <tr>\r\n                                <td><span class=\"extra bold totalamout\">Tổng tiền :</span></td>\r\n                                <td><span class=\"bold totalamout\" id=\"totalamout\">{{total | formatNumVN }} D</span></td>\r\n                            </tr>\r\n                        </table>\r\n                        <button routerLink=\"/thanh-toan\" class=\"btn btn-orange pull-right\">Thanh toán</button>\r\n                        <button routerLink=\"\" class=\"btn btn-orange pull-right mr10\">Tiếp tục mua sắm</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"container\" *ngIf=\"no_product\">\r\n                <p>Không có sản phẩm nào trong giỏ hàng. Vui lòng quay lại mua sắm !</p>\r\n                <p>\r\n                    <a routerLink=\"\"><button class=\"btn btn-orange pull-left\">Tiếp tục mua sắm</button></a>\r\n                </p>\r\n            </div>\r\n        </div>\r\n    </section>\r\n</div>\r\n<app-dialog [(visible)]=\"showDialogvc\">\r\n    <p class=\"alert alert-danger\" style=\"margin:0\">Vui lòng nhập số</p>\r\n</app-dialog>"

/***/ }),

/***/ 579:
/***/ (function(module, exports) {

module.exports = "<section id=\"product\" *ngIf=\"!flag_search1\" #container>\r\n    <div class=\"container\">\r\n        <!--  breadcrumb -->\r\n        <ul class=\"breadcrumb\">\r\n            <li>\r\n                <a routerLink=\"\" class=\"js-home\">Trang chủ</a>\r\n                <span class=\"divider\">/</span>\r\n            </li>\r\n            <li class=\"active\">Danh mục sản phẩm</li>\r\n        </ul>\r\n        <div class=\"row\">\r\n            <!-- Sidebar Start-->\r\n            <aside class=\"span3\">\r\n                <!-- Category-->\r\n                <div class=\"sidewidt\">\r\n                    <h2 class=\"heading2\"><span>Danh mục</span></h2>\r\n                    <ul class=\"nav nav-list categories\">\r\n                        <li *ngFor=\"let item of menu_cate\">\r\n                            <a routerLink=\"/loai-san-pham/{{item.id}}/{{item.alias}}\">{{item.name}}</a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n                <!--  Best Seller -->\r\n                <div class=\"sidewidt\">\r\n                    <h2 class=\"heading2\"><span>Bán chạy nhất</span></h2>\r\n                    <ul class=\"bestseller\">\r\n                        <li *ngFor=\"let item of products_order\">\r\n                            <img width=\"50\" height=\"50\" [lazyLoad]=\"link_img + item.image\" [offset]=\"'25'\" [defaultImage]=\"'https://i.giphy.com/3oEjI6SIIHBdRxXI40.gif'\" [scrollObservable]=\"container.ionScroll\">\r\n                            <a class=\"productname\" routerLink=\"/chi-tiet-san-pham/{{item.id}}/{{item.alias}}\">{{item.name}}</a>\r\n                            <span class=\"price\">{{item.price | formatNumVN }} D</span>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n                <!-- Latest Product -->\r\n                <div class=\"sidewidt\">\r\n                    <h2 class=\"heading2\"><span>Mới nhất</span></h2>\r\n                    <ul class=\"bestseller\">\r\n                        <li *ngFor=\"let item of lasted_product | slice:0:4; let i=index\">\r\n                            <img width=\"50\" height=\"50\" [lazyLoad]=\"link_img + item.image\" [offset]=\"'25'\" [defaultImage]=\"'https://i.giphy.com/3oEjI6SIIHBdRxXI40.gif'\" [scrollObservable]=\"container.ionScroll\">\r\n                            <a class=\"productname\" routerLink=\"/chi-tiet-san-pham/{{item.id}}/{{item.alias}}\">{{item.name}}</a>\r\n                            <span class=\"price\">{{item.price | formatNumVN }} D</span>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </aside>\r\n            <!-- Sidebar End-->\r\n            <!-- Category-->\r\n            <div class=\"span9\">\r\n                <!-- Category Products-->\r\n                <section id=\"category\">\r\n                    <div class=\"row\">\r\n                        <div class=\"span9\">\r\n                            <!-- Category-->\r\n                            <section id=\"categorygrid\">\r\n                                <ul class=\"thumbnails grid\">\r\n                                    <li class=\"span3\" *ngFor=\"let item of products_cate\">\r\n                                        <a class=\"prdocutname\" routerLink=\"/chi-tiet-san-pham/{{item.id}}/{{item.alias}}\">{{item.name}}</a>\r\n                                        <div class=\"thumbnail\">\r\n                                            <span class=\"sale tooltip-test\">Sale</span>\r\n                                            <a routerLink=\"/chi-tiet-san-pham/{{item.id}}/{{item.alias}}\"><img [lazyLoad]=\"link_img + item.image\" [offset]=\"'10'\" [defaultImage]=\"'https://i.giphy.com/3oEjI6SIIHBdRxXI40.gif'\" [scrollObservable]=\"container.ionScroll\"></a>\r\n                                            <div class=\"pricetag\">\r\n                                                <span class=\"spiral\"></span><a (click)=\"addcart(cart.id)\" class=\"productcart\" id=\"{{item.id}}\" #cart>ADD TO CART</a>\r\n                                                <div class=\"price\">\r\n                                                    <div class=\"pricenew\">{{item.price | formatNumVN }} D</div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </li>\r\n                                </ul>\r\n                                <div class=\"pagination pull-right\" *ngIf=\"total > per_page\">\r\n                                    <ul>\r\n                                        <li *ngIf=\"disablePrev\"><a (click)=\"pageNumber(current_page - 1)\" href=\"#\">Prev</a>\r\n                                        </li>\r\n                                        <li *ngFor=\"let number of last_page;let i = index\" [class.active]=\"current_page == i+1\">\r\n                                            <a href=\"#\" (click)=\"pageNumber(i+1)\" [style.text-decoration]=\"current_page == i+1 ? 'line-through' : ''\">{{ i+1 }}</a>\r\n                                        </li>\r\n                                        <li *ngIf=\"disableNext\"><a (click)=\"pageNumber(current_page + 1)\" href=\"#\">Next</a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                            </section>\r\n                        </div>\r\n                    </div>\r\n                </section>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ 580:
/***/ (function(module, exports) {

module.exports = "<div id=\"maincontainer\" *ngIf=\"!flag_search1\">\r\n    <section id=\"product\">\r\n        <div class=\"container\">\r\n            <!--  breadcrumb -->\r\n            <ul class=\"breadcrumb\">\r\n                <li>\r\n                    <a routerLink=\"\" class=\"js-home\">Trang chủ</a>\r\n                    <span class=\"divider\">/</span>\r\n                </li>\r\n                <li class=\"active\">Thanh toán</li>\r\n            </ul>\r\n            <form class=\"form-horizontal\" (ngSubmit)=\"checkout(f)\" #f=\"ngForm\">\r\n                <input type=\"hidden\" name=\"_token\" value=\"\">\r\n                <div class=\"row\">\r\n                    <!-- Account Login-->\r\n                    <div class=\"span9\">\r\n\r\n                        <div class=\"checkoutsteptitle\">Chi tiết giao hàng\r\n                            <a class=\"modify\"></a>\r\n                        </div>\r\n                        <div class=\"checkoutstep\">\r\n                            <div class=\"row\">\r\n                                <fieldset>\r\n                                    <div class=\"span4\">\r\n                                        <div class=\"control-group\">\r\n                                            <label class=\"control-label\">Họ và tên<span class=\"red\">*</span></label>\r\n                                            <div class=\"controls\">\r\n                                                <input type=\"text\" id=\"name\" class=\"form-control\" required minlength=\"4\" maxlength=\"24\" name=\"name\" [(ngModel)]=\"name1\" #name=\"ngModel\" value=\"{{name1}}\">\r\n                                                <div *ngIf=\"name.errors && (name.dirty || name.touched)\" class=\"alert alert-danger\">\r\n                                                    <div [hidden]=\"!name.errors.required\">\r\n                                                        Name is required\r\n                                                    </div>\r\n                                                    <div [hidden]=\"!name.errors.minlength\">\r\n                                                        Name must be at least 4 characters long.\r\n                                                    </div>\r\n                                                    <div [hidden]=\"!name.errors.maxlength\">\r\n                                                        Name cannot be more than 24 characters long.\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"control-group\">\r\n                                            <label class=\"control-label\">Địa chỉ<span class=\"red\">*</span></label>\r\n                                            <div class=\"controls\">\r\n                                                <input type=\"text\" id=\"address\" class=\"form-control\" required name=\"address\" [ngModel]=\"\" #address=\"ngModel\" value=\"{{address}}\">\r\n                                                <div *ngIf=\"address.errors && (address.dirty || address.touched)\" class=\"alert alert-danger\">\r\n                                                    <div [hidden]=\"!address.errors.required\">\r\n                                                        Address is required\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"control-group\">\r\n                                            <label class=\"control-label\">EMail<span class=\"red\">*</span></label>\r\n                                            <div class=\"controls\">\r\n\r\n                                                <input type=\"text\" id=\"email\" class=\"form-control\" required name=\"email\" [(ngModel)]=\"email1\" #email=\"ngModel\" value=\"{{email1}}\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\">\r\n                                                <div *ngIf=\"email.errors && (email.dirty || email.touched)\" class=\"alert alert-danger\">\r\n                                                    <div [hidden]=\"!email.errors.required\">\r\n                                                        Email is required\r\n                                                    </div>\r\n                                                    <div [hidden]=\"!email.errors.pattern\">\r\n                                                        Email is invalid\r\n                                                    </div>\r\n                                                </div>\r\n\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"control-group\">\r\n                                            <label class=\"control-label\">Di động:<span class=\"red\">*</span></label>\r\n                                            <div class=\"controls\">\r\n                                                <input type=\"text\" id=\"phone\" class=\"form-control\" required name=\"phone\" [ngModel]=\"\" #phone=\"ngModel\" value=\"{{phone}}\" pattern=\"^(01[2689]|09)[0-9]{8}$\">\r\n                                                <div *ngIf=\"phone.errors && (phone.dirty || phone.touched)\" class=\"alert alert-danger\">\r\n                                                    <div [hidden]=\"!phone.errors.required\">\r\n                                                        Phone is required\r\n                                                    </div>\r\n                                                    <div [hidden]=\"!phone.errors.pattern\">\r\n                                                        Phone is invalid\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </fieldset>\r\n\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"checkoutsteptitle\">Sản phẩm\r\n                            <a class=\"modify\"></a>\r\n                        </div>\r\n\r\n                        <div class=\"checkoutstep\" *ngIf=\"!no_product\">\r\n                            <div class=\"cart-info\">\r\n                                <table class=\"table table-striped table-bordered\">\r\n                                    <tr>\r\n                                        <th class=\"image\">Hình ảnh</th>\r\n                                        <th class=\"name\">Tên sản phẩm</th>\r\n\r\n                                        <th class=\"quantity\">Số lượng</th>\r\n                                        <th class=\"price\">Đơn giá</th>\r\n                                        <th class=\"total\">Tổng</th>\r\n                                    </tr>\r\n\r\n\r\n\r\n                                    <tr *ngFor=\"let item of product_giohang\">\r\n                                        <td class=\"image\">\r\n                                            <a href=\"#\"><img title=\"product\" alt=\"product\" src=\"{{link_img}}{{item[0].options.img}}\" height=\"50\" width=\"50\"></a>\r\n                                        </td>\r\n                                        <td class=\"name\"><a href=\"#\">{{item[0].name}}</a></td>\r\n                                        <td class=\"quantity\"><input type=\"text\" size=\"1\" value='{{item[0].qty}}' name=\"quantity\" class=\"span1 qty\" disabled=\"disabled\">\r\n                                        </td>\r\n\r\n                                        <td class=\"price\">{{item[0].price | formatNumVN }} D</td>\r\n                                        <td class=\"total\">{{item[0].subtotal | formatNumVN }} D</td>\r\n                                    </tr>\r\n\r\n\r\n                                </table>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"pull-right\">\r\n                                    <div class=\"span4 pull-right\">\r\n                                        <table class=\"table table-striped table-bordered \">\r\n                                            <tbody>\r\n                                                <tr>\r\n                                                    <td><span class=\"extra bold totalamout\">Tổng tiền :</span></td>\r\n                                                    <td><span class=\"bold totalamout\">{{total | formatNumVN }} D</span></td>\r\n                                                </tr>\r\n                                            </tbody>\r\n                                        </table>\r\n                                        <a><button [disabled]=\"!f.form.valid\" class=\"btn btn-orange pull-right\">Đặt hàng</button></a>\r\n                                        <a routerLink=\"/gio-hang\"><button class=\"btn btn-orange pull-right mr10\">Sửa giỏ hàng</button></a>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"container\" *ngIf=\"no_product\">\r\n                            <p>Không có sản phẩm nào trong giỏ hàng. Vui lòng quay lại mua sắm !</p>\r\n                            <p>\r\n                                <a routerLink=\"\"><button class=\"btn btn-orange pull-left\">Tiếp tục mua sắm</button></a>\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </section>\r\n</div>\r\n\r\n<app-dialog [(visible)]=\"showDialog\">\r\n    <p class=\"alert alert-success\" style=\"margin:0\">Xin chúc mừng! Bạn đã mua hàng thành công. Đơn hàng của bạn được gửi đồng thời tới email của bạn</p>\r\n    <p style=\"margin-top:10px\"><a routerLink=\"\"><button (click)=\"hidepop()\" class=\"btn btn-orange pull-right\">Về trang chủ</button></a></p>\r\n</app-dialog>"

/***/ }),

/***/ 581:
/***/ (function(module, exports) {

module.exports = "<div class=\"collapsible\">\r\n  <ng-content select=\"tp-collapse\"></ng-content>\r\n</div>"

/***/ }),

/***/ 582:
/***/ (function(module, exports) {

module.exports = "<header class=\"collapsible-header\" (click)=\"toggleSelected()\">\r\n  {{ title }}\r\n</header>\r\n<section class=\"collapsible-body\" [class.active]=\"selected\">\r\n  <ng-content></ng-content>\r\n</section>\r\n"

/***/ }),

/***/ 583:
/***/ (function(module, exports) {

module.exports = "<div id=\"maincontainer\" *ngIf=\"!flag_search1\">\r\n  <section id=\"product\">\r\n    <div class=\"container\">\r\n      <!--  breadcrumb -->\r\n      <ul class=\"breadcrumb\">\r\n        <li>\r\n          <a routerLink=\"\" class=\"js-home\">Trang chủ</a>\r\n          <span class=\"divider\">/</span>\r\n        </li>\r\n        <li class=\"active\">Liên hệ</li>\r\n      </ul>\r\n      <!-- Contact Us-->\r\n      <h1 class=\"heading1\"><span class=\"maintext\">Liên hệ</span><span class=\"subtext\"></span></h1>\r\n      <div class=\"row\">\r\n        <div class=\"span9\">\r\n\r\n          <form class=\"form-horizontal\" (ngSubmit)=\"contact(f)\" #f=\"ngForm\">\r\n\r\n            <fieldset>\r\n              <div class=\"control-group\">\r\n                <label for=\"name\" class=\"control-label\">Tên <span class=\"required\">*</span></label>\r\n                <div class=\"controls\">\r\n                  <input type=\"text\" id=\"name\" class=\"form-control\" required minlength=\"4\" maxlength=\"24\" name=\"name\" [(ngModel)]=\"account.name\"\r\n                    #name=\"ngModel\" value=\"{{name}}\">\r\n                  <div *ngIf=\"name.errors && (name.dirty || name.touched)\" class=\"alert alert-danger\">\r\n                    <div [hidden]=\"!name.errors.required\">\r\n                      Name is required\r\n                    </div>\r\n                    <div [hidden]=\"!name.errors.minlength\">\r\n                      Name must be at least 4 characters long.\r\n                    </div>\r\n                    <div [hidden]=\"!name.errors.maxlength\">\r\n                      Name cannot be more than 24 characters long.\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"control-group\">\r\n                <label for=\"email\" class=\"control-label\">Email <span class=\"required\">*</span></label>\r\n                <div class=\"controls\">\r\n                  <input type=\"text\" id=\"email\" class=\"form-control\" required name=\"email\" [(ngModel)]=\"account.email\" #email=\"ngModel\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\"\r\n                    value=\"{{email}}\">\r\n                  <div *ngIf=\"email.errors && (email.dirty || email.touched)\" class=\"alert alert-danger\">\r\n                    <div [hidden]=\"!email.errors.required\">\r\n                      Email is required\r\n                    </div>\r\n                    <div [hidden]=\"!email.errors.pattern\">\r\n                      Email is invalid\r\n                    </div>\r\n                  </div>\r\n\r\n\r\n\r\n                </div>\r\n              </div>\r\n              <div class=\"control-group\">\r\n                <label for=\"url\" class=\"control-label\">Website </label>\r\n                <div class=\"controls\">\r\n                  <input type=\"url\" class=\"form-control\" name=\"url\" [ngModel]=\"\" required pattern=\"https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)\"\r\n                    #url=\"ngModel\">\r\n\r\n                  <div *ngIf=\"url.errors && (url.dirty || url.touched)\" class=\"alert alert-danger\">\r\n                    <div [hidden]=\"!url.errors.required\">\r\n                      Url is required\r\n                    </div>\r\n                    <div [hidden]=\"!url.errors.pattern\">\r\n                      Url is invalid\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"control-group\">\r\n                <label for=\"message\" class=\"control-label\">Nội dung </label>\r\n                <div class=\"controls\">\r\n                  <textarea class=\"required\" rows=\"6\" cols=\"40\" id=\"message\" name=\"messagee\" [ngModel]=\"\" required #messagee=\"ngModel\"></textarea>\r\n                  <div *ngIf=\"messagee.errors && (messagee.dirty || messagee.touched)\" class=\"alert alert-danger\">\r\n                    <div [hidden]=\"!messagee.errors.required\">\r\n                      Messagee is required\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-actions\">\r\n                <button class=\"btn btn-orange\" id=\"submit_id\" [disabled]=\"!f.form.valid\">Gửi</button>\r\n                <button class=\"btn\" type=\"reset\">Xóa</button>\r\n              </div>\r\n              <div class=\"clearfix\"></div>\r\n              <div [@visibilityChanged]=\"visibility\" *ngIf=\"flag_success\" class=\"alert alert-success\" style=\"margin-top: 10px\">\r\n                Congratulations! You sent the message successfully\r\n              </div>\r\n            </fieldset>\r\n          </form>\r\n        </div>\r\n\r\n        <!-- Sidebar Start-->\r\n        <div class=\"span3\">\r\n          <aside>\r\n            <div class=\"sidewidt\">\r\n              <h2 class=\"heading2\"><span>Thông tin liên lạc</span></h2>\r\n              <p> Lorem Ipsum is simply<br> Lorem Ipsum is simply<br> Lorem Ipsum is simply<br>\r\n                <br> Phone: +84 905992386<br> Fax: (84) 905992386<br> Email: hunglaravel@gmail.com<br> Website: hunglaravel.com<br>\r\n              </p>\r\n            </div>\r\n          </aside>\r\n        </div>\r\n        <!-- Sidebar End-->\r\n\r\n      </div>\r\n    </div>\r\n  </section>\r\n</div>"

/***/ }),

/***/ 584:
/***/ (function(module, exports) {

module.exports = "<div id=\"maincontainer\" *ngIf=\"!flag_search1\" #container>\r\n\r\n    <section id=\"product\">\r\n        <div class=\"container\">\r\n            <!--  breadcrumb -->\r\n            <ul class=\"breadcrumb\">\r\n                <li>\r\n                    <a routerLink=\"\" class=\"js-home\">Trang chủ</a>\r\n                    <span class=\"divider\">/</span>\r\n                </li>\r\n                <li class=\"active\">Chi tiết sản phẩm</li>\r\n            </ul>\r\n            <!-- Product Details-->\r\n            <div class=\"row\">\r\n                <!-- Left Image-->\r\n                <div class=\"span5\">\r\n                    <ul class=\"thumbnails mainimage\">\r\n\r\n                        <li class=\"span5\">\r\n                            <a rel=\"position: 'inside' , showTitle: false, adjustX:-4, adjustY:-4\" class=\"thumbnail cloud-zoom\" href=\"{{link_img}}{{image_product_detail}}\">\r\n                                <img id=\"largeImage\" [lazyLoad]=\"link_img + image_product_detail\" [offset]=\"'100'\" [defaultImage]=\"'https://i.giphy.com/3oEjI6SIIHBdRxXI40.gif'\" [scrollObservable]=\"container.ionScroll\">\r\n                            </a>\r\n                        </li>\r\n\r\n                    </ul>\r\n                    <ul class=\"thumbnails mainimage\" id=\"js-click\">\r\n                        <li class=\"producthtumb\">\r\n                            <a class=\"thumbnail\">\r\n                                <img [lazyLoad]=\"link_img + image_product_detail\" [offset]=\"'50'\" [defaultImage]=\"'https://i.giphy.com/3oEjI6SIIHBdRxXI40.gif'\" [scrollObservable]=\"container.ionScroll\">\r\n                            </a>\r\n                        </li>\r\n\r\n                        <li class=\"producthtumb\" *ngFor=\"let item of images\">\r\n                            <a class=\"thumbnail\">\r\n                                <img [lazyLoad]=\"link_img +'/detail/'+ item.image\" [offset]=\"'50'\" [defaultImage]=\"'https://i.giphy.com/3oEjI6SIIHBdRxXI40.gif'\" [scrollObservable]=\"container.ionScroll\">\r\n                            </a>\r\n                        </li>\r\n\r\n\r\n                    </ul>\r\n                </div>\r\n                <!-- Right Details-->\r\n                <div class=\"span7\">\r\n                    <div class=\"row\">\r\n                        <div class=\"span7\">\r\n                            <h1 class=\"productname\"><span class=\"bgnone\">{{name_product_detail}}</span></h1>\r\n                            <div class=\"productprice\">\r\n                                <div class=\"productpageprice\">\r\n                                    <span class=\"spiral\"></span>{{price_product_detail | formatNumVN }} D</div>\r\n                            </div>\r\n                            <ul class=\"productpagecart\">\r\n                                <li><a (click)=\"addcart(cart.id)\" class=\"productcart\" id=\"{{id_product_detail}}\" #cart>ADD TO CART</a>\r\n                                </li>\r\n                            </ul>\r\n                            <!-- Product Description tab & comments-->\r\n                            <div class=\"productdesc\">\r\n                                <h2>Mô tả</h2>\r\n                                {{des_product_detail}}\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n    <!--  Related Products-->\r\n    <section id=\"related\" class=\"row\">\r\n        <div class=\"container\">\r\n            <h1 class=\"heading1\"><span class=\"maintext\">Sản phẩm liên quan</span></h1>\r\n            <ul class=\"thumbnails\">\r\n                <li class=\"span3\" *ngFor=\"let item of related_product\">\r\n                    <a class=\"prdocutname\" routerLink=\"/chi-tiet-san-pham/{{item.id}}/{{item.alias}}\">{{item.name}}</a>\r\n                    <div class=\"thumbnail\">\r\n                        <span class=\"sale tooltip-test\">Sale</span>\r\n                        <a routerLink=\"/chi-tiet-san-pham/{{item.id}}/{{item.alias}}\"><img [lazyLoad]=\"link_img + item.image\" [offset]=\"'100'\" [defaultImage]=\"'https://i.giphy.com/3oEjI6SIIHBdRxXI40.gif'\" [scrollObservable]=\"container.ionScroll\"></a>\r\n                        <div class=\"pricetag\">\r\n                            <span class=\"spiral\"></span><a (click)=\"addcart(cart.id)\" class=\"productcart\" id=\"{{id_product_detail}}\" #cart>ADD TO CART</a>\r\n                            <div class=\"price\">\r\n                                <div class=\"pricenew\">{{item.price | formatNumVN }} D</div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </li>\r\n\r\n            </ul>\r\n            <div class=\"container\" *ngIf=\"no_product_related\">\r\n                <p>Không có sản phẩm liên quan đến sản phẩm này</p>\r\n            </div>\r\n        </div>\r\n    </section>\r\n    <!-- Popular Brands-->\r\n</div>"

/***/ }),

/***/ 585:
/***/ (function(module, exports) {

module.exports = "<div [@dialog] *ngIf=\"visible\" class=\"dialog\">\r\n  <ng-content></ng-content>\r\n  <button *ngIf=\"closable\" (click)=\"close()\" aria-label=\"Close\" class=\"dialog__close-btn\">x</button>\r\n  \r\n</div>\r\n<div *ngIf=\"visible\" class=\"overlay\" (click)=\"close()\"></div>"

/***/ }),

/***/ 586:
/***/ (function(module, exports) {

module.exports = "<div id=\"maincontainer\">\r\n  <section id=\"product\">\r\n    <div class=\"container\">\r\n      <tp-collapse-group [multiple]=\"false\">\r\n        <tp-collapse *ngFor=\"let post of posts\" [title]=\"post.title\" [selected]=\"false\">\r\n          <div>\r\n            {{ post.body }}\r\n          </div>\r\n        </tp-collapse>\r\n      </tp-collapse-group>\r\n    </div>\r\n  </section>\r\n</div>"

/***/ }),

/***/ 587:
/***/ (function(module, exports) {

module.exports = "<!-- Footer -->\r\n<footer id=\"footer\">\r\n  <section class=\"footersocial\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"span3 aboutus\">\r\n          <h2>Về chúng tôi</h2>\r\n          <p>\r\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt facere incidunt aliquid, officia laborum debitis. Aliquam provident voluptatem, reiciendis unde quis harum maxime doloribus, a corrupti, facere eos dolor voluptate.\r\n          </p>\r\n        </div>\r\n        <div class=\"span3 contact\">\r\n          <h2>Liên hệ</h2>\r\n          <ul>\r\n            <li class=\"phone\"> +84 905992386</li>\r\n            <li class=\"email\"> laravelhung@gmail.com</li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"span3 twitter\">\r\n          <h2>Twitter </h2>\r\n          <p>coming soon</p>\r\n        </div>\r\n        <div class=\"span3 twitter\">\r\n          <h2>Facebook </h2>\r\n          <p>coming soon</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n  <section class=\"footerlinks\">\r\n    <div class=\"container\">\r\n      <div class=\"info\">\r\n        <ul>\r\n          <li><a href=\"#\">Chính sách bảo mật</a>\r\n          </li>\r\n          <li><a href=\"#\">Điều khoản và điều kiện</a>\r\n          </li>\r\n          <li><a href=\"#\">Đại lý</a>\r\n          </li>\r\n          <li><a href=\"#\">Tin tức</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <div id=\"footersocial\">\r\n        <a href=\"#\" title=\"Facebook\" class=\"facebook\">Facebook</a>\r\n        <a href=\"#\" title=\"Twitter\" class=\"twitter\">Twitter</a>\r\n        <a href=\"#\" title=\"Googleplus\" class=\"googleplus\">Googleplus</a>\r\n        <a href=\"#\" title=\"Skype\" class=\"skype\">Skype</a>\r\n      </div>\r\n    </div>\r\n  </section>\r\n  <section class=\"copyrightbottom\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"span6 textright pull-right\">Angular Shop @2017</div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n  <a id=\"gotop\">Back to top</a>\r\n</footer>"

/***/ }),

/***/ 588:
/***/ (function(module, exports) {

module.exports = "<!-- Header Start -->\r\n<app-spinner [isRunning]=\"loadSearch\" id=\"searchFlag\"></app-spinner>\r\n<ng-content></ng-content>\r\n<header>\r\n    <div class=\"headerstrip\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"span12\">\r\n                    <a routerLink=\"\" class=\"logo pull-left\"><img src=\"{{domain}}public/user/img/logo.png\" alt=\"SimpleOne\" title=\"SimpleOne\"></a>\r\n                    <!-- Top Nav Start -->\r\n                    <div class=\"pull-left\">\r\n                        <div class=\"navbar\" id=\"topnav\">\r\n                            <div class=\"navbar-inner\">\r\n                                <ul class=\"nav\">\r\n                                    <li><a class=\"home active\" routerLink=\"\">Trang chủ</a>\r\n                                    </li>\r\n                                    <li><a class=\"myaccount\" routerLink=\"/thong-tin\">Tài khoản</a>\r\n                                    </li>\r\n                                    <li><a class=\"shoppingcart\" routerLink=\"/gio-hang\">Giỏ hàng {{count_c}}</a>\r\n                                    </li>\r\n                                    <li><a class=\"checkout\" routerLink=\"/thanh-toan\">Thanh Toán</a>\r\n                                    </li>\r\n                                    <li><a class=\"shoppingcart\" routerLink=\"/faq\">FAQ</a>\r\n                                    </li>\r\n                                    <li *ngIf=\"check_login || (flag_login == 1) || (flag_login == 2)\"><a class=\"myaccount\" (click)=\"thoat()\">Thoát</a>\r\n                                    </li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <!-- Top Nav End -->\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"container\">\r\n        <h6 style=\"text-align: right;\">Thời tiết Đà Nẵng hôm nay {{ date | date:'fullDate' | uppercase }}, Nhiệt độ: {{ nhietdo | tempConverter}} C. {{day}}.</h6>\r\n    </div>\r\n    <div class=\"container\">\r\n\r\n        <div id=\"categorymenu\">\r\n            <nav class=\"subnav\">\r\n                <ul class=\"nav-pills categorymenu\">\r\n                    <li><a class=\"active\" routerLink=\"\">Trang chủ</a></li>\r\n                    <li *ngFor=\"let item of menu\" #name id=\"{{item.id}}\"><a on-mouseover=\"menu_cap_2(name.id)\">{{item.name}}</a>\r\n                        <div *ngIf=\"id_menu_current == item.id\">\r\n                            <app-spinner [isRunning]=\"isRequesting\"></app-spinner>\r\n\r\n                            <ul>\r\n                                <li *ngFor=\"let item of menu_2\" #name2 id=\"{{item.id}}\"><a routerLink=\"/loai-san-pham/{{item.id}}/{{item.alias}}\" class=\"js-img\">{{item.name}}</a>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                    </li>\r\n                    <li><a routerLink=\"/lien-he\">Liên hệ</a>\r\n                    </li>\r\n                </ul>\r\n            </nav>\r\n        </div>\r\n    </div>\r\n    <section id=\"featured\" class=\"row\">\r\n        <div class=\"container\">\r\n\r\n            <div class=\"input-group\" style=\"width: 20%;float: left\">\r\n                <input #search style=\"width: 100%\" type=\"text\" class=\"form-control\" placeholder=\"Tìm kiểm sản phẩm\" [(ngModel)]=\"filter\" (keyup)=\"onFilter(filter,select_cate_search,selectedPrice)\" id=\"search\">\r\n            </div>\r\n            <div style=\"float: left\" *ngIf=\"flag_search\" [style.color]=\"wselect\" class=\"pdl15\">\r\n                <select [(ngModel)]=\"selectedCate\" (change)=\"CateChild(selectedCate)\" (change)=\"onFilter(filter,selectedCate,selectedPrice)\">\r\n          <option value=\"\">Chọn danh mục tìm kiếm</option>\r\n          <option value=\"{{cate.id}}\" *ngFor=\"let cate of cates\">{{cate.name}}</option>\r\n      </select>\r\n                <select [(ngModel)]=\"selectedCateChild\" *ngIf=\"selectedCate!==''\" (change)=\"onFilter(filter,selectedCateChild,selectedPrice)\">\r\n          <option value=\"\">Chọn danh mục tìm kiếm</option>\r\n          <option value=\"{{cate.id}}\" *ngFor=\"let cate of catechild\">{{cate.name}}</option>\r\n      </select>\r\n            </div>\r\n            <div style=\"width: 20%;float: left\" *ngIf=\"flag_price\" class=\"pdl15\">\r\n                <select [(ngModel)]=\"selectedPrice\" (change)=\"onFilter(filter,selectedCateChild,selectedPrice)\">\r\n          <option value=\"\">Chọn giá tìm kiếm</option>\r\n          <option value=\"0\">> 0k</option>\r\n          <option value=\"50000\">> 50k</option>\r\n          <option value=\"100000\">> 100k</option>\r\n          <option value=\"200000\">> 200k</option>\r\n          <option value=\"500000\">> 500k</option>\r\n          <option value=\"800000\">> 800k</option>\r\n          <option value=\"1000000\">> 1000k</option>\r\n      </select>\r\n            </div>\r\n            <div style=\"width: 20%;float: left\" class=\"pdl15\" *ngIf=\"del\">\r\n                <button style=\"padding: 5px;border: 0;border-radius: 5px\" class=\"btn-orange js-home\" type=\"button\" (click)=\"onClear()\">Xóa</button>\r\n            </div>\r\n\r\n            <h1 style=\"width: 100%;float: left\" class=\"heading1\" *ngIf=\"flag_search\">\r\n                <span class=\"maintext\">Kết quả tìm kiếm</span>\r\n            </h1>\r\n            <div class=\"clearfix\"></div>\r\n            <div>{{noresult}}</div>\r\n            <ul class=\"thumbnails\">\r\n                <li class=\"span3\" *ngFor=\"let product of products_search\">\r\n                    <a class=\"prdocutname\" routerLink=\"/chi-tiet-san-pham/{{product.id}}/{{product.alias}}\">{{product.name}}</a>\r\n                    <div class=\"thumbnail\">\r\n                        <span class=\"sale tooltip-test\">Sale</span>\r\n                        <a routerLink=\"/chi-tiet-san-pham/{{product.id}}/{{product.alias}}\"><img alt=\"\" src=\"{{link_img}}{{product.image}}\"></a>\r\n                        <div class=\"pricetag\">\r\n                            <span class=\"spiral\"></span><a (click)=\"addcart(cart.id)\" class=\"productcart\" id=\"{{product.id}}\" #cart>ADD TO CART</a>\r\n                            <div class=\"price\">\r\n                                <div class=\"pricenew\">{{product.price | formatNumVN }} D</div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </li>\r\n\r\n            </ul>\r\n        </div>\r\n    </section>\r\n</header>\r\n<!-- Header End -->\r\n\r\n<app-dialog [(visible)]=\"showDialog\">\r\n    <p class=\"alert alert-success\" style=\"margin:0\">Mua sản phẩm thành công</p>\r\n    <p style=\"margin-top:10px\"><a routerLink=\"/gio-hang\"><button (click)=\"hidepop()\" class=\"btn btn-orange pull-right\">Xem giỏ hàng</button></a></p>\r\n</app-dialog>"

/***/ }),

/***/ 589:
/***/ (function(module, exports) {

module.exports = "<app-spinner [isRunning]=\"(!(!isRequesting1 && !isRequesting2 && load))\" id=\"home\"></app-spinner>\r\n<div id=\"maincontainer\" *ngIf=\"!flag_search1\" #container>\r\n    <!-- Slider Start-->\r\n    <section class=\"slider\">\r\n        <div class=\"container\">\r\n            <div class=\"flexslider\" id=\"mainslider\" #slider>\r\n                <ul class=\"slides\">\r\n                    <li>\r\n                        <img src=\"{{domain}}public/user/img/banner1.jpg\" alt=\"\" />\r\n                    </li>\r\n                    <li>\r\n                        <img src=\"{{domain}}public/user/img/banner2.jpg\" alt=\"\" />\r\n                    </li>\r\n                    <li>\r\n                        <img src=\"{{domain}}public/user/img/banner1.jpg\" alt=\"\" />\r\n                    </li>\r\n                    <li>\r\n                        <img src=\"{{domain}}public/user/img/banner2.jpg\" alt=\"\" />\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n\r\n        </div>\r\n    </section>\r\n\r\n    <!-- Slider End-->\r\n    <!-- Search Product-->\r\n\r\n    <!-- Featured Product-->\r\n\r\n    <section id=\"featured\" class=\"row mt40\">\r\n        <div class=\"container\">\r\n            <h2 class=\"heading1\">\r\n                <span class=\"maintext\">Sản phẩm mới nhất</span>\r\n            </h2>\r\n            <ul class=\"thumbnails\">\r\n                <li class=\"span3\" *ngFor=\"let product of products\">\r\n                    <a class=\"prdocutname\" routerLink=\"/chi-tiet-san-pham/{{product.id}}/{{product.alias}}\">{{product.name}}</a>\r\n                    <div class=\"thumbnail\">\r\n                        <span class=\"sale tooltip-test\">Sale</span>\r\n                        <a routerLink=\"/chi-tiet-san-pham/{{product.id}}/{{product.alias}}\"><img alt=\"\" [lazyLoad]=\"link_img + product.image\" [offset]=\"'100'\" [defaultImage]=\"'https://i.giphy.com/3oEjI6SIIHBdRxXI40.gif'\" [scrollObservable]=\"container.ionScroll\"></a>\r\n                        <div class=\"pricetag\">\r\n                            <span class=\"spiral\"></span><a (click)=\"addcart(cart.id)\" class=\"productcart\" id=\"{{product.id}}\" #cart>ADD TO CART</a>\r\n                            <div class=\"price\">\r\n                                <div class=\"pricenew\">{{product.price | formatNumVN }} D</div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </li>\r\n\r\n            </ul>\r\n        </div>\r\n    </section>\r\n\r\n    <!-- Latest Product-->\r\n    <section id=\"latest\" class=\"row\">\r\n        <div class=\"container\">\r\n            <h2 class=\"heading1\"><span class=\"maintext\">Sản phẩm mua nhiều nhất</span></h2>\r\n            <ul class=\"thumbnails\">\r\n                <li class=\"span3\" *ngFor=\"let product of products_order\">\r\n                    <a class=\"prdocutname\" routerLink=\"/chi-tiet-san-pham/{{product.id}}/{{product.alias}}\">{{product.name}}</a>\r\n                    <div class=\"thumbnail\">\r\n                        <a routerLink=\"/chi-tiet-san-pham/{{product.id}}/{{product.alias}}\"><img [lazyLoad]=\"link_img + product.image\" [offset]=\"'100'\" [defaultImage]=\"'https://i.giphy.com/3oEjI6SIIHBdRxXI40.gif'\" [scrollObservable]=\"container.ionScroll\"></a>\r\n                        <div class=\"pricetag\">\r\n                            <span class=\"spiral\"></span><a (click)=\"addcart(cart.id)\" class=\"productcart\" id=\"{{product.id}}\" #cart>ADD TO CART</a>\r\n                            <div class=\"price\">\r\n                                <div class=\"pricenew\">{{product.price | formatNumVN }} D</div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </section>\r\n</div>"

/***/ }),

/***/ 590:
/***/ (function(module, exports) {

module.exports = "<div id=\"maincontainer\" *ngIf=\"!flag_search1\">\r\n    <section id=\"product\">\r\n        <div class=\"container\">\r\n            <!--  breadcrumb -->\r\n            <ul class=\"breadcrumb\">\r\n                <li>\r\n                    <a routerLink=\"\" class=\"js-home\">Trang chủ</a>\r\n                    <span class=\"divider\">/</span>\r\n                </li>\r\n                <li class=\"active\">Thông tin tài khoản</li>\r\n            </ul>\r\n            <!-- Account Login-->\r\n            <ul class=\"tabs\">\r\n                <li class=\"tab-link current\" data-tab=\"tab-1\">Thông tin</li>\r\n                <li class=\"tab-link\" data-tab=\"tab-2\" (click)=\"loading()\">Đơn hàng</li>\r\n            </ul>\r\n            <div id=\"tab-1\" class=\"tab-container current\">\r\n                Xin chào {{account.name}}\r\n                <p>Chúc bạn một ngày tốt lành</p>\r\n\r\n                <form class=\"form-horizontal\" (ngSubmit)=\"updateInfo(f,id)\" #f=\"ngForm\" *ngIf=\"!(flag_info == 2)\">\r\n\r\n                    <h3 class=\"heading3\">Your Email</h3>\r\n                    <div class=\"registerbox\">\r\n                        <fieldset>\r\n                            <div class=\"control-group\">\r\n                                <label class=\"control-label\"><span class=\"red\">*</span> Name:</label>\r\n                                <div class=\"controls\">\r\n                                    <input type=\"text\" id=\"name\" class=\"form-control\" required minlength=\"4\" maxlength=\"24\" name=\"name\" [(ngModel)]=\"account.name\" #name=\"ngModel\" value=\"{{name}}\" (change)=\"isDirty = true\">\r\n                                    <div *ngIf=\"name.errors && (name.dirty || name.touched)\" class=\"alert alert-danger\">\r\n                                        <div [hidden]=\"!name.errors.required\">\r\n                                            name is required\r\n                                        </div>\r\n                                        <div [hidden]=\"!name.errors.minlength\">\r\n                                            name must be at least 4 characters long.\r\n                                        </div>\r\n                                        <div [hidden]=\"!name.errors.maxlength\">\r\n                                            name cannot be more than 24 characters long.\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"control-group\">\r\n                                <label class=\"control-label\"><span class=\"red\">*</span> Email:</label>\r\n                                <div class=\"controls\">\r\n                                    <input type=\"text\" id=\"email\" class=\"form-control\" required name=\"email\" [ngModel]=\"account.email\" (ngModelChange)=\"doSomething($event)\" #email=\"ngModel\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" value=\"{{email}}\" emailAvailable (change)=\"isDirty = true\">\r\n                                    <div *ngIf=\"email.errors && (email.dirty || email.touched)\" class=\"alert alert-danger\">\r\n                                        <div [hidden]=\"!email.errors.required\">\r\n                                            Email is required\r\n                                        </div>\r\n                                        <div [hidden]=\"!email.errors.pattern\">\r\n                                            Email is invalid\r\n                                        </div>\r\n                                        <!--hidden when email OK va dung dinh dang-->\r\n                                        <div [hidden]=\"!email.valid && email.errors.pattern\">\r\n                                            Email has been used\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <!--<div *ngIf=\"flag_validate_email\" class=\"alert alert-danger\">\r\n                                      Email has been used\r\n                                    </div>-->\r\n\r\n                                </div>\r\n                            </div>\r\n                        </fieldset>\r\n                    </div>\r\n                    <h3 class=\"heading3\">Your Password</h3>\r\n                    <div class=\"registerbox\">\r\n                        <fieldset>\r\n                            <div class=\"control-group\">\r\n                                <label class=\"control-label\"><span class=\"red\">*</span> Password New:</label>\r\n                                <div class=\"controls\">\r\n                                    <input type=\"password\" class=\"form-control\" name=\"password\" [ngModel]=\"account.password\" required validateEqual=\"confirmPassword\" reverse=\"true\" #password=\"ngModel\" (change)=\"isDirty = true\">\r\n                                    <div *ngIf=\"password.errors && (password.dirty || password.touched)\" class=\"alert alert-danger\">\r\n                                        <div [hidden]=\"!password.errors.required\">\r\n                                            Password is required\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"control-group\">\r\n                                <label class=\"control-label\"><span class=\"red\">*</span> Password New Confirm:</label>\r\n                                <div class=\"controls\">\r\n                                    <input type=\"password\" class=\"form-control\" name=\"confirmPassword\" [ngModel]=\"\" required validateEqual=\"password\" reverse=\"false\" #confirmPassword=\"ngModel\" (change)=\"isDirty = true\">\r\n\r\n                                    <div *ngIf=\"confirmPassword.errors && (confirmPassword.dirty || confirmPassword.touched)\" class=\"alert alert-danger\">\r\n                                        <div [hidden]=\"!confirmPassword.errors.required\">\r\n                                            Password is required\r\n                                        </div>\r\n                                        <div [hidden]=\"confirmPassword.valid || (confirmPassword.pristine )\">\r\n                                            Password not same\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"control-group\">\r\n                                <div class=\"controls\">\r\n                                    <input type=\"submit\" [disabled]=\"!f.form.valid || flag_validate_email\" class=\"btn btn-orange\" value=\"Edit\">\r\n                                </div>\r\n                            </div>\r\n                            <div [@visibilityChanged]=\"visibility\" *ngIf=\"flag_success\" class=\"alert alert-success\">\r\n                                You have updated the information successfully\r\n                            </div>\r\n\r\n                        </fieldset>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n            <app-spinner [isRunning]=\"!(products_order$ | async) && tab\"></app-spinner>\r\n            <div id=\"tab-2\" class=\"tab-container\">\r\n                <div *ngIf=\"products_order$ | async as product_orders \">\r\n                    <div class=\"cart-info\" id=\"cart-info\" *ngIf=\"product_orders.length > 0\">\r\n\r\n                        <table class=\"table table-striped table-bordered\">\r\n                            <tr>\r\n                                <th>STT</th>\r\n                                <th>Date</th>\r\n                                <th>Email</th>\r\n                                <th>Name</th>\r\n                                <th>Phone</th>\r\n                                <th>Xem chi tiết</th>\r\n                            </tr>\r\n\r\n                            <tr *ngFor=\"let item of product_orders; let i= index;\">\r\n                                <td>{{i + 1}}</td>\r\n                                <td>{{item.created_at}}</td>\r\n                                <td>{{item.email}}</td>\r\n                                <td>{{item.name}}</td>\r\n                                <td>{{item.phone}}</td>\r\n\r\n                                <td><a #id_order (click)=\"detail_order(id_order.id)\" class=\"js-open-modal\" data-modal-id=\"popup\" id=\"{{item.id}}\"> Click me </a></td>\r\n                            </tr>\r\n\r\n                        </table>\r\n\r\n                    </div>\r\n                </div>\r\n                <div class=\"container\" *ngIf=\"(products_order$ | async)?.length==0\">\r\n                    <p>Không có sản phẩm nào trong giỏ hàng. Vui lòng quay lại mua sắm !</p>\r\n                    <p>\r\n                        <a routerLink=\"\"><input value=\"Tiếp tục mua sắm\" class=\"btn btn-orange pull-left\"></a>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n</div>\r\n<div id=\"popup\" class=\"modal-box\">\r\n    <header>\r\n        <a class=\"js-modal-close close\">×</a>\r\n        <h3>Chi tiết đơn hàng</h3>\r\n    </header>\r\n\r\n    <div class=\"modal-body\">\r\n        <table class=\"table table-striped table-bordered\" id=\"table_aj\">\r\n            <tr>\r\n                <th>STT</th>\r\n                <th>Hình ảnh</th>\r\n                <th>Tên sản phẩm</th>\r\n                <th>Đơn giá</th>\r\n                <th>Số lượng</th>\r\n                <th>Tổng tiền</th>\r\n            </tr>\r\n            <tr *ngFor=\"let item of detail_order_product; let i= index;\">\r\n                <td>{{i + 1}}</td>\r\n                <td><img src=\"{{link_img}}{{item.image}}\" width=\"80\" height=\"80\"></td>\r\n                <td>{{item.name}}</td>\r\n                <td>{{item.price | formatNumVN }} D</td>\r\n                <td>{{item.qty}}</td>\r\n                <td>{{item.price*item.qty | formatNumVN }} D</td>\r\n            </tr>\r\n        </table>\r\n\r\n        <div class=\"pull-right\">\r\n            <div class=\"span4 pull-right\">\r\n                <table class=\"table table-striped table-bordered \">\r\n                    <tbody>\r\n                        <tr>\r\n                            <td><span class=\"extra bold totalamout\">Tổng tiền :</span></td>\r\n                            <td><span class=\"bold totalamout\" id=\"totalamout\">{{sTotal | formatNumVN }} D</span></td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            <div class=\"span6 pull-right\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <footer>\r\n        <a class=\"js-modal-close\">Close</a>\r\n    </footer>\r\n</div>\r\n<app-dialog [(visible)]=\"showDialog\">\r\n    <p>Thông tin chưa được lưu lại. Bạn có muốn chuyển hướng?</p>\r\n    <hr>\r\n    <div class=\"btn-wrap\">\r\n        <button (click)=\"obs.next($event)\" type=\"button\" class=\"btn btn-success\">OK</button>\r\n        <button (click)=\"obs1.next($event)\" type=\"button\" class=\"btn btn-danger\">Cancel</button>\r\n    </div>\r\n</app-dialog>"

/***/ }),

/***/ 591:
/***/ (function(module, exports) {

module.exports = "<div id=\"maincontainer\" *ngIf=\"!flag_search1\">\r\n  <section id=\"product\">\r\n    <div class=\"container\">\r\n      <!--  breadcrumb -->\r\n      <ul class=\"breadcrumb\">\r\n        <li>\r\n          <a routerLink=\"\" class=\"js-home\">Trang chủ</a>\r\n          <span class=\"divider\">/</span>\r\n        </li>\r\n        <li class=\"active\">Đăng nhập</li>\r\n      </ul>\r\n      <!-- Account Login-->\r\n      <div class=\"row\">\r\n        <div class=\"span9\">\r\n          <h1 class=\"heading1\"><span class=\"maintext\">Đăng nhập</span><span class=\"subtext\">First Login here to View All your account information</span></h1>\r\n          <section class=\"newcustomer\">\r\n            <h2 class=\"heading2\">Khách hàng mới </h2>\r\n            <div class=\"loginbox\">\r\n              <h4 class=\"heading4\"> Đăng ký tài khoản</h4>\r\n              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, a. Alias optio repudiandae totam temporibus\r\n                autem eius laudantium eum repellat ipsa aliquid deleniti necessitatibus, quia maiores sapiente ipsam, tempore\r\n                enim!</p>\r\n              <br>\r\n              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem voluptates sed alias quam libero, rerum modi\r\n                iusto debitis repellat natus quibusdam optio sequi? Hic pariatur totam, dicta vero ad deleniti.</p>\r\n              <br>\r\n              <br>\r\n              <a routerLink=\"/dang-ky\" class=\"btn btn-orange\">Tiếp tục</a>\r\n            </div>\r\n          </section>\r\n          <section class=\"returncustomer\">\r\n            <h2 class=\"heading2\">Khách hàng </h2>\r\n            <div class=\"loginbox\">\r\n              <h4 class=\"heading4\">Đã có tài khoản</h4>\r\n              <ul class=\"social-nav clearfix\">\r\n                <li><a (click)=\"loginFacebook()\" title=\"Facebook\" rel=\"nofollow\" class=\"facebook\"><i class=\"fa fa-facebook\"></i></a></li>\r\n                <li><a (click)=\"loginGoogle()\" title=\"Google plus\" rel=\"nofollow\" class=\"google\"><i class=\"fa fa-google-plus\"></i></a></li>\r\n                <li><a (click)=\"loginTwitter()\" title=\"Twitter\" rel=\"nofollow\" class=\"twitter\"><i class=\"fa fa-twitter\"></i></a></li>\r\n                <li><a (click)=\"loginGithub()\" title=\"Github\" rel=\"nofollow\" class=\"github\"><i class=\"fa fa-github\"></i></a></li>\r\n              </ul>\r\n\r\n              <div *ngIf=\"flag_social\" class=\"alert alert-danger\">\r\n                {{error_mg}}\r\n              </div>\r\n              <p>Or sign in with email</p>\r\n              <form class=\"form-vertical\" (ngSubmit)=\"onSignin(f)\" #f=\"ngForm\">\r\n\r\n                <fieldset>\r\n                  <div class=\"control-group\">\r\n                    <input type=\"text\" id=\"email\" class=\"form-control\" required name=\"email\" [(ngModel)]=\"account.email\" #email=\"ngModel\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\"\r\n                      (change)=\"checkemail_same(email.value)\">\r\n                    <div *ngIf=\"email.errors && (email.dirty || email.touched)\" class=\"alert alert-danger\">\r\n                      <div [hidden]=\"!email.errors.required\">\r\n                        Email is required\r\n                      </div>\r\n                      <div [hidden]=\"!email.errors.pattern\">\r\n                        Email is invalid\r\n                      </div>\r\n                    </div>\r\n                    <div *ngIf=\"flag_validate_email\" class=\"alert alert-danger\">\r\n                      Email does not exist in the system\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"control-group\">\r\n                    <input type=\"password\" id=\"password\" class=\"form-control\" required name=\"password\" [(ngModel)]=\"account.password\" #password=\"ngModel\">\r\n                    <div *ngIf=\"password.errors && (password.dirty || password.touched)\" class=\"alert alert-danger\">\r\n                      <div [hidden]=\"!password.errors.required\">\r\n                        Password is required\r\n                      </div>\r\n                    </div>\r\n                    <div *ngIf=\"flag_validate_pass\" class=\"alert alert-danger\">\r\n                      Wrong password\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"control-group\">\r\n                    <input type=\"checkbox\" name=\"remember\" (click)=\"doCheck($event)\" [checked]=\"isChecked\" style=\"float: left;display: inline-block;\"\r\n                    />\r\n\r\n                    <label class=\"control-label\" style=\"float: left;display: inline-block;\">Remember Me</label>\r\n                  </div>\r\n\r\n                  <div class=\"clearfix\"></div>\r\n                  <button [disabled]=\"!f.form.valid\" type=\"submit\" class=\"btn btn-orange\" style=\"margin-top: 20px\">Login</button>\r\n                </fieldset>\r\n              </form>\r\n            </div>\r\n          </section>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n</div>"

/***/ }),

/***/ 592:
/***/ (function(module, exports) {

module.exports = "<div id=\"maincontainer\" *ngIf=\"!flag_search1\">\r\n    <section id=\"product\">\r\n        <div class=\"container\">\r\n            <!--  breadcrumb -->\r\n            <ul class=\"breadcrumb\">\r\n                <li>\r\n                    <a routerLink=\"\" class=\"js-home\">Trang chủ</a>\r\n                    <span class=\"divider\">/</span>\r\n                </li>\r\n                <li class=\"active\">Đăng ký tài khoản</li>\r\n            </ul>\r\n            <div class=\"row\">\r\n                <!-- Register Account-->\r\n                <div class=\"span9\">\r\n\r\n                    <h1 class=\"heading1\"><span class=\"maintext\">Đăng ký tài khoản</span><span class=\"subtext\">Register Your details with us</span></h1>\r\n                    <form class=\"form-horizontal\" (ngSubmit)=\"onSignup(f)\" #f=\"ngForm\">\r\n\r\n                        <h3 class=\"heading3\">Your Personal Details</h3>\r\n                        <div class=\"registerbox\">\r\n                            <fieldset>\r\n                                <div class=\"control-group\">\r\n                                    <label class=\"control-label\"><span class=\"red\">*</span> Name:</label>\r\n                                    <div class=\"controls\">\r\n                                        <input type=\"text\" id=\"name\" class=\"form-control\" required minlength=\"4\" maxlength=\"24\" name=\"name\" [(ngModel)]=\"account.name\" #name=\"ngModel\" value=\"{{name}}\">\r\n                                        <div *ngIf=\"name.errors && (name.dirty || name.touched)\" class=\"alert alert-danger\">\r\n                                            <div [hidden]=\"!name.errors.required\">\r\n                                                Name is required\r\n                                            </div>\r\n                                            <div [hidden]=\"!name.errors.minlength\">\r\n                                                Name must be at least 4 characters long.\r\n                                            </div>\r\n                                            <div [hidden]=\"!name.errors.maxlength\">\r\n                                                Name cannot be more than 24 characters long.\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"control-group\">\r\n                                    <label class=\"control-label\"><span class=\"red\">*</span> Email:</label>\r\n                                    <div class=\"controls\">\r\n                                        <input type=\"text\" id=\"email\" class=\"form-control\" required name=\"email\" [(ngModel)]=\"account.email\" #email=\"ngModel\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" value=\"{{email}}\" emailAvailable>\r\n                                        <div *ngIf=\"email.errors && (email.dirty || email.touched)\" class=\"alert alert-danger\">\r\n                                            <div [hidden]=\"!email.errors.required\">\r\n                                                Email is required\r\n                                            </div>\r\n                                            <div [hidden]=\"!email.errors.pattern\">\r\n                                                Email is invalid\r\n                                            </div>\r\n                                            <!--hidden when email OK va dung dinh dang-->\r\n                                            <div [hidden]=\"!email.valid && email.errors.pattern\">\r\n                                                Email has been used\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </fieldset>\r\n                        </div>\r\n                        <h3 class=\"heading3\">Your Password</h3>\r\n                        <div class=\"registerbox\">\r\n                            <fieldset>\r\n                                <div class=\"control-group\">\r\n                                    <label class=\"control-label\"><span class=\"red\">*</span> Password New:</label>\r\n                                    <div class=\"controls\">\r\n                                        <input type=\"password\" class=\"form-control\" name=\"password\" [ngModel]=\"account.password\" required validateEqual=\"confirmPassword\" reverse=\"true\" #password=\"ngModel\">\r\n                                        <div *ngIf=\"password.errors && (password.dirty || password.touched)\" class=\"alert alert-danger\">\r\n                                            <div [hidden]=\"!password.errors.required\">\r\n                                                Password is required\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"control-group\">\r\n                                    <label class=\"control-label\"><span class=\"red\">*</span> Password New Confirm:</label>\r\n                                    <div class=\"controls\">\r\n                                        <input type=\"password\" class=\"form-control\" name=\"confirmPassword\" [ngModel]=\"\" required validateEqual=\"password\" reverse=\"false\" #confirmPassword=\"ngModel\">\r\n\r\n                                        <div *ngIf=\"confirmPassword.errors && (confirmPassword.dirty || confirmPassword.touched)\" class=\"alert alert-danger\">\r\n                                            <div [hidden]=\"!confirmPassword.errors.required\">\r\n                                                Password is required\r\n                                            </div>\r\n                                            <div [hidden]=\"confirmPassword.valid || (confirmPassword.pristine )\">\r\n                                                Password not same\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </fieldset>\r\n                        </div>\r\n                        <div class=\"pull-right\">\r\n                            <input type=\"submit\" [disabled]=\"!f.form.valid\" class=\"btn btn-orange\" value=\"Đăng ký\">\r\n                        </div>\r\n                    </form>\r\n                    <div class=\"clearfix\"></div>\r\n                    <div [@visibilityChanged]=\"visibility\" *ngIf=\"flag_success\" class=\"alert alert-success\" style=\"margin-top: 10px\">\r\n                        Congratulations! You have successfully registered your account\r\n                    </div>\r\n                    <br>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n</div>"

/***/ }),

/***/ 593:
/***/ (function(module, exports) {

module.exports = "<div class=\"sk-circle-wrap\">\r\n<div [hidden]=\"!isDelayedRunning\" class=\"sk-circle\">\r\n  <div class=\"sk-circle1 sk-child\"></div>\r\n  <div class=\"sk-circle2 sk-child\"></div>\r\n  <div class=\"sk-circle3 sk-child\"></div>\r\n  <div class=\"sk-circle4 sk-child\"></div>\r\n  <div class=\"sk-circle5 sk-child\"></div>\r\n  <div class=\"sk-circle6 sk-child\"></div>\r\n  <div class=\"sk-circle7 sk-child\"></div>\r\n  <div class=\"sk-circle8 sk-child\"></div>\r\n  <div class=\"sk-circle9 sk-child\"></div>\r\n  <div class=\"sk-circle10 sk-child\"></div>\r\n  <div class=\"sk-circle11 sk-child\"></div>\r\n  <div class=\"sk-circle12 sk-child\"></div>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ 847:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(291);


/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Account; });
var Account = (function () {
    function Account(email, password, name) {
        this.email = email;
        this.password = password;
        this.name = name;
    }
    return Account;
}());

//# sourceMappingURL=account.js.map

/***/ })

},[847]);
//# sourceMappingURL=main.bundle.js.map