import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookNewComponent } from './book-new/book-new.component';
import { BookViewComponent } from './book-view/book-view.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    BookListComponent,
    BookNewComponent,
    BookViewComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: '', component: WelcomeComponent},
      {path: 'books', component: BookListComponent},
      {path: 'books/:id', component: BookViewComponent},
      {path: 'users/:id', component: UserComponent},
      {path: 'books/add', component: BookNewComponent},
    ]),
    MaterialModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
