import { Component } from '@angular/core';
import { AddBlogPost } from '../models/add-blog-post.model';
import { share } from 'rxjs';

@Component({
  selector: 'app-add-blogpost',
  templateUrl: './add-blogpost.component.html',
  styleUrls: ['./add-blogpost.component.css'],
})
export class AddBlogpostComponent {
  model: AddBlogPost;
  constructor() {
    this.model = {
      title: '',
      shortDescription: '',
      urlHandle: '',
      content: '',
      featureImageUrl: '',
      author: '',
      isVisible: true,
      pablishedDate: new Date()
    }
  }
  onFormSubmit() : void{
    console.log(this.model);
  }
}

