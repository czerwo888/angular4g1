import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgClass, NgIf} from '@angular/common';
import {Todo} from '../../shared/interfaces/todo.interface';
import {ModalComponent} from '../../shared/components/modal/modal.component';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [
    NgClass,
    ModalComponent,
    NgIf
  ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  @Input() todo!: Todo;
  @Input() i!: number;
  @Output() delete = new EventEmitter<void>();

  openModal = false;

  changeTodoStatus(todo: Todo) {
    todo.isCompleted = !todo.isCompleted;
  }

  toggleModal(){
    this.openModal = !this.openModal;
  }

  onDelete(){
    this.delete.emit();
  }
}
