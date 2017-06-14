import { XyzUserListService } from './../home.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  products_detail: any;
  id: number;
  name_product_detail: string;
  price_product_detail: number;
  image_product_detail: any;
  link_img: string;
  domain: string;
  des_product_detail: any;
  id_product_detail: number;
  related_product: any; private sub: any;
  images: any;
  no_product_related: boolean;
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
      this.xyzUserListService.getdetail_product(this.id).subscribe((response) => {
        this.products_detail = response.product_cate;
        console.log(this.products_detail);
        this.name_product_detail = this.products_detail.name;
        this.price_product_detail = this.products_detail.price;
        this.image_product_detail = this.products_detail.image;
        this.des_product_detail = this.products_detail.description;
        this.id_product_detail = this.products_detail.id;
        //related product
        this.related_product = response.product_related;
        if (this.related_product.length <= 0) {
          this.no_product_related = true;
        }
        else {
          this.no_product_related = false;
        }
        this.images = response.image;
      });
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
  ngAfterViewInit() {

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
  }

}
