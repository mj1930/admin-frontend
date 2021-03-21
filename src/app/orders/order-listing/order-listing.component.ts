import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-listing',
  templateUrl: './order-listing.component.html',
  styleUrls: ['./order-listing.component.css']
})
export class OrderListingComponent implements OnInit {

  orders: any;

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.getOrder();
  }

  getOrder() {
    let reqBody = {
      skip:"0",
      limit: "100"
    };
    this.orderService.getOrder(reqBody).subscribe(data => {
      console.log(data);
      this.orders = data['data'];
    }, error => {
      console.log(error);
    })
  }

}
