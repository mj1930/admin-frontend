(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{ohma:function(e,t,r){"use strict";r.r(t),r.d(t,"OrderModule",(function(){return B}));var o=r("ofXK"),c=r("dbUT"),s=r("3Pt+"),n=r("tk/3"),a=r("WeEj"),i=r("PCNd"),d=r("tyNb"),l=r("fXoL"),b=r("Byk8"),u=r("J0GB");function h(e,t){1&e&&(l.Ub(0,"div",34),l.Lc(1," No Product found "),l.Tb())}function p(e,t){if(1&e){const e=l.Vb();l.Ub(0,"div",36),l.Ub(1,"div",37),l.Pb(2,"img",38),l.Ub(3,"div",39),l.Ub(4,"h5",40),l.Lc(5),l.Tb(),l.Ub(6,"p",41),l.Lc(7),l.Tb(),l.Ub(8,"button",42),l.fc("click",(function(){l.Ac(e);const r=t.$implicit,o=l.hc(3).index;return l.hc().setProductSearchText(r.itemName,r.productPrice,r._id,o)})),l.Pb(9,"i",43),l.Tb(),l.Tb(),l.Tb(),l.Tb()}if(2&e){const e=t.$implicit;l.Ab(5),l.Mc(null==e?null:e.itemName),l.Ab(2),l.Mc(null==e?null:e.description)}}function m(e,t){if(1&e&&(l.Ub(0,"div",3),l.Jc(1,p,10,2,"div",35),l.Tb()),2&e){const e=l.hc(3);l.Ab(1),l.oc("ngForOf",e.searchResult)}}function f(e,t){if(1&e&&(l.Ub(0,"div",3),l.Ub(1,"div",32),l.Ub(2,"p"),l.Lc(3,"Search Result"),l.Tb(),l.Jc(4,h,2,0,"div",33),l.Jc(5,m,2,1,"div",26),l.Tb(),l.Tb()),2&e){const e=l.hc(2);l.Ab(4),l.oc("ngIf",!e.searchResult.length),l.Ab(1),l.oc("ngIf",e.searchResult.length)}}function g(e,t){if(1&e&&(l.Ub(0,"option",46),l.Lc(1),l.Tb()),2&e){const e=t.$implicit;l.oc("value",e._id),l.Ab(1),l.Mc(null==e?null:e.name)}}function T(e,t){if(1&e){const e=l.Vb();l.Ub(0,"div",5),l.Ub(1,"label",6),l.Lc(2,"Select Seller"),l.Tb(),l.Ub(3,"select",44),l.fc("change",(function(){l.Ac(e);const t=l.hc().index,r=l.hc();return r.changeSeller(r.seller,t)})),l.Jc(4,g,2,2,"option",45),l.Tb(),l.Tb()}if(2&e){const e=l.hc(2);l.Ab(4),l.oc("ngForOf",e.sellers)}}function U(e,t){if(1&e){const e=l.Vb();l.Ub(0,"button",13),l.fc("click",(function(){l.Ac(e);const t=l.hc().index;return l.hc().removeProducts(t)})),l.Lc(1,"Remove "),l.Tb()}}function v(e,t){if(1&e){const e=l.Vb();l.Ub(0,"div",23),l.Ub(1,"div",5),l.Ub(2,"div",24),l.Ub(3,"label",6),l.Lc(4,"Product Name"),l.Tb(),l.Tb(),l.Ub(5,"input",25),l.fc("keyup",(function(){l.Ac(e);const r=t.index;return l.hc().searchProduct(r)})),l.Tb(),l.Tb(),l.Jc(6,f,6,2,"div",26),l.Ub(7,"div",27),l.Ub(8,"label",6),l.Lc(9,"Quantity"),l.Tb(),l.Ub(10,"input",28),l.fc("keyup",(function(){l.Ac(e);const r=t.index;return l.hc().calculateTotalAmount(r)})),l.Tb(),l.Tb(),l.Ub(11,"div",27),l.Ub(12,"label",6),l.Lc(13,"Product Price (MRP)"),l.Tb(),l.Ub(14,"input",29),l.fc("keyup",(function(){l.Ac(e);const r=t.index;return l.hc().calculateTotalAmount(r)})),l.Tb(),l.Tb(),l.Jc(15,T,5,1,"div",30),l.Jc(16,U,2,0,"button",31),l.Tb()}if(2&e){const e=t.index,r=l.hc();l.oc("formGroupName",e),l.Ab(6),l.oc("ngIf",r.isSearchControl&&r.isSearchControl.indx==e),l.Ab(9),l.oc("ngIf",r.sellers.length),l.Ab(1),l.oc("ngIf",r.addOrderForm.get("products").controls.length>1)}}function y(e,t){if(1&e&&(l.Ub(0,"div",47),l.Pb(1,"input",48),l.Ub(2,"label",49),l.Lc(3),l.Tb(),l.Tb()),2&e){const e=t.$implicit;l.Ab(1),l.oc("value",e.text)("checked","Cash On Delivery"===e.text),l.Ab(2),l.Nc(" ",e.text," ")}}let O=(()=>{class e{constructor(e,t,r){this.fb=e,this.orderService=t,this.router=r,this.showSubMenu=!1,this.userName="",this.isSearchControl={name:"",indx:-1},this.paymentModes=[{value:"cod",text:"Cash On Delivery"}],this.sellers=[],this.productLength=0,this.searchResult=[]}ngOnInit(){this.getSellerListing(),this.addOrderForm=this.fb.group({mode:["Phone"],products:this.fb.array([this.fb.group({name:[""],price:[""],quantity:[""],sellerId:[""],productId:[""],sellerName:[""]})]),totalAmnt:[],address:[],userGstin:[""],businessName:[""],paymentMode:["Cash On Delivery"]}),this.userName=JSON.parse(localStorage.getItem("user")).name}addProduct(){this.orderService.addOrder(this.addOrderForm.value).subscribe(e=>{this.router.navigateByUrl("/order/order-listing")},e=>{console.log(e)})}searchProduct(e=0){let t=this.addOrderForm.get("products").controls[e].controls.name.value;t?this.orderService.searchProduct(t).subscribe(t=>{this.searchResult=t.data,this.isSearchControl.name=this.addOrderForm.get("products").controls[e].controls.name.value,this.isSearchControl.indx=e},e=>{console.log(e)}):this.searchResult=[]}calculateTotalAmount(e=0){let t=0;for(let r=0;r<this.addOrderForm.get("products").controls.length;r++){const e=this.addOrderForm.get("products").controls[r].controls.quantity.value,o=this.addOrderForm.get("products").controls[r].controls.price.value;e&&o&&(t+=e*o),String(this.addOrderForm.controls.totalAmnt.setValue(t))}}getSellerListing(){this.orderService.getUsers({skip:0,limit:1e4}).subscribe(e=>{this.sellers=e.data},e=>{console.log(e)})}setProductSearchText(e,t,r,o=0){this.addOrderForm.get("products").controls[o].controls.name.setValue(e),this.addOrderForm.get("products").controls[o].controls.price.setValue(parseFloat(t)),this.addOrderForm.get("products").controls[o].controls.productId.setValue(r),this.isSearchControl={name:"",indx:-1}}changeSeller(e,t){this.sellers.forEach(e=>{e._id===this.addOrderForm.get("products").controls[t].controls.sellerId.value&&this.addOrderForm.get("products").controls[t].controls.sellerName.setValue(e.name)})}resetForm(){this.addOrderForm.reset()}addProducts(){this.product=this.addOrderForm.get("products"),this.product.push(this.fb.group({name:"",price:null,quantity:null,sellerId:"",productId:"",sellerName:""}))}removeProducts(e){const t=this.addOrderForm.get("products").controls[e].controls.quantity.value,r=this.addOrderForm.get("products").controls[e].controls.price.value,o=this.addOrderForm.get("products").controls[e].controls.productId.value;String(this.addOrderForm.controls.totalAmnt.setValue(this.addOrderForm.controls.totalAmnt.value-t*r)),this.product=this.addOrderForm.get("products"),e>-1&&this.product.removeAt(this.product.value.findIndex(e=>e._id===o))}}return e.\u0275fac=function(t){return new(t||e)(l.Ob(s.d),l.Ob(b.a),l.Ob(d.b))},e.\u0275cmp=l.Ib({type:e,selectors:[["app-add-order"]],decls:50,vars:3,consts:[[1,"page-wrapper","chiller-theme","toggled"],[1,"page-content"],[1,"container-fluid"],[1,"row"],[1,"col",3,"formGroup","ngSubmit"],[1,"form-group"],["for",""],["formControlName","mode",1,"form-control"],["selected","","value","Phone"],["value","Whatsapp"],[1,""],["formArrayName","products"],[3,"formGroupName",4,"ngFor","ngForOf"],["type","button",1,"btn","mb-4","btn-sm","btn-dark",3,"click"],["type","readonly","formControlName","totalAmnt","placeholder","Total amount","disabled","",1,"form-control"],["formControlName","address",1,"form-control"],["type","text","formControlName","userGstin","placeholder","GSTIN",1,"form-control"],["type","text","formControlName","businessName","placeholder","Name of business",1,"form-control"],["class","form-check",4,"ngFor","ngForOf"],["type","submit",1,"btn","btn-primary","btn-sm","rounded","m-0"],[1,"text-center"],[1,"mb-2"],[1,"fa","fa-heart",2,"color","red"],[3,"formGroupName"],[1,"d-flex","justify-content-between"],["type","text","formControlName","name","placeholder","Product Name",1,"form-control",3,"keyup"],["class","row",4,"ngIf"],[1,"form-group","mt-2"],["type","text","formControlName","quantity","placeholder","Product quantity",1,"form-control",3,"keyup"],["type","text","formControlName","price","placeholder","Product price",1,"form-control",3,"keyup"],["class","form-group",4,"ngIf"],["class","btn mb-4 btn-sm btn-dark","type","button",3,"click",4,"ngIf"],[1,"col"],["class","mb-4",4,"ngIf"],[1,"mb-4"],["class","col-sm-4 col-md-3 col-lg-2 my-2",4,"ngFor","ngForOf"],[1,"col-sm-4","col-md-3","col-lg-2","my-2"],[1,"card","px-2","cursor-style"],["src","https://rukminim1.flixcart.com/image/150/150/k0cqqvk0/bottle/4/v/c/1000-venice-fridge-water-bottles-120-cello-original-imafk5tysrejtyhj.jpeg",1,"card-img-top",2,"height","150px"],[1,"card-body","px-0"],[1,"card-title"],[1,"card-text"],["type","button",1,"btn","btn-success","btn-sm","mx-2",3,"click"],["aria-hidden","true",1,"fa","fa-check"],["formControlName","sellerId",1,"form-control",3,"change"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],[1,"form-check"],["type","radio","id","exampleRadios1","formControlName","paymentMode",1,"form-check-input",3,"value","checked"],["for","exampleRadios1",1,"form-check-label"]],template:function(e,t){1&e&&(l.Ub(0,"div",0),l.Pb(1,"app-side-navigation"),l.Ub(2,"main",1),l.Ub(3,"div",2),l.Ub(4,"h2"),l.Lc(5,"Order Booking"),l.Tb(),l.Pb(6,"hr"),l.Ub(7,"div",3),l.Ub(8,"form",4),l.fc("ngSubmit",(function(){return t.addProduct()})),l.Ub(9,"div",5),l.Ub(10,"label",6),l.Lc(11,"Mode Of Booking"),l.Tb(),l.Ub(12,"select",7),l.Ub(13,"option",8),l.Lc(14,"Phone"),l.Tb(),l.Ub(15,"option",9),l.Lc(16,"Whatsapp"),l.Tb(),l.Tb(),l.Tb(),l.Ub(17,"div",10),l.Ub(18,"div",11),l.Jc(19,v,17,4,"div",12),l.Tb(),l.Tb(),l.Ub(20,"button",13),l.fc("click",(function(){return t.addProducts()})),l.Lc(21,"Add Product"),l.Tb(),l.Ub(22,"div",5),l.Ub(23,"label",6),l.Lc(24,"Order Total"),l.Tb(),l.Pb(25,"input",14),l.Tb(),l.Ub(26,"div",5),l.Ub(27,"label",6),l.Lc(28,"Address"),l.Tb(),l.Pb(29,"textarea",15),l.Tb(),l.Ub(30,"div",5),l.Ub(31,"label",6),l.Lc(32,"GST (Applicable only at Business Purchase)"),l.Tb(),l.Pb(33,"input",16),l.Tb(),l.Ub(34,"div",5),l.Ub(35,"label",6),l.Lc(36,"Business Name"),l.Tb(),l.Pb(37,"input",17),l.Tb(),l.Ub(38,"div",5),l.Ub(39,"label",6),l.Lc(40,"Payment Mode"),l.Tb(),l.Jc(41,y,4,3,"div",18),l.Tb(),l.Ub(42,"button",19),l.Lc(43,"Buy product"),l.Tb(),l.Tb(),l.Tb(),l.Ub(44,"footer",20),l.Ub(45,"div",21),l.Ub(46,"small"),l.Lc(47," \xa9 2021 made with "),l.Pb(48,"i",22),l.Lc(49," All Rights Reserved "),l.Tb(),l.Tb(),l.Tb(),l.Tb(),l.Tb(),l.Tb()),2&e&&(l.Ab(8),l.oc("formGroup",t.addOrderForm),l.Ab(11),l.oc("ngForOf",t.addOrderForm.get("products").controls),l.Ab(22),l.oc("ngForOf",t.paymentModes))},directives:[u.a,s.u,s.l,s.f,s.r,s.k,s.e,s.o,s.t,s.c,o.k,s.b,s.g,o.l,s.p],styles:[".cursor-style[_ngcontent-%COMP%]{cursor:pointer}"]}),e})();function L(e,t){if(1&e&&(l.Ub(0,"tbody"),l.Ub(1,"tr"),l.Ub(2,"th",19),l.Lc(3),l.Tb(),l.Ub(4,"td",15),l.Ub(5,"p"),l.Lc(6),l.Tb(),l.Tb(),l.Ub(7,"td"),l.Lc(8),l.Tb(),l.Ub(9,"td",15),l.Ub(10,"p"),l.Lc(11),l.Tb(),l.Tb(),l.Tb(),l.Tb()),2&e){const e=t.$implicit;l.Ab(3),l.Nc(" ",e.name," "),l.Ab(3),l.Mc(e.productId),l.Ab(2),l.Nc(" ",e.quantity," "),l.Ab(3),l.Nc("INR ",e.price,"")}}let A=(()=>{class e{constructor(e,t){this.route=e,this.orderService=t,this.order=[]}ngOnInit(){this.orderId=this.route.snapshot.url[1].path,this.getOrderDetails()}getOrderDetails(){this.orderService.getOrderDetails(this.orderId).subscribe(e=>{200===e.code&&(this.order=e.data)})}getOrderStatus(e){switch(e){case"P":return"Pending";case"D":return"Dispatched";case"RF":return"Refunded";case"RT":return"Returned";case"C":return"Cancelled";case"DL":return"Delivered"}}}return e.\u0275fac=function(t){return new(t||e)(l.Ob(d.a),l.Ob(b.a))},e.\u0275cmp=l.Ib({type:e,selectors:[["app-order-details-view"]],decls:42,vars:2,consts:[[1,"page-wrapper","chiller-theme","toggled"],[1,"page-content"],[1,"container-fluid"],[1,"d-flex","justify-content-between"],[1,"my-2"],["routerLink","/order/order-listing",1,"btn","btn-sm","btn-dark","mx-0","rounded"],[1,"row"],[1,"col"],[1,"table-responsive"],[1,"table","table-bordered","my-3"],[1,"grey","lighten-2"],["scope","col",1,"text-nowrap"],[4,"ngFor","ngForOf"],["scope","row","colspan","2"],[1,"text-nowrap","text-right"],[1,"text-nowrap"],[1,"text-center"],[1,"mb-2"],[1,"fa","fa-heart",2,"color","red"],["scope","row",1,"text-left"]],template:function(e,t){1&e&&(l.Ub(0,"div",0),l.Pb(1,"app-side-navigation"),l.Ub(2,"main",1),l.Ub(3,"div",2),l.Ub(4,"div",3),l.Ub(5,"h2",4),l.Lc(6,"Order Details"),l.Tb(),l.Ub(7,"button",5),l.Lc(8," Back to my orders"),l.Tb(),l.Tb(),l.Pb(9,"hr"),l.Ub(10,"div",6),l.Ub(11,"div",7),l.Ub(12,"div",8),l.Sb(13),l.Ub(14,"table",9),l.Ub(15,"thead",10),l.Ub(16,"tr"),l.Ub(17,"th",11),l.Lc(18,"Product Name"),l.Tb(),l.Ub(19,"th",11),l.Lc(20,"Product Id"),l.Tb(),l.Ub(21,"th",11),l.Lc(22,"Quantity"),l.Tb(),l.Ub(23,"th",11),l.Lc(24,"Price"),l.Tb(),l.Tb(),l.Tb(),l.Jc(25,L,12,4,"tbody",12),l.Ub(26,"tbody"),l.Ub(27,"tr"),l.Pb(28,"th",13),l.Ub(29,"td",14),l.Ub(30,"p"),l.Ub(31,"b"),l.Lc(32,"Sub-Total:"),l.Tb(),l.Tb(),l.Tb(),l.Ub(33,"td",15),l.Ub(34,"p"),l.Lc(35),l.Tb(),l.Tb(),l.Tb(),l.Tb(),l.Tb(),l.Rb(),l.Tb(),l.Tb(),l.Tb(),l.Ub(36,"footer",16),l.Ub(37,"div",17),l.Ub(38,"small"),l.Lc(39," \xa9 2021 made with "),l.Pb(40,"i",18),l.Lc(41," All Rights Reserved "),l.Tb(),l.Tb(),l.Tb(),l.Tb(),l.Tb(),l.Tb()),2&e&&(l.Ab(25),l.oc("ngForOf",null==t.order?null:t.order.products),l.Ab(10),l.Nc("INR ",null==t.order?null:t.order.totalAmnt,""))},directives:[u.a,d.c,o.k],styles:[""]}),e})();var S=r("3WbM");function k(e,t){if(1&e&&(l.Ub(0,"option",24),l.Lc(1),l.Tb()),2&e){const e=t.$implicit;l.oc("value",e.value),l.Ab(1),l.Mc(e.text)}}function P(e,t){if(1&e&&(l.Ub(0,"p"),l.Lc(1),l.Tb()),2&e){const e=t.$implicit;l.Ab(1),l.Mc(null==e?null:e.name)}}function x(e,t){if(1&e&&(l.Ub(0,"p"),l.Lc(1),l.Tb()),2&e){const e=t.$implicit;l.Ab(1),l.Mc(null==e?null:e.quantity)}}function F(e,t){if(1&e&&(l.Ub(0,"p"),l.Lc(1),l.Tb()),2&e){const e=t.$implicit;l.Ab(1),l.Mc(null==e?null:e.sellerName)}}function I(e,t){if(1&e&&(l.Ub(0,"p"),l.Lc(1),l.Tb()),2&e){const e=l.hc().$implicit;l.Ab(1),l.Mc(null==e?null:e.address)}}function M(e,t){if(1&e&&(l.Ub(0,"p"),l.Lc(1),l.Tb()),2&e){const e=l.hc().$implicit;l.Ab(1),l.Mc(null==e||null==e.address?null:e.address.city)}}function N(e,t){if(1&e&&(l.Ub(0,"option",24),l.Lc(1),l.Tb()),2&e){const e=t.$implicit;l.oc("value",e.value),l.Ab(1),l.Mc(e.text)}}function R(e,t){if(1&e){const e=l.Vb();l.Ub(0,"tr"),l.Ub(1,"td"),l.Ub(2,"p"),l.Lc(3),l.Tb(),l.Tb(),l.Ub(4,"td"),l.Ub(5,"p"),l.Lc(6),l.ic(7,"date"),l.Tb(),l.Tb(),l.Ub(8,"td"),l.Ub(9,"p"),l.Lc(10),l.Tb(),l.Tb(),l.Ub(11,"td"),l.Ub(12,"p"),l.Ub(13,"a",30),l.Lc(14),l.Tb(),l.Tb(),l.Tb(),l.Ub(15,"td"),l.Jc(16,P,2,1,"p",29),l.Tb(),l.Ub(17,"td"),l.Jc(18,x,2,1,"p",29),l.Tb(),l.Ub(19,"td"),l.Jc(20,F,2,1,"p",29),l.Tb(),l.Ub(21,"td"),l.Ub(22,"p"),l.Lc(23),l.Tb(),l.Tb(),l.Ub(24,"td"),l.Ub(25,"p"),l.Lc(26),l.Tb(),l.Tb(),l.Ub(27,"td"),l.Ub(28,"p"),l.Lc(29),l.Tb(),l.Tb(),l.Ub(30,"td"),l.Jc(31,I,2,1,"p",20),l.Jc(32,M,2,1,"p",20),l.Tb(),l.Ub(33,"td"),l.Ub(34,"select",31),l.fc("ngModelChange",(function(r){return l.Ac(e),t.$implicit.orderStatus=r}))("change",(function(r){l.Ac(e);const o=t.$implicit;return l.hc(2).updateStatus(o._id,r)})),l.Jc(35,N,2,2,"option",11),l.Tb(),l.Tb(),l.Tb()}if(2&e){const e=t.$implicit,r=t.index,o=l.hc(2);l.Ab(3),l.Mc(r+1),l.Ab(3),l.Mc(l.kc(7,15,null==e?null:e.createdAt,"medium")),l.Ab(4),l.Mc(null==e?null:e.mode),l.Ab(3),l.qc("routerLink","/order/order-details/",null==e?null:e._id,""),l.Ab(1),l.Mc(null==e?null:e._id),l.Ab(2),l.oc("ngForOf",null==e?null:e.products),l.Ab(2),l.oc("ngForOf",null==e?null:e.products),l.Ab(2),l.oc("ngForOf",null==e?null:e.products),l.Ab(3),l.Mc(null==e?null:e.totalAmnt),l.Ab(3),l.Mc(null==e?null:e.status),l.Ab(3),l.Mc(null==e?null:e.paymentMode),l.Ab(2),l.oc("ngIf",(null==e?null:e.mode)!=o.website),l.Ab(1),l.oc("ngIf",(null==e?null:e.mode)==o.website),l.Ab(2),l.oc("ngModel",e.orderStatus),l.Ab(1),l.oc("ngForOf",o.orderStatuses)}}function w(e,t){if(1&e&&(l.Ub(0,"table",25),l.Ub(1,"thead",26),l.Ub(2,"tr",27),l.Ub(3,"th",28),l.Lc(4,"SR NO."),l.Tb(),l.Ub(5,"th",28),l.Lc(6,"Order Date/Time"),l.Tb(),l.Ub(7,"th",28),l.Lc(8,"Mode"),l.Tb(),l.Ub(9,"th",28),l.Lc(10,"Order ID"),l.Tb(),l.Ub(11,"th",28),l.Lc(12,"Product Name"),l.Tb(),l.Ub(13,"th",28),l.Lc(14,"Quantity"),l.Tb(),l.Ub(15,"th",28),l.Lc(16,"Seller"),l.Tb(),l.Ub(17,"th",28),l.Lc(18,"Order Total (INR)"),l.Tb(),l.Ub(19,"th",28),l.Lc(20,"Status"),l.Tb(),l.Ub(21,"th",28),l.Lc(22,"Payment Mode"),l.Tb(),l.Ub(23,"th",28),l.Lc(24,"Address Details"),l.Tb(),l.Ub(25,"th",28),l.Lc(26,"Action"),l.Tb(),l.Tb(),l.Tb(),l.Ub(27,"tbody"),l.Sb(28),l.Jc(29,R,36,18,"tr",29),l.Rb(),l.Tb(),l.Tb()),2&e){const e=l.hc();l.Ab(29),l.oc("ngForOf",e.orders)}}function C(e,t){1&e&&(l.Sb(0),l.Lc(1," No Orders listed "),l.Rb())}const D=[{path:"",component:O},{path:"order-listing",component:(()=>{class e{constructor(e,t){this.orderService=e,this.toaster=t,this.orders=[],this.selectedStatus="",this.orderStatuses=[{text:"Pending",value:"P"},{text:"Dispatched",value:"D"},{text:"Delivered",value:"DL"},{text:"Refunded",value:"RF"},{text:"Cancelled",value:"C"},{text:"Returned",value:"RT"}],this.orderStatus="",this.searchTerm="",this.searchId="",this.orderId=""}ngOnInit(){this.getOrder()}getOrder(){this.orderService.getOrder({skip:0,limit:1e4}).subscribe(e=>{this.orders=e.data,this.setOrderStaus()},e=>{console.log(e)})}updateStatus(e,t){this.orderService.updateStatus({orderId:e,status:t.target.value}).subscribe(e=>{this.getOrder()},e=>{console.log(e)})}setOrderStaus(){this.orders.forEach(e=>{switch(e.orderStatus){case"P":e.status="Pending";break;case"D":e.status="Dispatched";break;case"RF":e.status="Refunded";break;case"RT":e.status="Returned";break;case"DL":e.status="Delivered";break;case"C":e.status="Cancelled"}})}sortData(e){let t={key:e.target.value?e.target.value.split("-")[0]:"null",sortBy:e.target.value?"asc"===e.target.value.split("-")[1]?"1":"-1":0,skip:0,limit:1e5};this.orderService.getSortOrders(t).subscribe(e=>{200===e.code&&(this.orders=e.data,this.setOrderStaus())})}sortByStatus(e){if(e.target.value||this.searchTerm){switch(e.target.value){case"Pending":e.target.value="P";break;case"Dispatched":e.target.value="D";break;case"Refunded":e.target.value="RF";break;case"Returned":e.target.value="RT";break;case"Delivered":e.target.value="DL";break;case"Cancelled":e.target.value="C"}this.selectedStatus=e.target.value,this.orderService.getOrdersByStatus({skip:0,limit:10,status:e.target.value,search:this.searchTerm}).subscribe(e=>{200===e.code&&(this.orders=e.data,this.setOrderStaus())})}else this.getOrder()}searchOrder(){this.searchTerm||this.selectedStatus?this.orderService.searchProducts({skip:0,limit:10,status:this.selectedStatus,search:this.searchTerm}).subscribe(e=>{this.toaster.openSnackbar(e.message),200===e.code&&(this.orders=e.data,this.setOrderStaus())}):this.getOrder()}searchOrderById(){this.searchId?this.orderService.searchProductsById({skip:0,limit:10,status:this.selectedStatus,orderId:this.searchId,search:this.searchTerm?this.searchTerm:""}).subscribe(e=>{this.toaster.openSnackbar(e.message),200===e.code&&(this.orders=e.data,this.setOrderStaus())}):this.getOrder()}}return e.\u0275fac=function(t){return new(t||e)(l.Ob(b.a),l.Ob(S.a))},e.\u0275cmp=l.Ib({type:e,selectors:[["app-order-listing"]],decls:46,vars:6,consts:[[1,"page-wrapper","chiller-theme","toggled"],[1,"page-content"],[1,"container-fluid"],[1,"row"],[1,"filer","col","p-3","rounded","my-2","elegant-color","text-white"],[1,"col-sm-12","col-md-2"],[1,"form-control",3,"change"],["value",""],["value","createdAt-asc"],["value","createdAt-desc"],["name","status-sort",1,"form-control","select-style",3,"ngModel","ngModelChange","change"],[3,"value",4,"ngFor","ngForOf"],[1,"col-sm-12","col-md-3"],[1,"input-group"],["type","search","placeholder","Search Orders by payment mode",1,"form-control","rounded",3,"ngModel","ngModelChange"],["id","search-addon",1,"input-group-text","border-0",2,"cursor","pointer",3,"click"],[1,"fa","fa-search"],["type","search","placeholder","Search Orders by id",1,"form-control","rounded",3,"ngModel","ngModelChange"],[1,"table-responsive","rounded","table-striped","table-bordered"],["class","table",4,"ngIf"],[4,"ngIf"],[1,"text-center"],[1,"mb-2"],[1,"fa","fa-heart",2,"color","red"],[3,"value"],[1,"table"],[1,"grey","lighten-2","small","text-uppercase"],[1,"text-nowrap"],["scope","col"],[4,"ngFor","ngForOf"],[1,"text-primary",3,"routerLink"],["name","status",1,"form-control","select-style",3,"ngModel","ngModelChange","change"]],template:function(e,t){1&e&&(l.Ub(0,"div",0),l.Pb(1,"app-side-navigation"),l.Ub(2,"main",1),l.Ub(3,"div",2),l.Ub(4,"h2"),l.Lc(5,"Order Listing"),l.Tb(),l.Pb(6,"hr"),l.Ub(7,"div",3),l.Ub(8,"div",4),l.Ub(9,"div",3),l.Ub(10,"div",5),l.Lc(11," Sort By Date/Time "),l.Ub(12,"select",6),l.fc("change",(function(e){return t.sortData(e)})),l.Ub(13,"option",7),l.Lc(14,"Default"),l.Tb(),l.Ub(15,"option",8),l.Lc(16,"Order Date/Time (A - Z) "),l.Tb(),l.Ub(17,"option",9),l.Lc(18,"Order Date/Time (Z - A) "),l.Tb(),l.Tb(),l.Tb(),l.Ub(19,"div",5),l.Lc(20," Sort By Status "),l.Ub(21,"select",10),l.fc("ngModelChange",(function(e){return t.orderStatus=e}))("change",(function(e){return t.sortByStatus(e)})),l.Ub(22,"option",7),l.Lc(23,"Default"),l.Tb(),l.Jc(24,k,2,2,"option",11),l.Tb(),l.Tb(),l.Ub(25,"div",12),l.Lc(26," Search Orders by payment mode "),l.Ub(27,"div",13),l.Ub(28,"input",14),l.fc("ngModelChange",(function(e){return t.searchTerm=e})),l.Tb(),l.Ub(29,"span",15),l.fc("click",(function(){return t.searchOrder()})),l.Pb(30,"i",16),l.Tb(),l.Tb(),l.Tb(),l.Ub(31,"div",12),l.Lc(32," Search Orders by order id "),l.Ub(33,"div",13),l.Ub(34,"input",17),l.fc("ngModelChange",(function(e){return t.searchId=e})),l.Tb(),l.Ub(35,"span",15),l.fc("click",(function(){return t.searchOrderById()})),l.Pb(36,"i",16),l.Tb(),l.Tb(),l.Tb(),l.Tb(),l.Tb(),l.Ub(37,"div",18),l.Jc(38,w,30,1,"table",19),l.Jc(39,C,2,0,"ng-container",20),l.Tb(),l.Tb(),l.Ub(40,"footer",21),l.Ub(41,"div",22),l.Ub(42,"small"),l.Lc(43," \xa9 2021 made with "),l.Pb(44,"i",23),l.Lc(45," All Rights Reserved "),l.Tb(),l.Tb(),l.Tb(),l.Tb(),l.Tb(),l.Tb()),2&e&&(l.Ab(21),l.oc("ngModel",t.orderStatus),l.Ab(3),l.oc("ngForOf",t.orderStatuses),l.Ab(4),l.oc("ngModel",t.searchTerm),l.Ab(6),l.oc("ngModel",t.searchId),l.Ab(4),l.oc("ngIf",t.orders.length>0),l.Ab(1),l.oc("ngIf",0==t.orders.length))},directives:[u.a,s.o,s.t,s.r,s.k,s.n,o.k,s.b,o.l,d.e],pipes:[o.d],styles:[".select-style[_ngcontent-%COMP%]{width:130px}"]}),e})()},{path:"order-details/:id",component:A}];let J=(()=>{class e{}return e.\u0275mod=l.Mb({type:e}),e.\u0275inj=l.Lb({factory:function(t){return new(t||e)},imports:[[d.f.forChild(D)],d.f]}),e})(),B=(()=>{class e{}return e.\u0275mod=l.Mb({type:e}),e.\u0275inj=l.Lb({factory:function(t){return new(t||e)},providers:[a.a,b.a],imports:[[o.b,J,c.a,s.h,s.q,n.c,i.a]]}),e})()}}]);