import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; 
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRightsManagementComponent } from './user-rights-management/user-rights-management.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgxSpinnerModule } from 'ngx-spinner';
import { UnverifiedAdminAccountComponent } from './unverified-admin-account/unverified-admin-account.component';

@NgModule({
  declarations: [
    AppComponent,
    UserRightsManagementComponent,
    UnverifiedAdminAccountComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: "toast-top-right"
    }),
    AppRoutingModule,
    SharedModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
