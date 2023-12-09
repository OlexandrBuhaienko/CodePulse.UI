import { Injectable } from '@angular/core';
import { AddCategoryRequest } from '../models/add-category-request-model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/Category.model';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
 
  constructor(private http: HttpClient) {}
  addCategory(model:AddCategoryRequest): Observable<void>{
    return this.http.post<void>('https://localhost:7081/api/categories', model);
  }
  getAllCategories() : Observable<Category[]>{
    return this.http.get<Category[]>('https://localhost:7081/api/Categories')
  }
}
