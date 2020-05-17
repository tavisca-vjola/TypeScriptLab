import { Customers, Headers } from './app.customer';
import { Customer, Order } from './app.model';
import { Orders, OrderHeader } from './app.order';

export class Logic {
  private customers: Array<Customer>;
  private customer = Customers;
  private orders: Array<Order>;
  private order = Orders;
  private headersCustomer = Headers;
  private headerOrder = OrderHeader;
  constructor() {
    this.customers = new Array<Customer>();
    this.customer.forEach((c, i) => {
      this.customers.push(
        new Customer(
          c.CustomerId,
          c.CustomerName,
          c.City,
          c.Email,
          c.ContactNumber
        )
      );
    });
    this.orders = new Array<Order>();
    this.order.forEach((o, i) => {
      this.orders.push(
        new Order(
          o.OrderId,
          o.OrderName,
          o.Date,
          o.CustomerId,
          o.OrderQuantity,
          o.Amount
        )
      );
    });
  }
  getCustomerHeaders(): Array<string> {
    return this.headersCustomer;
  }
  getOrderHeaders(): Array<string> {
    return this.headerOrder;
  }

  getOrderById(id:number){
      return this.orders.filter((o,i)=>{
          return o.OrderId===id;
      })
  }
  getCustomers(): Array<Customer> {
    return this.customers;
  }
  getOrders(): Array<Order> {
    return this.orders;
  }
  saveCustomers(c: Customer): Array<Customer> {
    this.customers.push(c);
    return this.customers;
  }
  saveOrders(o: Order): Array<Order> {
    this.orders.push(o);
    return this.orders;
  }
}
