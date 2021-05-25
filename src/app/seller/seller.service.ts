import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class SellerService {
  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.post('products/get-all-products-admin', {skip:0, limit:100});
  }

  getProductDetails(id) {
    return this.http.get(`products/get-product-details/${id}`);
  }

  getUsers(reqBody) {
    return this.http.post('users/get-all-users', reqBody);
  }

  getCustomers(reqBody) {
    return this.http.post('users/get-all-customers', reqBody);
  }

  approveRejectProduct(reqBody) {
    return this.http.post('products/approve-disapprove-product', reqBody);
  }

  getSortProducts(reqBody) {
    return this.http.post('products/sort-products', reqBody);
  }

  getSortSellers(reqBody) {
    return this.http.post('users/sort-user', reqBody);
  }

  searchSeller(reqBody) {
    return this.http.post('users/search-user', reqBody);
  }

  approveDisapproveCustomer(reqBody) {
    return this.http.post('users/approve-disapprove-customer', reqBody);
  }

  approveDisapproveSeller(reqBody) {
    return this.http.post('users/approve-disapprove-seller', reqBody);
  }
  
  VerifyUnverifySeller(reqBody) {
    return this.http.post('users/verify-unverify-seller', reqBody);
  }
  
  getSellerDetails(reqBody) {
    return this.http.post('users/get-seller-details', reqBody);
  }
  

}
