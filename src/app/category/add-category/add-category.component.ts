import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../category.service';
import { ToastService } from 'src/app/shared/services/toast.service';
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  categories = [];
  category = '';
  subCategory = '';
  categoryId = null;
  showInputForCategory = false;
  categoryImage: any;

  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private toaster: ToastService
  ) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    let reqBody = {
      skip: 0,
      limit: 100
    };
    this.categoryService.getCategory(reqBody).subscribe(
      data => {
        console.log(data);
        this.categories = data['data'];
      },
      error => {
        console.log(error);
      }
    );
  }

  categoryFileUpload(event) {
    this.categoryImage = event.target.files[0];
  }

  addCategory() {
    if (!this.categoryId && !this.showInputForCategory) {
      this.toaster.openSnackbar("Select category first!!");
      return;
    }
    if ((!this.category || !this.subCategory) && this.showInputForCategory) {
      this.toaster.openSnackbar("Both category and subcategory can't be empty!!");
      return;
    }
    let reqBody = {
      subCategory: this.subCategory
    }
    reqBody['categoryId'] = this.categoryId;
    if (this.categoryId) {
      this.categoryService.addSubCategory(reqBody).subscribe(
        () => {
          this.toaster.openSnackbar('Subcategory Added Successfully!!');
          this.router.navigateByUrl('/category/category-listing');
        },
        error => {
          this.toaster.openSnackbar(error);
        }
      );
    } else {
      let formData = new FormData();
      formData.append("subCategory", this.subCategory);
      formData.append('category', this.category);
      formData.append('catImg', this.categoryImage);
      // reqBody['category'] = this.category;
      if (this.categoryImage) {
        this.categoryService.addCategory(formData).subscribe(
          (resp: any) => {
            if (resp.code === 200)
              this.router.navigateByUrl('/category/category-listing');
            this.toaster.openSnackbar(resp.message);
          },
          error => {
            this.toaster.openSnackbar(error);
          }
        );
      } else {
        this.toaster.openSnackbar('Please add category image also!!'); 
      }
    }
  }
}
