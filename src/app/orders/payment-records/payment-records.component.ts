import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-payment-records',
  templateUrl: './payment-records.component.html',
  styleUrls: ['./payment-records.component.css']
})
export class PaymentRecordsComponent implements OnInit {

  paymentRecords: any = [];
  searchTerm: string = '';
  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
    this.getPaymentRecords();
  }

  getPaymentRecords() {
    this.orderService.getPaymentRecords().subscribe((resp: any) => {
      if (resp.code === 200) {
        this.paymentRecords = resp['data'];
      }
    });
  }

  searchPayment() {
    if (!this.searchTerm) {
      this.getPaymentRecords();
      return;
    }
    this.orderService.searchPayments(this.searchTerm).subscribe((resp: any) => {
      if (resp.code === 200) {
        this.paymentRecords = [resp['data']];
      }
    })

  }

}
