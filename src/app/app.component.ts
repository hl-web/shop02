import { element } from 'protractor';
import { XyzUserListService } from './home.service';

import { Component, OnInit, OnDestroy, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
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



  constructor(private router: Router, private xyzUserListService: XyzUserListService, private currentActivatedRoute: ActivatedRoute) {





  }

  ngOnInit() {

    // if (window.location.pathname !== '/') {
      
    //   this.home = false;
      

    // }
    


    if (isPlatformBrowser) {
      this.routerSubscription = this.router.events
        .filter(event => event instanceof NavigationEnd)
        .subscribe(event => {
          window.scrollTo(0, 0);
        });
    }

  }

 

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();

  }
}