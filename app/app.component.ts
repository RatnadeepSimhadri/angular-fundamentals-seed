import { Component } from '@angular/core';
import  * as Rx from 'rxjs';
import { fromEvent } from 'rxjs/observable/fromEvent';
@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <h4>{{title}}</h4>
      <br>
      <input 
      id ="idText"
      type="text" 
      (input)="updateData($event)"
      [value]="text">  
      <br>
      <br>
      <button (click)="handleClick()">Change Text Two</button>
      <br>
      <br>
      <h4>{{texttwo}}</h4> 
    </div>
  `
})
export class AppComponent {
  title: string;
  text: string;
  texttwo: string;
  constructor(){
    this.title = 'Ultimate Angular';
    this.text = 'Placeholder Text';
  }

  updateData($event: any){
    this.texttwo = $event.target.value;
  }

  handleClick(){
    this.texttwo = "Button was Clicked";
  }

}
