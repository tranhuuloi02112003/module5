import {Component, Input, OnChanges, OnInit, Output} from '@angular/core';
import {EventEmitter} from 'protractor';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit, OnChanges {
  message = '';
  remainingTime: number;
  @Input() seconds = 11;
  // @ts-ignore
  @Output() finish = new EventEmitter<boolean>();
  private intervalId = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   if ('seconds' in changes) {
  //     let v = changes.seconds.currentValue;
  //   }
  // }

}
