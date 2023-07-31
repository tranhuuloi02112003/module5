import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ListContractComponent } from './list-contract/list-contract.component';
import { AddContractComponent } from './add-contract/add-contract.component';
import { UpdateContractComponent } from './update-contract/update-contract.component';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { UpdateServiceComponent } from './update-service/update-service.component';
import { CreateServiceComponent } from './create-service/create-service.component';
import { ListServiceComponent } from './list-service/list-service.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListContractComponent,
    AddContractComponent,
    UpdateContractComponent,
    ListCustomerComponent,
    UpdateCustomerComponent,
    CreateCustomerComponent,
    UpdateServiceComponent,
    CreateServiceComponent,
    ListServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
