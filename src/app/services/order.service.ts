import { Injectable } from '@angular/core';
import { Order } from './../model/order';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Item } from '../model/item';
import { Status } from '../enums/status.enum';
import { Address } from '../model/address';
import { ItemEstimatedShipDateRange } from '../model/itemEstimatedShipDateRange';
import { ItemNewEstimatedShipDateRange } from '../model/itemNewEstimatedShipDateRange';
import { ItemSkuAttributes } from '../model/itemSkuAttributes';
import { Shipment } from '../model/shipment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  public getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>('http://localhost:8080/orders')
      .pipe(catchError(null));
  }

  public createDummyOrder(): Order {
    let order = new Order();
    let item1 = new Item();
    let item2 = new Item();
    let item3 = new Item();
    let item4 = new Item();
    let originalEstimatedShipDate1 = new ItemEstimatedShipDateRange();
    let newEstimatedShipDate1 = new ItemNewEstimatedShipDateRange();
    let originalEstimatedShipDate2 = new ItemEstimatedShipDateRange();
    let newEstimatedShipDate2 = new ItemNewEstimatedShipDateRange();
    let originalEstimatedShipDate3 = new ItemEstimatedShipDateRange();
    let newEstimatedShipDate3 = new ItemNewEstimatedShipDateRange();
    let originalEstimatedShipDate4 = new ItemEstimatedShipDateRange();
    let newEstimatedShipDate4 = new ItemNewEstimatedShipDateRange();
    let shippingAddress = new Address();
    let shipment1 = new Shipment();
    let shipment2 = new Shipment();
    let items: Item[] = [];
    let shipments: Shipment[] = [];
    let skuitemAttr1 = new ItemSkuAttributes();
    let skuitemAttr2 = new ItemSkuAttributes();
    let skuitemAttr3 = new ItemSkuAttributes();
    let skuitemAttr4 = new ItemSkuAttributes();

    order.id = 10;
    order.orderId = 198772;
    //Item1 object
    skuitemAttr1.model = 'Iphone XR';
    skuitemAttr1.manufacturer = 'Apple';
    skuitemAttr1.size = '64 GB';
    skuitemAttr1.color = 'Yellow';
    item1.skuAttributes = skuitemAttr1;

    item1.id = 100000;
    item1.name = 'Apple Iphone XR';
    item1.plan = 'AT&T Unlimited Extra 1';
    item1.skuId = 'sku1234';
    item1.quantity = 1;
    item1.telephoneNumber = '409.406.3322';
    item1.status = Status[Status.ordered];
    item1.complete = true;
    originalEstimatedShipDate1.fromDate = '2020-09-06T13:39:52.774-05:00';
    originalEstimatedShipDate1.toDate = '2020-09-07T13:39:52.774-05:00';
    item1.estimatedShipDateRange = originalEstimatedShipDate1;

    /* newEstimatedShipDate.fromDate = '2020-11-02T13:39:52.774-05:00';
    newEstimatedShipDate.toDate = '2020-12-02T13:39:52.774-05:00'; */
    //2item1.newEstimatedShipDateRange1 = newEstimatedShipDate1;

    item1.userAcceptedDelay = true;

    //item2
    skuitemAttr2.model = 'Iphone 2';
    skuitemAttr2.manufacturer = 'Apple';
    skuitemAttr2.size = '128 GB';
    skuitemAttr2.color = 'Red';
    item2.skuAttributes = skuitemAttr2;

    item2.id = 200000;
    item2.name = 'Apple Iphone 2';
    item2.plan = 'AT&T Unlimited Extra 2';
    item2.skuId = 'sku1234';
    item2.quantity = 1;
    item2.telephoneNumber = '409.406.3322';
    item2.status = Status[Status.shipped];
    item2.complete = true;
    originalEstimatedShipDate2.fromDate = '2020-09-06T13:39:52.774-05:00';
    originalEstimatedShipDate2.toDate = '2020-09-07T13:39:52.774-05:00';
    item2.estimatedShipDateRange = originalEstimatedShipDate2;

    /* newEstimatedShipDate.fromDate = '2020-11-02T13:39:52.774-05:00';
    newEstimatedShipDate.toDate = '2020-12-02T13:39:52.774-05:00'; */
    item2.newEstimatedShipDateRange = newEstimatedShipDate2;

    item2.userAcceptedDelay = true;

    //item3
    skuitemAttr3.model = 'Iphone 3';
    skuitemAttr3.manufacturer = 'Apple';
    skuitemAttr3.size = '256 GB';
    skuitemAttr3.color = 'Yellow';
    item3.skuAttributes = skuitemAttr3;

    item3.id = 300000;
    item3.name = 'Apple Iphone 3';
    item3.plan = 'AT&T Unlimited Extra 3';
    item3.skuId = 'sku1234';
    item3.quantity = 1;
    item3.telephoneNumber = '409.406.3322';
    item3.status = Status[Status.shipped];
    item3.complete = true;
    originalEstimatedShipDate3.fromDate = '2020-10-06T13:39:52.774-05:00';
    originalEstimatedShipDate3.toDate = '2020-10-07T13:39:52.774-05:00';
    item3.estimatedShipDateRange = originalEstimatedShipDate3;

    newEstimatedShipDate3.fromDate = '2020-11-02T13:39:52.774-05:00';
    newEstimatedShipDate3.toDate = '2020-11-03T13:39:52.774-05:00';
    item3.newEstimatedShipDateRange = newEstimatedShipDate3;

    item3.userAcceptedDelay = false;

    //item4
    skuitemAttr4.model = 'Iphone 4';
    skuitemAttr4.manufacturer = 'Apple';
    skuitemAttr4.size = '512 GB';
    skuitemAttr4.color = 'Gray';
    item4.skuAttributes = skuitemAttr4;

    item4.id = 400000;
    item4.name = 'Apple Iphone 4';
    item4.plan = 'AT&T Unlimited Extra';
    item4.skuId = 'sku1234';
    item4.quantity = 1;
    item4.telephoneNumber = '409.406.3322';
    item4.status = Status[Status.delivered];
    item4.complete = true;
    originalEstimatedShipDate4.fromDate = '2020-10-06T13:39:52.774-05:00';
    originalEstimatedShipDate4.toDate = '2020-10-07T13:39:52.774-05:00';
    item4.estimatedShipDateRange = originalEstimatedShipDate4;

    newEstimatedShipDate4.fromDate = '2020-11-02T13:39:52.774-05:00';
    newEstimatedShipDate4.toDate = '2020-11-03T13:39:52.774-05:00';
    item4.newEstimatedShipDateRange = newEstimatedShipDate4;

    item4.userAcceptedDelay = false;



    shippingAddress.street = '437 Lytton';
    shippingAddress.city = 'Palo Alto';
    shippingAddress.state = 'CA';
    shippingAddress.zip = '94301';
    order.shipingAddress = shippingAddress;

    shipment1.id = 1;
    shipment1.carrier = 'USPS';
    shipment1.trackingNumber = '9400100000000000000000';
    shipment1.trackingUrl = 'https://tools.usps.com/go/TrackConfirmAction?tRef=fullpage&tLc=2&text28777=&tLabels=9400100000000000000000%2C';
    shipment1.estimatedDeliveryDate = '2020-10-06T13:39:52.774-05:00';
    shipment1.shipDate = '2020-10-02T13:39:52.774-05:00';
    shipment1.items = [100000, 200000];
    order.shipments = shipments;

    shipment2.id = 2;
    shipment2.carrier = 'USPS';
    shipment2.trackingNumber = '9400100000000000000000';
    shipment2.trackingUrl = 'https://tools.usps.com/go/TrackConfirmAction?tRef=fullpage&tLc=2&text28777=&tLabels=9400100000000000000000%2C';
    shipment2.estimatedDeliveryDate = '2020-11-06T13:39:52.774-05:00';
    shipment2.shipDate = '2020-11-02T13:39:52.774-05:00';
    shipment2.items = [300000, 400000];
    order.shipments = shipments;

    items.push(item1);
    items.push(item2);
    items.push(item3);
    items.push(item4);
    shipments.push(shipment1);
    shipments.push(shipment2);

    order.items = items;
    //order.status = Status.ordered;
    //order.status = Status[Status.ordered];
    order.status = Status[Status.shipped];
    order.complete = true;
    order.shipments = shipments;

    console.log("Order: " + JSON.stringify(order));

    return order;

  }

}
