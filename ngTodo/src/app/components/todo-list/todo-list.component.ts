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
  newTodo = new Todo();
  editTodo = null;

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

generateId() {
  return this.todos[this.todos.length - 1].id + 1;
}

addTodo() {
  this.newTodo.id = this.generateId();
  this.newTodo.completed = false;
  this.newTodo.description = '';
  this.todos.push(this.newTodo);
  this.newTodo = new Todo();
}

setEditTodo() {
this.editTodo = Object.assign({}, this.selected);
}

updateTodo(todo: Todo) {
  // tslint:disable-next-line: prefer-for-of
  for (let i = 0; i < this.todos.length ; i++) {

    if (this.todos[i].id === todo.id) {
      // tslint:disable-next-line: no-unused-expression
      this.todos[i].task = todo.task;
      this.todos[i].description = todo.description;
      this.todos[i].completed = todo.completed;
    }
  }
  this.resetTodo();
}
resetTodo() {
  this.editTodo = null;
}

}
