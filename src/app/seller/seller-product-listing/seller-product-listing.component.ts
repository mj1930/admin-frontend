import { Component, OnInit } from '@angular/core';
import { SellerService } from '../seller.service';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/shared/services/toast.service';
import { OrderService } from 'src/app/orders/order.service';
import { CategoryService } from 'src/app/category/category.service';
@Component({
  selector: 'app-seller-product-listing',
  templateUrl: './seller-product-listing.component.html',
  styleUrls: ['./seller-product-listing.component.css']
})
export class SellerProductListingComponent implements OnInit {

  products;
  status;
  skip = 0;
  limit = 100;
  showFeedback = -1;
  feedback = '';
  searchTerm: string = '';
  categories: any = [];
  users: any = [];

  constructor(
    private sellerService: SellerService, 
    private orderService: OrderService,
    private router:Router,
    private toaster: ToastService,
    private categoryService: CategoryService
    ) { }

  ngOnInit(): void {
    this.getSellerProductListing();
    this.getSellerListing();
  }

  getSellerProductListing() {
    this.sellerService.getProducts().subscribe((data: any) => {
      // this.toaster.openSnackbar(data.message);
      this.products = data['data'];
      this.getProductSeller();
      this.getAllCategory();
      this.getProductCategory();
    }, error => {
      this.toaster.openSnackbar(error);
    })
  }

  getAllCategory() {
    let obj = {
      skip: 0,
      limit: 100
    };
    this.categoryService.getCategory(obj).subscribe((resp: any) => {
      if (resp.code === 200) {
        this.categories = resp['data'];
      }
    });
  };

  getProductCategory() {
    this.products.forEach((item: any, i) => {
      let index = this.categories.findIndex(x => x._id == item.categoryId);
      if (index > -1) {
        let categoryName = this.categories.find(x => x._id == item.categoryId).categoryName;
        this.products[i]['categoryName'] = categoryName;
      }
    });
  }

  getProductSeller() {
    this.products.forEach((item: any, i) => {
      let index = this.users.findIndex(x => x._id == item.userId);
      if (index > -1) {
        let userName = this.users.find(x => x._id == item.userId).name;
        let email = this.users.find(x => x._id == item.userId).email;
        this.products[i]['sellerName'] = userName;
        this.products[i]['sellerEmail'] = email;
      }
    });
  }

  getSellerListing() {
    //this.isLoading = true;
    let reqBody = {
      skip: this.skip,
      limit: this.limit
    };
    this.sellerService.getUsers(reqBody).subscribe(
      data => {
        this.users = data['data'];
        this.getProductSeller();
      },
      error => {
        console.log(error);
      }
    );
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
      this.toaster.openSnackbar(error);
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
    }, error => {
      this.toaster.openSnackbar(error);
    });
  }

  searchProduct() {
    if (!this.searchTerm) {
      this.getSellerProductListing();
      return;
    }
    this.orderService.searchProduct(this.searchTerm).subscribe((resp: any) => {
      this.toaster.openSnackbar(resp.message);
      if (resp.code === 200) {
        this.products = resp['data'];
      }
    }, error => {
      this.toaster.openSnackbar(error);
    })
  }

  showFeedbackFn(index) {
    this.showFeedback = index;
  }

}
