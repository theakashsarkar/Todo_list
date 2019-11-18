import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'todolist';
  constructor(){
    this.changeMathod("akash");
  }
  changeMathod(name:string):void{
    this.title = name;

  }

}
