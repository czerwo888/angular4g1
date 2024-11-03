import { Component } from '@angular/core';
import {Todo} from '../shared/interfaces/todo.interface';
import {NgForOf, NgIf, NgStyle} from '@angular/common';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    NgStyle
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  ErrorMessage = '';
  todos : Todo[] = [];
  addTodo(todo : string) : void {
    if (todo.length <= 3){
      this.ErrorMessage = 'Zadanie musi mieć więcej niż 3 znaki';
      return;
    }

    this.todos.push({name: todo, isCompleted: false});
    console.log('Aktualna lista todo: ', this.todos);
  }

  // changeTodoStatus(i: number) {
  //   this.todos[i].isCompleted = !this.todos[i].isCompleted;
  // }
  changeTodoStatus(todo: Todo) {
    todo.isCompleted = !todo.isCompleted;
  }

  clearErrorMessage() {
    this.ErrorMessage = '';
  }
}
