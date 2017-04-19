import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
   title = 'Counter exercise!';
  public componentCounterValue;

  showCounter(data) {
    this.componentCounterValue = data;
   
  }
}
