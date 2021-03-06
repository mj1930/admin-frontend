import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {

  addProductForm: FormGroup;
  showSubMenu = false;
  userName = '';

  constructor(private fb: FormBuilder, 
    private productService: ProductService, 
    private router: Router
    ) { }

  ngOnInit(): void {
    this.addProductForm = this.fb.group({
      productId:[],
      itemName:[],
      countryOfOrigin:[],
      manufacturer:[],
      itemsNum:[],
      colorName:[],
      includedComponents:[],
      exclosureMaterial:[],
      itemTypeName:[],
      sizeMap:[],
      manufacturerContact:[],
      productDimensions: this.fb.group({
        length: null, 
        width: null, 
        height: null 
      }),
      unitCount:[],
      unitCountType:[]
    });
this.userName = JSON.parse(localStorage.getItem('user')).name;
  }

  addProduct(valid) {
    if(!valid) {
      return;
    }
    this.productService.addProduct(this.addProductForm.value).subscribe(data => {
      console.log(data);
      this.router.navigateByUrl('/inventory');
    }, error => {
      console.log(error);
    })
  }

  resetForm() {
    this.addProductForm.reset();
    this.router.navigateByUrl('/seller/active-dashboard');
  }

}
