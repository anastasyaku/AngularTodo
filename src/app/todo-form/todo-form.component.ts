import { Component, OnInit } from '@angular/core';
import {Todo, TodoServiceService} from '../shared/todo-service.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  title = '';

  constructor(public todoS: TodoServiceService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  AddTodo(){
  const todo: Todo = {
    title: this.title,
    id: Date.now(),
    complete: false,
    date : new Date(),

  };

  this.todoS.Add(todo);
  this.title = '';

  }

}
