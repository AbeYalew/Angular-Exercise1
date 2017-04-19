import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h1>Counter :</h1>
    <button (click)="decrease()"> - </button>
    <p>{{counterValue}}</p>
    <button (click)="increase()"> + </button>
  `,
  styles:['p {display:inline}']
})
export class CounterComponent{
   public counterValue: number;


  @Output() counterChange = new EventEmitter();

  constructor() {
    this.counterValue = 0;
  }

  @Input()
  set counter(value: number) {
    this.counterValue = value;
    this.counterChange.emit(this.counterValue);
  }

  increase() {
    this.counterValue++;
    this.counterChange.emit(this.counterValue);
    return false;
  }
  decrease() {
    this.counterValue--;
    this.counterChange.emit(this.counterValue);
    return false;
  }

}
