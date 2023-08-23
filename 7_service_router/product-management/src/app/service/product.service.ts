import {Injectable} from '@angular/core';
import {Product} from '../model/product';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private URL_IPA = 'http://localhost:3000/products';

  // tslint:disable-next-line:variable-name
  constructor(private _httpClien: HttpClient) {
  }

  getAll(): Observable<Product[]> {
    return this._httpClien.get<Product[]>(this.URL_IPA);
  }

  // @ts-ignore
  saveProduct(product): Observable<Product> {
    return this._httpClien.post<Product>(this.URL_IPA, product);
  }

  findById(id: number): Observable<Product> {
    return this._httpClien.get<Product>(this.URL_IPA + id);
  }

  updateProduct(product: Product) {
    return this._httpClien.put<Product>(this.URL_IPA + product.id, product);
  }

  delete(id: number) {
    return this._httpClien.delete<Product>(this.URL_IPA + '/' + id);
  }

  // this.products = this.products.filter(product => {
  //   return product.id !== id;
  // });


}
