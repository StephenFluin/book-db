import { Component, Input } from '@angular/core';

@Component({
    selector: "review",
    template: `
    <div>    
    <div><a [routerLink]="['/users',review.author]">{{review.authorName}}</a> says: {{review.body}}</div>
    <div>Posted on {{review.date}}</div>
  </div>
    `
})
export class ReviewComponent{
    @Input() review;

}