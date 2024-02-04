import { BlogPostService } from './../services/blog-post.service';
import { Component } from '@angular/core';
import { AddBlogPost } from '../models/add-blog-post.model';
import { share } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-add-blogpost',
  templateUrl: './add-blogpost.component.html',
  styleUrls: ['./add-blogpost.component.css'],
})
export class AddBlogpostComponent {
  model: AddBlogPost;
  constructor(private blogPostService: BlogPostService, private router: Router) {
    this.model = {
      title: '',
      shortDescription: '',
      urlHandle: '',
      content: '',
      featuredImageUrl: '',
      author: '',
      isVisible: true,
      publishedDate: new Date()
    }
  }
  onFormSubmit() : void{
    this.blogPostService.createBlogPost(this.model)
    .subscribe({
      next: (response) => {
        this.router.navigateByUrl('admin/blogposts');
      }
      }
    );
  }
}

