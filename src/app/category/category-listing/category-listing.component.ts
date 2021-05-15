import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-listing',
  templateUrl: './category-listing.component.html',
  styleUrls: ['./category-listing.component.css']
})
export class CategoryListingComponent implements OnInit {

  categories = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories() {
    let reqBody = {
      skip: 0,
      limit: 100
    };
    this.categoryService.getAll(reqBody).subscribe(data => {
      this.categories = data['data'];
    }, error => {
      console.log(error);
    })
  }

  sortData(event) {
    let obj = {
      key: event.target.value ? event.target.value.split('-')[0] : "null",
      sortBy: event.target.value ? (event.target.value.split('-')[1] === 'asc' ? "1" : "-1") : 0 ,
      skip: 0,
      limit: 100000
    };
    this.categoryService.getSortCategories(obj).subscribe((res: any) => {
      if (res.code === 200) {
        this.categories = res.data;
      }
    });
  }

  statusChange(category) {
    let index = this.categories.findIndex(x => x.categoryId == category.categoryId);
    if (index > -1) {
      let status = !this.categories[index].deleted;
      this.categories[index].deleted = status;
      this.categoryService.approveDisapproveCategories({
        categoryId: category.categoryId,
        status
      }).subscribe((data: any) => {
        if (data.code === 200) {
          this.categories[index].status = data['data'].deleted;
        }
      })
    }
  }

}
