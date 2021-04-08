import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-listing',
  templateUrl: './order-listing.component.html',
  styleUrls: ['./order-listing.component.css']
})
export class OrderListingComponent implements OnInit {

  orders: any;

  orderStatuses = [
    {text: 'Pending', value: 'P'},
    {text: 'Dispatched', value: 'D'},
    {text: 'Refunded', value: 'RF'},
    {text: 'Cancelled', value: 'C'},
    {text: 'Returned', value: 'RT'}
  ];

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.getOrder();
  }

  getOrder() {
    let reqBody = {
      skip:0,
      limit: 10000
    };
    this.orderService.getOrder(reqBody).subscribe(data => {
      console.log(data);
      this.orders = data['data'];
      this.setOrderStaus();
    }, error => {
      console.log(error);
    })
  }

  updateStatus(id, event) {
    let reqBody = {
      orderId: id,
      status: event.target.value
    }
    this.orderService.updateStatus(reqBody).subscribe(data => {
      console.log(data);
     this.getOrder();

    }, error => {
      console.log(error);
    })
  }

  setOrderStaus() {
    this.orders.forEach(item => {
      switch(item.orderStatus ) {
        case 'P' :
          item['status'] = "Pending";
          break;
        case 'D' :
          item['status'] = "Dispatched";
          break;
          case 'RF' :
          item['status'] = "Refunded";
          break;
          case 'RT' :
          item['status'] = "Returned";
          break;
      }
      
    })
  }

  sortData(event) {
    console.log(event)
    let obj = {
      key: event.target.value ? event.target.value.split('-')[0] : "null",
      sortBy: event.target.value ? (event.target.value.split('-')[1] === 'asc' ? "1" : "-1") : 0 ,
      skip: 0,
      limit: 100000
    };
    this.orderService.getSortOrders(obj).subscribe((res: any) => {
      if (res.code === 200) {
        this.orders = res.data;
        this.setOrderStaus();
      }
    });
  }

}
