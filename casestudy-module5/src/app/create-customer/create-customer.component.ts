import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../service/customer.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  createForm: FormGroup;

  // tslint:disable-next-line:variable-name
  constructor(private _formBuilder: FormBuilder, private _customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.createForm = this._formBuilder.group({
      customerId: ['', Validators.pattern('^KH-\\d{4}$')],
      // , Validators.pattern('^KH-d{4}$')
      customerName: ['', Validators.required],
      customerBirthday: ['', Validators.pattern('^\\d{4}\\-\\d{2}\\-\\d{2}$')],
      customerCMND: ['', Validators.pattern('^\\d{9}$|^\\d{12}$')],
      customerPhone: ['', Validators.pattern('^090\\d{7}$|^091\\d{7}$')], // |^(84)+90\d{7}$|^(84)+91\d{7}$
      customerEmail: ['', Validators.email],
      customerAddress: ['', Validators.required]
    });
  }

  onCreate() {
    this._customerService.saveCustomer(this.createForm.value);
  }
}
