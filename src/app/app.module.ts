import { BrowserModule } from '@angular/platform-browser';
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
import { PaymentRecordsComponent } from './payment-records/payment-records.component';

@NgModule({
  declarations: [
    AppComponent,
    UserRightsManagementComponent,
    PaymentRecordsComponent
  ],
  imports: [
    BrowserModule,
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
