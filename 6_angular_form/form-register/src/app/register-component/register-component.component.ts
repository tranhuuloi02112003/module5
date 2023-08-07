import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponentComponent implements OnInit {
  registerForm: FormGroup;

  // tslint:disable-next-line:variable-name
  constructor(private _formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
     function ConfirmedValidator(controlName: string, matchingControlName: string) {
      return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
          return;
        }

        if (control.value !== matchingControl.value) {
          matchingControl.setErrors({confirmedValidator: true});
        } else {
          matchingControl.setErrors(null);
        }
      };
    }

     this.registerForm = this._formBuilder.group({
        email: ['', [Validators.email, Validators.required]],
        country: ['', [Validators.required]],
        age: ['', [Validators.required, Validators.min(18)]],
        gender: ['', [Validators.required]],
        phone: ['', [Validators.required, Validators.pattern('^\\+84\\d{9,10}$')]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
      }, {
        validator: ConfirmedValidator('password', 'confirmPassword')
      }
    );
  }

  onSubmit() {
    console.log(this.registerForm.value);
  }


}
