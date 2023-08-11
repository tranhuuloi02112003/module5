import {Component, OnInit} from '@angular/core';
import {Facility} from '../../model/facility';
import {FacilityService} from '../../service/facility.service';

@Component({
  selector: 'app-list-facility',
  templateUrl: './list-facility.component.html',
  styleUrls: ['./list-facility.component.css']
})
export class ListFacilityComponent implements OnInit {
  facilitys: Facility[] = this._facilityService.findAllFacilitys();
  // tslint:disable-next-line:variable-name
  constructor(private _facilityService: FacilityService) {
  }

  ngOnInit(): void {
  }

}
