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

}
