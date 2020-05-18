import { Order } from './app.model';

export const Orders: Array<Order> = new Array<Order>();
Orders.push(new Order(1120, 'paste', '12-05-2018', 1020, 2, 100));
Orders.push(new Order(1121, 'mobile', '12-08-2018', 1021, 1, 20000));
Orders.push(new Order(1122, 'charger', '05-09-2018', 1020, 6, 500));
Orders.push(new Order(1123, 'toothbrush', '02-01-2018', 1022, 3, 50));
Orders.push(new Order(1124, 'speaker', '12-10-2018', 1022, 1, 30000));
export const OrderHeader = [
  'OrderId',
  'OrderName',
  'Date',
  'CustomerId',
  'OrderQuantity',
  'Amount',
];
