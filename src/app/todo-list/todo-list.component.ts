import { Component } from '@angular/core';
import {Todo} from '../shared/interfaces/todo.interface';
import {NgClass, NgForOf, NgIf, NgStyle} from '@angular/common';
import {AlertComponent} from '../shared/components/alert/alert.component';
import {AddTodoFormComponent} from './add-todo-form/add-todo-form.component';
import {TodoComponent} from './todo/todo.component';
import { TodoApiService } from '../shared/interfaces/todo-api.service';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    NgStyle,
    NgClass,
    AlertComponent,
    AddTodoFormComponent,
    TodoComponent
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  ErrorMessage = '';
  todos : Todo[] = [];

  constructor(private todoApiService : TodoApiService) {}

  ngOnInit() {
    this.todoApiService.getTodos().subscribe(data => {
      this.todos = data;
    });
  }

  addTodo(todo : string) : void {
    if (todo.length <= 3){
      this.ErrorMessage = 'Zadanie musi mieć więcej niż 3 znaki';
      return;
    }

    this.todoApiService.addTodo({name: todo, isCompleted: false}).subscribe(data => {
      this.todos.push(data);
    });

    console.log('Aktualna lista todo: ', this.todos);
  }

  clearErrorMessage() {
    this.ErrorMessage = '';
  }

  deleteTodo(i: number) {
    this.todoApiService.deleteTodo(this.todos[i].id).subscribe(() => {
      this.todos.splice(i, 1);
    });
  }

  updateCheckbox(todo: Todo) {
    this.todoApiService.updateTodo(todo).subscribe();
  }
}
