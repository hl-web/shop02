import { Component, OnInit } from '@angular/core';
import { POSTS } from './faq';
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  posts: any[] = [];
  ngOnInit() {
    setTimeout(() => {
      this.posts = POSTS.slice();
    }, 500);
  }

}
