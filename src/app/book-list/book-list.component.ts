import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFire } from 'angularfire2';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
})
export class BookListComponent implements OnInit {
  books;
  recentBooks;
  constructor(af: AngularFire) { 
    this.recentBooks = af.database.list('/books');
    this.books = af.database.list('/books');
  }

  ngOnInit() {
  }

}
