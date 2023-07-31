import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  @Input() backgroundColor = '#D9D9D9';
  @Input() progressColor = '#4CAF50';
  @Input() progress = 0;

  constructor() {
  }

  ngOnInit(): void {
    this.loading();
    // dùng để khởi tạo gt mặt định cho component
  }

  loading() {
    const interval = setInterval(() => {
      this.progress = +this.progress + 5;
      if (this.progress === 100) {
        clearInterval(interval);
      }
    }, 100);
    // 1000 là mỗi 1s sẽ chạy lại 1 hàm setInterval
  }


}
