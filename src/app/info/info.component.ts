import { Subject } from 'rxjs/Subject';
import { Router, RouterStateSnapshot, NavigationEnd, NavigationStart } from '@angular/router';
import { element } from 'protractor';
import { XyzUserListService } from './../home.service';
import { Component, OnInit, AfterViewInit, ElementRef, trigger, state, animate, transition, style, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms/src/forms";
import * as $ from 'jquery';
import { Account } from './../account';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
  animations: [
    trigger('visibilityChanged', [
      state('shown', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('* => *', animate('5s'))
    ])
  ],

})
export class InfoComponent implements OnInit {
  public isRequesting: boolean;
  visibility = 'shown';
  isVisible: boolean = true;
  flag_success: boolean;
  flag_validate_email_old: boolean;
  confirmPassword: string;
  check_token: boolean;
  name: string;
  editName: string;
  email: string;
  editEmail: string;
  editPassword: string = '';
  usernam: string;
  id: string;
  password: string;
  products_order$: any;
  detail_order_product: any;
  flag_validate_email: boolean;
  link_img: string;
  domain: string;
  sTotal: number;
  account = new Account('', '', '');
  flag_search1: boolean;
  no_product: boolean;
  flag_info: number;
  load: boolean;
  temp: any;
  isDirty: boolean = false;
  private sub: any;
  showDialog: boolean = false;
  active: boolean = false;
  urlNext: string;
  flagshow: boolean = false;

  private obs = new Subject();
  public obs$ = this.obs.asObservable();
  private obs1 = new Subject();
  public obs11 = this.obs1.asObservable();
  constructor(private xyzUserListService: XyzUserListService, private router: Router) {
    xyzUserListService.changeEmitted2.subscribe(
      text => {

        this.flag_search1 = text;
        console.log(this.flag_search1);

      });
  }
  handleDialogButton(): Promise<boolean> {
    var prom = new Promise<boolean>((resolve, reject) => {
      this.obs$.subscribe((result) => {
        // console.log(result);

        if (result) {
          resolve(true)
        }
        else {
          this.showDialog = false;
          reject(false);
        }
      });

      this.obs11.subscribe((result) => {
        // console.log(result);

        if (result) {
          this.showDialog = false;
          reject(false);
        }
        else {

          resolve(true);
        }
      });
    });
    return prom;
  }
  // @ViewChild('name') nameChange: ElementRef;
  canDeactivate(): Promise<boolean> {
    //isDirty check su thay doi cua form
    if (this.isDirty) {
      this.showDialog = true;
      return this.handleDialogButton().catch(function () {
        return false;
      });
    }
    else {
      return Promise.resolve(true).catch(function () {
        return false;
      });
    }

    //return window.confirm('WARNING: You have unsaved changes. Press Cancel to go back and save these changes, or OK to lose these changes.');
    // }
    // return Promise.resolve(true);

  }


  loading() {
    this.products_order$ = this.xyzUserListService.getOrderUser(this.id);
   
 
   
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
  }


  ngOnInit() {

    if ((localStorage.getItem("id") == null)) {
      this.check_token = true;
    }
    else {
      this.check_token = false;

      this.account.name = localStorage.getItem("name");
      this.account.email = localStorage.getItem("email");
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
  }

  detail_order(id) {
    this.xyzUserListService.getOrderUserDetail(id).subscribe((response) => {
      this.detail_order_product = response;
      let total = 0;
      for (let _i = 0; _i < response.length; _i++) {
        var product = response[_i];
        console.log(product.price);
        total += (product.price * product.qty);
      }
      this.sTotal = total;
    });
  }


  updateInfo(form: NgForm) {
    this.account.email = form.value.email;
    this.account.name = form.value.name;
    this.account.password = form.value.password;

    var result = this.xyzUserListService.updateInfo(this.account, this.id);
    result.subscribe((data) => {
      console.log(data);
      if (data.status == 'yes') {
        this.flag_success = true;
        this.isVisible = !this.isVisible;
        console.log(this.isVisible);

        this.visibility = this.isVisible ? 'shown' : 'hidden';
        form.controls.password.reset();
        form.controls.confirmPassword.reset();

        this.router.navigate(['/thong-tin']);
      }
    },
      (errorData) => {
        console.log(errorData);

      });
  }

  checkemail_same(em: string, id) {
    this.flag_validate_email = false;

    var result = this.xyzUserListService.validate_email_user(em, this.id);


    result.subscribe((data) => {
      if (data.success === 'yes') {
        this.flag_validate_email = true;
      }
      else if (data.success === 'old') {
        this.flag_validate_email_old = true;
      }
    },
      (errorData) => {
      });
  }

  ngAfterViewInit() {

    $(document).ready(function () {

      $('ul.tabs li').click(function () {
        var tab = $(this).data('tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-container').removeClass('current');

        $(this).addClass('current');
        $("#" + tab).addClass('current');
      });
      var appendthis = ("<div class='modal-overlay js-modal-close'></div>");
      $(document).on("click", "a[data-modal-id]", function (e) {

        e.preventDefault();
        $("body").append(appendthis);
        $(".modal-overlay").fadeTo(500, 0.7);
        //$(".js-modalbox").fadeIn(500);
        var modalBox = $(this).attr('data-modal-id');
        $('#' + modalBox).fadeIn($(this).data());

      });
      $(document).on("click", ".js-modal-close, .modal-overlay", function () {

        $(".modal-box, .modal-overlay").fadeOut(500, function () {
          $(".modal-overlay").remove();
        });

      });

    });



  }

}
