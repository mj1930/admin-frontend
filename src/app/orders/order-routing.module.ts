import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddOrderComponent } from './add-order/add-order.component';
import { OrderDetailsViewComponent } from './order-details-view/order-details-view.component';
import { OrderListingComponent } from './order-listing/order-listing.component';

const routes: Routes = [
    {path: '', component: AddOrderComponent},
    {path: 'order-listing', component: OrderListingComponent},
    {path: 'order-details', component: OrderDetailsViewComponent},
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

  export class OrderRoutingModule { }