import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoComponent } from "./components/todo/todo.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [TodoComponent]
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
