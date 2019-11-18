import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from 'src/app/modules/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
  constructor(private todoservice:TodoService) { }

  ngOnInit() {
  }  
  //set Dynamic Classes
  setClasses() {
    let classes = {
      todo:true,
      'is-complete': this.todo.completed
    }
  return classes;
  }
  onToggle(todo){
    todo.completed = !todo.completed;
    this.todoservice.toggleCompleted(todo).subscribe(todo=>{
      console.log(todo)
    })
  }

  onDelete(todo) {
    this.deleteTodo.emit(todo);
  }

}
