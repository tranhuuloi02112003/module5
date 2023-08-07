import {Component, OnInit} from '@angular/core';
import {Facility} from './facility';

@Component({
  selector: 'app-list-facility',
  templateUrl: './list-facility.component.html',
  styleUrls: ['./list-facility.component.css']
})
export class ListFacilityComponent implements OnInit {
   facilitys: Facility[] = [
    {
      serviceId: 1,
      serviceName: 'Dịch vụ 1',
      serviceArea: 1500,
      serviceStatus: 'Đang mở',
      serviceFloors: 3,
      servicePeopleMax: 10,
      serviceRentalCost: 1200000
    },
    {
      serviceId: 2,
      serviceName: 'Dịch vụ 2',
      serviceArea: 1000,
      serviceStatus: 'Đã đóng',
      serviceFloors: 2,
      servicePeopleMax: 12,
      serviceRentalCost: 1300000
    },
    {
      serviceId: 1,
      serviceName: 'Dịch vụ 3',
      serviceArea: 2000,
      serviceStatus: 'Đang mở',
      serviceFloors: 5,
      servicePeopleMax: 20,
      serviceRentalCost: 2000000
    },
    {
      serviceId: 4,
      serviceName: 'Dịch vụ 4',
      serviceArea: 2000,
      serviceStatus: 'Đang sửa',
      serviceFloors: 4,
      servicePeopleMax: 10,
      serviceRentalCost: 3000000
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
