import { NgModule } from '@angular/core';

import { OrderRoutingModule } from './order-routing.module';
import { SharedModule } from '../shared/shared.module';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemOrderService } from '../../services/in-memory-order.service';


@NgModule({
  declarations: [OrderDetailsComponent],
  imports: [
    SharedModule,
    OrderRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forFeature(InMemOrderService)
  ]
})
export class OrderModule { }
