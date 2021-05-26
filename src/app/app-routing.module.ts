import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderInvoiceComponent } from './order-invoice/order-invoice.component';
import { PaymentRecordsComponent } from './payment-records/payment-records.component';
import { UnverifiedAdminAccountComponent } from './unverified-admin-account/unverified-admin-account.component';
import { UserRightsManagementComponent } from './user-rights-management/user-rights-management.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/auth/login'},
  { path: 'user-rights', component: UserRightsManagementComponent },
  { path: 'payment-records', component: PaymentRecordsComponent },
  { path: 'order-invoice', component: OrderInvoiceComponent },
  { path: 'unverified', component: UnverifiedAdminAccountComponent },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(module => module.AuthModule)},
  { path: 'seller', loadChildren: () => import('./seller/seller.module').then(module => module.SellerModule)},
  { path: 'category', loadChildren: () => import('./category/category.module').then(module => module.CategoryModule)},
  { path: 'order', loadChildren: () => import('./orders/order.module').then(module => module.OrderModule)},
  { path: 'permission', loadChildren: () => import('./user-permission/user-permission.module').then(module => module.UserPermissionModule)},
  
  //  {path: '**', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
