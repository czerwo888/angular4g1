import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-add-todo-form',
  standalone: true,
  imports: [],
  templateUrl: './add-todo-form.component.html',
  styleUrl: './add-todo-form.component.css'
})
export class AddTodoFormComponent {
  @Output() addTodoEmit =new EventEmitter<string>();

  addTodo(value: string) {
    this.addTodoEmit.emit(value);
  }
}
