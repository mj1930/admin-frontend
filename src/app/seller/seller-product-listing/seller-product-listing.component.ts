import { Component, OnInit } from '@angular/core';
import { SellerService } from '../seller.service';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/shared/services/toast.service';
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

  constructor(
    private sellerService: SellerService, 
    private router:Router,
    private toaster: ToastService
    ) { }

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
      reqBody['feedback']= data.feedback;
    }
    this.sellerService.approveRejectProduct(reqBody).subscribe((data: any) => {
      this.toaster.openSnackbar(data.message);
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

  sortData(event) {
    let obj = {
      key: event.target.value ? event.target.value.split('-')[0] : "null",
      sortBy: event.target.value ? (event.target.value.split('-')[1] === 'asc' ? "1" : "-1") : 0 ,
      skip: 0,
      limit: 100000
    };
    this.sellerService.getSortProducts(obj).subscribe((res: any) => {
      if (res.code === 200) {
        this.products = res.data;
      }
    });
  }

}
