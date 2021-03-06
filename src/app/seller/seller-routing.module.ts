import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SellerListingComponent } from "./seller-listing/seller-listing.component";
import { SellerProductListingComponent } from "./seller-product-listing/seller-product-listing.component";

const routes: Routes = [
  {path: '', component: SellerListingComponent},
  {path: 'product-listing', component: SellerProductListingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerRoutingModule { }
