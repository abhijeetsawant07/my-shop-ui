import { Component, OnInit } from '@angular/core';
import { Status } from 'src/app/enums/status.enum';
import { Order } from 'src/app/model/order';
import { Item } from './../../../model/item';
import { OrderService } from './../../../services/order.service';
import { formatDate } from '@angular/common';
import { LayoutService } from './../../../services/layout.service';

@Component({
	selector: 'app-order-details',
	templateUrl: './order-details.component.html',
	styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {
	order: Order;
	//orders: Order[];
	estimatedShipDateMap: Map<string, Item[]> = new Map<string, Item[]>();
	isShipmentDateChange = false;

	constructor(private orderService: OrderService, public layoutService: LayoutService) { }

	ngOnInit(): void {
		this.order = this.orderService.createDummyOrder();
		if (this.isOrdered(this.order.status)) {
			this.groupByEstimatedShippingDate(this.order.items);
			this.isShipmentDateChange = this.identifyShipmentDateChange(this.order.items);
		}
		//this.getOrders();
	}

	/*  getOrders() {
	   this.orderService.getOrders().subscribe(
		 data => {
		   this.orders = data;
		   console.log('Got the orders : ' + JSON.stringify(this.orders));        
		 },
		 error => {
		   console.error('Loading of orders failed : ' + JSON.stringify(error));
		 }      
	   );
	 } */

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

	groupByEstimatedShippingDate(items: Item[]) {
		for (let item of items) {
			let orginalDate = formatDate(item.estimatedShipDateRange.fromDate, 'EEE, MMM dd', 'en_US') + ' - ' + formatDate(item.estimatedShipDateRange.toDate, 'EEE, MMM dd, yyyy', 'en_US');
			if (this.estimatedShipDateMap.has(orginalDate)) {
				let sameShippedDateItems = this.estimatedShipDateMap.get(orginalDate);
				sameShippedDateItems.push(item);
				this.estimatedShipDateMap.set(orginalDate, sameShippedDateItems);
			} else {
				let newSameShippedDateItems = [];
				newSameShippedDateItems.push(item);
				this.estimatedShipDateMap.set(orginalDate, newSameShippedDateItems);
			}
		}
	}

	identifyShipmentDateChange(items: Item[]): boolean {
		let result = false;
		for (let item of items) {
			if (item.newEstimatedShipDateRange != null && item.userAcceptedDelay == false) {
				result = true;
				break;
			}
		}

		return result;
	}

	getItemById(itemId: number): Item {
		let result: Item[] = null;
		result = this.order.items.filter(item => item.id == itemId);
		if (result.length > 0) {
			return result[0];
		} else {
			return null;
		}		
	}
}
