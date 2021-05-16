import { Component, OnInit } from '@angular/core';
import { SellerService } from '../seller.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
  providers: [SellerService]
})
export class CustomerComponent implements OnInit {

  skip = 0;
  limit = 100;
  customers: any = [];
  constructor(
    private sellerService: SellerService
  ) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers() {
    let reqBody = {
      skip: this.skip,
      limit: this.limit
    };
    this.sellerService.getCustomers(reqBody).subscribe(
      data => {
        this.customers = data['data'];
      },
      error => {
        console.log(error);
      }
    );
  }

  statusChange(customer) {
    let index = this.customers.findIndex(x => x._id == customer._id);
    if (index > -1) {
      this.customers[index].isDeleted = !this.customers[index].isDeleted;
      this.sellerService.approveDisapproveCustomer({
        customerId: customer._id,
        status: this.customers[index].isDeleted
      }).subscribe((data: any) => {
        if (data.code === 200) {
          this.customers[index].status = data['data'].isDeleted;
        }
      })
    }
  }

}
