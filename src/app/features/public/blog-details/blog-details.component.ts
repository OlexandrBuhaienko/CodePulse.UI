import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPostService } from '../../blog-post/services/blog-post.service';
import { Observable } from 'rxjs';
import { BlogPost } from '../../blog-post/models/blog-post.model';
import { DatePipe, CommonModule } from '@angular/common';
import { MarkdownComponent } from 'ngx-markdown';


@Component({
  selector: 'app-blog-details',
  standalone: true,
  imports: [DatePipe, MarkdownComponent, CommonModule],
  templateUrl: './blog-details.component.html',
  styleUrl: './blog-details.component.css',
})
export class BlogDetailsComponent implements OnInit {
  url: string | null = null;
  blogPost$?: Observable<BlogPost>;

  constructor(private route: ActivatedRoute,
    private blogPostService: BlogPostService
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        this.url = params.get('url');
      }, 
    });

    //Fetch the blog details by url 
    if (this.url){
      this.blogPost$ = this.blogPostService.getBlogPostByUrlHandle(this.url);
    }
    
  }
}
