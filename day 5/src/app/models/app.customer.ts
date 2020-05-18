import { Customer } from './app.model';

export const Customers: Array<Customer> = new Array<Customer>();
Customers.push(
  new Customer(1021, 'flash', 'Andhra', 'flash@gmail.com', 90707878287)
);
Customers.push(
  new Customer(1022, 'godspeed', 'Andhra', 'godspeed@gmail.com', 92341455223)
);
Customers.push(
  new Customer(1023, 'savitor', 'Andhra', 'savitor@gmail.com', 9124151255)
);
Customers.push(
  new Customer(1024, 'zoom', 'Andhra', 'zoom@gmail.com', 91245788444)
);
Customers.push(
  new Customer(
    1025,
    'stormbreaker',
    'Andhra',
    'stormbreaker@gmail.com',
    2346344678
  )
);

export const Headers = [
  'CustomerId',
  'CustomerName',
  'City',
  'Email',
  'ContactNumber',
];
