import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CategoryService} from '../../service/category.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {
  categoryForm: FormGroup;

  // tslint:disable-next-line:variable-name
  constructor(private _categoryService: CategoryService, private _formBuilder: FormBuilder, private _router: Router) {
  }

  ngOnInit() {
    this.categoryForm = this._formBuilder.group({
      id: [''],
      name: ['']
    });
  }

  submit() {
    // const category = this.categoryForm.value;
    // this._categoryService.saveCategory(category);
    // this.categoryForm.reset();
    const category = this.categoryForm.value;
    this._categoryService.saveCategory(category).subscribe(() => {
      this.categoryForm.reset();
      alert('Tạo thành công');
      this._router.navigate(['/category/list']);
    }, e => {
      console.log(e);
    });
  }

}
