import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddOrderComponent } from './add-order/add-order.component';

const routes: Routes = [
    {path: '', component: AddOrderComponent},
    // {path: 'product-listing', component: SellerProductListingComponent}
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

  export class OrderRoutingModule { }