import { TokenManagerService } from './token-manager.service';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { AngularFireAuth } from 'angularfire2/auth';
@Injectable()
export class XyzUserListService {
  constructor(private http: Http, private afAuth: AngularFireAuth, private tokenManagerService: TokenManagerService) { }
  showDialog = false;
  temp_pro: any[] = [];
  abc: any;
  giohang: any[] = [];
  total: number;
  flag_cart: boolean;
  count_cart: number;
  flag_search1: boolean;
  flag_logout: boolean;
  giohangsum: any[] = [];
  products_order: any;
  link_img: string = 'http://hunglx-ng-lar.esy.es/resources/upload/';
  domain: string = 'http://hunglx-ng-lar.esy.es/';
  API: string = 'https://cors-anywhere.herokuapp.com/http://hunglx-ng-lar.esy.es/';

  // Observable string sources
  private emitChangeSource = new Subject<any>();
  // Observable string streams
  changeEmitted$ = this.emitChangeSource.asObservable();
  // Service message commands
  emitChange(change: any) {
    this.emitChangeSource.next(change);
  }

  // Observable string sources
  private emitChangeSource_1 = new Subject<any>();
  // Observable string streams
  changeEmitted_1 = this.emitChangeSource_1.asObservable();
  // Service message commands
  emitChange_1(change: any) {
    this.emitChangeSource_1.next(change);
  }

  // Observable string sources
  private emitChangeSource2 = new Subject<any>();
  // Observable string streams
  changeEmitted2 = this.emitChangeSource2.asObservable();
  // Service message commands
  emitChange2(change: any) {
    this.emitChangeSource2.next(change);
  }

  // Observable string sources
  private emitChangeSource3 = new Subject<any>();
  // Observable string streams
  changeEmitted3 = this.emitChangeSource3.asObservable();
  // Service message commands
  emitChange3(change: any) {
    this.emitChangeSource3.next(change);
  }

  // Observable string sources
  private emitChangeSource4 = new Subject<boolean>();
  // Observable string streams
  changeEmitted4 = this.emitChangeSource4.asObservable();
  // Service message commands
  emitChange4(change: boolean) {
    this.emitChangeSource4.next(change);
  }
  // Observable string sources
  private emitChangeSource5 = new Subject<boolean>();
  // Observable string streams
  changeEmitted5 = this.emitChangeSource5.asObservable();
  // Service message commands
  emitChange5(change: boolean) {
    this.emitChangeSource5.next(change);
  }
  logoutSocial() {
    this.afAuth.auth.signOut();
  }
  addcart(id) {

    this.http.get(this.API + 'api/mua-hang/' + id).map(res => res.json()).subscribe((response) => {

      this.temp_pro = response.content;

      if (sessionStorage.cart == null || JSON.parse(sessionStorage.cart).length <= 0) {
        this.giohang = [];
        this.giohang.push(this.temp_pro);
        this.abc = this.giohang;
        // localStorage.setItem("cart", JSON.stringify(this.abc));
        if (typeof (Storage) !== "undefined") {
          // Gán dữ liệu
          sessionStorage.cart = JSON.stringify(this.abc);

        } else {
          document.write('Trình duyệt của bạn không hỗ trợ sessionStorage');
        }
        this.count_cart = 1;
        this.showDialog = true;
        console.log(this.showDialog);
      }
      else {

        for (var _i = 0; _i < this.giohang.length; _i++) {

          var num = this.giohang[_i];
          if (num[0].id == id) {
            this.flag_cart = false;
            this.giohang[_i][0].qty++;
            this.giohang[_i][0].subtotal = this.giohang[_i][0].qty * this.giohang[_i][0].price;


            // console.log(this.count_cart);

            this.count_cart++;
            this.abc = this.giohang;
            if (typeof (Storage) !== "undefined") {
              // Gán dữ liệu
              sessionStorage.cart = JSON.stringify(this.abc);

            } else {
              document.write('Trình duyệt của bạn không hỗ trợ sessionStorage');
            }
            //localStorage.setItem("cart", JSON.stringify(this.abc));
            break;
          }
          else {
            this.flag_cart = true;
          }

        }
        if (this.flag_cart) {
          this.giohang.push(this.temp_pro);
          this.abc = this.giohang;
          //localStorage.setItem("cart", JSON.stringify(this.abc));
          if (typeof (Storage) !== "undefined") {
            // Gán dữ liệu
            sessionStorage.cart = JSON.stringify(this.abc);

          } else {
            document.write('Trình duyệt của bạn không hỗ trợ sessionStorage');
          }
          this.count_cart++;
          this.showDialog = true;
          console.log(this.showDialog);

        }


      }

      //console.log(this.count_cart);
      this.emitChange(this.count_cart);
      this.emitChange_1(this.showDialog);
      sessionStorage.count_cart = this.count_cart;
    });



  }


