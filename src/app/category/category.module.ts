import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from '../http-interceptor';
import { SharedModule } from '../shared/shared.module';
import { AddCategoryComponent } from './add-category/add-category.component';
import { CategoryRoutingModule } from './category-routing.module';
import { CategoryListingComponent } from './category-listing/category-listing.component';


@NgModule({
  declarations: [AddCategoryComponent, CategoryListingComponent],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    MDBBootstrapModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [httpInterceptorProviders]
})
export class CategoryModule { }
