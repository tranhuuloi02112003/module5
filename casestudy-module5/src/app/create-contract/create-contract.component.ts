import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../service/customer.service';

@Component({
  selector: 'app-create-contract',
  templateUrl: './create-contract.component.html',
  styleUrls: ['./create-contract.component.css']
})
export class CreateContractComponent implements OnInit {
  createForm: FormGroup;

  // tslint:disable-next-line:variable-name
  constructor(private _formBuilder: FormBuilder, private _customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.createForm = this._formBuilder.group({
      contractId: ['', Validators.pattern('^HD-\\d{4}$')],
      contractDate: ['', Validators.pattern('^\\d{4}\\-\\d{2}\\-\\d{2}$')],
      contractEndDate: ['', Validators.pattern('^\\d{4}\\-\\d{2}\\-\\d{2}$')],
      contractDeposits: ['', Validators.pattern('^[0-9]+\.?[0-9]*$')],
      contractTotalMoney: [''] // |^(84)+90\d{7}$|^(84)+91\d{7}$
    });
  }

  onSubmit() {
    console.log(this.createForm.value);
  }
}
