import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/seller'},
  // {path: 'login', component: LoginComponent},
  // {path: 'register', component: RegisterComponent},
   //{path: 'auth', loadChildren: () => import('./authentication/authentication.module').then(module => module.AuthenticationModule)},
   //{path: 'product', loadChildren: () => import('./product/product.module').then(module => module.ProductModule)},
  // {path: 'inventory', loadChildren: () => import('./inventory/inventory.module').then(module => module.InventoryModule)},
   {path: 'seller', loadChildren: () => import('./seller/seller.module').then(module => module.SellerModule)},
  //{path: '**', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
