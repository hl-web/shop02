import { XyzUserListService } from './../home.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { OnInit, OnDestroy, Component, Input, ViewChild } from '@angular/core';
import { AppComponent } from './../app.component';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit, OnDestroy {

  products_cate: any;
  menu_cate: any;
  lasted_product: any;
  id: number;
  products_order: any;

  last_page: any;
  _last_page: number;
  current_page: number;
  total: number;
  per_page: number;

  disablePrev: boolean;
  disableNext: boolean;
  link_img: string;
  domain: string;
  products_cate11: any;
  private sub: any;
  flag_search1: boolean;
  constructor(private xyzUserListService: XyzUserListService, private activatedRoute: ActivatedRoute) {
    xyzUserListService.changeEmitted2.subscribe(
      text => {

        this.flag_search1 = text;
        console.log(this.flag_search1);

      });
  }

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.xyzUserListService.getproduct_cate(this.id).subscribe((response) => {
        this.products_cate = response.product_cate.data;
        this.menu_cate = response.menu_cate;
        // pagination
        this.current_page = response.product_cate.current_page;
        this.total = response.product_cate.total;
        this.last_page = Array(response.product_cate.last_page);
        this._last_page = response.product_cate.last_page;
        this.per_page = response.product_cate.per_page;
        this.disableNext = true;
        this.disablePrev = false;
      });
    });


    this.xyzUserListService.get().subscribe((response) => {
      this.products_order = response.products_buy;
      this.lasted_product = response.products;
    });
    this.link_img = this.xyzUserListService.link_img;
    this.domain = this.xyzUserListService.domain;
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  addcart(id) {
    this.xyzUserListService.addcart(id);
  }
  pageNumber(_number) {
    this.current_page = _number;
    if (this.current_page == 1) {
      this.disablePrev = false;
      this.disableNext = true;
    } else if (this.current_page == this._last_page) {
      this.disableNext = false;
      this.disablePrev = true;
    } else {
      this.disablePrev = true;
      this.disableNext = true;
    }
    var result = this.xyzUserListService.getMoreTodos(this.id, this.current_page);
    result.subscribe((response) => {
      this.products_cate = response.product_cate.data;
      console.log(this.products_cate);
    });
    return false;
  }


}
