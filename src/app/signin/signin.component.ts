import { Observable } from 'rxjs';
import { XyzUserListService } from './../home.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms/src/forms";
import { Account } from './../account';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase/app';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  user: Observable<firebase.User>;
  private currentUser: firebase.User;

  account = new Account('', '', '');
  error1: any;
  flag_error: boolean;
  email_err: string;
  password_err: string;
  submitted = false;
  flag_validate_email: boolean;
  flag_search1: boolean;
  flag_validate_pass: boolean;
  isChecked: boolean = false;
  flag_logout: boolean;
  flag_info: boolean;
  error_mg: any;
  flag_social: boolean;
  constructor(private router: Router, private xyzUserListService: XyzUserListService, private afAuth: AngularFireAuth, private db: AngularFireDatabase) {
    xyzUserListService.changeEmitted2.subscribe(
      text => {

        this.flag_search1 = text;
        console.log(this.flag_search1);

      });
    this.user = afAuth.authState;

  }
  loginGoogle() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(val => {

      sessionStorage.id = val.user.uid;
      sessionStorage.name = val.user.displayName;
      sessionStorage.login = '2';
      this.flag_logout = true;

      this.xyzUserListService.emitChange3(this.flag_logout);

      this.router.navigate(['/thong-tin']);
    }

    ).catch(err => {

      this.flag_social = true;
      this.error_mg = err.message;
    });
  }
  loginFacebook() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(val => {


      sessionStorage.id = val.user.uid;
      sessionStorage.name = val.user.displayName;
      sessionStorage.login = '2';
      this.flag_logout = true;

      this.xyzUserListService.emitChange3(this.flag_logout);

      this.router.navigate(['/thong-tin']);
    }

    ).catch(err => {

      this.flag_social = true;
      this.error_mg = err.message;
    });
  }
  loginGithub() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GithubAuthProvider()).then(val => {



      sessionStorage.id = val.user.uid;
      sessionStorage.name = val.user.displayName;
      sessionStorage.login = '2';
      this.flag_logout = true;

      this.xyzUserListService.emitChange3(this.flag_logout);

      this.router.navigate(['/thong-tin']);
    }

    ).catch(err => {

      this.flag_social = true;
      this.error_mg = err.message;
    });
  }

  loginTwitter() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider()).then(val => {


      sessionStorage.id = val.user.uid;
      sessionStorage.name = val.user.displayName;
      sessionStorage.login = '2';
      this.flag_logout = true;

      this.xyzUserListService.emitChange3(this.flag_logout);

      this.router.navigate(['/thong-tin']);
    }

    ).catch(err => {

      this.flag_social = true;
      this.error_mg = err.message;
    });
  }
  ngOnInit() {
    //if (localStorage.getItem("token") === null) {
    if ((sessionStorage.id == null) && (localStorage.getItem("id") == null)) {
      //this.authService.logOut();
    }
    else {

      this.router.navigate(['/thong-tin']);
    }


  }

  checkemail_same(em: string) {


    this.flag_validate_email = false;
    if (/(.+)@(.+){2,}\.(.+){2,}/.test(em)) {
      var result = this.xyzUserListService.validate_email_user(em, 0);


      result.subscribe((data) => {
        console.log(data);

        if (data.success === 'no') {
          this.flag_validate_email = true;

        }

      },
        (errorData) => {
        });
    }

  }



  doCheck($event) {
    this.isChecked = !this.isChecked;
    console.log(this.isChecked);

  }
  onSignin(form: NgForm) {


    this.account.email = form.value.email;
    this.account.password = form.value.password;

    this.xyzUserListService.signin(this.account, this.isChecked)
      .subscribe(
      tokenData => {
        this.flag_validate_pass = false;
        console.log(tokenData);

        this.router.navigate(['/thong-tin']);
      },
      error => {
        console.log(error);
        if (error.status == 401) { this.flag_validate_pass = true; }
        this.flag_error = true;
        this.error1 = error.json();
      }
      )
  }
}
