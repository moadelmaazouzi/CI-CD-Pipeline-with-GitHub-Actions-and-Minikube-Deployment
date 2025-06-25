import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'mon-projet';
  counter :number =0;
  increment(){
    this.counter++;
  }
  decrement(){
    this.counter--;
  }
  reset(){
    this.counter=0;
  }

}
