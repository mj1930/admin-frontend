(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{ohma:function(e,t,r){"use strict";r.r(t),r.d(t,"OrderModule",(function(){return R}));var o=r("ofXK"),c=r("dbUT"),n=r("3Pt+"),s=r("tk/3"),l=r("WeEj"),a=r("PCNd"),b=r("tyNb"),i=r("fXoL"),d=r("Byk8"),u=r("J0GB");function p(e,t){1&e&&(i.Ub(0,"div",30),i.Lc(1," No Product found "),i.Tb())}function m(e,t){if(1&e){const e=i.Vb();i.Ub(0,"div",32),i.Ub(1,"div",33),i.fc("click",(function(){i.Ac(e);const r=t.$implicit;return i.hc(3).setProductSearchText(r.itemName,r.productPrice)})),i.Pb(2,"img",34),i.Ub(3,"div",35),i.Ub(4,"h5",36),i.Lc(5),i.Tb(),i.Ub(6,"p",37),i.Lc(7),i.Tb(),i.Ub(8,"button",38),i.Pb(9,"i",39),i.Tb(),i.Tb(),i.Tb(),i.Tb()}if(2&e){const e=t.$implicit;i.Ab(5),i.Mc(null==e?null:e.itemName),i.Ab(2),i.Mc(null==e?null:e.description)}}function h(e,t){if(1&e&&(i.Ub(0,"div",3),i.Jc(1,m,10,2,"div",31),i.Tb()),2&e){const e=i.hc(2);i.Ab(1),i.oc("ngForOf",e.searchResult)}}function f(e,t){if(1&e&&(i.Ub(0,"div",3),i.Ub(1,"div",28),i.Ub(2,"p"),i.Lc(3,"Search Result"),i.Tb(),i.Jc(4,p,2,0,"div",29),i.Jc(5,h,2,1,"div",14),i.Tb(),i.Tb()),2&e){const e=i.hc();i.Ab(4),i.oc("ngIf",!e.searchResult.length),i.Ab(1),i.oc("ngIf",e.searchResult.length)}}function g(e,t){if(1&e&&(i.Ub(0,"option",42),i.Lc(1),i.Tb()),2&e){const e=t.$implicit;i.oc("value",e._id),i.Ab(1),i.Mc(null==e?null:e.name)}}function T(e,t){if(1&e){const e=i.Vb();i.Ub(0,"div",5),i.Ub(1,"label",6),i.Lc(2,"Select Seller"),i.Tb(),i.Ub(3,"select",40),i.fc("change",(function(){i.Ac(e);const t=i.hc();return t.changeSeller(t.seller)})),i.Jc(4,g,2,2,"option",41),i.Tb(),i.Tb()}if(2&e){const e=i.hc();i.Ab(4),i.oc("ngForOf",e.sellers)}}function U(e,t){if(1&e&&(i.Ub(0,"div",43),i.Pb(1,"input",44),i.Ub(2,"label",45),i.Lc(3),i.Tb(),i.Tb()),2&e){const e=t.$implicit;i.Ab(1),i.oc("value",e.text)("checked","Cash On Delivery"===e.text),i.Ab(2),i.Nc(" ",e.text," ")}}let v=(()=>{class e{constructor(e,t,r){this.fb=e,this.orderService=t,this.router=r,this.showSubMenu=!1,this.userName="",this.paymentModes=[{value:"cod",text:"Cash On Delivery"}],this.sellers=[],this.searchResult=[]}ngOnInit(){this.getSellerListing(),this.addOrderForm=this.fb.group({mode:["Phone"],products:this.fb.group({name:"",price:null,quantity:null,sellerId:"",productId:"",sellerName:""}),totalAmnt:[],address:[],userGstin:[""],businessName:[""],paymentMode:["Cash On Delivery"]}),this.userName=JSON.parse(localStorage.getItem("user")).name}addProduct(){this.orderService.addOrder(this.addOrderForm.value).subscribe(e=>{this.router.navigateByUrl("/order/order-listing")},e=>{console.log(e)})}searchProduct(){this.orderService.searchProduct(this.addOrderForm.controls.products.controls.name.value).subscribe(e=>{this.searchResult=e.data},e=>{console.log(e)})}calculateTotalAmount(){const e=this.addOrderForm.controls.products.controls.quantity.value,t=this.addOrderForm.controls.products.controls.price.value;e&&t&&String(this.addOrderForm.controls.totalAmnt.setValue(e*t))}getSellerListing(){this.orderService.getUsers({skip:0,limit:1e4}).subscribe(e=>{this.sellers=e.data},e=>{console.log(e)})}setProductSearchText(e,t,r){this.addOrderForm.controls.products.controls.name.setValue(e),this.addOrderForm.controls.products.controls.price.setValue(parseFloat(t)),this.addOrderForm.controls.products.controls.productId.setValue(r)}changeSeller(e){this.sellers.forEach(e=>{e._id===this.addOrderForm.controls.products.controls.sellerId.value&&this.addOrderForm.controls.products.controls.sellerName.setValue(e.name)})}resetForm(){this.addOrderForm.reset()}}return e.\u0275fac=function(t){return new(t||e)(i.Ob(n.c),i.Ob(d.a),i.Ob(b.b))},e.\u0275cmp=i.Ib({type:e,selectors:[["app-add-order"]],decls:62,vars:4,consts:[[1,"page-wrapper","chiller-theme","toggled"],[1,"page-content"],[1,"container-fluid"],[1,"row"],[1,"col",3,"formGroup","ngSubmit"],[1,"form-group"],["for",""],["formControlName","mode",1,"form-control"],["selected","","value","Phone"],["value","Whatsapp"],[1,""],["formGroupName","products"],[1,"d-flex","justify-content-between"],["type","text","formControlName","name","placeholder","Product Name",1,"form-control",3,"keyup"],["class","row",4,"ngIf"],[1,"form-group","mt-2"],["type","text","formControlName","quantity","placeholder","Product quantity",1,"form-control",3,"keyup"],["type","text","formControlName","price","placeholder","Product price",1,"form-control",3,"keyup"],["class","form-group",4,"ngIf"],["type","text","formControlName","totalAmnt","placeholder","Rs 200","disabled","",1,"form-control"],["formControlName","address",1,"form-control"],["type","text","formControlName","userGstin","placeholder","GSTIN",1,"form-control"],["type","text","formControlName","businessName","placeholder","Name of business",1,"form-control"],["class","form-check",4,"ngFor","ngForOf"],["type","submit",1,"btn","btn-primary","btn-sm","rounded","m-0"],[1,"text-center"],[1,"mb-2"],[1,"fa","fa-heart",2,"color","red"],[1,"col"],["class","mb-4",4,"ngIf"],[1,"mb-4"],["class","col-sm-4 col-md-3 col-lg-2 my-2",4,"ngFor","ngForOf"],[1,"col-sm-4","col-md-3","col-lg-2","my-2"],[1,"card","px-2","cursor-style",3,"click"],["src","https://rukminim1.flixcart.com/image/150/150/k0cqqvk0/bottle/4/v/c/1000-venice-fridge-water-bottles-120-cello-original-imafk5tysrejtyhj.jpeg",1,"card-img-top",2,"height","150px"],[1,"card-body","px-0"],[1,"card-title"],[1,"card-text"],["type","button",1,"btn","btn-success","btn-sm","mx-2"],["aria-hidden","true",1,"fa","fa-check"],["formControlName","sellerId",1,"form-control",3,"change"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],[1,"form-check"],["type","radio","id","exampleRadios1","formControlName","paymentMode",1,"form-check-input",3,"value","checked"],["for","exampleRadios1",1,"form-check-label"]],template:function(e,t){1&e&&(i.Ub(0,"div",0),i.Pb(1,"app-side-navigation"),i.Ub(2,"main",1),i.Ub(3,"div",2),i.Ub(4,"h2"),i.Lc(5,"Order Booking"),i.Tb(),i.Pb(6,"hr"),i.Ub(7,"div",3),i.Ub(8,"form",4),i.fc("ngSubmit",(function(){return t.addProduct()})),i.Ub(9,"div",5),i.Ub(10,"label",6),i.Lc(11,"Mode Of Booking"),i.Tb(),i.Ub(12,"select",7),i.Ub(13,"option",8),i.Lc(14,"Phone"),i.Tb(),i.Ub(15,"option",9),i.Lc(16,"Whatsapp"),i.Tb(),i.Tb(),i.Tb(),i.Ub(17,"div",10),i.Ub(18,"div",11),i.Ub(19,"div",5),i.Ub(20,"div",12),i.Ub(21,"label",6),i.Lc(22,"Product Name"),i.Tb(),i.Tb(),i.Ub(23,"input",13),i.fc("keyup",(function(){return t.searchProduct()})),i.Tb(),i.Tb(),i.Jc(24,f,6,2,"div",14),i.Ub(25,"div",15),i.Ub(26,"label",6),i.Lc(27,"Quantity"),i.Tb(),i.Ub(28,"input",16),i.fc("keyup",(function(){return t.calculateTotalAmount()})),i.Tb(),i.Tb(),i.Ub(29,"div",15),i.Ub(30,"label",6),i.Lc(31,"Product Price (MRP)"),i.Tb(),i.Ub(32,"input",17),i.fc("keyup",(function(){return t.calculateTotalAmount()})),i.Tb(),i.Tb(),i.Jc(33,T,5,1,"div",18),i.Tb(),i.Tb(),i.Ub(34,"div",5),i.Ub(35,"label",6),i.Lc(36,"Order Total"),i.Tb(),i.Pb(37,"input",19),i.Tb(),i.Ub(38,"div",5),i.Ub(39,"label",6),i.Lc(40,"Address"),i.Tb(),i.Pb(41,"textarea",20),i.Tb(),i.Ub(42,"div",5),i.Ub(43,"label",6),i.Lc(44,"GST (Applicable only at Business Purchase)"),i.Tb(),i.Pb(45,"input",21),i.Tb(),i.Ub(46,"div",5),i.Ub(47,"label",6),i.Lc(48,"Business Name"),i.Tb(),i.Pb(49,"input",22),i.Tb(),i.Ub(50,"div",5),i.Ub(51,"label",6),i.Lc(52,"Payment Mode"),i.Tb(),i.Jc(53,U,4,3,"div",23),i.Tb(),i.Ub(54,"button",24),i.Lc(55,"Go to Details"),i.Tb(),i.Tb(),i.Tb(),i.Ub(56,"footer",25),i.Ub(57,"div",26),i.Ub(58,"small"),i.Lc(59," \xa9 2021 made with "),i.Pb(60,"i",27),i.Lc(61," All Rights Reserved "),i.Tb(),i.Tb(),i.Tb(),i.Tb(),i.Tb(),i.Tb()),2&e&&(i.Ab(8),i.oc("formGroup",t.addOrderForm),i.Ab(16),i.oc("ngIf",t.addOrderForm.controls.products.controls.name.value),i.Ab(9),i.oc("ngIf",t.sellers.length),i.Ab(20),i.oc("ngForOf",t.paymentModes))},directives:[u.a,n.t,n.k,n.e,n.q,n.j,n.d,n.n,n.s,n.f,n.b,o.l,o.k,n.o],styles:[".cursor-style[_ngcontent-%COMP%]{cursor:pointer}"]}),e})();var y=r("3WbM");function O(e,t){if(1&e&&(i.Ub(0,"option",23),i.Lc(1),i.Tb()),2&e){const e=t.$implicit;i.oc("value",e.value),i.Ab(1),i.Mc(e.text)}}function L(e,t){if(1&e&&(i.Ub(0,"td"),i.Ub(1,"p"),i.Lc(2),i.Tb(),i.Tb()),2&e){const e=t.$implicit;i.Ab(2),i.Mc(null==e?null:e.name)}}function A(e,t){if(1&e&&(i.Ub(0,"td"),i.Ub(1,"p"),i.Lc(2),i.Tb(),i.Tb()),2&e){const e=t.$implicit;i.Ab(2),i.Mc(null==e?null:e.quantity)}}function S(e,t){if(1&e&&(i.Ub(0,"td"),i.Ub(1,"p"),i.Lc(2),i.Tb(),i.Tb()),2&e){const e=t.$implicit;i.Ab(2),i.Mc(null==e?null:e.sellerName)}}function P(e,t){if(1&e&&(i.Ub(0,"option",23),i.Lc(1),i.Tb()),2&e){const e=t.$implicit;i.oc("value",e.value),i.Ab(1),i.Mc(e.text)}}function M(e,t){if(1&e){const e=i.Vb();i.Ub(0,"tr"),i.Ub(1,"td"),i.Ub(2,"p"),i.Lc(3),i.Tb(),i.Tb(),i.Ub(4,"td"),i.Ub(5,"p"),i.Lc(6),i.ic(7,"date"),i.Tb(),i.Tb(),i.Ub(8,"td"),i.Ub(9,"p"),i.Lc(10),i.Tb(),i.Tb(),i.Ub(11,"td"),i.Ub(12,"p"),i.Lc(13),i.Tb(),i.Tb(),i.Jc(14,L,3,1,"td",28),i.Jc(15,A,3,1,"td",28),i.Jc(16,S,3,1,"td",28),i.Ub(17,"td"),i.Ub(18,"p"),i.Lc(19),i.Tb(),i.Tb(),i.Ub(20,"td"),i.Ub(21,"p"),i.Lc(22),i.Tb(),i.Tb(),i.Ub(23,"td"),i.Ub(24,"p"),i.Lc(25),i.Tb(),i.Tb(),i.Ub(26,"td"),i.Ub(27,"p"),i.Lc(28),i.Tb(),i.Tb(),i.Ub(29,"td"),i.Ub(30,"select",29),i.fc("ngModelChange",(function(r){return i.Ac(e),t.$implicit.orderStatus=r}))("change",(function(r){i.Ac(e);const o=t.$implicit;return i.hc(2).updateStatus(o._id,r)})),i.Jc(31,P,2,2,"option",11),i.Tb(),i.Tb(),i.Tb()}if(2&e){const e=t.$implicit,r=t.index,o=i.hc(2);i.Ab(3),i.Mc(r+1),i.Ab(3),i.Mc(i.kc(7,13,null==e?null:e.createdAt,"medium")),i.Ab(4),i.Mc(null==e?null:e.mode),i.Ab(3),i.Mc(null==e?null:e._id),i.Ab(1),i.oc("ngForOf",null==e?null:e.products),i.Ab(1),i.oc("ngForOf",null==e?null:e.products),i.Ab(1),i.oc("ngForOf",null==e?null:e.products),i.Ab(3),i.Mc(null==e?null:e.totalAmnt),i.Ab(3),i.Mc(null==e?null:e.status),i.Ab(3),i.Mc(null==e?null:e.paymentMode),i.Ab(3),i.Mc(null!=e&&null!=e.address&&e.address.city?null==e||null==e.address?null:e.address.city:"NA"),i.Ab(2),i.oc("ngModel",e.orderStatus),i.Ab(1),i.oc("ngForOf",o.orderStatuses)}}function k(e,t){if(1&e&&(i.Ub(0,"table",24),i.Ub(1,"thead",25),i.Ub(2,"tr",26),i.Ub(3,"th",27),i.Lc(4,"SR NO."),i.Tb(),i.Ub(5,"th",27),i.Lc(6,"Order Date/Time"),i.Tb(),i.Ub(7,"th",27),i.Lc(8,"Mode"),i.Tb(),i.Ub(9,"th",27),i.Lc(10,"Order ID"),i.Tb(),i.Ub(11,"th",27),i.Lc(12,"Product Name"),i.Tb(),i.Ub(13,"th",27),i.Lc(14,"Quantity"),i.Tb(),i.Ub(15,"th",27),i.Lc(16,"Seller"),i.Tb(),i.Ub(17,"th",27),i.Lc(18,"Order Total (INR)"),i.Tb(),i.Ub(19,"th",27),i.Lc(20,"Status"),i.Tb(),i.Ub(21,"th",27),i.Lc(22,"Payment Mode"),i.Tb(),i.Ub(23,"th",27),i.Lc(24,"Address Details"),i.Tb(),i.Ub(25,"th",27),i.Lc(26,"Action"),i.Tb(),i.Tb(),i.Tb(),i.Ub(27,"tbody"),i.Sb(28),i.Jc(29,M,32,16,"tr",28),i.Rb(),i.Tb(),i.Tb()),2&e){const e=i.hc();i.Ab(29),i.oc("ngForOf",e.orders)}}function F(e,t){1&e&&(i.Sb(0),i.Lc(1," No Orders listed "),i.Rb())}const x=[{path:"",component:v},{path:"order-listing",component:(()=>{class e{constructor(e,t){this.orderService=e,this.toaster=t,this.orders=[],this.selectedStatus="",this.orderStatuses=[{text:"Pending",value:"P"},{text:"Dispatched",value:"D"},{text:"Refunded",value:"RF"},{text:"Cancelled",value:"C"},{text:"Returned",value:"RT"}],this.orderStatus="",this.searchTerm="",this.orderId=""}ngOnInit(){this.getOrder()}getOrder(){this.orderService.getOrder({skip:0,limit:1e4}).subscribe(e=>{this.orders=e.data,this.setOrderStaus()},e=>{console.log(e)})}updateStatus(e,t){this.orderService.updateStatus({orderId:e,status:t.target.value}).subscribe(e=>{this.getOrder()},e=>{console.log(e)})}setOrderStaus(){this.orders.forEach(e=>{switch(e.orderStatus){case"P":e.status="Pending";break;case"D":e.status="Dispatched";break;case"RF":e.status="Refunded";break;case"RT":e.status="Returned"}})}sortData(e){let t={key:e.target.value?e.target.value.split("-")[0]:"null",sortBy:e.target.value?"asc"===e.target.value.split("-")[1]?"1":"-1":0,skip:0,limit:1e5};this.orderService.getSortOrders(t).subscribe(e=>{200===e.code&&(this.orders=e.data,this.setOrderStaus())})}sortByStatus(e){if(e.target.value){switch(e.target.value){case"Pending":e.target.value="P";break;case"Dispatched":e.target.value="D";break;case"Refunded":e.target.value="RF";break;case"Returned":e.target.value="RT"}this.selectedStatus=e.target.value,this.orderService.getOrdersByStatus({skip:0,limit:10,status:e.target.value}).subscribe(e=>{200===e.code&&(this.orders=e.data)})}else this.getOrder()}searchOrder(){this.searchTerm?this.orderService.searchProducts({skip:0,limit:10,status:this.selectedStatus,search:this.searchTerm}).subscribe(e=>{this.toaster.openSnackbar(e.message),200===e.code&&(this.orders=e.data)}):this.getOrder()}}return e.\u0275fac=function(t){return new(t||e)(i.Ob(d.a),i.Ob(y.a))},e.\u0275cmp=i.Ib({type:e,selectors:[["app-order-listing"]],decls:46,vars:6,consts:[[1,"page-wrapper","chiller-theme","toggled"],[1,"page-content"],[1,"container-fluid"],[1,"row"],[1,"filer","col","p-3","rounded","my-2","elegant-color","text-white"],[1,"col-sm-12","col-md-2"],[1,"form-control",3,"change"],["value",""],["value","createdAt-asc"],["value","createdAt-desc"],["name","status-sort",1,"form-control","select-style",3,"ngModel","ngModelChange","change"],[3,"value",4,"ngFor","ngForOf"],[1,"col-sm-12","col-md-3"],[1,"input-group"],["type","search","placeholder","Search Orders",1,"form-control","rounded",3,"ngModel","ngModelChange"],["id","search-addon",1,"input-group-text","border-0",2,"cursor","pointer",3,"click"],[1,"fa","fa-search"],[1,"table-responsive","rounded","table-striped","table-bordered"],["class","table",4,"ngIf"],[4,"ngIf"],[1,"text-center"],[1,"mb-2"],[1,"fa","fa-heart",2,"color","red"],[3,"value"],[1,"table"],[1,"grey","lighten-2","small","text-uppercase"],[1,"text-nowrap"],["scope","col"],[4,"ngFor","ngForOf"],["name","status",1,"form-control","select-style",3,"ngModel","ngModelChange","change"]],template:function(e,t){1&e&&(i.Ub(0,"div",0),i.Pb(1,"app-side-navigation"),i.Ub(2,"main",1),i.Ub(3,"div",2),i.Ub(4,"h2"),i.Lc(5,"Order Listing"),i.Tb(),i.Pb(6,"hr"),i.Ub(7,"div",3),i.Ub(8,"div",4),i.Ub(9,"div",3),i.Ub(10,"div",5),i.Lc(11," Sort By Date/Time "),i.Ub(12,"select",6),i.fc("change",(function(e){return t.sortData(e)})),i.Ub(13,"option",7),i.Lc(14,"Default"),i.Tb(),i.Ub(15,"option",8),i.Lc(16,"Order Date/Time (A - Z) "),i.Tb(),i.Ub(17,"option",9),i.Lc(18,"Order Date/Time (Z - A) "),i.Tb(),i.Tb(),i.Tb(),i.Ub(19,"div",5),i.Lc(20," Sort By Status "),i.Ub(21,"select",10),i.fc("ngModelChange",(function(e){return t.orderStatus=e}))("change",(function(e){return t.sortByStatus(e)})),i.Ub(22,"option",7),i.Lc(23,"Default"),i.Tb(),i.Jc(24,O,2,2,"option",11),i.Tb(),i.Tb(),i.Ub(25,"div",12),i.Lc(26," Search Orders by payment mode "),i.Ub(27,"div",13),i.Ub(28,"input",14),i.fc("ngModelChange",(function(e){return t.searchTerm=e})),i.Tb(),i.Ub(29,"span",15),i.fc("click",(function(){return t.searchOrder()})),i.Pb(30,"i",16),i.Tb(),i.Tb(),i.Tb(),i.Ub(31,"div",12),i.Lc(32," Search Orders by order id "),i.Ub(33,"div",13),i.Ub(34,"input",14),i.fc("ngModelChange",(function(e){return t.orderId=e})),i.Tb(),i.Ub(35,"span",15),i.fc("click",(function(){return t.searchOrder()})),i.Pb(36,"i",16),i.Tb(),i.Tb(),i.Tb(),i.Tb(),i.Tb(),i.Ub(37,"div",17),i.Jc(38,k,30,1,"table",18),i.Jc(39,F,2,0,"ng-container",19),i.Tb(),i.Tb(),i.Ub(40,"footer",20),i.Ub(41,"div",21),i.Ub(42,"small"),i.Lc(43," \xa9 2021 made with "),i.Pb(44,"i",22),i.Lc(45," All Rights Reserved "),i.Tb(),i.Tb(),i.Tb(),i.Tb(),i.Tb(),i.Tb()),2&e&&(i.Ab(21),i.oc("ngModel",t.orderStatus),i.Ab(3),i.oc("ngForOf",t.orderStatuses),i.Ab(4),i.oc("ngModel",t.searchTerm),i.Ab(6),i.oc("ngModel",t.orderId),i.Ab(4),i.oc("ngIf",t.orders.length>0),i.Ab(1),i.oc("ngIf",0==t.orders.length))},directives:[u.a,n.n,n.s,n.q,n.j,n.m,o.k,n.b,o.l],pipes:[o.d],styles:[".select-style[_ngcontent-%COMP%]{width:130px}"]}),e})()}];let N=(()=>{class e{}return e.\u0275mod=i.Mb({type:e}),e.\u0275inj=i.Lb({factory:function(t){return new(t||e)},imports:[[b.e.forChild(x)],b.e]}),e})(),R=(()=>{class e{}return e.\u0275mod=i.Mb({type:e}),e.\u0275inj=i.Lb({factory:function(t){return new(t||e)},providers:[l.a,d.a],imports:[[o.b,N,c.a,n.g,n.p,s.c,a.a]]}),e})()}}]);