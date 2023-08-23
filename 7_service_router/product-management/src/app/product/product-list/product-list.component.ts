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
  p = 1;
  displayStyle = 'none';
  idProduct: number;
  products: Product[] = [];

  // tslint:disable-next-line:variable-name
  constructor(private _productService: ProductService, private _categoryService: CategoryService, private _router: Router) {
  }

  ngOnInit(): void {
    this.getAllProduct();
  }

  getAllProduct() {
    // this.products = this._productService.getAll();
    this._productService.getAll().subscribe(products => {
      this.products = products;
    });
  }


  openPopup(id: number) {
    this.displayStyle = 'block';
    this.idProduct = id;
  }

  closePopup() {
    this.displayStyle = 'none';
  }

  delete() {
    this._productService.delete(this.idProduct).subscribe(() => {
      this.closePopup();
      this.ngOnInit();
    });
  }

}
