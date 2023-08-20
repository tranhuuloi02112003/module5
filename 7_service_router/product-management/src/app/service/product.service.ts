import {Injectable} from '@angular/core';
import {Product} from '../model/product';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // products: Product[] = [{
  //   id: 1,
  //   name: 'IPhone 12',
  //   price: 2400000,
  //   description: 'New'
  // }, {
  //   id: 2,
  //   name: 'IPhone 11',
  //   price: 1560000,
  //   description: 'Like new'
  // }, {
  //   id: 3,
  //   name: 'IPhone X',
  //   price: 968000,
  //   description: '97%'
  // }, {
  //   id: 4,
  //   name: 'IPhone 8',
  //   price: 7540000,
  //   description: '98%'
  // }, {
  //   id: 5,
  //   name: 'IPhone 11 Pro',
  //   price: 1895000,
  //   description: 'Like new'
  // }];

  // tslint:disable-next-line:variable-name
  constructor(private _httpClien: HttpClient) {
  }

  getAll(): Observable<Product[]> {
    return this._httpClien.get<Product[]>('http://localhost:3000/' + 'products');
  }

  // @ts-ignore
  saveProduct(product): Observable<Product> {
    return this._httpClien.post<Product>('http://localhost:3000/' + 'products', product);
  }

  findById(id: number): Observable<Product> {
    return this._httpClien.get<Product>('http://localhost:3000/' + 'products/' + id);
  }

  updateProduct(product: Product) {
    return this._httpClien.put<Product>('http://localhost:3000/' + 'products/' + product.id, product);
  }

  delete(id: number) {
    // this.products = this.products.filter(product => {
    //   return product.id !== id;
    // });
    return this._httpClien.delete<Product>('http://localhost:3000/' + 'products/' + id);
  }


}
