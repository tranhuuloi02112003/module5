import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {Product} from '../../model/product';
import {CategoryService} from '../../service/category.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  // tslint:disable-next-line:variable-name
  constructor(private _productService: ProductService, private _categoryService: CategoryService, private _router: Router) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    // this.products = this._productService.getAll();
    this._productService.getAll().subscribe(products => {
      this.products = products;
    });
  }


  // modal(id: number) {
  //   // @ts-ignore
  //   this._router.navigate(['/product/modal']);
  // }

}
