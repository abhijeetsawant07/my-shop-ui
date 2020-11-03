import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { StatusViewComponent } from './status-view/status-view.component';



@NgModule({
  declarations: [OrderSummaryComponent, StatusViewComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    OrderSummaryComponent,
    StatusViewComponent
  ]
})
export class SharedModule { }
