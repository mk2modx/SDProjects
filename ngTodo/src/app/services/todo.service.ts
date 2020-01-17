import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  newTodo = new Todo();
  todos: Todo[] = [
    new Todo(1, 'Go round mums', '', false),
    new Todo(2, 'Get Liz back', '', false),
    new Todo(3, 'Sort life out', '', false)
  ];

  constructor() { }

  index() {
    return this.todos;
  }
  create(todo) {
    this.newTodo.id = this.generateId();
    this.newTodo.task = todo.task;
    this.newTodo.completed = false;
    this.newTodo.description = '';
    this.todos.push(this.newTodo);
    this.newTodo = new Todo();
  }
  update(todo) {
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.todos.length ; i++) {

      if (this.todos[i].id === todo.id) {
        // tslint:disable-next-line: no-unused-expression
        this.todos[i].task = todo.task;
        this.todos[i].description = todo.description;
        this.todos[i].completed = todo.completed;
      }
    }
  }
  generateId() {
    return this.todos[this.todos.length - 1].id + 1;
  }
  destroy(id) {
    // tslint:disable-next-line: prefer-for-of
    console.log(id);

    for (let i = 0; i < this.todos.length ; i++) {

      if (this.todos[i].id === id) {
        // tslint:disable-next-line: no-unused-expression
        this.todos.splice(id - 1, 1);
      }
    }
  }
}
