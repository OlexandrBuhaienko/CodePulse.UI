import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-blogpost',
  standalone: true,
  imports: [],
  templateUrl: './edit-blogpost.component.html',
  styleUrl: './edit-blogpost.component.css'
})
export class EditBlogpostComponent implements OnInit {
  constructor(private route: ActivatedRoute){

  }


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
