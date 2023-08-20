import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryComponent } from './category.component';
import {CategoryListComponent} from './category-list/category-list.component';
import {CategoryCreateComponent} from './category-create/category-create.component';
import {CategoryDeleteComponent} from './category-delete/category-delete.component';
import {CategoryUpdateComponent} from './category-update/category-update.component';

const routes: Routes = [
  { path: 'list', component: CategoryListComponent },
  { path: 'create', component: CategoryCreateComponent },
  { path: 'delete/:id', component: CategoryDeleteComponent },
  { path: 'edit/:id', component: CategoryUpdateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
