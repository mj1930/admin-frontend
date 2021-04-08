import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../category.service';
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

  constructor(private categoryService: CategoryService, private router: Router) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    let reqBody = {
      skip: 0,
      limit: 100
    };
    this.categoryService.getCategory(reqBody).subscribe(data => {
      console.log(data);
      this.categories = data['data'];
    }, error => {
      console.log(error);
    })
  }

  categoryFileUpload(event) {
    this.categoryImage = event.target.files[0]
  }


  addCategory() {
    let formData = new FormData();
    // let reqBody = {
    //   subCategory: this.subCategory
    // }
    formData.append('subCategory', this.subCategory);
    // reqBody['subCategory'] = this.subCategory;
    if (this.categoryId) {
      formData.append('categoryId', this.categoryId);
    // reqBody['categoryId'] = this.categoryId;

      this.categoryService.addSubCategory(formData).subscribe(data => {
        console.log(data);
        this.router.navigateByUrl('/category/category-listing');
      }, error => {
        console.log(error)
      })
    } else {
      // formData.append("file", this.categoryImage);
      formData.append('category', this.category);
      formData.append('catImg', this.categoryImage)
      // reqBody['category'] = this.category;
      this.categoryService.addCategory(formData).subscribe(data => {
        console.log(data);
        this.router.navigateByUrl('/category/category-listing');
      }, error => {
        console.log(error)
      })
    }

  }

}
