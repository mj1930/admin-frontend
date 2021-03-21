import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from '../http-interceptor';
import { SharedModule } from '../shared/shared.module';
import { AddOrderComponent } from './add-order/add-order.component';
import { OrderRoutingModule } from './order-routing.module';
import { OrderListingComponent } from './order-listing/order-listing.component';
import { OrderService } from './order.service';


@NgModule({
  declarations: [AddOrderComponent, OrderListingComponent],
  imports: [
    CommonModule,
    OrderRoutingModule,
    MDBBootstrapModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [httpInterceptorProviders, OrderService]
})
export class OrderModule { }
