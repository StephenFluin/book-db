import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
})
export class BookListComponent implements OnInit {
  books;
  recentBooks;
  constructor() { 
    this.books = Observable.of([]);
    this.recentBooks = this.books;
  }

  ngOnInit() {
  }

}