  get() {
    console.log(this.http.get(this.API + 'api/home'));

    return this.http.get(this.API + 'api/home').map(res => res.json());
  }
  get_menu() {

    return this.http.get(this.API + 'api/menu').map(res => res.json());
  }
  get_menu_cap2(id) {

    return this.http.get(this.API + 'api/menu/' + id).map(res => res.json());
  }
  search(filter: string, selectedCate: string, price: string) {
    let endpoint = (price) ? '/' + price : '';
    let cate = (selectedCate) ? '/' + selectedCate : '';
    return this.http.get(this.API + 'api/home/' + filter + cate + endpoint).map(res => res.json());
  }
  catechild(selectedCate: string) {
    let endpoint = (selectedCate) ? selectedCate : 0;
    return this.http.get(this.API + 'api/catechild/' + endpoint).map(res => res.json());
  }



  getproduct_cate(id: number) {

    return this.http.get(this.API + 'api/loai-san-pham/' + id).map(res => res.json());
  }
  getdetail_product(id: number) {

    return this.http.get(this.API + 'api/chi-tiet-san-pham/' + id).map(res => res.json());
  }
  getMoreTodos(id, page) {
    return this.http.get(this.API + 'api/loai-san-pham/' + id + '?page=' + page).map(res => res.json());
  }

  error: any;
  checkout(products) {
    var headers = new Headers();
    headers.append('Content-type', 'application/json');
    console.log(JSON.stringify(products));

    return this.http.post(this.API + 'api/check-out', JSON.stringify(products), { headers: headers }).map(res => res.json())
      ; // Reach here if fails;
  }
  signup(acc) {
    console.log(JSON.stringify(acc));

    var headers = new Headers();
    headers.append('Content-type', 'application/json');

    return this.http.post(this.API + 'api/user/signup',
      JSON.stringify(acc),
      { headers: headers }).map(res => res.json())
      ;
  }

  signin(acc, autologin) {

    return this.http.post(this.API + 'api/user/signin',
      acc,
      { headers: new Headers({ 'X-Requested-With': 'XMLHttpRequest' }) })
      .map(
      (response: Response) => {
        const token = response.json().token;
        const email = response.json().email;
        const name = response.json().name;
        const id = response.json().id;
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace('-', '+').replace('_', '/');
        return { id: id, email: email, name: name, token: token, decoded: JSON.parse(window.atob(base64)) };
      }
      )
      .do(
      tokenData => {
        if (autologin) {
          this.tokenManagerService.generateNewToken(tokenData.token);
          //localStorage.setItem('token', tokenData.token);
          localStorage.setItem('id', tokenData.id);
          localStorage.setItem('email', tokenData.email);
          localStorage.setItem('name', tokenData.name);
          localStorage.setItem('login', '1');
          this.flag_logout = true;
          this.emitChange3(this.flag_logout);
        }
        else {
          if (typeof (Storage) !== "undefined") {
            // Gán dữ liệu

            sessionStorage.token = tokenData.token;
            sessionStorage.id = tokenData.id;
            sessionStorage.email = tokenData.email;
            sessionStorage.name = tokenData.name;
            sessionStorage.login = '1';
            this.flag_logout = true;
            this.emitChange3(this.flag_logout);

          } else {
            document.write('Trình duyệt của bạn không hỗ trợ local storage');
          }
        }


      }

      );


  }

  getToken() {
    if ((sessionStorage.token !== null)) {
      return sessionStorage.token;
    }
    if ((localStorage.getItem("token") !== null)) {
      return localStorage.getItem('token');
    }

  }
  logOut() {
    localStorage.clear();
    sessionStorage.clear();
    delete sessionStorage.cart;
    delete sessionStorage.count_cart;
    delete sessionStorage.total;
    this.emitChange('');
  }


  updateInfo(user, id) {
    //const token = this.getToken();
    if ((sessionStorage.token !== null)) {
      var token = this.getToken();
    }
    else {
      var token = this.tokenManagerService.retrieveToken();
    }

    // console.log(token);

    var headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.post(this.API + 'api/user/update/' + id + '?token=' + token, user, { headers: headers })
      .map(
      (response: Response) => {

        const email = response.json().email;
        const name = response.json().name;
        const status = response.json().success;

        return { email: email, name: name, status: status };
      }
      )
      .do(
      tokenData => {
        if ((sessionStorage.token !== null)) {
          sessionStorage.email = tokenData.email;
          sessionStorage.name = tokenData.name;
        }
        if ((localStorage.getItem("token") !== null)) {
          localStorage.setItem('email', tokenData.email);
          localStorage.setItem('name', tokenData.name);
        }

      }

      );
  }
  getOrderUser(id) {
    return this.http.get(this.API + 'api/user/order/' + id).map(res => res.json());
  }
  getOrderUserDetail(id) {
    return this.http.get(this.API + 'api/user/order/detail/' + id).map(res => res.json());
  }
  validate_email_user(em: string, id: string = '0') {
    return this.http.post(this.API + 'api/user/validate_email/' + id,
      { email: em },
      { headers: new Headers({ 'X-Requested-With': 'XMLHttpRequest' }) }).map(res => res.json());
  }

  contact(data) {


    var headers = new Headers();
    headers.append('Content-type', 'application/json');

    return this.http.post(this.API + 'api/user/lien-he',
      JSON.stringify(data),
      { headers: headers }).map(res => res.json());
  }
  weather() {
    return this.http.get('https://query.yahooapis.com/v1/public/yql?q=select%20item.condition%20from%20weather.forecast%20where%20woeid%20%3D%2028349033&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys').map(res => res.json());
  }
}
