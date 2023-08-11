import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {ListContractComponent} from './list-contract/list-contract.component';
import {UpdateContractComponent} from './update-contract/update-contract.component';
import {ListCustomerComponent} from './list-customer/list-customer.component';
import {UpdateCustomerComponent} from './update-customer/update-customer.component';
import {CreateCustomerComponent} from './create-customer/create-customer.component';
import {CreateContractComponent} from './create-contract/create-contract.component';
import {ListFacilityComponent} from './list-facility/list-facility.component';
import { CreateFacilityComponent } from './create-facility/create-facility.component';
import { UpdateFacilityComponent } from './update-facility/update-facility.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListContractComponent,
    UpdateContractComponent,
    ListCustomerComponent,
    UpdateCustomerComponent,
    CreateCustomerComponent,
    CreateContractComponent,
    ListFacilityComponent,
    CreateFacilityComponent,
    UpdateFacilityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
