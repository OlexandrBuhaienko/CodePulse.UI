import { Observable, Subscription } from 'rxjs';
import { CategoryService } from './../services/category.service';
import { Component, OnDestroy } from '@angular/core';
import { AddCategoryRequest } from '../models/add-category-request-model';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnDestroy {

  model: AddCategoryRequest;
  private addCategorySubscription ?:Subscription;
  constructor (private CategoryService:CategoryService) {
    this.model = {
      Name: '',
      UrlHandle: ''
    };
  }


  


onFormSubmit(){
  this.addCategorySubscription = this.CategoryService.addCategory(this.model)
  .subscribe({
    next: (response) => {
      console.log('This was successful!');
    }, 
    error: (error) => {
      console.error('Bad request!');
    }
  });
}
ngOnDestroy(): void {
this.addCategorySubscription?.unsubscribe();
}
}
