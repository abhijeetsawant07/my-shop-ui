import { Component, OnInit } from '@angular/core';
import { Order } from '../model/order';
import { OrderService } from './../services/order.service';
import { LayoutService } from './../services/layout.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  leftNavItems = [
    { header: 'Products', icon: '', route: '/products' },
    { header: 'Brands', icon: '', route: '/brands' },
    { header: 'Deals', icon: '', route: '/deals' },
    { header: 'Services', icon: '', route: '/services' }
  ];
  rightNavItems = [
    { header: 'Account', icon: 'account_circle', route: '/account' },
    { header: 'Recently Viewed', icon: '', route: '/order/summary' },
    { header: 'Order Status', icon: '', route: '/order/details' },
    { header: 'Saved Items', icon: '', route: '/saved' }
  ];

  constructor(private orderService: OrderService, public layoutService: LayoutService) { }

  order: Order;
  ngOnInit(): void {
    this.order = this.orderService.createDummyOrder();
  }

}
