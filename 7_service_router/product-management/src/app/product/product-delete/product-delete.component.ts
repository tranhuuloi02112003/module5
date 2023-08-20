import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  id: number;
  product: Product;

  // tslint:disable-next-line:variable-name max-line-length
  constructor(private _formBuilder: FormBuilder, private _productService: ProductService, private _activatedRoute: ActivatedRoute, private _router: Router) {
  }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
        this.id = +paramMap.get('id');
      }
    );

    this._productService.findById(this.id).subscribe(product => {
      this.product = product;
    });
    // console.log(this.product);
  }

  deleteProduct(id: number) {
    this._productService.delete(this.id).subscribe(() => {
      alert('Delete thành công');
      this._router.navigate(['/product/list']);
    }, error => {
      console.log(error);
    });
  }
}
