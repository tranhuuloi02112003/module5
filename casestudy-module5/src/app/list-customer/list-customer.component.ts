import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/customer';
import {CustomerService} from '../../service/customer.service';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  customers: Customer[] = this._customerService.findAllCustomers();

  // tslint:disable-next-line:variable-name
  constructor(private _customerService: CustomerService) {
  }

  ngOnInit(): void {
  }

}
