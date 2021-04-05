import { Component, OnInit } from '@angular/core';
import { SellerService } from '../seller.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-seller-product-listing',
  templateUrl: './seller-product-listing.component.html',
  styleUrls: ['./seller-product-listing.component.css']
})
export class SellerProductListingComponent implements OnInit {

  products;
  status;
  showFeedbackSection = false;
  feedback = '';

  constructor(private sellerService: SellerService, private router:Router) { }

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

  approveRejectProduct(data, type) {
    let reqBody = {
      status : type === 'approve' ? true : false,
      productId: data._id
    }
    if(type === 'reject') {
      reqBody['feedback']= this.feedback;
    }
    this.sellerService.approveRejectProduct(reqBody).subscribe(data => {
      console.log(data);
      //this.products = data;
      this.feedback = '';
      this.getSellerProductListing();
    }, error => {
      console.log(error);
    })
  }

  goToProductDescPage(id) {
    this.router.navigate(['/seller/product-description', id]);
  }

}
