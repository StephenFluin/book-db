import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
})
export class BookNewComponent {
  review = {};
  book = {};
  response;
  constructor(public af: AngularFire) { }

  add(book, review) {
    review.date = new Date();
    review.author = "me";
    review.authorName = "Stephen Fluin";
    book.reviews = {"me": review};
    let result = this.af.database.list('/books').push(book);
  }

}
