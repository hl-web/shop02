
import { ActivatedRoute, Params, Router } from '@angular/router';
import { XyzUserListService } from './../home.service';
import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  showDialog = false;
  menu: any;
  menu_2: any;
  count_c: number;
  product_ca: any;
  link_img: string;
  domain: string;
  id_pro_cart: number;
  filter: string;
  products: any;
  products_order: any;
  products_search: any;
  flag_search: boolean;
  cates: any;
  selectedCate: any = '';
  catechild: any;
  selectedCateChild: any = '';
  select_cate_search: any;
  noresult: string;
  selectedPrice: any = '';
  flag_price: boolean;
  wselect: string;

  flag_cart: boolean;
  check_login: boolean;
  flag_login: any;
  id_menu_current: string;
  nhietdo: number;
  date: any;
  day: any;
  night: any;
  isRequesting: boolean;
  @Output() onVote = new EventEmitter<any>();
  constructor(private xyzUserListService: XyzUserListService, private activatedRoute: ActivatedRoute, private router: Router) {
    xyzUserListService.changeEmitted$.subscribe(
      text => {

        this.count_c = text;



      });
    xyzUserListService.changeEmitted_1.subscribe(
      text1 => {

        this.showDialog = text1;



      });
    xyzUserListService.changeEmitted3.subscribe(
      text => {

        this.check_login = text;
        console.log(this.check_login);

      });


  }

  ngOnInit() {

    this.xyzUserListService.weather().subscribe((response) => {
      console.log(response.query.results.channel.item.condition.temp);
      this.nhietdo = response.query.results.channel.item.condition.temp;
      this.date = response.query.created;
      this.day = response.query.results.channel.item.condition.text;
    },
      (errorData) => {


      }
    );
    this.xyzUserListService.get().subscribe((response) => {

      this.cates = response.cates;
    });
    this.link_img = this.xyzUserListService.link_img;
    this.domain = this.xyzUserListService.domain;
    this.xyzUserListService.get_menu().subscribe((response) => {
      this.menu = response;

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

  }


  contactTractByFn(index, item) {
    return item.id;
  }
  onFilter(filter, select_cate_search, selectedPrice) {

    if (this.selectedCateChild === '') {
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

      this.xyzUserListService.get().subscribe((response) => {
        //console.log(response.products_buy);
        this.products = response.products;
        this.products_order = response.products_buy;
        this.flag_search = false;
        this.xyzUserListService.flag_search1 = false;
        this.xyzUserListService.emitChange2(this.xyzUserListService.flag_search1);

        this.products_search = null;
        this.selectedCate = '';
        this.selectedCateChild = '';
        this.selectedPrice = '';
        this.noresult = '';
        this.flag_price = false;
      })
    }
    else {
      this.xyzUserListService.search(filter, select_cate_search, selectedPrice).subscribe(response => {
        console.log(response);

        this.products_search = response;
        if (response == '') {
          this.noresult = 'Không có sản phẩm nào phù hợp với kết quả tìm kiếm của bạn. Vui lòng chọn lại !'
        }
        else {
          this.noresult = '';
        }
        this.products = null;
        this.products_order = null;
        this.flag_search = true;
        this.xyzUserListService.flag_search1 = true;
        this.xyzUserListService.emitChange2(this.xyzUserListService.flag_search1);
      })
    }

  }

  CateChild(selectedCate) {
    this.selectedCate = selectedCate;

    this.xyzUserListService.catechild(selectedCate).subscribe((response) => {
      this.catechild = response;
      //console.log(response);

    })
    this.selectedCateChild = '';
  }
  thoat() {
    this.xyzUserListService.logOut();
    this.xyzUserListService.logoutSocial();
    this.router.navigate(['']);
    this.check_login = null;
    this.flag_login = null;
    delete sessionStorage.cart;
    delete sessionStorage.count_cart;
    delete sessionStorage.total;
    this.xyzUserListService.emitChange('');
  }
  onClear() {
    this.xyzUserListService.get().subscribe((response) => {
      console.log(response.products_buy);
      this.products = response.products;
      this.products_order = response.products_buy;
    })
    this.filter = '';
    this.flag_search = false;
    this.xyzUserListService.flag_search1 = false;
    this.xyzUserListService.emitChange2(this.xyzUserListService.flag_search1);
    this.products_search = null;
    this.selectedCate = '';
    this.selectedCateChild = '';
    this.noresult = '';
    this.flag_price = false;
  }
  @ViewChild('search') search11: ElementRef;
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

    this.search11.nativeElement.focus();
  }
  menu_cap_2(id) {
    this.id_menu_current = id;
    this.menu_2 = [];
    this.isRequesting = true;
    this.xyzUserListService.get_menu_cap2(id).subscribe((response) => {
      this.isRequesting = false;
      this.menu_2 = response;
    });
  }

  clickmenu_c2(id) {

    this.xyzUserListService.getproduct_cate(id).subscribe((response) => {
      this.product_ca = response.product_cate.data;

    });
    this.onVote.emit(this.product_ca);
  }
  addcart(id) {
    this.xyzUserListService.addcart(id);
  }
  hidepop() {
    this.showDialog = false;
  }
}
