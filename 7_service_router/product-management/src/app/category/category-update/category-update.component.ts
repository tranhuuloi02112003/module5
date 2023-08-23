import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {CategoryService} from '../../service/category.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Category} from '../../model/category';

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.css']
})
export class CategoryUpdateComponent implements OnInit {

  categoryForm: FormGroup;
  id: number;
  category: Category;

  constructor(private categoryService: CategoryService,
              // tslint:disable-next-line:variable-name
              private activatedRoute: ActivatedRoute, private _router: Router, private _formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getCategory(this.id);
      this.categoryForm = new FormGroup({
        id: new FormControl(),
        name: new FormControl(),
      });
    });
    // @ts-ignore
    this.categoryService.findById(this.id).subscribe(category => {
      this.category = category;
      this.categoryForm = this._formBuilder.group({
        id: [this.category.id],
        name: [this.category.name]
      });
    });
  }

  getCategory(id: number) {
    this.categoryService.findById(id).subscribe(value => {
      this.category = value;
    });
  }

  updateCategory(id: number) {
    const category = this.categoryForm.value;
    this.categoryService.updateCategory(id, category).subscribe(value => {
      console.log(value);
      this._router.navigate(['category/list']);
    });
  }

}
