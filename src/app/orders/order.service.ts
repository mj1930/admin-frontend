import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  addOrder(req) {
    return this.http.post('orders/add-order', req);
  }

  getOrder(req) {
    return this.http.post('orders/list-orders', req);
  }

  searchProduct(term) {
    return this.http.get(`products/search-products?term=${term}`);
  }

}
