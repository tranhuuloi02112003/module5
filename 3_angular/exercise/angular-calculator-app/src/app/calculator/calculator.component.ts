import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  number1 = 0;
  number2 = 0;
  result: number;

  addition() {
    this.result = this.number1 + this.number2;
  }
  subtraction() {
    this.result = this.number1 - this.number2;
  }
  multiplication() {
    this.result = this.number1 * this.number2;
  }
  division() {
    this.result = this.number1 / this.number2;
  }

  constructor() {
  }

  ngOnInit(): void {
  }



  // display: string = '';
  //
  // appendToDisplay(value: string) {
  //   this.display += value;
  // }
  //
  // clearDisplay() {
  //   this.display = '';
  // }
  //
  // calculate() {
  //   try {
  //     this.display = eval(this.display);
  //   } catch (e) {
  //     this.display = 'Error';
  //   }
  // }

}
