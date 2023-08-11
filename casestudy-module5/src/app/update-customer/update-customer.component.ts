import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../service/customer.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
  updateForm: FormGroup;

  // tslint:disable-next-line:variable-name
  constructor(private _formBuilder: FormBuilder, private _customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.updateForm = this._formBuilder.group({
      customerId: ['', Validators.pattern('^KH-\\d{4}$')],
      // , Validators.pattern('^KH-d{4}$')
      customerName: ['', Validators.required],
      customerBirthday: ['', Validators.pattern('^(0[1-9]|[12][0-9]|3[01])\\/(0[1-9]|1[012])\\/(19|20)$')],
      customerCMND: ['', Validators.pattern('^\\d{9}$|^\\d{12}$')],
      customerPhone: ['', Validators.pattern('^090\\d{7}$|^091\\d{7}$')], // |^(84)+90\d{7}$|^(84)+91\d{7}$
      customerEmail: ['', Validators.email],
      customerAddress: ['', Validators.required]
    });
  }

  onUpdate() {
    console.log(this.updateForm.value);
  }
}
