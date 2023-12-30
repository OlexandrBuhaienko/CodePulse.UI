import { CategoryService } from './../services/category.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Category } from '../models/category.model';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css'],
})
export class EditCategoryComponent implements OnInit, OnDestroy{
  id: string | null = null;
  paramsSubscription ?: Subscription;
  category?: Category;
  constructor(private route: ActivatedRoute,
    private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.paramsSubscription = this.route.paramMap.subscribe({
        next: (params) => {
            this.id = params.get('id');//Name of the id variable, have to be the same as the last variable
            // inside the path of EditCategoryComponent in the app-routing.module.ts file!
            if(this.id) {
              // get the data from the API for this category Id
              this.categoryService.getCategoryById(this.id).subscribe({
                next : (response) => 
                {
                  this.category = response;
                }
              }  
              );
            }
        } 
      });
  }

  onFormSubmit(): void{
    console.log(this.category);
  }
 
  ngOnDestroy(): void {
    this.paramsSubscription?.unsubscribe();
  }

}
