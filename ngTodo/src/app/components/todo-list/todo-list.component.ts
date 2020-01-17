import { TodoService } from './../../services/todo.service';
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

  todos: Todo[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todos = this.todoService.index();
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

// generateId() {
//   return this.todos[this.todos.length - 1].id + 1;
// }

addTodo() {
 this.todoService.create(this.newTodo);
 this.todos = this.todoService.index();
}


setEditTodo() {
this.editTodo = Object.assign({}, this.selected);
}

updateTodo(todo: Todo) {
  // tslint:disable-next-line: prefer-for-of
  this.todoService.update(todo);

  this.resetTodo();
  this.todos = this.todoService.index();
}

resetTodo() {
  this.editTodo = null;
}
deleteTodo(id) {
this.todoService.destroy(id);
}


}
