import {Component, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {IRatingUnit} from '../irating-unit';

@Component({
  selector: 'app-rating-bar-component',
  templateUrl: './rating-bar-component.component.html',
  styleUrls: ['./rating-bar-component.component.css']
})
export class RatingBarComponentComponent implements OnInit, OnChanges {
  @Input() max = 10;
  @Input() ratingValue = 5;
  @Input() showRatingValue = true;
  // @ts-ignore
  @Output() rateChange = new EventEmitter<number>();
  ratingUnits: Array<IRatingUnit> = [];

  constructor() {
  }


  ngOnChanges(changes: SimpleChanges): void {
    if ('max' in changes) {
      // kiểm tra xem max có change k
      let max = changes.max.currentValue;
      // lấy gt ht của max
      max = typeof max === 'undefined' ? 5 : max;
      this.max = max;
      this.calculate(max, this.ratingValue);
      // để tính toán lại giá trị rating dựa trên giá trị mới của thuộc tính max
    }
  }

  calculate(max, ratingValue) {
    this.ratingUnits = Array.from({length: max},
      (_, index) => ({
        value: index + 1,
        active: index < ratingValue
      }));
    // chúng ta tạo một mảng mới có độ dài bằng giá trị của tham số max
    // Mỗi phần tử của mảng này là một đối tượng có hai thuộc tính là value và active
    // Thuộc tính value của mỗi phần tử được gán giá trị bằng chỉ số của phần tử đó cộng thêm 1.
    // Thuộc tính active của mỗi phần tử được gán giá trị là true nếu chỉ số của phần tử đó nhỏ
    // hơn giá trị của tham số ratingValue, ngược lại được gán giá trị là false.
    // Cuối cùng, chúng ta gán giá trị của mảng mới này cho thuộc tính this.ratingUnits.
    // Tóm lại, hàm này được sử dụng để tạo ra một mảng mới chứa các đối tượng biểu diễn cho các
    // đơn vị rating, với giá trị và trạng thái active được xác định dựa trên các tham số đầu vào.
  }

  ngOnInit(): void {
    // chạy sau khi hàm constructor và hàm ngOnchange được thực hiện
    this.calculate(this.max, this.ratingValue);
  }

  select(index) {
    this.ratingValue = index + 1;
    this.ratingUnits.forEach((item, idx) => item.active = idx < this.ratingValue);
    this.rateChange.emit(this.ratingValue);
  }

  enter(index) {
    this.ratingUnits.forEach((item, idx) => item.active = idx <= index);
  }

  reset() {
    this.ratingUnits.forEach((item, idx) => item.active = idx < this.ratingValue);
  }


}
