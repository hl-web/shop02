import { Router } from '@angular/router';
import { XyzUserListService } from './../home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  product_giohang: any;
  temp: number;
  link_img: string;
  domain: string;
  total: number = 0;
  count_c: number = 0;
  flag_cart: boolean;
  no_product: boolean;
  flag_search1: boolean;
  showDialog: boolean = false;
  deleteId: number;
  cfdelete: boolean = false;
  showDialogvc: boolean = false;
  constructor(private xyzUserListService: XyzUserListService, private router: Router) {
    xyzUserListService.changeEmitted2.subscribe(
      text => {

        this.flag_search1 = text;
        console.log(this.flag_search1);

      });

  }

  ngOnInit() {
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


      this.total = this.product_giohang.reduce((total1, currentValue) => {
        console.log(currentValue[0].subtotal);
        return total1 + currentValue[0].subtotal;
      }, 0);

      // console.log(totalYears);


      if (typeof (Storage) !== "undefined") {
        // Gán dữ liệu
        sessionStorage.total = JSON.stringify(this.total);

      } else {
        document.write('Trình duyệt của bạn không hỗ trợ sessionStorage');
      }
      //localStorage.setItem("total", JSON.stringify(this.total));
    }



    this.link_img = this.xyzUserListService.link_img;
    this.domain = this.xyzUserListService.domain;

  }

  delete(id) {


    console.clear();
    let item = this.product_giohang.find(function (value) {
      return value[0].id == id;
    });
    let index = this.product_giohang.indexOf(item);
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
  }
  cancel() {

    this.showDialog = false;
    return false;
  }
  flagCart(flag, cart) {
    if (flag) {
      console.log();

      if (typeof (Storage) !== "undefined") {
        sessionStorage.cart = JSON.stringify(cart);
      } else {
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
  }
  ngAfterViewInit() {

    jQuery(window).on('load', function () {

      jQuery(document).on("click", ".js-home", function () {
        jQuery('#mainslider').removeData("flexslider");
        (<any>jQuery('#mainslider')).flexslider({
          animation: "slide",
          start: function (slider) {
            jQuery('body').removeClass('loading');
          }
        });

      });

    });


  }

  fcshowDialog(id) {
    this.showDialog = true;
    this.deleteId = id;

  }
  validateNumber(n) {
    if (n == '') {
      this.showDialogvc = true;

    }
  }

  update(value, id, e) {
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
  }

}
