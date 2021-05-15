import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddCategoryComponent } from './add-category/add-category.component';
import { CategoryListingComponent } from './category-listing/category-listing.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';

const routes: Routes = [
    {path: '', component: AddCategoryComponent},
    {path: 'category-listing', component: CategoryListingComponent},
    {path: 'edit-category-details/:id', component: EditCategoryComponent}
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

  export class CategoryRoutingModule { }