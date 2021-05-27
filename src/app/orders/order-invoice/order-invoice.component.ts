import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-invoice',
  templateUrl: './order-invoice.component.html',
  styleUrls: ['./order-invoice.component.css']
})
export class OrderInvoiceComponent implements OnInit {

  orderId: any;
  invoiceDetails: any = {};
  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
    this.orderId = this.route.snapshot.url[1].path;
    this.getInvoiceDetails();
  }

  getInvoiceDetails() {
    this.orderService.printInvoice(this.orderId).subscribe((resp: any) => {
      if (resp.code === 200) {
        this.invoiceDetails = resp['data'];
      }
    })
  }

  totalCalculate(quantity, orderPrice) {
    return quantity * orderPrice;
  }

}
