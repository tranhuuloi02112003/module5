import {Injectable} from '@angular/core';
import {Facility} from '../model/facility';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  private facilitys: Facility[] = [
    {
      facilityId: 1,
      facilityName: 'Dịch vụ 1',
      facilityArea: 1500,
      facilityStatus: 'Đang mở',
      facilityFloors: 3,
      facilityPeopleMax: 10,
      facilityRentalCost: 1200000
    },
    {
      facilityId: 1,
      facilityName: 'Dịch vụ 1',
      facilityArea: 1500,
      facilityStatus: 'Đang mở',
      facilityFloors: 3,
      facilityPeopleMax: 10,
      facilityRentalCost: 1200000
    },
    {
      facilityId: 1,
      facilityName: 'Dịch vụ 1',
      facilityArea: 1500,
      facilityStatus: 'Đang mở',
      facilityFloors: 3,
      facilityPeopleMax: 10,
      facilityRentalCost: 1200000
    },
    {
      facilityId: 1,
      facilityName: 'Dịch vụ 1',
      facilityArea: 1500,
      facilityStatus: 'Đang mở',
      facilityFloors: 3,
      facilityPeopleMax: 10,
      facilityRentalCost: 1200000
    }
  ];

  findAllFacilitys(): Facility[] {
    return this.facilitys;
  }

  saveFacility(facility: Facility): void {
    this.facilitys.unshift(facility);
  }

  constructor() {
  }
}
