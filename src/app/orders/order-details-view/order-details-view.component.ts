import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-details-view',
  templateUrl: './order-details-view.component.html',
  styleUrls: ['./order-details-view.component.css']
})
export class OrderDetailsViewComponent implements OnInit {

  orderId: any;
  order: any = [];
  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
    this.orderId = this.route.snapshot.url[1].path;
    this.getOrderDetails();
  }

  getOrderDetails() {
    this.orderService.getOrderDetails(this.orderId).subscribe((resp: any) => {
      if (resp.code === 200) {
        this.order = resp['data'];
      }
    })
  }

  getOrderStatus(s) {
    switch(s) {
      case 'P' :
        return "Pending";
        break;
      case 'D' :
        return "Dispatched";
        break;
        case 'RF' :
        return "Refunded";
        break;
        case 'RT' :
        return "Returned";
        break;
        case 'C' :
        return "Cancelled";
        break;
        case 'DL' :
        return "Delivered";
        break;
    }
  }

}
