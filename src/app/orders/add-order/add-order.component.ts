import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {
  addOrderForm: FormGroup;
  showSubMenu = false;
  userName = '';
  isSearchControl :any= { name: "", indx: -1};
  product: any;
  paymentModes = [
    {value:'cod', text:'Cash On Delivery'}
  ];
  sellers = [];
  productLength: number = 0;

  constructor(private fb: FormBuilder, 
    private orderService: OrderService, 
    private router: Router
    ) { }

  ngOnInit(): void {
    this.getSellerListing();
    this.addOrderForm = this.fb.group({
     
    mode: ['Phone'],
    // products: this.fb.array([this.fb.group({
    //   name: '',
    //   price:null,
    //   quantity: null
    // })]),
    products: this.fb.array([
      this.fb.group({
        name: [''],
        price: [''],
        quantity: [''],
        sellerId: [''],
        productId: [''],
        sellerName: ['']
      }),
    ]),
    //userId: [],
    totalAmnt:[],
    address:[],
    userGstin:[""],
    businessName:[""],
    paymentMode:['Cash On Delivery']
      });
    this.userName = JSON.parse(localStorage.getItem('user')).name;
    console.log(this.addOrderForm.get('products')['controls'][0]['controls']['name']);
  }

  addProduct() {
    this.orderService.addOrder(this.addOrderForm.value).subscribe(data => {
      this.router.navigateByUrl('/order/order-listing');
    }, error => {
      console.log(error);
    })
  }

  searchResult = [];
  searchProduct(index = 0) {
    let searchTerm = this.addOrderForm.get('products')['controls'][index]['controls']['name'].value;
    if (!searchTerm) {
      this.searchResult = [];
      return;
    }
    this.orderService.searchProduct(searchTerm).subscribe(data => {
      this.searchResult = data['data'];
      this.isSearchControl.name = this.addOrderForm.get('products')['controls'][index]['controls']['name'].value;
      this.isSearchControl.indx = index;
    }, error => {
      console.log(error);
    })
  }

  calculateTotalAmount(index = 0) {
    const quantity = this.addOrderForm.get('products')['controls'][index]['controls']['quantity'].value;
    const price = this.addOrderForm.get('products')['controls'][index]['controls']['price'].value;

    if( quantity && price) {
      String(this.addOrderForm.controls['totalAmnt'].setValue(quantity * price));
    }
  }

  
  getSellerListing() {
    let reqBody = {
      skip: 0,
      limit: 10000
    }
    this.orderService.getUsers(reqBody).subscribe(data => {
      this.sellers = data['data'];
    }, error => {
      console.log(error);
    })
  }

  setProductSearchText(productName, price, productId, index =0) {
    this.addOrderForm.get('products')['controls'][index]['controls']['name'].setValue(productName);
    this.addOrderForm.get('products')['controls'][index]['controls']['price'].setValue(parseFloat(price));
    this.addOrderForm.get('products')['controls'][index]['controls']['productId'].setValue(productId);
    this.isSearchControl = { name: "", indx: -1};
  }

  changeSeller(seller, index) {
    this.sellers.forEach(item => {
      if(item._id === this.addOrderForm.get('products')['controls'][index]['controls']['sellerId'].value) {
        this.addOrderForm.get('products')['controls'][index]['controls']['sellerName'].setValue(item.name);
      }
    }) 
  }

  resetForm() {
    this.addOrderForm.reset();
   // this.router.navigateByUrl('/seller/active-dashboard');
  }

  addProducts() {
    this.product = this.addOrderForm.get('products') as FormArray;
    this.product.push(
      this.fb.group({
        name: '',
        price: null,
        quantity: null,
        sellerId: '',
        productId: '',
        sellerName: ''
      })
    );
    this.productLength++;
  }

  // removeProducts() {
  //   this.product = this.addOrderForm.get('products') as FormArray;
  //   this.product.pop();
  //   this.productLength--;
  // }

}
