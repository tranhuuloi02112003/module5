import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {CategoryService} from '../../service/category.service';
import {Category} from '../../model/category';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  productForm: FormGroup;
  categories: Category[];

  // tslint:disable-next-line:variable-name
  constructor(private _formBuilder: FormBuilder, private _productService: ProductService,
              // tslint:disable-next-line:variable-name
              private _categoryService: CategoryService, private _router: Router) {
  }

  ngOnInit(): void {
    this.categories = this.getAllCategory();
    this.productForm = this._formBuilder.group({
      id: [],
      name: [],
      price: [],
      description: [],
      category: []
    });
  }

  submit() {
    const product = this.productForm.value;
    // @ts-ignore
    this._productService.saveProduct(product).subscribe(() => {
      this.productForm.reset();
      alert('Tạo thành công');
      this._router.navigate(['/product/list']);
    }, e => {
      console.log(e);
    });
  }

  getAllCategory(): Category[] {
    return this._categoryService.getAllCategory();
  }

}
