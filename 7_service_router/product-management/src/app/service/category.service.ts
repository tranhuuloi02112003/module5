import {Injectable} from '@angular/core';
import {Category} from '../model/category';
import {Observable} from 'rxjs';
import {Product} from '../model/product';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories: Category[] = [{
    id: 1,
    name: 'IPhone'
  }, {
    id: 2,
    name: 'Samsung',
  }, {
    id: 3,
    name: 'LG',
  }];
  private URL_API = 'http://localhost:3000/categories';

  // tslint:disable-next-line:variable-name
  constructor(private _httpClien: HttpClient) {
  }

  getAllCategory(): Observable<Category[]> {
    return this._httpClien.get<Category[]>(this.URL_API);
  }

  // @ts-ignore
  saveCategory(category): Observable<Category> {
    return this._httpClien.post<Category>(this.URL_API, category);
  }

  findById(id: number): Observable<Category> {
    return this._httpClien.get<Product>(this.URL_API + '/' + id);
  }

  updateCategory(id: number, category: Category) {
    return this._httpClien.put<Product>(this.URL_API + '/' + category.id, category);
  }

  deleteCategory(id: number) {
    return this._httpClien.delete<Product>(this.URL_API + '/' + + id);
  }
}
