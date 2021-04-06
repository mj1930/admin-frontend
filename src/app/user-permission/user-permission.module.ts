import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common//http';
import { UserPermissionRoutingModule } from './user-permission-routing.module';
import { UserPermissionComponent } from './user-permission/user-permission.component';
import { httpInterceptorProviders } from '../http-interceptor';
import { UserPermissionService } from './user-permission.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [UserPermissionComponent],
  imports: [
    CommonModule,
    UserPermissionRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [UserPermissionService, httpInterceptorProviders]
})
export class UserPermissionModule { }
