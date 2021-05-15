import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { SellerListingComponent } from "./seller-listing/seller-listing.component";
import { SellerProductListingComponent } from "./seller-product-listing/seller-product-listing.component";

const routes: Routes = [
  { path: '', component: SellerListingComponent },
  { path: 'product-listing', component: SellerProductListingComponent },
  { path: 'product-description/:id', component: ProductDescriptionComponent },
  { path: 'customer', component: CustomerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerRoutingModule { }
