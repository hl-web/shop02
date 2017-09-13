import { XyzUserListService } from './../home.service';
import { Component, OnInit, ElementRef, ViewEncapsulation, ViewChild } from '@angular/core';
import { FormatNumVNPipe } from './../format-num-vn.pipe';
import * as $ from 'jquery';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  isRequesting1: boolean;
  isRequesting2: boolean;
  id_pro_cart: number;
  filter: string;
  products: any;
  products_order: any;
  products_search: any;
  flag_search: boolean;
  flag_search1: string;
  cates: any;
  selectedCate: any = '';
  catechild: any;
  selectedCateChild: any = '';
  select_cate_search: any;
  noresult: string;
  selectedPrice: any = '';
  flag_price: boolean;
  wselect: string;
  link_img: string;
  domain: string;
  flag_cart: boolean;
  temp_pro: any[] = [];
  abc: any;
  load: boolean = false;
  sub1: any;
  constructor(
    private xyzUserListService: XyzUserListService, private elementRef: ElementRef
  ) {
    xyzUserListService.changeEmitted2.subscribe(
      text => {

        this.flag_search1 = text;
        // console.log(this.flag_search1);

      });
    xyzUserListService.changeEmitted4.subscribe(
      text => {

        this.isRequesting2 = text;
        console.log(this.isRequesting2);



      });
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.isRequesting1 = true;
    this.xyzUserListService.get().subscribe((response) => {
      this.isRequesting1 = false;
      console.log(this.isRequesting1);

      //console.log(response.products_buy);
      this.products = response.products;
      this.products_order = response.products_buy;
      this.cates = response.cates;
    });
    this.link_img = this.xyzUserListService.link_img;
    this.domain = this.xyzUserListService.domain;
  }



  addcart(id) {

    this.xyzUserListService.addcart(id);

  }


  @ViewChild('slider') slider: ElementRef;
  ngAfterViewInit() {

    (<any>jQuery(this.slider.nativeElement)).flexslider({
      animation: "slide",
      start: function (slider) {
        $('body').removeClass('loading');
      }
    });

    this.load = true;

  }

}
