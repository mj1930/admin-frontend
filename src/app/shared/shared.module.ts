import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SideNavigationComponent } from './components/side-navigation/side-navigation.component';


@NgModule({
  declarations: [SideNavigationComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [SideNavigationComponent]
})
export class SharedModule { }
