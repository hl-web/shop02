import { XyzUserListService } from './../home.service';
import { Component, OnInit, ElementRef, ViewEncapsulation } from '@angular/core';
import { FormatNumVNPipe } from './../format-num-vn.pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  public isRequesting: boolean;
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
  constructor(
    private xyzUserListService: XyzUserListService, private elementRef: ElementRef
  ) {
    xyzUserListService.changeEmitted2.subscribe(
      text => {

        this.flag_search1 = text;
        // console.log(this.flag_search1);

      });
  }

  ngOnInit() {
    this.isRequesting = true;
    this.xyzUserListService.get().subscribe((response) => {
      this.isRequesting = false;
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



}
