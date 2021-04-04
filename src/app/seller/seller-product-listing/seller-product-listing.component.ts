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
  showHide: boolean = false;
  feedback: string = '';

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

  approveRejectProduct(data, status) {
    let reqBody = {
      status,
      productId: data._id,
      feedback: this.feedback,
    }
    this.sellerService.approveRejectProduct(reqBody).subscribe(data => {
      console.log(data);
      //this.products = data;
      this.getSellerProductListing();
      this.showHide = false;
      this.feedback = '';
    }, error => {
      console.log(error);
    })
  }

  showHideFeedbackBox() {
    this.showHide = !this.showHide;
  }

}
