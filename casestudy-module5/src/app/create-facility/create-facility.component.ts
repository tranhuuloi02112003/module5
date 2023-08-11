import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-facility',
  templateUrl: './create-facility.component.html',
  styleUrls: ['./create-facility.component.css']
})
export class CreateFacilityComponent implements OnInit {
  createForm: FormGroup;

  // tslint:disable-next-line:variable-name
  constructor(private _formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.createForm = this._formBuilder.group({
      facilityId: ['', Validators.pattern('^DV-\\d{4}$')],
      facilityName: ['', Validators.required],
      facilityArea: ['', Validators.pattern('^[0-9]+\.?[0-9]*$')],
      facilityStatus: ['', Validators.required],
      facilityFloors: ['', Validators.pattern('^[0-9]+$')],
      facilityPeopleMax: ['', Validators.pattern('^[0-9]+$')],
      facilityRentalCost: ['', Validators.pattern('^[0-9]+\.?[0-9]*$')]
    });
  }

}
