import { Component, OnInit } from '@angular/core';
import { SellerService } from '../seller.service';

@Component({
  selector: 'app-seller-product-listing',
  templateUrl: './seller-product-listing.component.html',
  styleUrls: ['./seller-product-listing.component.css']
})
export class SellerProductListingComponent implements OnInit {

  products;
  status;

  constructor(private sellerService: SellerService) { }

  ngOnInit(): void {
    this.getSellerProductListing();
  }

  getSellerProductListing() {
    this.sellerService.getProducts().subscribe(data => {
      console.log(data);
      this.products = data['data'];
    }, error => {
      console.log(error);
    })
  }

  approveRejectProduct(data) {
    let reqBody = {
      status : !data.isApproved,
      productId: data._id
    }
    this.sellerService.approveRejectProduct(reqBody).subscribe(data => {
      console.log(data);
      //this.products = data;
      this.getSellerProductListing();
    }, error => {
      console.log(error);
    })
  }

}
