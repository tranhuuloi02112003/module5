import {Component, OnInit} from '@angular/core';
import {Category} from '../../model/category';
import {CategoryService} from 'src/app/service/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories: Category[] = [];

  // tslint:disable-next-line:variable-name
  constructor(private _categoryService: CategoryService) {
  }

  ngOnInit() {
    this.getAllCategory();
  }

  getAllCategory() {
    this._categoryService.getAllCategory().subscribe(value => {
      this.categories = value;
    });
  }

}
