import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListContractComponent} from './list-contract/list-contract.component';
import {ListCustomerComponent} from './list-customer/list-customer.component';
import {ListFacilityComponent} from './list-facility/list-facility.component';
import {CreateContractComponent} from './create-contract/create-contract.component';
import {CreateCustomerComponent} from './create-customer/create-customer.component';
import {CreateFacilityComponent} from './create-facility/create-facility.component';
import {UpdateContractComponent} from './update-contract/update-contract.component';
import {UpdateCustomerComponent} from './update-customer/update-customer.component';
import {UpdateFacilityComponent} from './update-facility/update-facility.component';


const routes: Routes = [
  {path: 'contract/list', component: ListContractComponent},
  {path: 'customer/list', component: ListCustomerComponent},
  {path: 'facility/list', component: ListFacilityComponent},
  {path: 'contract/create', component: CreateContractComponent},
  {path: 'customer/create', component: CreateCustomerComponent},
  {path: 'facility/create', component: CreateFacilityComponent},
  {path: 'contract/update', component: UpdateContractComponent},
  {path: 'customer/update', component: UpdateCustomerComponent},
  {path: 'facility/update', component: UpdateFacilityComponent}
  // {path: 'facility/delete/:id', component: UpdateFacilityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
