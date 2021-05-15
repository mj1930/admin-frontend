import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  addCategory(req) {
    return this.http.post('category/add-category', req);
  }

  addSubCategory(req) {
    return this.http.post('category/add-subcategory', req);
  }

  getCategory(req) {
    return this.http.post('category/get-all-categories', req);
  }

  getAll(req) {
    return this.http.post('category/get-all', req);
  }

  getSortCategories(reqBody) {
    return this.http.post('category/sort-category', reqBody);
  }
  
  approveDisapproveCategories(reqBody) {
    return this.http.post('category/approve-disapprove-categories', reqBody);
  }
  
  getAllSubcategories(reqBody) {
    return this.http.post('category/get-all-subcategories', reqBody);
  }

  updateCategory(reqBody) {
    return this.http.post('category/update-category', reqBody);
  }

  updateSubcategory(reqBody) {
    return this.http.post('category/update-subcategory', reqBody);
  }

}
