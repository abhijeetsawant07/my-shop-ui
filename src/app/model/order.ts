/**
 * Orders API
 * This is a sample Orders API
 *
 * OpenAPI spec version: 1.0.5
 * Contact: apiteam@swagger.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Status } from '../enums/status.enum';
import { Address } from './address';
import { Item } from './item';
import { Shipment } from './shipment';

export class Order { 
    id?: number;
    orderId?: number;
    items?: Array<Item>;
    /**
     * Order Status
     */
    //status?: Status;
    status?: string;
    complete?: boolean;
    shipingAddress?: Address;
    /**
     * shipments shipped to customer. Different items can arrive at different point of time, in which case the items will be in different shipments.
     */
    shipments?: Array<Shipment>;
}
