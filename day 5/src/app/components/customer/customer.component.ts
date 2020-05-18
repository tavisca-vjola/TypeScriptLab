import { SearchService } from './../../services/app.search.service';
import { CustomerService } from './../../services/app.order.service';
import { Customers, Headers } from './../../models/app.customer';

import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Customer } from 'src/app/models/app.model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
})
export class CustomerComponent implements OnInit {
  searchText: string;
  customer: Customer;
  customers = Customers;
  headers = Headers;
  filterCustomers: Array<Customer>;
  customerIds: Array<number>;

  constructor(
    private customerService: CustomerService,
    private search: SearchService
  ) {
    this.filterCustomers = new Array<Customer>();
    this.customer = new Customer(0, '', '', '', 0);
    this.customerIds = new Array<number>();
  }

  onRowSelectedEvent(cstm: Customer): void {
    this.customer = cstm;
    this.customerService.onEmitValue([this.customer.CustomerId]);
  }

  ngOnInit(): void {
    this.filterCustomers = this.customers;
    this.search.searchValue.subscribe((data) => {
      this.searchText = data;
      this.filterCustomer();
      this.customerService.onEmitValue(this.customerIds);
    });
  }

  filterCustomer(): void {
    let ids: Array<number> = new Array<number>();
    this.filterCustomers = this.customers.filter((c) => {
      return c.CustomerName === this.searchText;
    });
    if (this.filterCustomers.length == 0) {
      this.filterCustomers = this.customers.filter((c) => {
        return c.City === this.searchText;
      });
    }
    if (this.filterCustomers.length == 0) {
      this.filterCustomers = this.customers;
    } else {
      this.filterCustomers.forEach((c) => {
        ids.push(c.CustomerId);
      });
    }

    this.customerIds = ids;
    this.customerService.onEmitValue(this.customerIds);
  }
  get filteredCustomers(): Array<Customer> {
    return this.filteredCustomers;
  }
}
