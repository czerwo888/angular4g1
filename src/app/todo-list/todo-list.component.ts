import { Component } from '@angular/core';
import {Todo} from '../shared/interfaces/todo.interface';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  todos : Todo[] = [];
  addTodo(todo : string) : void {
    if (todo.length <= 3){
      alert('Zadanie musi mieć więcej niż 3 znaki');
      return;
    }

    this.todos.push({name: todo, isCompleted: false});
    console.log('Aktualna lista todo: ', this.todos);
  }
}
