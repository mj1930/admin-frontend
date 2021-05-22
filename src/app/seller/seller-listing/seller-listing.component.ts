import { Component, OnInit } from '@angular/core';
import { SellerService } from '../seller.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastService } from 'src/app/shared/services/toast.service';
@Component({
  selector: 'app-seller-listing',
  templateUrl: './seller-listing.component.html',
  styleUrls: ['./seller-listing.component.css']
})
export class SellerListingComponent implements OnInit {
  users = [];
  skip = 0;
  limit = 100;
  searchTerm: string = '';
  isloading = true;
  constructor(
    private sellerService: SellerService,
    private spinner: NgxSpinnerService,
    private toaster: ToastService
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

  searchSeller() {
    if (!this.searchTerm) {
      this.getSellerListing();
      return;
    }
    let obj = {
      skip: 0,
      limit: 10,
      search: this.searchTerm
    };
    this.sellerService.searchSeller(obj).subscribe((resp: any) => {
      this.toaster.openSnackbar(resp.message);
      if (resp.code === 200) {
        this.users = resp.data;
      }
    }, error => {
      this.toaster.openSnackbar(error);
    })
  }

  statusChange(customer) {
    let index = this.users.findIndex(x => x._id == customer._id);
    if (index > -1) {
      this.users[index].isActive = !customer.isActive;
      this.sellerService.approveDisapproveSeller({
        sellerId: customer._id,
        status: this.users[index].isActive
      }).subscribe((data: any) => {
        this.toaster.openSnackbar(data.message);
        if (data.code === 200) {
          this.users[index].isActive = data['data'].isActive;
        }
      })
    }
  }
  
  statusChangeVerification(customer) {
    let index = this.users.findIndex(x => x._id == customer._id);
    if (index > -1) {
      this.users[index].isVerified = !customer.isVerified;
      this.sellerService.VerifyUnverifySeller({
        sellerId: customer._id,
        status: this.users[index].isVerified
      }).subscribe((data: any) => {
        this.toaster.openSnackbar(data.message);
        if (data.code === 200) {
          this.users[index].isVerified = data['data'].isVerified;
        }
      })
    }
  }

}
