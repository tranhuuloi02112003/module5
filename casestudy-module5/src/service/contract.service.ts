import {Injectable} from '@angular/core';
import {Contract} from '../model/contract';

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  private contracts: Contract[] = [
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

  findAllContracts(): Contract[] {
    return this.contracts;
  }

  saveContract(contract: Contract): void {
    this.contracts.unshift(contract);
  }

  constructor() {
  }
}
