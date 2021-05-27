import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddOrderComponent } from './add-order/add-order.component';
import { OrderDetailsViewComponent } from './order-details-view/order-details-view.component';
import { OrderInvoiceComponent } from './order-invoice/order-invoice.component';
import { OrderListingComponent } from './order-listing/order-listing.component';
import { PaymentRecordsComponent } from './payment-records/payment-records.component';

const routes: Routes = [
    {path: '', component: AddOrderComponent},
    {path: 'order-listing', component: OrderListingComponent},
    { path: 'payment-records', component: PaymentRecordsComponent },
    {path: 'order-details/:id', component: OrderDetailsViewComponent},
  { path: 'print-invoice/:id', component: OrderInvoiceComponent }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

  export class OrderRoutingModule { }