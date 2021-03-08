import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellerListingComponent } from "./seller-listing/seller-listing.component";
import { SellerProductListingComponent } from "./seller-product-listing/seller-product-listing.component";
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SellerRoutingModule } from './seller-routing.module';
import { httpInterceptorProviders } from '../http-interceptor';
import { SellerService } from './seller.service';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [SellerListingComponent, SellerProductListingComponent],
  imports: [
    CommonModule,
    SellerRoutingModule,
    MDBBootstrapModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [httpInterceptorProviders, SellerService]
})
export class SellerModule { }
