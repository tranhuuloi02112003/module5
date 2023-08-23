import {Injectable} from '@angular/core';
import {Product} from '../model/product';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // tslint:disable-next-line:variable-name
  constructor(private _httpClien: HttpClient) {
  }

  getAll(): Observable<Product[]> {
    return this._httpClien.get<Product[]>('http://localhost:3000/products');
  }

  // @ts-ignore
  saveProduct(product): Observable<Product> {
    return this._httpClien.post<Product>('http://localhost:3000/products', product);
  }

  findById(id: number): Observable<Product> {
    return this._httpClien.get<Product>('http://localhost:3000/products/' + id);
  }

  updateProduct(product: Product) {
    return this._httpClien.put<Product>('http://localhost:3000/products/' + product.id, product);
  }

  delete(id: number) {
    return this._httpClien.delete<Product>('http://localhost:3000/products/' + id);
  }
  // this.products = this.products.filter(product => {
  //   return product.id !== id;
  // });


}
