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
  paymentModes = [{value:'debit', text:'Debit Card / Credit Card'},
  {value:'upi', text:'UPI Payment'},
  {value:'gateway', text:'Payment Gateway (PayTM, PhonePe, GooglePay)'},
  {value:'cod', text:'Cash On Delivery'}]

  constructor(private fb: FormBuilder, 
    private orderService: OrderService, 
    private router: Router
    ) { }

  ngOnInit(): void {
    this.addOrderForm = this.fb.group({
     
  mode: [],
  // products: this.fb.array([this.fb.group({
  //   name: '',
  //   price:null,
  //   quantity: null
  // })]),
  products: this.fb.group({
    name: '',
    price:null,
    quantity: null
  }),
  //userId: [],
  totalAmnt:[],
  address:[],
  userGstin:[],
  businessName:[],
  paymentMode:[]
    });
this.userName = JSON.parse(localStorage.getItem('user')).name;
  }

  addProduct() {
    this.orderService.addOrder(this.addOrderForm.value).subscribe(data => {
      console.log(data);
      this.router.navigateByUrl('/order/order-listing');
    }, error => {
      console.log(error);
    })
  }

  searchResult = [];
  searchProduct() {
    this.orderService.searchProduct(this.addOrderForm.controls['products']['controls']['name'].value).subscribe(data => {
      console.log(data);
      this.searchResult=data['data'];
    }, error => {
      console.log(error);
    })
  }

  calculateTotalAmount() {
    const quantity = this.addOrderForm.controls['products']['controls']['quantity'].value;
    const price = this.addOrderForm.controls['products']['controls']['price'].value;

    if( quantity && price) {
      String(this.addOrderForm.controls['totalAmnt'].setValue(quantity * price));
    }
  }

  resetForm() {
    this.addOrderForm.reset();
   // this.router.navigateByUrl('/seller/active-dashboard');
  }

}
