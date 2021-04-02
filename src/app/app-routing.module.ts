import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { LoginComponent } from './auth/login/login.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { SignupComponent } from './auth/signup/signup.component';
import { UserRightsManagementComponent } from './user-rights-management/user-rights-management.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/seller'},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: 'reset-password', component: ResetPasswordComponent},
  {path: 'user-rights', component: UserRightsManagementComponent},
  // {path: 'login', component: LoginComponent},
  // {path: 'register', component: RegisterComponent},
   //{path: 'auth', loadChildren: () => import('./authentication/authentication.module').then(module => module.AuthenticationModule)},
   //{path: 'product', loadChildren: () => import('./product/product.module').then(module => module.ProductModule)},
  // {path: 'inventory', loadChildren: () => import('./inventory/inventory.module').then(module => module.InventoryModule)},
   {path: 'seller', loadChildren: () => import('./seller/seller.module').then(module => module.SellerModule)},
   {path: 'category', loadChildren: () => import('./category/category.module').then(module => module.CategoryModule)},
   {path: 'order', loadChildren: () => import('./orders/order.module').then(module => module.OrderModule)},
  //{path: '**', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
