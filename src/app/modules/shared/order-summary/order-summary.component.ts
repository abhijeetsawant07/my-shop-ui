import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/model/order';
import { OrderService } from './../../../services/order.service';
import { Status } from 'src/app/enums/status.enum';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent implements OnInit {

  order: Order;

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.order = this.orderService.createDummyOrder();
  }

  isOrdered(status: string): boolean {
    if (status == Status[Status.ordered]) {
      return true;
    } else {
      return false;
    }
  }

  isShipped(status: string): boolean {
    if (status == Status[Status.shipped]) {
      return true;
    } else {
      return false;
    }
  }

  isDelivered(status: string): boolean {
    if (status == Status[Status.delivered]) {
      return true;
    } else {
      return false;
    }
  }

}
