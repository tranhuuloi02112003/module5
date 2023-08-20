import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductRoutingModule} from './product-routing.module';
import {ProductComponent} from './product.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductUpdateComponent} from './product-update/product-update.component';
import {ProductDeleteComponent} from './product-delete/product-delete.component';
import {ProductCreateComponent} from './product-create/product-create.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [ProductComponent,
    ProductListComponent,
    ProductUpdateComponent,
    ProductDeleteComponent,
    ProductCreateComponent
    // ReactiveFormsModule
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProductModule {
}
