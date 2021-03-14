import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddOrderComponent } from './add-order/add-order.component';
import { OrderListingComponent } from './order-listing/order-listing.component';

const routes: Routes = [
    {path: '', component: AddOrderComponent},
    {path: 'order-listing', component: OrderListingComponent},
    // {path: 'product-listing', component: SellerProductListingComponent}
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

  export class OrderRoutingModule { }