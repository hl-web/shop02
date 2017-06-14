import { NgForm } from '@angular/forms/src/forms';
import { Router } from '@angular/router';
import { XyzUserListService } from './../home.service';
import { Component, OnInit, trigger, state, animate, transition, style } from '@angular/core';
import { Account } from './../account';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [
    trigger('visibilityChanged', [
      state('shown', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('* => *', animate('5s'))
    ])
  ],
})
export class ContactComponent implements OnInit {
    visibility = 'shown';
  isVisible: boolean = true;
    flag_success: boolean;
  name: string;
  email: string;
  public url: string;
  messagee: string;
  account = new Account('', '', '');
  flag_search1: boolean;
  constructor(private router: Router, private xyzUserListService: XyzUserListService) {
    xyzUserListService.changeEmitted2.subscribe(
      text => {

        this.flag_search1 = text;
        console.log(this.flag_search1);

      });
  }

  ngOnInit() {


  }
  contact(form: NgForm) {
    var data = {
      name: form.value.name,
      email: form.value.email,
      url: form.value.url,
      messagee: form.value.messagee
    }
  


    var result = this.xyzUserListService.contact(data);
    result.subscribe((data) => {
     
      if (data.success == 'yes') {
        this.flag_success = true;
        this.isVisible = !this.isVisible;



        this.visibility = this.isVisible ? 'shown' : 'hidden';
        form.reset();

      }
    },
      (errorData) => {
      });
  }

}
