import { Component, OnInit } from '@angular/core';
import { SellerService } from '../seller.service';

@Component({
  selector: 'app-seller-listing',
  templateUrl: './seller-listing.component.html',
  styleUrls: ['./seller-listing.component.css']
})
export class SellerListingComponent implements OnInit {

  users = [];
  skip = 0;
  limit = -1;

  constructor(private sellerService: SellerService) { }

  ngOnInit(): void {
    this.getSellerListing();
  }

  getSellerListing() {
    let reqBody = {
      skip: this.skip,
      limit: this.limit
    }
    this.sellerService.getUsers(reqBody).subscribe(data => {
      this.users = data['data'];
    }, error => {
      console.log(error);
    })
  }

  sortData(event) {
    let obj = {
      key: event.target.value ? event.target.value.split('-')[0] : "null",
      sortBy: event.target.value ? (event.target.value.split('-')[1] === 'asc' ? "1" : "-1") : 0 ,
      skip: 0,
      limit: 100000
    };
    this.sellerService.getSortSellers(obj).subscribe((res: any) => {
      if (res.code === 200) {
        this.users = res.data;
      }
    });
  }


}
