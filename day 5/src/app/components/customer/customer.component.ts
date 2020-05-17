import { Logic } from './../../models/app.logic';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Customer } from 'src/app/models/app.model';
import { Service } from 'src/app/services/app.table.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
})
export class CustomerComponent implements OnInit {
  searchText: string;
  headers: Array<string>;
  customers: Array<Customer>;
  private logic: Logic;

  constructor(private service: Service) {
    this.customers = new Array<Customer>();
    this.logic = new Logic();
    this.headers = new Array<string>();

  }

  onRowSelectedEvent(r: Customer) {
    // emit() method will emit an event
    this.logic.getOrderById(r.CustomerId);
  }
  ngOnInit(): void {
    this.customers = this.logic.getCustomers();
    for (let c in this.customers) {
      this.headers.push(c);
    }
    this.headers = this.logic.getCustomerHeaders();
    this.searchText = this.service.emitValue;
  }
}
