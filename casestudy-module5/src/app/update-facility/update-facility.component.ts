import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-update-facility',
  templateUrl: './update-facility.component.html',
  styleUrls: ['./update-facility.component.css']
})
export class UpdateFacilityComponent implements OnInit {
  updateForm: FormGroup;

  // tslint:disable-next-line:variable-name
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.updateForm = this._formBuilder.group({
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
