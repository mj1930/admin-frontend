import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class SellerService {
  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get('products/get-all-products');
  }

  getUsers(reqBody) {
    return this.http.post('users/get-all-users', reqBody);
  }

  approveRejectProduct(reqBody) {
    return this.http.post('products/approve-disapprove-product', reqBody);
  }
  

}
