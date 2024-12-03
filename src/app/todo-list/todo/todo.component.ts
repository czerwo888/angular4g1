import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgClass, NgIf} from '@angular/common';
import {Todo} from '../../shared/interfaces/todo.interface';
import {ModalComponent} from '../../shared/components/modal/modal.component';
import {EditTodoComponent} from './edit-todo/edit-todo.component';
import {TodoApiService} from '../../shared/interfaces/todo-api.service';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [
    NgClass,
    ModalComponent,
    NgIf,
    EditTodoComponent
  ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  @Input() todo!: Todo;
  @Input() i!: number;
  @Output() delete = new EventEmitter<void>();
  @Output() update = new EventEmitter<void>();

  openModal = false;
  openEdit = false;

  constructor(private todoApiService : TodoApiService) {}

  changeTodoStatus(todo: Todo) {
    todo.isCompleted = !todo.isCompleted;
    this.update.emit();
  }

  toggleModal(){
    this.openModal = !this.openModal;
  }

  onDelete(){
    this.delete.emit();
  }

  openEditComponent() {
    this.openEdit = !this.openEdit;
  }

  updateTodo(event: string) {
    this.openEditComponent();
    this.todo.name = event;
    this.todoApiService.updateTodo(this.todo).subscribe();
    console.log(event);
  }
}
