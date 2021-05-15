import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastService } from 'src/app/shared/services/toast.service';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  categoryId: any;
  categoriesData: any = [];
  categoryName: any = '';
  constructor(
    private route: ActivatedRoute,
    private toaster: ToastService,
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.categoryId = this.route.snapshot.url[1].path;
    this.getAllCategories()
  }

  getAllCategories() {
    let obj = {
      skip: 0,
      limit: 100,
      categoryId: this.categoryId
    };
    this.categoryService.getAllSubcategories(obj).subscribe((resp: any) => {
      if (resp.code === 200) {
        this.categoriesData = resp['data'];
        this.categoryName = this.categoriesData[this.categoriesData.length - 1];
        this.categoriesData.pop(this.categoriesData.length - 1);
      }
    })
  }

  updateCategory() {
    let obj = {
      categoryId: this.categoryId,
      categoryName: this.categoryName
    };
    this.categoryService.updateCategory(obj).subscribe((resp: any) => {
      if (resp.data === 200) {
        this.toaster.openSnackbar('Category updated Successfully!!');
        return;
      }
      this.toaster.openSnackbar(resp.message);
    })
  }

  updateSubCategory() {
    let names = this.categoriesData.map(cat => ({ "id": cat._id, "name": cat.subCategoryName}));
    let obj = {
      categoryId: this.categoryId,
      subCategory: names
    };
    this.categoryService.updateSubcategory(obj).subscribe((resp: any) => {
      if (resp.data === 200) {
        this.toaster.openSnackbar('Category updated Successfully!!');
        return;
      }
      this.toaster.openSnackbar(resp.message);
    });
  }

}
