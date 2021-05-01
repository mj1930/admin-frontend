import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/shared/services/toast.service';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-listing',
  templateUrl: './order-listing.component.html',
  styleUrls: ['./order-listing.component.css']
})
export class OrderListingComponent implements OnInit {

  orders: any = [];
  selectedStatus: string = '';
  orderStatuses = [
    {text: 'Pending', value: 'P'},
    {text: 'Dispatched', value: 'D'},
    {text: 'Refunded', value: 'RF'},
    {text: 'Cancelled', value: 'C'},
    {text: 'Returned', value: 'RT'}
  ];
  orderStatus: string = "";
  searchTerm: string = '';

  constructor(private orderService: OrderService, private toaster: ToastService) { }

  ngOnInit(): void {
    this.getOrder();
  }

  getOrder() {
    let reqBody = {
      skip:0,
      limit: 10000
    };
    this.orderService.getOrder(reqBody).subscribe(data => {
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
    });
  }

  sortData(event) {
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

  sortByStatus(event?) {
    if (!event.target.value) {
      this.getOrder();
      return;
    }
    switch(event.target.value) {
      case 'Pending' :
        event.target.value = "P";
        break;
      case 'Dispatched' :
        event.target.value = "D";
        break;
        case 'Refunded' :
        event.target.value = "RF";
        break;
        case 'Returned' :
        event.target.value = "RT";
        break;
    }
    this.selectedStatus = event.target.value;
    let obj = {
      skip:0,
      limit: 10,
      status: event.target.value
    };
    this.orderService.getOrdersByStatus(obj).subscribe((resp: any) => {
      if (resp.code === 200) {
        this.orders = resp['data'];
      }
    })
  }

  searchOrder() {
    if (!this.searchTerm) {
      this.getOrder();
      return;
    }
    let obj = {
      skip: 0,
      limit: 10,
      status: this.selectedStatus,
      search: this.searchTerm
    };
    this.orderService.searchProducts(obj).subscribe((resp: any) => {
      this.toaster.openSnackbar(resp.message);
      if (resp.code === 200) {
        this.orders = resp['data'];
      }
    });
  }

}
