import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-edit-todo',
  standalone: true,
  imports: [],
  templateUrl: './edit-todo.component.html',
  styleUrl: './edit-todo.component.css'
})
export class EditTodoComponent {
  @Input() nameTodo!: string;
  @Output() edit = new EventEmitter<string>();

  editTodo(value: string) {
    this.edit.emit(value);
  }
}
