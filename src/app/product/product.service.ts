import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  addProduct(req) {
    return this.http.post('products/add-product', req);
  }

  getProducts() {
    return this.http.get('products/get-all-products');
  }
}
