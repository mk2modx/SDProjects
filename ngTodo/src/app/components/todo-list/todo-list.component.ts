import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  title = 'ngTodo';
  selected = null;

  todos: Todo[] = [
    new Todo(1, 'Go round mums', '', false),
    new Todo(2, 'Get Liz back', '', false),
    new Todo(3, 'Sort life out', '', false)
  ];

  constructor() { }

  ngOnInit() {
  }

getNumTodos = function() {
  return this.todos.length;
};

displayTodo(todo: Todo){
  return this.selected = todo;
}

displayTable() {
   this.selected = null;
}
}
