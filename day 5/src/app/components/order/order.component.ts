import { CustomerService } from './../../services/app.order.service';
import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/app.model';
import { Orders, OrderHeader } from 'src/app/models/app.order';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
})
export class OrderComponent implements OnInit {
  headers = OrderHeader;
  order: Order;
  orders = Orders;
  customerIds: Array<number>;
  filteredOrders: Array<Order>;

  constructor(private customerService: CustomerService) {
    this.filteredOrders = new Array<Order>();
    this.order = new Order(0, '', '', 0, 0, 0);
    this.customerIds = [];
  }

  ngOnInit(): void {
    this.customerService.emitValue.subscribe((data) => {
      this.customerIds = data;
    });
  }
  onRowSelectedEvent(ord: Order): void {
    console.log(ord);
  }
  get filteredOrder(): Array<Order> {
    console.log(this.filteredOrders);
    this.filteredOrders = new Array<Order>();
    if (this.customerIds.length > 0) {
      this.filteredOrders = this.orders.filter((o) => {
        return this.customerIds.includes(o.CustomerId);
      });
    } else {
      this.filteredOrders = this.orders;
    }
    return this.filteredOrders;
  }
}
