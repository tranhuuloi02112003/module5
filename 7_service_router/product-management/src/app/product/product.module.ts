import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductRoutingModule} from './product-routing.module';
import {ProductComponent} from './product.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductUpdateComponent} from './product-update/product-update.component';
import {ProductDeleteComponent} from './product-delete/product-delete.component';
import {ProductCreateComponent} from './product-create/product-create.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ModalDeleteProductComponent } from './modal-delete-product/modal-delete-product.component';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [ProductComponent,
    ProductListComponent,
    ProductUpdateComponent,
    ProductDeleteComponent,
    ProductCreateComponent,
    ModalDeleteProductComponent
    // ReactiveFormsModule
  ],
    imports: [
        CommonModule,
        ProductRoutingModule,
        ReactiveFormsModule,
        NgxPaginationModule
    ]
})
export class ProductModule {
}
