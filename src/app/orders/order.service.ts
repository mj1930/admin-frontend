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

  getUsers(reqBody) {
    return this.http.post('users/get-all-users', reqBody);
  }

  updateStatus(reqBody) {
    return this.http.post('orders/update-order', reqBody);
  }

  getSortOrders(reqBody) {
    return this.http.post('orders/sort-order', reqBody);
  }
  
  getOrdersByStatus(reqBody) {
    return this.http.post('orders/filter-orders', reqBody);
  }

  searchProducts(reqBody) {
    return this.http.post('orders/search-product', reqBody);
  }

  searchProductsById(reqBody) {
    return this.http.post('orders/search-product-id', reqBody);
  }

  getOrderDetails(id) {
    return this.http.get(`orders/get-order/${id}`);
  }
  
  getPaymentRecords() {
    return this.http.get(`orders/get-payments`);
  }
  
  searchPayments(id) {
    return this.http.post(`orders/search-payments`, {id: id});
  }

  printInvoice(id) {
    return this.http.get(`orders/print-invoice/${id}`);
  }
}
