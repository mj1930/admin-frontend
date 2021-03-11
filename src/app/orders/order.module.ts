import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from '../http-interceptor';
import { SharedModule } from '../shared/shared.module';
import { AddOrderComponent } from './add-order/add-order.component';
import { OrderRoutingModule } from './order-routing.module';


@NgModule({
  declarations: [AddOrderComponent],
  imports: [
    CommonModule,
    OrderRoutingModule,
    MDBBootstrapModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [httpInterceptorProviders]
})
export class OrderModule { }
