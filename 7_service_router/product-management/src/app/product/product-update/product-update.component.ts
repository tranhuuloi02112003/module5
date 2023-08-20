import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category.service';
import {logger} from 'codelyzer/util/logger';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  productForm: FormGroup;
  id: number;
  categories: Category[];
  product: Product;

  // tslint:disable-next-line:variable-name max-line-length
  constructor(private _formBuilder: FormBuilder, private _productService: ProductService,
              // tslint:disable-next-line:variable-name
              private _activatedRoute: ActivatedRoute, private _router: Router,
              // tslint:disable-next-line:variable-name
              private _categoryService: CategoryService
  ) {
  }

  ngOnInit(): void {
    this.categories = this.findAllCategory();
    this._activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      // const product = this._productService.findById(this.id);
    });
    this._productService.findById(this.id).subscribe(product => {
      this.product = product;
      this.productForm = this._formBuilder.group({
        id: [this.product.id],
        name: [this.product.name],
        price: [this.product.price],
        description: [this.product.description],
        category: []
      });
    });
  }

  submit() {
    const product = this.productForm.value;
    console.log(product);
    this._productService.updateProduct(product).subscribe(() => {
      alert('Update thành công');
      this._router.navigate(['/product/list']);
    }, error => console.log(error));
  }

  // @ts-ignore
  findAllCategory(): Category[] {
    return this._categoryService.getAllCategory();
  }
}
