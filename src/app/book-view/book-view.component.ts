import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { ActivatedRoute } from '@angular/router';
import "rxjs/add/operator/switchMap";

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
})
export class BookViewComponent {
  book;
  newReview = {};
  constructor(public af: AngularFire, public route: ActivatedRoute) {
    route.params.switchMap(params => {
      return this.af.database.object('/books/' + params['id'])
    }).subscribe(n => this.book = n);
  }
  review(bookKey, review) {
    this.af.database.list(`/books/${bookKey}/reviews/`).push(review);
  }

}
