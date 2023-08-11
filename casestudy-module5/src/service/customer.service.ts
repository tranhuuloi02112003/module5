import {Injectable} from '@angular/core';
import {Customer} from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private customers: Customer[] = [
    {
      customerId: 1,
      customerName: 'Khách hàng 1',
      customerBirthday: '11/11/2000',
      customerCMND: '0562636223',
      customerPhone: '032712512',
      customerEmail: 'bbbbbb@email.com',
      customerAddress: 'Đà nẳng'
    },
    {
      customerId: 2,
      customerName: 'Khách hàng 2',
      customerBirthday: '12/12/2002',
      customerCMND: '08512372322',
      customerPhone: '09736432',
      customerEmail: 'abcxyz@email.com',
      customerAddress: 'Quảng nam'
    },
    {
      customerId: 3,
      customerName: 'Khách hàng 3',
      customerBirthday: '01/01/2005',
      customerCMND: '09092336223',
      customerPhone: '0832712512',
      customerEmail: 'aaaaaa@email.com',
      customerAddress: 'Tam kỳ'
    }, {
      customerId: 4,
      customerName: 'Khách hàng 4',
      customerBirthday: '05/05/2002',
      customerCMND: '035346722',
      customerPhone: '086472447',
      customerEmail: 'abcxyz@email.com',
      customerAddress: 'Hà nội'
    }, {
      customerId: 5,
      customerName: 'Khách hàng 5',
      customerBirthday: '09/09/2002',
      customerCMND: '049646737245',
      customerPhone: '03211112',
      customerEmail: 'oiiiii@email.com',
      customerAddress: 'Đà nẳng}'
    }];

  findAllCustomers(): Customer[] {
    return this.customers;
  }

  saveCustomer(customer: Customer): void {
    this.customers.unshift(customer);
  }

  constructor() {
  }
}
