import { Component, OnInit } from '@angular/core';
import { SellerService } from '../seller.service';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-seller-listing',
  templateUrl: './seller-listing.component.html',
  styleUrls: ['./seller-listing.component.css']
})
export class SellerListingComponent implements OnInit {
  users = [];
  skip = 0;
  limit = -1;
  isloading = true;
  constructor(
    private sellerService: SellerService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.getSellerListing();
    // this.showSpinner();
  }

  getSellerListing() {
    //this.isLoading = true;
    let reqBody = {
      skip: this.skip,
      limit: this.limit
    };
    this.sellerService.getUsers(reqBody).subscribe(
      data => {
        this.isloading = false;
        console.log(data);
        this.users = data['data'];
      },
      error => {
        console.log(error);
      }
    );
  }

  sortData(event) {
    let obj = {
      key: event.target.value ? event.target.value.split('-')[0] : 'null',
      sortBy: event.target.value
        ? event.target.value.split('-')[1] === 'asc'
          ? '1'
          : '-1'
        : 0,
      skip: 0,
      limit: 100000
    };
    this.sellerService.getSortSellers(obj).subscribe((res: any) => {
      if (res.code === 200) {
        this.users = res.data;
      }
    });
  }

  showSpinner() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 6000);
  }
}
