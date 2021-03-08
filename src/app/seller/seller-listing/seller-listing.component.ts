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
      console.log(data);
      this.users = data['data'];
    }, error => {
      console.log(error);
    })
  }


}
