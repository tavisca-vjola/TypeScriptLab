import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/app.model';
import { Logic } from 'src/app/models/app.logic';

@Component({
  selector: 'app-order',
  templateUrl: 'order.component.html',
})
export class OrderComponent implements OnInit {
  searchText: string;
  headers: Array<string>;
  orders: Array<Order>;
  private logic: Logic;

  constructor() {
    this.orders = new Array<Order>();
    this.logic = new Logic();
    this.headers = new Array<string>();
  }

  onRowSelectedEvent(r: Order) {
    // emit() method will emit an event
    console.log(r.CustomerId);
  }
  ngOnInit(): void {
    this.orders = this.logic.getOrders();
    for (let c in this.orders) {
      this.headers.push(c);
    }
    this.headers = this.logic.getOrderHeaders();
  }
}
