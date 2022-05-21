import { Component } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent {
  posts = [
    {title: 'First post', content: 'first post content'},
    {title: 'Sec post', content: 'sec post content'},
    {title: 'Th post', content: 'th post content'},
  ];
}
