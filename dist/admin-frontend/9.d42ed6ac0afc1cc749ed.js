(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{Ak7V:function(t,e,o){"use strict";o.r(e),o.d(e,"CategoryModule",(function(){return S}));var a=o("ofXK"),r=o("dbUT"),c=o("3Pt+"),n=o("tk/3"),i=o("WeEj"),b=o("PCNd"),s=o("tyNb"),g=o("fXoL"),l=o("9d4Z"),d=o("3WbM"),u=o("J0GB");function p(t,e){if(1&t&&(g.Ub(0,"option",17),g.Lc(1),g.Tb()),2&t){const t=e.$implicit;g.pc("value",null==t?null:t._id),g.Ab(1),g.Mc(null==t?null:t.categoryName)}}function y(t,e){if(1&t){const t=g.Vb();g.Ub(0,"button",18),g.fc("click",(function(){g.Ac(t);const e=g.hc();return e.showInputForCategory=!0,e.categoryId=null})),g.Lc(1,"Add New"),g.Tb()}}function h(t,e){if(1&t){const t=g.Vb();g.Ub(0,"button",18),g.fc("click",(function(){g.Ac(t);const e=g.hc();return e.showInputForCategory=!1,e.category=""})),g.Lc(1,"Cancel"),g.Tb()}}function m(t,e){1&t&&(g.Ub(0,"label",27),g.Lc(1,"Upload Image"),g.Tb())}function f(t,e){if(1&t){const t=g.Vb();g.Ub(0,"div",5),g.Ub(1,"label",6),g.Lc(2,"Category Name"),g.Tb(),g.Ub(3,"input",19),g.fc("ngModelChange",(function(e){return g.Ac(t),g.hc().category=e})),g.Tb(),g.Jc(4,m,2,0,"label",20),g.Ub(5,"div",21),g.Ub(6,"div",22),g.Ub(7,"span",23),g.Lc(8,"Upload"),g.Tb(),g.Tb(),g.Ub(9,"div",24),g.Ub(10,"input",25),g.fc("change",(function(e){return g.Ac(t),g.hc().categoryFileUpload(e)})),g.Tb(),g.Ub(11,"label",26),g.Lc(12,"Choose file"),g.Tb(),g.Tb(),g.Tb(),g.Tb()}if(2&t){const t=g.hc();g.Ab(3),g.oc("ngModel",t.category),g.Ab(1),g.oc("ngIf",t.showInputForCategory)}}function U(t,e){if(1&t){const t=g.Vb();g.Ub(0,"button",28),g.fc("click",(function(){return g.Ac(t),g.hc().addCategory()})),g.Lc(1,"Add Category"),g.Tb()}}function T(t,e){if(1&t){const t=g.Vb();g.Ub(0,"button",28),g.fc("click",(function(){return g.Ac(t),g.hc().addCategory()})),g.Lc(1,"Add Subcategory"),g.Tb()}}function C(t,e){if(1&t&&(g.Ub(0,"p"),g.Ub(1,"span"),g.Lc(2),g.Tb(),g.Tb()),2&t){const t=e.$implicit;g.Ab(2),g.Mc(null==t?null:t.subCategoryName)}}function v(t,e){if(1&t){const t=g.Vb();g.Ub(0,"tr"),g.Ub(1,"td"),g.Ub(2,"p"),g.Lc(3),g.Tb(),g.Tb(),g.Ub(4,"td"),g.Ub(5,"p"),g.Lc(6),g.Tb(),g.Tb(),g.Ub(7,"td"),g.Jc(8,C,3,1,"p",15),g.Tb(),g.Ub(9,"td"),g.Ub(10,"div",19),g.Ub(11,"a",20),g.Lc(12,"Edit"),g.Tb(),g.Tb(),g.Tb(),g.Ub(13,"td"),g.Ub(14,"div",21),g.Ub(15,"input",22),g.fc("change",(function(){g.Ac(t);const o=e.$implicit;return g.hc().statusChange(o)})),g.Tb(),g.Ub(16,"label",23),g.Lc(17),g.Tb(),g.Tb(),g.Tb(),g.Tb()}if(2&t){const t=e.$implicit;g.Ab(3),g.Mc(null!=t&&t.status?"Active":"InActive"),g.Ab(3),g.Mc(null==t?null:t.categoryName),g.Ab(2),g.oc("ngForOf",t.subCategories),g.Ab(3),g.qc("routerLink","/category/edit-category-details/",t.categoryId,""),g.Ab(4),g.qc("id","_",null==t?null:t.categoryId,""),g.qc("name","_",null==t?null:t.categoryId,""),g.oc("checked",!(null==t||!t.deleted)),g.Ab(1),g.qc("for","_",null==t?null:t.categoryId,""),g.Ab(1),g.Mc(null!=t&&t.deleted?"True":"False")}}function I(t,e){if(1&t){const t=g.Vb();g.Ub(0,"div",7),g.Ub(1,"label",8),g.Lc(2,"SubCategory Name"),g.Tb(),g.Ub(3,"input",15),g.fc("ngModelChange",(function(o){g.Ac(t);const a=e.index;return g.hc().categoriesData[a].subCategoryName=o})),g.Tb(),g.Tb()}if(2&t){const t=e.index,o=g.hc();g.Ab(3),g.pc("name",t),g.oc("ngModel",o.categoriesData[t].subCategoryName)}}const A=[{path:"",component:(()=>{class t{constructor(t,e,o){this.categoryService=t,this.router=e,this.toaster=o,this.categories=[],this.category="",this.subCategory="",this.categoryId=null,this.showInputForCategory=!1}ngOnInit(){this.getCategories()}getCategories(){this.categoryService.getCategory({skip:0,limit:100}).subscribe(t=>{console.log(t),this.categories=t.data},t=>{console.log(t)})}categoryFileUpload(t){this.categoryImage=t.target.files[0]}addCategory(){let t={subCategory:this.subCategory};if(t.categoryId=this.categoryId,this.categoryId)this.categoryService.addSubCategory(t).subscribe(()=>{this.toaster.openSnackbar("Subcategory Added Successfully!!"),this.router.navigateByUrl("/category/category-listing")},t=>{this.toaster.openSnackbar(t)});else{let t=new FormData;t.append("subCategory",this.subCategory),t.append("category",this.category),t.append("catImg",this.categoryImage),this.categoryImage?this.categoryService.addCategory(t).subscribe(t=>{200===t.code&&this.router.navigateByUrl("/category/category-listing"),this.toaster.openSnackbar(t.message)},t=>{this.toaster.openSnackbar(t)}):this.toaster.openSnackbar("Please add category image also!!")}}}return t.\u0275fac=function(e){return new(e||t)(g.Ob(l.a),g.Ob(s.b),g.Ob(d.a))},t.\u0275cmp=g.Ib({type:t,selectors:[["app-add-category"]],decls:31,vars:9,consts:[[1,"page-wrapper","chiller-theme","toggled"],[1,"page-content"],[1,"container-fluid"],[1,"row"],[1,"col"],[1,"form-group"],["for",""],["name","categoresDropDown",1,"form-control",3,"disabled","ngModel","ngModelChange"],["value","null"],[3,"value",4,"ngFor","ngForOf"],["type","button","class","btn mb-4 btn-sm btn-dark rounded m-0",3,"click",4,"ngIf"],["class","form-group",4,"ngIf"],["type","text","name","Sub Category","placeholder","Sub Category Name",1,"form-control",3,"ngModel","ngModelChange"],["type","submit","class","btn btn-dark btn-sm rounded m-0 mt-2",3,"click",4,"ngIf"],[1,"text-center"],[1,"mb-2"],[1,"fa","fa-heart",2,"color","red"],[3,"value"],["type","button",1,"btn","mb-4","btn-sm","btn-dark","rounded","m-0",3,"click"],["type","text","name","Category","placeholder","Category Name",1,"form-control",3,"ngModel","ngModelChange"],["for","","class","small",4,"ngIf"],[1,"input-group"],[1,"input-group-prepend"],["id","imageUpload",1,"input-group-text"],[1,"custom-file"],["type","file","id","imageUpload","aria-describedby","inputGroupFileAddon01","accept","jpeg, png",1,"custom-file-input",3,"change"],["for","imageUpload",1,"custom-file-label"],["for","",1,"small"],["type","submit",1,"btn","btn-dark","btn-sm","rounded","m-0","mt-2",3,"click"]],template:function(t,e){1&t&&(g.Ub(0,"div",0),g.Pb(1,"app-side-navigation"),g.Ub(2,"main",1),g.Ub(3,"div",2),g.Ub(4,"h2"),g.Lc(5,"Add Category"),g.Tb(),g.Pb(6,"hr"),g.Ub(7,"div",3),g.Ub(8,"form",4),g.Ub(9,"div",5),g.Ub(10,"label",6),g.Lc(11,"Category Name"),g.Tb(),g.Ub(12,"select",7),g.fc("ngModelChange",(function(t){return e.categoryId=t})),g.Ub(13,"option",8),g.Lc(14,"Select Category Name"),g.Tb(),g.Jc(15,p,2,2,"option",9),g.Tb(),g.Tb(),g.Jc(16,y,2,0,"button",10),g.Jc(17,h,2,0,"button",10),g.Jc(18,f,13,2,"div",11),g.Ub(19,"div",5),g.Ub(20,"label",6),g.Lc(21,"Sub Category Name"),g.Tb(),g.Ub(22,"input",12),g.fc("ngModelChange",(function(t){return e.subCategory=t})),g.Tb(),g.Tb(),g.Jc(23,U,2,0,"button",13),g.Jc(24,T,2,0,"button",13),g.Tb(),g.Tb(),g.Ub(25,"footer",14),g.Ub(26,"div",15),g.Ub(27,"small"),g.Lc(28," \xa9 2021 made with "),g.Pb(29,"i",16),g.Lc(30," All Rights Reserved "),g.Tb(),g.Tb(),g.Tb(),g.Tb(),g.Tb(),g.Tb()),2&t&&(g.Ab(12),g.oc("disabled",e.showInputForCategory)("ngModel",e.categoryId),g.Ab(3),g.oc("ngForOf",e.categories),g.Ab(1),g.oc("ngIf",!e.showInputForCategory),g.Ab(1),g.oc("ngIf",e.showInputForCategory),g.Ab(1),g.oc("ngIf",e.showInputForCategory),g.Ab(4),g.oc("ngModel",e.subCategory),g.Ab(1),g.oc("ngIf",e.showInputForCategory),g.Ab(1),g.oc("ngIf",!e.showInputForCategory))},directives:[u.a,c.u,c.l,c.m,c.r,c.k,c.n,c.o,c.t,a.k,a.l,c.b],styles:[""]}),t})()},{path:"category-listing",component:(()=>{class t{constructor(t){this.categoryService=t,this.categories=[]}ngOnInit(){this.getAllCategories()}getAllCategories(){this.categoryService.getAll({skip:0,limit:100}).subscribe(t=>{this.categories=t.data},t=>{console.log(t)})}sortData(t){let e={key:t.target.value?t.target.value.split("-")[0]:"null",sortBy:t.target.value?"asc"===t.target.value.split("-")[1]?"1":"-1":0,skip:0,limit:1e5};this.categoryService.getSortCategories(e).subscribe(t=>{200===t.code&&(this.categories=t.data)})}statusChange(t){let e=this.categories.findIndex(e=>e.categoryId==t.categoryId);if(e>-1){let o=!this.categories[e].deleted;this.categories[e].deleted=o,this.categoryService.approveDisapproveCategories({categoryId:t.categoryId,status:o}).subscribe(t=>{200===t.code&&(this.categories[e].status=t.data.deleted)})}}}return t.\u0275fac=function(e){return new(e||t)(g.Ob(l.a))},t.\u0275cmp=g.Ib({type:t,selectors:[["app-category-listing"]],decls:41,vars:1,consts:[[1,"page-wrapper","chiller-theme","toggled"],[1,"page-content"],[1,"container-fluid"],[1,"row"],[1,"filer","col","p-3","rounded","my-2","elegant-color","text-white"],[1,"col-sm-12","col-md-2"],[1,"form-control",3,"change"],["value",""],["value","categoryName-asc"],["value","categoryName-desc"],[1,"table-responsive","rounded","table-striped"],[1,"table"],[1,"grey","lighten-2","small","text-uppercase"],[1,"text-nowrap"],["scope","col"],[4,"ngFor","ngForOf"],[1,"text-center"],[1,"mb-2"],[1,"fa","fa-heart",2,"color","red"],["role","group",1,"btn-group"],["type","button",1,"btn","btn-sm","btn-dark","mr-3",3,"routerLink"],[1,"custom-control","custom-switch","my-n2"],["type","checkbox",1,"custom-control-input",3,"id","name","checked","change"],[1,"custom-control-label","cursor-pointer","my-2",3,"for"]],template:function(t,e){1&t&&(g.Ub(0,"div",0),g.Pb(1,"app-side-navigation"),g.Ub(2,"main",1),g.Ub(3,"div",2),g.Ub(4,"h2"),g.Lc(5,"Category Listing"),g.Tb(),g.Pb(6,"hr"),g.Ub(7,"div",3),g.Ub(8,"div",4),g.Ub(9,"div",3),g.Ub(10,"div",5),g.Lc(11," Sort By "),g.Ub(12,"select",6),g.fc("change",(function(t){return e.sortData(t)})),g.Ub(13,"option",7),g.Lc(14,"Default"),g.Tb(),g.Ub(15,"option",8),g.Lc(16,"Category Name (A - Z) "),g.Tb(),g.Ub(17,"option",9),g.Lc(18,"Category Name (Z - A) "),g.Tb(),g.Tb(),g.Tb(),g.Tb(),g.Tb(),g.Ub(19,"div",10),g.Ub(20,"table",11),g.Ub(21,"thead",12),g.Ub(22,"tr",13),g.Ub(23,"th",14),g.Lc(24,"Status"),g.Tb(),g.Ub(25,"th",14),g.Lc(26,"Category Name"),g.Tb(),g.Ub(27,"th",14),g.Lc(28,"Sub Category Name"),g.Tb(),g.Ub(29,"th",14),g.Lc(30,"Action"),g.Tb(),g.Ub(31,"th",14),g.Lc(32,"Deleted"),g.Tb(),g.Tb(),g.Tb(),g.Ub(33,"tbody"),g.Jc(34,v,18,9,"tr",15),g.Tb(),g.Tb(),g.Tb(),g.Tb(),g.Ub(35,"footer",16),g.Ub(36,"div",17),g.Ub(37,"small"),g.Lc(38," \xa9 2021 made with "),g.Pb(39,"i",18),g.Lc(40," All Rights Reserved "),g.Tb(),g.Tb(),g.Tb(),g.Tb(),g.Tb(),g.Tb()),2&t&&(g.Ab(34),g.oc("ngForOf",e.categories))},directives:[u.a,c.o,c.t,a.k,s.e],styles:[""]}),t})()},{path:"edit-category-details/:id",component:(()=>{class t{constructor(t,e,o){this.route=t,this.toaster=e,this.categoryService=o,this.categoriesData=[],this.categoryName=""}ngOnInit(){this.categoryId=this.route.snapshot.url[1].path,this.getAllCategories()}getAllCategories(){this.categoryService.getAllSubcategories({skip:0,limit:100,categoryId:this.categoryId}).subscribe(t=>{200===t.code&&(this.categoriesData=t.data,this.categoryName=this.categoriesData[this.categoriesData.length-1],this.categoriesData.pop(this.categoriesData.length-1))})}updateCategory(){this.categoryService.updateCategory({categoryId:this.categoryId,categoryName:this.categoryName}).subscribe(t=>{this.toaster.openSnackbar(200!==t.data?t.message:"Category updated Successfully!!")})}updateSubCategory(){let t=this.categoriesData.map(t=>({id:t._id,name:t.subCategoryName}));this.categoryService.updateSubcategory({categoryId:this.categoryId,subCategory:t}).subscribe(t=>{this.toaster.openSnackbar(200!==t.data?t.message:"Category updated Successfully!!")})}}return t.\u0275fac=function(e){return new(e||t)(g.Ob(s.a),g.Ob(d.a),g.Ob(l.a))},t.\u0275cmp=g.Ib({type:t,selectors:[["app-edit-category"]],decls:30,vars:2,consts:[[1,"page-wrapper","chiller-theme","toggled"],[1,"page-content"],[1,"container-fluid"],[1,"d-flex","justify-content-between"],["routerLink","/category/category-listing",1,"btn","btn-sm","btn-dark","mx-0","rounded"],[1,"row"],[1,"col-md-12"],[1,"form-group"],[1,"my-1"],["type","text","placeholder","Category Name","name","category",1,"form-control",3,"ngModel","ngModelChange"],["type","submit",1,"btn","btn-dark","mx-0","btn-sm","rounded",3,"click"],["class","form-group",4,"ngFor","ngForOf"],[1,"text-center"],[1,"mb-2"],[1,"fa","fa-heart",2,"color","red"],["type","text",1,"form-control",3,"name","ngModel","ngModelChange"]],template:function(t,e){1&t&&(g.Ub(0,"div",0),g.Pb(1,"app-side-navigation"),g.Ub(2,"main",1),g.Ub(3,"div",2),g.Ub(4,"div",3),g.Ub(5,"h2"),g.Lc(6,"Edit Category & Sub-Category"),g.Tb(),g.Ub(7,"button",4),g.Lc(8," Back to Category listing"),g.Tb(),g.Tb(),g.Pb(9,"hr"),g.Ub(10,"div",5),g.Ub(11,"form",6),g.Ub(12,"div",7),g.Ub(13,"label",8),g.Lc(14,"Category Name"),g.Tb(),g.Ub(15,"input",9),g.fc("ngModelChange",(function(t){return e.categoryName=t})),g.Tb(),g.Tb(),g.Ub(16,"button",10),g.fc("click",(function(){return e.updateCategory()})),g.Lc(17,"Update Category"),g.Tb(),g.Tb(),g.Tb(),g.Pb(18,"hr"),g.Ub(19,"div",5),g.Ub(20,"form",6),g.Jc(21,I,4,2,"div",11),g.Ub(22,"button",10),g.fc("click",(function(){return e.updateSubCategory()})),g.Lc(23,"update subcategory"),g.Tb(),g.Tb(),g.Tb(),g.Ub(24,"footer",12),g.Ub(25,"div",13),g.Ub(26,"small"),g.Lc(27," \xa9 2021 made with "),g.Pb(28,"i",14),g.Lc(29," All Rights Reserved "),g.Tb(),g.Tb(),g.Tb(),g.Tb(),g.Tb(),g.Tb()),2&t&&(g.Ab(15),g.oc("ngModel",e.categoryName),g.Ab(6),g.oc("ngForOf",e.categoriesData))},directives:[u.a,s.c,c.u,c.l,c.m,c.b,c.k,c.n,a.k],styles:[""]}),t})()}];let L=(()=>{class t{}return t.\u0275mod=g.Mb({type:t}),t.\u0275inj=g.Lb({factory:function(e){return new(e||t)},imports:[[s.f.forChild(A)],s.f]}),t})();o("xgIS"),o("lJxs"),o("pLZG"),o("Kj3r");let k=(()=>{class t{}return t.\u0275mod=g.Mb({type:t}),t.\u0275inj=g.Lb({factory:function(e){return new(e||t)},imports:[[a.b,c.h]]}),t})(),S=(()=>{class t{}return t.\u0275mod=g.Mb({type:t}),t.\u0275inj=g.Lb({factory:function(e){return new(e||t)},providers:[i.a,l.a],imports:[[a.b,L,r.a,c.h,c.q,n.c,b.a,k]]}),t})()}}]);