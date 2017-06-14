import { NgForm } from '@angular/forms/src/forms';
import { Router } from '@angular/router';
import { XyzUserListService } from './../home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  product_giohang: any;
   showDialog = false;

  link_img: string;
  domain: string;
  total: number;
  email1: any;
  name1: any;

  phone: any;
  products: any;
  obj = {};
  title: any;
  link: any;
  id1: any;
  cartx: any[] = [];
  str: string;
  address: string;
  id_user: any;
  is_member: any;
  no_product: boolean;
  flag_search1: boolean;
  error: any;
  constructor(private xyzUserListService: XyzUserListService, private router: Router) {
    xyzUserListService.changeEmitted2.subscribe(
      text => {

        this.flag_search1 = text;
        console.log(this.flag_search1);

      });
  }

  ngOnInit() {
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

        var element = <any>{};
        this.id1 = this.product_giohang[_i][0].id;
        var qty1 = this.product_giohang[_i][0].qty;
        element[this.id1] = qty1;
        this.cartx.push(element);

      }
    }

    console.log(this.id_user);

    this.link_img = this.xyzUserListService.link_img;
    this.domain = this.xyzUserListService.domain;

  }

  checkout(form: NgForm) {


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
      .subscribe((response) => {
        //localStorage.removeItem("cart");
        delete sessionStorage.cart;
        delete sessionStorage.count_cart;
        delete sessionStorage.total;
        this.xyzUserListService.emitChange('');
        setTimeout(() => {
           this.showDialog=true;
        }, 300)
      }, (err) => {
        this.error = err; alert(this.error);
      });

  }
   ngAfterViewInit() {

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
  }
   hidepop() {
    this.showDialog = false;
  }
}
