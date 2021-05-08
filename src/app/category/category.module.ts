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
import { CategoryService } from './category.service';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { EditCategoryComponent } from './edit-category/edit-category.component';


@NgModule({
  declarations: [AddCategoryComponent, CategoryListingComponent, EditCategoryComponent],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    MDBBootstrapModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    AutocompleteLibModule
  ],
  providers: [httpInterceptorProviders, CategoryService]
})
export class CategoryModule { }
