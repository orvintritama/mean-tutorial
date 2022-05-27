import { Component, Input } from '@angular/core';

import { Post } from '../post.model'
import { PostsService } from '../posts.service';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent {
  @Input() posts = [];

  constructor(public postsService: PostsService) {}
}
