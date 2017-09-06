import { XyzUserListService } from './../home.service';
import { Router } from '@angular/router';
import { Component, OnInit, trigger, state, animate, transition, style } from '@angular/core';
import { NgForm } from "@angular/forms/src/forms";
import { Account } from './../account';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  animations: [
    trigger('visibilityChanged', [
      state('shown', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('* => *', animate('5s'))
    ])
  ],
})
export class SignupComponent implements OnInit {
  visibility = 'shown';
  isVisible: boolean = true;
  flag_success: boolean;
  account = new Account('', '', '');
  confirmPassword: string;
  name: string;
  email: string;
  password: string;
  flag_validate_email: boolean;
  flag_search1: boolean;
  result: any;
  constructor(private router: Router, private xyzUserListService: XyzUserListService) {
    xyzUserListService.changeEmitted2.subscribe(
      text => {

        this.flag_search1 = text;
        console.log(this.flag_search1);

      });
  }

  ngOnInit() {
  }
  onSignup(form: NgForm) {
    this.account.email = form.value.email;
    this.account.name = form.value.name;
    this.account.password = form.value.password;
    console.log(this.account);

    this.xyzUserListService.signup(this.account)
      .subscribe(
      response => {
        console.log(response.message);
        if (response.status == 'yes') {
          this.flag_success = true;
          this.isVisible = !this.isVisible;
          this.flag_validate_email = false;
          console.log(this.isVisible);

          this.visibility = this.isVisible ? 'shown' : 'hidden';
          setTimeout(() => {
            this.router.navigate(['/dang-nhap']);
          }, 2000)
          // this.router.navigate(['/dang-nhap']);
        }

      },
      error => console.log(error)
      );
  }
  checkemail_same(em: string) {

    //this.flag_validate_email = false;

    this.result = this.xyzUserListService.validate_email_user(em, 0);


    // result.subscribe((data) => {
    //   if (data.success === 'yes') {
    //     this.flag_validate_email = true;
    //   }

    // },
    //   (errorData) => {
    //   });
  }
}
