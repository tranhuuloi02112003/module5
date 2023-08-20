import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CategoryRoutingModule} from './category-routing.module';
import {CategoryComponent} from './category.component';
import {CategoryListComponent} from './category-list/category-list.component';
import {CategoryUpdateComponent} from './category-update/category-update.component';
import {CategoryCreateComponent} from './category-create/category-create.component';
import {CategoryDeleteComponent} from './category-delete/category-delete.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    CategoryComponent,
    CategoryListComponent,
    CategoryUpdateComponent,
    CategoryCreateComponent,
    CategoryDeleteComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    ReactiveFormsModule
  ]
})
export class CategoryModule {
}
