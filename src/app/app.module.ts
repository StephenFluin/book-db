import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { AngularFireModule, AuthMethods, AuthProviders } from 'angularfire2';


import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookNewComponent } from './book-new/book-new.component';
import { BookViewComponent } from './book-view/book-view.component';
import { UserComponent } from './user/user.component';
import { ReviewComponent } from './review.component';
import { RefirebasePipe } from './refirebase.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    BookListComponent,
    BookNewComponent,
    BookViewComponent,
    UserComponent,
    RefirebasePipe,
    ReviewComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: WelcomeComponent },
      { path: 'books', component: BookListComponent },
      { path: 'books/add', component: BookNewComponent },
      { path: 'books/:id', component: BookViewComponent },
      { path: 'users/:id', component: UserComponent },
    ]),
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyBwBT9AWm6soQ4aB0V_0BFCxiKYBwGYT88",
        authDomain: "book-db.firebaseapp.com",
        databaseURL: "https://book-db.firebaseio.com",
        storageBucket: "book-db.appspot.com",
      },
      { method: AuthMethods.Password, provider: AuthProviders.Password }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
