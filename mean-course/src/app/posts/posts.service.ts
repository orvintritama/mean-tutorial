import { Post } from './post.model';

export class PostsService {
    private posts: Post[] = [];

    getPosts() {
        // return a new array object, that is the copy of the original array
        return [...this.posts];
    }

    addPost(title: string, content: string) {
        const post: Post = {title: title, content: content};
        this.posts.push(post);
    }
}