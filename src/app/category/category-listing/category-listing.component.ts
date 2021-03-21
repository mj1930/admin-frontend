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
      console.log(data);
      this.categories = data['data'];
    }, error => {
      console.log(error);
    })
  }

}
