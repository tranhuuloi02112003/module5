import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  // {path: 'product/list', component: ProductListComponent},
  // {path: 'product/create', component: ProductCreateComponent},
  // {path: 'product/edit/:id', component: ProductUpdateComponent},
  // {path: 'product/delete /:id', component: ProductDeleteComponent},
  // { path: 'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) },
  // { path: 'category', loadChildren: () => import('./category/category.module').then(m => m.CategoryModule) }
  // tslint:disable-next-line:no-shadowed-variable
  {
    path: 'product',
    loadChildren: () => import('./product/product.module').then(module => module.ProductModule)
  },
  {
    path: 'category',
    loadChildren: () => import('./category/category.module').then(module => module.CategoryModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
