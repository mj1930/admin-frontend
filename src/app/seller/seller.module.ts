import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellerListingComponent } from './seller-listing/seller-listing.component';
import { SellerProductListingComponent } from './seller-product-listing/seller-product-listing.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SellerRoutingModule } from './seller-routing.module';
import { httpInterceptorProviders } from '../http-interceptor';
import { SellerService } from './seller.service';
import { SharedModule } from '../shared/shared.module';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { OrderService } from '../orders/order.service';

@NgModule({
  declarations: [
    SellerListingComponent,
    SellerProductListingComponent,
    ProductDescriptionComponent
  ],
  imports: [
    CommonModule,
    SellerRoutingModule,
    MDBBootstrapModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    FormsModule,
    NgxSpinnerModule
  ],
  providers: [httpInterceptorProviders, SellerService, OrderService]
})
export class SellerModule {}
