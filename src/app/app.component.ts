import { element } from 'protractor';
import { XyzUserListService } from './home.service';

import { Component, OnInit, OnDestroy, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { Subscription } from 'rxjs/Rx';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  routerSubscription: Subscription;
  isRequesting1: boolean = true;
  isRequesting2: boolean = true;
  load: boolean = true;
  constructor(private router: Router, private xyzUserListService: XyzUserListService) {

    xyzUserListService.changeEmitted4.subscribe(
      text => {

        this.isRequesting1 = text;
        console.log(this.isRequesting1);


      });

    xyzUserListService.changeEmitted5.subscribe(
      text => {

        this.isRequesting2 = text;
        console.log(this.isRequesting2);

      });

  }

  ngOnInit() {
    if (isPlatformBrowser) {
      this.routerSubscription = this.router.events
        .filter(event => event instanceof NavigationEnd)
        .subscribe(event => {
          window.scrollTo(0, 0);
        });
    }
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.load = false;
      console.log(this.load);
    }, 3000);
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }
}