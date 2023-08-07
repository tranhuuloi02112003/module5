import {Component, OnInit} from '@angular/core';
import {Contract} from './contract';

@Component({
  selector: 'app-list-contract',
  templateUrl: './list-contract.component.html',
  styleUrls: ['./list-contract.component.css']
})
export class ListContractComponent implements OnInit {
  contracts: Contract[] = [
    {
      contractId: 1,
      contractDate: '20/02/2022',
      contractEndDate: '01/03/2023',
      contractDeposits: 200000,
      contractTotalMoney: 2000000
    },
    {
      contractId: 1,
      contractDate: '20/02/2022',
      contractEndDate: '01/03/2023',
      contractDeposits: 200000,
      contractTotalMoney: 2000000
    },
    {
      contractId: 1,
      contractDate: '20/02/2022',
      contractEndDate: '01/03/2023',
      contractDeposits: 200000,
      contractTotalMoney: 2000000
    },
    {
      contractId: 1,
      contractDate: '20/02/2022',
      contractEndDate: '01/03/2023',
      contractDeposits: 200000,
      contractTotalMoney: 2000000
    },
    {
      contractId: 1,
      contractDate: '20/02/2022',
      contractEndDate: '01/03/2023',
      contractDeposits: 200000,
      contractTotalMoney: 2000000
    }
  ];

  ngOnInit(): void {
  }
  constructor() {
  }
}
